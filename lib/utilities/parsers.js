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
var rulesFromBNF = _occamGrammarUtilities.rulesUtilities.rulesFromBNF, parserFromRules = _occamGrammarUtilities.parserUtilities.parserFromRules, parserFromRulesAndStartRuleName = _occamGrammarUtilities.parserUtilities.parserFromRulesAndStartRuleName;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IHJ1bGVzVXRpbGl0aWVzLCBwYXJzZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBwYXJzZXJGcm9tUnVsZXMsIHBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHBhcnNlclV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgeyBibmYgfSA9IEZsb3JlbmNlUGFyc2VyLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZsb3JlbmNlUGFyc2VyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoRmxvcmVuY2VQYXJzZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZVBhcnNlckZyb21CTkZTdGFydFJ1bGVOYW1lQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgc3RhcnRSdWxlTmFtZSwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKEZsb3JlbmNlUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcixcbiAgZmxvcmVuY2VQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyLFxuICBmbG9yZW5jZVBhcnNlckZyb21CTkZTdGFydFJ1bGVOYW1lQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyXG59O1xuXG5mdW5jdGlvbiBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXIuZ2V0UnVsZXMoKTtcblxuICBydWxlcyA9IFtcbiAgICAuLi5ydWxlcyxcbiAgICAuLi5jb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1xuICBdO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZVBhcnNlckZyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZVBhcnNlckZyb21CTkZTdGFydFJ1bGVOYW1lQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQk5GIiwicnVsZXNVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiYm5mIiwiRmxvcmVuY2VQYXJzZXIiLCJydWxlcyIsInJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyIiwic3RhcnRSdWxlTmFtZSIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiZ2V0UnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFRR0EsdUNBQXVDO2VBQXZDQSx1Q0FBdUM7O0lBUXZDQyw2Q0FBNkM7ZUFBN0NBLDZDQUE2Qzs7SUFPN0NDLDBEQUEwRDtlQUExREEsMERBQTBEOztJQU8xRSxPQUlFO2VBSkYsUUFJRTs7OzZCQWhDNkIsZ0JBQWdCO3FDQUNDLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsSUFBTSxBQUFFQyxZQUFZLEdBQUtDLHNCQUFjLGVBQUEsQ0FBL0JELFlBQVksQUFBbUIsRUFDL0JFLGVBQWUsR0FBc0NDLHNCQUFlLGdCQUFBLENBQXBFRCxlQUFlLEVBQUVFLCtCQUErQixHQUFLRCxzQkFBZSxnQkFBQSxDQUFuREMsK0JBQStCLEFBQXFCO0FBRXRFLFNBQVNQLHVDQUF1QyxDQUFDUSxxQkFBcUIsRUFBRTtJQUM3RSxJQUFNLEFBQUVDLEdBQUcsR0FBS0MsY0FBYyxlQUFBLENBQXRCRCxHQUFHLEFBQW1CLEVBQ3hCRSxLQUFLLEdBQUdDLG9DQUFvQyxDQUFDSCxHQUFHLEVBQUVELHFCQUFxQixDQUFDLEVBQ3hFSyxjQUFjLEdBQUdSLGVBQWUsQ0FBQ0ssY0FBYyxlQUFBLEVBQUVDLEtBQUssQ0FBQyxBQUFDO0lBRTlELE9BQU9FLGNBQWMsQ0FBQztDQUN2QjtBQUVNLFNBQVNaLDZDQUE2QyxDQUFDUSxHQUFHLEVBQUVELHFCQUFxQixFQUFFO0lBQ3hGLElBQU1HLEtBQUssR0FBR0Msb0NBQW9DLENBQUNILEdBQUcsRUFBRUQscUJBQXFCLENBQUMsRUFDeEVLLGNBQWMsR0FBR1IsZUFBZSxDQUFDSyxjQUFjLGVBQUEsRUFBRUMsS0FBSyxDQUFDLEFBQUM7SUFFOUQsT0FBT0UsY0FBYyxDQUFDO0NBQ3ZCO0FBRU0sU0FBU1gsMERBQTBELENBQUNPLEdBQUcsRUFBRUssYUFBYSxFQUFFTixxQkFBcUIsRUFBRTtJQUNwSCxJQUFNRyxLQUFLLEdBQUdDLG9DQUFvQyxDQUFDSCxHQUFHLEVBQUVELHFCQUFxQixDQUFDLEVBQ3hFSyxjQUFjLEdBQUdOLCtCQUErQixDQUFDRyxjQUFjLGVBQUEsRUFBRUMsS0FBSyxFQUFFRyxhQUFhLENBQUMsQUFBQztJQUU3RixPQUFPRCxjQUFjLENBQUM7Q0FDdkI7SUFFRCxRQUlFLEdBSmE7SUFDYmIsdUNBQXVDLEVBQXZDQSx1Q0FBdUM7SUFDdkNDLDZDQUE2QyxFQUE3Q0EsNkNBQTZDO0lBQzdDQywwREFBMEQsRUFBMURBLDBEQUEwRDtDQUMzRDtBQUVELFNBQVNVLG9DQUFvQyxDQUFDSCxHQUFHLEVBQUVELHFCQUFxQixFQUFFO0lBQ3hFLElBQUlHLEtBQUssR0FBR1IsWUFBWSxDQUFDTSxHQUFHLENBQUMsQUFBQztJQUU5QixJQUFNTSwwQkFBMEIsR0FBR1AscUJBQXFCLENBQUNRLFFBQVEsRUFBRSxBQUFDO0lBRXBFTCxLQUFLLEdBQUcsQUFDTixtQkFBR0EsS0FBSyxDQUFMQSxRQUNILG1CQUFHSSwwQkFBMEIsQ0FBMUJBLENBQ0osQ0FBQztJQUVGLE9BQU9KLEtBQUssQ0FBQztDQUNkIn0=