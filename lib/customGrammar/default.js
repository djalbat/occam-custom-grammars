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
var operatorPattern = "≔|⊧|is|in|for|omitted|contained|defined|undefined";
var termBNF = 'term                                 ::=  "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement                            ::=  "(" metaArgument ")" \n                                                  \n                                       |  equality\n\n                                       |  typeAssertion \n                                                  \n                                       |  term defining\n\n                                       |  term containment metastatement \n                                                  \n                                       ;\n\nequality                             ::=  argument "=" argument ;\n\ntypeAssertion                        ::=  term ":" type ;\n                                       \ncontainment                          ::=  "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) ;\n\ndefining                             ::=  "is" ( "defined" | "undefined" ) ;';
var metastatementBNF = 'metastatement                        ::=  "(" metastatement ")" \n           \n                                       |  ruleSubproofAssertion         \n       \n                                       |  frameDefinition\n\n                                       |  frame\n\n                                       |  judgement\n\n                                       |  statement\n\n                                       |  metavariable substitution?\n       \n                                       ;\n                                       \nruleSubproofAssertion                ::=  "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\nframeDefinition                      ::=  metavariable "≔" frame ;\n\njudgement                            ::=  metavariable "⊧" metastatement ;\n \ndeclaration                          ::=  metavariable "::" metastatement ;\n\nsubstitution                         ::=  <NO_WHITESPACE>"[" term "for" variable "]" ;\n\nframe                                ::=  ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) ( "," ( declaration | ( "..."<NO_WHITESPACE>metavariable ) ) )* ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiZR84oqnfGlzfGlufGZvcnxvbWl0dGVkfGNvbnRhaW5lZHxkZWZpbmVkfHVuZGVmaW5lZFwiO1xuXG5leHBvcnQgY29uc3QgdGVybUJORiA9IGB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB2YXJpYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO2A7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZW1lbnRCTkYgPSBgc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgbWV0YUFyZ3VtZW50IFwiKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVxdWFsaXR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHR5cGVBc3NlcnRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybSBkZWZpbmluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtIGNvbnRhaW5tZW50IG1ldGFzdGF0ZW1lbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5lcXVhbGl0eSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBhcmd1bWVudCBcIj1cIiBhcmd1bWVudCA7XG5cbnR5cGVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCI6XCIgdHlwZSA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmNvbnRhaW5tZW50ICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiaXNcIiAoICggXCJjb250YWluZWRcIiBcImluXCIgKSB8ICggXCJvbWl0dGVkXCIgXCJmcm9tXCIgKSApIDtcblxuZGVmaW5pbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJpc1wiICggXCJkZWZpbmVkXCIgfCBcInVuZGVmaW5lZFwiICkgO2A7XG5cbmV4cG9ydCBjb25zdCBtZXRhc3RhdGVtZW50Qk5GID0gYG1ldGFzdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIG1ldGFzdGF0ZW1lbnQgXCIpXCIgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcnVsZVN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgXG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBmcmFtZURlZmluaXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZnJhbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAganVkZ2VtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHN0YXRlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBtZXRhdmFyaWFibGUgc3Vic3RpdHV0aW9uP1xuICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5ydWxlU3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiBtZXRhc3RhdGVtZW50ICggXCIsXCIgbWV0YXN0YXRlbWVudCApKiBcIl1cIiBcIi4uLlwiIG1ldGFzdGF0ZW1lbnQgO1xuXG5mcmFtZURlZmluaXRpb24gICAgICAgICAgICAgICAgICAgICAgOjo9ICBtZXRhdmFyaWFibGUgXCLiiZRcIiBmcmFtZSA7XG5cbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIG1ldGF2YXJpYWJsZSBcIuKKp1wiIG1ldGFzdGF0ZW1lbnQgO1xuIFxuZGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgbWV0YXZhcmlhYmxlIFwiOjpcIiBtZXRhc3RhdGVtZW50IDtcblxuc3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCJbXCIgdGVybSBcImZvclwiIHZhcmlhYmxlIFwiXVwiIDtcblxuZnJhbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBkZWNsYXJhdGlvbiB8ICggXCIuLi5cIjxOT19XSElURVNQQUNFPm1ldGF2YXJpYWJsZSApICkgKCBcIixcIiAoIGRlY2xhcmF0aW9uIHwgKCBcIi4uLlwiPE5PX1dISVRFU1BBQ0U+bWV0YXZhcmlhYmxlICkgKSApKiA7YDtcblxuY29uc3QgbmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICBzeW1ib2xQYXR0ZXJuLFxuICAgICAgICBvcGVyYXRvclBhdHRlcm4sXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgbWV0YXN0YXRlbWVudEJORlxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJtZXRhc3RhdGVtZW50Qk5GIiwib3BlcmF0b3JQYXR0ZXJuIiwic3RhdGVtZW50Qk5GIiwic3ltYm9sUGF0dGVybiIsInRlcm1CTkYiLCJ0eXBlUGF0dGVybiIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQStFQSxPQUFvQztlQUFwQzs7SUF6Q2FBLGdCQUFnQjtlQUFoQkE7O0lBNUJBQyxlQUFlO2VBQWZBOztJQVFBQyxZQUFZO2VBQVpBOztJQVZBQyxhQUFhO2VBQWJBOztJQUlBQyxPQUFPO2VBQVBBOztJQU5BQyxXQUFXO2VBQVhBOzs7b0VBSmE7NEJBRWtCOzs7Ozs7QUFFckMsSUFBTUEsY0FBYztBQUVwQixJQUFNRixnQkFBZ0I7QUFFdEIsSUFBTUYsa0JBQWtCO0FBRXhCLElBQU1HLFVBQVc7QUFNakIsSUFBTUYsZUFBZ0I7QUFvQnRCLElBQU1GLG1CQUFvQjtBQTRCakMsSUFBTU0sT0FBT0MseUNBQTJCLEVBQ2xDQyxPQUFPO0lBQ0xGLE1BQUFBO0lBQ0FELGFBQUFBO0lBQ0FGLGVBQUFBO0lBQ0FGLGlCQUFBQTtJQUNBRyxTQUFBQTtJQUNBRixjQUFBQTtJQUNBRixrQkFBQUE7QUFDRjtBQUVOLElBQU1TLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtJQUVwRCxXQUFlQyJ9