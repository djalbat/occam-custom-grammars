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

      <option value="metastatement" selected>metastatement</option>,
      <option value="statement">statement</option>,
      <option value="expression">expression</option>,
      <option value="term">term</option>

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
