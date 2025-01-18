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
var typePattern = "Object";
var symbolPattern = "::|\\[|\\]|\\.\\.\\.|\\|-|=|@|defined|undefined|missing|present";
var termBNF = 'term.                                ::=  "(" argument ")"\n\n                                       |  propertyRelation \n\n                                       |  variable \n                                       \n                                       ;\n\npropertyRelation                     ::=  property "of" term ;';
var statementBNF = 'statement.                           ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  judgement\n\n                                       |  typeAssertion \n                                                  \n                                       |  definedAssertion  \n\n                                       |  containedAssertion  \n\n                                       |  propertyAssertion  \n\n                                       |  subproofAssertion         \n\n                                       |  metavariable ( frameSubstitution | termSubstitution )?\n\n                                       ;\n\nequality                             ::=  term "=" term ;\n\njudgement                            ::=  frame "|-" declaration ;\n\ntypeAssertion                        ::=  term ":" type ;\n\ndefinedAssertion                     ::=  ( frame | term ) "is" ( "defined" | "undefined" );\n\ncontainedAssertion                   ::=  ( frame | term ) "is" ( "present" | "missing" ) "in" statement ;\n\npropertyAssertion                    ::=  variable "is" ( "a" | "an" ) property "of" term ;\n\nsubproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;\n\nframe                                ::=  "[" ( ( declaration | metavariable ) ( "," ( declaration | metavariable ) )* )? "]" ;\n \ndeclaration                          ::=  metavariable "::" statement ;\n\ntermSubstitution                     ::=  "[" term "for" term "]";\n\nframeSubstitution                    ::=  "[" frame "for" frame "]";\n\nstatementSubstitution                ::=  "[" statement "for" statement "]";\n\nreferenceSubstitution                ::=  "[" reference "for" reference "]";';
var name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    name: name,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    termBNF: termBNF,
    statementBNF: statementBNF
};
var defaultCustomGrammar = _customGrammar.default.fromJSON(json);
var _default = defaultCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIjo6fFxcXFxbfFxcXFxdfFxcXFwuXFxcXC5cXFxcLnxcXFxcfC18PXxAfGRlZmluZWR8dW5kZWZpbmVkfG1pc3Npbmd8cHJlc2VudFwiO1xuXG5leHBvcnQgY29uc3QgdGVybUJORiA9IGB0ZXJtLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBwcm9wZXJ0eVJlbGF0aW9uIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB2YXJpYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5wcm9wZXJ0eVJlbGF0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICBwcm9wZXJ0eSBcIm9mXCIgdGVybSA7YDtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQuICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBtZXRhQXJndW1lbnQgXCIpXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXF1YWxpdHlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAganVkZ2VtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHR5cGVBc3NlcnRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZGVmaW5lZEFzc2VydGlvbiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGNvbnRhaW5lZEFzc2VydGlvbiAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHByb3BlcnR5QXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YXZhcmlhYmxlICggZnJhbWVTdWJzdGl0dXRpb24gfCB0ZXJtU3Vic3RpdHV0aW9uICk/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIj1cIiB0ZXJtIDtcblxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgZnJhbWUgXCJ8LVwiIGRlY2xhcmF0aW9uIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIjpcIiB0eXBlIDtcblxuZGVmaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcImlzXCIgKCBcImRlZmluZWRcIiB8IFwidW5kZWZpbmVkXCIgKTtcblxuY29udGFpbmVkQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcImlzXCIgKCBcInByZXNlbnRcIiB8IFwibWlzc2luZ1wiICkgXCJpblwiIHN0YXRlbWVudCA7XG5cbnByb3BlcnR5QXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIHZhcmlhYmxlIFwiaXNcIiAoIFwiYVwiIHwgXCJhblwiICkgcHJvcGVydHkgXCJvZlwiIHRlcm0gO1xuXG5zdWJwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgKCBcIixcIiBzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBzdGF0ZW1lbnQgO1xuXG5mcmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiAoICggZGVjbGFyYXRpb24gfCBtZXRhdmFyaWFibGUgKSAoIFwiLFwiICggZGVjbGFyYXRpb24gfCBtZXRhdmFyaWFibGUgKSApKiApPyBcIl1cIiA7XG4gXG5kZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBtZXRhdmFyaWFibGUgXCI6OlwiIHN0YXRlbWVudCA7XG5cbnRlcm1TdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHRlcm0gXCJmb3JcIiB0ZXJtIFwiXVwiO1xuXG5mcmFtZVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiBmcmFtZSBcImZvclwiIGZyYW1lIFwiXVwiO1xuXG5zdGF0ZW1lbnRTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgXCJmb3JcIiBzdGF0ZW1lbnQgXCJdXCI7XG5cbnJlZmVyZW5jZVN1YnN0aXR1dGlvbiAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHJlZmVyZW5jZSBcImZvclwiIHJlZmVyZW5jZSBcIl1cIjtgO1xuXG5jb25zdCBuYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAganNvbiA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdHlwZVBhdHRlcm4sXG4gICAgICAgIHN5bWJvbFBhdHRlcm4sXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORlxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRCTkYiLCJzeW1ib2xQYXR0ZXJuIiwidGVybUJORiIsInR5cGVQYXR0ZXJuIiwibmFtZSIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImpzb24iLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNkVBLE9BQW9DO2VBQXBDOztJQXpEYUEsWUFBWTtlQUFaQTs7SUFaQUMsYUFBYTtlQUFiQTs7SUFFQUMsT0FBTztlQUFQQTs7SUFKQUMsV0FBVztlQUFYQTs7O29FQUphOzRCQUVrQjs7Ozs7O0FBRXJDLElBQU1BLGNBQWM7QUFFcEIsSUFBTUYsZ0JBQWdCO0FBRXRCLElBQU1DLFVBQVc7QUFVakIsSUFBTUYsZUFBZ0I7QUE4QzdCLElBQU1JLE9BQU9DLHlDQUEyQixFQUNsQ0MsT0FBTztJQUNMRixNQUFBQTtJQUNBRCxhQUFBQTtJQUNBRixlQUFBQTtJQUNBQyxTQUFBQTtJQUNBRixjQUFBQTtBQUNGO0FBRU4sSUFBTU8sdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=