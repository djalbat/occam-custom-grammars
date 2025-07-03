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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
        _patternNames.SYMBOL_PATTERN_NAME
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
    var patternsString = patterns.join(_constants.VERTICAL_BAR), pattern = patternName === _patternNames.TYPE_PATTERN_NAME ? "^(?:".concat(patternsString, ")\\b") : "^(?:".concat(patternsString, ")"), entry = _define_property({}, patternName, pattern);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgVkVSVElDQUxfQkFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi4vcGF0dGVybk5hbWVzXCI7XG5cbmNvbnN0IHsgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzRnJvbUJORiB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihydWxlcywgZW50cmllcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhpbmNsdWRlRGVmYXVsdCA9IHRydWUpIHtcbiAgICBsZXQgY3VzdG9tR3JhbW1hcnMgPSBbXTtcblxuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IGJuZnMgPSBjdXN0b21HcmFtbWFycy5tYXAoKGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORigpO1xuXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSksXG4gICAgICAgIGJuZiA9IGJuZnMuam9pbihFTVBUWV9TVFJJTkcpLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbWJpbmVSdWxlcyhydWxlcylcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgcGF0dGVybk5hbWVzID0gW1xuICAgICAgICAgIFRZUEVfUEFUVEVSTl9OQU1FLFxuICAgICAgICAgIFNZTUJPTF9QQVRURVJOX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgZW50cmllcyA9IHBhdHRlcm5OYW1lcy5tYXAoKHBhdHRlcm5OYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGNvbnN0IHBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChwYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldFBhdHRlcm4ocGF0dGVybk5hbWUpO1xuXG4gICAgaWYgKHBhdHRlcm4pIHsgIC8vL1xuICAgICAgcGF0dGVybnMucHVzaChwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH0sIFtdKTtcblxuICBwYXR0ZXJucy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcGF0dGVybnNTdHJpbmcgPSBwYXR0ZXJucy5qb2luKFZFUlRJQ0FMX0JBUiksXG4gICAgICAgIHBhdHRlcm4gPSAocGF0dGVybk5hbWUgPT09IFRZUEVfUEFUVEVSTl9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgYF4oPzoke3BhdHRlcm5zU3RyaW5nfSlcXFxcYmAgOlxuICAgICAgICAgICAgICAgICAgICAgYF4oPzoke3BhdHRlcm5zU3RyaW5nfSlgLFxuICAgICAgICBlbnRyeSA9IHtcbiAgICAgICAgICBbcGF0dGVybk5hbWVdOiBwYXR0ZXJuXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUnVsZXMocnVsZXMpIHtcbiAgbGV0IG91dGVySW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChvdXRlckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgb3V0ZXJSdWxlID0gcnVsZXNbb3V0ZXJJbmRleF0sXG4gICAgICAgICAgb3V0ZXJSdWxlTmFtZSA9IG91dGVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgaW5uZXJJbmRleCA9IG91dGVySW5kZXggKyAxO1xuXG4gICAgd2hpbGUgKGlubmVySW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlubmVyUnVsZSA9IHJ1bGVzW2lubmVySW5kZXhdLFxuICAgICAgICAgICAgaW5uZXJSdWxlTmFtZSA9IGlubmVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChpbm5lclJ1bGVOYW1lID09PSBvdXRlclJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGlubmVyUnVsZURlZmluaXRpb25zID0gaW5uZXJSdWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgICAgIG91dGVyUnVsZURlZmluaXRpb25zID0gb3V0ZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICAgICAgdW5zaGlmdChvdXRlclJ1bGVEZWZpbml0aW9ucywgaW5uZXJSdWxlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5uZXJJbmRleCwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBydWxlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3V0ZXJJbmRleCsrO1xuXG4gICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwidW5zaGlmdCIsImFycmF5VXRpbGl0aWVzIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXMiLCJlbnRyaWVzIiwiZ2V0UnVsZXMiLCJnZXRFbnRyaWVzIiwiZnJvbU5vdGhpbmciLCJpbmNsdWRlRGVmYXVsdCIsImN1c3RvbUdyYW1tYXJzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiYm5mcyIsIm1hcCIsImN1c3RvbUdyYW1tYXIiLCJibmYiLCJnZXRCTkYiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwiY29tYmluZVJ1bGVzIiwicGF0dGVybk5hbWVzIiwiVFlQRV9QQVRURVJOX05BTUUiLCJTWU1CT0xfUEFUVEVSTl9OQU1FIiwicGF0dGVybk5hbWUiLCJlbnRyeSIsImVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzIiwicGF0dGVybnMiLCJyZWR1Y2UiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInB1c2giLCJyZXZlcnNlIiwicGF0dGVybnNTdHJpbmciLCJWRVJUSUNBTF9CQVIiLCJvdXRlckluZGV4IiwibGVuZ3RoIiwib3V0ZXJSdWxlIiwib3V0ZXJSdWxlTmFtZSIsImdldE5hbWUiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJvdXRlclJ1bGVEZWZpbml0aW9ucyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7O3lCQVhVOzRCQUNDOzhEQUVDO3lCQUVVOzRCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkQsSUFBTSxBQUFFQyxVQUFZQyx5QkFBYyxDQUExQkQsU0FDRixBQUFFRSxlQUFpQkMsNkJBQWUsQ0FBaENEO0FBRU8sSUFBQSxBQUFNSCxzQ0FBTjthQUFNQSxzQkFDUEssS0FBSyxFQUFFQyxPQUFPO2dDQURQTjtRQUVqQixJQUFJLENBQUNLLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7O2tCQUhFTjs7WUFNbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQTtvQkFBWUMsaUJBQUFBLGlFQUFpQjtnQkFDbEMsSUFBSUMsaUJBQWlCLEVBQUU7Z0JBRXZCLElBQUlELGdCQUFnQjtvQkFDbEJDLGlCQUFpQjt3QkFBRUMsZ0JBQW9CO3FCQUFxQixDQUEzQyxPQUF3QixxQkFBR0Qsa0JBQWtCLEdBQUc7Z0JBQ25FO2dCQUVBLElBQU1OLFFBQVFRLHFDQUFxQ0YsaUJBQzdDTCxVQUFVUSwwQkFBMEJILGlCQUNwQ0ksd0JBQXdCLElBdkJiZixzQkF1QnVDSyxPQUFPQztnQkFFL0QsT0FBT1M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkwsY0FBYztvQkFBRUQsaUJBQUFBLGlFQUFpQjtnQkFDekQsSUFBSUEsZ0JBQWdCO29CQUNsQkMsaUJBQWlCO3dCQUFFQyxnQkFBb0I7cUJBQXFCLENBQTNDLE9BQXdCLHFCQUFHRCxrQkFBa0IsR0FBRztnQkFDbkU7Z0JBRUEsSUFBTU4sUUFBUVEscUNBQXFDRixpQkFDN0NMLFVBQVVRLDBCQUEwQkgsaUJBQ3BDSSx3QkFBd0IsSUFuQ2JmLHNCQW1DdUNLLE9BQU9DO2dCQUUvRCxPQUFPUztZQUNUOzs7V0F0Q21CZjs7QUF5Q3JCLFNBQVNhLHFDQUFxQ0YsY0FBYztJQUMxRCxJQUFNTSxPQUFPTixlQUFlTyxHQUFHLENBQUMsU0FBQ0M7UUFDekIsSUFBTUMsTUFBTUQsY0FBY0UsTUFBTTtRQUVoQyxPQUFPRDtJQUNULElBQ0FBLE1BQU1ILEtBQUtLLElBQUksQ0FBQ0MsdUJBQVksR0FDNUJsQixRQUFRRixhQUFhaUI7SUFFM0JJLGFBQWFuQjtJQUViLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTUywwQkFBMEJILGNBQWM7SUFDL0MsSUFBTWMsZUFBZTtRQUNiQywrQkFBaUI7UUFDakJDLGlDQUFtQjtLQUNwQixFQUNEckIsVUFBVW1CLGFBQWFQLEdBQUcsQ0FBQyxTQUFDVTtRQUMxQixJQUFNQyxRQUFRQyx3QkFBd0JuQixnQkFBZ0JpQjtRQUV0RCxPQUFPQztJQUNUO0lBRU4sT0FBT3ZCO0FBQ1Q7QUFFQSxTQUFTd0Isd0JBQXdCbkIsY0FBYyxFQUFFaUIsV0FBVztJQUMxRCxJQUFNRyxXQUFXcEIsZUFBZXFCLE1BQU0sQ0FBQyxTQUFDRCxVQUFVWjtRQUNoRCxJQUFNYyxVQUFVZCxjQUFjZSxVQUFVLENBQUNOO1FBRXpDLElBQUlLLFNBQVM7WUFDWEYsU0FBU0ksSUFBSSxDQUFDRjtRQUNoQjtRQUVBLE9BQU9GO0lBQ1QsR0FBRyxFQUFFO0lBRUxBLFNBQVNLLE9BQU87SUFFaEIsSUFBTUMsaUJBQWlCTixTQUFTVCxJQUFJLENBQUNnQix1QkFBWSxHQUMzQ0wsVUFBVSxBQUFDTCxnQkFBZ0JGLCtCQUFpQixHQUNqQyxBQUFDLE9BQXFCLE9BQWZXLGdCQUFlLFVBQ3BCLEFBQUMsT0FBcUIsT0FBZkEsZ0JBQWUsTUFDbkNSLFFBQ0UscUJBQUNELGFBQWNLO0lBR3ZCLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTTCxhQUFhbkIsS0FBSztJQUN6QixJQUFJa0MsYUFBYSxHQUNiQyxTQUFTbkMsTUFBTW1DLE1BQU07SUFFekIsTUFBT0QsYUFBYUMsT0FBUTtRQUMxQixJQUFNQyxZQUFZcEMsS0FBSyxDQUFDa0MsV0FBVyxFQUM3QkcsZ0JBQWdCRCxVQUFVRSxPQUFPO1FBRXZDLElBQUlDLGFBQWFMLGFBQWE7UUFFOUIsTUFBT0ssYUFBYUosT0FBUTtZQUMxQixJQUFNSyxZQUFZeEMsS0FBSyxDQUFDdUMsV0FBVyxFQUM3QkUsZ0JBQWdCRCxVQUFVRixPQUFPO1lBRXZDLElBQUlHLGtCQUFrQkosZUFBZTtnQkFDbkMsSUFBTUssdUJBQXVCRixVQUFVRyxjQUFjLElBQy9DQyx1QkFBdUJSLFVBQVVPLGNBQWM7Z0JBRXJEL0MsUUFBUWdELHNCQUFzQkY7Z0JBRTlCLElBQU1HLFFBQVFOLFlBQ1JPLGNBQWM7Z0JBRXBCOUMsTUFBTStDLE1BQU0sQ0FBQ0YsT0FBT0M7Z0JBRXBCWCxTQUFTbkMsTUFBTW1DLE1BQU07WUFDdkIsT0FBTztnQkFDTEk7WUFDRjtRQUNGO1FBRUFMO1FBRUFDLFNBQVNuQyxNQUFNbUMsTUFBTTtJQUN2QjtBQUNGIn0=