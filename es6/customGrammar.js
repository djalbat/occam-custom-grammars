'use strict';

class CustomGrammar {
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
      case 'term' :
        bnf = this.termBNF;
        break;

      case 'expression' :
        bnf = this.expressionBNF;
        break;

      case 'statement' :
        bnf = this.statementBNF;
        break;

      case 'metastatement' :
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
      case 'term' :
        this.termBNF = bnf;
        break;

      case 'expression' :
        this.expressionBNF = bnf;
        break;

      case 'statement' :
        this.statementBNF = bnf;
        break;

      case 'metastatement' :
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
    const json = {
      "name": this.name,
      "lexicalPattern": this.lexicalPattern,
      "termBNF": this.termBNF,
      "expressionBNF": this.expressionBNF,
      "statementBNF": this.statementBNF,
      "metastatementBNF": this.metastatementBNF
    };
    
    return json;
  }

  static fromJSON(json) {
    const name = json["name"],
          lexicalPattern = json["lexicalPattern"],
          termBNF = json["termBNF"],
          expressionBNF = json["expressionBNF"],
          statementBNF = json["statementBNF"],
          metastatementBNF = json["metastatementBNF"],
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

module.exports = CustomGrammar;
