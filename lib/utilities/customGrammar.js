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
const _customGrammar = /*#__PURE__*/ _interop_require_default(require("../customGrammar"));
const _combined = /*#__PURE__*/ _interop_require_default(require("../customGrammar/combined"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function combinedCustomGrammarFromJSON(json) {
    const customGrammarsJSON = json, customGrammars = customGrammarsJSON.map((customGrammarJSON)=>{
        const json = customGrammarJSON, customGrammar = _customGrammar.default.fromJSON(json);
        return customGrammar;
    });
    customGrammars.reverse(); //
    const combinedCustomGrammar = _combined.default.fromCustomGrammars(customGrammars);
    return combinedCustomGrammar;
}
function combinedCustomGrammarFromNothing() {
    const customGrammars = [], combinedCustomGrammar = _combined.default.fromCustomGrammars(customGrammars);
    return combinedCustomGrammar;
}
function combinedCustomGrammarFromCustomGrammars(customGrammars) {
    customGrammars = [
        ...customGrammars
    ];
    customGrammars.reverse(); ///
    const combinedCustomGrammar = _combined.default.fromCustomGrammars(customGrammars);
    return combinedCustomGrammar;
}
const _default = {
    combinedCustomGrammarFromJSON,
    combinedCustomGrammarFromNothing,
    combinedCustomGrammarFromCustomGrammars
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4uL2N1c3RvbUdyYW1tYXJcIjtcbmltcG9ydCBDb21iaW5lZEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4uL2N1c3RvbUdyYW1tYXIvY29tYmluZWRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21KU09OKGpzb24pIHtcbiAgY29uc3QgY3VzdG9tR3JhbW1hcnNKU09OID0ganNvbiwgIC8vL1xuICAgICAgICBjdXN0b21HcmFtbWFycyA9IGN1c3RvbUdyYW1tYXJzSlNPTi5tYXAoKGN1c3RvbUdyYW1tYXJKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IGN1c3RvbUdyYW1tYXJKU09OLCAvLy9cbiAgICAgICAgICAgICAgICBjdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuICAgICAgICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICAgICAgICB9KTtcblxuICBjdXN0b21HcmFtbWFycy5yZXZlcnNlKCk7IC8vXG5cbiAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gQ29tYmluZWRDdXN0b21HcmFtbWFyLmZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyk7XG5cbiAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nKCkge1xuICBjb25zdCBjdXN0b21HcmFtbWFycyA9IFtdLFxuICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBDb21iaW5lZEN1c3RvbUdyYW1tYXIuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKTtcblxuICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGN1c3RvbUdyYW1tYXJzID0gWyAgLy8vXG4gICAgLi4uY3VzdG9tR3JhbW1hcnNcbiAgXTtcblxuICBjdXN0b21HcmFtbWFycy5yZXZlcnNlKCk7IC8vL1xuXG4gIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpO1xuXG4gIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbUpTT04sXG4gIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21Ob3RoaW5nLFxuICBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tQ3VzdG9tR3JhbW1hcnNcbn07XG4iXSwibmFtZXMiOlsiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbUN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbUpTT04iLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tTm90aGluZyIsImpzb24iLCJjdXN0b21HcmFtbWFyc0pTT04iLCJjdXN0b21HcmFtbWFycyIsIm1hcCIsImN1c3RvbUdyYW1tYXJKU09OIiwiY3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tSlNPTiIsInJldmVyc2UiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQTRCZ0JBO2VBQUFBOztRQXZCQUM7ZUFBQUE7O1FBZ0JBQztlQUFBQTs7UUFtQmhCO2VBQUE7OztzRUF0QzBCO2lFQUNROzs7Ozs7QUFFM0IsU0FBU0QsOEJBQThCRSxJQUFJO0lBQ2hELE1BQU1DLHFCQUFxQkQsTUFDckJFLGlCQUFpQkQsbUJBQW1CRSxHQUFHLENBQUMsQ0FBQ0M7UUFDdkMsTUFBTUosT0FBT0ksbUJBQ1BDLGdCQUFnQkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDUDtRQUU3QyxPQUFPSztJQUNUO0lBRU5ILGVBQWVNLE9BQU8sSUFBSSxFQUFFO0lBRTVCLE1BQU1DLHdCQUF3QkMsaUJBQXFCLENBQUNDLGtCQUFrQixDQUFDVDtJQUV2RSxPQUFPTztBQUNUO0FBRU8sU0FBU1Y7SUFDZCxNQUFNRyxpQkFBaUIsRUFBRSxFQUNuQk8sd0JBQXdCQyxpQkFBcUIsQ0FBQ0Msa0JBQWtCLENBQUNUO0lBRXZFLE9BQU9PO0FBQ1Q7QUFFTyxTQUFTWix3Q0FBd0NLLGNBQWM7SUFDcEVBLGlCQUFpQjtXQUNaQTtLQUNKO0lBRURBLGVBQWVNLE9BQU8sSUFBSSxHQUFHO0lBRTdCLE1BQU1DLHdCQUF3QkMsaUJBQXFCLENBQUNDLGtCQUFrQixDQUFDVDtJQUV2RSxPQUFPTztBQUNUO01BRUEsV0FBZTtJQUNiWDtJQUNBQztJQUNBRjtBQUNGIn0=