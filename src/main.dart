import 'dart:html';

import 'view/section_menu.dart';

void main() {
  SectionMenu.setup();

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
}
