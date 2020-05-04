"use strict";

function lexicalPatternsFromCustomGrammars(customGrammars) {
  const lexicalPatterns = [];

  customGrammars.forEach(function(customGrammar) {
    const lexicalPattern = customGrammar.getLexicalPattern();

    if (lexicalPattern) { ///
      lexicalPatterns.push(lexicalPattern);
    }
  });

  return lexicalPatterns;
}

function bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars) {
  const bnfs = [];

  customGrammars.forEach(function(customGrammar) {
    const bnf = customGrammar.getBNF(ruleName);

    if (bnf) {  ///
      bnfs.push(bnf);
    }
  });

  return bnfs;
}

module.exports = {
  lexicalPatternsFromCustomGrammars,
  bnfsFromRuleNameAndCustomGrammars
};
