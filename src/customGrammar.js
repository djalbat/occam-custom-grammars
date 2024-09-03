"use strict";

import { EMPTY_STRING } from "./constants";
import { TERM_RULE_NAME, STATEMENT_RULE_NAME } from "./ruleNames";
import { TYPE_PATTERN_NAME, SYMBOL_PATTERN_NAME, OPERATOR_PATTERN_NAME } from "./patternNames";

export default class CustomGrammar {
  constructor(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern) {
    this.name = name;
    this.termBNF = termBNF;
    this.statementBNF = statementBNF;
    this.typePattern = typePattern;
    this.symbolPattern = symbolPattern;
    this.operatorPattern = operatorPattern;
  }
  
  getName() {
    return this.name;
  }

  getBNF(ruleName = null) {
    let bnf;

    switch (ruleName) {
      case TERM_RULE_NAME: bnf = this.termBNF; break;
      case STATEMENT_RULE_NAME: bnf = this.statementBNF; break;

      default: {
        const ruleNames = [
                TERM_RULE_NAME,
                STATEMENT_RULE_NAME
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
      case SYMBOL_PATTERN_NAME: pattern = this.symbolPattern; break;
      case OPERATOR_PATTERN_NAME: pattern = this.operatorPattern; break;
    }

    return pattern;
  }

  getPatterns() {
    const patterns = [
      this.typePattern,
      this.symbolPattern,
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

      case STATEMENT_RULE_NAME:
        this.statementBNF = bnf;

        break;
    }
  }

  setPattern(patternName, pattern) {
    switch (patternName) {
      case TYPE_PATTERN_NAME:
        this.typePattern = pattern;

        break;

      case SYMBOL_PATTERN_NAME:
        this.symbolPattern = pattern;

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
          termBNF = this.termBNF,
          statementBNF = this.statementBNF,
          typePattern = this.typePattern,
          symbolPattern = this.symbolPattern,
          operatorPattern = this.operatorPattern,
          json = {
            name,
            termBNF,
            statementBNF,
            typePattern,
            symbolPattern,
            operatorPattern
          };
    
    return json;
  }

  static fromJSON(json) {
    const { name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern } = json,
          customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern);

    return customGrammar;
  }

  static fromName(name) {
    const termBNF = EMPTY_STRING,
          statementBNF = EMPTY_STRING,
          typePattern = EMPTY_STRING,
          symbolPattern = EMPTY_STRING,
          operatorPattern = EMPTY_STRING,
          customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern);

    return customGrammar;
  }

  static fromNameTermBNFStatementBNFTypePatternSymbolPatternAndOperatorPattern(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern) {
    const customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern);

    return customGrammar;
  }
}
