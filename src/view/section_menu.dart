import 'dart:html';

import '../model/section.dart';
import '../pool/script_pool.dart';
import 'view_service.dart';

class SectionMenu {
  static void setup() {
    var html = _generate(ScriptPool().sectionList);
    var validator = NodeValidatorBuilder.common()
      ..allowElement('div', attributes: ['uk-slider']);
    querySelector('.section-menu-container')!
        .setInnerHtml(html, validator: validator);

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
        (section) => '<li><a class="uk-link-reset" id="select-section-${section.sectionNumber}">${section.sectionNumber}</a></li>\n').join();

    return '''
<ul class="section-menu">
  <li class="section-number-list">
      <div uk-slider>
        <ul class="uk-slider-items uk-child-width-1-6">
              $sectionNumbers
        </ul>
      </div>
  </li>
  ${sections.map((section) => _sectionPhraseList(section)).join()}
</ul>
    ''';
  }

  static String _sectionPhraseList(Section section) {
    var phraseListAsHtml = section.phraseList.map((phrase) => '''
<li class="select-phrase">
    <div class="select-phrase-button-container">
      <i class="select-phrase-button lni lni-play" id="select-phrase-button-${phrase.phraseNumber}"></i>
    </div>
    
    <div class="select-phrase-text-container">
      <p>${phrase.engText}</p>
      <p id="select-phrase-text-${phrase.phraseNumber}">${phrase.jpText}</p>
    </div>
</li>''').join();

    return '''
<ul class="section-items uk-list uk-list-divider" id="section-${section.sectionNumber}">
  $phraseListAsHtml
</ul>
    ''';
  }
}
