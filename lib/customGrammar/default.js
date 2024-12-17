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
    propertyPattern: function() {
        return propertyPattern;
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
var propertyPattern = "";
var operatorPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|@|defined|contained";
var termBNF = 'term.                                ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement.                           ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion   \n                                                  \n                                       |  subproofAssertion         \n\n                                       |  procedureCall         \n       \n                                       |  judgement\n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       ;\n\nequality                             ::=  term "=" term ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) "is" "not"? "defined" ;\n\ncontainedAssertion                   ::=  ( frame | term ) "is" "not"? "contained" "in" statement ;\n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\nprocedureCall                        ::=  "@"<NO_WHITESPACE>reference<NO_WHITESPACE>"(" parameter ( "," parameter )* ")" ;\n\njudgement                            ::=  frame "|-" declaration ;\n\nframe                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;\n \ndeclaration                          ::=  reference "::" statement ;\n\ntermSubstitution                     ::=  "[" term "for" term "]";\n\nframeSubstitution                    ::=  "[" frame "for" frame "]";\n\nreferenceSubstitution                ::=  "[" reference "for" reference "]";\n\nstatementSubstitution                ::=  "[" statement "for" statement "]";\n\nparameter                            ::=  [name] ;';
var name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    name: name,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    propertyPattern: propertyPattern,
    operatorPattern: operatorPattern,
    termBNF: termBNF,
    statementBNF: statementBNF
};
var defaultCustomGrammar = _customGrammar.default.fromJSON(json);
var _default = defaultCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3QgcHJvcGVydHlQYXR0ZXJuID0gXCJcIjtcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yUGF0dGVybiA9IFwiOjp8XFxcXFt8XFxcXF18XFxcXC5cXFxcLlxcXFwufFxcXFx8LXw9fEB8ZGVmaW5lZHxjb250YWluZWRcIjtcblxuZXhwb3J0IGNvbnN0IHRlcm1CTkYgPSBgdGVybS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtgO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudC4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIG1ldGFBcmd1bWVudCBcIilcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcXVhbGl0eVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0eXBlQXNzZXJ0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGRlZmluZWRBc3NlcnRpb24gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjb250YWluZWRBc3NlcnRpb24gICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdWJwcm9vZkFzc2VydGlvbiAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBwcm9jZWR1cmVDYWxsICAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBqdWRnZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YXZhcmlhYmxlICggZnJhbWVTdWJzdGl0dXRpb24gfCB0ZXJtU3Vic3RpdHV0aW9uICk/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIj1cIiB0ZXJtIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIjpcIiB0eXBlIDtcblxuZGVmaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcImlzXCIgXCJub3RcIj8gXCJkZWZpbmVkXCIgO1xuXG5jb250YWluZWRBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgOjo9ICAoIGZyYW1lIHwgdGVybSApIFwiaXNcIiBcIm5vdFwiPyBcImNvbnRhaW5lZFwiIFwiaW5cIiBzdGF0ZW1lbnQgO1xuXG5zdWJwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgKCBcIixcIiBzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBzdGF0ZW1lbnQgO1xuXG5wcm9jZWR1cmVDYWxsICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIkBcIjxOT19XSElURVNQQUNFPnJlZmVyZW5jZTxOT19XSElURVNQQUNFPlwiKFwiIHBhcmFtZXRlciAoIFwiLFwiIHBhcmFtZXRlciApKiBcIilcIiA7XG5cbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGZyYW1lIFwifC1cIiBkZWNsYXJhdGlvbiA7XG5cbmZyYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiICggKCBkZWNsYXJhdGlvbiB8IG1ldGF2YXJpYWJsZSApICggXCIsXCIgKCBkZWNsYXJhdGlvbiB8IG1ldGF2YXJpYWJsZSApICkqICk/IFwiXVwiIDtcbiBcbmRlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHJlZmVyZW5jZSBcIjo6XCIgc3RhdGVtZW50IDtcblxudGVybVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgdGVybSBcImZvclwiIHRlcm0gXCJdXCI7XG5cbmZyYW1lU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIGZyYW1lIFwiZm9yXCIgZnJhbWUgXCJdXCI7XG5cbnJlZmVyZW5jZVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHJlZmVyZW5jZSBcImZvclwiIHJlZmVyZW5jZSBcIl1cIjtcblxuc3RhdGVtZW50U3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgc3RhdGVtZW50IFwiZm9yXCIgc3RhdGVtZW50IFwiXVwiO1xuXG5wYXJhbWV0ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO2A7XG5cbmNvbnN0IG5hbWUgPSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgc3ltYm9sUGF0dGVybixcbiAgICAgICAgcHJvcGVydHlQYXR0ZXJuLFxuICAgICAgICBvcGVyYXRvclBhdHRlcm4sXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORlxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJvcGVyYXRvclBhdHRlcm4iLCJwcm9wZXJ0eVBhdHRlcm4iLCJzdGF0ZW1lbnRCTkYiLCJzeW1ib2xQYXR0ZXJuIiwidGVybUJORiIsInR5cGVQYXR0ZXJuIiwibmFtZSIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImpzb24iLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBaUZBLE9BQW9DO2VBQXBDOztJQXJFYUEsZUFBZTtlQUFmQTs7SUFGQUMsZUFBZTtlQUFmQTs7SUFVQUMsWUFBWTtlQUFaQTs7SUFaQUMsYUFBYTtlQUFiQTs7SUFNQUMsT0FBTztlQUFQQTs7SUFSQUMsV0FBVztlQUFYQTs7O29FQUphOzRCQUVrQjs7Ozs7O0FBRXJDLElBQU1BLGNBQWM7QUFFcEIsSUFBTUYsZ0JBQWdCO0FBRXRCLElBQU1GLGtCQUFrQjtBQUV4QixJQUFNRCxrQkFBa0I7QUFFeEIsSUFBTUksVUFBVztBQU1qQixJQUFNRixlQUFnQjtBQWdEN0IsSUFBTUksT0FBT0MseUNBQTJCLEVBQ2xDQyxPQUFPO0lBQ0xGLE1BQUFBO0lBQ0FELGFBQUFBO0lBQ0FGLGVBQUFBO0lBQ0FGLGlCQUFBQTtJQUNBRCxpQkFBQUE7SUFDQUksU0FBQUE7SUFDQUYsY0FBQUE7QUFDRjtBQUVOLElBQU1PLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtJQUVwRCxXQUFlQyJ9