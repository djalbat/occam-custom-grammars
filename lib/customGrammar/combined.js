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
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, unshift = _necessary.arrayUtilities.unshift, backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
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
    var patterns = [];
    backwardsForEach(customGrammars, function(customGrammar) {
        var pattern = customGrammar.getPattern(patternName);
        if (pattern !== null && pattern !== _constants.EMPTY_STRING) {
            var subPatterns = pattern.split(_constants.VERTICAL_BAR);
            subPatterns.forEach(function(subPattern) {
                var pattern = patternName === _patternNames.TYPE_PATTERN_NAME ? "".concat(subPattern, "(?!\\w)") : subPattern; ///
                patterns.push(pattern);
            });
        }
    });
    var patternsString = patterns.join(_constants.VERTICAL_BAR), entryName = patternName, entryValue = "^(?:".concat(patternsString, ")"), entry = _define_property({}, entryName, entryValue);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgVkVSVElDQUxfQkFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi4vcGF0dGVybk5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXMsXG4gICAgICB7IHVuc2hpZnQsIGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihydWxlcywgZW50cmllcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhpbmNsdWRlRGVmYXVsdCA9IHRydWUpIHtcbiAgICBsZXQgY3VzdG9tR3JhbW1hcnMgPSBbXTtcblxuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IGJuZnMgPSBjdXN0b21HcmFtbWFycy5tYXAoKGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORigpO1xuXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSksXG4gICAgICAgIGJuZiA9IGJuZnMuam9pbihFTVBUWV9TVFJJTkcpLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbWJpbmVSdWxlcyhydWxlcylcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgcGF0dGVybk5hbWVzID0gW1xuICAgICAgICAgIFRZUEVfUEFUVEVSTl9OQU1FLFxuICAgICAgICAgIFNZTUJPTF9QQVRURVJOX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgZW50cmllcyA9IHBhdHRlcm5OYW1lcy5tYXAoKHBhdHRlcm5OYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGNvbnN0IHBhdHRlcm5zID0gW107XG5cbiAgYmFja3dhcmRzRm9yRWFjaChjdXN0b21HcmFtbWFycywgKGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICBjb25zdCBwYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRQYXR0ZXJuKHBhdHRlcm5OYW1lKTtcblxuICAgIGlmICgocGF0dGVybiAhPT0gbnVsbCkgJiYgKHBhdHRlcm4gIT09IEVNUFRZX1NUUklORykpIHtcbiAgICAgIGNvbnN0IHN1YlBhdHRlcm5zID0gcGF0dGVybi5zcGxpdChWRVJUSUNBTF9CQVIpO1xuXG4gICAgICBzdWJQYXR0ZXJucy5mb3JFYWNoKChzdWJQYXR0ZXJuKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSAocGF0dGVybk5hbWUgPT09IFRZUEVfUEFUVEVSTl9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1YlBhdHRlcm59KD8hXFxcXHcpYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlBhdHRlcm47IC8vL1xuXG4gICAgICAgIHBhdHRlcm5zLnB1c2gocGF0dGVybik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHBhdHRlcm5zU3RyaW5nID0gcGF0dGVybnMuam9pbihWRVJUSUNBTF9CQVIpLFxuICAgICAgICBlbnRyeU5hbWUgPSBwYXR0ZXJuTmFtZSwgIC8vL1xuICAgICAgICBlbnRyeVZhbHVlID0gYF4oPzoke3BhdHRlcm5zU3RyaW5nfSlgLFxuICAgICAgICBlbnRyeSA9IHtcbiAgICAgICAgICBbZW50cnlOYW1lXTogZW50cnlWYWx1ZVxuICAgICAgICB9O1xuXG4gIHJldHVybiBlbnRyeTtcbn1cblxuZnVuY3Rpb24gY29tYmluZVJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICB3aGlsZSAob3V0ZXJJbmRleCA8IGxlbmd0aCkge1xuICAgIGNvbnN0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdLFxuICAgICAgICAgIG91dGVyUnVsZU5hbWUgPSBvdXRlclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IGlubmVySW5kZXggPSBvdXRlckluZGV4ICsgMTtcblxuICAgIHdoaWxlIChpbm5lckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbm5lclJ1bGUgPSBydWxlc1tpbm5lckluZGV4XSxcbiAgICAgICAgICAgIGlubmVyUnVsZU5hbWUgPSBpbm5lclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoaW5uZXJSdWxlTmFtZSA9PT0gb3V0ZXJSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBpbm5lclJ1bGVEZWZpbml0aW9ucyA9IGlubmVyUnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgICAgICBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IG91dGVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgICAgIHVuc2hpZnQob3V0ZXJSdWxlRGVmaW5pdGlvbnMsIGlubmVyUnVsZURlZmluaXRpb25zKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IGlubmVySW5kZXgsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgcnVsZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG91dGVySW5kZXgrKztcblxuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInVuc2hpZnQiLCJhcnJheVV0aWxpdGllcyIsImJhY2t3YXJkc0ZvckVhY2giLCJydWxlcyIsImVudHJpZXMiLCJnZXRSdWxlcyIsImdldEVudHJpZXMiLCJmcm9tTm90aGluZyIsImluY2x1ZGVEZWZhdWx0IiwiY3VzdG9tR3JhbW1hcnMiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORiIsImVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJibmZzIiwibWFwIiwiY3VzdG9tR3JhbW1hciIsImJuZiIsImdldEJORiIsImpvaW4iLCJFTVBUWV9TVFJJTkciLCJjb21iaW5lUnVsZXMiLCJwYXR0ZXJuTmFtZXMiLCJUWVBFX1BBVFRFUk5fTkFNRSIsIlNZTUJPTF9QQVRURVJOX05BTUUiLCJwYXR0ZXJuTmFtZSIsImVudHJ5IiwiZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMiLCJwYXR0ZXJucyIsInBhdHRlcm4iLCJnZXRQYXR0ZXJuIiwic3ViUGF0dGVybnMiLCJzcGxpdCIsIlZFUlRJQ0FMX0JBUiIsImZvckVhY2giLCJzdWJQYXR0ZXJuIiwicHVzaCIsInBhdHRlcm5zU3RyaW5nIiwiZW50cnlOYW1lIiwiZW50cnlWYWx1ZSIsIm91dGVySW5kZXgiLCJsZW5ndGgiLCJvdXRlclJ1bGUiLCJvdXRlclJ1bGVOYW1lIiwiZ2V0TmFtZSIsImlubmVySW5kZXgiLCJpbm5lclJ1bGUiLCJpbm5lclJ1bGVOYW1lIiwiaW5uZXJSdWxlRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsIm91dGVyUnVsZURlZmluaXRpb25zIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7eUJBWFU7NEJBQ0M7OERBRUM7eUJBRVU7NEJBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RCxJQUFNLEFBQUVDLGVBQWlCQyw2QkFBZSxDQUFoQ0QsY0FDQUUsVUFBOEJDLHlCQUFjLENBQTVDRCxTQUFTRSxtQkFBcUJELHlCQUFjLENBQW5DQztBQUVGLElBQUEsQUFBTUwsc0NBQU47YUFBTUEsc0JBQ1BNLEtBQUssRUFBRUMsT0FBTztnQ0FEUFA7UUFFakIsSUFBSSxDQUFDTSxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFIRVA7O1lBTW5CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0E7b0JBQVlD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