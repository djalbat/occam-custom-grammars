'use strict';

const necessary = require('necessary'),
      grammarUtilities = require('occam-grammar-utilities');

const partUtilities = require('../utilities/part');

const { arrayUtilities } = necessary,
      { first, separate } = arrayUtilities,
      { isPartRuleNamePart } = partUtilities,
      { eliminateOrphanedRules, eliminateImplicitLeftRecursion } = grammarUtilities;

function eliminateLeftRecursion(rules, ruleName) {
  const leftRecursiveRules = [],
        remainingRules = [];

  separate(rules, leftRecursiveRules, remainingRules, function(rule) {
    const ruleLeftRecursive = isRuleLeftRecursive(rule, ruleName);

    if (ruleLeftRecursive) {
      return true;
    }
  });

  const leftRecursiveRulesLength = leftRecursiveRules.length,
        rulesImplicitlyLeftRecursive = (leftRecursiveRulesLength > 0);

  if (rulesImplicitlyLeftRecursive) {
    rules = [].concat(leftRecursiveRules).concat(remainingRules); ///

    rules = eliminateImplicitLeftRecursion(rules);  ///

    const excludingFirstRule = false;

    rules = eliminateOrphanedRules(rules, excludingFirstRule);  ///
  }

  return rules;
}

module.exports = {
  eliminateLeftRecursion
};

function isRuleLeftRecursive(rule, ruleName) {
  const definitions = rule.getDefinitions(),
        ruleLeftRecursive = definitions.some(function(definition) {
          const definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName);

          if (definitionLeftRecursive) {
            return true;
          }
        });

  return ruleLeftRecursive
}

function isDefinitionLeftRecursive(definition, ruleName) {
  let definitionLeftRecursive = false; ///

  const parts = definition.getParts(),
        partsLength = parts.length;

  if (partsLength > 0) {
    const firstPart = first(parts),
          firstPartRuleNamePart = isPartRuleNamePart(firstPart);

    if (firstPartRuleNamePart) {
      const ruleNamePart = firstPart,  ///
            ruleNamePartRuleName = ruleNamePart.getRuleName();

      if (ruleNamePartRuleName === ruleName) {
        definitionLeftRecursive = true; ///
      }
    }
  }

  return definitionLeftRecursive;
}
