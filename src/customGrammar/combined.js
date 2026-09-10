"use strict";

import { arrayUtilities } from "necessary";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import defaultCustomGrammar from "../customGrammar/default";

import { ruleFromBNF } from "../utilities/bnf";
import { VERTICAL_BAR } from "../constants";
import { expressionsFromVocabulary } from "../utilities/vocabulary";
import { validateBNF, validateVocabulary } from "../utilities/validate";
import { TERM_RULE_NAME, STATEMENT_RULE_NAME } from "../ruleNames";
import { TYPE_VOCABULARY_NAME, SYMBOL_VOCABULARY_NAME } from "../vocabularyNames";

const { push, tail, first } = arrayUtilities;

export default class CombinedCustomGrammar {
  constructor(rules, entries) {
    this.rules = rules;
    this.entries = entries;
  }
  
  getRules() {
    return this.rules;
  }

  getEntries() {
    return this.entries;
  }

  postProcess(rules) {
    rules = [ ///
      ...rules,
      ...this.rules
    ];

    rules = eliminateLeftRecursion(rules);  ///

    return rules;
  }

  static fromNothing(includeDefault = true) {
    let customGrammars = [];

    if (includeDefault) {
      customGrammars = [  ///
        ...customGrammars,
        defaultCustomGrammar
      ];
    }

    const rules = rulesFromCustomGrammars(customGrammars),
          entries = entriesFromCustomGrammars(customGrammars),
          combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);

    return combinedCustomGrammar;
  }

  static fromCustomGrammars(customGrammars, includeDefault = true) {
    if (includeDefault) {
      customGrammars = [  ///
        ...customGrammars,
        defaultCustomGrammar
      ];
    }

    const rules = rulesFromCustomGrammars(customGrammars),
          entries = entriesFromCustomGrammars(customGrammars),
          combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
    
    return combinedCustomGrammar;
  }
}

function entriesFromCustomGrammars(customGrammars) {
  const vocabularyNames = [
          TYPE_VOCABULARY_NAME,
          SYMBOL_VOCABULARY_NAME
        ],
        entries = vocabularyNames.map((vocabularyName) => {
          const entry = entryFromCustomGrammars(customGrammars, vocabularyName);

          return entry;
        });

  return entries;
}

function rulesFromCustomGrammars(customGrammars) {
  const ruleNames = [
          TERM_RULE_NAME,
          STATEMENT_RULE_NAME,
        ],
        rules = ruleNames.map((ruleName) => {
          const rule = ruleFromCustomGrammars(customGrammars, ruleName);

          return rule;
        });

  return rules;
}

function entryFromCustomGrammars(customGrammars, vocabularyName) {
  const expressions = [];

  customGrammars.forEach((customGrammar) => {
    const vocabulary = customGrammar.getVocabulary(vocabularyName);

    validateVocabulary(vocabulary);

    expressionsFromVocabulary(vocabulary, expressions);
  });

  const entry = combineExpressions(expressions, vocabularyName);

  return entry;
}

function ruleFromCustomGrammars(customGrammars, ruleName) {
  const rules = [];

  customGrammars.forEach((customGrammar) => {
    const bnf = customGrammar.getBNF(ruleName);

    validateBNF(bnf, ruleName);

    ruleFromBNF(bnf, rules);
  });

  const rule = combineRules(rules);

  return rule;
}

function combineExpressions(expressions, vocabularyName) {
  const pattern = expressions.join(VERTICAL_BAR),
        entryName = vocabularyName,  ///
        entryValue = `^(?:${pattern})`,
        entry = {
          [entryName]: entryValue
        };

  return entry;
}

function combineRules(rules) {
  const firstRule = first(rules),
        rulesTail = tail(rules),
        definitions = firstRule.getDefinitions(),
        remainingRules = rulesTail; ///

  remainingRules.forEach((remainingRule) => {
    const remainingRuleDefinitions = remainingRule.getDefinitions();

    push(definitions, remainingRuleDefinitions);
  });

  const rule = firstRule; ///

  return rule;
}
