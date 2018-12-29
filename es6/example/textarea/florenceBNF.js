'use strict';

const easy = require('easy');

const { InputElement } = easy;

class FlorenceBNFTextarea extends InputElement {
  setFlorenceBNF(florenceBNF) {
    const value = florenceBNF;  ///

    this.setValue(value);
  }

  parentContext() {
    const setFlorenceBNF = this.setFlorenceBNF.bind(this);

    return ({
      setFlorenceBNF
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(FlorenceBNFTextarea, properties); }
}

Object.assign(FlorenceBNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'florence-bnf',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = FlorenceBNFTextarea;
