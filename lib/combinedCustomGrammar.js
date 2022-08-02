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
    var patternsString = patterns.join(_constants.VERTICAL_BAR), pattern = "^(?:".concat(patternsString, ")\b");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgZGVmYXVsdEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBWRVJUSUNBTF9CQVIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi9wYXR0ZXJuTmFtZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluZWRDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IocnVsZXMsIGVudHJpZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuICBcbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWRDdXN0b21HcmFtbWFyKHJ1bGVzLCBlbnRyaWVzKTtcbiAgICBcbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBwYXR0ZXJuTmFtZSkge1xuICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuXG4gIGNvbnN0IHBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChwYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldFBhdHRlcm4ocGF0dGVybk5hbWUpO1xuXG4gICAgaWYgKHBhdHRlcm4pIHsgIC8vL1xuICAgICAgcGF0dGVybnMucHVzaChwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH0sIFtdKTtcblxuICBwYXR0ZXJucy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcGF0dGVybnNTdHJpbmcgPSBwYXR0ZXJucy5qb2luKFZFUlRJQ0FMX0JBUiksIC8vL1xuICAgICAgICBwYXR0ZXJuID0gYF4oPzoke3BhdHRlcm5zU3RyaW5nfSlcXGJgO1xuXG4gIGNvbnN0IGVudHJ5ID0ge307XG5cbiAgZW50cnlbcGF0dGVybk5hbWVdID0gcGF0dGVybjtcblxuICByZXR1cm4gZW50cnk7XG59XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgcGF0dGVybk5hbWVzID0gW1xuICAgICAgICAgIFRZUEVfUEFUVEVSTl9OQU1FLFxuICAgICAgICAgIE9QRVJBVE9SX1BBVFRFUk5fTkFNRVxuICAgICAgICBdLFxuICAgICAgICBlbnRyaWVzID0gcGF0dGVybk5hbWVzLm1hcCgocGF0dGVybk5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBwYXR0ZXJuTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgfSk7XG5cbiAgcmV0dXJuIGVudHJpZXM7XG59XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycykge1xuICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuXG4gIGNvbnN0IGJuZnMgPSBjdXN0b21HcmFtbWFycy5tYXAoKGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORigpO1xuXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSksXG4gICAgICAgIGJuZiA9IGJuZnMuam9pbihFTVBUWV9TVFJJTkcpLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbWJpbmVSdWxlcyhydWxlcylcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVSdWxlcyhydWxlcykge1xuICBsZXQgb3V0ZXJJbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKG91dGVySW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb25zdCBvdXRlclJ1bGUgPSBydWxlc1tvdXRlckluZGV4XSxcbiAgICAgICAgICBvdXRlclJ1bGVOYW1lID0gb3V0ZXJSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IG91dGVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgbGV0IGlubmVySW5kZXggPSBvdXRlckluZGV4ICsgMTtcblxuICAgIHdoaWxlIChpbm5lckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbm5lclJ1bGUgPSBydWxlc1tpbm5lckluZGV4XSxcbiAgICAgICAgICAgIGlubmVyUnVsZU5hbWUgPSBpbm5lclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoaW5uZXJSdWxlTmFtZSA9PT0gb3V0ZXJSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBpbm5lclJ1bGVEZWZpbml0aW9ucyA9IGlubmVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgICAgIG91dGVyUnVsZURlZmluaXRpb25zID0gWyAgLy8vXG4gICAgICAgICAgLi4uaW5uZXJSdWxlRGVmaW5pdGlvbnMsXG4gICAgICAgICAgLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnNcbiAgICAgICAgXTtcblxuICAgICAgICBvdXRlclJ1bGUucmVwbGFjZUFsbERlZmluaXRpb25zKC4uLm91dGVyUnVsZURlZmluaXRpb25zKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IGlubmVySW5kZXgsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgcnVsZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG91dGVySW5kZXgrKztcblxuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInJ1bGVzIiwiZW50cmllcyIsImdldFJ1bGVzIiwiZ2V0RW50cmllcyIsImZyb21DdXN0b21HcmFtbWFycyIsImN1c3RvbUdyYW1tYXJzIiwicnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwiZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzIiwicGF0dGVybk5hbWUiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsInBhdHRlcm5zIiwicmVkdWNlIiwiY3VzdG9tR3JhbW1hciIsInBhdHRlcm4iLCJnZXRQYXR0ZXJuIiwicHVzaCIsInJldmVyc2UiLCJwYXR0ZXJuc1N0cmluZyIsImpvaW4iLCJWRVJUSUNBTF9CQVIiLCJlbnRyeSIsInBhdHRlcm5OYW1lcyIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9OQU1FIiwibWFwIiwiYm5mcyIsImJuZiIsImdldEJORiIsIkVNUFRZX1NUUklORyIsImNvbWJpbmVSdWxlcyIsIm91dGVySW5kZXgiLCJsZW5ndGgiLCJvdXRlclJ1bGUiLCJvdXRlclJ1bGVOYW1lIiwiZ2V0TmFtZSIsIm91dGVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwicmVwbGFjZUFsbERlZmluaXRpb25zIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBV1FBLHFCQUFxQjs7O3FDQVRWLHlCQUF5Qjt5RUFFeEIsd0JBQXdCO3lCQUVkLGFBQWE7NEJBQ0MsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RSxJQUFNLEFBQUVDLFlBQVksR0FBS0Msc0JBQWUsZ0JBQUEsQ0FBaENELFlBQVksQUFBb0IsQUFBQztBQUUxQixJQUFBLEFBQU1ELHFCQUFxQixpQkF1QnZDLEFBdkJZO2FBQU1BLHFCQUFxQixDQUM1QkcsS0FBSyxFQUFFQyxPQUFPOztRQUN4QixJQUFJLENBQUNELEtBQUssR0FBR0EsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPLENBQUM7Ozs7WUFHekJDLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxHQUFHO2dCQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUM7YUFDbkI7OztZQUVERyxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsR0FBRztnQkFDWCxPQUFPLElBQUksQ0FBQ0YsT0FBTyxDQUFDO2FBQ3JCOzs7O1lBRU1HLEdBQWtCLEVBQWxCQSxvQkFBa0I7bUJBQXpCLFNBQU9BLGtCQUFrQixDQUFDQyxjQUFjLEVBQUU7Z0JBQ3hDLElBQU1MLEtBQUssR0FBR00sb0NBQW9DLENBQUNELGNBQWMsQ0FBQyxFQUM1REosT0FBTyxHQUFHTSx5QkFBeUIsQ0FBQ0YsY0FBYyxDQUFDLEVBQ25ERyxxQkFBcUIsR0FBRyxJQUFJWCxxQkFBcUIsQ0FBQ0csS0FBSyxFQUFFQyxPQUFPLENBQUMsQUFBQztnQkFFeEUsT0FBT08scUJBQXFCLENBQUM7YUFDOUI7Ozs7Q0FDRixFQUFBO0FBRUQsU0FBU0MsdUJBQXVCLENBQUNKLGNBQWMsRUFBRUssV0FBVyxFQUFFO0lBQzVETCxjQUFjLEdBQUc7UUFBRU0scUJBQW9CLFFBQUE7S0FBcUIsQ0FBM0MsTUFBMkMsQ0FBbkIsbUJBQUdOLGNBQWMsQ0FBZEEsQ0FBZ0IsQ0FBQyxDQUFDLEdBQUc7SUFFakUsSUFBTU8sUUFBUSxHQUFHUCxjQUFjLENBQUNRLE1BQU0sQ0FBQyxTQUFDRCxRQUFRLEVBQUVFLGFBQWEsRUFBSztRQUNsRSxJQUFNQyxPQUFPLEdBQUdELGFBQWEsQ0FBQ0UsVUFBVSxDQUFDTixXQUFXLENBQUMsQUFBQztRQUV0RCxJQUFJSyxPQUFPLEVBQUU7WUFDWEgsUUFBUSxDQUFDSyxJQUFJLENBQUNGLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBT0gsUUFBUSxDQUFDO0tBQ2pCLEVBQUUsRUFBRSxDQUFDLEFBQUM7SUFFUEEsUUFBUSxDQUFDTSxPQUFPLEVBQUUsQ0FBQztJQUVuQixJQUFNQyxjQUFjLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDQyxVQUFZLGFBQUEsQ0FBQyxFQUM1Q04sT0FBTyxHQUFHLEFBQUMsTUFBSSxDQUFpQixNQUFHLENBQWxCSSxjQUFjLEVBQUMsS0FBRyxDQUFDLEFBQUM7SUFFM0MsSUFBTUcsS0FBSyxHQUFHLEVBQUUsQUFBQztJQUVqQkEsS0FBSyxDQUFDWixXQUFXLENBQUMsR0FBR0ssT0FBTyxDQUFDO0lBRTdCLE9BQU9PLEtBQUssQ0FBQztDQUNkO0FBRUQsU0FBU2YseUJBQXlCLENBQUNGLGNBQWMsRUFBRTtJQUNqRCxJQUFNa0IsWUFBWSxHQUFHO1FBQ2JDLGFBQWlCLGtCQUFBO1FBQ2pCQyxhQUFxQixzQkFBQTtLQUN0QixFQUNEeEIsT0FBTyxHQUFHc0IsWUFBWSxDQUFDRyxHQUFHLENBQUMsU0FBQ2hCLFdBQVcsRUFBSztRQUMxQyxJQUFNWSxLQUFLLEdBQUdiLHVCQUF1QixDQUFDSixjQUFjLEVBQUVLLFdBQVcsQ0FBQyxBQUFDO1FBRW5FLE9BQU9ZLEtBQUssQ0FBQztLQUNmLENBQUMsQUFBQztJQUVSLE9BQU9yQixPQUFPLENBQUM7Q0FDaEI7QUFFRCxTQUFTSyxvQ0FBb0MsQ0FBQ0QsY0FBYyxFQUFFO0lBQzVEQSxjQUFjLEdBQUc7UUFBRU0scUJBQW9CLFFBQUE7S0FBcUIsQ0FBM0MsTUFBMkMsQ0FBbkIsbUJBQUdOLGNBQWMsQ0FBZEEsQ0FBZ0IsQ0FBQyxDQUFDLEdBQUc7SUFFakUsSUFBTXNCLElBQUksR0FBR3RCLGNBQWMsQ0FBQ3FCLEdBQUcsQ0FBQyxTQUFDWixhQUFhLEVBQUs7UUFDM0MsSUFBTWMsR0FBRyxHQUFHZCxhQUFhLENBQUNlLE1BQU0sRUFBRSxBQUFDO1FBRW5DLE9BQU9ELEdBQUcsQ0FBQztLQUNaLENBQUMsRUFDRkEsR0FBRyxHQUFHRCxJQUFJLENBQUNQLElBQUksQ0FBQ1UsVUFBWSxhQUFBLENBQUMsRUFDN0I5QixLQUFLLEdBQUdGLFlBQVksQ0FBQzhCLEdBQUcsQ0FBQyxBQUFDO0lBRWhDRyxZQUFZLENBQUMvQixLQUFLLENBQUM7SUFFbkIsT0FBT0EsS0FBSyxDQUFDO0NBQ2Q7QUFFRCxTQUFTK0IsWUFBWSxDQUFDL0IsS0FBSyxFQUFFO0lBQzNCLElBQUlnQyxVQUFVLEdBQUcsQ0FBQyxFQUNkQyxNQUFNLEdBQUdqQyxLQUFLLENBQUNpQyxNQUFNLEFBQUM7SUFFMUIsTUFBT0QsVUFBVSxHQUFHQyxNQUFNLENBQUU7UUFDMUIsSUFBTUMsU0FBUyxHQUFHbEMsS0FBSyxDQUFDZ0MsVUFBVSxDQUFDLEVBQzdCRyxhQUFhLEdBQUdELFNBQVMsQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7UUFFMUMsSUFBSUMsb0JBQW9CLEdBQUdILFNBQVMsQ0FBQ0ksY0FBYyxFQUFFLEFBQUM7UUFFdEQsSUFBSUMsVUFBVSxHQUFHUCxVQUFVLEdBQUcsQ0FBQyxBQUFDO1FBRWhDLE1BQU9PLFVBQVUsR0FBR04sTUFBTSxDQUFFO1lBQzFCLElBQU1PLFNBQVMsR0FBR3hDLEtBQUssQ0FBQ3VDLFVBQVUsQ0FBQyxFQUM3QkUsYUFBYSxHQUFHRCxTQUFTLENBQUNKLE9BQU8sRUFBRSxBQUFDO1lBRTFDLElBQUlLLGFBQWEsS0FBS04sYUFBYSxFQUFFO29CQVFuQ0QsVUFBUztnQkFQVCxJQUFNUSxvQkFBb0IsR0FBR0YsU0FBUyxDQUFDRixjQUFjLEVBQUUsQUFBQztnQkFFeERELG9CQUFvQixHQUFHLEFBQ3JCLG1CQUFHSyxvQkFBb0IsQ0FBcEJBLFFBQ0gsbUJBQUdMLG9CQUFvQixDQUFwQkEsQ0FDSixDQUFDO2dCQUVGSCxDQUFBQSxVQUFTLEdBQVRBLFNBQVMsRUFBQ1MscUJBQXFCLENBQS9CVCxLQUF3RCxDQUF4REEsVUFBUyxFQUF1QixtQkFBR0csb0JBQW9CLENBQXBCQSxDQUFxQixDQUFDO2dCQUV6RCxJQUFNTyxLQUFLLEdBQUdMLFVBQVUsRUFDbEJNLFdBQVcsR0FBRyxDQUFDLEFBQUM7Z0JBRXRCN0MsS0FBSyxDQUFDOEMsTUFBTSxDQUFDRixLQUFLLEVBQUVDLFdBQVcsQ0FBQyxDQUFDO2dCQUVqQ1osTUFBTSxHQUFHakMsS0FBSyxDQUFDaUMsTUFBTSxDQUFDO2FBQ3ZCLE1BQU07Z0JBQ0xNLFVBQVUsRUFBRSxDQUFDO2FBQ2Q7U0FDRjtRQUVEUCxVQUFVLEVBQUUsQ0FBQztRQUViQyxNQUFNLEdBQUdqQyxLQUFLLENBQUNpQyxNQUFNLENBQUM7S0FDdkI7Q0FDRiJ9