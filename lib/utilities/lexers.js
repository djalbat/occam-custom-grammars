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
    default: function() {
        return _default;
    },
    florenceLexerFromCombinedCustomGrammar: function() {
        return florenceLexerFromCombinedCustomGrammar;
    },
    florenceLexerFromEntriesAndCombinedCustomGrammar: function() {
        return florenceLexerFromEntriesAndCombinedCustomGrammar;
    },
    florenceLexerFromNothing: function() {
        return florenceLexerFromNothing;
    }
});
var _occamgrammars = require("occam-grammars");
var _occamlexers = require("occam-lexers");
var _combined = /*#__PURE__*/ _interop_require_default(require("../customGrammar/combined"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
var lexerFromRules = _occamlexers.lexerUtilities.lexerFromRules, rulesFromEntries = _occamlexers.lexerUtilities.rulesFromEntries;
function florenceLexerFromNothing() {
    var entries = _occamgrammars.FlorenceLexer.entries, combinedCustomGrammar = _combined.default.fromNothing(), rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), florenceLexer = lexerFromRules(_occamgrammars.FlorenceLexer, rules);
    return florenceLexer;
}
function florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
    var entries = _occamgrammars.FlorenceLexer.entries, rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), florenceLexer = lexerFromRules(_occamgrammars.FlorenceLexer, rules);
    return florenceLexer;
}
function florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
    var rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), florenceLexer = lexerFromRules(_occamgrammars.FlorenceLexer, rules);
    return florenceLexer;
}
var _default = {
    florenceLexerFromNothing: florenceLexerFromNothing,
    florenceLexerFromCombinedCustomGrammar: florenceLexerFromCombinedCustomGrammar,
    florenceLexerFromEntriesAndCombinedCustomGrammar: florenceLexerFromEntriesAndCombinedCustomGrammar
};
function rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
    var customGrammarEntries = combinedCustomGrammar.getEntries();
    entries = _to_consumable_array(customGrammarEntries).concat(_to_consumable_array(entries));
    var rules = rulesFromEntries(entries);
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGbG9yZW5jZUxleGVyIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbWJpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9jb21iaW5lZFwiO1xuXG5jb25zdCB7IGxleGVyRnJvbVJ1bGVzLCBydWxlc0Zyb21FbnRyaWVzIH0gPSBsZXhlclV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3JlbmNlTGV4ZXJGcm9tTm90aGluZygpIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBGbG9yZW5jZUxleGVyLFxuICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhGbG9yZW5jZUxleGVyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBGbG9yZW5jZUxleGVyLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoZW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgZmxvcmVuY2VMZXhlciA9IGxleGVyRnJvbVJ1bGVzKEZsb3JlbmNlTGV4ZXIsIHJ1bGVzKTtcblxuICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3JlbmNlTGV4ZXJGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBsZXhlckZyb21SdWxlcyhGbG9yZW5jZUxleGVyLCBydWxlcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmxvcmVuY2VMZXhlckZyb21Ob3RoaW5nLFxuICBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcixcbiAgZmxvcmVuY2VMZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyXG59O1xuXG5mdW5jdGlvbiBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBjdXN0b21HcmFtbWFyRW50cmllcyA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRFbnRyaWVzKCk7XG5cbiAgZW50cmllcyA9IFsgLy8vXG4gICAgLi4uY3VzdG9tR3JhbW1hckVudHJpZXMsXG4gICAgLi4uZW50cmllc1xuICBdO1xuXG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyRnJvbU5vdGhpbmciLCJsZXhlckZyb21SdWxlcyIsImxleGVyVXRpbGl0aWVzIiwicnVsZXNGcm9tRW50cmllcyIsImVudHJpZXMiLCJGbG9yZW5jZUxleGVyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbU5vdGhpbmciLCJydWxlcyIsInJ1bGVzRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyIiwiY3VzdG9tR3JhbW1hckVudHJpZXMiLCJnZXRFbnRyaWVzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFpQ0EsT0FJRTtlQUpGOztJQWZnQkEsc0NBQXNDO2VBQXRDQTs7SUFRQUMsZ0RBQWdEO2VBQWhEQTs7SUFqQkFDLHdCQUF3QjtlQUF4QkE7Ozs2QkFQYzsyQkFDQzsrREFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFRQyxpQkFBcUNDLDJCQUFjLENBQW5ERCxnQkFBZ0JFLG1CQUFxQkQsMkJBQWMsQ0FBbkNDO0FBRWpCLFNBQVNIO0lBQ2QsSUFBTSxBQUFFSSxVQUFZQyw0QkFBYSxDQUF6QkQsU0FDRkUsd0JBQXdCQyxpQkFBcUIsQ0FBQ0MsV0FBVyxJQUN6REMsUUFBUUMseUNBQXlDTixTQUFTRSx3QkFDMURLLGdCQUFnQlYsZUFBZUksNEJBQWEsRUFBRUk7SUFFcEQsT0FBT0U7QUFDVDtBQUVPLFNBQVNiLHVDQUF1Q1EscUJBQXFCO0lBQzFFLElBQU0sQUFBRUYsVUFBWUMsNEJBQWEsQ0FBekJELFNBQ0ZLLFFBQVFDLHlDQUF5Q04sU0FBU0Usd0JBQzFESyxnQkFBZ0JWLGVBQWVJLDRCQUFhLEVBQUVJO0lBRXBELE9BQU9FO0FBQ1Q7QUFFTyxTQUFTWixpREFBaURLLE9BQU8sRUFBRUUscUJBQXFCO0lBQzdGLElBQU1HLFFBQVFDLHlDQUF5Q04sU0FBU0Usd0JBQzFESyxnQkFBZ0JWLGVBQWVJLDRCQUFhLEVBQUVJO0lBRXBELE9BQU9FO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JYLDBCQUFBQTtJQUNBRix3Q0FBQUE7SUFDQUMsa0RBQUFBO0FBQ0Y7QUFFQSxTQUFTVyx5Q0FBeUNOLE9BQU8sRUFBRUUscUJBQXFCO0lBQzlFLElBQU1NLHVCQUF1Qk4sc0JBQXNCTyxVQUFVO0lBRTdEVCxVQUFVLEFBQ1IscUJBQUdRLDZCQUNILHFCQUFHUjtJQUdMLElBQU1LLFFBQVFOLGlCQUFpQkM7SUFFL0IsT0FBT0s7QUFDVCJ9