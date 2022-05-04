"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _defaultCustomGrammar = _interopRequireDefault(require("./defaultCustomGrammar"));
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
                var lexicalPattern = lexicalPatternFromCustomGrammars(customGrammars), rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars);
                var combinedCustomGrammar = new CombinedCustomGrammar(lexicalPattern, rules);
                return combinedCustomGrammar;
            }
        }
    ]);
    return CombinedCustomGrammar;
}();
function lexicalPatternFromCustomGrammars(customGrammars) {
    var lexicalPatterns1 = customGrammars.reduce(function(lexicalPatterns, customGrammar) {
        var lexicalPattern = customGrammar.getLexicalPattern();
        if (lexicalPattern) {
            lexicalPatterns.push(lexicalPattern);
        }
        return lexicalPatterns;
    }, []), defaultCustomGrammarLexicalPattern = _defaultCustomGrammar.default.getLexicalPattern();
    lexicalPatterns1.unshift(defaultCustomGrammarLexicalPattern);
    lexicalPatterns1.reverse();
    var lexicalPatternsString = lexicalPatterns1.join("|"), lexicalPattern1 = "^(?:".concat(lexicalPatternsString, ")");
    return lexicalPattern1;
}
function rulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
    var bnfs = customGrammars.map(function(customGrammar) {
        var bnf = customGrammar.getBNF();
        return bnf;
    }), defaultCustomGrammarBNF = _defaultCustomGrammar.default.getBNF();
    bnfs.unshift(defaultCustomGrammarBNF);
    var bnf1 = bnfs.join(_constants.EMPTY_STRING), rules = rulesFromBNF(bnf1);
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
                var innerRuleDefinitions = innerRule.getDefinitions();
                outerRuleDefinitions = _toConsumableArray(innerRuleDefinitions).concat(_toConsumableArray(outerRuleDefinitions));
                outerRule.setDefinitions(outerRuleDefinitions);
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
exports.default = CombinedCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgZGVmYXVsdEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKGxleGljYWxQYXR0ZXJuLCBydWxlcykge1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cbiAgXG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpO1xuXG4gICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbmV3IENvbWJpbmVkQ3VzdG9tR3JhbW1hcihsZXhpY2FsUGF0dGVybiwgcnVsZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGV4aWNhbFBhdHRlcm5Gcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgbGV4aWNhbFBhdHRlcm5zID0gY3VzdG9tR3JhbW1hcnMucmVkdWNlKChsZXhpY2FsUGF0dGVybnMsIGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICAgICAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IGN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgICAgIGlmIChsZXhpY2FsUGF0dGVybikgeyAgLy8vXG4gICAgICAgICAgICBsZXhpY2FsUGF0dGVybnMucHVzaChsZXhpY2FsUGF0dGVybik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGxleGljYWxQYXR0ZXJucztcbiAgICAgICAgfSwgW10pLFxuICAgICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuID0gZGVmYXVsdEN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICBsZXhpY2FsUGF0dGVybnMudW5zaGlmdChkZWZhdWx0Q3VzdG9tR3JhbW1hckxleGljYWxQYXR0ZXJuKTtcblxuICBsZXhpY2FsUGF0dGVybnMucmV2ZXJzZSgpO1xuXG4gIGNvbnN0IGxleGljYWxQYXR0ZXJuc1N0cmluZyA9IGxleGljYWxQYXR0ZXJucy5qb2luKFwifFwiKSwgLy8vXG4gICAgICAgIGxleGljYWxQYXR0ZXJuID0gYF4oPzoke2xleGljYWxQYXR0ZXJuc1N0cmluZ30pYDtcblxuICByZXR1cm4gbGV4aWNhbFBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBibmZzID0gY3VzdG9tR3JhbW1hcnMubWFwKChjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYoKTtcblxuICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgIH0pLFxuICAgICAgICBkZWZhdWx0Q3VzdG9tR3JhbW1hckJORiA9IGRlZmF1bHRDdXN0b21HcmFtbWFyLmdldEJORigpO1xuXG4gIGJuZnMudW5zaGlmdChkZWZhdWx0Q3VzdG9tR3JhbW1hckJORik7XG5cbiAgY29uc3QgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gY29tYmluZVJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICB3aGlsZSAob3V0ZXJJbmRleCA8IGxlbmd0aCkge1xuICAgIGNvbnN0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdLFxuICAgICAgICAgIG91dGVyUnVsZU5hbWUgPSBvdXRlclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IG91dGVyUnVsZURlZmluaXRpb25zID0gb3V0ZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBsZXQgaW5uZXJJbmRleCA9IG91dGVySW5kZXggKyAxO1xuXG4gICAgd2hpbGUgKGlubmVySW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlubmVyUnVsZSA9IHJ1bGVzW2lubmVySW5kZXhdLFxuICAgICAgICAgICAgaW5uZXJSdWxlTmFtZSA9IGlubmVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChpbm5lclJ1bGVOYW1lID09PSBvdXRlclJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGlubmVyUnVsZURlZmluaXRpb25zID0gaW5uZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgLi4uaW5uZXJSdWxlRGVmaW5pdGlvbnMsXG4gICAgICAgICAgLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnNcbiAgICAgICAgXTtcblxuICAgICAgICBvdXRlclJ1bGUuc2V0RGVmaW5pdGlvbnMob3V0ZXJSdWxlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5uZXJJbmRleCwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBydWxlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3V0ZXJJbmRleCsrO1xuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGljYWxQYXR0ZXJuIiwicnVsZXMiLCJnZXRMZXhpY2FsUGF0dGVybiIsImdldFJ1bGVzIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiY3VzdG9tR3JhbW1hcnMiLCJsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyIsInJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORiIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGljYWxQYXR0ZXJucyIsInJlZHVjZSIsImN1c3RvbUdyYW1tYXIiLCJwdXNoIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybiIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwidW5zaGlmdCIsInJldmVyc2UiLCJsZXhpY2FsUGF0dGVybnNTdHJpbmciLCJqb2luIiwiYm5mcyIsIm1hcCIsImJuZiIsImdldEJORiIsImRlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwiRU1QVFlfU1RSSU5HIiwiY29tYmluZVJ1bGVzIiwib3V0ZXJJbmRleCIsImxlbmd0aCIsIm91dGVyUnVsZSIsIm91dGVyUnVsZU5hbWUiLCJnZXROYW1lIiwib3V0ZXJSdWxlRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImlubmVySW5kZXgiLCJpbm5lclJ1bGUiLCJpbm5lclJ1bGVOYW1lIiwiaW5uZXJSdWxlRGVmaW5pdGlvbnMiLCJzZXREZWZpbml0aW9ucyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJZQUFZLENBQUM7Ozs7O0FBRW1CLElBQUEsc0JBQXlCLFdBQXpCLHlCQUF5QixDQUFBO0FBRXhCLElBQUEscUJBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTtBQUU1QixJQUFBLFVBQWEsV0FBYixhQUFhLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFDLElBQU0sQUFBRUEsWUFBWSxHQUFLQyxzQkFBZSxnQkFBQSxDQUFoQ0QsWUFBWSxBQUFvQixBQUFDO0FBRTFCLElBQUEsQUFBTUUscUJBQXFCLGlCQXdCdkMsQUF4Qlk7YUFBTUEscUJBQXFCLENBQzVCQyxjQUFjLEVBQUVDLEtBQUs7O1FBQy9CLElBQUksQ0FBQ0QsY0FBYyxHQUFHQSxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7OztZQUdyQkMsR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBakJBLFNBQUFBLGlCQUFpQixHQUFHO2dCQUNsQixPQUFPLElBQUksQ0FBQ0YsY0FBYyxDQUFDO2FBQzVCOzs7WUFFREcsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUssQ0FBQzthQUNuQjs7OztZQUVNRyxHQUFrQixFQUFsQkEsb0JBQWtCO21CQUF6QixTQUFPQSxrQkFBa0IsQ0FBQ0MsY0FBYyxFQUFFO2dCQUN4QyxJQUFNTCxjQUFjLEdBQUdNLGdDQUFnQyxDQUFDRCxjQUFjLENBQUMsRUFD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