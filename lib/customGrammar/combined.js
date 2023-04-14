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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwYXJzZXJVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgZGVmYXVsdEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4uL2N1c3RvbUdyYW1tYXIvZGVmYXVsdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFZFUlRJQ0FMX0JBUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBTWU1CT0xfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi4vcGF0dGVybk5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkIHtcbiAgY29uc3RydWN0b3IocnVsZXMsIGVudHJpZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuICBcbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoaW5jbHVkZURlZmF1bHQgPSB0cnVlKSB7XG4gICAgbGV0IGN1c3RvbUdyYW1tYXJzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZURlZmF1bHQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWQocnVsZXMsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZChydWxlcywgZW50cmllcyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgYm5mcyA9IGN1c3RvbUdyYW1tYXJzLm1hcCgoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKCk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBwYXR0ZXJuTmFtZXMgPSBbXG4gICAgICAgICAgVFlQRV9QQVRURVJOX05BTUUsXG4gICAgICAgICAgU1lNQk9MX1BBVFRFUk5fTkFNRSxcbiAgICAgICAgICBPUEVSQVRPUl9QQVRURVJOX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgZW50cmllcyA9IHBhdHRlcm5OYW1lcy5tYXAoKHBhdHRlcm5OYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGNvbnN0IHBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChwYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldFBhdHRlcm4ocGF0dGVybk5hbWUpO1xuXG4gICAgaWYgKHBhdHRlcm4pIHsgIC8vL1xuICAgICAgcGF0dGVybnMucHVzaChwYXR0ZXJuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH0sIFtdKTtcblxuICBwYXR0ZXJucy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgcGF0dGVybnNTdHJpbmcgPSBwYXR0ZXJucy5qb2luKFZFUlRJQ0FMX0JBUiksIC8vL1xuICAgICAgICBwYXR0ZXJuID0gKChwYXR0ZXJuTmFtZSA9PT0gVFlQRV9QQVRURVJOX05BTUUpIHx8IChwYXR0ZXJuTmFtZSA9PT0gU1lNQk9MX1BBVFRFUk5fTkFNRSkpP1xuICAgICAgICAgICAgICAgICAgIGBeKD86JHtwYXR0ZXJuc1N0cmluZ30pXFxcXGJgIDpcbiAgICAgICAgICAgICAgICAgICAgIGBeKD86JHtwYXR0ZXJuc1N0cmluZ30pYDtcblxuICBjb25zdCBlbnRyeSA9IHt9O1xuXG4gIGVudHJ5W3BhdHRlcm5OYW1lXSA9IHBhdHRlcm47XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUnVsZXMocnVsZXMpIHtcbiAgbGV0IG91dGVySW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChvdXRlckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgb3V0ZXJSdWxlID0gcnVsZXNbb3V0ZXJJbmRleF0sXG4gICAgICAgICAgb3V0ZXJSdWxlTmFtZSA9IG91dGVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBvdXRlclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGxldCBpbm5lckluZGV4ID0gb3V0ZXJJbmRleCArIDE7XG5cbiAgICB3aGlsZSAoaW5uZXJJbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29uc3QgaW5uZXJSdWxlID0gcnVsZXNbaW5uZXJJbmRleF0sXG4gICAgICAgICAgICBpbm5lclJ1bGVOYW1lID0gaW5uZXJSdWxlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGlubmVyUnVsZU5hbWUgPT09IG91dGVyUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5uZXJSdWxlRGVmaW5pdGlvbnMgPSBpbm5lclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgICAgICBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IFsgIC8vL1xuICAgICAgICAgIC4uLmlubmVyUnVsZURlZmluaXRpb25zLFxuICAgICAgICAgIC4uLm91dGVyUnVsZURlZmluaXRpb25zXG4gICAgICAgIF07XG5cbiAgICAgICAgb3V0ZXJSdWxlLnJlcGxhY2VBbGxEZWZpbml0aW9ucyguLi5vdXRlclJ1bGVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbm5lckluZGV4LCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHJ1bGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRlckluZGV4Kys7XG5cbiAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5lZCIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInJ1bGVzIiwiZW50cmllcyIsImdldFJ1bGVzIiwiZ2V0RW50cmllcyIsImZyb21Ob3RoaW5nIiwiaW5jbHVkZURlZmF1bHQiLCJjdXN0b21HcmFtbWFycyIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwiZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImJuZnMiLCJtYXAiLCJjdXN0b21HcmFtbWFyIiwiYm5mIiwiZ2V0Qk5GIiwiam9pbiIsIkVNUFRZX1NUUklORyIsImNvbWJpbmVSdWxlcyIsInBhdHRlcm5OYW1lcyIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiU1lNQk9MX1BBVFRFUk5fTkFNRSIsIk9QRVJBVE9SX1BBVFRFUk5fTkFNRSIsInBhdHRlcm5OYW1lIiwiZW50cnkiLCJlbnRyeUZyb21DdXN0b21HcmFtbWFycyIsInBhdHRlcm5zIiwicmVkdWNlIiwicGF0dGVybiIsImdldFBhdHRlcm4iLCJwdXNoIiwicmV2ZXJzZSIsInBhdHRlcm5zU3RyaW5nIiwiVkVSVElDQUxfQkFSIiwib3V0ZXJJbmRleCIsImxlbmd0aCIsIm91dGVyUnVsZSIsIm91dGVyUnVsZU5hbWUiLCJnZXROYW1lIiwib3V0ZXJSdWxlRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImlubmVySW5kZXgiLCJpbm5lclJ1bGUiLCJpbm5lclJ1bGVOYW1lIiwiaW5uZXJSdWxlRGVmaW5pdGlvbnMiLCJyZXBsYWNlQWxsRGVmaW5pdGlvbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozs0QkFUVzs4REFFQzt5QkFFVTs0QkFDbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlFLElBQU0sQUFBRUMsZUFBaUJDLDZCQUFlLENBQWhDRDtBQUVPLElBQUEsQUFBTUQseUJBeUNsQixBQXpDWTthQUFNQSxTQUNQRyxLQUFLLEVBQUVDLE9BQU87Z0NBRFBKO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTs7a0JBSEVKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFtQztvQkFBdkJDLGlCQUFBQSxpRUFBaUIsSUFBSTtnQkFDdEMsSUFBSUMsaUJBQWlCLEVBQUU7Z0JBRXZCLElBQUlELGdCQUFnQjtvQkFDbEJDLGlCQUFpQjt3QkFBRUMsZ0JBQW9CO3FCQUFxQixDQUEzQyxPQUF3QixxQkFBR0Qsa0JBQWtCLEdBQUc7Z0JBQ25FLENBQUM7Z0JBRUQsSUFBTU4sUUFBUVEscUNBQXFDRixpQkFDN0NMLFVBQVVRLDBCQUEwQkgsaUJBQ3BDSSx3QkFBd0IsSUF2QmJiLFNBdUIwQkcsT0FBT0M7Z0JBRWxELE9BQU9TO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJMLGNBQWMsRUFBeUI7b0JBQXZCRCxpQkFBQUEsaUVBQWlCLElBQUk7Z0JBQzdELElBQUlBLGdCQUFnQjtvQkFDbEJDLGlCQUFpQjt3QkFBRUMsZ0JBQW9CO3FCQUFxQixDQUEzQyxPQUF3QixxQkFBR0Qsa0JBQWtCLEdBQUc7Z0JBQ25FLENBQUM7Z0JBRUQsSUFBTU4sUUFBUVEscUNBQXFDRixpQkFDN0NMLFVBQVVRLDBCQUEwQkgsaUJBQ3BDSSx3QkFBd0IsSUFuQ2JiLFNBbUMwQkcsT0FBT0M7Z0JBRWxELE9BQU9TO1lBQ1Q7OztXQXRDbUJiOztBQXlDckIsU0FBU1cscUNBQXFDRixjQUFjLEVBQUU7SUFDNUQsSUFBTU0sT0FBT04sZUFBZU8sR0FBRyxDQUFDLFNBQUNDLGVBQWtCO1FBQzNDLElBQU1DLE1BQU1ELGNBQWNFLE1BQU07UUFFaEMsT0FBT0Q7SUFDVCxJQUNBQSxNQUFNSCxLQUFLSyxJQUFJLENBQUNDLHVCQUFZLEdBQzVCbEIsUUFBUUYsYUFBYWlCO0lBRTNCSSxhQUFhbkI7SUFFYixPQUFPQTtBQUNUO0FBRUEsU0FBU1MsMEJBQTBCSCxjQUFjLEVBQUU7SUFDakQsSUFBTWMsZUFBZTtRQUNiQywrQkFBaUI7UUFDakJDLGlDQUFtQjtRQUNuQkMsbUNBQXFCO0tBQ3RCLEVBQ0R0QixVQUFVbUIsYUFBYVAsR0FBRyxDQUFDLFNBQUNXLGFBQWdCO1FBQzFDLElBQU1DLFFBQVFDLHdCQUF3QnBCLGdCQUFnQmtCO1FBRXRELE9BQU9DO0lBQ1Q7SUFFTixPQUFPeEI7QUFDVDtBQUVBLFNBQVN5Qix3QkFBd0JwQixjQUFjLEVBQUVrQixXQUFXLEVBQUU7SUFDNUQsSUFBTUcsV0FBV3JCLGVBQWVzQixNQUFNLENBQUMsU0FBQ0QsVUFBVWIsZUFBa0I7UUFDbEUsSUFBTWUsVUFBVWYsY0FBY2dCLFVBQVUsQ0FBQ047UUFFekMsSUFBSUssU0FBUztZQUNYRixTQUFTSSxJQUFJLENBQUNGO1FBQ2hCLENBQUM7UUFFRCxPQUFPRjtJQUNULEdBQUcsRUFBRTtJQUVMQSxTQUFTSyxPQUFPO0lBRWhCLElBQU1DLGlCQUFpQk4sU0FBU1YsSUFBSSxDQUFDaUIsdUJBQVksR0FDM0NMLFVBQVUsQUFBQyxBQUFDTCxnQkFBZ0JILCtCQUFpQixJQUFNRyxnQkFBZ0JGLGlDQUFtQixHQUMzRSxBQUFDLE9BQXFCLE9BQWZXLGdCQUFlLFVBQ3BCLEFBQUMsT0FBcUIsT0FBZkEsZ0JBQWUsSUFBRTtJQUUzQyxJQUFNUixRQUFRLENBQUM7SUFFZkEsS0FBSyxDQUFDRCxZQUFZLEdBQUdLO0lBRXJCLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTTixhQUFhbkIsS0FBSyxFQUFFO0lBQzNCLElBQUltQyxhQUFhLEdBQ2JDLFNBQVNwQyxNQUFNb0MsTUFBTTtJQUV6QixNQUFPRCxhQUFhQyxPQUFRO1FBQzFCLElBQU1DLFlBQVlyQyxLQUFLLENBQUNtQyxXQUFXLEVBQzdCRyxnQkFBZ0JELFVBQVVFLE9BQU87UUFFdkMsSUFBSUMsdUJBQXVCSCxVQUFVSSxjQUFjO1FBRW5ELElBQUlDLGFBQWFQLGFBQWE7UUFFOUIsTUFBT08sYUFBYU4sT0FBUTtZQUMxQixJQUFNTyxZQUFZM0MsS0FBSyxDQUFDMEMsV0FBVyxFQUM3QkUsZ0JBQWdCRCxVQUFVSixPQUFPO1lBRXZDLElBQUlLLGtCQUFrQk4sZUFBZTtvQkFRbkNEO2dCQVBBLElBQU1RLHVCQUF1QkYsVUFBVUYsY0FBYztnQkFFckRELHVCQUF1QixBQUNyQixxQkFBR0ssNkJBQ0gscUJBQUdMO2dCQUdMSCxDQUFBQSxhQUFBQSxXQUFVUyxxQkFBcUIsQ0FBL0JULE1BQUFBLFlBQWdDLHFCQUFHRztnQkFFbkMsSUFBTU8sUUFBUUwsWUFDUk0sY0FBYztnQkFFcEJoRCxNQUFNaUQsTUFBTSxDQUFDRixPQUFPQztnQkFFcEJaLFNBQVNwQyxNQUFNb0MsTUFBTTtZQUN2QixPQUFPO2dCQUNMTTtZQUNGLENBQUM7UUFDSDtRQUVBUDtRQUVBQyxTQUFTcEMsTUFBTW9DLE1BQU07SUFDdkI7QUFDRiJ9