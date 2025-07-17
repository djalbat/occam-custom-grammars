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
function nominalParserFromNothing(Class) {
    if (Class === undefined) {
        Class = _occamgrammars.NominalParser; ///
    }
    var bnf = Class.bnf, combinedCustomGrammar = _combined.default.fromNothing(), rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRules(Class, rules);
    return nominalParser;
}
function nominalParserFromStartRuleName(Class, startRuleName) {
    if (startRuleName === undefined) {
        startRuleName = Class; ///
        Class = _occamgrammars.NominalParser; ///
    }
    var bnf = Class.bnf, combinedCustomGrammar = _combined.default.fromNothing(), rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRulesAndStartRuleName(Class, rules, startRuleName);
    return nominalParser;
}
function nominalParserFromCombinedCustomGrammar(Class, combinedCustomGrammar) {
    if (combinedCustomGrammar === undefined) {
        combinedCustomGrammar = Class; ///
        Class = _occamgrammars.NominalParser; ///
    }
    var bnf = Class.bnf, rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRules(Class, rules);
    return nominalParser;
}
function nominalParserFromBNFAndCombinedCustomGrammar(Class, bnf, combinedCustomGrammar) {
    if (combinedCustomGrammar === undefined) {
        combinedCustomGrammar = bnf; ///
        bnf = Class; ///
        Class = _occamgrammars.NominalParser; ///
    }
    var rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRules(Class, rules);
    return nominalParser;
}
function nominalParserFromStartRuleNameAndCombinedCustomGrammar(Class, startRuleName, combinedCustomGrammar) {
    if (combinedCustomGrammar === undefined) {
        combinedCustomGrammar = startRuleName; ///
        startRuleName = Class; ///
        Class = _occamgrammars.NominalParser; ///
    }
    var bnf = Class.bnf, rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRulesAndStartRuleName(Class, rules, startRuleName);
    return nominalParser;
}
function nominalParserFromBNFStartRuleNameAndCombinedCustomGrammar(Class, bnf, startRuleName, combinedCustomGrammar) {
    if (combinedCustomGrammar === undefined) {
        combinedCustomGrammar = startRuleName; ///
        startRuleName = bnf; ///
        bnf = Class; ///
        Class = _occamgrammars.NominalParser; ///
    }
    var rules = rulesFromBNFAndCombinedCustomGrammar(bnf, combinedCustomGrammar), nominalParser = parserFromRulesAndStartRuleName(Class, rules, startRuleName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2Vycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9taW5hbFBhcnNlciB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IENvbWJpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9jb21iaW5lZFwiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiwgcGFyc2VyRnJvbVJ1bGVzLCBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsUGFyc2VyRnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICBDbGFzcyA9IE5vbWluYWxQYXJzZXI7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IHsgYm5mIH0gPSBDbGFzcyxcbiAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgbm9taW5hbFBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gIHJldHVybiBub21pbmFsUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbFBhcnNlckZyb21TdGFydFJ1bGVOYW1lKENsYXNzLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGlmIChzdGFydFJ1bGVOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydFJ1bGVOYW1lID0gQ2xhc3M7ICAvLy9cblxuICAgIENsYXNzID0gTm9taW5hbFBhcnNlcjsgIC8vL1xuICB9XG5cbiAgY29uc3QgeyBibmYgfSA9IENsYXNzLFxuICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBub21pbmFsUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShDbGFzcywgcnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gIHJldHVybiBub21pbmFsUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoQ2xhc3MsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBpZiAoY29tYmluZWRDdXN0b21HcmFtbWFyID09PSB1bmRlZmluZWQpIHtcbiAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDbGFzczsgIC8vL1xuXG4gICAgQ2xhc3MgPSBOb21pbmFsUGFyc2VyOyAgLy8vXG4gIH1cblxuICBjb25zdCB7IGJuZiB9ID0gQ2xhc3MsXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgbm9taW5hbFBhcnNlciA9IHBhcnNlckZyb21SdWxlcyhDbGFzcywgcnVsZXMpO1xuXG4gIHJldHVybiBub21pbmFsUGFyc2VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbFBhcnNlckZyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoQ2xhc3MsIGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGlmIChjb21iaW5lZEN1c3RvbUdyYW1tYXIgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGJuZjsgIC8vL1xuXG4gICAgYm5mID0gQ2xhc3M7ICAvLy9cblxuICAgIENsYXNzID0gTm9taW5hbFBhcnNlcjsgIC8vL1xuICB9XG5cbiAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoYm5mLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBub21pbmFsUGFyc2VyID0gcGFyc2VyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgcmV0dXJuIG5vbWluYWxQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsUGFyc2VyRnJvbVN0YXJ0UnVsZU5hbWVBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoQ2xhc3MsIHN0YXJ0UnVsZU5hbWUsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBpZiAoY29tYmluZWRDdXN0b21HcmFtbWFyID09PSB1bmRlZmluZWQpIHtcbiAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBzdGFydFJ1bGVOYW1lOyAgLy8vXG5cbiAgICBzdGFydFJ1bGVOYW1lID0gQ2xhc3M7ICAvLy9cblxuICAgIENsYXNzID0gTm9taW5hbFBhcnNlcjsgIC8vL1xuICB9XG5cbiAgY29uc3QgeyBibmYgfSA9IENsYXNzLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihibmYsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIG5vbWluYWxQYXJzZXIgPSBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKENsYXNzLCBydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgcmV0dXJuIG5vbWluYWxQYXJzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsUGFyc2VyRnJvbUJORlN0YXJ0UnVsZU5hbWVBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoQ2xhc3MsIGJuZiwgc3RhcnRSdWxlTmFtZSwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGlmIChjb21iaW5lZEN1c3RvbUdyYW1tYXIgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHN0YXJ0UnVsZU5hbWU7ICAvLy9cblxuICAgIHN0YXJ0UnVsZU5hbWUgPSBibmY7ICAvLy9cblxuICAgIGJuZiA9IENsYXNzOyAgLy8vXG5cbiAgICBDbGFzcyA9IE5vbWluYWxQYXJzZXI7ICAvLy9cbiAgfVxuXG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgbm9taW5hbFBhcnNlciA9IHBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUoQ2xhc3MsIHJ1bGVzLCBzdGFydFJ1bGVOYW1lKTtcblxuICByZXR1cm4gbm9taW5hbFBhcnNlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBub21pbmFsUGFyc2VyRnJvbU5vdGhpbmcsXG4gIG5vbWluYWxQYXJzZXJGcm9tU3RhcnRSdWxlTmFtZSxcbiAgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIsXG4gIG5vbWluYWxQYXJzZXJGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyLFxuICBub21pbmFsUGFyc2VyRnJvbVN0YXJ0UnVsZU5hbWVBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIsXG4gIG5vbWluYWxQYXJzZXJGcm9tQk5GU3RhcnRSdWxlTmFtZUFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hclxufTtcblxuZnVuY3Rpb24gcnVsZXNGcm9tQk5GQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGJuZiwgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzID0gY29tYmluZWRDdXN0b21HcmFtbWFyLmdldFJ1bGVzKCk7XG5cbiAgcnVsZXMgPSBbIC8vL1xuICAgIC4uLnJ1bGVzLFxuICAgIC4uLmNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzXG4gIF07XG5cbiAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJub21pbmFsUGFyc2VyRnJvbUJORkFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxQYXJzZXJGcm9tQk5GU3RhcnRSdWxlTmFtZUFuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibm9taW5hbFBhcnNlckZyb21Ob3RoaW5nIiwibm9taW5hbFBhcnNlckZyb21TdGFydFJ1bGVOYW1lIiwibm9taW5hbFBhcnNlckZyb21TdGFydFJ1bGVOYW1lQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicGFyc2VyRnJvbVJ1bGVzIiwicGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsIkNsYXNzIiwidW5kZWZpbmVkIiwiTm9taW5hbFBhcnNlciIsImJuZiIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21Ob3RoaW5nIiwicnVsZXMiLCJydWxlc0Zyb21CTkZBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJub21pbmFsUGFyc2VyIiwic3RhcnRSdWxlTmFtZSIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiZ2V0UnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvR0E7ZUFBQTs7UUFoRGdCQTtlQUFBQTs7UUErQkFDO2VBQUFBOztRQTdDQUM7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