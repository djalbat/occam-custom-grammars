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
                var defaultCustomGrammar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultCustomGrammar;
                customGrammars = [
                    defaultCustomGrammar
                ].concat(_toConsumableArray(customGrammars)); ///
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
    var patternsString = patterns.join(_constants.VERTICAL_BAR), pattern = patternName === _patternNames.TYPE_PATTERN_NAME ? "^(?:".concat(patternsString, ")\\b") : "^(?:".concat(patternsString, ")");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFZFUlRJQ0FMX0JBUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIE9QRVJBVE9SX1BBVFRFUk5fTkFNRSB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihydWxlcywgZW50cmllcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGRlZmF1bHRDdXN0b21HcmFtbWFyID0gZGVmYXVsdEN1c3RvbUdyYW1tYXIpIHtcbiAgICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWRDdXN0b21HcmFtbWFyKHJ1bGVzLCBlbnRyaWVzKTtcbiAgICBcbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBibmZzID0gY3VzdG9tR3JhbW1hcnMubWFwKChjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYoKTtcblxuICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgIH0pLFxuICAgICAgICBibmYgPSBibmZzLmpvaW4oRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBjb21iaW5lUnVsZXMocnVsZXMpXG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IHBhdHRlcm5OYW1lcyA9IFtcbiAgICAgICAgICBUWVBFX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICBPUEVSQVRPUl9QQVRURVJOX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgZW50cmllcyA9IHBhdHRlcm5OYW1lcy5tYXAoKHBhdHRlcm5OYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGNvbnN0IHBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChwYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldFBhdHRlcm4ocGF0dGVybk5hbWUpO1xuXG4gICAgaWYgKHBhdHRlcm4pIHsgIC8vL1xuICAgICAgcGF0dGVybnMucHVzaChwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH0sIFtdKTtcblxuICBwYXR0ZXJucy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcGF0dGVybnNTdHJpbmcgPSBwYXR0ZXJucy5qb2luKFZFUlRJQ0FMX0JBUiksIC8vL1xuICAgICAgICBwYXR0ZXJuID0gKHBhdHRlcm5OYW1lID09PSBUWVBFX1BBVFRFUk5fTkFNRSkgP1xuICAgICAgICAgICAgICAgICAgIGBeKD86JHtwYXR0ZXJuc1N0cmluZ30pXFxcXGJgIDpcbiAgICAgICAgICAgICAgICAgICAgIGBeKD86JHtwYXR0ZXJuc1N0cmluZ30pYDtcblxuICBjb25zdCBlbnRyeSA9IHt9O1xuXG4gIGVudHJ5W3BhdHRlcm5OYW1lXSA9IHBhdHRlcm47XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUnVsZXMocnVsZXMpIHtcbiAgbGV0IG91dGVySW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChvdXRlckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgb3V0ZXJSdWxlID0gcnVsZXNbb3V0ZXJJbmRleF0sXG4gICAgICAgICAgb3V0ZXJSdWxlTmFtZSA9IG91dGVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBvdXRlclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGxldCBpbm5lckluZGV4ID0gb3V0ZXJJbmRleCArIDE7XG5cbiAgICB3aGlsZSAoaW5uZXJJbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29uc3QgaW5uZXJSdWxlID0gcnVsZXNbaW5uZXJJbmRleF0sXG4gICAgICAgICAgICBpbm5lclJ1bGVOYW1lID0gaW5uZXJSdWxlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGlubmVyUnVsZU5hbWUgPT09IG91dGVyUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5uZXJSdWxlRGVmaW5pdGlvbnMgPSBpbm5lclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgICAgICBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IFsgIC8vL1xuICAgICAgICAgIC4uLmlubmVyUnVsZURlZmluaXRpb25zLFxuICAgICAgICAgIC4uLm91dGVyUnVsZURlZmluaXRpb25zXG4gICAgICAgIF07XG5cbiAgICAgICAgb3V0ZXJSdWxlLnJlcGxhY2VBbGxEZWZpbml0aW9ucyguLi5vdXRlclJ1bGVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbm5lckluZGV4LCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHJ1bGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRlckluZGV4Kys7XG5cbiAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJydWxlcyIsImVudHJpZXMiLCJnZXRSdWxlcyIsImdldEVudHJpZXMiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjdXN0b21HcmFtbWFycyIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwiZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImJuZnMiLCJtYXAiLCJjdXN0b21HcmFtbWFyIiwiYm5mIiwiZ2V0Qk5GIiwiam9pbiIsIkVNUFRZX1NUUklORyIsImNvbWJpbmVSdWxlcyIsInBhdHRlcm5OYW1lcyIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9OQU1FIiwicGF0dGVybk5hbWUiLCJlbnRyeSIsImVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzIiwicGF0dGVybnMiLCJyZWR1Y2UiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInB1c2giLCJyZXZlcnNlIiwicGF0dGVybnNTdHJpbmciLCJWRVJUSUNBTF9CQVIiLCJvdXRlckluZGV4IiwibGVuZ3RoIiwib3V0ZXJSdWxlIiwib3V0ZXJSdWxlTmFtZSIsImdldE5hbWUiLCJvdXRlclJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiaW5uZXJJbmRleCIsImlubmVyUnVsZSIsImlubmVyUnVsZU5hbWUiLCJpbm5lclJ1bGVEZWZpbml0aW9ucyIsInJlcGxhY2VBbGxEZWZpbml0aW9ucyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVdRQSxxQkFBcUI7Ozs0QkFUVixlQUFlO3lFQUVkLHdCQUF3Qjt5QkFFZCxhQUFhOzRCQUNDLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsSUFBTSxBQUFFQyxZQUFZLEdBQUtDLGFBQWUsZ0JBQUEsQ0FBaENELFlBQVksQUFBb0IsQUFBQztBQUUxQixJQUFBLEFBQU1ELHFCQUFxQixpQkF5QnZDLEFBekJZO2FBQU1BLHFCQUFxQixDQUM1QkcsS0FBSyxFQUFFQyxPQUFPOzhCQURQSixxQkFBcUI7UUFFdEMsSUFBSSxDQUFDRyxLQUFLLEdBQUdBLEtBQUssQ0FBQztRQUNuQixJ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