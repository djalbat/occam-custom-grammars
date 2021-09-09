"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _defaultCustomGrammar = _interopRequireDefault(require("./defaultCustomGrammar"));
var _constants = require("./constants");
var _ruleName = require("./utilities/ruleName");
var _rules = require("./utilities/rules");
var _customGrammars = require("./utilities/customGrammars");
var _ruleNames = require("./ruleNames");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, unshift = _necessary.arrayUtilities.unshift;
var CombinedCustomGrammar = /*#__PURE__*/ function() {
    function CombinedCustomGrammar(lexicalPattern, ruleMap) {
        _classCallCheck(this, CombinedCustomGrammar);
        this.lexicalPattern = lexicalPattern;
        this.ruleMap = ruleMap;
    }
    _createClass(CombinedCustomGrammar, [
        {
            key: "getLexicalPattern",
            value: function getLexicalPattern() {
                return this.lexicalPattern;
            }
        },
        {
            key: "getRuleMap",
            value: function getRuleMap() {
                return this.ruleMap;
            }
        }
    ], [
        {
            key: "fromCustomGrammars",
            value: function fromCustomGrammars(customGrammars) {
                var metastatementRules = metastatementRulesFromCustomGrammarsAndDefaultBNF(customGrammars), statementRules = statementRulesFromCustomGrammarsAndDefaultBNF(customGrammars), expressionRules = expressionRulesFromCustomGrammarsAndDefaultBNF(customGrammars), termRules = termRulesFromCustomGrammarsAndDefaultBNF(customGrammars), rules = [].concat(metastatementRules).concat(statementRules).concat(expressionRules).concat(termRules), startRule = startRuleFromNothing(), lexicalPattern = lexicalPatternFromCustomGrammars(customGrammars), ruleMap = (0, _rules).ruleMapFromRules(rules);
                ruleMap[_ruleNames.START_RULE_NAME] = startRule;
                (0, _occamGrammarUtilities).eliminateLeftRecursion(startRule, ruleMap);
                delete ruleMap[_ruleNames.START_RULE_NAME];
                var combinedCustomGrammar = new CombinedCustomGrammar(lexicalPattern, ruleMap);
                return combinedCustomGrammar;
            }
        }
    ]);
    return CombinedCustomGrammar;
}();
exports.default = CombinedCustomGrammar;
function metastatementRulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
    var metastatementRuleName = _ruleNames.METASTATEMENT_RULE_NAME, metastatementRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(metastatementRuleName, customGrammars);
    return metastatementRules;
}
function statementRulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
    var statementRuleName = _ruleNames.STATEMENT_RULE_NAME, statementRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(statementRuleName, customGrammars);
    return statementRules;
}
function expressionRulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
    var expressionRuleName = _ruleNames.EXPRESSION_RULE_NAME, expressionRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(expressionRuleName, customGrammars);
    return expressionRules;
}
function termRulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
    var termRuleName = _ruleNames.TERM_RULE_NAME, termRules = rulesFromRuleNameCustomGrammarsAndDefaultBNF(termRuleName, customGrammars);
    return termRules;
}
function lexicalPatternFromCustomGrammars(customGrammars) {
    var lexicalPatterns = (0, _customGrammars).lexicalPatternsFromCustomGrammars(customGrammars), defaultCustomGrammarLexicalPattern = _defaultCustomGrammar.default.getLexicalPattern(), defaultLexicalPattern = defaultCustomGrammarLexicalPattern; ///
    lexicalPatterns.reverse();
    lexicalPatterns.push(defaultLexicalPattern);
    filter(lexicalPatterns, function(lexicalPattern) {
        if (lexicalPattern !== _constants.EMPTY_STRING) {
            return true;
        }
    });
    var lexicalPatternsString = lexicalPatterns.join("|"), lexicalPattern = "^(?:".concat(lexicalPatternsString, ")");
    return lexicalPattern;
}
function startRuleFromNothing() {
    var startRulesBNF = " ".concat(_ruleNames.START_RULE_NAME, " ::= ").concat(_ruleNames.METASTATEMENT_RULE_NAME, " | ").concat(_ruleNames.STATEMENT_RULE_NAME, " | ").concat(_ruleNames.EXPRESSION_RULE_NAME, " | ").concat(_ruleNames.TERM_RULE_NAME, " ; "), startRules = (0, _rules).rulesFromBNF(startRulesBNF), firstStartRule = first(startRules), startRule = firstStartRule; ///
    return startRule;
}
function remainingRulesFromRulesAndMainRule(rules, mainRule) {
    var remainingRules = rules.filter(function(rule) {
        if (rule !== mainRule) {
            return true;
        }
    });
    return remainingRules;
}
function mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, bnfs) {
    var defaultCustomGrammarBNF = _defaultCustomGrammar.default.getBNF(ruleName), defaultBNF = defaultCustomGrammarBNF, defaultRules = (0, _rules).rulesFromBNF(defaultBNF), defaultMainRule = (0, _ruleName).findRuleByRuleName(ruleName, defaultRules), defaultMainRuleDefinitions = defaultMainRule.getDefinitions();
    bnfs.forEach(function(bnf) {
        var rules = (0, _rules).rulesFromBNF(bnf), mainRule = (0, _ruleName).findRuleByRuleName(ruleName, rules), mainRuleDefinitions = mainRule !== null ? mainRule.getDefinitions() : [];
        unshift(defaultMainRuleDefinitions, mainRuleDefinitions);
    });
    var mainRule = defaultMainRule; ///
    return mainRule;
}
function remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, bnfs) {
    var defaultCustomGrammarBNF = _defaultCustomGrammar.default.getBNF(ruleName), defaultBNF = defaultCustomGrammarBNF, defaultRules = (0, _rules).rulesFromBNF(defaultBNF), defaultMainRule = (0, _ruleName).findRuleByRuleName(ruleName, defaultRules), defaultRemainingRules = remainingRulesFromRulesAndMainRule(defaultRules, defaultMainRule);
    bnfs.forEach(function(bnf) {
        var rules = (0, _rules).rulesFromBNF(bnf), mainRule = (0, _ruleName).findRuleByRuleName(ruleName, rules), remainingRules = remainingRulesFromRulesAndMainRule(rules, mainRule);
        unshift(defaultRemainingRules, remainingRules);
    });
    var remainingRules = defaultRemainingRules; ///
    return remainingRules;
}
function rulesFromRuleNameCustomGrammarsAndDefaultBNF(ruleName, customGrammars) {
    var bnfs = (0, _customGrammars).bnfsFromRuleNameAndCustomGrammars(ruleName, customGrammars), mainRule = mainRuleFromRuleNameDefaultBNFAndBNFs(ruleName, bnfs), remainingRules = remainingRulesFromRuleNameDefaultBNFAndBNFs(ruleName, bnfs), rules = [].concat(mainRule).concat(remainingRules);
    return rules;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwibmFtZXMiOlsiYXJyYXlVdGlsaXRpZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJFTVBUWV9TVFJJTkciLCJmaW5kUnVsZUJ5UnVsZU5hbWUiLCJydWxlc0Zyb21CTkYiLCJydWxlTWFwRnJvbVJ1bGVzIiwibGV4aWNhbFBhdHRlcm5zRnJvbUN1c3RvbUdyYW1tYXJzIiwiYm5mc0Zyb21SdWxlTmFtZUFuZEN1c3RvbUdyYW1tYXJzIiwiU1RBUlRfUlVMRV9OQU1FIiwiVEVSTV9SVUxFX05BTUUiLCJFWFBSRVNTSU9OX1JVTEVfTkFNRSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsImZpcnN0IiwiZmlsdGVyIiwidW5zaGlmdCIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbnN0cnVjdG9yIiwibGV4aWNhbFBhdHRlcm4iLCJydWxlTWFwIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJnZXRSdWxlTWFwIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiY3VzdG9tR3JhbW1hcnMiLCJtZXRhc3RhdGVtZW50UnVsZXMiLCJtZXRhc3RhdGVtZW50UnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwic3RhdGVtZW50UnVsZXMiLCJzdGF0ZW1lbnRSdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJleHByZXNzaW9uUnVsZXMiLCJleHByZXNzaW9uUnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwidGVybVJ1bGVzIiwidGVybVJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORiIsInJ1bGVzIiwiY29uY2F0Iiwic3RhcnRSdWxlIiwic3RhcnRSdWxlRnJvbU5vdGhpbmciLCJsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsInJ1bGVzRnJvbVJ1bGVOYW1lQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwic3RhdGVtZW50UnVsZU5hbWUiLCJleHByZXNzaW9uUnVsZU5hbWUiLCJ0ZXJtUnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybnMiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuIiwiZGVmYXVsdExleGljYWxQYXR0ZXJuIiwicmV2ZXJzZSIsInB1c2giLCJsZXhpY2FsUGF0dGVybnNTdHJpbmciLCJqb2luIiwic3RhcnRSdWxlc0JORiIsInN0YXJ0UnVsZXMiLCJmaXJzdFN0YXJ0UnVsZSIsInJlbWFpbmluZ1J1bGVzRnJvbVJ1bGVzQW5kTWFpblJ1bGUiLCJtYWluUnVsZSIsInJlbWFpbmluZ1J1bGVzIiwicnVsZSIsIm1haW5SdWxlRnJvbVJ1bGVOYW1lRGVmYXVsdEJORkFuZEJORnMiLCJydWxlTmFtZSIsImJuZnMiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsImdldEJORiIsImRlZmF1bHRCTkYiLCJkZWZhdWx0UnVsZXMiLCJkZWZhdWx0TWFpblJ1bGUiLCJkZWZhdWx0TWFpblJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZm9yRWFjaCIsImJuZiIsIm1haW5SdWxlRGVmaW5pdGlvbnMiLCJyZW1haW5pbmdSdWxlc0Zyb21SdWxlTmFtZURlZmF1bHRCTkZBbmRCTkZzIiwiZGVmYXVsdFJlbWFpbmluZ1J1bGVzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQixHQUFXLENBQVgsVUFBVztBQUNILEdBQXlCLENBQXpCLHNCQUF5QjtBQUUvQixHQUF3QixDQUF4QixxQkFBd0I7QUFFNUIsR0FBYSxDQUFiLFVBQWE7QUFDUCxHQUFzQixDQUF0QixTQUFzQjtBQUNWLEdBQW1CLENBQW5CLE1BQW1CO0FBQ21CLEdBQTRCLENBQTVCLGVBQTRCO0FBQ0csR0FBYSxDQUFiLFVBQWE7Ozs7Ozs7Ozs7Ozs7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