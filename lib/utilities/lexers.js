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
var _occamLexers = require("occam-lexers");
var _occamGrammars = require("occam-grammars");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
function florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
    var entries = _occamGrammars.FlorenceLexer.entries, rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), florenceLexer = _occamGrammars.FlorenceLexer.fromRules(rules);
    return florenceLexer;
}
function florenceLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
    var rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), florenceLexer = _occamGrammars.FlorenceLexer.fromRules(rules);
    return florenceLexer;
}
var _default = {
    florenceLexerFromCombinedCustomGrammar: florenceLexerFromCombinedCustomGrammar,
    florenceLexerFromEntriesAndCombinedCustomGrammar: florenceLexerFromEntriesAndCombinedCustomGrammar
};
function rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
    var customGrammarEntries = combinedCustomGrammar.getEntries();
    entries = _toConsumableArray(customGrammarEntries).concat(_toConsumableArray(entries));
    var rules = rulesFromEntries(entries);
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21FbnRyaWVzIH0gPSBsZXhlclV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCB7IGVudHJpZXMgfSA9IEZsb3JlbmNlTGV4ZXIsXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gIHJldHVybiBmbG9yZW5jZUxleGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VMZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoZW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbVJ1bGVzKHJ1bGVzKTtcblxuICByZXR1cm4gZmxvcmVuY2VMZXhlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcixcbiAgZmxvcmVuY2VMZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyXG59O1xuXG5mdW5jdGlvbiBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBjdXN0b21HcmFtbWFyRW50cmllcyA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRFbnRyaWVzKCk7XG5cbiAgZW50cmllcyA9IFsgLy8vXG4gICAgLi4uY3VzdG9tR3JhbW1hckVudHJpZXMsXG4gICAgLi4uZW50cmllc1xuICBdO1xuXG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmbG9yZW5jZUxleGVyRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21FbnRyaWVzIiwibGV4ZXJVdGlsaXRpZXMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJlbnRyaWVzIiwiRmxvcmVuY2VMZXhlciIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXIiLCJmcm9tUnVsZXMiLCJjdXN0b21HcmFtbWFyRW50cmllcyIsImdldEVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFPR0Esc0NBQXNDO2VBQXRDQSxzQ0FBc0M7O0lBUXRDQyxnREFBZ0Q7ZUFBaERBLGdEQUFnRDs7SUFPaEUsT0FHRTtlQUhGLFFBR0U7OzsyQkF2QjZCLGNBQWM7NkJBQ2YsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFNLEFBQUVDLGdCQUFnQixHQUFLQyxZQUFjLGVBQUEsQ0FBbkNELGdCQUFnQixBQUFtQixBQUFDO0FBRXJDLFNBQVNGLHNDQUFzQyxDQUFDSSxxQkFBcUIsRUFBRTtJQUM1RSxJQUFNLEFBQUVDLE9BQU8sR0FBS0MsY0FBYSxjQUFBLENBQXpCRCxPQUFPLEFBQWtCLEVBQzNCRSxLQUFLLEdBQUdDLHdDQUF3QyxDQUFDSCxPQUFPLEVBQUVELHFCQUFxQixDQUFDLEVBQ2hGSyxhQUFhLEdBQUdILGNBQWEsY0FBQSxDQUFDSSxTQUFTLENBQUNILEtBQUssQ0FBQyxBQUFDO0lBRXJELE9BQU9FLGFBQWEsQ0FBQztBQUN2QixDQUFDO0FBRU0sU0FBU1IsZ0RBQWdELENBQUNJLE9BQU8sRUFBRUQscUJBQXFCLEVBQUU7SUFDL0YsSUFBTUcsS0FBSyxHQUFHQyx3Q0FBd0MsQ0FBQ0gsT0FBTyxFQUFFRCxxQkFBcUIsQ0FBQyxFQUNoRkssYUFBYSxHQUFHSCxjQUFhLGNBQUEsQ0FBQ0ksU0FBUyxDQUFDSCxLQUFLLENBQUMsQUFBQztJQUVyRCxPQUFPRSxhQUFhLENBQUM7QUFDdkIsQ0FBQztJQUVELFFBR0UsR0FIYTtJQUNiVCxzQ0FBc0MsRUFBdENBLHNDQUFzQztJQUN0Q0MsZ0RBQWdELEVBQWhEQSxnREFBZ0Q7Q0FDakQ7QUFFRCxTQUFTTyx3Q0FBd0MsQ0FBQ0gsT0FBTyxFQUFFRCxxQkFBcUIsRUFBRTtJQUNoRixJQUFNTyxvQkFBb0IsR0FBR1AscUJBQXFCLENBQUNRLFVBQVUsRUFBRSxBQUFDO0lBRWhFUCxPQUFPLEdBQUcsQUFDUixtQkFBR00sb0JBQW9CLENBQXBCQSxRQUNILG1CQUFHTixPQUFPLENBQVBBLENBQ0osQ0FBQztJQUVGLElBQU1FLEtBQUssR0FBR0wsZ0JBQWdCLENBQUNHLE9BQU8sQ0FBQyxBQUFDO0lBRXhDLE9BQU9FLEtBQUssQ0FBQztBQUNmLENBQUMifQ==