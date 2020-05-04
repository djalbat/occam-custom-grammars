"use strict";

import Select from "../select";

export default class RuleNameSelect extends Select {
  childElements(properties) {
    return ([

      <option value="term" selected >
        term
      </option>,
      <option value="term" selected >
        expression
      </option>,
      <option value="term" selected >
        statement
      </option>,
      <option value="term" selected >
        metastatement
      </option>,

    ]);
  }

  parentContext() {
    const getRuleName = this.getSelectedOptionValue.bind(this); ///

    return ({
      getRuleName
    });
  }

  static defaultProperties = {
    className: "rule-name",
    spellCheck: "false"
  }
}
