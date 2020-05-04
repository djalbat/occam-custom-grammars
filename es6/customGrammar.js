"use strict";

const necessary = require("necessary");

const { fileSystemUtilities } = necessary,
      { readFile, checkFileExists } = fileSystemUtilities;

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
      case "term" :
        bnf = this.termBNF;
        break;

      case "expression" :
        bnf = this.expressionBNF;
        break;

      case "statement" :
        bnf = this.statementBNF;
        break;

      case "metastatement" :
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
      case "term" :
        this.termBNF = bnf;
        break;

      case "expression" :
        this.expressionBNF = bnf;
        break;

      case "statement" :
        this.statementBNF = bnf;
        break;

      case "metastatement" :
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

  static fromDirectoryPath(directoryPath) {
    const lexicalPatternFilePath = `${directoryPath}/pattern.lex`,
          termBNFFilePath = `${directoryPath}/term.bnf`,
          expressionBNFFilePath = `${directoryPath}/expression.bnf`,
          statementBNFFilePath = `${directoryPath}/statement.bnf`,
          metastatementBNFFilePath = `${directoryPath}/metastatement.bnf`,
          lexicalPatternFileExists = checkFileExists(lexicalPatternFilePath),
          termBNFFileExists = checkFileExists(termBNFFilePath),
          expressionBNFFileExists = checkFileExists(expressionBNFFilePath),
          statementBNFFileExists = checkFileExists(statementBNFFilePath),
          metastatementBNFFileExists = checkFileExists(metastatementBNFFilePath),
          lexicalPatternContent = lexicalPatternFileExists ? readFile(lexicalPatternFilePath) : null,
          termBNFContent = termBNFFileExists ? readFile(termBNFFilePath) : null,
          expressionBNFContent = expressionBNFFileExists ? readFile(expressionBNFFilePath) : null,
          statementBNFContent = statementBNFFileExists ? readFile(statementBNFFilePath) : null,
          metastatementBNFContent = metastatementBNFFileExists ? readFile(metastatementBNFFilePath) : null,
          name = directoryPath, ///
          lexicalPattern = lexicalPatternContent, ///
          termBNF = termBNFContent, ///
          expressionBNF = expressionBNFContent, ///
          statementBNF = statementBNFContent, ///
          metastatementBNF = metastatementBNFContent, ///
          customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

    return customGrammar;
  }
}

module.exports = CustomGrammar;
