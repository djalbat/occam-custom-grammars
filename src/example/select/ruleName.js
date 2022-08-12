"use strict";

import Select from "../select";

import { TERM_RULE_NAME, STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME }  from "../../ruleNames";

export default class RuleNameSelect extends Select {
  getRuleName() {
    const value = this.getValue(),
          ruleName = value; ///

    return ruleName;
  }

  childElements() {
    const termName = TERM_RULE_NAME,
          statementName = STATEMENT_RULE_NAME,
          metastatementName = METASTATEMENT_RULE_NAME,
          termValue = termName, ///
          statementValue = statementName, ///
          metastatementValue = metastatementName; ///

    return ([

      <option value={termValue} selected >
        {termName}
      </option>,
      <option value={statementValue}>
        {statementName}
      </option>,
      <option value={metastatementValue}>
        {metastatementName}
      </option>

    ]);
  }

  parentContext() {
    const getRuleName = this.getRuleName.bind(this); ///

    return ({
      getRuleName
    });
  }

  static defaultProperties = {
    className: "rule-name",
    spellCheck: "false"
  }
}
