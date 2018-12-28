'use strict';

const easy = require('easy');

const constants = require('../../constants');

const { InputElement } = easy,
      { USER_DEFINED_CUSTOM_GRAMMAR_NAME } = constants;

class CustomGrammarSelect extends InputElement {
  getSelectedOptionValue() {
    const domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

    return selectedOptionValue;
  }

  childElements(properties) {
    const value = USER_DEFINED_CUSTOM_GRAMMAR_NAME, ///
          option = USER_DEFINED_CUSTOM_GRAMMAR_NAME;  ///

    return ([

      <option value="Default" selected>Default</option>,
      <option value={value}>{option}</option>,

    ]);
  }

  parentContext() {
    const getCustomGrammar = this.getSelectedOptionValue.bind(this); ///

    return ({
      getCustomGrammar
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(CustomGrammarSelect, properties); }
}

Object.assign(CustomGrammarSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'custom-grammar',
    spellCheck: false
  }
});

module.exports = CustomGrammarSelect;
