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
function lexerFromNothing(Class) {
    var entries = Class.entries, combinedCustomGrammar = _combined.default.fromNothing(), rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), lexer = lexerFromRules(Class, rules);
    return lexer;
}
function lexerFromCombinedCustomGrammar(Class, combinedCustomGrammar) {
    var entries = Class.entries, rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), lexer = lexerFromRules(Class, rules);
    return lexer;
}
function lexerFromEntriesAndCombinedCustomGrammar(Class, entries, combinedCustomGrammar) {
    var rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), lexer = lexerFromRules(Class, rules);
    return lexer;
}
var _default = {
    lexerFromNothing: lexerFromNothing,
    lexerFromCombinedCustomGrammar: lexerFromCombinedCustomGrammar,
    lexerFromEntriesAndCombinedCustomGrammar: lexerFromEntriesAndCombinedCustomGrammar
};
function rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
    var customGrammarEntries = combinedCustomGrammar.getEntries();
    entries = _to_consumable_array(customGrammarEntries).concat(_to_consumable_array(entries));
    var rules = rulesFromEntries(entries);
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IENvbWJpbmVkQ3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9jb21iaW5lZFwiO1xuXG5jb25zdCB7IGxleGVyRnJvbVJ1bGVzLCBydWxlc0Zyb21FbnRyaWVzIH0gPSBsZXhlclV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGxleGVyRnJvbU5vdGhpbmcoQ2xhc3MpIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcbiAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21Ob3RoaW5nKCksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICBsZXhlciA9IGxleGVyRnJvbVJ1bGVzKENsYXNzLCBydWxlcyk7XG5cbiAgcmV0dXJuIGxleGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKENsYXNzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBDbGFzcyxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGxleGVyID0gbGV4ZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICByZXR1cm4gbGV4ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKENsYXNzLCBlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIGxleGVyID0gbGV4ZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKTtcblxuICByZXR1cm4gbGV4ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGV4ZXJGcm9tTm90aGluZyxcbiAgbGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyLFxuICBsZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyXG59O1xuXG5mdW5jdGlvbiBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBjdXN0b21HcmFtbWFyRW50cmllcyA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRFbnRyaWVzKCk7XG5cbiAgZW50cmllcyA9IFsgLy8vXG4gICAgLi4uY3VzdG9tR3JhbW1hckVudHJpZXMsXG4gICAgLi4uZW50cmllc1xuICBdO1xuXG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsibGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyRnJvbU5vdGhpbmciLCJsZXhlckZyb21SdWxlcyIsImxleGVyVXRpbGl0aWVzIiwicnVsZXNGcm9tRW50cmllcyIsIkNsYXNzIiwiZW50cmllcyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21Ob3RoaW5nIiwicnVsZXMiLCJydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXIiLCJjdXN0b21HcmFtbWFyRW50cmllcyIsImdldEVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdDQTtlQUFBOztRQWZnQkE7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQWpCQUM7ZUFBQUE7OzsyQkFOZTsrREFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFRQyxpQkFBcUNDLDJCQUFjLENBQW5ERCxnQkFBZ0JFLG1CQUFxQkQsMkJBQWMsQ0FBbkNDO0FBRWpCLFNBQVNILGlCQUFpQkksS0FBSztJQUNwQyxJQUFNLEFBQUVDLFVBQVlELE1BQVpDLFNBQ0ZDLHdCQUF3QkMsaUJBQXFCLENBQUNDLFdBQVcsSUFDekRDLFFBQVFDLHlDQUF5Q0wsU0FBU0Msd0JBQzFESyxRQUFRVixlQUFlRyxPQUFPSztJQUVwQyxPQUFPRTtBQUNUO0FBRU8sU0FBU2IsK0JBQStCTSxLQUFLLEVBQUVFLHFCQUFxQjtJQUN6RSxJQUFNLEFBQUVELFVBQVlELE1BQVpDLFNBQ0ZJLFFBQVFDLHlDQUF5Q0wsU0FBU0Msd0JBQzFESyxRQUFRVixlQUFlRyxPQUFPSztJQUVwQyxPQUFPRTtBQUNUO0FBRU8sU0FBU1oseUNBQXlDSyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMscUJBQXFCO0lBQzVGLElBQU1HLFFBQVFDLHlDQUF5Q0wsU0FBU0Msd0JBQzFESyxRQUFRVixlQUFlRyxPQUFPSztJQUVwQyxPQUFPRTtBQUNUO0lBRUEsV0FBZTtJQUNiWCxrQkFBQUE7SUFDQUYsZ0NBQUFBO0lBQ0FDLDBDQUFBQTtBQUNGO0FBRUEsU0FBU1cseUNBQXlDTCxPQUFPLEVBQUVDLHFCQUFxQjtJQUM5RSxJQUFNTSx1QkFBdUJOLHNCQUFzQk8sVUFBVTtJQUU3RFIsVUFBVSxBQUNSLHFCQUFHTyw2QkFDSCxxQkFBR1A7SUFHTCxJQUFNSSxRQUFRTixpQkFBaUJFO0lBRS9CLE9BQU9JO0FBQ1QifQ==