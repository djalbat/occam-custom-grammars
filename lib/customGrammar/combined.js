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
var _necessary = require("necessary");
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
var unshift = _necessary.arrayUtilities.unshift, rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF;
var CombinedCustomGrammar = /*#__PURE__*/ function() {
    function CombinedCustomGrammar(rules, entries) {
        _class_call_check(this, CombinedCustomGrammar);
        this.rules = rules;
        this.entries = entries;
    }
    _create_class(CombinedCustomGrammar, [
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
                var rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
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
        _patternNames.PROPERTY_PATTERN_NAME,
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
    var patternsString = patterns.join(_constants.VERTICAL_BAR), pattern = "^(?:".concat(patternsString, ")");
    var entry = {};
    entry[patternName] = pattern;
    return entry;
}
function combineRules(rules) {
    var outerIndex = 0, length = rules.length;
    while(outerIndex < length){
        var outerRule = rules[outerIndex], outerRuleName = outerRule.getName();
        var innerIndex = outerIndex + 1;
        while(innerIndex < length){
            var innerRule = rules[innerIndex], innerRuleName = innerRule.getName();
            if (innerRuleName === outerRuleName) {
                var innerRuleDefinitions = innerRule.getDefinitions(), outerRuleDefinitions = outerRule.getDefinitions();
                unshift(outerRuleDefinitions, innerRuleDefinitions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgVkVSVElDQUxfQkFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUsIFBST1BFUlRZX1BBVFRFUk5fTkFNRSwgT1BFUkFUT1JfUEFUVEVSTl9OQU1FIH0gZnJvbSBcIi4uL3BhdHRlcm5OYW1lc1wiO1xuXG5jb25zdCB7IHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluZWRDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IocnVsZXMsIGVudHJpZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuICBcbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoaW5jbHVkZURlZmF1bHQgPSB0cnVlKSB7XG4gICAgbGV0IGN1c3RvbUdyYW1tYXJzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZURlZmF1bHQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWRDdXN0b21HcmFtbWFyKHJ1bGVzLCBlbnRyaWVzKTtcblxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBpbmNsdWRlRGVmYXVsdCA9IHRydWUpIHtcbiAgICBpZiAoaW5jbHVkZURlZmF1bHQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWRDdXN0b21HcmFtbWFyKHJ1bGVzLCBlbnRyaWVzKTtcbiAgICBcbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBibmZzID0gY3VzdG9tR3JhbW1hcnMubWFwKChjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYoKTtcblxuICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgIH0pLFxuICAgICAgICBibmYgPSBibmZzLmpvaW4oRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBjb21iaW5lUnVsZXMocnVsZXMpXG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IHBhdHRlcm5OYW1lcyA9IFtcbiAgICAgICAgICBUWVBFX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICBTWU1CT0xfUEFUVEVSTl9OQU1FLFxuICAgICAgICAgIFBST1BFUlRZX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICBPUEVSQVRPUl9QQVRURVJOX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgZW50cmllcyA9IHBhdHRlcm5OYW1lcy5tYXAoKHBhdHRlcm5OYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGNvbnN0IHBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChwYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldFBhdHRlcm4ocGF0dGVybk5hbWUpO1xuXG4gICAgaWYgKHBhdHRlcm4pIHsgIC8vL1xuICAgICAgcGF0dGVybnMucHVzaChwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH0sIFtdKTtcblxuICBwYXR0ZXJucy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcGF0dGVybnNTdHJpbmcgPSBwYXR0ZXJucy5qb2luKFZFUlRJQ0FMX0JBUiksXG4gICAgICAgIHBhdHRlcm4gPSBgXig/OiR7cGF0dGVybnNTdHJpbmd9KWA7XG5cbiAgY29uc3QgZW50cnkgPSB7fTtcblxuICBlbnRyeVtwYXR0ZXJuTmFtZV0gPSBwYXR0ZXJuO1xuXG4gIHJldHVybiBlbnRyeTtcbn1cblxuZnVuY3Rpb24gY29tYmluZVJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICB3aGlsZSAob3V0ZXJJbmRleCA8IGxlbmd0aCkge1xuICAgIGNvbnN0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdLFxuICAgICAgICAgIG91dGVyUnVsZU5hbWUgPSBvdXRlclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IGlubmVySW5kZXggPSBvdXRlckluZGV4ICsgMTtcblxuICAgIHdoaWxlIChpbm5lckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbm5lclJ1bGUgPSBydWxlc1tpbm5lckluZGV4XSxcbiAgICAgICAgICAgIGlubmVyUnVsZU5hbWUgPSBpbm5lclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoaW5uZXJSdWxlTmFtZSA9PT0gb3V0ZXJSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBpbm5lclJ1bGVEZWZpbml0aW9ucyA9IGlubmVyUnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgICAgICBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IG91dGVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgICAgIHVuc2hpZnQob3V0ZXJSdWxlRGVmaW5pdGlvbnMsIGlubmVyUnVsZURlZmluaXRpb25zKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IGlubmVySW5kZXgsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgcnVsZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG91dGVySW5kZXgrKztcblxuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInVuc2hpZnQiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInJ1bGVzIiwiZW50cmllcyIsImdldFJ1bGVzIiwiZ2V0RW50cmllcyIsImZyb21Ob3RoaW5nIiwiaW5jbHVkZURlZmF1bHQiLCJjdXN0b21HcmFtbWFycyIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwiZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImJuZnMiLCJtYXAiLCJjdXN0b21HcmFtbWFyIiwiYm5mIiwiZ2V0Qk5GIiwiam9pbiIsIkVNUFRZX1NUUklORyIsImNvbWJpbmVSdWxlcyIsInBhdHRlcm5OYW1lcyIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiU1lNQk9MX1BBVFRFUk5fTkFNRSIsIlBST1BFUlRZX1BBVFRFUk5fTkFNRSIsIk9QRVJBVE9SX1BBVFRFUk5fTkFNRSIsInBhdHRlcm5OYW1lIiwiZW50cnkiLCJlbnRyeUZyb21DdXN0b21HcmFtbWFycyIsInBhdHRlcm5zIiwicmVkdWNlIiwicGF0dGVybiIsImdldFBhdHRlcm4iLCJwdXNoIiwicmV2ZXJzZSIsInBhdHRlcm5zU3RyaW5nIiwiVkVSVElDQUxfQkFSIiwib3V0ZXJJbmRleCIsImxlbmd0aCIsIm91dGVyUnVsZSIsIm91dGVyUnVsZU5hbWUiLCJnZXROYW1lIiwiaW5uZXJJbmRleCIsImlubmVyUnVsZSIsImlubmVyUnVsZU5hbWUiLCJpbm5lclJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwib3V0ZXJSdWxlRGVmaW5pdGlvbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt5QkFYVTs0QkFDQzs4REFFQzt5QkFFVTs0QkFDMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJHLElBQU0sQUFBRUMsVUFBWUMseUJBQWMsQ0FBMUJELFNBQ0YsQUFBRUUsZUFBaUJDLDZCQUFlLENBQWhDRDtBQUVPLElBQUEsQUFBTUgsc0NBQU47YUFBTUEsc0JBQ1BLLEtBQUssRUFBRUMsT0FBTztnQ0FEUE47UUFFakIsSUFBSSxDQUFDSyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFIRU47O1lBTW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0E7b0JBQVlDLGlCQUFBQSxpRUFBaUI7Z0JBQ2xDLElBQUlDLGlCQUFpQixFQUFFO2dCQUV2QixJQUFJRCxnQkFBZ0I7b0JBQ2xCQyxpQkFBaUI7d0JBQUVDLGdCQUFvQjtxQkFBcUIsQ0FBM0MsT0FBd0IscUJBQUdELGtCQUFrQixHQUFHO2dCQUNuRTtnQkFFQSxJQUFNTixRQUFRUSxxQ0FBcUNGLGlCQUM3Q0wsVUFBVVEsMEJBQTBCSCxpQkFDcENJLHdCQUF3QixJQXZCYmYsc0JBdUJ1Q0ssT0FBT0M7Z0JBRS9ELE9BQU9TO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJMLGNBQWM7b0JBQUVELGlC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