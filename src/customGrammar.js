"use strict";

import { EMPTY_STRING } from "./constants";
import { TYPE_PATTERN_NAME, OPERATOR_PATTERN_NAME } from "./patternNames";
import { TERM_RULE_NAME, EXPRESSION_RULE_NAME, STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME } from "./ruleNames";

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

  getBNF(ruleName = null) {
    let bnf;

    switch (ruleName) {
      case TERM_RULE_NAME: bnf = this.termBNF; break;
      case EXPRESSION_RULE_NAME: bnf = this.expressionBNF; break;
      case STATEMENT_RULE_NAME: bnf = this.statementBNF; break;
      case METASTATEMENT_RULE_NAME: bnf = this.metastatementBNF; break;

      default: {
        const ruleNames = [
                TERM_RULE_NAME,
                EXPRESSION_RULE_NAME,
                STATEMENT_RULE_NAME,
                METASTATEMENT_RULE_NAME
              ],
              combinedBNF = ruleNames.reduce((combinedBNF, ruleName) => {
          const bnf = this.getBNF(ruleName);

          if (bnf !== EMPTY_STRING) {
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

  getPattern(patternName) {
    let pattern;

    switch (patternName) {
      case TYPE_PATTERN_NAME: pattern = this.typePattern; break;
      case OPERATOR_PATTERN_NAME: pattern = this.operatorPattern; break;
    }

    return pattern;
  }

  getPatterns() {
    const patterns = [
      this.typePattern,
      this.operatorPattern
    ];

    return patterns;
  }

  setName(name) {
    this.name = name;
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

  setPattern(patternName, pattern) {
    switch (patternName) {
      case TYPE_PATTERN_NAME:
        this.typePattern = pattern;

        break;

      case OPERATOR_PATTERN_NAME:
        this.operatorPattern = pattern;

        break;
    }
  }

  resetBNF(ruleName) {
    const bnf = EMPTY_STRING;

    this.setBNF(ruleName, bnf);
  }

  resetPattern(patternName) {
    const pattern = EMPTY_STRING;

    this.setPattern(patternName, pattern);
  }

  update(ruleName, bnf, patternName, pattern) {
    this.setBNF(ruleName, bnf);

    this.setPattern(patternName, pattern);
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
    const typePattern = EMPTY_STRING,
          operatorPattern = EMPTY_STRING,
          termBNF = EMPTY_STRING,
          expressionBNF = EMPTY_STRING,
          statementBNF = EMPTY_STRING,
          metastatementBNF = EMPTY_STRING,
          customGrammar = new CustomGrammar(name, typePattern, operatorPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

    return customGrammar;
  }
}
