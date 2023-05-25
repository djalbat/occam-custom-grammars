"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Combined;
    }
});
var _occamparsers = require("occam-parsers");
var _default = /*#__PURE__*/ _interop_require_default(require("../customGrammar/default"));
var _constants = require("../constants");
var _patternNames = require("../patternNames");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF;
var Combined = /*#__PURE__*/ function() {
    function Combined(rules, entries) {
        _class_call_check(this, Combined);
        this.rules = rules;
        this.entries = entries;
    }
    _create_class(Combined, [
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
            key: "fromNothing",
            value: function fromNothing() {
                var includeDefault = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var customGrammars = [];
                if (includeDefault) {
                    customGrammars = [
                        _default.default
                    ].concat(_to_consumable_array(customGrammars)); ///
                }
                var rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new Combined(rules, entries);
                return combinedCustomGrammar;
            }
        },
        {
            key: "fromCustomGrammars",
            value: function fromCustomGrammars(customGrammars) {
                var includeDefault = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                if (includeDefault) {
                    customGrammars = [
                        _default.default
                    ].concat(_to_consumable_array(customGrammars)); ///
                }
                var rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new Combined(rules, entries);
                return combinedCustomGrammar;
            }
        }
    ]);
    return Combined;
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
                outerRuleDefinitions = _to_consumable_array(innerRuleDefinitions).concat(_to_consumable_array(outerRuleDefinitions));
                (_outerRule = outerRule).replaceAllDefinitions.apply(_outerRule, _to_consumable_array(outerRuleDefinitions));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgZGVmYXVsdEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4uL2N1c3RvbUdyYW1tYXIvZGVmYXVsdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFZFUlRJQ0FMX0JBUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBTWU1CT0xfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi4vcGF0dGVybk5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkIHtcbiAgY29uc3RydWN0b3IocnVsZXMsIGVudHJpZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuICBcbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoaW5jbHVkZURlZmF1bHQgPSB0cnVlKSB7XG4gICAgbGV0IGN1c3RvbUdyYW1tYXJzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZURlZmF1bHQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWQocnVsZXMsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZChydWxlcywgZW50cmllcyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgYm5mcyA9IGN1c3RvbUdyYW1tYXJzLm1hcCgoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKCk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBwYXR0ZXJuTmFtZXMgPSBbXG4gICAgICAgICAgVFlQRV9QQVRURVJOX05BTUUsXG4gICAgICAgICAgU1lNQk9MX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICBPUEVSQVRPUl9QQVRURVJOX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgZW50cmllcyA9IHBhdHRlcm5OYW1lcy5tYXAoKHBhdHRlcm5OYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGNvbnN0IHBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChwYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldFBhdHRlcm4ocGF0dGVybk5hbWUpO1xuXG4gICAgaWYgKHBhdHRlcm4pIHsgIC8vL1xuICAgICAgcGF0dGVybnMucHVzaChwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH0sIFtdKTtcblxuICBwYXR0ZXJucy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcGF0dGVybnNTdHJpbmcgPSBwYXR0ZXJucy5qb2luKFZFUlRJQ0FMX0JBUiksIC8vL1xuICAgICAgICBwYXR0ZXJuID0gKHBhdHRlcm5OYW1lID09PSBUWVBFX1BBVFRFUk5fTkFNRSk/XG4gICAgICAgICAgICAgICAgICAgYF4oPzoke3BhdHRlcm5zU3RyaW5nfSlcXFxcYmAgOlxuICAgICAgICAgICAgICAgICAgICAgYF4oPzoke3BhdHRlcm5zU3RyaW5nfSlgO1xuXG4gIGNvbnN0IGVudHJ5ID0ge307XG5cbiAgZW50cnlbcGF0dGVybk5hbWVdID0gcGF0dGVybjtcblxuICByZXR1cm4gZW50cnk7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVSdWxlcyhydWxlcykge1xuICBsZXQgb3V0ZXJJbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKG91dGVySW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb25zdCBvdXRlclJ1bGUgPSBydWxlc1tvdXRlckluZGV4XSxcbiAgICAgICAgICBvdXRlclJ1bGVOYW1lID0gb3V0ZXJSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IG91dGVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgbGV0IGlubmVySW5kZXggPSBvdXRlckluZGV4ICsgMTtcblxuICAgIHdoaWxlIChpbm5lckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbm5lclJ1bGUgPSBydWxlc1tpbm5lckluZGV4XSxcbiAgICAgICAgICAgIGlubmVyUnVsZU5hbWUgPSBpbm5lclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoaW5uZXJSdWxlTmFtZSA9PT0gb3V0ZXJSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBpbm5lclJ1bGVEZWZpbml0aW9ucyA9IGlubmVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgICAgIG91dGVyUnVsZURlZmluaXRpb25zID0gWyAgLy8vXG4gICAgICAgICAgLi4uaW5uZXJSdWxlRGVmaW5pdGlvbnMsXG4gICAgICAgICAgLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnNcbiAgICAgICAgXTtcblxuICAgICAgICBvdXRlclJ1bGUucmVwbGFjZUFsbERlZmluaXRpb25zKC4uLm91dGVyUnVsZURlZmluaXRpb25zKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IGlubmVySW5kZXgsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgcnVsZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG91dGVySW5kZXgrKztcblxuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmVkIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXMiLCJlbnRyaWVzIiwiZ2V0UnVsZXMiLCJnZXRFbnRyaWVzIiwiZnJvbU5vdGhpbmciLCJpbmNsdWRlRGVmYXVsdCIsImN1c3RvbUdyYW1tYXJzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiYm5mcyIsIm1hcCIsImN1c3RvbUdyYW1tYXIiLCJibmYiLCJnZXRCTkYiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwiY29tYmluZVJ1bGVzIiwicGF0dGVybk5hbWVzIiwiVFlQRV9QQVRURVJOX05BTUUiLCJTWU1CT0xfUEFUVEVSTl9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9OQU1FIiwicGF0dGVybk5hbWUiLCJlbnRyeSIsImVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzIiwicGF0dGVybnMiLCJyZWR1Y2UiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInB1c2giLCJyZXZlcnNlIiwicGF0dGVybnNTdHJpbmciLCJWRVJUSUNBTF9CQVIiLCJvdXRlckluZGV4IiwibGVuZ3RoIiwib3V0ZXJSdWxlIiwib3V0ZXJSdWxlTmFtZSIsImdldE5hbWUiLCJvdXRlclJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiaW5uZXJJbmRleCIsImlubmVyUnVsZSIsImlubmVyUnVsZU5hbWUiLCJpbm5lclJ1bGVEZWZpbml0aW9ucyIsInJlcGxhY2VBbGxEZWZpbml0aW9ucyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzRCQVRXOzhEQUVDO3lCQUVVOzRCQUNtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUsSUFBTSxBQUFFQyxlQUFpQkMsOEJBQWpCRDtBQUVPLElBQUEsQUFBTUQseUJBeUNsQixBQXpDWTthQUFNQSxTQUNQRyxLQUFLLEVBQUVDLE9BQU87Z0NBRFBKO1FBRWpCLElBQUksQ0FBQ0csUUFBUUE7UUFDYixJQUFJLENBQUNDLFVBQVVBOztrQkFIRUo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0E7b0JBQVlDLGlCQUFBQSxpRUFBaUI7Z0JBQ2xDLElBQUlDLGlCQUFpQixFQUFFO2dCQUV2QixJQUFJRCxnQkFBZ0I7b0JBQ2xCQyxpQkFBaUI7d0JBQUVDO3FCQUF5QyxDQUEzQyxPQUF3QixxQkFBR0Qsa0JBQWtCLEdBQUc7Z0JBQ25FO2dCQUVBLElBQU1OLFFBQVFRLHFDQUFxQ0YsaUJBQzdDTCxVQUFVUSwwQkFBMEJILGlCQUNwQ0ksd0JBQXdCLElBdkJiYixTQXVCMEJHLE9BQU9DO2dCQUVsRCxPQUFPUztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CTCxjQUFjO29CQUFFRCxpQkFBQUEsaUVBQWlCO2dCQUN6RCxJQUFJQSxnQkFBZ0I7b0JBQ2xCQyxpQkFBaUI7d0JBQUVDO3FCQUF5QyxDQUEzQyxPQUF3QixxQkFBR0Qsa0JBQWtCLEdBQUc7Z0JBQ25FO2dCQUVBLElBQU1OLFFBQVFRLHFDQUFxQ0YsaUJBQzdDTCxVQUFVUSwwQkFBMEJILGlCQUNwQ0ksd0JBQXdCLElBbkNiYixTQW1DMEJHLE9BQU9DO2dCQUVsRCxPQUFPUztZQUNUOzs7V0F0Q21CYjs7QUF5Q3JCLFNBQVNXLHFDQUFxQ0YsY0FBYztJQUMxRCxJQUFNTSxPQUFPTixlQUFlTyxJQUFJLFNBQUNDO1FBQ3pCLElBQU1DLE1BQU1ELGNBQWNFO1FBRTFCLE9BQU9EO0lBQ1QsSUFDQUEsTUFBTUgsS0FBS0ssS0FBS0MsMEJBQ2hCbEIsUUFBUUYsYUFBYWlCO0lBRTNCSSxhQUFhbkI7SUFFYixPQUFPQTtBQUNUO0FBRUEsU0FBU1MsMEJBQTBCSCxjQUFjO0lBQy9DLElBQU1jLGVBQWU7UUFDYkM7UUFDQUM7UUFDQUM7S0FDRCxFQUNEdEIsVUFBVW1CLGFBQWFQLElBQUksU0FBQ1c7UUFDMUIsSUFBTUMsUUFBUUMsd0JBQXdCcEIsZ0JBQWdCa0I7UUFFdEQsT0FBT0M7SUFDVDtJQUVOLE9BQU94QjtBQUNUO0FBRUEsU0FBU3lCLHdCQUF3QnBCLGNBQWMsRUFBRWtCLFdBQVc7SUFDMUQsSUFBTUcsV0FBV3JCLGVBQWVzQixPQUFPLFNBQUNELFVBQVViO1FBQ2hELElBQU1lLFVBQVVmLGNBQWNnQixXQUFXTjtRQUV6QyxJQUFJSyxTQUFTO1lBQ1hGLFNBQVNJLEtBQUtGO1FBQ2hCO1FBRUEsT0FBT0Y7SUFDVCxHQUFHLEVBQUU7SUFFTEEsU0FBU0s7SUFFVCxJQUFNQyxpQkFBaUJOLFNBQVNWLEtBQUtpQiwwQkFDL0JMLFVBQVUsQUFBQ0wsZ0JBQWdCSCxrQ0FDaEIsQUFBQyxPQUFxQixPQUFmWSxnQkFBZSxVQUNwQixBQUFDLE9BQXFCLE9BQWZBLGdCQUFlO0lBRXpDLElBQU1SLFFBQVEsQ0FBQztJQUVmQSxLQUFLLENBQUNELFlBQVksR0FBR0s7SUFFckIsT0FBT0o7QUFDVDtBQUVBLFNBQVNOLGFBQWFuQixLQUFLO0lBQ3pCLElBQUltQyxhQUFhLEdBQ2JDLFNBQVNwQyxNQUFNb0M7SUFFbkIsTUFBT0QsYUFBYUMsT0FBUTtRQUMxQixJQUFNQyxZQUFZckMsS0FBSyxDQUFDbUMsV0FBVyxFQUM3QkcsZ0JBQWdCRCxVQUFVRTtRQUVoQyxJQUFJQyx1QkFBdUJILFVBQVVJO1FBRXJDLElBQUlDLGFBQWFQLGFBQWE7UUFFOUIsTUFBT08sYUFBYU4sT0FBUTtZQUMxQixJQUFNTyxZQUFZM0MsS0FBSyxDQUFDMEMsV0FBVyxFQUM3QkUsZ0JBQWdCRCxVQUFVSjtZQUVoQyxJQUFJSyxrQkFBa0JOLGVBQWU7b0JBUW5DRDtnQkFQQSxJQUFNUSx1QkFBdUJGLFVBQVVGO2dCQUV2Q0QsdUJBQXVCLEFBQ3JCLHFCQUFHSyw2QkFDSCxxQkFBR0w7Z0JBR0xILENBQUFBLGFBQUFBLFdBQVVTLHNCQUFWVCxNQUFBQSxZQUFnQyxxQkFBR0c7Z0JBRW5DLElBQU1PLFFBQVFMLFlBQ1JNLGNBQWM7Z0JBRXBCaEQsTUFBTWlELE9BQU9GLE9BQU9DO2dCQUVwQlosU0FBU3BDLE1BQU1vQztZQUNqQixPQUFPO2dCQUNMTTtZQUNGO1FBQ0Y7UUFFQVA7UUFFQUMsU0FBU3BDLE1BQU1vQztJQUNqQjtBQUNGIn0=