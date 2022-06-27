"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return CombinedCustomGrammar;
    },
    enumerable: true
});
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
        var outerRule = rules[outerIndex];
        var outerRuleName = outerRule.getName(), outerRuleAmbiguous = outerRule.isAmbiguous(), outerRuleDefinitions = outerRule.getDefinitions(), outerRuleNonTerminalNode = outerRule.getNonTerminalNode();
        var innerIndex = outerIndex + 1;
        while(innerIndex < length){
            var innerRule = rules[innerIndex], innerRuleName = innerRule.getName();
            if (innerRuleName === outerRuleName) {
                var innerRuleDefinitions = innerRule.getDefinitions(), name = outerRuleName, ambiguous = outerRuleAmbiguous, definitions = _toConsumableArray(innerRuleDefinitions).concat(_toConsumableArray(outerRuleDefinitions)), NonTerminalNode = outerRuleNonTerminalNode; ///
                var Rule = outerRule.constructor, rule = new Rule(name, ambiguous, definitions, NonTerminalNode);
                var start = void 0;
                var deleteCount = 1;
                start = outerIndex; ///
                outerRule = rule; ///
                rules.splice(start, deleteCount, outerRule);
                start = innerIndex; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgZGVmYXVsdEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKGxleGljYWxQYXR0ZXJuLCBydWxlcykge1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cbiAgXG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpO1xuXG4gICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbmV3IENvbWJpbmVkQ3VzdG9tR3JhbW1hcihsZXhpY2FsUGF0dGVybiwgcnVsZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGV4aWNhbFBhdHRlcm5Gcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cblxuICBjb25zdCBsZXhpY2FsUGF0dGVybnMgPSBjdXN0b21HcmFtbWFycy5yZWR1Y2UoKGxleGljYWxQYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgICAgaWYgKGxleGljYWxQYXR0ZXJuKSB7ICAvLy9cbiAgICAgICAgICAgIGxleGljYWxQYXR0ZXJucy5wdXNoKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbGV4aWNhbFBhdHRlcm5zO1xuICAgICAgICB9LCBbXSk7XG5cbiAgbGV4aWNhbFBhdHRlcm5zLnJldmVyc2UoKTtcblxuICBjb25zdCBsZXhpY2FsUGF0dGVybnNTdHJpbmcgPSBsZXhpY2FsUGF0dGVybnMuam9pbihcInxcIiksIC8vL1xuICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGBeKD86JHtsZXhpY2FsUGF0dGVybnNTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIGxleGljYWxQYXR0ZXJuO1xufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cblxuICBjb25zdCBibmZzID0gY3VzdG9tR3JhbW1hcnMubWFwKChjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYoKTtcblxuICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgIH0pLFxuICAgICAgICBibmYgPSBibmZzLmpvaW4oRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBjb21iaW5lUnVsZXMocnVsZXMpXG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUnVsZXMocnVsZXMpIHtcbiAgbGV0IG91dGVySW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChvdXRlckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgbGV0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdO1xuXG4gICAgY29uc3Qgb3V0ZXJSdWxlTmFtZSA9IG91dGVyUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgb3V0ZXJSdWxlQW1iaWd1b3VzID0gb3V0ZXJSdWxlLmlzQW1iaWd1b3VzKCksXG4gICAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBvdXRlclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBvdXRlclJ1bGVOb25UZXJtaW5hbE5vZGUgPSBvdXRlclJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBsZXQgaW5uZXJJbmRleCA9IG91dGVySW5kZXggKyAxO1xuXG4gICAgd2hpbGUgKGlubmVySW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlubmVyUnVsZSA9IHJ1bGVzW2lubmVySW5kZXhdLFxuICAgICAgICAgICAgaW5uZXJSdWxlTmFtZSA9IGlubmVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChpbm5lclJ1bGVOYW1lID09PSBvdXRlclJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGlubmVyUnVsZURlZmluaXRpb25zID0gaW5uZXJSdWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgICAgIG5hbWUgPSBvdXRlclJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICAgICAgYW1iaWd1b3VzID0gb3V0ZXJSdWxlQW1iaWd1b3VzLCAvLy9cbiAgICAgICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgLi4uaW5uZXJSdWxlRGVmaW5pdGlvbnMsXG4gICAgICAgICAgICAgICAgLi4ub3V0ZXJSdWxlRGVmaW5pdGlvbnNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gb3V0ZXJSdWxlTm9uVGVybWluYWxOb2RlOyAvLy9cblxuICAgICAgICBjb25zdCB7IGNvbnN0cnVjdG9yOiBSdWxlIH0gPSBvdXRlclJ1bGUsXG4gICAgICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICAgIGxldCBzdGFydDtcblxuICAgICAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgc3RhcnQgPSBvdXRlckluZGV4OyAvLy9cblxuICAgICAgICBvdXRlclJ1bGUgPSBydWxlOyAvLy9cblxuICAgICAgICBydWxlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBvdXRlclJ1bGUpO1xuXG4gICAgICAgIHN0YXJ0ID0gaW5uZXJJbmRleDsgLy8vXG5cbiAgICAgICAgcnVsZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG91dGVySW5kZXgrKztcblxuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsImxleGljYWxQYXR0ZXJuIiwicnVsZXMiLCJnZXRMZXhpY2FsUGF0dGVybiIsImdldFJ1bGVzIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiY3VzdG9tR3JhbW1hcnMiLCJsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyIsInJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORiIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwibGV4aWNhbFBhdHRlcm5zIiwicmVkdWNlIiwiY3VzdG9tR3JhbW1hciIsInB1c2giLCJyZXZlcnNlIiwibGV4aWNhbFBhdHRlcm5zU3RyaW5nIiwiam9pbiIsImJuZnMiLCJtYXAiLCJibmYiLCJnZXRCTkYiLCJFTVBUWV9TVFJJTkciLCJjb21iaW5lUnVsZXMiLCJvdXRlckluZGV4IiwibGVuZ3RoIiwib3V0ZXJSdWxlIiwib3V0ZXJSdWxlTmFtZSIsImdldE5hbWUiLCJvdXRlclJ1bGVBbWJpZ3VvdXMiLCJpc0FtYmlndW91cyIsIm91dGVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJvdXRlclJ1bGVOb25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiY29uc3RydWN0b3IiLCJSdWxlIiwicnVsZSIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7O2VBVVFBLHFCQUFxQjs7OztxQ0FSVix5QkFBeUI7MkRBRXhCLHdCQUF3Qjt5QkFFNUIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTSxBQUFFQyxZQUFZLEdBQUtDLHNCQUFlLGdCQUFBLENBQWhDRCxZQUFZLEFBQW9CLEFBQUM7QUFFMUIsSUFBQSxBQUFNRCxxQkFBcUIsaUJBd0J2QyxBQXhCWTthQUFNQSxxQkFBcUIsQ0FDNUJHLGNBQWMsRUFBRUMsS0FBSzs7UUFDL0IsSUFBSSxDQUFDRCxjQUFjLEdBQUdBLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSyxDQUFDOzs7O1lBR3JCQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLEdBQUc7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDRixjQUFjLENBQUM7YUFDNUI7OztZQUVERyxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNBQUFBLFFBQVEsR0FBRztnQkFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSyxDQUFDO2FBQ25COzs7O1lBRU1HLEdBQWtCLEVBQWxCQSxvQkFBa0I7bUJBQXpCLFNBQU9BLGtCQUFrQixDQUFDQyxjQUFjLEVBQUU7Z0JBQ3hDLElBQU1MLGNBQWMsR0FBR00sZ0NBQWdDLENBQUNELGNBQWMsQ0FBQyxFQUNqRUosS0FBSyxHQUFHTSxvQ0FBb0MsQ0FBQ0YsY0FBYyxDQUFDLEFBQUM7Z0JBRW5FLElBQU1HLHFCQUFxQixHQUFHLElBQUlYLHFCQUFxQixDQUFDRyxjQUFjLEVBQUVDLEtBQUssQ0FBQyxBQUFDO2dCQUUvRSxPQUFPTyxxQkFBcUIsQ0FBQzthQUM5Qjs7OztDQUNGLEVBQUE7QUFFRCxTQUFTRixnQ0FBZ0MsQ0FBQ0QsY0FBYyxFQUFFO0lBQ3hEQSxjQUFjLEdBQUc7UUFBRUkscUJBQW9CLFFBQUE7S0FBcUIsQ0FBM0MsTUFBMkMsQ0FBbkIsbUJBQUdKLGNBQWMsQ0FBZEEsQ0FBZ0IsQ0FBQyxDQUFDLEdBQUc7SUFFakUsSUFBTUssZUFBZSxHQUFHTCxjQUFjLENBQUNNLE1BQU0sQ0FBQyxTQUFDRCxlQUFlLEVBQUVFLGFBQWEsRUFBSztRQUMxRSxJQUFNWixjQUFjLEdBQUdZLGFBQWEsQ0FBQ1YsaUJBQWlCLEVBQUUsQUFBQztRQUV6RCxJQUFJRixjQUFjLEVBQUU7WUFDbEJVLGVBQWUsQ0FBQ0csSUFBSSxDQUFDYixjQUFjLENBQUMsQ0FBQztTQUN0QztRQUVELE9BQU9VLGVBQWUsQ0FBQztLQUN4QixFQUFFLEVBQUUsQ0FBQyxBQUFDO0lBRWJBLGVBQWUsQ0FBQ0ksT0FBTyxFQUFFLENBQUM7SUFFMUIsSUFBTUMscUJBQXFCLEdBQUdMLGVBQWUsQ0FBQ00sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNqRGhCLGNBQWMsR0FBRyxBQUFDLE1BQUksQ0FBd0IsTUFBQyxDQUF2QmUscUJBQXFCLEVBQUMsR0FBQyxDQUFDLEFBQUM7SUFFdkQsT0FBT2YsY0FBYyxDQUFDO0NBQ3ZCO0FBRUQsU0FBU08sb0NBQW9DLENBQUNGLGNBQWMsRUFBRTtJQUM1REEsY0FBYyxHQUFHO1FBQUVJLHFCQUFvQixRQUFBO0tBQXFCLENBQTNDLE1BQTJDLENBQW5CLG1CQUFHSixjQUFjLENBQWRBLENBQWdCLENBQUMsQ0FBQyxHQUFHO0lBRWpFLElBQU1ZLElBQUksR0FBR1osY0FBYyxDQUFDYSxHQUFHLENBQUMsU0FBQ04sYUFBYSxFQUFLO1FBQzNDLElBQU1PLEdBQUcsR0FBR1AsYUFBYSxDQUFDUSxNQUFNLEVBQUUsQUFBQztRQUVuQyxPQUFPRCxHQUFHLENBQUM7S0FDWixDQUFDLEVBQ0ZBLEdBQUcsR0FBR0YsSUFBSSxDQUFDRCxJQUFJLENBQUNLLFVBQVksYUFBQSxDQUFDLEVBQzdCcEIsS0FBSyxHQUFHSCxZQUFZLENBQUNxQixHQUFHLENBQUMsQUFBQztJQUVoQ0csWUFBWSxDQUFDckIsS0FBSyxDQUFDO0lBRW5CLE9BQU9BLEtBQUssQ0FBQztDQUNkO0FBRUQsU0FBU3FCLFlBQVksQ0FBQ3JCLEtBQUssRUFBRTtJQUMzQixJQUFJc0IsVUFBVSxHQUFHLENBQUMsRUFDZEMsTUFBTSxHQUFHdkIsS0FBSyxDQUFDdUIsTUFBTSxBQUFDO0lBRTFCLE1BQU9ELFVBQVUsR0FBR0MsTUFBTSxDQUFFO1FBQzFCLElBQUlDLFNBQVMsR0FBR3hCLEtBQUssQ0FBQ3NCLFVBQVUsQ0FBQyxBQUFDO1FBRWxDLElBQU1HLGFBQWEsR0FBR0QsU0FBUyxDQUFDRSxPQUFPLEVBQUUsRUFDbkNDLGtCQUFrQixHQUFHSCxTQUFTLENBQUNJLFdBQVcsRUFBRSxFQUM1Q0Msb0JBQW9CLEdBQUdMLFNBQVMsQ0FBQ00sY0FBYyxFQUFFLEVBQ2pEQyx3QkFBd0IsR0FBR1AsU0FBUyxDQUFDUSxrQkFBa0IsRUFBRSxBQUFDO1FBRWhFLElBQUlDLFVBQVUsR0FBR1gsVUFBVSxHQUFHLENBQUMsQUFBQztRQUVoQyxNQUFPVyxVQUFVLEdBQUdWLE1BQU0sQ0FBRTtZQUMxQixJQUFNVyxTQUFTLEdBQUdsQyxLQUFLLENBQUNpQyxVQUFVLENBQUMsRUFDN0JFLGFBQWEsR0FBR0QsU0FBUyxDQUFDUixPQUFPLEVBQUUsQUFBQztZQUUxQyxJQUFJUyxhQUFhLEtBQUtWLGFBQWEsRUFBRTtnQkFDbkMsSUFBTVcsb0JBQW9CLEdBQUdGLFNBQVMsQ0FBQ0osY0FBYyxFQUFFLEVBQ2pETyxJQUFJLEdBQUdaLGFBQWEsRUFDcEJhLFNBQVMsR0FBR1gsa0JBQWtCLEVBQzlCWSxXQUFXLEdBQUcsQUFDWixtQkFBR0gsb0JBQW9CLENBQXBCQSxRQUNILG1CQUFHUCxvQkFBb0IsQ0FBcEJBLENBQ0osRUFDRFcsZUFBZSxHQUFHVCx3QkFBd0IsQUFBQyxFQUFDLEdBQUc7Z0JBRXJELElBQVFVLEFBQWFDLElBQUksR0FBS2xCLFNBQVMsQ0FBL0JpQixXQUFXLEFBQU0sRUFDbkJFLElBQUksR0FBRyxJQUFJRCxJQUFJLENBQUNMLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsQ0FBQyxBQUFDO2dCQUVyRSxJQUFJSSxLQUFLLEdBQUxBLEtBQUFBLENBQUssQUFBQztnQkFFVixJQUFNQyxXQUFXLEdBQUcsQ0FBQyxBQUFDO2dCQUV0QkQsS0FBSyxHQUFHdEIsVUFBVSxDQUFDLENBQUMsR0FBRztnQkFFdkJFLFNBQVMsR0FBR21CLElBQUksQ0FBQyxDQUFDLEdBQUc7Z0JBRXJCM0MsS0FBSyxDQUFDOEMsTUFBTSxDQUFDRixLQUFLLEVBQUVDLFdBQVcsRUFBRXJCLFNBQVMsQ0FBQyxDQUFDO2dCQUU1Q29CLEtBQUssR0FBR1gsVUFBVSxDQUFDLENBQUMsR0FBRztnQkFFdkJqQyxLQUFLLENBQUM4QyxNQUFNLENBQUNGLEtBQUssRUFBRUMsV0FBVyxDQUFDLENBQUM7Z0JBRWpDdEIsTUFBTSxHQUFHdkIsS0FBSyxDQUFDdUIsTUFBTSxDQUFDO2FBQ3ZCLE1BQU07Z0JBQ0xVLFVBQVUsRUFBRSxDQUFDO2FBQ2Q7U0FDRjtRQUVEWCxVQUFVLEVBQUUsQ0FBQztRQUViQyxNQUFNLEdBQUd2QixLQUFLLENBQUN1QixNQUFNLENBQUM7S0FDdkI7Q0FDRiJ9