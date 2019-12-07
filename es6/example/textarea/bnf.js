'use strict';

const easy = require('easy');

const { InputElement } = easy;

class BNFTextarea extends InputElement {
  clearBNF() {
    const value = '';

    this.setValue(value);
  }

  getBNF() {
    const value = this.getValue(),
          bnf = value;  ///

    return (bnf);
  }

  setBNF(bnf) {
    const value = bnf;  ///

    this.setValue(value);
  }

  parentContext() {
    const getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this),
          clearBNF = this.clearBNF.bind(this),
          setBNFReadOnly = this.setReadOnly.bind(this);

    return ({
      getBNF,
      setBNF,
      clearBNF,
      setBNFReadOnly
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(BNFTextarea, properties); }
}

Object.assign(BNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'bnf',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = BNFTextarea;
