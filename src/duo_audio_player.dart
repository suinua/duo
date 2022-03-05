import 'dart:html';

import 'model/phrase.dart';
import 'model/section.dart';
import 'pool/script_pool.dart';

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

    //_BookImageController.update(_currentPhrase);
    //_ScriptContextController.update(phrase);
  }

  void toPhrase(Phrase phrase) {
    _currentSection = ScriptPool().getSection(phrase.sectionNumber);
    _currentPhrase = phrase;
    _audioElement.currentTime = 0;

    //_BookImageController.update(_currentPhrase);
    //_ScriptContextController.update(phrase);
  }

  void play({double time = 0}) {
    if (_nowPlaying) {
      _audioElement.pause();

      _nowPlaying = false;
    } else {
      _audioElement.src = 'resources/sound_sources/$_currentPhrase.mp3';
      _audioElement.currentTime = time;
      _audioElement.play();

      _nowPlaying = true;
    }
  }

  void skipNext() {
    //最後のPhraseだったら最初のSectionに
    if (_currentSection.sectionNumber ==
        _currentSection.phraseList.last.sectionNumber) {
      toSection(ScriptPool().getSection(1));
    } else {
      var nextSectionNumber = _currentSection.sectionNumber + 1;
      toSection(ScriptPool().getSection(nextSectionNumber));
    }

    if (_nowPlaying) play();
  }

  void skipPrevious() {
    //最初のSectionだったら戻す
    if (_currentSection.sectionNumber == ScriptPool().getSectionList().first.sectionNumber) {
      toSection(ScriptPool().getSection(1));
    } else {
      var previousSectionNumber = _currentSection.sectionNumber - 1;
      toSection(ScriptPool().getSection(previousSectionNumber));
    }

    if (_nowPlaying) play();
  }
}
