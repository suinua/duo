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
      querySelector('.content-box')!.style.height = '50%';
    } else {
      sectionMenu.style.display ='none';
      sectionMenu.style.height ='0';
      querySelector('.section-menu-container')!.style.height = '0';
      querySelector('.content-box')!.style.height = '90%';
    }
  });

  //audio関係
  //再生、停止
  var playButton = querySelector('.play-button')!;
  playButton.onClick.listen((event) {
    audioPlayer.play();
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
  var selectPhraseButtons = querySelectorAll('.select-phrase');
  selectPhraseButtons.forEach((selectPhraseButton) {
    var phraseNumber = int.parse(selectPhraseButton.id.replaceAll('select-phrase-', ''));
    selectPhraseButton.onClick.listen((event) {
      audioPlayer.toPhrase(ScriptPool().getPhrase(phraseNumber));
      audioPlayer.play();
    });
  });
}
