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
        var pattern;
        pattern = customGrammar.getPattern(patternName);
        if (pattern !== null && pattern !== _constants.EMPTY_STRING) {
            if (patternName === _patternNames.TYPE_PATTERN_NAME) {
                pattern = "".concat(pattern, "(?!\\w)");
            }
            patterns.push(pattern);
        }
        return patterns;
    }, []);
    patterns.reverse();
    var patternsString = patterns.join(_constants.VERTICAL_BAR), entry = _define_property({}, patternName, "^(?:".concat(patternsString, ")"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgVkVSVElDQUxfQkFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi4vcGF0dGVybk5hbWVzXCI7XG5cbmNvbnN0IHsgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzRnJvbUJORiB9ID0gcGFyc2VyVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihydWxlcywgZW50cmllcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhpbmNsdWRlRGVmYXVsdCA9IHRydWUpIHtcbiAgICBsZXQgY3VzdG9tR3JhbW1hcnMgPSBbXTtcblxuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IGJuZnMgPSBjdXN0b21HcmFtbWFycy5tYXAoKGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORigpO1xuXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSksXG4gICAgICAgIGJuZiA9IGJuZnMuam9pbihFTVBUWV9TVFJJTkcpLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbWJpbmVSdWxlcyhydWxlcylcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgcGF0dGVybk5hbWVzID0gW1xuICAgICAgICAgIFRZUEVfUEFUVEVSTl9OQU1FLFxuICAgICAgICAgIFNZTUJPTF9QQVRURVJOX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgZW50cmllcyA9IHBhdHRlcm5OYW1lcy5tYXAoKHBhdHRlcm5OYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGNvbnN0IHBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChwYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGxldCBwYXR0ZXJuO1xuXG4gICAgcGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0UGF0dGVybihwYXR0ZXJuTmFtZSk7XG5cbiAgICBpZiAoKHBhdHRlcm4gIT09IG51bGwpICYmIChwYXR0ZXJuICE9PSBFTVBUWV9TVFJJTkcpKSB7XG4gICAgICBpZiAocGF0dGVybk5hbWUgPT09IFRZUEVfUEFUVEVSTl9OQU1FKSB7XG4gICAgICAgIHBhdHRlcm4gPSBgJHtwYXR0ZXJufSg/IVxcXFx3KWA7XG4gICAgICB9XG5cbiAgICAgIHBhdHRlcm5zLnB1c2gocGF0dGVybik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdHRlcm5zO1xuICB9LCBbXSk7XG5cbiAgcGF0dGVybnMucmV2ZXJzZSgpO1xuXG4gIGNvbnN0IHBhdHRlcm5zU3RyaW5nID0gcGF0dGVybnMuam9pbihWRVJUSUNBTF9CQVIpLFxuICAgICAgICBlbnRyeSA9IHtcbiAgICAgICAgICBbcGF0dGVybk5hbWVdOiBgXig/OiR7cGF0dGVybnNTdHJpbmd9KWBcbiAgICAgICAgfTtcblxuICByZXR1cm4gZW50cnk7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVSdWxlcyhydWxlcykge1xuICBsZXQgb3V0ZXJJbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKG91dGVySW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb25zdCBvdXRlclJ1bGUgPSBydWxlc1tvdXRlckluZGV4XSxcbiAgICAgICAgICBvdXRlclJ1bGVOYW1lID0gb3V0ZXJSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBpbm5lckluZGV4ID0gb3V0ZXJJbmRleCArIDE7XG5cbiAgICB3aGlsZSAoaW5uZXJJbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29uc3QgaW5uZXJSdWxlID0gcnVsZXNbaW5uZXJJbmRleF0sXG4gICAgICAgICAgICBpbm5lclJ1bGVOYW1lID0gaW5uZXJSdWxlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGlubmVyUnVsZU5hbWUgPT09IG91dGVyUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5uZXJSdWxlRGVmaW5pdGlvbnMgPSBpbm5lclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBvdXRlclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgICAgICB1bnNoaWZ0KG91dGVyUnVsZURlZmluaXRpb25zLCBpbm5lclJ1bGVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbm5lckluZGV4LCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHJ1bGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRlckluZGV4Kys7XG5cbiAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJ1bnNoaWZ0IiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJydWxlcyIsImVudHJpZXMiLCJnZXRSdWxlcyIsImdldEVudHJpZXMiLCJmcm9tTm90aGluZyIsImluY2x1ZGVEZWZhdWx0IiwiY3VzdG9tR3JhbW1hcnMiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORiIsImVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJibmZzIiwibWFwIiwiY3VzdG9tR3JhbW1hciIsImJuZiIsImdldEJORiIsImpvaW4iLCJFTVBUWV9TVFJJTkciLCJjb21iaW5lUnVsZXMiLCJwYXR0ZXJuTmFtZXMiLCJUWVBFX1BBVFRFUk5fTkFNRSIsIlNZTUJPTF9QQVRURVJOX05BTUUiLCJwYXR0ZXJuTmFtZSIsImVudHJ5IiwiZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMiLCJwYXR0ZXJucyIsInJlZHVjZSIsInBhdHRlcm4iLCJnZXRQYXR0ZXJuIiwicHVzaCIsInJldmVyc2UiLCJwYXR0ZXJuc1N0cmluZyIsIlZFUlRJQ0FMX0JBUiIsIm91dGVySW5kZXgiLCJsZW5ndGgiLCJvdXRlclJ1bGUiLCJvdXRlclJ1bGVOYW1lIiwiZ2V0TmFtZSIsImlubmVySW5kZXgiLCJpbm5lclJ1bGUiLCJpbm5lclJ1bGVOYW1lIiwiaW5uZXJSdWxlRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsIm91dGVyUnVsZURlZmluaXRpb25zIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7eUJBWFU7NEJBQ0M7OERBRUM7eUJBRVU7NEJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNLEFBQUVDLFVBQVlDLHlCQUFjLENBQTFCRCxTQUNGLEFBQUVFLGVBQWlCQyw2QkFBZSxDQUFoQ0Q7QUFFTyxJQUFBLEFBQU1ILHNDQUFOO2FBQU1BLHNCQUNQSyxLQUFLLEVBQUVDLE9BQU87Z0NBRFBOO1FBRWpCLElBQUksQ0FBQ0ssS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7a0JBSEVOOztZQU1uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BO29CQUFZQyxpQkFBQUEsaUVBQWlCO2dCQUNsQyxJQUFJQyxpQkFBaUIsRUFBRTtnQkFFdkIsSUFBSUQsZ0JBQWdCO29CQUNsQkMsaUJBQWlCO3dCQUFFQyxnQkFBb0I7cUJBQXFCLENBQTNDLE9BQXdCLHFCQUFHRCxrQkFBa0IsR0FBRztnQkFDbkU7Z0JBRUEsSUFBTU4sUUFBUVEscUNBQXFDRixpQkFDN0NMLFVBQVVRLDBCQUEwQkgsaUJBQ3BDSSx3QkFBd0IsSUF2QmJmLHNCQXVCdUNLLE9BQU9DO2dCQUUvRCxPQUFPUztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CTCxjQUFjO29CQUFFRCxpQkFBQUEsaUVBQWlCO2dCQUN6RCxJ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