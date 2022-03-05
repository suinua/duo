import 'dart:html';

import '../model/section.dart';
import '../pool/script_pool.dart';

class SectionMenu {
  static void setup() {
    var html = _generate(ScriptPool().getSectionList());
    var _htmlValidator = NodeValidatorBuilder.common()
      ..allowElement('span', attributes: ['uk-icon']);

    //ignore: unsafe_html
    querySelector('.section-menu-container')!.setInnerHtml(html, validator: _htmlValidator);

    querySelector('#section-1')!.style.display = 'block';
    querySelector('#section-1')!.style.height = '100%';
    querySelector('#section-1')!.style.minHeight = '100%';

    ScriptPool().getSectionList().forEach((section) {
      var selectSectionButton = querySelector('#select-section-${section.sectionNumber}')!;
      selectSectionButton.onClick.listen((event) {
        ScriptPool().getSectionList().forEach((section) {
          querySelector('#section-${section.sectionNumber}')!.style.display = 'none';
          querySelector('#section-${section.sectionNumber}')!.style.height = '0';
          querySelector('#section-${section.sectionNumber}')!.style.minHeight = '0';
        });

        querySelector('#section-${section.sectionNumber}')!.style.display = 'block';
        querySelector('#section-${section.sectionNumber}')!.style.height = '100%';
        querySelector('#section-${section.sectionNumber}')!.style.minHeight = '100%';
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
    var phraseListAsHtml = section.getAllPhrase().map((phrase) => '''
<li>
    <span uk-icon="icon: play; ratio: 1.5"></span>
    <p>${phrase.engText}</p>
</li>''').join();

    return '''
<ul class="section-items uk-list uk-list-divider" id="section-${section.sectionNumber}">
  $phraseListAsHtml
</ul>
    ''';
  }
}
