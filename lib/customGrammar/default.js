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
var operatorPattern = "⊧|is|for|omits|contains|defined|undefined";
var termBNF = 'term                                 ::=   "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement                            ::=   "(" metaArgument ")" \n                                                  \n                                       |   typeAssertion \n                                                  \n                                       |   equality\n\n                                       ;\n\ntypeAssertion                        ::=   term... ":" type ;\n                                       \nequality                             ::=   argument "=" argument ;';
var metastatementBNF = 'metastatement                        ::=   "(" metastatement ")" \n           \n                                       |   definitionalAssertion\n\n                                       |   ruleSubproofAssertion         \n                                        \n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable ( containment | substitution )?\n\n                                       ;\n\ndefinitionalAssertion                ::=   variable "is" ( "defined" | "undefined" ) ;\n \nruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "⊧" judgement ;\n\njudgement                            ::=   reference "::" metastatement ;\n\ncontainment                          ::=   ( "omits" | "contains" ) variable ;\n\nsubstitution                         ::=   <NO_WHITESPACE>"[" term... "for" variable "]" ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiqd8aXN8Zm9yfG9taXRzfGNvbnRhaW5zfGRlZmluZWR8dW5kZWZpbmVkXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXJtQk5GID0gYHRlcm0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB2YXJpYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO2A7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRCTkYgPSBgc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiIG1ldGFBcmd1bWVudCBcIilcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZXF1YWxpdHlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG50eXBlQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdGVybS4uLiBcIjpcIiB0eXBlIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGFyZ3VtZW50IFwiPVwiIGFyZ3VtZW50IDtgO1xuXG5leHBvcnQgY29uc3QgbWV0YXN0YXRlbWVudEJORiA9IGBtZXRhc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCIgbWV0YXN0YXRlbWVudCBcIilcIiBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZGVmaW5pdGlvbmFsQXNzZXJ0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb250ZXh0RGVmaW5pdGlvbiBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcHJvb2ZBc3NlcnRpb25cbiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBtZXRhdmFyaWFibGUgKCBjb250YWlubWVudCB8IHN1YnN0aXR1dGlvbiApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmRlZmluaXRpb25hbEFzc2VydGlvbiAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZSBcImlzXCIgKCBcImRlZmluZWRcIiB8IFwidW5kZWZpbmVkXCIgKSA7XG4gXG5ydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgOjo9ICAgXCJbXCIgbWV0YXN0YXRlbWVudCAoIFwiLFwiIG1ldGFzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtcblxuY29udGV4dERlZmluaXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCI9XCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKCBcIixcIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSApKiA7XG5cbnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwi4oqnXCIganVkZ2VtZW50IDtcblxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJlZmVyZW5jZSBcIjo6XCIgbWV0YXN0YXRlbWVudCA7XG5cbmNvbnRhaW5tZW50ICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAoIFwib21pdHNcIiB8IFwiY29udGFpbnNcIiApIHZhcmlhYmxlIDtcblxuc3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIDxOT19XSElURVNQQUNFPlwiW1wiIHRlcm0uLi4gXCJmb3JcIiB2YXJpYWJsZSBcIl1cIiA7YDtcblxuY29uc3QgbmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICBzeW1ib2xQYXR0ZXJuLFxuICAgICAgICBvcGVyYXRvclBhdHRlcm4sXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgbWV0YXN0YXRlbWVudEJORlxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJtZXRhc3RhdGVtZW50Qk5GIiwib3BlcmF0b3JQYXR0ZXJuIiwic3RhdGVtZW50Qk5GIiwic3ltYm9sUGF0dGVybiIsInRlcm1CTkYiLCJ0eXBlUGF0dGVybiIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXVFQSxPQUFvQztlQUFwQzs7SUF6Q2FBLGdCQUFnQjtlQUFoQkE7O0lBcEJBQyxlQUFlO2VBQWZBOztJQVFBQyxZQUFZO2VBQVpBOztJQVZBQyxhQUFhO2VBQWJBOztJQUlBQyxPQUFPO2VBQVBBOztJQU5BQyxXQUFXO2VBQVhBOzs7b0VBSmE7NEJBRWtCOzs7Ozs7QUFFckMsSUFBTUEsY0FBYztBQUVwQixJQUFNRixnQkFBZ0I7QUFFdEIsSUFBTUYsa0JBQWtCO0FBRXhCLElBQU1HLFVBQVc7QUFNakIsSUFBTUYsZUFBZ0I7QUFZdEIsSUFBTUYsbUJBQW9CO0FBNEJqQyxJQUFNTSxPQUFPQyx5Q0FBMkIsRUFDbENDLE9BQU87SUFDTEYsTUFBQUE7SUFDQUQsYUFBQUE7SUFDQUYsZUFBQUE7SUFDQUYsaUJBQUFBO0lBQ0FHLFNBQUFBO0lBQ0FGLGNBQUFBO0lBQ0FGLGtCQUFBQTtBQUNGO0FBRU4sSUFBTVMsdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=