import 'dart:html';

import 'model/phrase.dart';
import 'model/section.dart';
import 'pool/script_pool.dart';
import 'view/view_service.dart';

class DuoAudioPlayer {
  Section _currentSection;
  Phrase _currentPhrase;
  bool _nowPlaying;

  bool get nowPlaying => _nowPlaying;

  final AudioElement _audioElement;

  DuoAudioPlayer()
      : _audioElement = AudioElement(),
        _currentSection = ScriptPool().getSection(1),
        _currentPhrase = ScriptPool().getSection(1).getPhrase(0),
        _nowPlaying = false {
    _audioElement.onEnded.listen((_e) {
      skipNext();
    });

    //シークバー
    _audioElement.onTimeUpdate.listen((event) {
      var percentage =
          (_audioElement.currentTime / _audioElement.duration) * 100;
      querySelector('.seekbar-gauge')?.style.width = '$percentage%';
    });

    var seekbar = querySelector('.seekbar');
    seekbar?.onClick.listen((MouseEvent event) {
      var clickX = event.client.x;

      var clientRect = seekbar.getBoundingClientRect();
      var positionX = clientRect.left + window.pageXOffset;

      var x = clickX - positionX;

      var width = seekbar.clientWidth;
      querySelector('.seekbar-gauge')?.style.width = '${(x / width) * 100}%';
      _audioElement.currentTime = _audioElement.duration * (x / width);
    });
  }

  void toSection(Section section) {
    _currentSection = section;
    _currentPhrase = section.getPhrase(0);
    _audioElement.currentTime = 0;
    if (_nowPlaying) stop();

    ViewService.updateNavBar(_currentSection, _currentPhrase);
    ViewService.updateSentenceBox(_currentPhrase);
  }

  void toPhrase(Phrase phrase, {bool continuePlaying = true}) {
    _currentSection = ScriptPool().getSection(phrase.sectionNumber);
    _currentPhrase = phrase;
    _audioElement.currentTime = 0;
    if (continuePlaying) play();

    ViewService.updateNavBar(_currentSection, _currentPhrase);
    ViewService.updateSentenceBox(_currentPhrase);
  }

  void stop() {
    _audioElement.pause();

    _nowPlaying = false;
    ViewService.updatePlayButton(_nowPlaying);
    ViewService.updateSelectPhraseButton(_currentPhrase, _nowPlaying);
  }

  void play({double time = 0}) {
    _audioElement.src =
        'resources/sound_sources/${_currentPhrase.phraseNumber}.mp3';
    _audioElement.currentTime = time;
    _audioElement.play();

    _nowPlaying = true;

    ViewService.updatePlayButton(_nowPlaying);
    ViewService.updateSelectPhraseButton(_currentPhrase, _nowPlaying);
  }

  void skipNext() {
    //このSectionの最後のPhraseなら、次のSectionに
    if (_currentPhrase.phraseNumber ==
        _currentSection.phraseList.last.phraseNumber) {
      //最後のSectionだったら最初のSectionに
      if (_currentSection.sectionNumber ==
          ScriptPool().sectionList.last.sectionNumber) {
        toSection(ScriptPool().getSection(1));
      } else {
        var nextSectionNumber = _currentSection.sectionNumber + 1;
        toSection(ScriptPool().getSection(nextSectionNumber));
      }
    } else {
      toPhrase(ScriptPool().getPhrase(_currentPhrase.phraseNumber + 1),
          continuePlaying: _nowPlaying);
    }
  }

  void skipPrevious() {
    //このSectionの最初なら、前のSectionに
    if (_currentPhrase.phraseNumber ==
        _currentSection.phraseList.first.phraseNumber) {
      //最初のSectionだったら戻す
      if (_currentSection.sectionNumber ==
          ScriptPool().sectionList.first.sectionNumber) {
        toSection(ScriptPool().getSection(1));
      } else {
        var previousSectionNumber = _currentSection.sectionNumber - 1;
        toSection(ScriptPool().getSection(previousSectionNumber));
      }
    } else {
      toPhrase(ScriptPool().getPhrase(_currentPhrase.phraseNumber - 1),
          continuePlaying: _nowPlaying);
    }
  }
}
