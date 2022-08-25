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
    var rules = entries.map(function(entry) {
        var rule = _occamLexers.Rule.fromEntry(entry);
        return rule;
    });
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSdWxlIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgRmxvcmVuY2VMZXhlciB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHsgZW50cmllcyB9ID0gRmxvcmVuY2VMZXhlcixcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21SdWxlcyhydWxlcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9yZW5jZUxleGVyRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoZW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tUnVsZXMocnVsZXMpO1xuXG4gIHJldHVybiBmbG9yZW5jZUxleGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyLFxuICBmbG9yZW5jZUxleGVyRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXJcbn07XG5cbmZ1bmN0aW9uIHJ1bGVzRnJvbUVudHJpZXNBbmRDb21iaW5lZEN1c3RvbUdyYW1tYXIoZW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyKSB7XG4gIGNvbnN0IGN1c3RvbUdyYW1tYXJFbnRyaWVzID0gY29tYmluZWRDdXN0b21HcmFtbWFyLmdldEVudHJpZXMoKTtcblxuICBlbnRyaWVzID0gWyAvLy9cbiAgICAuLi5jdXN0b21HcmFtbWFyRW50cmllcyxcbiAgICAuLi5lbnRyaWVzXG4gIF07XG5cbiAgY29uc3QgcnVsZXMgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlID0gUnVsZS5mcm9tRW50cnkoZW50cnkpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlTGV4ZXJGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImVudHJpZXMiLCJGbG9yZW5jZUxleGVyIiwicnVsZXMiLCJydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VMZXhlciIsImZyb21SdWxlcyIsImN1c3RvbUdyYW1tYXJFbnRyaWVzIiwiZ2V0RW50cmllcyIsIm1hcCIsImVudHJ5IiwicnVsZSIsIlJ1bGUiLCJmcm9tRW50cnkiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7SUFLR0Esc0NBQXNDO2VBQXRDQSxzQ0FBc0M7O0lBUXRDQyxnREFBZ0Q7ZUFBaERBLGdEQUFnRDs7SUFPaEUsT0FHRTtlQUhGLFFBR0U7OzsyQkFyQm1CLGNBQWM7NkJBQ0wsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxTQUFTRCxzQ0FBc0MsQ0FBQ0UscUJBQXFCLEVBQUU7SUFDNUUsSUFBTSxBQUFFQyxPQUFPLEdBQUtDLGNBQWEsY0FBQSxDQUF6QkQsT0FBTyxBQUFrQixFQUMzQkUsS0FBSyxHQUFHQyx3Q0FBd0MsQ0FBQ0gsT0FBTyxFQUFFRCxxQkFBcUIsQ0FBQyxFQUNoRkssYUFBYSxHQUFHSCxjQUFhLGNBQUEsQ0FBQ0ksU0FBUyxDQUFDSCxLQUFLLENBQUMsQUFBQztJQUVyRCxPQUFPRSxhQUFhLENBQUM7QUFDdkIsQ0FBQztBQUVNLFNBQVNOLGdEQUFnRCxDQUFDRSxPQUFPLEVBQUVELHFCQUFxQixFQUFFO0lBQy9GLElBQU1HLEtBQUssR0FBR0Msd0NBQXdDLENBQUNILE9BQU8sRUFBRUQscUJBQXFCLENBQUMsRUFDaEZLLGFBQWEsR0FBR0gsY0FBYSxjQUFBLENBQUNJLFNBQVMsQ0FBQ0gsS0FBSyxDQUFDLEFBQUM7SUFFckQsT0FBT0UsYUFBYSxDQUFDO0FBQ3ZCLENBQUM7SUFFRCxRQUdFLEdBSGE7SUFDYlAsc0NBQXNDLEVBQXRDQSxzQ0FBc0M7SUFDdENDLGdEQUFnRCxFQUFoREEsZ0RBQWdEO0NBQ2pEO0FBRUQsU0FBU0ssd0NBQXdDLENBQUNILE9BQU8sRUFBRUQscUJBQXFCLEVBQUU7SUFDaEYsSUFBTU8sb0JBQW9CLEdBQUdQLHFCQUFxQixDQUFDUSxVQUFVLEVBQUUsQUFBQztJQUVoRVAsT0FBTyxHQUFHLEFBQ1IsbUJBQUdNLG9CQUFvQixDQUFwQkEsUUFDSCxtQkFBR04sT0FBTyxDQUFQQSxDQUNKLENBQUM7SUFFRixJQUFNRSxLQUFLLEdBQUdGLE9BQU8sQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBSztRQUM3QixJQUFNQyxJQUFJLEdBQUdDLFlBQUksS0FBQSxDQUFDQyxTQUFTLENBQUNILEtBQUssQ0FBQyxBQUFDO1FBRW5DLE9BQU9DLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQyxBQUFDO0lBRVQsT0FBT1IsS0FBSyxDQUFDO0FBQ2YsQ0FBQyJ9