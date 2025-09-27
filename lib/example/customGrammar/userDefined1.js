"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = require("../../index");
var _grammarNames = require("../grammarNames");
var name = _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1, termBNF = "", statementBNF = '\n\n             statement  ::=   "\xac"<NO_WHITESPACE>metaArgument\n\n                          |   metaArgument ( "∧" | "∨" | "⇒" | "iff" ) metaArgument\n\n                          ;\n\n', typeVocabulary = "", symbolVocabulary = "iff\n⇒\n∧\n∨\n\xac\n", json = {
    name: name,
    termBNF: termBNF,
    statementBNF: statementBNF,
    typeVocabulary: typeVocabulary,
    symbolVocabulary: symbolVocabulary
}, userDefinedCustomGrammar1 = _index.CustomGrammar.fromJSON(json);
var _default = userDefinedCustomGrammar1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2N1c3RvbUdyYW1tYXIvdXNlckRlZmluZWQxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDdXN0b21HcmFtbWFyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgeyBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xIH0gZnJvbSBcIi4uL2dyYW1tYXJOYW1lc1wiO1xuXG5jb25zdCBuYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSxcbiAgICAgIHRlcm1CTkYgPSBcIlwiLFxuICAgICAgc3RhdGVtZW50Qk5GID0gYFxuXG4gICAgICAgICAgICAgc3RhdGVtZW50ICA6Oj0gICBcIsKsXCI8Tk9fV0hJVEVTUEFDRT5tZXRhQXJndW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YUFyZ3VtZW50ICggXCLiiKdcIiB8IFwi4oioXCIgfCBcIuKHklwiIHwgXCJpZmZcIiApIG1ldGFBcmd1bWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuYCxcbiAgICAgIHR5cGVWb2NhYnVsYXJ5ID0gXCJcIixcbiAgICAgIHN5bWJvbFZvY2FidWxhcnkgPSBgaWZmXG7ih5JcbuKIp1xu4oioXG7CrFxuYCxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgdHlwZVZvY2FidWxhcnksXG4gICAgICAgIHN5bWJvbFZvY2FidWxhcnlcbiAgICAgIH0sXG4gICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMTtcbiJdLCJuYW1lcyI6WyJuYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSIsInRlcm1CTkYiLCJzdGF0ZW1lbnRCTkYiLCJ0eXBlVm9jYWJ1bGFyeSIsInN5bWJvbFZvY2FidWxhcnkiLCJqc29uIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyMSIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUNBOzs7ZUFBQTs7O3FCQS9COEI7NEJBRXFCO0FBRW5ELElBQU1BLE9BQU9DLGdEQUFrQyxFQUN6Q0MsVUFBVSxJQUNWQyxlQUFlLGlNQVNmQyxpQkFBaUIsSUFDakJDLG1CQUFtQix3QkFNbkJDLE9BQU87SUFDTE4sTUFBQUE7SUFDQUUsU0FBQUE7SUFDQUMsY0FBQUE7SUFDQUMsZ0JBQUFBO0lBQ0FDLGtCQUFBQTtBQUNGLEdBQ0FFLDRCQUE0QkMsb0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtJQUV6RCxXQUFlQyJ9