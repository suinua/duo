import 'dart:html';

import '../model/section.dart';
import '../pool/script_pool.dart';
import 'view_service.dart';

class SectionMenu {
  static void setup() {
    var html = _generate(ScriptPool().sectionList);
    querySelector('.section-menu-container')!.innerHtml = html;

    querySelector('#section-1')!.style.display = 'block';
    querySelector('#section-1')!.style.minHeight = '90%';

    ScriptPool().sectionList.forEach((section) {
      var selectSectionButton = querySelector('#select-section-${section.sectionNumber}')!;
      selectSectionButton.onClick.listen((event) {
        ViewService.updateSectionItems(section);
      });
    });
  }

  static String _generate(List<Section> sections) {
    var sectionNumbers = sections.map(
        (section) => '<a class="uk-link-reset" id="select-section-${section.sectionNumber}">${section.sectionNumber}</a>\n').join();
    return '''
<ul class="section-menu">
  <li class="section-number-list">
      $sectionNumbers
  </li>
  ${sections.map((section) => _sectionPhraseList(section)).join()}
</ul>
    ''';
  }

  static String _sectionPhraseList(Section section) {
    var phraseListAsHtml = section.phraseList.map((phrase) => '''
<li>
    <i class="select-phrase lni lni-play" id="select-phrase-${phrase.phraseNumber}"></i>
    <p id="select-phrase-text-${phrase.phraseNumber}">${phrase.engText}</p>
</li>''').join();

    return '''
<ul class="section-items uk-list uk-list-divider" id="section-${section.sectionNumber}">
  $phraseListAsHtml
</ul>
    ''';
  }
}
