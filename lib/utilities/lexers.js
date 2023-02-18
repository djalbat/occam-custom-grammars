"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    florenceLexerFromNothing: function() {
        return florenceLexerFromNothing;
    },
    florenceLexerFromCombinedCustomGrammar: function() {
        return florenceLexerFromCombinedCustomGrammar;
    },
    florenceLexerFromEntriesAndCombinedCustomGrammar: function() {
        return florenceLexerFromEntriesAndCombinedCustomGrammar;
    },
    default: function() {
        return _default;
    }
});
var _occamGrammars = require("occam-grammars");
var _occamLexers = require("occam-lexers");
var _combinedCustomGrammar = /*#__PURE__*/ _interopRequireDefault(require("../combinedCustomGrammar"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
var rulesFromEntries = _occamLexers.lexerUtilities.rulesFromEntries;
function florenceLexerFromNothing() {
    var entries = _occamGrammars.FlorenceLexer.entries, combinedCustomGrammar = _combinedCustomGrammar.default.fromNothing(), rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), florenceLexer = _occamGrammars.FlorenceLexer.fromRules(rules);
    return florenceLexer;
}
function florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
    var entries = _occamGrammars.FlorenceLexer.entries, rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), florenceLexer = _occamGrammars.FlorenceLexer.fromRules(rules);
    return florenceLexer;
}
function florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
    var rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), florenceLexer = _occamGrammars.FlorenceLexer.fromRules(rules);
    return florenceLexer;
}
var _default = {
    florenceLexerFromNothing: florenceLexerFromNothing,
    florenceLexerFromCombinedCustomGrammar: florenceLexerFromCombinedCustomGrammar,
    florenceLexerFromEntriesAndCombinedCustomGrammar: florenceLexerFromEntriesAndCombinedCustomGrammar
};
function rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
    var customGrammarEntries = combinedCustomGrammar.getEntries();
    entries = _toConsumableArray(customGrammarEntries).concat(_toConsumableArray(entries));
    var rules = rulesFromEntries(entries);
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbWJpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY29tYmluZWRDdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tRW50cmllcyB9ID0gbGV4ZXJVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZUxleGVyRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHsgZW50cmllcyB9ID0gRmxvcmVuY2VMZXhlcixcbiAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gIHJldHVybiBmbG9yZW5jZUxleGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHsgZW50cmllcyB9ID0gRmxvcmVuY2VMZXhlcixcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZUxleGVyRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoZW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gIHJldHVybiBmbG9yZW5jZUxleGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZsb3JlbmNlTGV4ZXJGcm9tTm90aGluZyxcbiAgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIsXG4gIGZsb3JlbmNlTGV4ZXJGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hclxufTtcblxuZnVuY3Rpb24gcnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgY3VzdG9tR3JhbW1hckVudHJpZXMgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXIuZ2V0RW50cmllcygpO1xuXG4gIGVudHJpZXMgPSBbIC8vL1xuICAgIC4uLmN1c3RvbUdyYW1tYXJFbnRyaWVzLFxuICAgIC4uLmVudHJpZXNcbiAgXTtcblxuICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl0sIm5hbWVzIjpbImZsb3JlbmNlTGV4ZXJGcm9tTm90aGluZyIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VMZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tRW50cmllcyIsImxleGVyVXRpbGl0aWVzIiwiZW50cmllcyIsIkZsb3JlbmNlTGV4ZXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tTm90aGluZyIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tUnVsZXMiLCJjdXN0b21HcmFtbWFyRW50cmllcyIsImdldEVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVNnQkEsd0JBQXdCO2VBQXhCQTs7SUFTQUMsc0NBQXNDO2VBQXRDQTs7SUFRQUMsZ0RBQWdEO2VBQWhEQTs7SUFPaEIsT0FJRTtlQUpGOzs7NkJBL0I4QjsyQkFDQzswRUFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNLEFBQUVDLG1CQUFxQkMsMkJBQWMsQ0FBbkNEO0FBRUQsU0FBU0gsMkJBQTJCO0lBQ3pDLElBQU0sQUFBRUssVUFBWUMsNEJBQWEsQ0FBekJELFNBQ0ZFLHdCQUF3QkMsOEJBQXFCLENBQUNDLFdBQVcsSUFDekRDLFFBQVFDLHlDQUF5Q04sU0FBU0Usd0JBQzFESyxnQkFBZ0JOLDRCQUFhLENBQUNPLFNBQVMsQ0FBQ0g7SUFFOUMsT0FBT0U7QUFDVDtBQUVPLFNBQVNYLHVDQUF1Q00scUJBQXFCLEVBQUU7SUFDNUUsSUFBTSxBQUFFRixVQUFZQyw0QkFBYSxDQUF6QkQsU0FDRkssUUFBUUMseUNBQXlDTixTQUFTRSx3QkFDMURLLGdCQUFnQk4sNEJBQWEsQ0FBQ08sU0FBUyxDQUFDSDtJQUU5QyxPQUFPRTtBQUNUO0FBRU8sU0FBU1YsaURBQWlERyxPQUFPLEVBQUVFLHFCQUFxQixFQUFFO0lBQy9GLElBQU1HLFFBQVFDLHlDQUF5Q04sU0FBU0Usd0JBQzFESyxnQkFBZ0JOLDRCQUFhLENBQUNPLFNBQVMsQ0FBQ0g7SUFFOUMsT0FBT0U7QUFDVDtJQUVBLFdBQWU7SUFDYlosMEJBQUFBO0lBQ0FDLHdDQUFBQTtJQUNBQyxrREFBQUE7QUFDRjtBQUVBLFNBQVNTLHlDQUF5Q04sT0FBTyxFQUFFRSxxQkFBcUIsRUFBRTtJQUNoRixJQUFNTyx1QkFBdUJQLHNCQUFzQlEsVUFBVTtJQUU3RFYsVUFBVSxBQUNSLG1CQUFHUyw2QkFDSCxtQkFBR1Q7SUFHTCxJQUFNSyxRQUFRUCxpQkFBaUJFO0lBRS9CLE9BQU9LO0FBQ1QifQ==