'use strict';

const easy = require('easy');

const { InputElement } = easy;

class CombinedBNFTextarea extends InputElement {
  clearCombinedBNF() {
    const value = '';

    this.setValue(value);
  }

  setCombinedBNF(combinedBNF) {
    const value = combinedBNF;  ///

    this.setValue(value);
  }

  parentContext() {
    const setCombinedBNF = this.setCombinedBNF.bind(this),
          clearCombinedBNF = this.clearCombinedBNF.bind(this);

    return ({
      setCombinedBNF,
      clearCombinedBNF
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(CombinedBNFTextarea, properties); }
}

Object.assign(CombinedBNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'combined-bnf',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = CombinedBNFTextarea;
