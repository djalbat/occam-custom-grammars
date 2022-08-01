"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    florenceParserFromCombinedCustomGrammar: function() {
        return florenceParserFromCombinedCustomGrammar;
    },
    florenceParserFromBNFAndCombinedCustomGrammar: function() {
        return florenceParserFromBNFAndCombinedCustomGrammar;
    },
    florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar: function() {
        return florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar;
    },
    default: function() {
        return _default;
    }
});
var _occamGrammars = require("occam-grammars");
var _occamGrammarUtilities = require("occam-grammar-utilities");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
var rulesFromBNF = _occamGrammarUtilities.parserUtilities.rulesFromBNF, parserFromRules = _occamGrammarUtilities.parserUtilities.parserFromRules, parserFromRulesAndStartRuleName = _occamGrammarUtilities.parserUtilities.parserFromRulesAndStartRuleName;
function florenceParserFromCombinedCustomGrammar(combinedCustomGrammar) {
    var bnf = _occamGrammars.FlorenceParser.bnf, rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), florenceParser = parserFromRules(_occamGrammars.FlorenceParser, rules);
    return florenceParser;
}
function florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
    var rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), florenceParser = parserFromRules(_occamGrammars.FlorenceParser, rules);
    return florenceParser;
}
function florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar(bnf, startRuleName, combinedCustomGrammar) {
    var rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), florenceParser = parserFromRulesAndStartRuleName(_occamGrammars.FlorenceParser, rules, startRuleName);
    return florenceParser;
}
var _default = {
    florenceParserFromCombinedCustomGrammar: florenceParserFromCombinedCustomGrammar,
    florenceParserFromBNFAndCombinedCustomGrammar: florenceParserFromBNFAndCombinedCustomGrammar,
    florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar: florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar
};
function rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
    var rules = rulesFromBNF(bnf);
    var combinedCustomGrammarRules = combinedCustomGrammar.getRules();
    rules = _toConsumableArray(rules).concat(_toConsumableArray(combinedCustomGrammarRules));
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzLCBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHsgYm5mIH0gPSBGbG9yZW5jZVBhcnNlcixcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhGbG9yZW5jZVBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3JlbmNlUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZsb3JlbmNlUGFyc2VyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VQYXJzZXJGcm9tQk5GU3RhcnRSdWxlTmFtZUFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIHN0YXJ0UnVsZU5hbWUsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShGbG9yZW5jZVBhcnNlciwgcnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIsXG4gIGZsb3JlbmNlUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcixcbiAgZmxvcmVuY2VQYXJzZXJGcm9tQk5GU3RhcnRSdWxlTmFtZUFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hclxufTtcblxuZnVuY3Rpb24gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzID0gY29tYmluZWRDdXN0b21HcmFtbWFyLmdldFJ1bGVzKCk7XG5cbiAgcnVsZXMgPSBbIC8vL1xuICAgIC4uLnJ1bGVzLFxuICAgIC4uLmNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzXG4gIF07XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl0sIm5hbWVzIjpbImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyRnJvbUJORlN0YXJ0UnVsZU5hbWVBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiYm5mIiwiRmxvcmVuY2VQYXJzZXIiLCJydWxlcyIsInJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyIiwic3RhcnRSdWxlTmFtZSIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiZ2V0UnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFPR0EsdUNBQXVDO2VBQXZDQSx1Q0FBdUM7O0lBUXZDQyw2Q0FBNkM7ZUFBN0NBLDZDQUE2Qzs7SUFPN0NDLDBEQUEwRDtlQUExREEsMERBQTBEOztJQU8xRSxPQUlFO2VBSkYsUUFJRTs7OzZCQS9CNkIsZ0JBQWdCO3FDQUNmLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsSUFBUUMsWUFBWSxHQUF1REMsc0JBQWUsZ0JBQUEsQ0FBbEZELFlBQVksRUFBRUUsZUFBZSxHQUFzQ0Qsc0JBQWUsZ0JBQUEsQ0FBcEVDLGVBQWUsRUFBRUMsK0JBQStCLEdBQUtGLHNCQUFlLGdCQUFBLENBQW5ERSwrQkFBK0IsQUFBcUI7QUFFcEYsU0FBU04sdUNBQXVDLENBQUNPLHFCQUFxQixFQUFFO0lBQzdFLElBQU0sQUFBRUMsR0FBRyxHQUFLQyxjQUFjLGVBQUEsQ0FBdEJELEdBQUcsQUFBbUIsRUFDeEJFLEtBQUssR0FBR0Msb0NBQW9DLENBQUNILEdBQUcsRUFBRUQscUJBQXFCLENBQUMsRUFDeEVLLGNBQWMsR0FBR1AsZUFBZSxDQUFDSSxjQUFjLGVBQUEsRUFBRUMsS0FBSyxDQUFDLEFBQUM7SUFFOUQsT0FBT0UsY0FBYyxDQUFDO0NBQ3ZCO0FBRU0sU0FBU1gsNkNBQTZDLENBQUNPLEdBQUcsRUFBRUQscUJBQXFCLEVBQUU7SUFDeEYsSUFBTUcsS0FBSyxHQUFHQyxvQ0FBb0MsQ0FBQ0gsR0FBRyxFQUFFRCxxQkFBcUIsQ0FBQyxFQUN4RUssY0FBYyxHQUFHUCxlQUFlLENBQUNJLGNBQWMsZUFBQSxFQUFFQyxLQUFLLENBQUMsQUFBQztJQUU5RCxPQUFPRSxjQUFjLENBQUM7Q0FDdkI7QUFFTSxTQUFTViwwREFBMEQsQ0FBQ00sR0FBRyxFQUFFSyxhQUFhLEVBQUVOLHFCQUFxQixFQUFFO0lBQ3BILElBQU1HLEtBQUssR0FBR0Msb0NBQW9DLENBQUNILEdBQUcsRUFBRUQscUJBQXFCLENBQUMsRUFDeEVLLGNBQWMsR0FBR04sK0JBQStCLENBQUNHLGNBQWMsZUFBQSxFQUFFQyxLQUFLLEVBQUVHLGFBQWEsQ0FBQyxBQUFDO0lBRTdGLE9BQU9ELGNBQWMsQ0FBQztDQUN2QjtJQUVELFFBSUUsR0FKYTtJQUNiWix1Q0FBdUMsRUFBdkNBLHVDQUF1QztJQUN2Q0MsNkNBQTZDLEVBQTdDQSw2Q0FBNkM7SUFDN0NDLDBEQUEwRCxFQUExREEsMERBQTBEO0NBQzNEO0FBRUQsU0FBU1Msb0NBQW9DLENBQUNILEdBQUcsRUFBRUQscUJBQXFCLEVBQUU7SUFDeEUsSUFBSUcsS0FBSyxHQUFHUCxZQUFZLENBQUNLLEdBQUcsQ0FBQyxBQUFDO0lBRTlCLElBQU1NLDBCQUEwQixHQUFHUCxxQkFBcUIsQ0FBQ1EsUUFBUSxFQUFFLEFBQUM7SUFFcEVMLEtBQUssR0FBRyxBQUNOLG1CQUFHQSxLQUFLLENBQUxBLFFBQ0gsbUJBQUdJLDBCQUEwQixDQUExQkEsQ0FDSixDQUFDO0lBRUYsT0FBT0osS0FBSyxDQUFDO0NBQ2QifQ==