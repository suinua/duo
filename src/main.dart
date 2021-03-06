import 'dart:html';

import 'duo_audio_player.dart';
import 'pool/script_pool.dart';
import 'view/section_menu.dart';
import 'view/view_service.dart';

void main() {
  var audioPlayer = DuoAudioPlayer();

  SectionMenu.setup();

  //section-menuの開閉
  var openSectionMenuButton = querySelector('.open-section-menu')!;
  openSectionMenuButton.onClick.listen((event) {
    var sectionMenu = querySelector('.section-menu')!;
    if (sectionMenu.style.display == 'none') {
      sectionMenu.style.display ='block';
      sectionMenu.style.height ='100%';
      querySelector('.section-menu-container')!.style.height = '40%';
      querySelector('.content-box')!.style.height = '50vh';
      querySelector('.image-container')!.style.height = '50vh';
      openSectionMenuButton.innerHtml = '<i class="lni lni-chevron-down"></i>';
    } else {
      sectionMenu.style.display ='none';
      sectionMenu.style.height ='0';
      querySelector('.section-menu-container')!.style.height = '0';
      querySelector('.content-box')!.style.height = '90vh';
      querySelector('.image-container')!.style.height = '90vh';
      openSectionMenuButton.innerHtml = '<i class="lni lni-chevron-up"></i>';
    }
  });

  //audio関係
  //再生、停止
  var playButton = querySelector('.play-button')!;
  playButton.onClick.listen((event) {
    if (audioPlayer.nowPlaying) {
      audioPlayer.stop();
    } else {
      audioPlayer.play();
    }
  });

  //next
  var nextButton = querySelector('.next-button')!;
  nextButton.onClick.listen((event) {
    audioPlayer.skipNext();
  });

  //previous
  var previousButton = querySelector('.previous-button')!;
  previousButton.onClick.listen((event) {
    audioPlayer.skipPrevious();
  });

  //phraseの選択
  var selectPhraseButtons = querySelectorAll('.select-phrase-button');
  selectPhraseButtons.forEach((selectPhraseButton) {
    var phraseNumber = int.parse(selectPhraseButton.id.replaceAll(RegExp('(.*)select-phrase-button-'), ''));
    selectPhraseButton.onClick.listen((event) {
      if (audioPlayer.nowPlaying && audioPlayer.currentPhrase.phraseNumber == phraseNumber) {
          audioPlayer.stop();
      } else {
        audioPlayer.toPhrase(ScriptPool().getPhrase(phraseNumber));
      }
    });
  });

  var switchButton = querySelector('.switch-button')!;
  switchButton.onClick.listen((event) {
    print('onclick');
    ViewService.switchViewMode();
    event.stopPropagation();
  });
}
