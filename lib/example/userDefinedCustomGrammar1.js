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
var name = _grammarNames.USER_DEFINED_CUSTOM_GRAMMAR_NAME_1, lexicalPattern = "", termBNF = "term ::= _1 ;", expressionBNF = 'expression ::= arithmeticExpression ;\n      \n      arithmeticExpression ::= arithmeticExpression "-" arithmeticExpression\n      \n                             | arithmeticTerm ;\n      \n      ', statementBNF = "", metastatementBNF = "subproof ::= _ ;", json = {
    name: name,
    lexicalPattern: lexicalPattern,
    termBNF: termBNF,
    expressionBNF: expressionBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
}, userDefinedCustomGrammar1 = _index.CustomGrammar.fromJSON(json);
var _default = userDefinedCustomGrammar1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCB7IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEgfSBmcm9tIFwiLi4vZ3JhbW1hck5hbWVzXCI7XG5cbmNvbnN0IG5hbWUgPSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRV8xLFxuICAgICAgbGV4aWNhbFBhdHRlcm4gPSBgYCxcbiAgICAgIHRlcm1CTkYgPSBgdGVybSA6Oj0gXzEgO2AsXG4gICAgICBleHByZXNzaW9uQk5GID0gYGV4cHJlc3Npb24gOjo9IGFyaXRobWV0aWNFeHByZXNzaW9uIDtcbiAgICAgIFxuICAgICAgYXJpdGhtZXRpY0V4cHJlc3Npb24gOjo9IGFyaXRobWV0aWNFeHByZXNzaW9uIFwiLVwiIGFyaXRobWV0aWNFeHByZXNzaW9uXG4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhcml0aG1ldGljVGVybSA7XG4gICAgICBcbiAgICAgIGAsXG4gICAgICBzdGF0ZW1lbnRCTkYgPSBgYCxcbiAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBgc3VicHJvb2YgOjo9IF8gO2AsXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBsZXhpY2FsUGF0dGVybixcbiAgICAgICAgdGVybUJORixcbiAgICAgICAgZXhwcmVzc2lvbkJORixcbiAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICBtZXRhc3RhdGVtZW50Qk5GXG4gICAgICB9LFxuICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyMSA9IEN1c3RvbUdyYW1tYXIuZnJvbUpTT04oanNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcjE7XG4iXSwibmFtZXMiOlsibmFtZSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FXzEiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImpzb24iLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIxIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBNEJiLFNBQXlDOzs7ZUFBekMsUUFBeUM7OztxQkExQlgsVUFBVTs0QkFFVyxpQkFBaUI7QUFFcEUsSUFBTUEsSUFBSSxHQUFHQyxhQUFrQyxtQ0FBQSxFQUN6Q0MsY0FBYyxHQUFJLEVBQUEsQUFBQyxFQUNuQkMsT0FBTyxHQUFJLGVBQWEsQUFBQyxFQUN6QkMsYUFBYSxHQUFJLHNNQU1qQixBQUFDLEVBQ0RDLFlBQVksR0FBSSxFQUFBLEFBQUMsRUFDakJDLGdCQUFnQixHQUFJLGtCQUFnQixBQUFDLEVBQ3JDQyxJQUFJLEdBQUc7SUFDTFAsSUFBSSxFQUFKQSxJQUFJO0lBQ0pFLGNBQWMsRUFBZEEsY0FBYztJQUNkQyxPQUFPLEVBQVBBLE9BQU87SUFDUEMsYUFBYSxFQUFiQSxhQUFhO0lBQ2JDLFlBQVksRUFBWkEsWUFBWTtJQUNaQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtDQUNqQixFQUNERSx5QkFBeUIsR0FBR0MsTUFBYSxjQUFBLENBQUNDLFFBQVEsQ0FBQ0gsSUFBSSxDQUFDLEFBQUM7SUFFL0QsUUFBeUMsR0FBMUJDLHlCQUF5QiJ9