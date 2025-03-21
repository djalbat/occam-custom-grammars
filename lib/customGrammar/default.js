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
var termBNF = 'term.                                ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement.                           ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  judgement\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion  \n                                       \n                                       |  satisfyingAssertion\n\n                                       |  subproofAssertion         \n\n                                       |  propertyAssertion  \n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       ;\n\nequality                             ::=  term "=" term ;\n\njudgement                            ::=  frame "|-" declaration ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) "is" ( "defined" | "undefined" );\n\ncontainedAssertion                   ::=  ( frame | term ) "is" ( "present" | "missing" ) "in" statement ;\n\nsatisfyingAssertion                  ::=  ( ( term "satisfies" ) | ( term ( "," term )+ "satisfy" ) ) metavariable ;  \n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\npropertyAssertion                    ::=  term "is" ( "a" | "an" ) propertyRelation ;\n\npropertyRelation                     ::=  property "of" term ;\n\nframe                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;\n \ndeclaration                          ::=  metavariable "::" statement ;\n\ntermSubstitution                     ::=  "[" term "for" term "]";\n\nframeSubstitution                    ::=  "[" frame "for" frame "]";\n\nstatementSubstitution                ::=  "[" statement "for" statement "]";\n\nreferenceSubstitution                ::=  "[" reference "for" reference "]";';
var typePattern = "Object\\b";
var symbolPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|defined|undefined|missing|present";
var name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    name: name,
    termBNF: termBNF,
    statementBNF: statementBNF,
    typePattern: typePattern,
    symbolPattern: symbolPattern
};
var defaultCustomGrammar = _customGrammar.default.fromJSON(json);
var _default = defaultCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHRlcm1CTkYgPSBgdGVybS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtgO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudC4gICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIG1ldGFBcmd1bWVudCBcIilcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcXVhbGl0eVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBqdWRnZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBkZWZpbmVkQXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29udGFpbmVkQXNzZXJ0aW9uICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2F0aXNmeWluZ0Fzc2VydGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdWJwcm9vZkFzc2VydGlvbiAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBwcm9wZXJ0eUFzc2VydGlvbiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG1ldGF2YXJpYWJsZSAoIGZyYW1lU3Vic3RpdHV0aW9uIHwgdGVybVN1YnN0aXR1dGlvbiApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmVxdWFsaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCI9XCIgdGVybSA7XG5cbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGZyYW1lIFwifC1cIiBkZWNsYXJhdGlvbiA7XG5cbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCI6XCIgdHlwZSA7XG5cbmRlZmluZWRBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICA6Oj0gICggZnJhbWUgfCB0ZXJtICkgXCJpc1wiICggXCJkZWZpbmVkXCIgfCBcInVuZGVmaW5lZFwiICk7XG5cbmNvbnRhaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gICggZnJhbWUgfCB0ZXJtICkgXCJpc1wiICggXCJwcmVzZW50XCIgfCBcIm1pc3NpbmdcIiApIFwiaW5cIiBzdGF0ZW1lbnQgO1xuXG5zYXRpc2Z5aW5nQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgOjo9ICAoICggdGVybSBcInNhdGlzZmllc1wiICkgfCAoIHRlcm0gKCBcIixcIiB0ZXJtICkrIFwic2F0aXNmeVwiICkgKSBtZXRhdmFyaWFibGUgOyAgXG5cbnN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHN0YXRlbWVudCAoIFwiLFwiIHN0YXRlbWVudCApKiBcIl1cIiBcIi4uLlwiIHN0YXRlbWVudCA7XG5cbnByb3BlcnR5QXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCJpc1wiICggXCJhXCIgfCBcImFuXCIgKSBwcm9wZXJ0eVJlbGF0aW9uIDtcblxucHJvcGVydHlSZWxhdGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgcHJvcGVydHkgXCJvZlwiIHRlcm0gO1xuXG5mcmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiAoICggZGVjbGFyYXRpb24gfCBtZXRhdmFyaWFibGUgKSAoIFwiLFwiICggZGVjbGFyYXRpb24gfCBtZXRhdmFyaWFibGUgKSApKiApPyBcIl1cIiA7XG4gXG5kZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBtZXRhdmFyaWFibGUgXCI6OlwiIHN0YXRlbWVudCA7XG5cbnRlcm1TdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHRlcm0gXCJmb3JcIiB0ZXJtIFwiXVwiO1xuXG5mcmFtZVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiBmcmFtZSBcImZvclwiIGZyYW1lIFwiXVwiO1xuXG5zdGF0ZW1lbnRTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgXCJmb3JcIiBzdGF0ZW1lbnQgXCJdXCI7XG5cbnJlZmVyZW5jZVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHJlZmVyZW5jZSBcImZvclwiIHJlZmVyZW5jZSBcIl1cIjtgO1xuXG5leHBvcnQgY29uc3QgdHlwZVBhdHRlcm4gPSBcIk9iamVjdFxcXFxiXCI7XG5cbmV4cG9ydCBjb25zdCBzeW1ib2xQYXR0ZXJuID0gXCI6OnxcXFxcW3xcXFxcXXxcXFxcLlxcXFwuXFxcXC58XFxcXHwtfD18ZGVmaW5lZHx1bmRlZmluZWR8bWlzc2luZ3xwcmVzZW50XCI7XG5cbmNvbnN0IG5hbWUgPSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsXG4gICAgICBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0ZXJtQk5GLFxuICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICBzeW1ib2xQYXR0ZXJuXG4gICAgICB9O1xuXG5jb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbUpTT04oanNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuIl0sIm5hbWVzIjpbInN0YXRlbWVudEJORiIsInN5bWJvbFBhdHRlcm4iLCJ0ZXJtQk5GIiwidHlwZVBhdHRlcm4iLCJuYW1lIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwianNvbiIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUErRUEsT0FBb0M7ZUFBcEM7O0lBbkVhQSxZQUFZO2VBQVpBOztJQXNEQUMsYUFBYTtlQUFiQTs7SUE1REFDLE9BQU87ZUFBUEE7O0lBMERBQyxXQUFXO2VBQVhBOzs7b0VBOURhOzRCQUVrQjs7Ozs7O0FBRXJDLElBQU1ELFVBQVc7QUFNakIsSUFBTUYsZUFBZ0I7QUFvRHRCLElBQU1HLGNBQWM7QUFFcEIsSUFBTUYsZ0JBQWdCO0FBRTdCLElBQU1HLE9BQU9DLHlDQUEyQixFQUNsQ0MsT0FBTztJQUNMRixNQUFBQTtJQUNBRixTQUFBQTtJQUNBRixjQUFBQTtJQUNBRyxhQUFBQTtJQUNBRixlQUFBQTtBQUNGO0FBRU4sSUFBTU0sdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=