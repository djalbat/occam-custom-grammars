"use strict";

import Input from "../input";

export default class OperatorPatternInput extends Input {
  getOperatorPattern() {
    const value = this.getValue(),
          operatorPattern = value; ///

    return operatorPattern;
  }

  setOperatorPattern(operatorPattern) {
    const value = operatorPattern; ///

    this.setValue(value);
  }

  parentContext() {
    const getOperatorPattern = this.getOperatorPattern.bind(this),
          setOperatorPattern = this.setOperatorPattern.bind(this),
          setOperatorPatternReadOnly = this.setReadOnly.bind(this); ///;

    return ({
      getOperatorPattern,
      setOperatorPattern,
      setOperatorPatternReadOnly
    });
  }

  static defaultProperties = {
    className: "operator-pattern",
    spellCheck: "false"
  };
}
