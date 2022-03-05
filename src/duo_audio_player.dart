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
        _nowPlaying = false;

  void toSection(Section section) {
    _currentSection = section;
    _currentPhrase = section.getPhrase(0);
    _audioElement.currentTime = 0;

    ViewService.updateNavBar(_currentSection, _currentPhrase);
    //_BookImageController.update(_currentPhrase);
    //_ScriptContextController.update(phrase);
  }

  void toPhrase(Phrase phrase) {
    _currentSection = ScriptPool().getSection(phrase.sectionNumber);
    _currentPhrase = phrase;
    _audioElement.currentTime = 0;

    ViewService.updateNavBar(_currentSection, _currentPhrase);
    //_BookImageController.update(_currentPhrase);
    //_ScriptContextController.update(phrase);
  }

  void play({double time = 0}) {
    if (_nowPlaying) {
      _audioElement.pause();

      _nowPlaying = false;
    } else {
      _audioElement.src =
          'resources/sound_sources/${_currentPhrase.phraseNumber}.mp3';
      _audioElement.currentTime = time;
      _audioElement.play();

      _nowPlaying = true;
    }

    ViewService.updatePlayButton(_nowPlaying);
    ViewService.updateSentenceBox(_currentPhrase);
    ViewService.updateSelectPhraseButton(_currentPhrase, _nowPlaying);
  }

  void skipNext() {
    //このSectionの最後のPhraseなら、次のセクションに
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
      toPhrase(ScriptPool().getPhrase(_currentPhrase.phraseNumber + 1));
    }

    if (_nowPlaying) play();
  }

  void skipPrevious() {
    //最初のSectionだったら戻す
    if (_currentSection.sectionNumber ==
        ScriptPool().sectionList.first.sectionNumber) {
      toSection(ScriptPool().getSection(1));
    } else {
      var previousSectionNumber = _currentSection.sectionNumber - 1;
      toSection(ScriptPool().getSection(previousSectionNumber));
    }

    if (_nowPlaying) play();
  }
}
