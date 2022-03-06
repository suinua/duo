import 'dart:html';

import '../model/phrase.dart';
import '../model/section.dart';
import '../pool/script_pool.dart';

class ViewService {
  static ViewMode _viewMode = ViewMode.Text;

  static void updateNavBar(Section section, Phrase phrase) {
    querySelector('.section-number')!.innerHtml =
        'Section : ${section.sectionNumber}';
    querySelector('.phrase-number')!.innerHtml = 'No : ${phrase.phraseNumber}';
  }

  static void updateSentenceBox(Phrase phrase) {
    if (_viewMode == ViewMode.Text) {
      querySelector('.eng-sentence')!.innerHtml =
          '<span>English</span>' + phrase.engText;
      querySelector('.jp-sentence')!.innerHtml =
          '<span>Japanese</span>' + phrase.jpText;
    } else {
      querySelector('.image-container')!.innerHtml = '<img src="resources/images/${phrase.phraseNumber}.png" alt="英語">';
    }
  }

  static void switchViewMode() {
    var switchButton = querySelector('.switch-button')!;
    if (_viewMode == ViewMode.Text) {
      querySelector('.sentence-box')!.style.display = 'none';
      querySelector('.image-container')!.style.display = '';
      _viewMode = ViewMode.Image;
      switchButton.innerHtml = '<i class="lni lni-image"></i>';
    } else {
      querySelector('.sentence-box')!.style.display = '';
      querySelector('.image-container')!.style.display = 'none';
      _viewMode = ViewMode.Text;
      switchButton.innerHtml = '<i class="lni lni-bold"></i>';
    }
  }

  static void updateSelectPhraseButton(Phrase currentPhrase, bool nowPlaying) {
    querySelector('.active-select-phrase')?.className =
        'select-phrase lni lni-play';
    querySelector('.active-select-phrase-text')?.className = '';

    if (nowPlaying) {
      querySelector('#select-phrase-${currentPhrase.phraseNumber}')!.className =
          'active-select-phrase lni lni-stop';
      querySelector('#select-phrase-text-${currentPhrase.phraseNumber}')!
          .className = 'active-select-phrase-text';
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

  static void updateSectionMenu(Section section) {
    querySelector('.active-select-section')?.className = 'uk-link-reset';

    querySelector('#select-section-${section.sectionNumber}')!.className = 'active-select-section uk-link-reset';
  }

  static void updateSectionItems(Section section) {
    ScriptPool().sectionList.forEach((section) {
      querySelector('#section-${section.sectionNumber}')!.style.display = 'none';
      querySelector('#section-${section.sectionNumber}')!.style.height = '0';
      querySelector('#section-${section.sectionNumber}')!.style.minHeight = '0';
    });

    querySelector('#section-${section.sectionNumber}')!.style.display = 'block';
    querySelector('#section-${section.sectionNumber}')!.style.minHeight = '90%';
  }
}

class ViewMode {
  final String _value;
  ViewMode._(this._value);

  static final Image = ViewMode._('Image');
  static final Text = ViewMode._('Text');

  @override
  bool operator ==(Object other) {
    if (other is ViewMode) {
      return other._value == _value;
    } else {
      return false;
    }
  }
}