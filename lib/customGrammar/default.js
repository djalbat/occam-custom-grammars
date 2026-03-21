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

definedAssertion                     ::=  ( frame | term ) "is" ( "defined" | "undefined" );

containedAssertion                   ::=  ( frame | term ) "is" ( "present" | "missing" ) "in" statement ;

satisfiesAssertion                   ::=  signature "satisfies" metavariable ;  

subproofAssertion                    ::=  "[" statement ( "," statement )* "]" "..." statement ;

propertyAssertion                    ::=  term "is" ( "a" | "an" ) propertyRelation ;

propertyRelation                     ::=  property "of" term ;

judgement                            ::=  frame "|"<NO_WHITESPACE>"-" assumption ;

frame                                ::=  "[" ( ( assumption ( "," assumption )* ) | metavariable ) "]" ;
 
assumption                           ::=  metavariable "::" statement ;

termSubstitution                     ::=  "[" term "for" term "]";

frameSubstitution                    ::=  "[" frame "for" frame "]";

statementSubstitution                ::=  "[" statement "for" statement "]";

referenceSubstitution                ::=  "[" reference "for" reference "]";`;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2RlZmF1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi9ncmFtbWFyTmFtZXNcIjtcblxuZXhwb3J0IGNvbnN0IHRlcm1CTkYgPSBgdGVybSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtgO1xuXG5leHBvcnQgY29uc3Qgc3RhdGVtZW50Qk5GID0gYHN0YXRlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIG1ldGFBcmd1bWVudCBcIilcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcXVhbGl0eVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBqdWRnZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHlwZUFzc2VydGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBkZWZpbmVkQXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29udGFpbmVkQXNzZXJ0aW9uICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2F0aXNmaWVzQXNzZXJ0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHByb3BlcnR5QXNzZXJ0aW9uICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbWV0YXZhcmlhYmxlICggZnJhbWVTdWJzdGl0dXRpb24gfCB0ZXJtU3Vic3RpdHV0aW9uICk/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIj1cIiB0ZXJtIDtcblxudHlwZUFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcIjpcIiB0eXBlIDtcblxuZGVmaW5lZEFzc2VydGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcImlzXCIgKCBcImRlZmluZWRcIiB8IFwidW5kZWZpbmVkXCIgKTtcblxuY29udGFpbmVkQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgIDo6PSAgKCBmcmFtZSB8IHRlcm0gKSBcImlzXCIgKCBcInByZXNlbnRcIiB8IFwibWlzc2luZ1wiICkgXCJpblwiIHN0YXRlbWVudCA7XG5cbnNhdGlzZmllc0Fzc2VydGlvbiAgICAgICAgICAgICAgICAgICA6Oj0gIHNpZ25hdHVyZSBcInNhdGlzZmllc1wiIG1ldGF2YXJpYWJsZSA7ICBcblxuc3VicHJvb2ZBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgc3RhdGVtZW50ICggXCIsXCIgc3RhdGVtZW50ICkqIFwiXVwiIFwiLi4uXCIgc3RhdGVtZW50IDtcblxucHJvcGVydHlBc3NlcnRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgdGVybSBcImlzXCIgKCBcImFcIiB8IFwiYW5cIiApIHByb3BlcnR5UmVsYXRpb24gO1xuXG5wcm9wZXJ0eVJlbGF0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICBwcm9wZXJ0eSBcIm9mXCIgdGVybSA7XG5cbmp1ZGdlbWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGZyYW1lIFwifFwiPE5PX1dISVRFU1BBQ0U+XCItXCIgYXNzdW1wdGlvbiA7XG5cbmZyYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiICggKCBhc3N1bXB0aW9uICggXCIsXCIgYXNzdW1wdGlvbiApKiApIHwgbWV0YXZhcmlhYmxlICkgXCJdXCIgO1xuIFxuYXNzdW1wdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgbWV0YXZhcmlhYmxlIFwiOjpcIiBzdGF0ZW1lbnQgO1xuXG50ZXJtU3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiB0ZXJtIFwiZm9yXCIgdGVybSBcIl1cIjtcblxuZnJhbWVTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgZnJhbWUgXCJmb3JcIiBmcmFtZSBcIl1cIjtcblxuc3RhdGVtZW50U3Vic3RpdHV0aW9uICAgICAgICAgICAgICAgIDo6PSAgXCJbXCIgc3RhdGVtZW50IFwiZm9yXCIgc3RhdGVtZW50IFwiXVwiO1xuXG5yZWZlcmVuY2VTdWJzdGl0dXRpb24gICAgICAgICAgICAgICAgOjo9ICBcIltcIiByZWZlcmVuY2UgXCJmb3JcIiByZWZlcmVuY2UgXCJdXCI7YDtcblxuZXhwb3J0IGNvbnN0IHR5cGVWb2NhYnVsYXJ5ID0gXCJcIjtcblxuZXhwb3J0IGNvbnN0IHN5bWJvbFZvY2FidWxhcnkgPSBcIlwiO1xuXG5jb25zdCBuYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAganNvbiA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdGVybUJORixcbiAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICB0eXBlVm9jYWJ1bGFyeSxcbiAgICAgICAgc3ltYm9sVm9jYWJ1bGFyeVxuICAgICAgfTtcblxuY29uc3QgZGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRCTkYiLCJzeW1ib2xWb2NhYnVsYXJ5IiwidGVybUJORiIsInR5cGVWb2NhYnVsYXJ5IiwibmFtZSIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImpzb24iLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXIiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBK0VBO2VBQUE7O1FBbkVhQTtlQUFBQTs7UUFzREFDO2VBQUFBOztRQTVEQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7O3NFQTlEYTs4QkFFa0I7Ozs7OztBQUVyQyxNQUFNRCxVQUFVLENBQUM7Ozs7d0NBSWdCLENBQUM7QUFFbEMsTUFBTUYsZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RUFrRCtDLENBQUM7QUFFdEUsTUFBTUcsaUJBQWlCO0FBRXZCLE1BQU1GLG1CQUFtQjtBQUVoQyxNQUFNRyxPQUFPQyx5Q0FBMkIsRUFDbENDLE9BQU87SUFDTEY7SUFDQUY7SUFDQUY7SUFDQUc7SUFDQUY7QUFDRjtBQUVOLE1BQU1NLHVCQUF1QkMsc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDSDtNQUVwRCxXQUFlQyJ9