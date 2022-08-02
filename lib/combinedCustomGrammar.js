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
var rulesFromBNF = _occamGrammarUtilities.parserUtilities.rulesFromBNF;
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
    var patternsString = patterns.join(_constants.VERTICAL_BAR), pattern = patternName === _patternNames.TYPE_PATTERN_NAME ? "^(?:".concat(patternsString, ")\b") : "^(?:".concat(patternsString, ")");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgZGVmYXVsdEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBWRVJUSUNBTF9CQVIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi9wYXR0ZXJuTmFtZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluZWRDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IocnVsZXMsIGVudHJpZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuICBcbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWRDdXN0b21HcmFtbWFyKHJ1bGVzLCBlbnRyaWVzKTtcbiAgICBcbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBwYXR0ZXJuTmFtZSkge1xuICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuXG4gIGNvbnN0IHBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChwYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldFBhdHRlcm4ocGF0dGVybk5hbWUpO1xuXG4gICAgaWYgKHBhdHRlcm4pIHsgIC8vL1xuICAgICAgcGF0dGVybnMucHVzaChwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH0sIFtdKTtcblxuICBwYXR0ZXJucy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcGF0dGVybnNTdHJpbmcgPSBwYXR0ZXJucy5qb2luKFZFUlRJQ0FMX0JBUiksIC8vL1xuICAgICAgICBwYXR0ZXJuID0gKHBhdHRlcm5OYW1lID09PSBUWVBFX1BBVFRFUk5fTkFNRSkgP1xuICAgICAgICAgICAgICAgICAgICBgXig/OiR7cGF0dGVybnNTdHJpbmd9KVxcYmAgOlxuICAgICAgICAgICAgICAgICAgICAgIGBeKD86JHtwYXR0ZXJuc1N0cmluZ30pYDtcblxuICBjb25zdCBlbnRyeSA9IHt9O1xuXG4gIGVudHJ5W3BhdHRlcm5OYW1lXSA9IHBhdHRlcm47XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IHBhdHRlcm5OYW1lcyA9IFtcbiAgICAgICAgICBUWVBFX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICBPUEVSQVRPUl9QQVRURVJOX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgZW50cmllcyA9IHBhdHRlcm5OYW1lcy5tYXAoKHBhdHRlcm5OYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgIH0pO1xuXG4gIHJldHVybiBlbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cblxuICBjb25zdCBibmZzID0gY3VzdG9tR3JhbW1hcnMubWFwKChjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYoKTtcblxuICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgIH0pLFxuICAgICAgICBibmYgPSBibmZzLmpvaW4oRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBjb21iaW5lUnVsZXMocnVsZXMpXG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUnVsZXMocnVsZXMpIHtcbiAgbGV0IG91dGVySW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChvdXRlckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgb3V0ZXJSdWxlID0gcnVsZXNbb3V0ZXJJbmRleF0sXG4gICAgICAgICAgb3V0ZXJSdWxlTmFtZSA9IG91dGVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBvdXRlclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGxldCBpbm5lckluZGV4ID0gb3V0ZXJJbmRleCArIDE7XG5cbiAgICB3aGlsZSAoaW5uZXJJbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29uc3QgaW5uZXJSdWxlID0gcnVsZXNbaW5uZXJJbmRleF0sXG4gICAgICAgICAgICBpbm5lclJ1bGVOYW1lID0gaW5uZXJSdWxlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGlubmVyUnVsZU5hbWUgPT09IG91dGVyUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5uZXJSdWxlRGVmaW5pdGlvbnMgPSBpbm5lclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgICAgICBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IFsgIC8vL1xuICAgICAgICAgIC4uLmlubmVyUnVsZURlZmluaXRpb25zLFxuICAgICAgICAgIC4uLm91dGVyUnVsZURlZmluaXRpb25zXG4gICAgICAgIF07XG5cbiAgICAgICAgb3V0ZXJSdWxlLnJlcGxhY2VBbGxEZWZpbml0aW9ucyguLi5vdXRlclJ1bGVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbm5lckluZGV4LCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHJ1bGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRlckluZGV4Kys7XG5cbiAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJydWxlcyIsImVudHJpZXMiLCJnZXRSdWxlcyIsImdldEVudHJpZXMiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjdXN0b21HcmFtbWFycyIsInJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORiIsImVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJlbnRyeUZyb21DdXN0b21HcmFtbWFycyIsInBhdHRlcm5OYW1lIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJwYXR0ZXJucyIsInJlZHVjZSIsImN1c3RvbUdyYW1tYXIiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInB1c2giLCJyZXZlcnNlIiwicGF0dGVybnNTdHJpbmciLCJqb2luIiwiVkVSVElDQUxfQkFSIiwiVFlQRV9QQVRURVJOX05BTUUiLCJlbnRyeSIsInBhdHRlcm5OYW1lcyIsIk9QRVJBVE9SX1BBVFRFUk5fTkFNRSIsIm1hcCIsImJuZnMiLCJibmYiLCJnZXRCTkYiLCJFTVBUWV9TVFJJTkciLCJjb21iaW5lUnVsZXMiLCJvdXRlckluZGV4IiwibGVuZ3RoIiwib3V0ZXJSdWxlIiwib3V0ZXJSdWxlTmFtZSIsImdldE5hbWUiLCJvdXRlclJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiaW5uZXJJbmRleCIsImlubmVyUnVsZSIsImlubmVyUnVsZU5hbWUiLCJpbm5lclJ1bGVEZWZpbml0aW9ucyIsInJlcGxhY2VBbGxEZWZpbml0aW9ucyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVdRQSxxQkFBcUI7OztxQ0FUVix5QkFBeUI7eUVBRXhCLHdCQUF3Qjt5QkFFZCxhQUFhOzRCQUNDLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsSUFBTSxBQUFFQyxZQUFZLEdBQUtDLHNCQUFlLGdCQUFBLENBQWhDRCxZQUFZLEFBQW9CLEFBQUM7QUFFMUIsSUFBQSxBQUFNRCxxQkFBcUIsaUJBdUJ2QyxBQXZCWTthQUFNQSxxQkFBcUIsQ0FDNUJHLEtBQUssRUFBRUMsT0FBTzs7UUFDeEIsSUFBSSxDQUFDRCxLQUFL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