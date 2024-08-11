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
var operatorPattern = "⊧|is|in|for|from|omitted|contained|defined|undefined";
var termBNF = 'term                                 ::=   "(" argument ")"\n\n                                       |  variable \n                                       \n                                       ;';
var statementBNF = 'statement                            ::=   "(" metaArgument ")" \n                                                  \n                                       |   equality\n\n                                       |   typeAssertion \n                                                  \n                                       |   definingAssertion\n\n                                       |   containmentAssertion \n                                                  \n                                       ;\n\nequality                             ::=   argument "=" argument ;\n                                       \ntypeAssertion                        ::=   term... ":" type ;\n\ndefiningAssertion                    ::=   term... "is" ( "defined" | "undefined" ) ;\n\ncontainmentAssertion                 ::=   term... "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) metaArgument ;';
var metastatementBNF = 'metastatement                        ::=   "(" metastatement ")" \n           \n                                       |   ruleSubproofAssertion         \n                                        \n                                       |   contextDefinition \n           \n                                       |   proofAssertion\n       \n                                       |   definingMetaAssertion\n\n                                       |   containmentMetaAssertion\n\n                                       |   metavariable substitution?\n       \n                                       ;\n\ncontainmentMetaAssertion             ::=   term... "is" ( ( "contained" "in" ) | ( "omitted" "from" ) ) metastatement ;\n\ndefiningMetaAssertion                ::=   term... "is" ( "defined" | "undefined" ) ;\n\nruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;\n\ncontextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion                       ::=   context "⊧" judgement ;\n\nsubstitution                         ::=   <NO_WHITESPACE>"[" term... "for" variable "]" ;\n\njudgement                            ::=   reference "::" metastatement ;';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVQYXR0ZXJuID0gXCJPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFBhdHRlcm4gPSBcIlwiO1xuXG5leHBvcnQgY29uc3Qgb3BlcmF0b3JQYXR0ZXJuID0gXCLiiqd8aXN8aW58Zm9yfGZyb218b21pdHRlZHxjb250YWluZWR8ZGVmaW5lZHx1bmRlZmluZWRcIjtcblxuZXhwb3J0IGNvbnN0IHRlcm1CTkYgPSBgdGVybSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiKFwiIGFyZ3VtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHZhcmlhYmxlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7YDtcblxuZXhwb3J0IGNvbnN0IHN0YXRlbWVudEJORiA9IGBzdGF0ZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCIgbWV0YUFyZ3VtZW50IFwiKVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBlcXVhbGl0eVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZGVmaW5pbmdBc3NlcnRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGNvbnRhaW5tZW50QXNzZXJ0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGFyZ3VtZW50IFwiPVwiIGFyZ3VtZW50IDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHRlcm0uLi4gXCI6XCIgdHlwZSA7XG5cbmRlZmluaW5nQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gICB0ZXJtLi4uIFwiaXNcIiAoIFwiZGVmaW5lZFwiIHwgXCJ1bmRlZmluZWRcIiApIDtcblxuY29udGFpbm1lbnRBc3NlcnRpb24gICAgICAgICAgICAgICAgIDo6PSAgIHRlcm0uLi4gXCJpc1wiICggKCBcImNvbnRhaW5lZFwiIFwiaW5cIiApIHwgKCBcIm9taXR0ZWRcIiBcImZyb21cIiApICkgbWV0YUFyZ3VtZW50IDtgO1xuXG5leHBvcnQgY29uc3QgbWV0YXN0YXRlbWVudEJORiA9IGBtZXRhc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCIgbWV0YXN0YXRlbWVudCBcIilcIiBcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgY29udGV4dERlZmluaXRpb24gXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHByb29mQXNzZXJ0aW9uXG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZGVmaW5pbmdNZXRhQXNzZXJ0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb250YWlubWVudE1ldGFBc3NlcnRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZSBzdWJzdGl0dXRpb24/XG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmNvbnRhaW5tZW50TWV0YUFzc2VydGlvbiAgICAgICAgICAgICA6Oj0gICB0ZXJtLi4uIFwiaXNcIiAoICggXCJjb250YWluZWRcIiBcImluXCIgKSB8ICggXCJvbWl0dGVkXCIgXCJmcm9tXCIgKSApIG1ldGFzdGF0ZW1lbnQgO1xuXG5kZWZpbmluZ01ldGFBc3NlcnRpb24gICAgICAgICAgICAgICAgOjo9ICAgdGVybS4uLiBcImlzXCIgKCBcImRlZmluZWRcIiB8IFwidW5kZWZpbmVkXCIgKSA7XG5cbnJ1bGVTdWJwcm9vZkFzc2VydGlvbiAgICAgICAgICAgICAgICA6Oj0gICBcIltcIiBtZXRhc3RhdGVtZW50ICggXCIsXCIgbWV0YXN0YXRlbWVudCApKiBcIl1cIiBcIi4uLlwiIG1ldGFzdGF0ZW1lbnQgO1xuXG5jb250ZXh0RGVmaW5pdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcIj1cIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSAoIFwiLFwiICgganVkZ2VtZW50IHwgY29udGV4dCApICkqIDtcblxucHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbnRleHQgXCLiiqdcIiBqdWRnZW1lbnQgO1xuXG5zdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgPE5PX1dISVRFU1BBQ0U+XCJbXCIgdGVybS4uLiBcImZvclwiIHZhcmlhYmxlIFwiXVwiIDtcblxuanVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJlZmVyZW5jZSBcIjo6XCIgbWV0YXN0YXRlbWVudCA7YDtcblxuY29uc3QgbmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICBzeW1ib2xQYXR0ZXJuLFxuICAgICAgICBvcGVyYXRvclBhdHRlcm4sXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgbWV0YXN0YXRlbWVudEJORlxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJtZXRhc3RhdGVtZW50Qk5GIiwib3BlcmF0b3JQYXR0ZXJuIiwic3RhdGVtZW50Qk5GIiwic3ltYm9sUGF0dGVybiIsInRlcm1CTkYiLCJ0eXBlUGF0dGVybiIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWlGQSxPQUFvQztlQUFwQzs7SUEzQ2FBLGdCQUFnQjtlQUFoQkE7O0lBNUJBQyxlQUFlO2VBQWZBOztJQVFBQyxZQUFZO2VBQVpBOztJQVZBQyxhQUFhO2VBQWJBOztJQUlBQyxPQUFPO2VBQVBBOztJQU5BQyxXQUFXO2VBQVhBOzs7b0VBSmE7NEJBRWtCOzs7Ozs7QUFFckMsSUFBTUEsY0FBYztBQUVwQixJQUFNRixnQkFBZ0I7QUFFdEIsSUFBTUYsa0JBQWtCO0FBRXhCLElBQU1HLFVBQVc7QUFNakIsSUFBTUYsZUFBZ0I7QUFvQnRCLElBQU1GLG1CQUFvQjtBQThCakMsSUFBTU0sT0FBT0MseUNBQTJCLEVBQ2xDQyxPQUFPO0lBQ0xGLE1BQUFBO0lBQ0FELGFBQUFBO0lBQ0FGLGVBQUFBO0lBQ0FGLGlCQUFBQTtJQUNBRyxTQUFBQTtJQUNBRixjQUFBQTtJQUNBRixrQkFBQUE7QUFDRjtBQUVOLElBQU1TLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtJQUVwRCxXQUFlQyJ9