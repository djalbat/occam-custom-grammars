"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" ///
, {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _occamGrammars = require("occam-grammars");
var _customGrammar = /*#__PURE__*/ _interopRequireDefault(require("./customGrammar"));
var _grammarNames = require("./grammarNames");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typePattern = _occamGrammars.defaultCustomGrammar.typePattern, symbolPattern = _occamGrammars.defaultCustomGrammar.symbolPattern, operatorPattern = _occamGrammars.defaultCustomGrammar.operatorPattern, termBNF = _occamGrammars.defaultCustomGrammar.termBNF, statementBNF = _occamGrammars.defaultCustomGrammar.statementBNF, metastatementBNF = _occamGrammars.defaultCustomGrammar.metastatementBNF;
var name = _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME, json = {
    name: name,
    termBNF: termBNF,
    statementBNF: statementBNF,
    metastatementBNF: metastatementBNF,
    typePattern: typePattern,
    symbolPattern: symbolPattern,
    operatorPattern: operatorPattern
};
var _default = _customGrammar.default.fromJSON(json);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWZhdWx0Q3VzdG9tR3JhbW1hci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZGVmYXVsdEN1c3RvbUdyYW1tYXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IEN1c3RvbUdyYW1tYXIgZnJvbSBcIi4vY3VzdG9tR3JhbW1hclwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUgfSBmcm9tIFwiLi9ncmFtbWFyTmFtZXNcIjtcblxuY29uc3QgeyB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYgfSA9IGRlZmF1bHRDdXN0b21HcmFtbWFyO1xuXG5jb25zdCBuYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLFxuICAgICAganNvbiA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdGVybUJORixcbiAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICBtZXRhc3RhdGVtZW50Qk5GLFxuICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgc3ltYm9sUGF0dGVybixcbiAgICAgICAgb3BlcmF0b3JQYXR0ZXJuXG4gICAgICB9O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21HcmFtbWFyLmZyb21KU09OKGpzb24pOyAgLy8vXG4iXSwibmFtZXMiOlsidHlwZVBhdHRlcm4iLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsInN5bWJvbFBhdHRlcm4iLCJvcGVyYXRvclBhdHRlcm4iLCJ0ZXJtQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsIm5hbWUiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJqc29uIiwiQ3VzdG9tR3JhbW1hciIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQkEsVUFBOEMsR0FBRzs7OztlQUFqRDs7OzZCQW5CcUM7a0VBRVg7NEJBRWtCOzs7Ozs7QUFFNUMsSUFBUUEsY0FBeUZDLG1DQUFvQixDQUE3R0QsYUFBYUUsZ0JBQTRFRCxtQ0FBb0IsQ0FBaEdDLGVBQWVDLGtCQUE2REYsbUNBQW9CLENBQWpGRSxpQkFBaUJDLFVBQTRDSCxtQ0FBb0IsQ0FBaEVHLFNBQVNDLGVBQW1DSixtQ0FBb0IsQ0FBdkRJLGNBQWNDLG1CQUFxQkwsbUNBQW9CLENBQXpDSztBQUU1RSxJQUFNQyxPQUFPQyx5Q0FBMkIsRUFDbENDLE9BQU87SUFDTEYsTUFBQUE7SUFDQUgsU0FBQUE7SUFDQUMsY0FBQUE7SUFDQUMsa0JBQUFBO0lBQ0FOLGFBQUFBO0lBQ0FFLGVBQUFBO0lBQ0FDLGlCQUFBQTtBQUNGO0lBRU4sV0FBZU8sc0JBQWEsQ0FBQ0MsUUFBUSxDQUFDRiJ9