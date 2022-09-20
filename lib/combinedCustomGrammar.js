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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi9kZWZhdWx0Q3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFZFUlRJQ0FMX0JBUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUsIE9QRVJBVE9SX1BBVFRFUk5fTkFNRSB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihydWxlcywgZW50cmllcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGRlZmF1bHRDdXN0b21HcmFtbWFyID0gZGVmYXVsdEN1c3RvbUdyYW1tYXIpIHtcbiAgICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWRDdXN0b21HcmFtbWFyKHJ1bGVzLCBlbnRyaWVzKTtcbiAgICBcbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBibmZzID0gY3VzdG9tR3JhbW1hcnMubWFwKChjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYoKTtcblxuICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgIH0pLFxuICAgICAgICBibmYgPSBibmZzLmpvaW4oRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBjb21iaW5lUnVsZXMocnVsZXMpXG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IHBhdHRlcm5OYW1lcyA9IFtcbiAgICAgICAgICBUWVBFX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICBTWU1CT0xfUEFUVEVSTl9OQU1FLFxuICAgICAgICAgIE9QRVJBVE9SX1BBVFRFUk5fTkFNRVxuICAgICAgICBdLFxuICAgICAgICBlbnRyaWVzID0gcGF0dGVybk5hbWVzLm1hcCgocGF0dGVybk5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBwYXR0ZXJuTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpIHtcbiAgY29uc3QgcGF0dGVybnMgPSBjdXN0b21HcmFtbWFycy5yZWR1Y2UoKHBhdHRlcm5zLCBjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0UGF0dGVybihwYXR0ZXJuTmFtZSk7XG5cbiAgICBpZiAocGF0dGVybikgeyAgLy8vXG4gICAgICBwYXR0ZXJucy5wdXNoKHBhdHRlcm4pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfSwgW10pO1xuXG4gIHBhdHRlcm5zLnJldmVyc2UoKTtcblxuICBjb25zdCBwYXR0ZXJuc1N0cmluZyA9IHBhdHRlcm5zLmpvaW4oVkVSVElDQUxfQkFSKSwgLy8vXG4gICAgICAgIHBhdHRlcm4gPSAoKHBhdHRlcm5OYW1lID09PSBUWVBFX1BBVFRFUk5fTkFNRSkgfHwgKHBhdHRlcm5OYW1lID09PSBTWU1CT0xfUEFUVEVSTl9OQU1FKSk/XG4gICAgICAgICAgICAgICAgICAgYF4oPzoke3BhdHRlcm5zU3RyaW5nfSlcXFxcYmAgOlxuICAgICAgICAgICAgICAgICAgICAgYF4oPzoke3BhdHRlcm5zU3RyaW5nfSlgO1xuXG4gIGNvbnN0IGVudHJ5ID0ge307XG5cbiAgZW50cnlbcGF0dGVybk5hbWVdID0gcGF0dGVybjtcblxuICByZXR1cm4gZW50cnk7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVSdWxlcyhydWxlcykge1xuICBsZXQgb3V0ZXJJbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKG91dGVySW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb25zdCBvdXRlclJ1bGUgPSBydWxlc1tvdXRlckluZGV4XSxcbiAgICAgICAgICBvdXRlclJ1bGVOYW1lID0gb3V0ZXJSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IG91dGVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgbGV0IGlubmVySW5kZXggPSBvdXRlckluZGV4ICsgMTtcblxuICAgIHdoaWxlIChpbm5lckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbm5lclJ1bGUgPSBydWxlc1tpbm5lckluZGV4XSxcbiAgICAgICAgICAgIGlubmVyUnVsZU5hbWUgPSBpbm5lclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoaW5uZXJSdWxlTmFtZSA9PT0gb3V0ZXJSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBpbm5lclJ1bGVEZWZpbml0aW9ucyA9IGlubmVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgICAgIG91dGVyUnVsZURlZmluaXRpb25zID0gWyAgLy8vXG4gICAgICAgICAgLi4uaW5uZXJSdWxlRGVmaW5pdGlvbnMsXG4gICAgICAgICAgLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnNcbiAgICAgICAgXTtcblxuICAgICAgICBvdXRlclJ1bGUucmVwbGFjZUFsbERlZmluaXRpb25zKC4uLm91dGVyUnVsZURlZmluaXRpb25zKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IGlubmVySW5kZXgsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgcnVsZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG91dGVySW5kZXgrKztcblxuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInJ1bGVzIiwiZW50cmllcyIsImdldFJ1bGVzIiwiZ2V0RW50cmllcyIsImZyb21DdXN0b21HcmFtbWFycyIsImN1c3RvbUdyYW1tYXJzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiYm5mcyIsIm1hcCIsImN1c3RvbUdyYW1tYXIiLCJibmYiLCJnZXRCTkYiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwiY29tYmluZVJ1bGVzIiwicGF0dGVybk5hbWVzIiwiVFlQRV9QQVRURVJOX05BTUUiLCJTWU1CT0xfUEFUVEVSTl9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9OQU1FIiwicGF0dGVybk5hbWUiLCJlbnRyeSIsImVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzIiwicGF0dGVybnMiLCJyZWR1Y2UiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInB1c2giLCJyZXZlcnNlIiwicGF0dGVybnNTdHJpbmciLCJWRVJUSUNBTF9CQVIiLCJvdXRlckluZGV4IiwibGVuZ3RoIiwib3V0ZXJSdWxlIiwib3V0ZXJSdWxlTmFtZSIsImdldE5hbWUiLCJvdXRlclJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiaW5uZXJJbmRleCIsImlubmVyUnVsZSIsImlubmVyUnVsZU5hbWUiLCJpbm5lclJ1bGVEZWZpbml0aW9ucyIsInJlcGxhY2VBbGxEZWZpbml0aW9ucyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVdRQSxxQkFBcUI7Ozs0QkFUVixlQUFlO3lFQUVkLHdCQUF3Qjt5QkFFZCxhQUFhOzRCQUNzQixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlGLElBQU0sQUFBRUMsWUFBWSxHQUFLQyxhQUFlLGdCQUFBLENBQWhDRCxZQUFZLEFBQW9CLEFBQUM7QUFFMUIsSUFBQSxBQUFN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