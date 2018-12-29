'use strict';

const easy = require('easy');

const { InputElement } = easy;

class RuleNameSelect extends InputElement {
  getSelectedOptionValue() {
    const domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

    return selectedOptionValue;
  }

  childElements(properties) {
    return ([

      <option value="term" selected >term</option>,
      <option value="expression">expression</option>,
      <option value="statement">statement</option>,
      <option value="metastatement">metastatement</option>

    ]);
  }

  parentContext() {
    const getRuleName = this.getSelectedOptionValue.bind(this); ///

    return ({
      getRuleName
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(RuleNameSelect, properties); }
}

Object.assign(RuleNameSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'rule-name',
    spellCheck: false
  }
});

module.exports = RuleNameSelect;
