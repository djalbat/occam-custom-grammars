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
var _combined = /*#__PURE__*/ _interopRequireDefault(require("../customGrammar/combined"));
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
    var entries = _occamGrammars.FlorenceLexer.entries, combinedCustomGrammar = _combined.default.fromNothing(), rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), florenceLexer = _occamGrammars.FlorenceLexer.fromRules(rules);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbWJpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9jb21iaW5lZFwiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUVudHJpZXMgfSA9IGxleGVyVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VMZXhlckZyb21Ob3RoaW5nKCkge1xuICBjb25zdCB7IGVudHJpZXMgfSA9IEZsb3JlbmNlTGV4ZXIsXG4gICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tTm90aGluZygpLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoZW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCB7IGVudHJpZXMgfSA9IEZsb3JlbmNlTGV4ZXIsXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gIHJldHVybiBmbG9yZW5jZUxleGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VMZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoZW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmbG9yZW5jZUxleGVyRnJvbU5vdGhpbmcsXG4gIGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyLFxuICBmbG9yZW5jZUxleGVyRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXJcbn07XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoZW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IGN1c3RvbUdyYW1tYXJFbnRyaWVzID0gY29tYmluZWRDdXN0b21HcmFtbWFyLmdldEVudHJpZXMoKTtcblxuICBlbnRyaWVzID0gWyAvLy9cbiAgICAuLi5jdXN0b21HcmFtbWFyRW50cmllcyxcbiAgICAuLi5lbnRyaWVzXG4gIF07XG5cbiAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJmbG9yZW5jZUxleGVyRnJvbU5vdGhpbmciLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXJGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUVudHJpZXMiLCJsZXhlclV0aWxpdGllcyIsImVudHJpZXMiLCJGbG9yZW5jZUxleGVyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbU5vdGhpbmciLCJydWxlcyIsInJ1bGVzRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyIiwiZnJvbVJ1bGVzIiwiY3VzdG9tR3JhbW1hckVudHJpZXMiLCJnZXRFbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFTZ0JBLHdCQUF3QjtlQUF4QkE7O0lBU0FDLHNDQUFzQztlQUF0Q0E7O0lBUUFDLGdEQUFnRDtlQUFoREE7O0lBT2hCLE9BSUU7ZUFKRjs7OzZCQS9COEI7MkJBQ0M7NkRBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTSxBQUFFQyxtQkFBcUJDLDJCQUFjLENBQW5DRDtBQUVELFNBQVNILDJCQUEyQjtJQUN6QyxJQUFNLEFBQUVLLFVBQVlDLDRCQUFhLENBQXpCRCxTQUNGRSx3QkFBd0JDLGlCQUFxQixDQUFDQyxXQUFXLElBQ3pEQyxRQUFRQyx5Q0FBeUNOLFNBQVNFLHdCQUMxREssZ0JBQWdCTiw0QkFBYSxDQUFDTyxTQUFTLENBQUNIO0lBRTlDLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTWCx1Q0FBdUNNLHFCQUFxQixFQUFFO0lBQzVFLElBQU0sQUFBRUYsVUFBWUMsNEJBQWEsQ0FBekJELFNBQ0ZLLFFBQVFDLHlDQUF5Q04sU0FBU0Usd0JBQzFESyxnQkFBZ0JOLDRCQUFhLENBQUNPLFNBQVMsQ0FBQ0g7SUFFOUMsT0FBT0U7QUFDVDtBQUVPLFNBQVNWLGlEQUFpREcsT0FBTyxFQUFFRSxxQkFBcUIsRUFBRTtJQUMvRixJQUFNRyxRQUFRQyx5Q0FBeUNOLFNBQVNFLHdCQUMxREssZ0JBQWdCTiw0QkFBYSxDQUFDTyxTQUFTLENBQUNIO0lBRTlDLE9BQU9FO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JaLDBCQUFBQTtJQUNBQyx3Q0FBQUE7SUFDQUMsa0RBQUFBO0FBQ0Y7QUFFQSxTQUFTUyx5Q0FBeUNOLE9BQU8sRUFBRUUscUJBQXFCLEVBQUU7SUFDaEYsSUFBTU8sdUJBQXVCUCxzQkFBc0JRLFVBQVU7SUFFN0RWLFVBQVUsQUFDUixtQkFBR1MsNkJBQ0gsbUJBQUdUO0lBR0wsSUFBTUssUUFBUVAsaUJBQWlCRTtJQUUvQixPQUFPSztBQUNUIn0=