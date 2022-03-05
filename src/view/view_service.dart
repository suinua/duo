import 'dart:html';

import '../model/phrase.dart';
import '../model/section.dart';

class ViewService {
  static void updateNavBar(Section section, Phrase phrase) {
    querySelector('.section-number')!.innerHtml =
        'Section : ${section.sectionNumber}';
    querySelector('.phrase-number')!.innerHtml = 'No : ${phrase.phraseNumber}';
  }

  static void updateSentenceBox(Phrase phrase) {
    querySelector('.sentence-box')!.innerHtml = phrase.engText;
  }

  static void updateSelectPhraseButton(Phrase currentPhrase, bool nowPlaying) {
    querySelector('.active-select-phrase')?.className = 'select-phrase lni lni-play';

    if (nowPlaying) {
      querySelector('#select-phrase-${currentPhrase.phraseNumber}')!.className = 'active-select-phrase lni lni-stop';
    }
  }

  static void updatePlayButton(bool nowPlaying) {
    var playButton = querySelector('.play-button')!;
    if (nowPlaying) {
      playButton.innerHtml = '<i class="lni lni-stop"></i>';
    } else {
      playButton.innerHtml = '<i class="lni lni-play"></i>';
    }
  }
}
