"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get lexerFromCombinedCustomGrammar () {
        return lexerFromCombinedCustomGrammar;
    },
    get lexerFromEntriesAndCombinedCustomGrammar () {
        return lexerFromEntriesAndCombinedCustomGrammar;
    },
    get lexerFromNothing () {
        return lexerFromNothing;
    }
});
const _occamlexers = require("occam-lexers");
const _combined = /*#__PURE__*/ _interop_require_default(require("../customGrammar/combined"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { lexerFromRules, rulesFromEntries } = _occamlexers.lexerUtilities;
function lexerFromNothing(Class) {
    const { entries } = Class, combinedCustomGrammar = _combined.default.fromNothing(), rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), lexer = lexerFromRules(Class, rules);
    return lexer;
}
function lexerFromCombinedCustomGrammar(Class, combinedCustomGrammar) {
    const { entries } = Class, rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), lexer = lexerFromRules(Class, rules);
    return lexer;
}
function lexerFromEntriesAndCombinedCustomGrammar(Class, entries, combinedCustomGrammar) {
    const rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), lexer = lexerFromRules(Class, rules);
    return lexer;
}
const _default = {
    lexerFromNothing,
    lexerFromCombinedCustomGrammar,
    lexerFromEntriesAndCombinedCustomGrammar
};
function rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
    const customGrammarEntries = combinedCustomGrammar.getEntries();
    entries = [
        ...customGrammarEntries,
        ...entries
    ];
    const rules = rulesFromEntries(entries);
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbWJpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9jb21iaW5lZFwiO1xuXG5jb25zdCB7IGxleGVyRnJvbVJ1bGVzLCBydWxlc0Zyb21FbnRyaWVzIH0gPSBsZXhlclV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGxleGVyRnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcbiAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBsZXhlciA9IGxleGVyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgcmV0dXJuIGxleGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKENsYXNzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGxleGVyID0gbGV4ZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICByZXR1cm4gbGV4ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKENsYXNzLCBlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGxleGVyID0gbGV4ZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICByZXR1cm4gbGV4ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGV4ZXJGcm9tTm90aGluZyxcbiAgbGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyLFxuICBsZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyXG59O1xuXG5mdW5jdGlvbiBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBjdXN0b21HcmFtbWFyRW50cmllcyA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRFbnRyaWVzKCk7XG5cbiAgZW50cmllcyA9IFsgLy8vXG4gICAgLi4uY3VzdG9tR3JhbW1hckVudHJpZXMsXG4gICAgLi4uZW50cmllc1xuICBdO1xuXG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsibGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyRnJvbU5vdGhpbmciLCJsZXhlckZyb21SdWxlcyIsInJ1bGVzRnJvbUVudHJpZXMiLCJsZXhlclV0aWxpdGllcyIsIkNsYXNzIiwiZW50cmllcyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21Ob3RoaW5nIiwicnVsZXMiLCJydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXIiLCJjdXN0b21HcmFtbWFyRW50cmllcyIsImdldEVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdDQTtlQUFBOztRQWZnQkE7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQWpCQUM7ZUFBQUE7Ozs2QkFOZTtpRUFFRzs7Ozs7O0FBRWxDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHQywyQkFBYztBQUVwRCxTQUFTSCxpQkFBaUJJLEtBQUs7SUFDcEMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsT0FDZEUsd0JBQXdCQyxpQkFBcUIsQ0FBQ0MsV0FBVyxJQUN6REMsUUFBUUMseUNBQXlDTCxTQUFTQyx3QkFDMURLLFFBQVFWLGVBQWVHLE9BQU9LO0lBRXBDLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTYiwrQkFBK0JNLEtBQUssRUFBRUUscUJBQXFCO0lBQ3pFLE1BQU0sRUFBRUQsT0FBTyxFQUFFLEdBQUdELE9BQ2RLLFFBQVFDLHlDQUF5Q0wsU0FBU0Msd0JBQzFESyxRQUFRVixlQUFlRyxPQUFPSztJQUVwQyxPQUFPRTtBQUNUO0FBRU8sU0FBU1oseUNBQXlDSyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMscUJBQXFCO0lBQzVGLE1BQU1HLFFBQVFDLHlDQUF5Q0wsU0FBU0Msd0JBQzFESyxRQUFRVixlQUFlRyxPQUFPSztJQUVwQyxPQUFPRTtBQUNUO01BRUEsV0FBZTtJQUNiWDtJQUNBRjtJQUNBQztBQUNGO0FBRUEsU0FBU1cseUNBQXlDTCxPQUFPLEVBQUVDLHFCQUFxQjtJQUM5RSxNQUFNTSx1QkFBdUJOLHNCQUFzQk8sVUFBVTtJQUU3RFIsVUFBVTtXQUNMTztXQUNBUDtLQUNKO0lBRUQsTUFBTUksUUFBUVAsaUJBQWlCRztJQUUvQixPQUFPSTtBQUNUIn0=