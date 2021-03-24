"use strict";

import Input from "../input";

export default class LexicalPatternInput extends Input {
  getLexicalPattern() {
    const value = this.getValue(),
          lexicalPattern = value; ///

    return lexicalPattern;
  }

  setLexicalPattern(lexicalPattern) {
    const value = lexicalPattern; ///

    this.setValue(value);
  }

  parentContext() {
    const getLexicalPattern = this.getLexicalPattern.bind(this),
          setLexicalPattern = this.setLexicalPattern.bind(this),
          setLexicalPatternReadOnly = this.setReadOnly.bind(this); ///;

    return ({
      getLexicalPattern,
      setLexicalPattern,
      setLexicalPatternReadOnly
    });
  }

  static defaultProperties = {
    className: "lexical-pattern",
    spellCheck: "false"
  };
}
