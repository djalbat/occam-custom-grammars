"use strict";

import { EMPTY_STRING } from "./constants";
import { TYPE_PATTERN_NAME, SYMBOL_PATTERN_NAME } from "./patternNames";
import { TYPE_RULE_NAME, TERM_RULE_NAME, STATEMENT_RULE_NAME } from "./ruleNames";

export default class CustomGrammar {
  constructor(name, typeBNF, termBNF, statementBNF, typePattern, symbolPattern) {
    this.name = name;
    this.typeBNF = typeBNF;
    this.termBNF = termBNF;
    this.statementBNF = statementBNF;
    this.typePattern = typePattern;
    this.symbolPattern = symbolPattern;
  }
  
  getName() {
    return this.name;
  }

  getTypeBNF() {
    return this.typeBNF;
  }

  getTermBNF() {
    return this.termBNF;
  }

  getStatementBNF() {
    return this.statementBNF;
  }

  getTypePattern() {
    return this.typePattern;
  }

  getSymbolPattern() {
    return this.symbolPattern;
  }

  getBNF(ruleName = null) {
    let bnf;

    switch (ruleName) {
      case TYPE_RULE_NAME: bnf = this.typeBNF; break;
      case TERM_RULE_NAME: bnf = this.termBNF; break;
      case STATEMENT_RULE_NAME: bnf = this.statementBNF; break;

      default: {
        const ruleNames = [
                TYPE_RULE_NAME,
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
    }

    return pattern;
  }

  getPatterns() {
    const patterns = [
      this.typePattern,
      this.symbolPattern
    ];

    return patterns;
  }

  setName(name) {
    this.name = name;
  }

  setBNF(ruleName, bnf) {
    switch (ruleName) {
      case TYPE_RULE_NAME:
        this.typeBNF = bnf;

        break;

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
          typeBNF = this.typeBNF,
          termBNF = this.termBNF,
          statementBNF = this.statementBNF,
          typePattern = this.typePattern,
          symbolPattern = this.symbolPattern,
          json = {
            name,
            typeBNF,
            termBNF,
            statementBNF,
            typePattern,
            symbolPattern
          };
    
    return json;
  }

  static fromJSON(json) {
    const { name, typeBNF, termBNF, statementBNF, typePattern, symbolPattern } = json,
          customGrammar = new CustomGrammar(name, typeBNF, termBNF, statementBNF, typePattern, symbolPattern);

    return customGrammar;
  }

  static fromName(name) {
    const typeBNF = EMPTY_STRING,
          termBNF = EMPTY_STRING,
          statementBNF = EMPTY_STRING,
          typePattern = EMPTY_STRING,
          symbolPattern = EMPTY_STRING,
          customGrammar = new CustomGrammar(name, typeBNF, termBNF, statementBNF, typePattern, symbolPattern);

    return customGrammar;
  }

  static fromNameTypeBNFTermBNFStatementBNFTypePatternAndSymbolPattern(name, typeGNF, termBNF, statementBNF, typePattern, symbolPattern) {
    const customGrammar = new CustomGrammar(name, typeGNF, termBNF, statementBNF, typePattern, symbolPattern);

    return customGrammar;
  }
}
