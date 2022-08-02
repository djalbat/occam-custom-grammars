"use strict";

import Input from "../input";

export default class PatternInput extends Input {
  getPattern() {
    const value = this.getValue(),
          pattern = value; ///

    return pattern;
  }

  setPattern(pattern) {
    const value = pattern; ///

    this.setValue(value);
  }

  parentContext() {
    const getPattern = this.getPattern.bind(this),
          setPattern = this.setPattern.bind(this);

    return ({
      getPattern,
      setPattern
    });
  }

  static defaultProperties = {
    className: "pattern",
    spellCheck: "false"
  };
}
