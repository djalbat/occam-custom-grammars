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
var name = _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1, typePattern = "", operatorPattern = "", typeBNF = "type ::= _ ;", termBNF = "term ::= _ ;", expressionBNF = 'expression ::= arithmeticExpression ;\n      \n      arithmeticExpression ::= arithmeticExpression "-" arithmeticExpression\n      \n                             | arithmeticTerm ;\n      \n      ', statementBNF = "", metastatementBNF = "subproof ::= _ ;", json = {
    name: name,
    typePattern: typePattern,
    operatorPattern: operatorPattern,
    typeBNF: typeBNF,
    termBNF: termBNF,
    expressionBNF: expressionBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
}, userDefinedCustomGrammar1 = _index.CustomGrammar.fromJSON(json);
var _default = userDefinedCustomGrammar1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEgfSBmcm9tIFwiLi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IG5hbWUgPSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLFxuICAgICAgdHlwZVBhdHRlcm4gPSBcIlwiLFxuICAgICAgb3BlcmF0b3JQYXR0ZXJuID0gXCJcIixcbiAgICAgIHR5cGVCTkYgPSBgdHlwZSA6Oj0gXyA7YCxcbiAgICAgIHRlcm1CTkYgPSBgdGVybSA6Oj0gXyA7YCxcbiAgICAgIGV4cHJlc3Npb25CTkYgPSBgZXhwcmVzc2lvbiA6Oj0gYXJpdGhtZXRpY0V4cHJlc3Npb24gO1xuICAgICAgXG4gICAgICBhcml0aG1ldGljRXhwcmVzc2lvbiA6Oj0gYXJpdGhtZXRpY0V4cHJlc3Npb24gXCItXCIgYXJpdGhtZXRpY0V4cHJlc3Npb25cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFyaXRobWV0aWNUZXJtIDtcbiAgICAgIFxuICAgICAgYCxcbiAgICAgIHN0YXRlbWVudEJORiA9IGBgLFxuICAgICAgbWV0YXN0YXRlbWVudEJORiA9IGBzdWJwcm9vZiA6Oj0gXyA7YCxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICBvcGVyYXRvclBhdHRlcm4sXG4gICAgICAgIHR5cGVCTkYsXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIGV4cHJlc3Npb25CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgbWV0YXN0YXRlbWVudEJORlxuICAgICAgfSxcbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxO1xuIl0sIm5hbWVzIjpbIm5hbWUiLCJVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xIiwidHlwZVBhdHRlcm4iLCJvcGVyYXRvclBhdHRlcm4iLCJ0eXBlQk5GIiwidGVybUJORiIsImV4cHJlc3Npb25CTkYiLCJzdGF0ZW1lbnRCTkYiLCJtZXRhc3RhdGVtZW50Qk5GIiwianNvbiIsInVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFnQ2IsU0FBeUM7OztlQUF6QyxRQUF5Qzs7O3FCQTlCWCxVQUFVOzRCQUVXLGlCQUFpQjtBQUVwRSxJQUFNQSxJQUFJLEdBQUdDLGFBQWtDLG1DQUFBLEVBQ3pDQyxXQUFXLEdBQUcsRUFBRSxFQUNoQkMsZUFBZSxHQUFHLEVBQUUsRUFDcEJDLE9BQU8sR0FBSSxjQUFZLEFBQUMsRUFDeEJDLE9BQU8sR0FBSSxjQUFZLEFBQUMsRUFDeEJDLGFBQWEsR0FBSSxzTUFNakIsQUFBQyxFQUNEQyxZQUFZLEdBQUksRUFBQSxBQUFDLEVBQ2pCQyxnQkFBZ0IsR0FBSSxrQkFBZ0IsQUFBQyxFQUNyQ0MsSUFBSSxHQUFHO0lBQ0xULElBQUksRUFBSkEsSUFBSTtJQUNKRSxXQUFXLEVBQVhBLFdBQVc7SUFDWEMsZUFBZSxFQUFmQSxlQUFlO0lBQ2ZDLE9BQU8sRUFBUEEsT0FBTztJQUNQQyxPQUFPLEVBQVBBLE9BQU87SUFDUEMsYUFBYSxFQUFiQSxhQUFhO0lBQ2JDLFlBQVksRUFBWkEsWUFBWTtJQUNaQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtDQUNqQixFQUNERSx5QkFBeUIsR0FBR0MsTUFBYSxjQUFBLENBQUNDLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDLEFBQUM7SUFFL0QsUUFBeUMsR0FBMUJDLHlCQUF5QiJ9