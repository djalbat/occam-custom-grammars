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
    function CombinedCustomGrammar(lexicalPattern, rules) {
        _classCallCheck(this, CombinedCustomGrammar);
        this.lexicalPattern = lexicalPattern;
        this.rules = rules;
    }
    _createClass(CombinedCustomGrammar, [
        {
            key: "getLexicalPattern",
            value: function getLexicalPattern() {
                return this.lexicalPattern;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                return this.rules;
            }
        }
    ], [
        {
            key: "fromCustomGrammars",
            value: function fromCustomGrammars(customGrammars) {
                var lexicalPattern = lexicalPatternFromCustomGrammars(customGrammars), rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(lexicalPattern, rules);
                return combinedCustomGrammar;
            }
        }
    ]);
    return CombinedCustomGrammar;
}();
function lexicalPatternFromCustomGrammars(customGrammars) {
    customGrammars = [
        _defaultCustomGrammar.default
    ].concat(_toConsumableArray(customGrammars)); ///
    var lexicalPatterns = customGrammars.reduce(function(lexicalPatterns, customGrammar) {
        var lexicalPattern = customGrammar.getLexicalPattern();
        if (lexicalPattern) {
            lexicalPatterns.push(lexicalPattern);
        }
        return lexicalPatterns;
    }, []);
    lexicalPatterns.reverse();
    var lexicalPatternsString = lexicalPatterns.join("|"), lexicalPattern = "^(?:".concat(lexicalPatternsString, ")");
    return lexicalPattern;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgZGVmYXVsdEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKGxleGljYWxQYXR0ZXJuLCBydWxlcykge1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cbiAgXG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIobGV4aWNhbFBhdHRlcm4sIHJ1bGVzKTtcbiAgICBcbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxleGljYWxQYXR0ZXJuRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG5cbiAgY29uc3QgbGV4aWNhbFBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChsZXhpY2FsUGF0dGVybnMsIGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICAgICAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgICAgIGlmIChsZXhpY2FsUGF0dGVybikgeyAgLy8vXG4gICAgICAgICAgICBsZXhpY2FsUGF0dGVybnMucHVzaChsZXhpY2FsUGF0dGVybik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGxleGljYWxQYXR0ZXJucztcbiAgICAgICAgfSwgW10pO1xuXG4gIGxleGljYWxQYXR0ZXJucy5yZXZlcnNlKCk7XG5cbiAgY29uc3QgbGV4aWNhbFBhdHRlcm5zU3RyaW5nID0gbGV4aWNhbFBhdHRlcm5zLmpvaW4oXCJ8XCIpLCAvLy9cbiAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBgXig/OiR7bGV4aWNhbFBhdHRlcm5zU3RyaW5nfSlgO1xuXG4gIHJldHVybiBsZXhpY2FsUGF0dGVybjtcbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG5cbiAgY29uc3QgYm5mcyA9IGN1c3RvbUdyYW1tYXJzLm1hcCgoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKCk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gY29tYmluZVJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICB3aGlsZSAob3V0ZXJJbmRleCA8IGxlbmd0aCkge1xuICAgIGNvbnN0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdLFxuICAgICAgICAgIG91dGVyUnVsZU5hbWUgPSBvdXRlclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG91dGVyUnVsZURlZmluaXRpb25zID0gb3V0ZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBsZXQgaW5uZXJJbmRleCA9IG91dGVySW5kZXggKyAxO1xuXG4gICAgd2hpbGUgKGlubmVySW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlubmVyUnVsZSA9IHJ1bGVzW2lubmVySW5kZXhdLFxuICAgICAgICAgICAgaW5uZXJSdWxlTmFtZSA9IGlubmVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChpbm5lclJ1bGVOYW1lID09PSBvdXRlclJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGlubmVyUnVsZURlZmluaXRpb25zID0gaW5uZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBbICAvLy9cbiAgICAgICAgICAuLi5pbm5lclJ1bGVEZWZpbml0aW9ucyxcbiAgICAgICAgICAuLi5vdXRlclJ1bGVEZWZpbml0aW9uc1xuICAgICAgICBdO1xuXG4gICAgICAgIG91dGVyUnVsZS5yZXBsYWNlQWxsRGVmaW5pdGlvbnMoLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5uZXJJbmRleCwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBydWxlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3V0ZXJJbmRleCsrO1xuXG4gICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwibGV4aWNhbFBhdHRlcm4iLCJydWxlcyIsImdldExleGljYWxQYXR0ZXJuIiwiZ2V0UnVsZXMiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjdXN0b21HcmFtbWFycyIsImxleGljYWxQYXR0ZXJuRnJvbUN1c3RvbUdyYW1tYXJzIiwicnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJsZXhpY2FsUGF0dGVybnMiLCJyZWR1Y2UiLCJjdXN0b21HcmFtbWFyIiwicHVzaCIsInJldmVyc2UiLCJsZXhpY2FsUGF0dGVybnNTdHJpbmciLCJqb2luIiwiYm5mcyIsIm1hcCIsImJuZiIsImdldEJORiIsIkVNUFRZX1NUUklORyIsImNvbWJpbmVSdWxlcyIsIm91dGVySW5kZXgiLCJsZW5ndGgiLCJvdXRlclJ1bGUiLCJvdXRlclJ1bGVOYW1lIiwiZ2V0TmFtZSIsIm91dGVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwicmVwbGFjZUFsbERlZmluaXRp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