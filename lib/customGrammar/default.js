"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get statementBNF () {
        return statementBNF;
    },
    get symbolVocabulary () {
        return symbolVocabulary;
    },
    get termBNF () {
        return termBNF;
    },
    get typeVocabulary () {
        return typeVocabulary;
    }
});
const _customGrammar = /*#__PURE__*/ _interop_require_default(require("../customGrammar"));
const _grammarNames = require("../grammarNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const termBNF = `term                                 ::=  "(" argument ")"

                                       |  variable 
                                       
                                       ;`;
const statementBNF = `statement                            ::=  "(" metaArgument ")" 
                                                  
                                       |  equality

                                       |  judgement

                                       |  typeAssertion 
                                                  
                                       |  definedAssertion  

                                       |  containedAssertion  
                                       
                                       |  satisfiesAssertion

                                       |  subproofAssertion         

                                       |  propertyAssertion  

                                       |  metavariable ( frameSubstitution | termSubstitution )?

                                       ;

equality                             ::=  term "=" term ;

typeAssertion                        ::=  term ":" type ;

definedAssertion                     ::=  ( frame | term ) "is" ( "defined" | "undefined" ) ;

containedAssertion                   ::=  ( frame | term ) "is" ( "present" | "missing" ) "in" statement ;

signatureAssertion                   ::=  signature "satisfies" metavariable ;  

subproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;

propertyAssertion                    ::=  term "is" ( "a" | "an" ) propertyRelation ;

propertyRelation                     ::=  property "of" term ;

judgement                            ::=  frame "|"<NO_WHITESPACE>"-" assumption ;

frame                                ::=  "[" ( ( metavariable | assumption ) ( "," assumption )* ) "]" ;
 
assumption                           ::=  metavariable "::" statement ;

metaLevelAssumption                  ::=  reference "::" statement ;

termSubstitution                     ::=  "[" term "for" term "]" ;

frameSubstitution                    ::=  "[" frame "for" frame "]" ;

statementSubstitution                ::=  "[" statement "for" statement "]" ;

referenceSubstitution                ::=  "[" reference "for" reference "]" ;`;
const typeVocabulary = "";
const symbolVocabulary = "";
const name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    name,
    termBNF,
    statementBNF,
    typeVocabulary,
    symbolVocabulary
};
const defaultCustomGrammar = _customGrammar.default.fromJSON(json);
const _default = defaultCustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHRlcm1CTkYgPSBgdGVybSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtgO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIG1ldGFBcmd1bWVudCBcIilcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcXVhbGl0eVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBqdWRnZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBkZWZpbmVkQXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29udGFpbmVkQXNzZXJ0aW9uICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2F0aXNmaWVzQXNzZXJ0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHByb3BlcnR5QXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YXZhcmlhYmxlICggZnJhbWVTdWJzdGl0dXRpb24gfCB0ZXJtU3Vic3RpdHV0aW9uICk/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIj1cIiB0ZXJtIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIjpcIiB0eXBlIDtcblxuZGVmaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcImlzXCIgKCBcImRlZmluZWRcIiB8IFwidW5kZWZpbmVkXCIgKSA7XG5cbmNvbnRhaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gICggZnJhbWUgfCB0ZXJtICkgXCJpc1wiICggXCJwcmVzZW50XCIgfCBcIm1pc3NpbmdcIiApIFwiaW5cIiBzdGF0ZW1lbnQgO1xuXG5zaWduYXR1cmVBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgOjo9ICBzaWduYXR1cmUgXCJzYXRpc2ZpZXNcIiBtZXRhdmFyaWFibGUgOyAgXG5cbnN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHN0YXRlbWVudCAoIFwiLFwiIHN0YXRlbWVudCApKiBcIl1cIiBcIi4uLlwiIHN0YXRlbWVudCA7XG5cbnByb3BlcnR5QXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIHRlcm0gXCJpc1wiICggXCJhXCIgfCBcImFuXCIgKSBwcm9wZXJ0eVJlbGF0aW9uIDtcblxucHJvcGVydHlSZWxhdGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgcHJvcGVydHkgXCJvZlwiIHRlcm0gO1xuXG5qdWRnZW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBmcmFtZSBcInxcIjxOT19XSElURVNQQUNFPlwiLVwiIGFzc3VtcHRpb24gO1xuXG5mcmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiAoICggbWV0YXZhcmlhYmxlIHwgYXNzdW1wdGlvbiApICggXCIsXCIgYXNzdW1wdGlvbiApKiApIFwiXVwiIDtcbiBcbmFzc3VtcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIG1ldGF2YXJpYWJsZSBcIjo6XCIgc3RhdGVtZW50IDtcblxubWV0YUxldmVsQXNzdW1wdGlvbiAgICAgICAgICAgICAgICAgIDo6PSAgcmVmZXJlbmNlIFwiOjpcIiBzdGF0ZW1lbnQgO1xuXG50ZXJtU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiB0ZXJtIFwiZm9yXCIgdGVybSBcIl1cIiA7XG5cbmZyYW1lU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIGZyYW1lIFwiZm9yXCIgZnJhbWUgXCJdXCIgO1xuXG5zdGF0ZW1lbnRTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiBzdGF0ZW1lbnQgXCJmb3JcIiBzdGF0ZW1lbnQgXCJdXCIgO1xuXG5yZWZlcmVuY2VTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiByZWZlcmVuY2UgXCJmb3JcIiByZWZlcmVuY2UgXCJdXCIgO2A7XG5cbmV4cG9ydCBjb25zdCB0eXBlVm9jYWJ1bGFyeSA9IFwiXCI7XG5cbmV4cG9ydCBjb25zdCBzeW1ib2xWb2NhYnVsYXJ5ID0gXCJcIjtcblxuY29uc3QgbmFtZSA9IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSxcbiAgICAgIGpzb24gPSB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRlcm1CTkYsXG4gICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgdHlwZVZvY2FidWxhcnksXG4gICAgICAgIHN5bWJvbFZvY2FidWxhcnlcbiAgICAgIH07XG5cbmNvbnN0IGRlZmF1bHRDdXN0b21HcmFtbWFyID0gQ3VzdG9tR3JhbW1hci5mcm9tSlNPTihqc29uKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdEN1c3RvbUdyYW1tYXI7XG4iXSwibmFtZXMiOlsic3RhdGVtZW50Qk5GIiwic3ltYm9sVm9jYWJ1bGFyeSIsInRlcm1CTkYiLCJ0eXBlVm9jYWJ1bGFyeSIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJDdXN0b21HcmFtbWFyIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWlGQTtlQUFBOztRQXJFYUE7ZUFBQUE7O1FBd0RBQztlQUFBQTs7UUE5REFDO2VBQUFBOztRQTREQUM7ZUFBQUE7OztzRUFoRWE7OEJBRWtCOzs7Ozs7QUFFckMsTUFBTUQsVUFBVSxDQUFDOzs7O3dDQUlnQixDQUFDO0FBRWxDLE1BQU1GLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RUFvRGdELENBQUM7QUFFdkUsTUFBTUcsaUJBQWlCO0FBRXZCLE1BQU1GLG1CQUFtQjtBQUVoQyxNQUFNRyxPQUFPQyx5Q0FBMkIsRUFDbENDLE9BQU87SUFDTEY7SUFDQUY7SUFDQUY7SUFDQUc7SUFDQUY7QUFDRjtBQUVOLE1BQU1NLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtNQUVwRCxXQUFlQyJ9