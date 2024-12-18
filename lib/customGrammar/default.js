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
var operatorPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|@|defined|undefined";
var termBNF = 'term.                                ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement.                           ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  judgement\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  subproofAssertion         \n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       ;\n\nequality                             ::=  term "=" term ;\n\njudgement                            ::=  frame "|-" declaration ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) "is" ( "defined" | "undefined" );\n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\nframe                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;\n \ndeclaration                          ::=  metavariable "::" statement ;\n\ntermSubstitution                     ::=  "[" term "for" term "]";\n\nframeSubstitution                    ::=  "[" frame "for" frame "]";\n\nstatementSubstitution                ::=  "[" statement "for" statement "]";\n\nreferenceSubstitution                ::=  "[" reference "for" reference "]";';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3QgcHJvcGVydHlQYXR0ZXJuID0gXCJcIjtcblxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yUGF0dGVybiA9IFwiOjp8XFxcXFt8XFxcXF18XFxcXC5cXFxcLlxcXFwufFxcXFx8LXw9fEB8ZGVmaW5lZHx1bmRlZmluZWRcIjtcblxuZXhwb3J0IGNvbnN0IHRlcm1CTkYgPSBgdGVybS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtgO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudC4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIG1ldGFBcmd1bWVudCBcIilcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcXVhbGl0eVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBqdWRnZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBkZWZpbmVkQXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YXZhcmlhYmxlICggZnJhbWVTdWJzdGl0dXRpb24gfCB0ZXJtU3Vic3RpdHV0aW9uICk/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIj1cIiB0ZXJtIDtcblxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgZnJhbWUgXCJ8LVwiIGRlY2xhcmF0aW9uIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIjpcIiB0eXBlIDtcblxuZGVmaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcImlzXCIgKCBcImRlZmluZWRcIiB8IFwidW5kZWZpbmVkXCIgKTtcblxuc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgc3RhdGVtZW50ICggXCIsXCIgc3RhdGVtZW50ICkqIFwiXVwiIFwiLi4uXCIgc3RhdGVtZW50IDtcblxuZnJhbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgKCAoIGRlY2xhcmF0aW9uIHwgbWV0YXZhcmlhYmxlICkgKCBcIixcIiAoIGRlY2xhcmF0aW9uIHwgbWV0YXZhcmlhYmxlICkgKSogKT8gXCJdXCIgO1xuIFxuZGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgbWV0YXZhcmlhYmxlIFwiOjpcIiBzdGF0ZW1lbnQgO1xuXG50ZXJtU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiB0ZXJtIFwiZm9yXCIgdGVybSBcIl1cIjtcblxuZnJhbWVTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgZnJhbWUgXCJmb3JcIiBmcmFtZSBcIl1cIjtcblxuc3RhdGVtZW50U3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgc3RhdGVtZW50IFwiZm9yXCIgc3RhdGVtZW50IFwiXVwiO1xuXG5yZWZlcmVuY2VTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiByZWZlcmVuY2UgXCJmb3JcIiByZWZlcmVuY2UgXCJdXCI7YDtcblxuY29uc3QgbmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICBzeW1ib2xQYXR0ZXJuLFxuICAgICAgICBwcm9wZXJ0eVBhdHRlcm4sXG4gICAgICAgIG9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgdGVybUJORixcbiAgICAgICAgc3RhdGVtZW50Qk5GXG4gICAgICB9O1xuXG5jb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbUpTT04oanNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuIl0sIm5hbWVzIjpbIm9wZXJhdG9yUGF0dGVybiIsInByb3BlcnR5UGF0dGVybiIsInN0YXRlbWVudEJORiIsInN5bWJvbFBhdHRlcm4iLCJ0ZXJtQk5GIiwidHlwZVBhdHRlcm4iLCJuYW1lIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwianNvbiIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF1RUEsT0FBb0M7ZUFBcEM7O0lBM0RhQSxlQUFlO2VBQWZBOztJQUZBQyxlQUFlO2VBQWZBOztJQVVBQyxZQUFZO2VBQVpBOztJQVpBQyxhQUFhO2VBQWJBOztJQU1BQyxPQUFPO2VBQVBBOztJQVJBQyxXQUFXO2VBQVhBOzs7b0VBSmE7NEJBRWtCOzs7Ozs7QUFFckMsSUFBTUEsY0FBYztBQUVwQixJQUFNRixnQkFBZ0I7QUFFdEIsSUFBTUYsa0JBQWtCO0FBRXhCLElBQU1ELGtCQUFrQjtBQUV4QixJQUFNSSxVQUFXO0FBTWpCLElBQU1GLGVBQWdCO0FBc0M3QixJQUFNSSxPQUFPQyx5Q0FBMkIsRUFDbENDLE9BQU87SUFDTEYsTUFBQUE7SUFDQUQsYUFBQUE7SUFDQUYsZUFBQUE7SUFDQUYsaUJBQUFBO0lBQ0FELGlCQUFBQTtJQUNBSSxTQUFBQTtJQUNBRixjQUFBQTtBQUNGO0FBRU4sSUFBTU8sdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=