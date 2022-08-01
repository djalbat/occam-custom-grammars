"use strict";

import { EMPTY_STRING } from "./constants";
import { TERM_RULE_NAME, EXPRESSION_RULE_NAME, STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME } from "./ruleNames";

const ruleNames = [
  TERM_RULE_NAME,
  EXPRESSION_RULE_NAME,
  STATEMENT_RULE_NAME,
  METASTATEMENT_RULE_NAME
];

export default class CustomGrammar {
  constructor(name, typePattern, operatorPattern, termBNF, expressionBNF, statementBNF, metastatementBNF) {
    this.name = name;
    this.typePattern = typePattern;
    this.operatorPattern = operatorPattern;
    this.termBNF = termBNF;
    this.expressionBNF = expressionBNF;
    this.statementBNF = statementBNF;
    this.metastatementBNF = metastatementBNF;
  }
  
  getName() {
    return this.name;
  }

  getTypePattern() {
    return this.typePattern;
  }

  getOperatorPattern() {
    return this.operatorPattern;
  }

  getBNF(ruleName = null) {
    let bnf;

    switch (ruleName) {
      case TERM_RULE_NAME: bnf = this.termBNF; break;
      case EXPRESSION_RULE_NAME: bnf = this.expressionBNF; break;
      case STATEMENT_RULE_NAME: bnf = this.statementBNF; break;
      case METASTATEMENT_RULE_NAME: bnf = this.metastatementBNF; break;

      default: {
        const combinedBNF = ruleNames.reduce((combinedBNF, ruleName) => {
          const bnf = this.getBNF(ruleName);

          if (bnf !== null) {
            combinedBNF = `${combinedBNF}
            
${bnf}`;
          }

          return combinedBNF;
        }, EMPTY_STRING);

        bnf = combinedBNF;  ///

        break;
      }
    }

    return bnf;
  }

  setName(name) {
    this.name = name;
  }

  setTypePattern(typePattern) {
    this.typePattern = typePattern;
  }

  setOperatorPattern(operatorPattern) {
    this.operatorPattern = operatorPattern;
  }

  setBNF(ruleName, bnf) {
    switch (ruleName) {
      case TERM_RULE_NAME:
        this.termBNF = bnf;

        break;

      case EXPRESSION_RULE_NAME:
        this.expressionBNF = bnf;

        break;

      case STATEMENT_RULE_NAME:
        this.statementBNF = bnf;

        break;

      case METASTATEMENT_RULE_NAME:
        this.metastatementBNF = bnf;

        break;
    }
  }

  resetTypePattern() {
    const typePattern = null;
    
    this.setTypePattern(typePattern);
  }

  resetOperatorPattern() {
    const operatorPattern = null;

    this.setOperatorPattern(operatorPattern);
  }

  resetBNF(ruleName) {
    const bnf = null;

    this.setBNF(ruleName, bnf);
  }

  update(ruleName, bnf, typePattern, operatorPattern) {
    this.setBNF(ruleName, bnf);

    this.setTypePattern(typePattern);

    this.setOperatorPattern(operatorPattern);
  }

  toJSON() {
    const name = this.name,
          typePattern = this.typePattern,
          operatorPattern = this.operatorPattern,
          termBNF = this.termBNF,
          expressionBNF = this.expressionBNF,
          statementBNF = this.statementBNF,
          metastatementBNF = this.metastatementBNF,
          json = {
            name,
            typePattern,
            operatorPattern,
            termBNF,
            expressionBNF,
            statementBNF,
            metastatementBNF
          };
    
    return json;
  }

  static fromJSON(json) {
    const { name, typePattern, operatorPattern, termBNF, expressionBNF, statementBNF, metastatementBNF } = json,
          customGrammar = new CustomGrammar(name, typePattern, operatorPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

    return customGrammar;
  }

  static fromName(name) {
    const typePattern = null,
          operatorPattern = null,
          termBNF = null,
          expressionBNF = null,
          statementBNF = null,
          metastatementBNF = null,
          customGrammar = new CustomGrammar(name, typePattern, operatorPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

    return customGrammar;
  }
}
