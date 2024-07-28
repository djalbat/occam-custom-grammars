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
var operatorPattern = "⊧|is|for|omits|contains|undefined";
var termBNF = 'term                                 ::=   "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement                            ::=   "(" metaArgument ")" \n                                                  \n                                       |   typeAssertion \n                                                  \n                                       |   equality\n\n                                       ;\n\ntypeAssertion                        ::=   term... ":" type ;\n                                       \nequality                             ::=   argument "=" argument ;';
var metastatementBNF = 'metastatement                        ::=   "(" metastatement ")" \n           \n                                       |   undefinedAssertion\n\n                                       |   ruleSubproofAssertion         \n                                        \n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   metavariable ( inclusion | substitution )?\n\n                                       |   metavariable substitution?\n\n                                       ;\n\nundefinedAssertion                   ::=   variable "is" "undefined" ;\n \nruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "⊧" judgement ;\n\njudgement                            ::=   reference "::" metastatement ;\n\ninclusion                            ::=   ( "omits" | "includes" ) variable ;\n\nsubstitution                         ::=   "[" term... "for" variable "]" ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiqd8aXN8Zm9yfG9taXRzfGNvbnRhaW5zfHVuZGVmaW5lZFwiO1xuXG5leHBvcnQgY29uc3QgdGVybUJORiA9IGB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtgO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIiBtZXRhQXJndW1lbnQgXCIpXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHR5cGVBc3NlcnRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGVxdWFsaXR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRlcm0uLi4gXCI6XCIgdHlwZSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmVxdWFsaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBhcmd1bWVudCBcIj1cIiBhcmd1bWVudCA7YDtcblxuZXhwb3J0IGNvbnN0IG1ldGFzdGF0ZW1lbnRCTkYgPSBgbWV0YXN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiIG1ldGFzdGF0ZW1lbnQgXCIpXCIgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHVuZGVmaW5lZEFzc2VydGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgY29udGV4dERlZmluaXRpb24gXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHByb29mQXNzZXJ0aW9uXG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXZhcmlhYmxlICggaW5jbHVzaW9uIHwgc3Vic3RpdHV0aW9uICk/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBtZXRhdmFyaWFibGUgc3Vic3RpdHV0aW9uP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbnVuZGVmaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gICB2YXJpYWJsZSBcImlzXCIgXCJ1bmRlZmluZWRcIiA7XG4gXG5ydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgOjo9ICAgXCJbXCIgbWV0YXN0YXRlbWVudCAoIFwiLFwiIG1ldGFzdGF0ZW1lbnQgKSogXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtcblxuY29udGV4dERlZmluaXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCI9XCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKCBcIixcIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSApKiA7XG5cbnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwi4oqnXCIganVkZ2VtZW50IDtcblxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJlZmVyZW5jZSBcIjo6XCIgbWV0YXN0YXRlbWVudCA7XG5cbmluY2x1c2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAoIFwib21pdHNcIiB8IFwiaW5jbHVkZXNcIiApIHZhcmlhYmxlIDtcblxuc3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiW1wiIHRlcm0uLi4gXCJmb3JcIiB2YXJpYWJsZSBcIl1cIiA7YDtcblxuY29uc3QgbmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICBzeW1ib2xQYXR0ZXJuLFxuICAgICAgICBvcGVyYXRvclBhdHRlcm4sXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgbWV0YXN0YXRlbWVudEJORlxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJtZXRhc3RhdGVtZW50Qk5GIiwib3BlcmF0b3JQYXR0ZXJuIiwic3RhdGVtZW50Qk5GIiwic3ltYm9sUGF0dGVybiIsInRlcm1CTkYiLCJ0eXBlUGF0dGVybiIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlFQSxPQUFvQztlQUFwQzs7SUEzQ2FBLGdCQUFnQjtlQUFoQkE7O0lBcEJBQyxlQUFlO2VBQWZBOztJQVFBQyxZQUFZO2VBQVpBOztJQVZBQyxhQUFhO2VBQWJBOztJQUlBQyxPQUFPO2VBQVBBOztJQU5BQyxXQUFXO2VBQVhBOzs7b0VBSmE7NEJBRWtCOzs7Ozs7QUFFckMsSUFBTUEsY0FBYztBQUVwQixJQUFNRixnQkFBZ0I7QUFFdEIsSUFBTUYsa0JBQWtCO0FBRXhCLElBQU1HLFVBQVc7QUFNakIsSUFBTUYsZUFBZ0I7QUFZdEIsSUFBTUYsbUJBQW9CO0FBOEJqQyxJQUFNTSxPQUFPQyx5Q0FBMkIsRUFDbENDLE9BQU87SUFDTEYsTUFBQUE7SUFDQUQsYUFBQUE7SUFDQUYsZUFBQUE7SUFDQUYsaUJBQUFBO0lBQ0FHLFNBQUFBO0lBQ0FGLGNBQUFBO0lBQ0FGLGtCQUFBQTtBQUNGO0FBRU4sSUFBTVMsdUJBQXVCQyxzQkFBYSxDQUFDQyxRQUFRLENBQUNIO0lBRXBELFdBQWVDIn0=