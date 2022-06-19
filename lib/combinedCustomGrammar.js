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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lZEN1c3RvbUdyYW1tYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgZGVmYXVsdEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vZGVmYXVsdEN1c3RvbUdyYW1tYXJcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKGxleGljYWxQYXR0ZXJuLCBydWxlcykge1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cbiAgXG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybkZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpO1xuXG4gICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbmV3IENvbWJpbmVkQ3VzdG9tR3JhbW1hcihsZXhpY2FsUGF0dGVybiwgcnVsZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGV4aWNhbFBhdHRlcm5Gcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cblxuICBjb25zdCBsZXhpY2FsUGF0dGVybnMgPSBjdXN0b21HcmFtbWFycy5yZWR1Y2UoKGxleGljYWxQYXR0ZXJucywgY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gY3VzdG9tR3JhbW1hci5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgICAgaWYgKGxleGljYWxQYXR0ZXJuKSB7ICAvLy9cbiAgICAgICAgICAgIGxleGljYWxQYXR0ZXJucy5wdXNoKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbGV4aWNhbFBhdHRlcm5zO1xuICAgICAgICB9LCBbXSk7XG5cbiAgbGV4aWNhbFBhdHRlcm5zLnJldmVyc2UoKTtcblxuICBjb25zdCBsZXhpY2FsUGF0dGVybnNTdHJpbmcgPSBsZXhpY2FsUGF0dGVybnMuam9pbihcInxcIiksIC8vL1xuICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGBeKD86JHtsZXhpY2FsUGF0dGVybnNTdHJpbmd9KWA7XG5cbiAgcmV0dXJuIGxleGljYWxQYXR0ZXJuO1xufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cblxuICBjb25zdCBibmZzID0gY3VzdG9tR3JhbW1hcnMubWFwKChjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYoKTtcblxuICAgICAgICAgIHJldHVybiBibmY7XG4gICAgICAgIH0pLFxuICAgICAgICBibmYgPSBibmZzLmpvaW4oRU1QVFlfU1RSSU5HKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBjb21iaW5lUnVsZXMocnVsZXMpXG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUnVsZXMocnVsZXMpIHtcbiAgbGV0IG91dGVySW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChvdXRlckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgb3V0ZXJSdWxlID0gcnVsZXNbb3V0ZXJJbmRleF0sXG4gICAgICAgICAgb3V0ZXJSdWxlTmFtZSA9IG91dGVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBvdXRlclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGxldCBpbm5lckluZGV4ID0gb3V0ZXJJbmRleCArIDE7XG5cbiAgICB3aGlsZSAoaW5uZXJJbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29uc3QgaW5uZXJSdWxlID0gcnVsZXNbaW5uZXJJbmRleF0sXG4gICAgICAgICAgICBpbm5lclJ1bGVOYW1lID0gaW5uZXJSdWxlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGlubmVyUnVsZU5hbWUgPT09IG91dGVyUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5uZXJSdWxlRGVmaW5pdGlvbnMgPSBpbm5lclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgICAgICBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAuLi5pbm5lclJ1bGVEZWZpbml0aW9ucyxcbiAgICAgICAgICAuLi5vdXRlclJ1bGVEZWZpbml0aW9uc1xuICAgICAgICBdO1xuXG4gICAgICAgIG91dGVyUnVsZS5zZXREZWZpbml0aW9ucyhvdXRlclJ1bGVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbm5lckluZGV4LCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHJ1bGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRlckluZGV4Kys7XG4gICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICB9XG59XG4iXSwibmFtZXMiOlsicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4aWNhbFBhdHRlcm4iLCJydWxlcyIsImdldExleGljYWxQYXR0ZXJuIiwiZ2V0UnVsZXMiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJjdXN0b21HcmFtbWFycyIsImxleGljYWxQYXR0ZXJuRnJvbUN1c3RvbUdyYW1tYXJzIiwicnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJsZXhpY2FsUGF0dGVybnMiLCJyZWR1Y2UiLCJjdXN0b21HcmFtbWFyIiwicHVzaCIsInJldmVyc2UiLCJsZXhpY2FsUGF0dGVybnNTdHJpbmciLCJqb2luIiwiYm5mcyIsIm1hcCIsImJuZiIsImdldEJORiIsIkVNUFRZX1NUUklORyIsImNvbWJpbmVSdWxlcyIsIm91dGVySW5kZXgiLCJsZW5ndGgiLCJvdXRlclJ1bGUiLCJvdXRlclJ1bGVOYW1lIiwiZ2V0TmFtZSIsIm91dGVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwic2V0RGVmaW5pdGlvbnMiLCJzdGFydCIsImRlbGV0ZUNv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