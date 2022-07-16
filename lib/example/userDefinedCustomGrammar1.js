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
var _index = require("../index");
var _grammarNames = require("../grammarNames");
var name = _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1, lexicalPattern = "", typeBNF = "type ::= _ ;", termBNF = "term ::= _ ;", expressionBNF = 'expression ::= arithmeticExpression ;\n      \n      arithmeticExpression ::= arithmeticExpression "-" arithmeticExpression\n      \n                             | arithmeticTerm ;\n      \n      ', statementBNF = "", metastatementBNF = "subproof ::= _ ;", json = {
    name: name,
    lexicalPattern: lexicalPattern,
    typeBNF: typeBNF,
    termBNF: termBNF,
    expressionBNF: expressionBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
}, userDefinedCustomGrammar1 = _index.CustomGrammar.fromJSON(json);
var _default = userDefinedCustomGrammar1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEgfSBmcm9tIFwiLi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IG5hbWUgPSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLFxuICAgICAgbGV4aWNhbFBhdHRlcm4gPSBgYCxcbiAgICAgIHR5cGVCTkYgPSBgdHlwZSA6Oj0gXyA7YCxcbiAgICAgIHRlcm1CTkYgPSBgdGVybSA6Oj0gXyA7YCxcbiAgICAgIGV4cHJlc3Npb25CTkYgPSBgZXhwcmVzc2lvbiA6Oj0gYXJpdGhtZXRpY0V4cHJlc3Npb24gO1xuICAgICAgXG4gICAgICBhcml0aG1ldGljRXhwcmVzc2lvbiA6Oj0gYXJpdGhtZXRpY0V4cHJlc3Npb24gXCItXCIgYXJpdGhtZXRpY0V4cHJlc3Npb25cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFyaXRobWV0aWNUZXJtIDtcbiAgICAgIFxuICAgICAgYCxcbiAgICAgIHN0YXRlbWVudEJORiA9IGBgLFxuICAgICAgbWV0YXN0YXRlbWVudEJORiA9IGBzdWJwcm9vZiA6Oj0gXyA7YCxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxleGljYWxQYXR0ZXJuLFxuICAgICAgICB0eXBlQk5GLFxuICAgICAgICB0ZXJtQk5GLFxuICAgICAgICBleHByZXNzaW9uQk5GLFxuICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgIG1ldGFzdGF0ZW1lbnRCTkZcbiAgICAgIH0sXG4gICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMTtcbiJdLCJuYW1lcyI6WyJuYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUVfMSIsImxleGljYWxQYXR0ZXJuIiwidHlwZUJORiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImpzb24iLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBOEJiLFNBQXlDOzs7ZUFBekMsUUFBeUM7OztxQkE1QlgsVUFBVTs0QkFFVyxpQkFBaUI7QUFFcEUsSUFBTUEsSUFBSSxHQUFHQyxhQUFrQyxtQ0FBQSxFQUN6Q0MsY0FBYyxHQUFJLEVBQUEsQUFBQyxFQUNuQkMsT0FBTyxHQUFJLGNBQVksQUFBQyxFQUN4QkMsT0FBTyxHQUFJLGNBQVksQUFBQyxFQUN4QkMsYUFBYSxHQUFJLHNNQU1qQixBQUFDLEVBQ0RDLFlBQVksR0FBSSxFQUFBLEFBQUMsRUFDakJDLGdCQUFnQixHQUFJLGtCQUFnQixBQUFDLEVBQ3JDQyxJQUFJLEdBQUc7SUFDTFIsSUFBSSxFQUFKQSxJQUFJO0lBQ0pFLGNBQWMsRUFBZEEsY0FBYztJQUNkQyxPQUFPLEVBQVBBLE9BQU87SUFDUEMsT0FBTyxFQUFQQSxPQUFPO0lBQ1BDLGFBQWEsRUFBYkEsYUFBYTtJQUNiQyxZQUFZLEVBQVpBLFlBQVk7SUFDWkMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7Q0FDakIsRUFDREUseUJBQXlCLEdBQUdDLE1BQWEsY0FBQSxDQUFDQyxRQUFRLENBQUNILElBQUksQ0FBQyxBQUFDO0lBRS9ELFFBQXlDLEdBQTFCQyx5QkFBeUIifQ==