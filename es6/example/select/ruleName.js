"use strict";

import Select from "../select";

import { TERM_RULE_NAME, EXPRESSION_RULE_NAME, STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME }  from "../../constants";

export default class RuleNameSelect extends Select {
  getRuleName() {
    const value = this.getValue(),
          ruleName = value; ///

    return ruleName;
  }

  childElements(properties) {
    const termName = TERM_RULE_NAME,  ///
          termValue = termName, ///
          expressionName = EXPRESSION_RULE_NAME, ///
          expressionValue = expressionName, ///
          statementName = STATEMENT_RULE_NAME,  ///
          statementValue = statementName, ///
          metastatementName = METASTATEMENT_RULE_NAME, ///
          metastatementValue = metastatementName; ///

    return ([

      <option value={termValue} selected >
        {termName}
      </option>,
      <option value={expressionValue} selected >
        {expressionName}
      </option>,
      <option value={statementValue} selected >
        {statementName}
      </option>,
      <option value={metastatementValue} selected >
        {metastatementName}
      </option>,

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
