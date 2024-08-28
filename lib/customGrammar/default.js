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
    metastatementBNF: function() {
        return metastatementBNF;
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
var statementBNF = 'statement                            ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion\n\n                                       |  containedAssertion \n                                                  \n                                       ;\n\nequality                             ::=  argument "=" argument ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  "is" "not"? "defined" ;\n                                       \ncontainedAssertion                   ::=  "is" "not"? "contained" "in" ;';
var metastatementBNF = 'metastatement                        ::=  "(" metastatement ")" \n           \n                                       |  subproofAssertion         \n       \n                                       |  frameAssertion\n\n                                       |  metavariable substitution?\n\n                                       |  statement\n       \n                                       ;\n                                       \nsubproofAssertion                    ::=  "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\nframeAssertion                       ::=  metavariable "⊧" frame ;\n\nframe                                ::=  ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) ( "," ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) )* ;\n \ndeclaration                          ::=  reference "::" metastatement ;\n\nsubstitution                         ::=  <NO_WHITESPACE>"[" term "for" variable "]" ;';
var name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    name: name,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    operatorPattern: operatorPattern,
    termBNF: termBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF
};
var defaultCustomGrammar = _customGrammar.default.fromJSON(json);
var _default = defaultCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiqd8aXN8aW58Zm9yfGRlZmluZWR8Y29udGFpbmVkfG5vdFwiO1xuXG5leHBvcnQgY29uc3QgdGVybUJORiA9IGB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB2YXJpYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO2A7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRCTkYgPSBgc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgbWV0YUFyZ3VtZW50IFwiKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVxdWFsaXR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHR5cGVBc3NlcnRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZGVmaW5lZEFzc2VydGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjb250YWluZWRBc3NlcnRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5lcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBhcmd1bWVudCBcIj1cIiBhcmd1bWVudCA7XG5cbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCI6XCIgdHlwZSA7XG5cbmRlZmluZWRBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiaXNcIiBcIm5vdFwiPyBcImRlZmluZWRcIiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmNvbnRhaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gIFwiaXNcIiBcIm5vdFwiPyBcImNvbnRhaW5lZFwiIFwiaW5cIiA7YDtcblxuZXhwb3J0IGNvbnN0IG1ldGFzdGF0ZW1lbnRCTkYgPSBgbWV0YXN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgbWV0YXN0YXRlbWVudCBcIilcIiBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdWJwcm9vZkFzc2VydGlvbiAgICAgICAgIFxuICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZnJhbWVBc3NlcnRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YXZhcmlhYmxlIHN1YnN0aXR1dGlvbj9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc3RhdGVtZW50XG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbnN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIG1ldGFzdGF0ZW1lbnQgKCBcIixcIiBtZXRhc3RhdGVtZW50ICkqIFwiXVwiIFwiLi4uXCIgbWV0YXN0YXRlbWVudCA7XG5cbmZyYW1lQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIG1ldGF2YXJpYWJsZSBcIuKKp1wiIGZyYW1lIDtcblxuZnJhbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBkZWNsYXJhdGlvbiB8ICggXCIuLi5cIjxOT19XSElURVNQQUNFPm1ldGF2YXJpYWJsZSApICkgKCBcIixcIiAoIGRlY2xhcmF0aW9uIHwgKCBcIi4uLlwiPE5PX1dISVRFU1BBQ0U+bWV0YXZhcmlhYmxlICkgKSApKiA7XG4gXG5kZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICByZWZlcmVuY2UgXCI6OlwiIG1ldGFzdGF0ZW1lbnQgO1xuXG5zdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIltcIiB0ZXJtIFwiZm9yXCIgdmFyaWFibGUgXCJdXCIgO2A7XG5cbmNvbnN0IG5hbWUgPSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgc3ltYm9sUGF0dGVybixcbiAgICAgICAgb3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICB0ZXJtQk5GLFxuICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgIG1ldGFzdGF0ZW1lbnRCTkZcbiAgICAgIH07XG5cbmNvbnN0IGRlZmF1bHRDdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdEN1c3RvbUdyYW1tYXI7XG4iXSwibmFtZXMiOlsibWV0YXN0YXRlbWVudEJORiIsIm9wZXJhdG9yUGF0dGVybiIsInN0YXRlbWVudEJORiIsInN5bWJvbFBhdHRlcm4iLCJ0ZXJtQk5GIiwidHlwZVBhdHRlcm4iLCJuYW1lIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwianNvbiIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF5RUEsT0FBb0M7ZUFBcEM7O0lBbkNhQSxnQkFBZ0I7ZUFBaEJBOztJQTVCQUMsZUFBZTtlQUFmQTs7SUFRQUMsWUFBWTtlQUFaQTs7SUFWQUMsYUFBYTtlQUFiQTs7SUFJQUMsT0FBTztlQUFQQTs7SUFOQUMsV0FBVztlQUFYQTs7O29FQUphOzRCQUVrQjs7Ozs7O0FBRXJDLElBQU1BLGNBQWM7QUFFcEIsSUFBTUYsZ0JBQWdCO0FBRXRCLElBQU1GLGtCQUFrQjtBQUV4QixJQUFNRyxVQUFXO0FBTWpCLElBQU1GLGVBQWdCO0FBb0J0QixJQUFNRixtQkFBb0I7QUFzQmpDLElBQU1NLE9BQU9DLHlDQUEyQixFQUNsQ0MsT0FBTztJQUNMRixNQUFBQTtJQUNBRCxhQUFBQTtJQUNBRixlQUFBQTtJQUNBRixpQkFBQUE7SUFDQUcsU0FBQUE7SUFDQUYsY0FBQUE7SUFDQUYsa0JBQUFBO0FBQ0Y7QUFFTixJQUFNUyx1QkFBdUJDLHNCQUFhLENBQUNDLFFBQVEsQ0FBQ0g7SUFFcEQsV0FBZUMifQ==