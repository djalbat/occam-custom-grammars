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
var operatorPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|@|defined|undefined|missing|present";
var termBNF = 'term.                                ::=  "(" argument ")"\n\n                                       |  propertyRelation \n\n                                       |  variable \n                                       \n                                       ;\n\npropertyRelation                     ::=  property "of" term ;';
var statementBNF = 'statement.                           ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  judgement\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion  \n\n                                       |  propertyAssertion  \n\n                                       |  subproofAssertion         \n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       ;\n\nequality                             ::=  term "=" term ;\n\njudgement                            ::=  frame "|-" declaration ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) "is" ( "defined" | "undefined" );\n\ncontainedAssertion                   ::=  ( frame | term ) "is" ( "present" | "missing" ) "in" statement ;\n\npropertyAssertion                    ::=  term "is" ( "a" | "an" ) property "of" term ;\n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\nframe                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;\n \ndeclaration                          ::=  metavariable "::" statement ;\n\ntermSubstitution                     ::=  "[" term "for" term "]";\n\nframeSubstitution                    ::=  "[" frame "for" frame "]";\n\nstatementSubstitution                ::=  "[" statement "for" statement "]";\n\nreferenceSubstitution                ::=  "[" reference "for" reference "]";';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCI6OnxcXFxcW3xcXFxcXXxcXFxcLlxcXFwuXFxcXC58XFxcXHwtfD18QHxkZWZpbmVkfHVuZGVmaW5lZHxtaXNzaW5nfHByZXNlbnRcIjtcblxuZXhwb3J0IGNvbnN0IHRlcm1CTkYgPSBgdGVybS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcHJvcGVydHlSZWxhdGlvbiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxucHJvcGVydHlSZWxhdGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgcHJvcGVydHkgXCJvZlwiIHRlcm0gO2A7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRCTkYgPSBgc3RhdGVtZW50LiAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgbWV0YUFyZ3VtZW50IFwiKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVxdWFsaXR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGp1ZGdlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0eXBlQXNzZXJ0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGRlZmluZWRBc3NlcnRpb24gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjb250YWluZWRBc3NlcnRpb24gIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBwcm9wZXJ0eUFzc2VydGlvbiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG1ldGF2YXJpYWJsZSAoIGZyYW1lU3Vic3RpdHV0aW9uIHwgdGVybVN1YnN0aXR1dGlvbiApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmVxdWFsaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCI9XCIgdGVybSA7XG5cbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGZyYW1lIFwifC1cIiBkZWNsYXJhdGlvbiA7XG5cbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCI6XCIgdHlwZSA7XG5cbmRlZmluZWRBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICA6Oj0gICggZnJhbWUgfCB0ZXJtICkgXCJpc1wiICggXCJkZWZpbmVkXCIgfCBcInVuZGVmaW5lZFwiICk7XG5cbmNvbnRhaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gICggZnJhbWUgfCB0ZXJtICkgXCJpc1wiICggXCJwcmVzZW50XCIgfCBcIm1pc3NpbmdcIiApIFwiaW5cIiBzdGF0ZW1lbnQgO1xuXG5wcm9wZXJ0eUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICB0ZXJtIFwiaXNcIiAoIFwiYVwiIHwgXCJhblwiICkgcHJvcGVydHkgXCJvZlwiIHRlcm0gO1xuXG5zdWJwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgKCBcIixcIiBzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBzdGF0ZW1lbnQgO1xuXG5mcmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiAoICggZGVjbGFyYXRpb24gfCBtZXRhdmFyaWFibGUgKSAoIFwiLFwiICggZGVjbGFyYXRpb24gfCBtZXRhdmFyaWFibGUgKSApKiApPyBcIl1cIiA7XG4gXG5kZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBtZXRhdmFyaWFibGUgXCI6OlwiIHN0YXRlbWVudCA7XG5cbnRlcm1TdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHRlcm0gXCJmb3JcIiB0ZXJtIFwiXVwiO1xuXG5mcmFtZVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiBmcmFtZSBcImZvclwiIGZyYW1lIFwiXVwiO1xuXG5zdGF0ZW1lbnRTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgXCJmb3JcIiBzdGF0ZW1lbnQgXCJdXCI7XG5cbnJlZmVyZW5jZVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHJlZmVyZW5jZSBcImZvclwiIHJlZmVyZW5jZSBcIl1cIjtgO1xuXG5jb25zdCBuYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAganNvbiA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZVBhdHRlcm4sXG4gICAgICAgIHN5bWJvbFBhdHRlcm4sXG4gICAgICAgIG9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgdGVybUJORixcbiAgICAgICAgc3RhdGVtZW50Qk5GXG4gICAgICB9O1xuXG5jb25zdCBkZWZhdWx0Q3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbUpTT04oanNvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuIl0sIm5hbWVzIjpbIm9wZXJhdG9yUGF0dGVybiIsInN0YXRlbWVudEJORiIsInN5bWJvbFBhdHRlcm4iLCJ0ZXJtQk5GIiwidHlwZVBhdHRlcm4iLCJuYW1lIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwianNvbiIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnRkEsT0FBb0M7ZUFBcEM7O0lBdEVhQSxlQUFlO2VBQWZBOztJQVlBQyxZQUFZO2VBQVpBOztJQWRBQyxhQUFhO2VBQWJBOztJQUlBQyxPQUFPO2VBQVBBOztJQU5BQyxXQUFXO2VBQVhBOzs7b0VBSmE7NEJBRWtCOzs7Ozs7QUFFckMsSUFBTUEsY0FBYztBQUVwQixJQUFNRixnQkFBZ0I7QUFFdEIsSUFBTUYsa0JBQWtCO0FBRXhCLElBQU1HLFVBQVc7QUFVakIsSUFBTUYsZUFBZ0I7QUE4QzdCLElBQU1JLE9BQU9DLHlDQUEyQixFQUNsQ0MsT0FBTztJQUNMRixNQUFBQTtJQUNBRCxhQUFBQTtJQUNBRixlQUFBQTtJQUNBRixpQkFBQUE7SUFDQUcsU0FBQUE7SUFDQUYsY0FBQUE7QUFDRjtBQUVOLElBQU1PLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtJQUVwRCxXQUFlQyJ9