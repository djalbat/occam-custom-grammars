'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function findRuleByRuleName(ruleName, rules) {
  const name = ruleName,  ///
        rule = rules.find(function(rule) {
          const ruleName = rule.getName();

          if (ruleName === name) {
            return true;
          }
        }) || null; ///

  return rule;
}

function qualifiedRuleBNFFromRuleName(ruleName) {
const qualifiedRuleName = qualifiedRuleNameFromRuleName(ruleName),
      qualifiedRuleBNF = `${qualifiedRuleName} ::= ${ruleName} qualification? <END_OF_LINE> ;`;

return qualifiedRuleBNF;
}

function qualifiedRuleNameFromRuleName(ruleName) {
  const capitalisedRuleName = capitaliseRuleName(ruleName),
        qualifiedRuleName = `qualified${capitalisedRuleName}`;

  return qualifiedRuleName;
}

function unqualifiedRuleBNFFromRuleName(ruleName) {
  const unqualifiedRuleName = unqualifiedRuleNameFromRuleName(ruleName),
        unqualifiedRuleBNF = `${unqualifiedRuleName} ::= ${ruleName} <END_OF_LINE> ;`;

  return unqualifiedRuleBNF;
}

function unqualifiedRuleNameFromRuleName(ruleName) {
  const capitalisedRuleName = capitaliseRuleName(ruleName),
        unqualifiedRuleName = `unqualified${capitalisedRuleName}`;

  return unqualifiedRuleName;
}

module.exports = {
  findRuleByRuleName,
  qualifiedRuleBNFFromRuleName,
  qualifiedRuleNameFromRuleName,
  unqualifiedRuleBNFFromRuleName,
  unqualifiedRuleNameFromRuleName
};

function capitaliseRuleName(ruleName) {
  const characters = ruleName,  ///
        firstCharacter = first(characters),
        uppercaseFirstCharacter = firstCharacter.toUpperCase(),
        remainingCharacters = characters.slice(1),  ///
        capitalisedRuleName = `${uppercaseFirstCharacter}${remainingCharacters}`;

  return capitalisedRuleName;
}
