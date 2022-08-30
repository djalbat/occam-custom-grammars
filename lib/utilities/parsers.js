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
var _occamParsers = require("occam-parsers");
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
var rulesFromBNF = _occamParsers.parserUtilities.rulesFromBNF, parserFromRules = _occamParsers.parserUtilities.parserFromRules, parserFromRulesAndStartRuleName = _occamParsers.parserUtilities.parserFromRulesAndStartRuleName;
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
    rules = (0, _occamGrammarUtilities.eliminateLeftRecursion)(rules); ///
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GLCBwYXJzZXJGcm9tUnVsZXMsIHBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHBhcnNlclV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgeyBibmYgfSA9IEZsb3JlbmNlUGFyc2VyLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZsb3JlbmNlUGFyc2VyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoRmxvcmVuY2VQYXJzZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZVBhcnNlckZyb21CTkZTdGFydFJ1bGVOYW1lQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgc3RhcnRSdWxlTmFtZSwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKEZsb3JlbmNlUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcixcbiAgZmxvcmVuY2VQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyLFxuICBmbG9yZW5jZVBhcnNlckZyb21CTkZTdGFydFJ1bGVOYW1lQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyXG59O1xuXG5mdW5jdGlvbiBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXIuZ2V0UnVsZXMoKTtcblxuICBydWxlcyA9IFsgLy8vXG4gICAgLi4ucnVsZXMsXG4gICAgLi4uY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNcbiAgXTtcblxuICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl0sIm5hbWVzIjpbImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyRnJvbUJORlN0YXJ0UnVsZU5hbWVBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiYm5mIiwiRmxvcmVuY2VQYXJzZXIiLCJydWxlcyIsInJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyIiwic3RhcnRSdWxlTmFtZSIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiZ2V0UnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBUUdBLHVDQUF1QztlQUF2Q0EsdUNBQXVDOztJQVF2Q0MsNkNBQTZDO2VBQTdDQSw2Q0FBNkM7O0lBTzdDQywwREFBMEQ7ZUFBMURBLDBEQUEwRDs7SUFPMUUsT0FJRTtlQUpGLFFBSUU7Ozs2QkFoQzZCLGdCQUFnQjs0QkFDZixlQUFlO3FDQUNSLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsSUFBUUMsWUFBWSxHQUF1REMsYUFBZSxnQkFBQSxDQUFsRkQsWUFBWSxFQUFFRSxlQUFlLEdBQXNDRCxhQUFlLGdCQUFBLENBQXBFQyxlQUFlLEVBQUVDLCtCQUErQixHQUFLRixhQUFlLGdCQUFBLENBQW5ERSwrQkFBK0IsQUFBcUI7QUFFcEYsU0FBU04sdUNBQXVDLENBQUNPLHFCQUFxQixFQUFFO0lBQzdFLElBQU0sQUFBRUMsR0FBRyxHQUFLQyxjQUFjLGVBQUEsQ0FBdEJELEdBQUcsQUFBbUIsRUFDeEJFLEtBQUssR0FBR0Msb0NBQW9DLENBQUNILEdBQUcsRUFBRUQscUJBQXFCLENBQUMsRUFDeEVLLGNBQWMsR0FBR1AsZUFBZSxDQUFDSSxjQUFjLGVBQUEsRUFBRUMsS0FBSyxDQUFDLEFBQUM7SUFFOUQsT0FBT0UsY0FBYyxDQUFDO0FBQ3hCLENBQUM7QUFFTSxTQUFTWCw2Q0FBNkMsQ0FBQ08sR0FBRyxFQUFFRCxxQkFBcUIsRUFBRTtJQUN4RixJQUFNRyxLQUFLLEdBQUdDLG9DQUFvQyxDQUFDSCxHQUFHLEVBQUVELHFCQUFxQixDQUFDLEVBQ3hFSyxjQUFjLEdBQUdQLGVBQWUsQ0FBQ0ksY0FBYyxlQUFBLEVBQUVDLEtBQUssQ0FBQyxBQUFDO0lBRTlELE9BQU9FLGNBQWMsQ0FBQztBQUN4QixDQUFDO0FBRU0sU0FBU1YsMERBQTBELENBQUNNLEdBQUcsRUFBRUssYUFBYSxFQUFFTixxQkFBcUIsRUFBRTtJQUNwSCxJQUFNRyxLQUFLLEdBQUdDLG9DQUFvQyxDQUFDSCxHQUFHLEVBQUVELHFCQUFxQixDQUFDLEVBQ3hFSyxjQUFjLEdBQUdOLCtCQUErQixDQUFDRyxjQUFjLGVBQUEsRUFBRUMsS0FBSyxFQUFFRyxhQUFhLENBQUMsQUFBQztJQUU3RixPQUFPRCxjQUFjLENBQUM7QUFDeEIsQ0FBQztJQUVELFFBSUUsR0FKYTtJQUNiWix1Q0FBdUMsRUFBdkNBLHVDQUF1QztJQUN2Q0MsNkNBQTZDLEVBQTdDQSw2Q0FBNkM7SUFDN0NDLDBEQUEwRCxFQUExREEsMERBQTBEO0NBQzNEO0FBRUQsU0FBU1Msb0NBQW9DLENBQUNILEdBQUcsRUFBRUQscUJBQXFCLEVBQUU7SUFDeEUsSUFBSUcsS0FBSyxHQUFHUCxZQUFZLENBQUNLLEdBQUcsQ0FBQyxBQUFDO0lBRTlCLElBQU1NLDBCQUEwQixHQUFHUCxxQkFBcUIsQ0FBQ1EsUUFBUSxFQUFFLEFBQUM7SUFFcEVMLEtBQUssR0FBRyxBQUNOLG1CQUFHQSxLQUFLLENBQUxBLFFBQ0gsbUJBQUdJLDBCQUEwQixDQUExQkEsQ0FDSixDQUFDO0lBRUZKLEtBQUssR0FBR00sSUFBQUEsc0JBQXNCLHVCQUFBLEVBQUNOLEtBQUssQ0FBQyxDQUFDLENBQUUsR0FBRztJQUUzQyxPQUFPQSxLQUFLLENBQUM7QUFDZixDQUFDIn0=