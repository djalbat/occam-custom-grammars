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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFZFUlRJQ0FMX0JBUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIE9QRVJBVE9SX1BBVFRFUk5fTkFNRSB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihydWxlcywgZW50cmllcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG5cbiAgY29uc3QgcGF0dGVybnMgPSBjdXN0b21HcmFtbWFycy5yZWR1Y2UoKHBhdHRlcm5zLCBjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0UGF0dGVybihwYXR0ZXJuTmFtZSk7XG5cbiAgICBpZiAocGF0dGVybikgeyAgLy8vXG4gICAgICBwYXR0ZXJucy5wdXNoKHBhdHRlcm4pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfSwgW10pO1xuXG4gIHBhdHRlcm5zLnJldmVyc2UoKTtcblxuICBjb25zdCBwYXR0ZXJuc1N0cmluZyA9IHBhdHRlcm5zLmpvaW4oVkVSVElDQUxfQkFSKSwgLy8vXG4gICAgICAgIHBhdHRlcm4gPSAocGF0dGVybk5hbWUgPT09IFRZUEVfUEFUVEVSTl9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgIGBeKD86JHtwYXR0ZXJuc1N0cmluZ30pXFxcXGJgIDpcbiAgICAgICAgICAgICAgICAgICAgICBgXig/OiR7cGF0dGVybnNTdHJpbmd9KWA7XG5cbiAgY29uc3QgZW50cnkgPSB7fTtcblxuICBlbnRyeVtwYXR0ZXJuTmFtZV0gPSBwYXR0ZXJuO1xuXG4gIHJldHVybiBlbnRyeTtcbn1cblxuZnVuY3Rpb24gY29tYmluZVJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChvdXRlckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgb3V0ZXJSdWxlID0gcnVsZXNbb3V0ZXJJbmRleF0sXG4gICAgICAgICAgb3V0ZXJSdWxlTmFtZSA9IG91dGVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBvdXRlclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGxldCBpbm5lckluZGV4ID0gb3V0ZXJJbmRleCArIDE7XG5cbiAgICB3aGlsZSAoaW5uZXJJbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29uc3QgaW5uZXJSdWxlID0gcnVsZXNbaW5uZXJJbmRleF0sXG4gICAgICAgICAgICBpbm5lclJ1bGVOYW1lID0gaW5uZXJSdWxlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGlubmVyUnVsZU5hbWUgPT09IG91dGVyUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5uZXJSdWxlRGVmaW5pdGlvbnMgPSBpbm5lclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgICAgICBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IFsgIC8vL1xuICAgICAgICAgIC4uLmlubmVyUnVsZURlZmluaXRpb25zLFxuICAgICAgICAgIC4uLm91dGVyUnVsZURlZmluaXRpb25zXG4gICAgICAgIF07XG5cbiAgICAgICAgb3V0ZXJSdWxlLnJlcGxhY2VBbGxEZWZpbml0aW9ucyguLi5vdXRlclJ1bGVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbm5lckluZGV4LCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHJ1bGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRlckluZGV4Kys7XG5cbiAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBwYXR0ZXJuTmFtZXMgPSBbXG4gICAgICAgICAgVFlQRV9QQVRURVJOX05BTUUsXG4gICAgICAgICAgT1BFUkFUT1JfUEFUVEVSTl9OQU1FXG4gICAgICAgIF0sXG4gICAgICAgIGVudHJpZXMgPSBwYXR0ZXJuTmFtZXMubWFwKChwYXR0ZXJuTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKTtcblxuICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG5cbiAgY29uc3QgYm5mcyA9IGN1c3RvbUdyYW1tYXJzLm1hcCgoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKCk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJydWxlcyIsImVudHJpZXMiLCJnZXRSdWxlcyIsImdldEVudHJpZXMiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjdXN0b21HcmFtbWFycyIsInJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORiIsImVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJlbnRyeUZyb21DdXN0b21HcmFtbWFycyIsInBhdHRlcm5OYW1lIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJwYXR0ZXJucyIsInJlZHVjZSIsImN1c3RvbUdyYW1tYXIiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInB1c2giLCJyZXZlcnNlIiwicGF0dGVybnNTdHJpbmciLCJqb2luIiwiVkVSVElDQUxfQkFSIiwiVFlQRV9QQVRURVJOX05BTUUiLCJlbnRyeSIsImNvbWJpbmVSdWxlcyIsIm91dGVySW5kZXgiLCJsZW5ndGgiLCJvdXRlclJ1bGUiLCJvdXRlclJ1bGVOYW1lIiwiZ2V0TmFtZSIsIm91dGVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwicmVwbGFjZUFsbERlZmluaXRpb25zIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsInBhdHRlcm5OYW1lcyIsIk9QRVJBVE9SX1BBVFRFUk5fTkFNRSIsIm1hcCIsImJuZnMiLCJibmYiLCJnZXRCTkYiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVdRQSxxQkFBcUI7Ozs0QkFUVixlQUFlO3lFQUVkLHdCQUF3Qjt5QkFFZCxhQUFhOzRCQUNDLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsSUFBTSxBQUFFQyxZQUFZLEdBQUtDLGFBQWUsZ0JBQUEsQ0FBaENELFlBQVksQUFBb0IsQUFBQztBQUUxQixJQUFBLEFBQU1ELHFCQUFxQixpQkF1QnZDLEFBdkJZO2FBQU1BLHFCQUFxQixDQUM1QkcsS0FBSyxFQUFFQyxPQUFPOzhCQURQSixxQkFBcUI7UUFFdEMsSUFBSSxDQUFDRyxL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