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
    default: function() {
        return _default;
    },
    operatorPattern: function() {
        return operatorPattern;
    },
    statementBNF: function() {
        return statementBNF;
    },
    symbolPattern: function() {
        return symbolPattern;
    },
    termBNF: function() {
        return termBNF;
    },
    typePattern: function() {
        return typePattern;
    }
});
var _customGrammar = /*#__PURE__*/ _interop_require_default(require("../customGrammar"));
var _grammarNames = require("../grammarNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typePattern = "Object";
var symbolPattern = "";
var operatorPattern = "⊧|is|in|for|defined|contained|not";
var termBNF = 'term                                 ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement                            ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion   \n                                                  \n                                       |  subproofAssertion         \n       \n                                       |  judgement\n\n                                       |  metavariable substitution?\n\n                                       ;\n\nequality                             ::=  term "=" term ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  term "is" "not"? "defined" ;\n\ncontainedAssertion                   ::=  term "is" "not"? "contained" "in" statement ;\n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\njudgement                            ::=  statement "⊧" frame ;\n\nframe                                ::=  ( declaration | ( "..."<NO_WHITESPACE>statement ) ) ( "," ( declaration | ( "..."<NO_WHITESPACE>statement ) ) )* ;\n \ndeclaration                          ::=  reference "::" statement ;\n\nsubstitution                         ::=  <NO_WHITESPACE>"[" term "for" term "]" ;';
var name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    name: name,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    operatorPattern: operatorPattern,
    termBNF: termBNF,
    statementBNF: statementBNF
};
var defaultCustomGrammar = _customGrammar.default.fromJSON(json);
var _default = defaultCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiqd8aXN8aW58Zm9yfGRlZmluZWR8Y29udGFpbmVkfG5vdFwiO1xuXG5leHBvcnQgY29uc3QgdGVybUJORiA9IGB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB2YXJpYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO2A7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRCTkYgPSBgc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgbWV0YUFyZ3VtZW50IFwiKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVxdWFsaXR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHR5cGVBc3NlcnRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZGVmaW5lZEFzc2VydGlvbiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGNvbnRhaW5lZEFzc2VydGlvbiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBqdWRnZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YXZhcmlhYmxlIHN1YnN0aXR1dGlvbj9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5lcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICB0ZXJtIFwiPVwiIHRlcm0gO1xuXG50eXBlQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICB0ZXJtIFwiOlwiIHR5cGUgO1xuXG5kZWZpbmVkQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICB0ZXJtIFwiaXNcIiBcIm5vdFwiPyBcImRlZmluZWRcIiA7XG5cbmNvbnRhaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCJpc1wiIFwibm90XCI/IFwiY29udGFpbmVkXCIgXCJpblwiIHN0YXRlbWVudCA7XG5cbnN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHN0YXRlbWVudCAoIFwiLFwiIHN0YXRlbWVudCApKiBcIl1cIiBcIi4uLlwiIHN0YXRlbWVudCA7XG5cbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHN0YXRlbWVudCBcIuKKp1wiIGZyYW1lIDtcblxuZnJhbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBkZWNsYXJhdGlvbiB8ICggXCIuLi5cIjxOT19XSElURVNQQUNFPnN0YXRlbWVudCApICkgKCBcIixcIiAoIGRlY2xhcmF0aW9uIHwgKCBcIi4uLlwiPE5PX1dISVRFU1BBQ0U+c3RhdGVtZW50ICkgKSApKiA7XG4gXG5kZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICByZWZlcmVuY2UgXCI6OlwiIHN0YXRlbWVudCA7XG5cbnN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiW1wiIHRlcm0gXCJmb3JcIiB0ZXJtIFwiXVwiIDtgO1xuXG5jb25zdCBuYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAganNvbiA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZVBhdHRlcm4sXG4gICAgICAgIHN5bWJvbFBhdHRlcm4sXG4gICAgICAgIG9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgdGVybUJORixcbiAgICAgICAgc3RhdGVtZW50Qk5GXG4gICAgICB9O1xuXG5jb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbUpTT04oanNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuIl0sIm5hbWVzIjpbIm9wZXJhdG9yUGF0dGVybiIsInN0YXRlbWVudEJORiIsInN5bWJvbFBhdHRlcm4iLCJ0ZXJtQk5GIiwidHlwZVBhdHRlcm4iLCJuYW1lIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwianNvbiIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFrRUEsT0FBb0M7ZUFBcEM7O0lBeERhQSxlQUFlO2VBQWZBOztJQVFBQyxZQUFZO2VBQVpBOztJQVZBQyxhQUFhO2VBQWJBOztJQUlBQyxPQUFPO2VBQVBBOztJQU5BQyxXQUFXO2VBQVhBOzs7b0VBSmE7NEJBRWtCOzs7Ozs7QUFFckMsSUFBTUEsY0FBYztBQUVwQixJQUFNRixnQkFBZ0I7QUFFdEIsSUFBTUYsa0JBQWtCO0FBRXhCLElBQU1HLFVBQVc7QUFNakIsSUFBTUYsZUFBZ0I7QUFvQzdCLElBQU1JLE9BQU9DLHlDQUEyQixFQUNsQ0MsT0FBTztJQUNMRixNQUFBQTtJQUNBRCxhQUFBQTtJQUNBRixlQUFBQTtJQUNBRixpQkFBQUE7SUFDQUcsU0FBQUE7SUFDQUYsY0FBQUE7QUFDRjtBQUVOLElBQU1PLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtJQUVwRCxXQUFlQyJ9