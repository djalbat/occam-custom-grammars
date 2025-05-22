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
    get nominalLexerFromCombinedCustomGrammar () {
        return nominalLexerFromCombinedCustomGrammar;
    },
    get nominalLexerFromEntriesAndCombinedCustomGrammar () {
        return nominalLexerFromEntriesAndCombinedCustomGrammar;
    },
    get nominalLexerFromNothing () {
        return nominalLexerFromNothing;
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
function nominalLexerFromNothing() {
    var entries = _occamgrammars.NominalLexer.entries, combinedCustomGrammar = _combined.default.fromNothing(), rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), nominalLexer = lexerFromRules(_occamgrammars.NominalLexer, rules);
    return nominalLexer;
}
function nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar) {
    var entries = _occamgrammars.NominalLexer.entries, rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), nominalLexer = lexerFromRules(_occamgrammars.NominalLexer, rules);
    return nominalLexer;
}
function nominalLexerFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
    var rules = rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar), nominalLexer = lexerFromRules(_occamgrammars.NominalLexer, rules);
    return nominalLexer;
}
var _default = {
    nominalLexerFromNothing: nominalLexerFromNothing,
    nominalLexerFromCombinedCustomGrammar: nominalLexerFromCombinedCustomGrammar,
    nominalLexerFromEntriesAndCombinedCustomGrammar: nominalLexerFromEntriesAndCombinedCustomGrammar
};
function rulesFromEntriesAndCombinedCustomGrammar(entries, combinedCustomGrammar) {
    var customGrammarEntries = combinedCustomGrammar.getEntries();
    entries = _to_consumable_array(customGrammarEntries).concat(_to_consumable_array(entries));
    var rules = rulesFromEntries(entries);
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbGV4ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb21pbmFsTGV4ZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IGxleGVyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuXG5pbXBvcnQgQ29tYmluZWRDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyL2NvbWJpbmVkXCI7XG5cbmNvbnN0IHsgbGV4ZXJGcm9tUnVsZXMsIHJ1bGVzRnJvbUVudHJpZXMgfSA9IGxleGVyVXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9taW5hbExleGVyRnJvbU5vdGhpbmcoKSB7XG4gIGNvbnN0IHsgZW50cmllcyB9ID0gTm9taW5hbExleGVyLFxuICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIG5vbWluYWxMZXhlciA9IGxleGVyRnJvbVJ1bGVzKE5vbWluYWxMZXhlciwgcnVsZXMpO1xuXG4gIHJldHVybiBub21pbmFsTGV4ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCB7IGVudHJpZXMgfSA9IE5vbWluYWxMZXhlcixcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIG5vbWluYWxMZXhlciA9IGxleGVyRnJvbVJ1bGVzKE5vbWluYWxMZXhlciwgcnVsZXMpO1xuXG4gIHJldHVybiBub21pbmFsTGV4ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub21pbmFsTGV4ZXJGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hcihlbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpIHtcbiAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgIG5vbWluYWxMZXhlciA9IGxleGVyRnJvbVJ1bGVzKE5vbWluYWxMZXhlciwgcnVsZXMpO1xuXG4gIHJldHVybiBub21pbmFsTGV4ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbm9taW5hbExleGVyRnJvbU5vdGhpbmcsXG4gIG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIsXG4gIG5vbWluYWxMZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyXG59O1xuXG5mdW5jdGlvbiBydWxlc0Zyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyKGVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcikge1xuICBjb25zdCBjdXN0b21HcmFtbWFyRW50cmllcyA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hci5nZXRFbnRyaWVzKCk7XG5cbiAgZW50cmllcyA9IFsgLy8vXG4gICAgLi4uY3VzdG9tR3JhbW1hckVudHJpZXMsXG4gICAgLi4uZW50cmllc1xuICBdO1xuXG4gIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gcnVsZXM7XG59XG4iXSwibmFtZXMiOlsibm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxMZXhlckZyb21FbnRyaWVzQW5kQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibm9taW5hbExleGVyRnJvbU5vdGhpbmciLCJsZXhlckZyb21SdWxlcyIsImxleGVyVXRpbGl0aWVzIiwicnVsZXNGcm9tRW50cmllcyIsImVudHJpZXMiLCJOb21pbmFsTGV4ZXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tTm90aGluZyIsInJ1bGVzIiwicnVsZXNGcm9tRW50cmllc0FuZENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxMZXhlciIsImN1c3RvbUdyYW1tYXJFbnRyaWVzIiwiZ2V0RW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBaUNBO2VBQUE7O1FBZmdCQTtlQUFBQTs7UUFRQUM7ZUFBQUE7O1FBakJBQztlQUFBQTs7OzZCQVBhOzJCQUNFOytEQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQVFDLGlCQUFxQ0MsMkJBQWMsQ0FBbkRELGdCQUFnQkUsbUJBQXFCRCwyQkFBYyxDQUFuQ0M7QUFFakIsU0FBU0g7SUFDZCxJQUFNLEFBQUVJLFVBQVlDLDJCQUFZLENBQXhCRCxTQUNGRSx3QkFBd0JDLGlCQUFxQixDQUFDQyxXQUFXLElBQ3pEQyxRQUFRQyx5Q0FBeUNOLFNBQVNFLHdCQUMxREssZUFBZVYsZUFBZUksMkJBQVksRUFBRUk7SUFFbEQsT0FBT0U7QUFDVDtBQUVPLFNBQVNiLHNDQUFzQ1EscUJBQXFCO0lBQ3pFLElBQU0sQUFBRUYsVUFBWUMsMkJBQVksQ0FBeEJELFNBQ0ZLLFFBQVFDLHlDQUF5Q04sU0FBU0Usd0JBQzFESyxlQUFlVixlQUFlSSwyQkFBWSxFQUFFSTtJQUVsRCxPQUFPRTtBQUNUO0FBRU8sU0FBU1osZ0RBQWdESyxPQUFPLEVBQUVFLHFCQUFxQjtJQUM1RixJQUFNRyxRQUFRQyx5Q0FBeUNOLFNBQVNFLHdCQUMxREssZUFBZVYsZUFBZUksMkJBQVksRUFBRUk7SUFFbEQsT0FBT0U7QUFDVDtJQUVBLFdBQWU7SUFDYlgseUJBQUFBO0lBQ0FGLHVDQUFBQTtJQUNBQyxpREFBQUE7QUFDRjtBQUVBLFNBQVNXLHlDQUF5Q04sT0FBTyxFQUFFRSxxQkFBcUI7SUFDOUUsSUFBTU0sdUJBQXVCTixzQkFBc0JPLFVBQVU7SUFFN0RULFVBQVUsQUFDUixxQkFBR1EsNkJBQ0gscUJBQUdSO0lBR0wsSUFBTUssUUFBUU4saUJBQWlCQztJQUUvQixPQUFPSztBQUNUIn0=