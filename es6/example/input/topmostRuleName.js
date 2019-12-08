'use strict';

const easy = require('easy');

const { InputElement } = easy;

class TopmostRuleNameInput extends InputElement {
  getTopmostRuleName() {
    const value = this.getValue(),
          topmostRuleName = value;  ///

    return topmostRuleName;
  }

  parentContext() {
    const getTopmostRuleName = this.getTopmostRuleName.bind(this);

    return ({
      getTopmostRuleName
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(TopmostRuleNameInput, properties); }
}

Object.assign(TopmostRuleNameInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'topmost-rule-name',
    spellCheck: 'false'
  }
});

module.exports = TopmostRuleNameInput;
