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
    get combinedCustomGrammarFromCustomGrammars () {
        return combinedCustomGrammarFromCustomGrammars;
    },
    get combinedCustomGrammarFromJSON () {
        return combinedCustomGrammarFromJSON;
    },
    get combinedCustomGrammarFromNothing () {
        return combinedCustomGrammarFromNothing;
    },
    get default () {
        return _default;
    }
});
var _customGrammar = /*#__PURE__*/ _interop_require_default(require("../customGrammar"));
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
function combinedCustomGrammarFromJSON(json) {
    var customGrammarsJSON = json, customGrammars = customGrammarsJSON.map(function(customGrammarJSON) {
        var _$json = customGrammarJSON, customGrammar = _customGrammar.default.fromJSON(_$json);
        return customGrammar;
    });
    customGrammars.reverse(); //
    var combinedCustomGrammar = _combined.default.fromCustomGrammars(customGrammars);
    return combinedCustomGrammar;
}
function combinedCustomGrammarFromNothing() {
    var customGrammars = [], combinedCustomGrammar = _combined.default.fromCustomGrammars(customGrammars);
    return combinedCustomGrammar;
}
function combinedCustomGrammarFromCustomGrammars(customGrammars) {
    customGrammars = _to_consumable_array(customGrammars);
    customGrammars.reverse(); ///
    var combinedCustomGrammar = _combined.default.fromCustomGrammars(customGrammars);
    return combinedCustomGrammar;
}
var _default = {
    combinedCustomGrammarFromJSON: combinedCustomGrammarFromJSON,
    combinedCustomGrammarFromNothing: combinedCustomGrammarFromNothing,
    combinedCustomGrammarFromCustomGrammars: combinedCustomGrammarFromCustomGrammars
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4uL2N1c3RvbUdyYW1tYXJcIjtcbmltcG9ydCBDb21iaW5lZEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4uL2N1c3RvbUdyYW1tYXIvY29tYmluZWRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21KU09OKGpzb24pIHtcbiAgY29uc3QgY3VzdG9tR3JhbW1hcnNKU09OID0ganNvbiwgIC8vL1xuICAgICAgICBjdXN0b21HcmFtbWFycyA9IGN1c3RvbUdyYW1tYXJzSlNPTi5tYXAoKGN1c3RvbUdyYW1tYXJKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IGN1c3RvbUdyYW1tYXJKU09OLCAvLy9cbiAgICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICAgICAgICB9KTtcblxuICBjdXN0b21HcmFtbWFycy5yZXZlcnNlKCk7IC8vXG5cbiAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyk7XG5cbiAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nKCkge1xuICBjb25zdCBjdXN0b21HcmFtbWFycyA9IFtdLFxuICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKTtcblxuICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGN1c3RvbUdyYW1tYXJzID0gWyAgLy8vXG4gICAgLi4uY3VzdG9tR3JhbW1hcnNcbiAgXTtcblxuICBjdXN0b21HcmFtbWFycy5yZXZlcnNlKCk7IC8vL1xuXG4gIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpO1xuXG4gIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbUpTT04sXG4gIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nLFxuICBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tQ3VzdG9tR3JhbW1hcnNcbn07XG4iXSwibmFtZXMiOlsiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbUN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbUpTT04iLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tTm90aGluZyIsImpzb24iLCJjdXN0b21HcmFtbWFyc0pTT04iLCJjdXN0b21HcmFtbWFycyIsIm1hcCIsImN1c3RvbUdyYW1tYXJKU09OIiwiY3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tSlNPTiIsInJldmVyc2UiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTRCZ0JBO2VBQUFBOztRQXZCQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUFtQmhCO2VBQUE7OztvRUF0QzBCOytEQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLFNBQVNELDhCQUE4QkUsSUFBSTtJQUNoRCxJQUFNQyxxQkFBcUJELE1BQ3JCRSxpQkFBaUJELG1CQUFtQkUsR0FBRyxDQUFDLFNBQUNDO1FBQ3ZDLElBQU1KLFNBQU9JLG1CQUNQQyxnQkFBZ0JDLHNCQUFhLENBQUNDLFFBQVEsQ0FBQ1A7UUFFN0MsT0FBT0s7SUFDVDtJQUVOSCxlQUFlTSxPQUFPLElBQUksRUFBRTtJQUU1QixJQUFNQyx3QkFBd0JDLGlCQUFxQixDQUFDQyxrQkFBa0IsQ0FBQ1Q7SUFFdkUsT0FBT087QUFDVDtBQUVPLFNBQVNWO0lBQ2QsSUFBTUcsaUJBQWlCLEVBQUUsRUFDbkJPLHdCQUF3QkMsaUJBQXFCLENBQUNDLGtCQUFrQixDQUFDVDtJQUV2RSxPQUFPTztBQUNUO0FBRU8sU0FBU1osd0NBQXdDSyxjQUFjO0lBQ3BFQSxpQkFDRSxxQkFBR0E7SUFHTEEsZUFBZU0sT0FBTyxJQUFJLEdBQUc7SUFFN0IsSUFBTUMsd0JBQXdCQyxpQkFBcUIsQ0FBQ0Msa0JBQWtCLENBQUNUO0lBRXZFLE9BQU9PO0FBQ1Q7SUFFQSxXQUFlO0lBQ2JYLCtCQUFBQTtJQUNBQyxrQ0FBQUE7SUFDQUYseUNBQUFBO0FBQ0YifQ==