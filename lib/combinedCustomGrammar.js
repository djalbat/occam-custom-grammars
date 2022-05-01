"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _defaultCustomGrammar = _interopRequireDefault(require("./defaultCustomGrammar"));
var _constants = require("./constants");
var _ruleNames = require("./ruleNames");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var rulesFromBNF = _occamGrammarUtilities.parserUtilities.rulesFromBNF;
var CombinedCustomGrammar = /*#__PURE__*/ function() {
    function CombinedCustomGrammar(lexicalPattern, rules) {
        _classCallCheck(this, CombinedCustomGrammar);
        this.lexicalPattern = lexicalPattern;
        this.rules = rules;
    }
    _createClass(CombinedCustomGrammar, [
        {
            key: "getLexicalPattern",
            value: function getLexicalPattern() {
                return this.lexicalPattern;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                return this.rules;
            }
        }
    ], [
        {
            key: "fromCustomGrammars",
            value: function fromCustomGrammars(customGrammars) {
                var metastatementRules = metastatementRulesFromCustomGrammarsAndDefaultBNF(customGrammars), statementRules = statementRulesFromCustomGrammarsAndDefaultBNF(customGrammars), expressionRules = expressionRulesFromCustomGrammarsAndDefaultBNF(customGrammars), termRules = termRulesFromCustomGrammarsAndDefaultBNF(customGrammars), lexicalPattern = lexicalPatternFromCustomGrammars(customGrammars), rules = _toConsumableArray(metastatementRules).concat(_toConsumableArray(statementRules), _toConsumableArray(expressionRules), _toConsumableArray(termRules));
                var combinedCustomGrammar = new CombinedCustomGrammar(lexicalPattern, rules);
                return combinedCustomGrammar;
            }
        }
    ]);
    return CombinedCustomGrammar;
}();
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
    var lexicalPatterns1 = customGrammars.reduce(function(lexicalPatterns, customGrammar) {
        var lexicalPattern = customGrammar.getLexicalPattern();
        if (lexicalPattern !== _constants.EMPTY_STRING) {
            lexicalPatterns.push(lexicalPattern);
        }
        return lexicalPatterns;
    }, []), defaultCustomGrammarLexicalPattern = _defaultCustomGrammar.default.getLexicalPattern();
    lexicalPatterns1.unshift(defaultCustomGrammarLexicalPattern);
    lexicalPatterns1.reverse();
    var lexicalPatternsString = lexicalPatterns1.join("|"), lexicalPattern1 = "^(?:".concat(lexicalPatternsString, ")");
    return lexicalPattern1;
}
function rulesFromRuleNameCustomGrammarsAndDefaultBNF(ruleName, customGrammars) {
    var bnfs1 = customGrammars.reduce(function(bnfs, customGrammar) {
        var bnf = customGrammar.getBNF(ruleName);
        if (bnf !== _constants.EMPTY_STRING) {
            bnfs.push(bnf);
        }
        return bnfs;
    }, []), defaultCustomGrammarBNF = _defaultCustomGrammar.default.getBNF(ruleName);
    bnfs1.unshift(defaultCustomGrammarBNF);
    var bnf1 = bnfs1.join(_constants.EMPTY_STRING), rules = rulesFromBNF(bnf1);
    var outerIndex = 0, length = rules.length;
    while(outerIndex < length){
        var outerRule = rules[outerIndex], outerRuleName = outerRule.getName();
        var outerRuleDefinitions = outerRule.getDefinitions();
        var innerIndex = outerIndex + 1;
        while(innerIndex < length){
            var innerRule = rules[innerIndex], innerRuleName = innerRule.getName();
            if (innerRuleName === outerRuleName) {
                var innerRuleDefinitions = innerRule.getDefinitions();
                outerRuleDefinitions = _toConsumableArray(innerRuleDefinitions).concat(_toConsumableArray(outerRuleDefinitions));
                outerRule.setDefinitions(outerRuleDefinitions);
                var start = innerIndex, deleteCount = 1;
                rules.splice(start, deleteCount);
                length = rules.length;
            } else {
                innerIndex++;
            }
        }
        outerIndex++;
        length = rules.length;
    }
    return rules;
}
exports.default = CombinedCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgZGVmYXVsdEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgRVhQUkVTU0lPTl9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUsIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKGxleGljYWxQYXR0ZXJuLCBydWxlcykge1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cbiAgXG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFJ1bGVzID0gbWV0YXN0YXRlbWVudFJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgc3RhdGVtZW50UnVsZXMgPSBzdGF0ZW1lbnRSdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGV4cHJlc3Npb25SdWxlcyA9IGV4cHJlc3Npb25SdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIHRlcm1SdWxlcyA9IHRlcm1SdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm5Gcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIHJ1bGVzID0gW1xuICAgICAgICAgICAgLi4ubWV0YXN0YXRlbWVudFJ1bGVzLFxuICAgICAgICAgICAgLi4uc3RhdGVtZW50UnVsZXMsXG4gICAgICAgICAgICAuLi5leHByZXNzaW9uUnVsZXMsXG4gICAgICAgICAgICAuLi50ZXJtUnVsZXNcbiAgICAgICAgICBdO1xuXG4gICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbmV3IENvbWJpbmVkQ3VzdG9tR3JhbW1hcihsZXhpY2FsUGF0dGVybiwgcnVsZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWV0YXN0YXRlbWVudFJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBtZXRhc3RhdGVtZW50UnVsZU5hbWUgPSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICBtZXRhc3RhdGVtZW50UnVsZXMgPSBydWxlc0Zyb21SdWxlTmFtZUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihtZXRhc3RhdGVtZW50UnVsZU5hbWUsIGN1c3RvbUdyYW1tYXJzKTtcblxuICByZXR1cm4gbWV0YXN0YXRlbWVudFJ1bGVzO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRSdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3Qgc3RhdGVtZW50UnVsZU5hbWUgPSBTVEFURU1FTlRfUlVMRV9OQU1FLCAgLy8vXG4gICAgICAgIHN0YXRlbWVudFJ1bGVzID0gcnVsZXNGcm9tUnVsZU5hbWVDdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoc3RhdGVtZW50UnVsZU5hbWUsIGN1c3RvbUdyYW1tYXJzKTtcblxuICByZXR1cm4gc3RhdGVtZW50UnVsZXM7XG59XG5cbmZ1bmN0aW9uIGV4cHJlc3Npb25SdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgZXhwcmVzc2lvblJ1bGVOYW1lID0gRVhQUkVTU0lPTl9SVUxFX05BTUUsICAvLy9cbiAgICAgICAgZXhwcmVzc2lvblJ1bGVzID0gcnVsZXNGcm9tUnVsZU5hbWVDdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoZXhwcmVzc2lvblJ1bGVOYW1lLCBjdXN0b21HcmFtbWFycyk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25SdWxlcztcbn1cblxuZnVuY3Rpb24gdGVybVJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycykge1xuICBjb25zdCB0ZXJtUnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSwgIC8vL1xuICAgICAgICB0ZXJtUnVsZXMgPSBydWxlc0Zyb21SdWxlTmFtZUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORih0ZXJtUnVsZU5hbWUsIGN1c3RvbUdyYW1tYXJzKTtcblxuICByZXR1cm4gdGVybVJ1bGVzO1xufVxuXG5mdW5jdGlvbiBsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBsZXhpY2FsUGF0dGVybnMgPSBjdXN0b21HcmFtbWFycy5yZWR1Y2UoKGxleGljYWxQYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgICAgaWYgKGxleGljYWxQYXR0ZXJuICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgIGxleGljYWxQYXR0ZXJucy5wdXNoKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbGV4aWNhbFBhdHRlcm5zO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4gPSBkZWZhdWx0Q3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gIGxleGljYWxQYXR0ZXJucy51bnNoaWZ0KGRlZmF1bHRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4pO1xuXG4gIGxleGljYWxQYXR0ZXJucy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgbGV4aWNhbFBhdHRlcm5zU3RyaW5nID0gbGV4aWNhbFBhdHRlcm5zLmpvaW4oXCJ8XCIpLCAvLy9cbiAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBgXig/OiR7bGV4aWNhbFBhdHRlcm5zU3RyaW5nfSlgO1xuXG4gIHJldHVybiBsZXhpY2FsUGF0dGVybjtcbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tUnVsZU5hbWVDdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYocnVsZU5hbWUsIGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IGJuZnMgPSBjdXN0b21HcmFtbWFycy5yZWR1Y2UoKGJuZnMsIGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORihydWxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoYm5mICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgIGJuZnMucHVzaChibmYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBibmZzO1xuICAgICAgICB9LCBbXSksXG4gICAgICAgIGRlZmF1bHRDdXN0b21HcmFtbWFyQk5GID0gZGVmYXVsdEN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICBibmZzLnVuc2hpZnQoZGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYpO1xuXG4gIGNvbnN0IGJuZiA9IGJuZnMuam9pbihFTVBUWV9TVFJJTkcpLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICB3aGlsZSAob3V0ZXJJbmRleCA8IGxlbmd0aCkge1xuICAgIGNvbnN0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdLFxuICAgICAgICAgIG91dGVyUnVsZU5hbWUgPSBvdXRlclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG91dGVyUnVsZURlZmluaXRpb25zID0gb3V0ZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBsZXQgaW5uZXJJbmRleCA9IG91dGVySW5kZXggKyAxO1xuXG4gICAgd2hpbGUgKGlubmVySW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlubmVyUnVsZSA9IHJ1bGVzW2lubmVySW5kZXhdLFxuICAgICAgICAgICAgaW5uZXJSdWxlTmFtZSA9IGlubmVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChpbm5lclJ1bGVOYW1lID09PSBvdXRlclJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGlubmVyUnVsZURlZmluaXRpb25zID0gaW5uZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgLi4uaW5uZXJSdWxlRGVmaW5pdGlvbnMsXG4gICAgICAgICAgLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnNcbiAgICAgICAgXTtcblxuICAgICAgICBvdXRlclJ1bGUuc2V0RGVmaW5pdGlvbnMob3V0ZXJSdWxlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5uZXJJbmRleCwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBydWxlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3V0ZXJJbmRleCsrO1xuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhpY2FsUGF0dGVybiIsInJ1bGVzIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJnZXRSdWxlcyIsImZyb21DdXN0b21HcmFtbWFycyIsImN1c3RvbUdyYW1tYXJzIiwibWV0YXN0YXRlbWVudFJ1bGVzIiwibWV0YXN0YXRlbWVudFJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORiIsInN0YXRlbWVudFJ1bGVzIiwic3RhdGVtZW50UnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwiZXhwcmVzc2lvblJ1bGVzIiwiZXhwcmVzc2lvblJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORiIsInRlcm1SdWxlcyIsInRlcm1SdWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwicnVsZXNGcm9tUnVsZU5hbWVDdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJzdGF0ZW1lbnRSdWxlTmFtZSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJleHByZXNzaW9uUnVsZU5hbWUiLCJFWFBSRVNTSU9OX1JVTEVfTkFNRSIsInRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwibGV4aWNhbFBhdHRlcm5zIiwicmVkdWNlIiwiY3VzdG9tR3JhbW1hciIsIkVNUFRZX1NUUklORyIsInB1c2giLCJkZWZhdWx0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJ1bnNoaWZ0IiwicmV2ZXJzZSIsImxleGljYWxQYXR0ZXJuc1N0cmluZyIsImpvaW4iLCJydWxlTmFtZSIsImJuZnMiLCJibmYiLCJnZXRCTkYiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsIm91dGVySW5kZXgiLCJsZW5ndGgiLCJvdXRlclJ1bGUiLCJvdXRlclJ1bGVOYW1lIiwiZ2V0TmFtZSIsIm91dGVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwic2V0RGVmaW5pdGlvbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiWUFBWSxDQUFDOzs7OztBQUVtQixJQUFBLHNCQUF5QixXQUF6Qix5QkFBeUIsQ0FBQTtBQUV4QixJQUFBLHFCQUF3QixrQ0FBeEIsd0JBQXdCLEVBQUE7QUFFNUIsSUFBQSxVQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ3lELElBQUEsVUFBYSxXQUFiLGFBQWEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEgsSUFBTSxBQUFFQSxZQUFZLEdBQUtDLHNCQUFlLGdCQUFBLENBQWhDRCxZQUFZLEFBQW9CLEFBQUM7QUFFMUIsSUFBQSxBQUFNRSxxQkFBcUIsaUJBaUN2QyxBQWpDWTthQUFNQSxxQkFBcUIsQ0FDNUJDLGNB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