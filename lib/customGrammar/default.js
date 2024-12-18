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
var operatorPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|@|defined";
var termBNF = 'term.                                ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement.                           ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  judgement\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  subproofAssertion         \n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       ;\n\nequality                             ::=  term "=" term ;\n\njudgement                            ::=  frame "|-" declaration ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) "is" "not"? "defined" ;\n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\nframe                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;\n \ndeclaration                          ::=  metavariable "::" statement ;\n\ntermSubstitution                     ::=  "[" term "for" term "]";\n\nframeSubstitution                    ::=  "[" frame "for" frame "]";\n\nstatementSubstitution                ::=  "[" statement "for" statement "]";\n\nreferenceSubstitution                ::=  "[" reference "for" reference "]";';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3QgcHJvcGVydHlQYXR0ZXJuID0gXCJcIjtcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yUGF0dGVybiA9IFwiOjp8XFxcXFt8XFxcXF18XFxcXC5cXFxcLlxcXFwufFxcXFx8LXw9fEB8ZGVmaW5lZFwiO1xuXG5leHBvcnQgY29uc3QgdGVybUJORiA9IGB0ZXJtLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB2YXJpYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO2A7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRCTkYgPSBgc3RhdGVtZW50LiAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgbWV0YUFyZ3VtZW50IFwiKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVxdWFsaXR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGp1ZGdlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0eXBlQXNzZXJ0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGRlZmluZWRBc3NlcnRpb24gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdWJwcm9vZkFzc2VydGlvbiAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBtZXRhdmFyaWFibGUgKCBmcmFtZVN1YnN0aXR1dGlvbiB8IHRlcm1TdWJzdGl0dXRpb24gKT9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5lcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICB0ZXJtIFwiPVwiIHRlcm0gO1xuXG5qdWRnZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBmcmFtZSBcInwtXCIgZGVjbGFyYXRpb24gO1xuXG50eXBlQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICB0ZXJtIFwiOlwiIHR5cGUgO1xuXG5kZWZpbmVkQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICAoIGZyYW1lIHwgdGVybSApIFwiaXNcIiBcIm5vdFwiPyBcImRlZmluZWRcIiA7XG5cbnN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHN0YXRlbWVudCAoIFwiLFwiIHN0YXRlbWVudCApKiBcIl1cIiBcIi4uLlwiIHN0YXRlbWVudCA7XG5cbmZyYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiICggKCBkZWNsYXJhdGlvbiB8IG1ldGF2YXJpYWJsZSApICggXCIsXCIgKCBkZWNsYXJhdGlvbiB8IG1ldGF2YXJpYWJsZSApICkqICk/IFwiXVwiIDtcbiBcbmRlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIG1ldGF2YXJpYWJsZSBcIjo6XCIgc3RhdGVtZW50IDtcblxudGVybVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgdGVybSBcImZvclwiIHRlcm0gXCJdXCI7XG5cbmZyYW1lU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIGZyYW1lIFwiZm9yXCIgZnJhbWUgXCJdXCI7XG5cbnN0YXRlbWVudFN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHN0YXRlbWVudCBcImZvclwiIHN0YXRlbWVudCBcIl1cIjtcblxucmVmZXJlbmNlU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgcmVmZXJlbmNlIFwiZm9yXCIgcmVmZXJlbmNlIFwiXVwiO2A7XG5cbmNvbnN0IG5hbWUgPSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgc3ltYm9sUGF0dGVybixcbiAgICAgICAgcHJvcGVydHlQYXR0ZXJuLFxuICAgICAgICBvcGVyYXRvclBhdHRlcm4sXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORlxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJvcGVyYXRvclBhdHRlcm4iLCJwcm9wZXJ0eVBhdHRlcm4iLCJzdGF0ZW1lbnRCTkYiLCJzeW1ib2xQYXR0ZXJuIiwidGVybUJORiIsInR5cGVQYXR0ZXJuIiwibmFtZSIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImpzb24iLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBdUVBLE9BQW9DO2VBQXBDOztJQTNEYUEsZUFBZTtlQUFmQTs7SUFGQUMsZUFBZTtlQUFmQTs7SUFVQUMsWUFBWTtlQUFaQTs7SUFaQUMsYUFBYTtlQUFiQTs7SUFNQUMsT0FBTztlQUFQQTs7SUFSQUMsV0FBVztlQUFYQTs7O29FQUphOzRCQUVrQjs7Ozs7O0FBRXJDLElBQU1BLGNBQWM7QUFFcEIsSUFBTUYsZ0JBQWdCO0FBRXRCLElBQU1GLGtCQUFrQjtBQUV4QixJQUFNRCxrQkFBa0I7QUFFeEIsSUFBTUksVUFBVztBQU1qQixJQUFNRixlQUFnQjtBQXNDN0IsSUFBTUksT0FBT0MseUNBQTJCLEVBQ2xDQyxPQUFPO0lBQ0xGLE1BQUFBO0lBQ0FELGFBQUFBO0lBQ0FGLGVBQUFBO0lBQ0FGLGlCQUFBQTtJQUNBRCxpQkFBQUE7SUFDQUksU0FBQUE7SUFDQUYsY0FBQUE7QUFDRjtBQUVOLElBQU1PLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtJQUVwRCxXQUFlQyJ9