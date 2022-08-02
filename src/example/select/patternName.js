"use strict";

import Select from "../select";

import { TYPE_PATTERN_NAME, OPERATOR_PATTERN_NAME }  from "../../patternNames";

export default class PatternNameSelect extends Select {
  getPatternName() {
    const value = this.getValue(),
          patternName = value; ///

    return patternName;
  }

  childElements() {
    const typeName = TYPE_PATTERN_NAME,
          operatorName = OPERATOR_PATTERN_NAME,
          typeValue = typeName, ///
          operatorValue = operatorName; ///

    return ([

      <option value={typeValue} selected >
        {typeName}
      </option>,
      <option value={operatorValue}>
        {operatorName}
      </option>

    ]);
  }

  parentContext() {
    const getPatternName = this.getPatternName.bind(this); ///

    return ({
      getPatternName
    });
  }

  static defaultProperties = {
    className: "rule-name",
    spellCheck: "false"
  }
}
