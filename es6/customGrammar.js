"use strict";

import { fileSystemUtilities } from "necessary";

const { readFile, checkFileExists } = fileSystemUtilities;

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
      case "term":
        bnf = this.termBNF;
        break;

      case "expression":
        bnf = this.expressionBNF;
        break;

      case "statement":
        bnf = this.statementBNF;
        break;

      case "metastatement":
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
      case "term":
        this.termBNF = bnf;
        break;

      case "expression":
        this.expressionBNF = bnf;
        break;

      case "statement":
        this.statementBNF = bnf;
        break;

      case "metastatement":
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
    const name = directoryPath, ///
          lexicalPattern = lexicalPatternFromDirectoryPath(directoryPath),
          termBNF = termBNFFromDirectoryPath(directoryPath),
          expressionBNF = expressionBNFFromDirectoryPath(directoryPath),
          statementBNF = statementBNFFromDirectoryPath(directoryPath),
          metastatementBNF = metastatementBNFFromDirectoryPath(directoryPath),
          customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

    return customGrammar;
  }
}

function lexicalPatternFromDirectoryPath(directoryPath) {
  const lexicalPatternFilePath = `${directoryPath}/pattern.lex`,
        lexicalPatternFileExists = checkFileExists(lexicalPatternFilePath),
        lexicalPatternContent = lexicalPatternFileExists ?
                                  readFile(lexicalPatternFilePath) :
                                    null,
        lexicalPattern = lexicalPatternContent; ///

  return lexicalPattern;
}

function metastatementBNFFromDirectoryPath(directoryPath) {
  const metastatementBNFFilePath = `${directoryPath}/metastatement.bnf`,
        metastatementBNF = bnfFromBNFFilePath(metastatementBNFFilePath);

  return metastatementBNF;
}

function statementBNFFromDirectoryPath(directoryPath) {
  const statementBNFFilePath = `${directoryPath}/statement.bnf`,
        statementBNF = bnfFromBNFFilePath(statementBNFFilePath);

  return statementBNF;
}

function expressionBNFFromDirectoryPath(directoryPath) {
  const expressionBNFFilePath = `${directoryPath}/expression.bnf`,
        expressionBNF = bnfFromBNFFilePath(expressionBNFFilePath);

  return expressionBNF;
}

function termBNFFromDirectoryPath(directoryPath) {
  const termBNFFilePath = `${directoryPath}/term.bnf`,
      termBNF = bnfFromBNFFilePath(termBNFFilePath);

  return termBNF;
}

function bnfFromBNFFilePath(bnfFilePath) {
  const bnfFileExists = checkFileExists(bnfFilePath),
        bnfContent = bnfFileExists ?
                       readFile(bnfFilePath) :
                         null,
        bnf = bnfContent; ///

  return bnf;
}
