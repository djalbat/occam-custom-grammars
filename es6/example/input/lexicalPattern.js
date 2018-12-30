'use strict';

const easy = require('easy');

const { InputElement } = easy;

class LexicalPatternInput extends InputElement {
  getLexicalPattern() {
    const value = this.getValue(),
          lexicalPattern = value;  ///

    return lexicalPattern;
  }

  setLexicalPattern(lexicalPattern) {
    const value = lexicalPattern || '';  ///

    this.setValue(value);
  }

  parentContext() {
    const getLexicalPattern = this.getLexicalPattern.bind(this),
          setLexicalPattern = this.setLexicalPattern.bind(this),
          setLexicalPatternReadOnly = this.setReadOnly.bind(this); ///

    return ({
      getLexicalPattern,
      setLexicalPattern,
      setLexicalPatternReadOnly
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(LexicalPatternInput, properties); }
}

Object.assign(LexicalPatternInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'lexical-pattern',
    spellCheck: 'false'
  }
});

module.exports = LexicalPatternInput;
