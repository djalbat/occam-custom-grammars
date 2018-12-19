'use strict';

const parsers = require('occam-parsers');

const { termDefaultCustomGrammarBNF, statementDefaultCustomGrammarBNF, expressionDefaultCustomGrammarBNF, metastatementDefaultCustomGrammarBNF } = parsers;

const defaultCustomGrammarProjectName = 'default', ///
      defaultCustomGrammarLexicalPattern = '';

class CustomGrammar {
  constructor(projectName, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF) {
    this.projectName = projectName;
    this.lexicalPattern = lexicalPattern;
    this.termBNF = termBNF;
    this.expressionBNF = expressionBNF;
    this.statementBNF = statementBNF;
    this.metastatementBNF = metastatementBNF;
  }
  
  getProjectName() {
    return this.projectName;
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

  setProjectName(projectName) {
    this.projectName = projectName;
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
      "projectName": this.projectName,
      "lexicalPattern": this.lexicalPattern,
      "termBNF": this.termBNF,
      "expressionBNF": this.expressionBNF,
      "statementBNF": this.statementBNF,
      "metastatementBNF": this.metastatementBNF
    };
    
    return json;
  }

  static fromJSON(json) {
    const projectName = json["projectName"],
          lexicalPattern = json["lexicalPattern"],
          termBNF = json["termBNF"],
          expressionBNF = json["expressionBNF"],
          statementBNF = json["statementBNF"],
          metastatementBNF = json["metastatementBNF"],
          customGrammar = new CustomGrammar(projectName, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

    return customGrammar;
  }

  static fromProjectName(projectName) {
    const lexicalPattern = null,
          termBNF = null,
          expressionBNF = null,
          statementBNF = null,
          metastatementBNF = null,
          customGrammar = new CustomGrammar(projectName, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

    return customGrammar;
  }
  
  static fromDefaults() {
    const projectName = defaultCustomGrammarProjectName, ///
          lexicalPattern = defaultCustomGrammarLexicalPattern,  ///
          termBNF = termDefaultCustomGrammarBNF,  ///
          expressionBNF = expressionDefaultCustomGrammarBNF,  ///
          statementBNF = statementDefaultCustomGrammarBNF,  ///
          metastatementBNF = metastatementDefaultCustomGrammarBNF,  ///
          customGrammar = new CustomGrammar(projectName, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);
    
    return customGrammar;
  }
}

module.exports = CustomGrammar;
