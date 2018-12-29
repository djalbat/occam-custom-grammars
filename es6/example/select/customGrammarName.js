'use strict';

const easy = require('easy');

const constants = require('../../constants');

const { InputElement } = easy,
      { DEFAULT_CUSTOM_GRAMMAR_NAME, USER_DEFINED_CUSTOM_GRAMMAR_NAME } = constants;

class CustomGrammarNameSelect extends InputElement {
  getSelectedOptionValue() {
    const domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

    return selectedOptionValue;
  }

  childElements(properties) {
    const defaultName = DEFAULT_CUSTOM_GRAMMAR_NAME,  ///
          defaultValue = defaultName, ///
          userDefinedName = USER_DEFINED_CUSTOM_GRAMMAR_NAME, ///
          userDefinedValue = userDefinedName; ///

    return ([

      <option value={defaultValue} selected>{defaultName}</option>,
      <option value={userDefinedValue}>{userDefinedName}</option>,

    ]);
  }

  parentContext() {
    const getCustomGrammarName = this.getSelectedOptionValue.bind(this); ///

    return ({
      getCustomGrammarName
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(CustomGrammarNameSelect, properties); }
}

Object.assign(CustomGrammarNameSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'custom-grammar-name',
    spellCheck: false
  }
});

module.exports = CustomGrammarNameSelect;
