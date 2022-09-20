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
var _occamParsers = require("occam-parsers");
var _defaultCustomGrammar = /*#__PURE__*/ _interopRequireDefault(require("./defaultCustomGrammar"));
var _constants = require("./constants");
var _patternNames = require("./patternNames");
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
var rulesFromBNF = _occamParsers.parserUtilities.rulesFromBNF;
var CombinedCustomGrammar = /*#__PURE__*/ function() {
    function CombinedCustomGrammar(rules, entries) {
        _classCallCheck(this, CombinedCustomGrammar);
        this.rules = rules;
        this.entries = entries;
    }
    _createClass(CombinedCustomGrammar, [
        {
            key: "getRules",
            value: function getRules() {
                return this.rules;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return this.entries;
            }
        }
    ], [
        {
            key: "fromCustomGrammars",
            value: function fromCustomGrammars(customGrammars) {
                var includeDefault = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                if (includeDefault) {
                    customGrammars = [
                        _defaultCustomGrammar.default
                    ].concat(_toConsumableArray(customGrammars)); ///
                }
                var rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
                return combinedCustomGrammar;
            }
        }
    ]);
    return CombinedCustomGrammar;
}();
function rulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
    var bnfs = customGrammars.map(function(customGrammar) {
        var bnf = customGrammar.getBNF();
        return bnf;
    }), bnf = bnfs.join(_constants.EMPTY_STRING), rules = rulesFromBNF(bnf);
    combineRules(rules);
    return rules;
}
function entriesFromCustomGrammars(customGrammars) {
    var patternNames = [
        _patternNames.TYPE_PATTERN_NAME,
        _patternNames.SYMBOL_PATTERN_NAME,
        _patternNames.OPERATOR_PATTERN_NAME
    ], entries = patternNames.map(function(patternName) {
        var entry = entryFromCustomGrammars(customGrammars, patternName);
        return entry;
    });
    return entries;
}
function entryFromCustomGrammars(customGrammars, patternName) {
    var patterns = customGrammars.reduce(function(patterns, customGrammar) {
        var pattern = customGrammar.getPattern(patternName);
        if (pattern) {
            patterns.push(pattern);
        }
        return patterns;
    }, []);
    patterns.reverse();
    var patternsString = patterns.join(_constants.VERTICAL_BAR), pattern = patternName === _patternNames.TYPE_PATTERN_NAME || patternName === _patternNames.SYMBOL_PATTERN_NAME ? "^(?:".concat(patternsString, ")\\b") : "^(?:".concat(patternsString, ")");
    var entry = {};
    entry[patternName] = pattern;
    return entry;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFZFUlRJQ0FMX0JBUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUsIE9QRVJBVE9SX1BBVFRFUk5fTkFNRSB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihydWxlcywgZW50cmllcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IGJuZnMgPSBjdXN0b21HcmFtbWFycy5tYXAoKGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORigpO1xuXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSksXG4gICAgICAgIGJuZiA9IGJuZnMuam9pbihFTVBUWV9TVFJJTkcpLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbWJpbmVSdWxlcyhydWxlcylcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgcGF0dGVybk5hbWVzID0gW1xuICAgICAgICAgIFRZUEVfUEFUVEVSTl9OQU1FLFxuICAgICAgICAgIFNZTUJPTF9QQVRURVJOX05BTUUsXG4gICAgICAgICAgT1BFUkFUT1JfUEFUVEVSTl9OQU1FXG4gICAgICAgIF0sXG4gICAgICAgIGVudHJpZXMgPSBwYXR0ZXJuTmFtZXMubWFwKChwYXR0ZXJuTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKTtcblxuICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVudHJpZXM7XG59XG5cbmZ1bmN0aW9uIGVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBwYXR0ZXJuTmFtZSkge1xuICBjb25zdCBwYXR0ZXJucyA9IGN1c3RvbUdyYW1tYXJzLnJlZHVjZSgocGF0dGVybnMsIGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICBjb25zdCBwYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRQYXR0ZXJuKHBhdHRlcm5OYW1lKTtcblxuICAgIGlmIChwYXR0ZXJuKSB7ICAvLy9cbiAgICAgIHBhdHRlcm5zLnB1c2gocGF0dGVybik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdHRlcm5zO1xuICB9LCBbXSk7XG5cbiAgcGF0dGVybnMucmV2ZXJzZSgpO1xuXG4gIGNvbnN0IHBhdHRlcm5zU3RyaW5nID0gcGF0dGVybnMuam9pbihWRVJUSUNBTF9CQVIpLCAvLy9cbiAgICAgICAgcGF0dGVybiA9ICgocGF0dGVybk5hbWUgPT09IFRZUEVfUEFUVEVSTl9OQU1FKSB8fCAocGF0dGVybk5hbWUgPT09IFNZTUJPTF9QQVRURVJOX05BTUUpKT9cbiAgICAgICAgICAgICAgICAgICBgXig/OiR7cGF0dGVybnNTdHJpbmd9KVxcXFxiYCA6XG4gICAgICAgICAgICAgICAgICAgICBgXig/OiR7cGF0dGVybnNTdHJpbmd9KWA7XG5cbiAgY29uc3QgZW50cnkgPSB7fTtcblxuICBlbnRyeVtwYXR0ZXJuTmFtZV0gPSBwYXR0ZXJuO1xuXG4gIHJldHVybiBlbnRyeTtcbn1cblxuZnVuY3Rpb24gY29tYmluZVJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICB3aGlsZSAob3V0ZXJJbmRleCA8IGxlbmd0aCkge1xuICAgIGNvbnN0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdLFxuICAgICAgICAgIG91dGVyUnVsZU5hbWUgPSBvdXRlclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG91dGVyUnVsZURlZmluaXRpb25zID0gb3V0ZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBsZXQgaW5uZXJJbmRleCA9IG91dGVySW5kZXggKyAxO1xuXG4gICAgd2hpbGUgKGlubmVySW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlubmVyUnVsZSA9IHJ1bGVzW2lubmVySW5kZXhdLFxuICAgICAgICAgICAgaW5uZXJSdWxlTmFtZSA9IGlubmVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChpbm5lclJ1bGVOYW1lID09PSBvdXRlclJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGlubmVyUnVsZURlZmluaXRpb25zID0gaW5uZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBbICAvLy9cbiAgICAgICAgICAuLi5pbm5lclJ1bGVEZWZpbml0aW9ucyxcbiAgICAgICAgICAuLi5vdXRlclJ1bGVEZWZpbml0aW9uc1xuICAgICAgICBdO1xuXG4gICAgICAgIG91dGVyUnVsZS5yZXBsYWNlQWxsRGVmaW5pdGlvbnMoLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5uZXJJbmRleCwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBydWxlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3V0ZXJJbmRleCsrO1xuXG4gICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXMiLCJlbnRyaWVzIiwiZ2V0UnVsZXMiLCJnZXRFbnRyaWVzIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiY3VzdG9tR3JhbW1hcnMiLCJpbmNsdWRlRGVmYXVsdCIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwiZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImJuZnMiLCJtYXAiLCJjdXN0b21HcmFtbWFyIiwiYm5mIiwiZ2V0Qk5GIiwiam9pbiIsIkVNUFRZX1NUUklORyIsImNvbWJpbmVSdWxlcyIsInBhdHRlcm5OYW1lcyIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiU1lNQk9MX1BBVFRFUk5fTkFNRSIsIk9QRVJBVE9SX1BBVFRFUk5fTkFNRSIsInBhdHRlcm5OYW1lIiwiZW50cnkiLCJlbnRyeUZyb21DdXN0b21HcmFtbWFycyIsInBhdHRlcm5zIiwicmVkdWNlIiwicGF0dGVybiIsImdldFBhdHRlcm4iLCJwdXNoIiwicmV2ZXJzZSIsInBhdHRlcm5zU3RyaW5nIiwiVkVSVElDQUxfQkFSIiwib3V0ZXJJbmRleCIsImxlbmd0aCIsIm91dGVyUnVsZSIsIm91dGVyUnVsZU5hbWUiLCJnZXROYW1lIiwib3V0ZXJSdWxlRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImlubmVySW5kZXgiLCJpbm5lclJ1bGUiLCJpbm5lclJ1bGVOYW1lIiwiaW5uZXJSdWxlRGVmaW5pdGlvbnMiLCJyZXBsYWNlQWxsRGVmaW5pdGlvbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFXUUEscUJBQXFCOzs7NEJBVFYsZUFBZTt5RUFFZCx3QkFBd0I7eUJBRWQsYUFBYTs0QkFDc0IsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RixJQUFNLEFBQUVDLFlBQVksR0FBS0MsYUFBZSxnQkFBQSxDQUFoQ0Qs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