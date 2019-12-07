'use strict';

const easy = require('easy');

const constants = require('../../constants');

const { InputElement } = easy,
      { DEFAULT_CUSTOM_GRAMMAR_NAME, USER_DEFINED_CUSTOM_GRAMMAR_NAME } = constants;

class NameSelect extends InputElement {
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
    const getName = this.getSelectedOptionValue.bind(this); ///

    return ({
      getName
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(NameSelect, properties); }
}

Object.assign(NameSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'name',
    spellCheck: false
  }
});

module.exports = NameSelect;
