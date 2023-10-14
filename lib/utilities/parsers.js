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
    default: function() {
        return _default;
    },
    florenceParserFromBNFAndCombinedCustomGrammar: function() {
        return florenceParserFromBNFAndCombinedCustomGrammar;
    },
    florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar: function() {
        return florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar;
    },
    florenceParserFromCombinedCustomGrammar: function() {
        return florenceParserFromCombinedCustomGrammar;
    },
    florenceParserFromNothing: function() {
        return florenceParserFromNothing;
    }
});
var _occamgrammars = require("occam-grammars");
var _occamparsers = require("occam-parsers");
var _occamgrammarutilities = require("occam-grammar-utilities");
var _combined = /*#__PURE__*/ _interop_require_default(require("../customGrammar/combined"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, parserFromRules = _occamparsers.parserUtilities.parserFromRules, parserFromRulesAndStartRuleName = _occamparsers.parserUtilities.parserFromRulesAndStartRuleName;
function florenceParserFromNothing() {
    var bnf = _occamgrammars.FlorenceParser.bnf, combinedCustomGrammar = _combined.default.fromNothing(), rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), florenceParser = parserFromRules(_occamgrammars.FlorenceParser, rules);
    return florenceParser;
}
function florenceParserFromCombinedCustomGrammar(combinedCustomGrammar) {
    var bnf = _occamgrammars.FlorenceParser.bnf, rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), florenceParser = parserFromRules(_occamgrammars.FlorenceParser, rules);
    return florenceParser;
}
function florenceParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
    var rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), florenceParser = parserFromRules(_occamgrammars.FlorenceParser, rules);
    return florenceParser;
}
function florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar(bnf, startRuleName, combinedCustomGrammar) {
    var rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), florenceParser = parserFromRulesAndStartRuleName(_occamgrammars.FlorenceParser, rules, startRuleName);
    return florenceParser;
}
var _default = {
    florenceParserFromNothing: florenceParserFromNothing,
    florenceParserFromCombinedCustomGrammar: florenceParserFromCombinedCustomGrammar,
    florenceParserFromBNFAndCombinedCustomGrammar: florenceParserFromBNFAndCombinedCustomGrammar,
    florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar: florenceParserFromBNFStartRuleNameAndCombinedCustomGrammar
};
function rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
    var rules = rulesFromBNF(bnf);
    var combinedCustomGrammarRules = combinedCustomGrammar.getRules();
    rules = _to_consumable_array(rules).concat(_to_consumable_array(combinedCustomGrammarRules));
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmxvcmVuY2VQYXJzZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBDb21iaW5lZEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4uL2N1c3RvbUdyYW1tYXIvY29tYmluZWRcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYsIHBhcnNlckZyb21SdWxlcywgcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VQYXJzZXJGcm9tTm90aGluZygpIHtcbiAgY29uc3QgeyBibmYgfSA9IEZsb3JlbmNlUGFyc2VyLFxuICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhGbG9yZW5jZVBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgeyBibmYgfSA9IEZsb3JlbmNlUGFyc2VyLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKEZsb3JlbmNlUGFyc2VyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoRmxvcmVuY2VQYXJzZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gZmxvcmVuY2VQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZVBhcnNlckZyb21CTkZTdGFydFJ1bGVOYW1lQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgc3RhcnRSdWxlTmFtZSwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKEZsb3JlbmNlUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlUGFyc2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZsb3JlbmNlUGFyc2VyRnJvbU5vdGhpbmcsXG4gIGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcixcbiAgZmxvcmVuY2VQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyLFxuICBmbG9yZW5jZVBhcnNlckZyb21CTkZTdGFydFJ1bGVOYW1lQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyXG59O1xuXG5mdW5jdGlvbiBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXIuZ2V0UnVsZXMoKTtcblxuICBydWxlcyA9IFsgLy8vXG4gICAgLi4ucnVsZXMsXG4gICAgLi4uY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXNcbiAgXTtcblxuICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl0sIm5hbWVzIjpbImZsb3JlbmNlUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyRnJvbUJORlN0YXJ0UnVsZU5hbWVBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZVBhcnNlckZyb21Ob3RoaW5nIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicGFyc2VyRnJvbVJ1bGVzIiwicGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsImJuZiIsIkZsb3JlbmNlUGFyc2VyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbU5vdGhpbmciLCJydWxlcyIsInJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyIiwic3RhcnRSdWxlTmFtZSIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiZ2V0UnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF5Q0EsT0FLRTtlQUxGOztJQWRnQkEsNkNBQTZDO2VBQTdDQTs7SUFPQUMsMERBQTBEO2VBQTFEQTs7SUFmQUMsdUNBQXVDO2VBQXZDQTs7SUFUQUMseUJBQXlCO2VBQXpCQTs7OzZCQVJlOzRCQUNDO3FDQUNPOytEQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQVFDLGVBQW1FQyw2QkFBZSxDQUFsRkQsY0FBY0Usa0JBQXFERCw2QkFBZSxDQUFwRUMsaUJBQWlCQyxrQ0FBb0NGLDZCQUFlLENBQW5ERTtBQUVoQyxTQUFTSjtJQUNkLElBQU0sQUFBRUssTUFBUUMsNkJBQWMsQ0FBdEJELEtBQ0ZFLHdCQUF3QkMsaUJBQXFCLENBQUNDLFdBQVcsSUFDekRDLFFBQVFDLHFDQUFxQ04sS0FBS0Usd0JBQ2xESyxpQkFBaUJULGdCQUFnQkcsNkJBQWMsRUFBRUk7SUFFdkQsT0FBT0U7QUFDVDtBQUVPLFNBQVNiLHdDQUF3Q1EscUJBQXFCO0lBQzNFLElBQU0sQUFBRUYsTUFBUUMsNkJBQWMsQ0FBdEJELEtBQ0ZLLFFBQVFDLHFDQUFxQ04sS0FBS0Usd0JBQ2xESyxpQkFBaUJULGdCQUFnQkcsNkJBQWMsRUFBRUk7SUFFdkQsT0FBT0U7QUFDVDtBQUVPLFNBQVNmLDhDQUE4Q1EsR0FBRyxFQUFFRSxxQkFBcUI7SUFDdEYsSUFBTUcsUUFBUUMscUNBQXFDTixLQUFLRSx3QkFDbERLLGlCQUFpQlQsZ0JBQWdCRyw2QkFBYyxFQUFFSTtJQUV2RCxPQUFPRTtBQUNUO0FBRU8sU0FBU2QsMkRBQTJETyxHQUFHLEVBQUVRLGFBQWEsRUFBRU4scUJBQXFCO0lBQ2xILElBQU1HLFFBQVFDLHFDQUFxQ04sS0FBS0Usd0JBQ2xESyxpQkFBaUJSLGdDQUFnQ0UsNkJBQWMsRUFBRUksT0FBT0c7SUFFOUUsT0FBT0Q7QUFDVDtJQUVBLFdBQWU7SUFDYlosMkJBQUFBO0lBQ0FELHlDQUFBQTtJQUNBRiwrQ0FBQUE7SUFDQUMsNERBQUFBO0FBQ0Y7QUFFQSxTQUFTYSxxQ0FBcUNOLEdBQUcsRUFBRUUscUJBQXFCO0lBQ3RFLElBQUlHLFFBQVFULGFBQWFJO0lBRXpCLElBQU1TLDZCQUE2QlAsc0JBQXNCUSxRQUFRO0lBRWpFTCxRQUFRLEFBQ04scUJBQUdBLGNBQ0gscUJBQUdJO0lBR0xKLFFBQVFNLElBQUFBLDZDQUFzQixFQUFDTixRQUFTLEdBQUc7SUFFM0MsT0FBT0E7QUFDVCJ9