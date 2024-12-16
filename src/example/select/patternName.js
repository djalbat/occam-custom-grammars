"use strict";

import Select from "../select";

import { TYPE_PATTERN_NAME, SYMBOL_PATTERN_NAME, PROPERTY_PATTERN_NAME, OPERATOR_PATTERN_NAME }  from "../../patternNames";

export default class PatternNameSelect extends Select {
  getPatternName() {
    const value = this.getValue(),
          patternName = value; ///

    return patternName;
  }

  childElements() {
    const patternNames = [
            TYPE_PATTERN_NAME,
            SYMBOL_PATTERN_NAME,
            PROPERTY_PATTERN_NAME,
            OPERATOR_PATTERN_NAME
          ],
          options  = patternNames.map((patternName, index) => {
            const value = patternName,
                  selected = (index === 0);

            return (

              <option value={value} selected={selected} >
                {patternName}
              </option>

            );
          }),
          childElements = [
            ...options
          ];


    return childElements;
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
