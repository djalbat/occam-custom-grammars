"use strict";

import Input from "../input";

export default class TypePatternInput extends Input {
  getTypePattern() {
    const value = this.getValue(),
          typePattern = value; ///

    return typePattern;
  }

  setTypePattern(typePattern) {
    const value = typePattern; ///

    this.setValue(value);
  }

  parentContext() {
    const getTypePattern = this.getTypePattern.bind(this),
          setTypePattern = this.setTypePattern.bind(this),
          setTypePatternReadOnly = this.setReadOnly.bind(this); ///;

    return ({
      getTypePattern,
      setTypePattern,
      setTypePatternReadOnly
    });
  }

  static defaultProperties = {
    className: "type-pattern",
    spellCheck: "false"
  };
}
