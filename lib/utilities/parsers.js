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
    nominalParserFromBNFAndCombinedCustomGrammar: function() {
        return nominalParserFromBNFAndCombinedCustomGrammar;
    },
    nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar: function() {
        return nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar;
    },
    nominalParserFromCombinedCustomGrammar: function() {
        return nominalParserFromCombinedCustomGrammar;
    },
    nominalParserFromNothing: function() {
        return nominalParserFromNothing;
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
function nominalParserFromNothing() {
    var bnf = _occamgrammars.NominalParser.bnf, combinedCustomGrammar = _combined.default.fromNothing(), rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRules(_occamgrammars.NominalParser, rules);
    return nominalParser;
}
function nominalParserFromCombinedCustomGrammar(combinedCustomGrammar) {
    var bnf = _occamgrammars.NominalParser.bnf, rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRules(_occamgrammars.NominalParser, rules);
    return nominalParser;
}
function nominalParserFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
    var rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRules(_occamgrammars.NominalParser, rules);
    return nominalParser;
}
function nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar(bnf, startRuleName, combinedCustomGrammar) {
    var rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRulesAndStartRuleName(_occamgrammars.NominalParser, rules, startRuleName);
    return nominalParser;
}
var _default = {
    nominalParserFromNothing: nominalParserFromNothing,
    nominalParserFromCombinedCustomGrammar: nominalParserFromCombinedCustomGrammar,
    nominalParserFromBNFAndCombinedCustomGrammar: nominalParserFromBNFAndCombinedCustomGrammar,
    nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar: nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar
};
function rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
    var rules = rulesFromBNF(bnf);
    var combinedCustomGrammarRules = combinedCustomGrammar.getRules();
    rules = _to_consumable_array(rules).concat(_to_consumable_array(combinedCustomGrammarRules));
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9taW5hbFBhcnNlciB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IENvbWJpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9jb21iaW5lZFwiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzLCBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsUGFyc2VyRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHsgYm5mIH0gPSBOb21pbmFsUGFyc2VyLFxuICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBub21pbmFsUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKE5vbWluYWxQYXJzZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gbm9taW5hbFBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCB7IGJuZiB9ID0gTm9taW5hbFBhcnNlcixcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBub21pbmFsUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKE5vbWluYWxQYXJzZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gbm9taW5hbFBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgbm9taW5hbFBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhOb21pbmFsUGFyc2VyLCBydWxlcyk7XG5cbiAgcmV0dXJuIG5vbWluYWxQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsUGFyc2VyRnJvbUJORlN0YXJ0UnVsZU5hbWVBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBzdGFydFJ1bGVOYW1lLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBub21pbmFsUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShOb21pbmFsUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIG5vbWluYWxQYXJzZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9taW5hbFBhcnNlckZyb21Ob3RoaW5nLFxuICBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcixcbiAgbm9taW5hbFBhcnNlckZyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIsXG4gIG5vbWluYWxQYXJzZXJGcm9tQk5GU3RhcnRSdWxlTmFtZUFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hclxufTtcblxuZnVuY3Rpb24gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzID0gY29tYmluZWRDdXN0b21HcmFtbWFyLmdldFJ1bGVzKCk7XG5cbiAgcnVsZXMgPSBbIC8vL1xuICAgIC4uLnJ1bGVzLFxuICAgIC4uLmNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzXG4gIF07XG5cbiAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJub21pbmFsUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxQYXJzZXJGcm9tQk5GU3RhcnRSdWxlTmFtZUFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibm9taW5hbFBhcnNlckZyb21Ob3RoaW5nIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicGFyc2VyRnJvbVJ1bGVzIiwicGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsImJuZiIsIk5vbWluYWxQYXJzZXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tTm90aGluZyIsInJ1bGVzIiwicnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibm9taW5hbFBhcnNlciIsInN0YXJ0UnVsZU5hbWUiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyIsImdldFJ1bGVzIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBeUNBLE9BS0U7ZUFMRjs7SUFkZ0JBLDRDQUE0QztlQUE1Q0E7O0lBT0FDLHlEQUF5RDtlQUF6REE7O0lBZkFDLHNDQUFzQztlQUF0Q0E7O0lBVEFDLHdCQUF3QjtlQUF4QkE7Ozs2QkFSYzs0QkFDRTtxQ0FDTzsrREFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFRQyxlQUFtRUMsNkJBQWUsQ0FBbEZELGNBQWNFLGtCQUFxREQsNkJBQWUsQ0FBcEVDLGlCQUFpQkMsa0NBQW9DRiw2QkFBZSxDQUFuREU7QUFFaEMsU0FBU0o7SUFDZCxJQUFNLEFBQUVLLE1BQVFDLDRCQUFhLENBQXJCRCxLQUNGRSx3QkFBd0JDLGlCQUFxQixDQUFDQyxXQUFXLElBQ3pEQyxRQUFRQyxxQ0FBcUNOLEtBQUtFLHdCQUNsREssZ0JBQWdCVCxnQkFBZ0JHLDRCQUFhLEVBQUVJO0lBRXJELE9BQU9FO0FBQ1Q7QUFFTyxTQUFTYix1Q0FBdUNRLHFCQUFxQjtJQUMxRSxJQUFNLEFBQUVGLE1BQVFDLDRCQUFhLENBQXJCRCxLQUNGSyxRQUFRQyxxQ0FBcUNOLEtBQUtFLHdCQUNsREssZ0JBQWdCVCxnQkFBZ0JHLDRCQUFhLEVBQUVJO0lBRXJELE9BQU9FO0FBQ1Q7QUFFTyxTQUFTZiw2Q0FBNkNRLEdBQUcsRUFBRUUscUJBQXFCO0lBQ3JGLElBQU1HLFFBQVFDLHFDQUFxQ04sS0FBS0Usd0JBQ2xESyxnQkFBZ0JULGdCQUFnQkcsNEJBQWEsRUFBRUk7SUFFckQsT0FBT0U7QUFDVDtBQUVPLFNBQVNkLDBEQUEwRE8sR0FBRyxFQUFFUSxhQUFhLEVBQUVOLHFCQUFxQjtJQUNqSCxJQUFNRyxRQUFRQyxxQ0FBcUNOLEtBQUtFLHdCQUNsREssZ0JBQWdCUixnQ0FBZ0NFLDRCQUFhLEVBQUVJLE9BQU9HO0lBRTVFLE9BQU9EO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JaLDBCQUFBQTtJQUNBRCx3Q0FBQUE7SUFDQUYsOENBQUFBO0lBQ0FDLDJEQUFBQTtBQUNGO0FBRUEsU0FBU2EscUNBQXFDTixHQUFHLEVBQUVFLHFCQUFxQjtJQUN0RSxJQUFJRyxRQUFRVCxhQUFhSTtJQUV6QixJQUFNUyw2QkFBNkJQLHNCQUFzQlEsUUFBUTtJQUVqRUwsUUFBUSxBQUNOLHFCQUFHQSxjQUNILHFCQUFHSTtJQUdMSixRQUFRTSxJQUFBQSw2Q0FBc0IsRUFBQ04sUUFBUyxHQUFHO0lBRTNDLE9BQU9BO0FBQ1QifQ==