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
    function CombinedCustomGrammar(rules, patternMap) {
        _classCallCheck(this, CombinedCustomGrammar);
        this.rules = rules;
        this.patternMap = patternMap;
    }
    _createClass(CombinedCustomGrammar, [
        {
            key: "getRules",
            value: function getRules() {
                return this.rules;
            }
        },
        {
            key: "getPatternMap",
            value: function getPatternMap() {
                return this.patternMap;
            }
        }
    ], [
        {
            key: "fromCustomGrammars",
            value: function fromCustomGrammars(customGrammars) {
                var rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars), patternMap = patternMapFromCustomGrammars(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(rules, patternMap);
                return combinedCustomGrammar;
            }
        }
    ]);
    return CombinedCustomGrammar;
}();
function patternFromCustomGrammars(customGrammars, patternName) {
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
    var patternsString = patterns.join(_constants.VERTICAL_BAR), pattern = "^(?:".concat(patternsString, ")");
    return pattern;
}
function patternMapFromCustomGrammars(customGrammars) {
    var patternNames = [
        _patternNames.TYPE_PATTERN_NAME,
        _patternNames.OPERATOR_PATTERN_NAME
    ], patternMap = patternNames.reduce(function(patternMap, patternName) {
        var pattern = patternFromCustomGrammars(customGrammars, patternName);
        patternMap[patternName] = pattern;
        return patternMap;
    }, {});
    return patternMap;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgZGVmYXVsdEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBWRVJUSUNBTF9CQVIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi9wYXR0ZXJuTmFtZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluZWRDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IocnVsZXMsIHBhdHRlcm5NYXApIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5wYXR0ZXJuTWFwID0gcGF0dGVybk1hcDtcbiAgfVxuICBcbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXRQYXR0ZXJuTWFwKCkge1xuICAgIHJldHVybiB0aGlzLnBhdHRlcm5NYXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIHBhdHRlcm5NYXAgPSBwYXR0ZXJuTWFwRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBuZXcgQ29tYmluZWRDdXN0b21HcmFtbWFyKHJ1bGVzLCBwYXR0ZXJuTWFwKTtcbiAgICBcbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhdHRlcm5Gcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHBhdHRlcm5OYW1lKSB7XG4gIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG5cbiAgY29uc3QgcGF0dGVybnMgPSBjdXN0b21HcmFtbWFycy5yZWR1Y2UoKHBhdHRlcm5zLCBjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgY29uc3QgcGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0UGF0dGVybihwYXR0ZXJuTmFtZSk7XG5cbiAgICBpZiAocGF0dGVybikgeyAgLy8vXG4gICAgICBwYXR0ZXJucy5wdXNoKHBhdHRlcm4pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfSwgW10pO1xuXG4gIHBhdHRlcm5zLnJldmVyc2UoKTtcblxuICBjb25zdCBwYXR0ZXJuc1N0cmluZyA9IHBhdHRlcm5zLmpvaW4oVkVSVElDQUxfQkFSKSwgLy8vXG4gICAgICAgIHBhdHRlcm4gPSBgXig/OiR7cGF0dGVybnNTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIHBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIHBhdHRlcm5NYXBGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgcGF0dGVybk5hbWVzID0gW1xuICAgICAgICAgIFRZUEVfUEFUVEVSTl9OQU1FLFxuICAgICAgICAgIE9QRVJBVE9SX1BBVFRFUk5fTkFNRVxuICAgICAgICBdLFxuICAgICAgICBwYXR0ZXJuTWFwID0gcGF0dGVybk5hbWVzLnJlZHVjZSgocGF0dGVybk1hcCwgcGF0dGVybk5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gcGF0dGVybkZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpO1xuXG4gICAgICAgICAgcGF0dGVybk1hcFtwYXR0ZXJuTmFtZV0gPSBwYXR0ZXJuO1xuXG4gICAgICAgICAgcmV0dXJuIHBhdHRlcm5NYXA7XG4gICAgICAgIH0sIHt9KTtcblxuICByZXR1cm4gcGF0dGVybk1hcDtcbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG5cbiAgY29uc3QgYm5mcyA9IGN1c3RvbUdyYW1tYXJzLm1hcCgoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKCk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gY29tYmluZVJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICB3aGlsZSAob3V0ZXJJbmRleCA8IGxlbmd0aCkge1xuICAgIGNvbnN0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdLFxuICAgICAgICAgIG91dGVyUnVsZU5hbWUgPSBvdXRlclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG91dGVyUnVsZURlZmluaXRpb25zID0gb3V0ZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBsZXQgaW5uZXJJbmRleCA9IG91dGVySW5kZXggKyAxO1xuXG4gICAgd2hpbGUgKGlubmVySW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlubmVyUnVsZSA9IHJ1bGVzW2lubmVySW5kZXhdLFxuICAgICAgICAgICAgaW5uZXJSdWxlTmFtZSA9IGlubmVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChpbm5lclJ1bGVOYW1lID09PSBvdXRlclJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGlubmVyUnVsZURlZmluaXRpb25zID0gaW5uZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBbICAvLy9cbiAgICAgICAgICAuLi5pbm5lclJ1bGVEZWZpbml0aW9ucyxcbiAgICAgICAgICAuLi5vdXRlclJ1bGVEZWZpbml0aW9uc1xuICAgICAgICBdO1xuXG4gICAgICAgIG91dGVyUnVsZS5yZXBsYWNlQWxsRGVmaW5pdGlvbnMoLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5uZXJJbmRleCwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBydWxlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3V0ZXJJbmRleCsrO1xuXG4gICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXMiLCJwYXR0ZXJuTWFwIiwiZ2V0UnVsZXMiLCJnZXRQYXR0ZXJuTWFwIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiY3VzdG9tR3JhbW1hcnMiLCJydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJwYXR0ZXJuTWFwRnJvbUN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwicGF0dGVybkZyb21DdXN0b21HcmFtbWFycyIsInBhdHRlcm5OYW1lIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJwYXR0ZXJucyIsInJlZHVjZSIsImN1c3RvbUdyYW1tYXIiLCJwYXR0ZXJuIiwiZ2V0UGF0dGVybiIsInB1c2giLCJyZXZlcnNlIiwicGF0dGVybnNTdHJpbmciLCJqb2luIiwiVkVSVElDQUxfQkFSIiwicGF0dGVybk5hbWVzIiwiVFlQRV9QQVRURVJOX05BTUUiLCJPUEVSQVRPUl9QQVRURVJOX05BTUUiLCJibmZzIiwibWFwIiwiYm5mIiwiZ2V0Qk5GIiwiRU1QVFlfU1RSSU5HIiwiY29tYmluZVJ1bGVzIiwib3V0ZXJJbmRleCIsImxlbmd0aCIsIm91dGVyUnVsZSIsIm91dGVyUnVsZU5hbWUiLCJnZXROYW1lIiwib3V0ZXJSdWxlRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImlubmVySW5kZXgiLCJpbm5lclJ1bGUiLCJpbm5lclJ1bGVOYW1lIiwiaW5uZXJSdWxlRGVmaW5pdGlvbnMiLCJyZXBsYWNlQWxsRGVmaW5pdGlvbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFXUUEscUJBQXFCOzs7cUNBVFYseUJBQXlCO3lFQUV4Qix3QkFBd0I7eUJBRWQsYUFBYTs0QkFDQyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpFLElBQU0sQUFBRUMsWUFBWSxHQUFLQyxzQkFBZSxnQkFBQSxDQUFoQ0QsWUFBWSxBQUFvQixBQUFDO0FBRTFCLElBQUEsQUFBTUQscUJBQXFCLGlCQXVCdkMsQUF2Qlk7YUFBTUEscUJBQXFCLENBQzVCRyxLQUFLLEVBQUVDLFVBQVU7O1FBQzNCLElBQUksQ0FBQ0QsS0FBSyxHQUFHQSxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVUsQ0FB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