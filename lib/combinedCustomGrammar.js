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
                var rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
                return combinedCustomGrammar;
            }
        }
    ]);
    return CombinedCustomGrammar;
}();
function entryFromCustomGrammars(customGrammars, patternName) {
    customGrammars = [
        _defaultCustomGrammar.default
    ].concat(_toConsumableArray(customGrammars)); ///
    var patterns = customGrammars.reduce(function(patterns, customGrammar) {
        var pattern = customGrammar.getPattern(patternName);
        if (pattern) {
            patterns.push(pattern);
        }
        return patterns;
    }, []);
    patterns.reverse();
    var patternsString = patterns.join(_constants.VERTICAL_BAR), pattern = patternName === _patternNames.TYPE_PATTERN_NAME ? "^(?:".concat(patternsString, ")\\b") : "^(?:".concat(patternsString, ")");
    var entry = {};
    entry[patternName] = pattern;
    return entry;
}
function entriesFromCustomGrammars(customGrammars) {
    var patternNames = [
        _patternNames.TYPE_PATTERN_NAME,
        _patternNames.OPERATOR_PATTERN_NAME
    ], entries = patternNames.map(function(patternName) {
        var entry = entryFromCustomGrammars(customGrammars, patternName);
        return entry;
    });
    return entries;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFZFUlRJQ0FMX0JBUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIE9QRVJBVE9SX1BBVFRFUk5fTkFNRSB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihydWxlcywgZW50cmllcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG5cbiAgY29uc3QgcGF0dGVybnMgPSBjdXN0b21HcmFtbWFycy5yZWR1Y2UoKHBhdHRlcm5zLCBjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0UGF0dGVybihwYXR0ZXJuTmFtZSk7XG5cbiAgICBpZiAocGF0dGVybikgeyAgLy8vXG4gICAgICBwYXR0ZXJucy5wdXNoKHBhdHRlcm4pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfSwgW10pO1xuXG4gIHBhdHRlcm5zLnJldmVyc2UoKTtcblxuICBjb25zdCBwYXR0ZXJuc1N0cmluZyA9IHBhdHRlcm5zLmpvaW4oVkVSVElDQUxfQkFSKSwgLy8vXG4gICAgICAgIHBhdHRlcm4gPSAocGF0dGVybk5hbWUgPT09IFRZUEVfUEFUVEVSTl9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgIGBeKD86JHtwYXR0ZXJuc1N0cmluZ30pXFxcXGJgIDpcbiAgICAgICAgICAgICAgICAgICAgICBgXig/OiR7cGF0dGVybnNTdHJpbmd9KWA7XG5cbiAgY29uc3QgZW50cnkgPSB7fTtcblxuICBlbnRyeVtwYXR0ZXJuTmFtZV0gPSBwYXR0ZXJuO1xuXG4gIHJldHVybiBlbnRyeTtcbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBwYXR0ZXJuTmFtZXMgPSBbXG4gICAgICAgICAgVFlQRV9QQVRURVJOX05BTUUsXG4gICAgICAgICAgT1BFUkFUT1JfUEFUVEVSTl9OQU1FXG4gICAgICAgIF0sXG4gICAgICAgIGVudHJpZXMgPSBwYXR0ZXJuTmFtZXMubWFwKChwYXR0ZXJuTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKTtcblxuICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG5cbiAgY29uc3QgYm5mcyA9IGN1c3RvbUdyYW1tYXJzLm1hcCgoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKCk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gY29tYmluZVJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICB3aGlsZSAob3V0ZXJJbmRleCA8IGxlbmd0aCkge1xuICAgIGNvbnN0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdLFxuICAgICAgICAgIG91dGVyUnVsZU5hbWUgPSBvdXRlclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG91dGVyUnVsZURlZmluaXRpb25zID0gb3V0ZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBsZXQgaW5uZXJJbmRleCA9IG91dGVySW5kZXggKyAxO1xuXG4gICAgd2hpbGUgKGlubmVySW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlubmVyUnVsZSA9IHJ1bGVzW2lubmVySW5kZXhdLFxuICAgICAgICAgICAgaW5uZXJSdWxlTmFtZSA9IGlubmVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChpbm5lclJ1bGVOYW1lID09PSBvdXRlclJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGlubmVyUnVsZURlZmluaXRpb25zID0gaW5uZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBbICAvLy9cbiAgICAgICAgICAuLi5pbm5lclJ1bGVEZWZpbml0aW9ucyxcbiAgICAgICAgICAuLi5vdXRlclJ1bGVEZWZpbml0aW9uc1xuICAgICAgICBdO1xuXG4gICAgICAgIG91dGVyUnVsZS5yZXBsYWNlQWxsRGVmaW5pdGlvbnMoLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5uZXJJbmRleCwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBydWxlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3V0ZXJJbmRleCsrO1xuXG4gICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXMiLCJlbnRyaWVzIiwiZ2V0UnVsZXMiLCJnZXRFbnRyaWVzIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiY3VzdG9tR3JhbW1hcnMiLCJydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMiLCJwYXR0ZXJuTmFtZSIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwicGF0dGVybnMiLCJyZWR1Y2UiLCJjdXN0b21HcmFtbWFyIiwicGF0dGVybiIsImdldFBhdHRlcm4iLCJwdXNoIiwicmV2ZXJzZSIsInBhdHRlcm5zU3RyaW5nIiwiam9pbiIsIlZFUlRJQ0FMX0JBUiIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiZW50cnkiLCJwYXR0ZXJuTmFtZXMiLCJPUEVSQVRPUl9QQVRURVJOX05BTUUiLCJtYXAiLCJibmZzIiwiYm5mIiwiZ2V0Qk5GIiwiRU1QVFlfU1RSSU5HIiwiY29tYmluZVJ1bGVzIiwib3V0ZXJJbmRleCIsImxlbmd0aCIsIm91dGVyUnVsZSIsIm91dGVyUnVsZU5hbWUiLCJnZXROYW1lIiwib3V0ZXJSdWxlRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImlubmVySW5kZXgiLCJpbm5lclJ1bGUiLCJpbm5lclJ1bGVOYW1lIiwiaW5uZXJSdWxlRGVmaW5pdGlvbnMiLCJyZXBsYWNlQWxsRGVmaW5pdGlvbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFXUUEscUJBQXFCOzs7NEJBVFYsZUFBZTt5RUFFZCx3QkFBd0I7eUJBRWQsYUFBYTs0QkFDQyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFLElBQU0sQUFBRUMsWUFBWSxHQUFLQyxhQUFlLGdCQUFBLENBQWhDRCxZQUFZLEFBQW9CLEFBQUM7QUFFMUIsSUFBQSxBQUFNRCxxQkFBcUIsaUJBdUJ2QyxBQXZCWTthQUFNQSxxQkFBcUIsQ0FDNUJHLEtBQUssRUFBRUMsT0FBTzs4QkFEUEoscUJBQXFCO1FBRXRDLElBQUksQ0FBQ0csS0FB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