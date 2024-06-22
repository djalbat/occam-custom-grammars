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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgVkVSVElDQUxfQkFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUsIE9QRVJBVE9SX1BBVFRFUk5fTkFNRSB9IGZyb20gXCIuLi9wYXR0ZXJuTmFtZXNcIjtcblxuY29uc3QgeyB1bnNoaWZ0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkIHtcbiAgY29uc3RydWN0b3IocnVsZXMsIGVudHJpZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuICBcbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoaW5jbHVkZURlZmF1bHQgPSB0cnVlKSB7XG4gICAgbGV0IGN1c3RvbUdyYW1tYXJzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZURlZmF1bHQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWQocnVsZXMsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZChydWxlcywgZW50cmllcyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgYm5mcyA9IGN1c3RvbUdyYW1tYXJzLm1hcCgoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKCk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBwYXR0ZXJuTmFtZXMgPSBbXG4gICAgICAgICAgVFlQRV9QQVRURVJOX05BTUUsXG4gICAgICAgICAgU1lNQk9MX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICBPUEVSQVRPUl9QQVRURVJOX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgZW50cmllcyA9IHBhdHRlcm5OYW1lcy5tYXAoKHBhdHRlcm5OYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGNvbnN0IHBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChwYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldFBhdHRlcm4ocGF0dGVybk5hbWUpO1xuXG4gICAgaWYgKHBhdHRlcm4pIHsgIC8vL1xuICAgICAgcGF0dGVybnMucHVzaChwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH0sIFtdKTtcblxuICBwYXR0ZXJucy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcGF0dGVybnNTdHJpbmcgPSBwYXR0ZXJucy5qb2luKFZFUlRJQ0FMX0JBUiksXG4gICAgICAgIHBhdHRlcm4gPSBgXig/OiR7cGF0dGVybnNTdHJpbmd9KWA7XG5cbiAgY29uc3QgZW50cnkgPSB7fTtcblxuICBlbnRyeVtwYXR0ZXJuTmFtZV0gPSBwYXR0ZXJuO1xuXG4gIHJldHVybiBlbnRyeTtcbn1cblxuZnVuY3Rpb24gY29tYmluZVJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICB3aGlsZSAob3V0ZXJJbmRleCA8IGxlbmd0aCkge1xuICAgIGNvbnN0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdLFxuICAgICAgICAgIG91dGVyUnVsZU5hbWUgPSBvdXRlclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IGlubmVySW5kZXggPSBvdXRlckluZGV4ICsgMTtcblxuICAgIHdoaWxlIChpbm5lckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbm5lclJ1bGUgPSBydWxlc1tpbm5lckluZGV4XSxcbiAgICAgICAgICAgIGlubmVyUnVsZU5hbWUgPSBpbm5lclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoaW5uZXJSdWxlTmFtZSA9PT0gb3V0ZXJSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBpbm5lclJ1bGVEZWZpbml0aW9ucyA9IGlubmVyUnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgICAgICBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IG91dGVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgICAgIHVuc2hpZnQob3V0ZXJSdWxlRGVmaW5pdGlvbnMsIGlubmVyUnVsZURlZmluaXRpb25zKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IGlubmVySW5kZXgsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgcnVsZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG91dGVySW5kZXgrKztcblxuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmVkIiwidW5zaGlmdCIsImFycmF5VXRpbGl0aWVzIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXMiLCJlbnRyaWVzIiwiZ2V0UnVsZXMiLCJnZXRFbnRyaWVzIiwiZnJvbU5vdGhpbmciLCJpbmNsdWRlRGVmYXVsdCIsImN1c3RvbUdyYW1tYXJzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiYm5mcyIsIm1hcCIsImN1c3RvbUdyYW1tYXIiLCJibmYiLCJnZXRCTkYiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwiY29tYmluZVJ1bGVzIiwicGF0dGVybk5hbWVzIiwiVFlQRV9QQVRURVJOX05BTUUiLCJTWU1CT0xfUEFUVEVSTl9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9OQU1FIiwicGF0dGVybk5hbWUiLCJlbnRyeSIsImVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzIiwicGF0dGVybnMiLCJyZWR1Y2UiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInB1c2giLCJyZXZlcnNlIiwicGF0dGVybnNTdHJpbmciLCJWRVJUSUNBTF9CQVIiLCJvdXRlckluZGV4IiwibGVuZ3RoIiwib3V0ZXJSdWxlIiwib3V0ZXJSdWxlTmFtZSIsImdldE5hbWUiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJvdXRlclJ1bGVEZWZpbml0aW9ucyIsInN0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