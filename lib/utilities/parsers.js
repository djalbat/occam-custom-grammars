"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.florenceParserFromCombinedCustomGrammar = florenceParserFromCombinedCustomGrammar;
exports.florenceParserFromBNFAndCombinedCustomGrammar = florenceParserFromBNFAndCombinedCustomGrammar;
exports.default = void 0;
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
var rulesFromBNF = _occamGrammarUtilities.parserUtilities.rulesFromBNF, parserFromRules = _occamGrammarUtilities.parserUtilities.parserFromRules;
function florenceParserFromCombinedCustomGrammar(combinedCustomGrammar) {
    var bnf = _occamGrammars.FlorenceParser.bnf, rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), florenceParser = parserFromRules(_occamGrammars.FlorenceParser, rules);
    return florenceParser;
}
function florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
    var rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), florenceParser = parserFromRules(_occamGrammars.FlorenceParser, rules);
    return florenceParser;
}
var _default = {
    florenceParserFromCombinedCustomGrammar: florenceParserFromCombinedCustomGrammar,
    florenceParserFromBNFAndCombinedCustomGrammar: florenceParserFromBNFAndCombinedCustomGrammar
};
exports.default = _default;
function rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
    var rules = rulesFromBNF(bnf);
    var combinedCustomGrammarRules = combinedCustomGrammar.getRules();
    rules = _toConsumableArray(rules).concat(_toConsumableArray(combinedCustomGrammarRules));
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHsgYm5mIH0gPSBGbG9yZW5jZVBhcnNlcixcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhGbG9yZW5jZVBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3JlbmNlUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZsb3JlbmNlUGFyc2VyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcixcbiAgZmxvcmVuY2VQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyXG59O1xuXG5mdW5jdGlvbiBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXIuZ2V0UnVsZXMoKTtcblxuICBydWxlcyA9IFtcbiAgICAuLi5ydWxlcyxcbiAgICAuLi5jb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1xuICBdO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZVBhcnNlckZyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJwYXJzZXJGcm9tUnVsZXMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJibmYiLCJGbG9yZW5jZVBhcnNlciIsInJ1bGVzIiwicnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VQYXJzZXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyIsImdldFJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7UUFPR0EsdUNBQXVDLEdBQXZDQSx1Q0FBdUM7UUFRdkNDLDZDQUE2QyxHQUE3Q0EsNkNBQTZDOztBQWI5QixJQUFBLGNBQWdCLFdBQWhCLGdCQUFnQixDQUFBO0FBQ2YsSUFBQSxzQkFBeUIsV0FBekIseUJBQXlCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQVFDLFlBQVksR0FBc0JDLHNCQUFlLGdCQUFBLENBQWpERCxZQUFZLEVBQUVFLGVBQWUsR0FBS0Qsc0JBQWUsZ0JBQUEsQ0FBbkNDLGVBQWUsQUFBcUI7QUFFbkQsU0FBU0osdUNBQXVDLENBQUNLLHFCQUFxQixFQUFFO0lBQzdFLElBQU0sQUFBRUMsR0FBRyxHQUFLQyxjQUFjLGVBQUEsQ0FBdEJELEdBQUcsQUFBbUIsRUFDeEJFLEtBQUssR0FBR0Msb0NBQW9DLENBQUNILEdBQUcsRUFBRUQscUJBQXFCLENBQUMsRUFDeEVLLGNBQWMsR0FBR04sZUFBZSxDQUFDRyxjQUFjLGVBQUEsRUFBRUMsS0FBSyxDQUFDLEFBQUM7SUFFOUQsT0FBT0UsY0FBYyxDQUFDO0NBQ3ZCO0FBRU0sU0FBU1QsNkNBQTZDLENBQUNLLEdBQUcsRUFBRUQscUJBQXFCLEVBQUU7SUFDeEYsSUFBTUcsS0FBSyxHQUFHQyxvQ0FBb0MsQ0FBQ0gsR0FBRyxFQUFFRCxxQkFBcUIsQ0FBQyxFQUN4RUssY0FBYyxHQUFHTixlQUFlLENBQUNHLGNBQWMsZUFBQSxFQUFFQyxLQUFLLENBQUMsQUFBQztJQUU5RCxPQUFPRSxjQUFjLENBQUM7Q0FDdkI7ZUFFYztJQUNiVix1Q0FBdUMsRUFBdkNBLHVDQUF1QztJQUN2Q0MsNkNBQTZDLEVBQTdDQSw2Q0FBNkM7Q0FDOUM7O0FBRUQsU0FBU1Esb0NBQW9DLENBQUNILEdBQUcsRUFBRUQscUJBQXFCLEVBQUU7SUFDeEUsSUFBSUcsS0FBSyxHQUFHTixZQUFZLENBQUNJLEdBQUcsQ0FBQyxBQUFDO0lBRTlCLElBQU1LLDBCQUEwQixHQUFHTixxQkFBcUIsQ0FBQ08sUUFBUSxFQUFFLEFBQUM7SUFFcEVKLEtBQUssR0FBRyxBQUNOLG1CQUFHQSxLQUFLLENBQUxBLFFBQ0gsbUJBQUdHLDBCQUEwQixDQUExQkEsQ0FDSixDQUFDO0lBRUYsT0FBT0gsS0FBSyxDQUFDO0NBQ2QifQ==