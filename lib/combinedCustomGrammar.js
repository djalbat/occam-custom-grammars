"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CombinedCustomGrammar;
    }
});
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _defaultCustomGrammar = /*#__PURE__*/ _interopRequireDefault(require("./defaultCustomGrammar"));
var _constants = require("./constants");
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
var rulesFromBNF = _occamGrammarUtilities.rulesUtilities.rulesFromBNF;
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
                var lexicalPattern = lexicalPatternFromCustomGrammars(customGrammars), rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(lexicalPattern, rules);
                return combinedCustomGrammar;
            }
        }
    ]);
    return CombinedCustomGrammar;
}();
function lexicalPatternFromCustomGrammars(customGrammars) {
    customGrammars = [
        _defaultCustomGrammar.default
    ].concat(_toConsumableArray(customGrammars)); ///
    var lexicalPatterns = customGrammars.reduce(function(lexicalPatterns, customGrammar) {
        var lexicalPattern = customGrammar.getLexicalPattern();
        if (lexicalPattern) {
            lexicalPatterns.push(lexicalPattern);
        }
        return lexicalPatterns;
    }, []);
    lexicalPatterns.reverse();
    var lexicalPatternsString = lexicalPatterns.join("|"), lexicalPattern = "^(?:".concat(lexicalPatternsString, ")");
    return lexicalPattern;
}
function rulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
    customGrammars = [
        _defaultCustomGrammar.default
    ].concat(_toConsumableArray(customGrammars)); ///
    var bnfs = customGrammars.map(function(customGrammar) {
        var bnf = customGrammar.getBNF();
        return bnf;
    }), bnf = bnfs.join(_constants.EMPTY_STRING), rules = rulesFromBNF(bnf);
    combineRules(rules);
    return rules;
}
function combineRules(rules) {
    var outerIndex = 0, length = rules.length;
    while(outerIndex < length){
        var outerRule = rules[outerIndex], outerRuleName = outerRule.getName();
        var outerRuleDefinitions = outerRule.getDefinitions();
        var innerIndex = outerIndex + 1;
        while(innerIndex < length){
            var innerRule = rules[innerIndex], innerRuleName = innerRule.getName();
            if (innerRuleName === outerRuleName) {
                var _outerRule;
                var innerRuleDefinitions = innerRule.getDefinitions();
                outerRuleDefinitions = _toConsumableArray(innerRuleDefinitions).concat(_toConsumableArray(outerRuleDefinitions));
                (_outerRule = outerRule).replaceAllDefinitions.apply(_outerRule, _toConsumableArray(outerRuleDefinitions));
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJ1bGVzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihsZXhpY2FsUGF0dGVybiwgcnVsZXMpIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG4gIFxuICBnZXRMZXhpY2FsUGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm5Gcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWRDdXN0b21HcmFtbWFyKGxleGljYWxQYXR0ZXJuLCBydWxlcyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuXG4gIGNvbnN0IGxleGljYWxQYXR0ZXJucyA9IGN1c3RvbUdyYW1tYXJzLnJlZHVjZSgobGV4aWNhbFBhdHRlcm5zLCBjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgICAgICBpZiAobGV4aWNhbFBhdHRlcm4pIHsgIC8vL1xuICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm5zLnB1c2gobGV4aWNhbFBhdHRlcm4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBsZXhpY2FsUGF0dGVybnM7XG4gICAgICAgIH0sIFtdKTtcblxuICBsZXhpY2FsUGF0dGVybnMucmV2ZXJzZSgpO1xuXG4gIGNvbnN0IGxleGljYWxQYXR0ZXJuc1N0cmluZyA9IGxleGljYWxQYXR0ZXJucy5qb2luKFwifFwiKSwgLy8vXG4gICAgICAgIGxleGljYWxQYXR0ZXJuID0gYF4oPzoke2xleGljYWxQYXR0ZXJuc1N0cmluZ30pYDtcblxuICByZXR1cm4gbGV4aWNhbFBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycykge1xuICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuXG4gIGNvbnN0IGJuZnMgPSBjdXN0b21HcmFtbWFycy5tYXAoKGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORigpO1xuXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSksXG4gICAgICAgIGJuZiA9IGJuZnMuam9pbihFTVBUWV9TVFJJTkcpLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbWJpbmVSdWxlcyhydWxlcylcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVSdWxlcyhydWxlcykge1xuICBsZXQgb3V0ZXJJbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKG91dGVySW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb25zdCBvdXRlclJ1bGUgPSBydWxlc1tvdXRlckluZGV4XSxcbiAgICAgICAgICBvdXRlclJ1bGVOYW1lID0gb3V0ZXJSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IG91dGVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgbGV0IGlubmVySW5kZXggPSBvdXRlckluZGV4ICsgMTtcblxuICAgIHdoaWxlIChpbm5lckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbm5lclJ1bGUgPSBydWxlc1tpbm5lckluZGV4XSxcbiAgICAgICAgICAgIGlubmVyUnVsZU5hbWUgPSBpbm5lclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoaW5uZXJSdWxlTmFtZSA9PT0gb3V0ZXJSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBpbm5lclJ1bGVEZWZpbml0aW9ucyA9IGlubmVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgICAgIG91dGVyUnVsZURlZmluaXRpb25zID0gWyAgLy8vXG4gICAgICAgICAgLi4uaW5uZXJSdWxlRGVmaW5pdGlvbnMsXG4gICAgICAgICAgLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnNcbiAgICAgICAgXTtcblxuICAgICAgICBvdXRlclJ1bGUucmVwbGFjZUFsbERlZmluaXRpb25zKC4uLm91dGVyUnVsZURlZmluaXRpb25zKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IGlubmVySW5kZXgsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgcnVsZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG91dGVySW5kZXgrKztcblxuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUJORiIsInJ1bGVzVXRpbGl0aWVzIiwibGV4aWNhbFBhdHRlcm4iLCJydWxlcyIsImdldExleGljYWxQYXR0ZXJuIiwiZ2V0UnVsZXMiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjdXN0b21HcmFtbWFycyIsImxleGljYWxQYXR0ZXJuRnJvbUN1c3RvbUdyYW1tYXJzIiwicnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJsZXhpY2FsUGF0dGVybnMiLCJyZWR1Y2UiLCJjdXN0b21HcmFtbWFyIiwicHVzaCIsInJldmVyc2UiLCJsZXhpY2FsUGF0dGVybnNTdHJpbmciLCJqb2luIiwiYm5mcyIsIm1hcCIsImJuZiIsImdldEJORiIsIkVNUFRZX1NUUklORyIsImNvbWJpbmVSdWxlcyIsIm91dGVySW5kZXgiLCJsZW5ndGgiLCJvdXRlclJ1bGUiLCJvdXRlclJ1bGVOYW1lIiwiZ2V0TmFtZSIsIm91dGVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwicmVwbGFjZUFsbERlZmluaXRpb25z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