"use strict";

import Select from "../select";

import { TYPE_RULE_NAME, TERM_RULE_NAME, EXPRESSION_RULE_NAME, STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME }  from "../../ruleNames";

export default class RuleNameSelect extends Select {
  getRuleName() {
    const value = this.getValue(),
          ruleName = value; ///

    return ruleName;
  }

  childElements() {
    const typeName = TYPE_RULE_NAME,
          termName = TERM_RULE_NAME,
          expressionName = EXPRESSION_RULE_NAME,
          statementName = STATEMENT_RULE_NAME,
          metastatementName = METASTATEMENT_RULE_NAME,
          typeValue = typeName, ///
          termValue = termName, ///
          expressionValue = expressionName, ///
          statementValue = statementName, ///
          metastatementValue = metastatementName; ///

    return ([

      <option value={typeValue} selected >
        {typeName}
      </option>,
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
