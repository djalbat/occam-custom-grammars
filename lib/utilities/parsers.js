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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzLCBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHsgYm5mIH0gPSBGbG9yZW5jZVBhcnNlcixcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhGbG9yZW5jZVBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3JlbmNlUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZsb3JlbmNlUGFyc2VyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VQYXJzZXJGcm9tQk5GU3RhcnRSdWxlTmFtZUFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIHN0YXJ0UnVsZU5hbWUsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShGbG9yZW5jZVBhcnNlciwgcnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIsXG4gIGZsb3JlbmNlUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcixcbiAgZmxvcmVuY2VQYXJzZXJGcm9tQk5GU3RhcnRSdWxlTmFtZUFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hclxufTtcblxuZnVuY3Rpb24gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzID0gY29tYmluZWRDdXN0b21HcmFtbWFyLmdldFJ1bGVzKCk7XG5cbiAgcnVsZXMgPSBbXG4gICAgLi4ucnVsZXMsXG4gICAgLi4uY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNcbiAgXTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VQYXJzZXJGcm9tQk5GU3RhcnRSdWxlTmFtZUFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInBhcnNlckZyb21SdWxlcyIsInBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJibmYiLCJGbG9yZW5jZVBhcnNlciIsInJ1bGVzIiwicnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VQYXJzZXIiLCJzdGFydFJ1bGVOYW1lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMiLCJnZXRSdWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQU9HQSx1Q0FBdUM7ZUFBdkNBLHVDQUF1Qzs7SUFRdkNDLDZDQUE2QztlQUE3Q0EsNkNBQTZDOztJQU83Q0MsMERBQTBEO2VBQTFEQSwwREFBMEQ7O0lBTzFFLE9BSUU7ZUFKRixRQUlFOzs7NkJBL0I2QixnQkFBZ0I7cUNBQ2YseUJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFRQyxZQUFZLEdBQXVEQyxzQkFBZSxnQkFBQSxDQUFsRkQsWUFBWSxFQUFFRSxlQUFlLEdBQXNDRCxzQkFBZSxnQkFBQSxDQUFwRUMsZUFBZSxFQUFFQywrQkFBK0IsR0FBS0Ysc0JBQWUsZ0JBQUEsQ0FBbkRFLCtCQUErQixBQUFxQjtBQUVwRixTQUFTTix1Q0FBdUMsQ0FBQ08scUJBQXFCLEVBQUU7SUFDN0UsSUFBTSxBQUFFQyxHQUFHLEdBQUtDLGNBQWMsZUFBQSxDQUF0QkQsR0FBRyxBQUFtQixFQUN4QkUsS0FBSyxHQUFHQyxvQ0FBb0MsQ0FBQ0gsR0FBRyxFQUFFRCxxQkFBcUIsQ0FBQyxFQUN4RUssY0FBYyxHQUFHUCxlQUFlLENBQUNJLGNBQWMsZUFBQSxFQUFFQyxLQUFLLENBQUMsQUFBQztJQUU5RCxPQUFPRSxjQUFjLENBQUM7Q0FDdkI7QUFFTSxTQUFTWCw2Q0FBNkMsQ0FBQ08sR0FBRyxFQUFFRCxxQkFBcUIsRUFBRTtJQUN4RixJQUFNRyxLQUFLLEdBQUdDLG9DQUFvQyxDQUFDSCxHQUFHLEVBQUVELHFCQUFxQixDQUFDLEVBQ3hFSyxjQUFjLEdBQUdQLGVBQWUsQ0FBQ0ksY0FBYyxlQUFBLEVBQUVDLEtBQUssQ0FBQyxBQUFDO0lBRTlELE9BQU9FLGNBQWMsQ0FBQztDQUN2QjtBQUVNLFNBQVNWLDBEQUEwRCxDQUFDTSxHQUFHLEVBQUVLLGFBQWEsRUFBRU4scUJBQXFCLEVBQUU7SUFDcEgsSUFBTUcsS0FBSyxHQUFHQyxvQ0FBb0MsQ0FBQ0gsR0FBRyxFQUFFRCxxQkFBcUIsQ0FBQyxFQUN4RUssY0FBYyxHQUFHTiwrQkFBK0IsQ0FBQ0csY0FBYyxlQUFBLEVBQUVDLEtBQUssRUFBRUcsYUFBYSxDQUFDLEFBQUM7SUFFN0YsT0FBT0QsY0FBYyxDQUFDO0NBQ3ZCO0lBRUQsUUFJRSxHQUphO0lBQ2JaLHVDQUF1QyxFQUF2Q0EsdUNBQXVDO0lBQ3ZDQyw2Q0FBNkMsRUFBN0NBLDZDQUE2QztJQUM3Q0MsMERBQTBELEVBQTFEQSwwREFBMEQ7Q0FDM0Q7QUFFRCxTQUFTUyxvQ0FBb0MsQ0FBQ0gsR0FBRyxFQUFFRCxxQkFBcUIsRUFBRTtJQUN4RSxJQUFJRyxLQUFLLEdBQUdQLFlBQVksQ0FBQ0ssR0FBRyxDQUFDLEFBQUM7SUFFOUIsSUFBTU0sMEJBQTBCLEdBQUdQLHFCQUFxQixDQUFDUSxRQUFRLEVBQUUsQUFBQztJQUVwRUwsS0FBSyxHQUFHLEFBQ04sbUJBQUdBLEtBQUssQ0FBTEEsUUFDSCxtQkFBR0ksMEJBQTBCLENBQTFCQSxDQUNKLENBQUM7SUFFRixPQUFPSixLQUFLLENBQUM7Q0FDZCJ9