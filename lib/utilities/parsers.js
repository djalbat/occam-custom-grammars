"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get nominalParserFromBNFAndCombinedCustomGrammar () {
        return nominalParserFromBNFAndCombinedCustomGrammar;
    },
    get nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar () {
        return nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar;
    },
    get nominalParserFromCombinedCustomGrammar () {
        return nominalParserFromCombinedCustomGrammar;
    },
    get nominalParserFromNothing () {
        return nominalParserFromNothing;
    },
    get nominalParserFromStartRuleName () {
        return nominalParserFromStartRuleName;
    },
    get nominalParserFromStartRuleNameAndCombinedCustomGrammar () {
        return nominalParserFromStartRuleNameAndCombinedCustomGrammar;
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
function nominalParserFromStartRuleName(startRuleName) {
    var bnf = _occamgrammars.NominalParser.bnf, combinedCustomGrammar = _combined.default.fromNothing(), rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRulesAndStartRuleName(_occamgrammars.NominalParser, rules, startRuleName);
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
function nominalParserFromStartRuleNameAndCombinedCustomGrammar(startRuleName, combinedCustomGrammar) {
    var bnf = _occamgrammars.NominalParser.bnf, rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRulesAndStartRuleName(_occamgrammars.NominalParser, rules, startRuleName);
    return nominalParser;
}
function nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar(bnf, startRuleName, combinedCustomGrammar) {
    var rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRulesAndStartRuleName(_occamgrammars.NominalParser, rules, startRuleName);
    return nominalParser;
}
var _default = {
    nominalParserFromNothing: nominalParserFromNothing,
    nominalParserFromStartRuleName: nominalParserFromStartRuleName,
    nominalParserFromCombinedCustomGrammar: nominalParserFromCombinedCustomGrammar,
    nominalParserFromBNFAndCombinedCustomGrammar: nominalParserFromBNFAndCombinedCustomGrammar,
    nominalParserFromStartRuleNameAndCombinedCustomGrammar: nominalParserFromStartRuleNameAndCombinedCustomGrammar,
    nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar: nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar
};
function rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar) {
    var rules = rulesFromBNF(bnf);
    var combinedCustomGrammarRules = combinedCustomGrammar.getRules();
    rules = _to_consumable_array(rules).concat(_to_consumable_array(combinedCustomGrammarRules));
    rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9taW5hbFBhcnNlciB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IENvbWJpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9jb21iaW5lZFwiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzLCBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsUGFyc2VyRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHsgYm5mIH0gPSBOb21pbmFsUGFyc2VyLFxuICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBub21pbmFsUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKE5vbWluYWxQYXJzZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gbm9taW5hbFBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vbWluYWxQYXJzZXJGcm9tU3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHsgYm5mIH0gPSBOb21pbmFsUGFyc2VyLFxuICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBub21pbmFsUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShOb21pbmFsUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIG5vbWluYWxQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgeyBibmYgfSA9IE5vbWluYWxQYXJzZXIsXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgbm9taW5hbFBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhOb21pbmFsUGFyc2VyLCBydWxlcyk7XG5cbiAgcmV0dXJuIG5vbWluYWxQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIG5vbWluYWxQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXMoTm9taW5hbFBhcnNlciwgcnVsZXMpO1xuXG4gIHJldHVybiBub21pbmFsUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbFBhcnNlckZyb21TdGFydFJ1bGVOYW1lQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKHN0YXJ0UnVsZU5hbWUsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCB7IGJuZiB9ID0gTm9taW5hbFBhcnNlcixcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBub21pbmFsUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShOb21pbmFsUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIG5vbWluYWxQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsUGFyc2VyRnJvbUJORlN0YXJ0UnVsZU5hbWVBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBzdGFydFJ1bGVOYW1lLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBub21pbmFsUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShOb21pbmFsUGFyc2VyLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIG5vbWluYWxQYXJzZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9taW5hbFBhcnNlckZyb21Ob3RoaW5nLFxuICBub21pbmFsUGFyc2VyRnJvbVN0YXJ0UnVsZU5hbWUsXG4gIG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyLFxuICBub21pbmFsUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcixcbiAgbm9taW5hbFBhcnNlckZyb21TdGFydFJ1bGVOYW1lQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyLFxuICBub21pbmFsUGFyc2VyRnJvbUJORlN0YXJ0UnVsZU5hbWVBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXJcbn07XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlcyA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRSdWxlcygpO1xuXG4gIHJ1bGVzID0gWyAvLy9cbiAgICAuLi5ydWxlcyxcbiAgICAuLi5jb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1xuICBdO1xuXG4gIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsibm9taW5hbFBhcnNlckZyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJub21pbmFsUGFyc2VyRnJvbUJORlN0YXJ0UnVsZU5hbWVBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxQYXJzZXJGcm9tTm90aGluZyIsIm5vbWluYWxQYXJzZXJGcm9tU3RhcnRSdWxlTmFtZSIsIm5vbWluYWxQYXJzZXJGcm9tU3RhcnRSdWxlTmFtZUFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInBhcnNlckZyb21SdWxlcyIsInBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJibmYiLCJOb21pbmFsUGFyc2VyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbU5vdGhpbmciLCJydWxlcyIsInJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxQYXJzZXIiLCJzdGFydFJ1bGVOYW1lIiwiY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMiLCJnZXRSdWxlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTBEQTtlQUFBOztRQXRCZ0JBO2VBQUFBOztRQWVBQztlQUFBQTs7UUF2QkFDO2VBQUFBOztRQWxCQUM7ZUFBQUE7O1FBU0FDO2VBQUFBOztRQXdCQUM7ZUFBQUE7Ozs2QkF6Q2M7NEJBQ0U7cUNBQ087K0RBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBUUMsZUFBbUVDLDZCQUFlLENBQWxGRCxjQUFjRSxrQkFBcURELDZCQUFlLENBQXBFQyxpQkFBaUJDLGtDQUFvQ0YsNkJBQWUsQ0FBbkRFO0FBRWhDLFNBQVNOO0lBQ2QsSUFBTSxBQUFFTyxNQUFRQyw0QkFBYSxDQUFyQkQsS0FDRkUsd0JBQXdCQyxpQkFBcUIsQ0FBQ0MsV0FBVyxJQUN6REMsUUFBUUMscUNBQXFDTixLQUFLRSx3QkFDbERLLGdCQUFnQlQsZ0JBQWdCRyw0QkFBYSxFQUFFSTtJQUVyRCxPQUFPRTtBQUNUO0FBRU8sU0FBU2IsK0JBQStCYyxhQUFhO0lBQzFELElBQU0sQUFBRVIsTUFBUUMsNEJBQWEsQ0FBckJELEtBQ0ZFLHdCQUF3QkMsaUJBQXFCLENBQUNDLFdBQVcsSUFDekRDLFFBQVFDLHFDQUFxQ04sS0FBS0Usd0JBQ2xESyxnQkFBZ0JSLGdDQUFnQ0UsNEJBQWEsRUFBRUksT0FBT0c7SUFFNUUsT0FBT0Q7QUFDVDtBQUVPLFNBQVNmLHVDQUF1Q1UscUJBQXFCO0lBQzFFLElBQU0sQUFBRUYsTUFBUUMsNEJBQWEsQ0FBckJELEtBQ0ZLLFFBQVFDLHFDQUFxQ04sS0FBS0Usd0JBQ2xESyxnQkFBZ0JULGdCQUFnQkcsNEJBQWEsRUFBRUk7SUFFckQsT0FBT0U7QUFDVDtBQUVPLFNBQVNqQiw2Q0FBNkNVLEdBQUcsRUFBRUUscUJBQXFCO0lBQ3JGLElBQU1HLFFBQVFDLHFDQUFxQ04sS0FBS0Usd0JBQ2xESyxnQkFBZ0JULGdCQUFnQkcsNEJBQWEsRUFBRUk7SUFFckQsT0FBT0U7QUFDVDtBQUVPLFNBQVNaLHVEQUF1RGEsYUFBYSxFQUFFTixxQkFBcUI7SUFDekcsSUFBTSxBQUFFRixNQUFRQyw0QkFBYSxDQUFyQkQsS0FDRkssUUFBUUMscUNBQXFDTixLQUFLRSx3QkFDbERLLGdCQUFnQlIsZ0NBQWdDRSw0QkFBYSxFQUFFSSxPQUFPRztJQUU1RSxPQUFPRDtBQUNUO0FBRU8sU0FBU2hCLDBEQUEwRFMsR0FBRyxFQUFFUSxhQUFhLEVBQUVOLHFCQUFxQjtJQUNqSCxJQUFNRyxRQUFRQyxxQ0FBcUNOLEtBQUtFLHdCQUNsREssZ0JBQWdCUixnQ0FBZ0NFLDRCQUFhLEVBQUVJLE9BQU9HO0lBRTVFLE9BQU9EO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JkLDBCQUFBQTtJQUNBQyxnQ0FBQUE7SUFDQUYsd0NBQUFBO0lBQ0FGLDhDQUFBQTtJQUNBSyx3REFBQUE7SUFDQUosMkRBQUFBO0FBQ0Y7QUFFQSxTQUFTZSxxQ0FBcUNOLEdBQUcsRUFBRUUscUJBQXFCO0lBQ3RFLElBQUlHLFFBQVFULGFBQWFJO0lBRXpCLElBQU1TLDZCQUE2QlAsc0JBQXNCUSxRQUFRO0lBRWpFTCxRQUFRLEFBQ04scUJBQUdBLGNBQ0gscUJBQUdJO0lBR0xKLFFBQVFNLElBQUFBLDZDQUFzQixFQUFDTixRQUFTLEdBQUc7SUFFM0MsT0FBT0E7QUFDVCJ9