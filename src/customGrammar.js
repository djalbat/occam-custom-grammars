"use strict";

import { TERM, STATEMENT, EXPRESSION, METASTATEMENT } from "./constants";

export default class CustomGrammar {
  constructor(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF) {
    this.name = name;
    this.lexicalPattern = lexicalPattern;
    this.termBNF = termBNF;
    this.expressionBNF = expressionBNF;
    this.statementBNF = statementBNF;
    this.metastatementBNF = metastatementBNF;
  }
  
  getName() {
    return this.name;
  }

  getLexicalPattern() {
    return this.lexicalPattern;
  }

  getBNF(ruleName) {
    let bnf;

    switch (ruleName) {
      case TERM:
        bnf = this.termBNF;

        break;

      case EXPRESSION:

        bnf = this.expressionBNF;
        break;

      case STATEMENT:

        bnf = this.statementBNF;
        break;

      case METASTATEMENT:

        bnf = this.metastatementBNF;
        break;
    }

    return bnf;
  }

  setName(name) {
    this.name = name;
  }

  setLexicalPattern(lexicalPattern) {
    this.lexicalPattern = lexicalPattern;
  }

  setBNF(ruleName, bnf) {
    switch (ruleName) {
      case TERM:
        this.termBNF = bnf;

        break;

      case EXPRESSION:
        this.expressionBNF = bnf;

        break;

      case STATEMENT:
        this.statementBNF = bnf;

        break;

      case METASTATEMENT:
        this.metastatementBNF = bnf;

        break;
    }
  }

  resetLexicalPattern() { 
    const lexicalPattern = null;
    
    this.setLexicalPattern(lexicalPattern);
  }

  resetBNF(ruleName) {
    const bnf = null;

    this.setBNF(ruleName, bnf);
  }

  update(ruleName, bnf, lexicalPattern) {
    this.setBNF(ruleName, bnf);
    this.setLexicalPattern(lexicalPattern);
  }

  toJSON() {
    const name = this.name,
          lexicalPattern = this.lexicalPattern,
          termBNF = this.termBNF,
          expressionBNF = this.expressionBNF,
          statementBNF = this.statementBNF,
          metastatementBNF = this.metastatementBNF,
          json = {
            name,
            lexicalPattern,
            termBNF,
            expressionBNF,
            statementBNF,
            metastatementBNF
          };
    
    return json;
  }

  static fromJSON(json) {
    const { name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF } = json,
          customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

    return customGrammar;
  }

  static fromName(name) {
    const lexicalPattern = null,
          termBNF = null,
          expressionBNF = null,
          statementBNF = null,
          metastatementBNF = null,
          customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

    return customGrammar;
  }
}
