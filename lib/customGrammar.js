"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CustomGrammar;
    }
});
var _constants = require("./constants");
var _ruleNames = require("./ruleNames");
var _patternNames = require("./patternNames");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var CustomGrammar = /*#__PURE__*/ function() {
    function CustomGrammar(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern) {
        _classCallCheck(this, CustomGrammar);
        this.name = name;
        this.termBNF = termBNF;
        this.statementBNF = statementBNF;
        this.metastatementBNF = metastatementBNF;
        this.typePattern = typePattern;
        this.symbolPattern = symbolPattern;
        this.operatorPattern = operatorPattern;
    }
    _createClass(CustomGrammar, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getBNF",
            value: function getBNF() {
                var ruleName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var _this = this;
                var bnf;
                switch(ruleName){
                    case _ruleNames.TERM_RULE_NAME:
                        bnf = this.termBNF;
                        break;
                    case _ruleNames.STATEMENT_RULE_NAME:
                        bnf = this.statementBNF;
                        break;
                    case _ruleNames.METASTATEMENT_RULE_NAME:
                        bnf = this.metastatementBNF;
                        break;
                    default:
                        {
                            var ruleNames = [
                                _ruleNames.TERM_RULE_NAME,
                                _ruleNames.STATEMENT_RULE_NAME,
                                _ruleNames.METASTATEMENT_RULE_NAME
                            ], combinedBNF = ruleNames.reduce(function(combinedBNF, ruleName) {
                                var bnf = _this.getBNF(ruleName);
                                if (bnf !== _constants.EMPTY_STRING) {
                                    combinedBNF = "".concat(combinedBNF, "\n            \n").concat(bnf);
                                }
                                return combinedBNF;
                            }, _constants.EMPTY_STRING);
                            bnf = combinedBNF; ///
                            break;
                        }
                }
                return bnf;
            }
        },
        {
            key: "getPattern",
            value: function getPattern(patternName) {
                var pattern;
                switch(patternName){
                    case _patternNames.TYPE_PATTERN_NAME:
                        pattern = this.typePattern;
                        break;
                    case _patternNames.SYMBOL_PATTERN_NAME:
                        pattern = this.symbolPattern;
                        break;
                    case _patternNames.OPERATOR_PATTERN_NAME:
                        pattern = this.operatorPattern;
                        break;
                }
                return pattern;
            }
        },
        {
            key: "getPatterns",
            value: function getPatterns() {
                var patterns = [
                    this.typePattern,
                    this.symbolPattern,
                    this.operatorPattern
                ];
                return patterns;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setBNF",
            value: function setBNF(ruleName, bnf) {
                switch(ruleName){
                    case _ruleNames.TERM_RULE_NAME:
                        this.termBNF = bnf;
                        break;
                    case _ruleNames.STATEMENT_RULE_NAME:
                        this.statementBNF = bnf;
                        break;
                    case _ruleNames.METASTATEMENT_RULE_NAME:
                        this.metastatementBNF = bnf;
                        break;
                }
            }
        },
        {
            key: "setPattern",
            value: function setPattern(patternName, pattern) {
                switch(patternName){
                    case _patternNames.TYPE_PATTERN_NAME:
                        this.typePattern = pattern;
                        break;
                    case _patternNames.SYMBOL_PATTERN_NAME:
                        this.symbolPattern = pattern;
                        break;
                    case _patternNames.OPERATOR_PATTERN_NAME:
                        this.operatorPattern = pattern;
                        break;
                }
            }
        },
        {
            key: "resetBNF",
            value: function resetBNF(ruleName) {
                var bnf = _constants.EMPTY_STRING;
                this.setBNF(ruleName, bnf);
            }
        },
        {
            key: "resetPattern",
            value: function resetPattern(patternName) {
                var pattern = _constants.EMPTY_STRING;
                this.setPattern(patternName, pattern);
            }
        },
        {
            key: "update",
            value: function update(ruleName, bnf, patternName, pattern) {
                this.setBNF(ruleName, bnf);
                this.setPattern(patternName, pattern);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, termBNF = this.termBNF, statementBNF = this.statementBNF, metastatementBNF = this.metastatementBNF, typePattern = this.typePattern, symbolPattern = this.symbolPattern, operatorPattern = this.operatorPattern, json = {
                    name: name,
                    termBNF: termBNF,
                    statementBNF: statementBNF,
                    metastatementBNF: metastatementBNF,
                    typePattern: typePattern,
                    symbolPattern: symbolPattern,
                    operatorPattern: operatorPattern
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var name = json.name, termBNF = json.termBNF, statementBNF = json.statementBNF, metastatementBNF = json.metastatementBNF, typePattern = json.typePattern, symbolPattern = json.symbolPattern, operatorPattern = json.operatorPattern, customGrammar = new CustomGrammar(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern);
                return customGrammar;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var termBNF = _constants.EMPTY_STRING, statementBNF = _constants.EMPTY_STRING, metastatementBNF = _constants.EMPTY_STRING, typePattern = _constants.EMPTY_STRING, symbolPattern = _constants.EMPTY_STRING, operatorPattern = _constants.EMPTY_STRING, customGrammar = new CustomGrammar(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUsIE9QRVJBVE9SX1BBVFRFUk5fTkFNRSB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy50eXBlUGF0dGVybiA9IHR5cGVQYXR0ZXJuO1xuICAgIHRoaXMuc3ltYm9sUGF0dGVybiA9IHN5bWJvbFBhdHRlcm47XG4gICAgdGhpcy5vcGVyYXRvclBhdHRlcm4gPSBvcGVyYXRvclBhdHRlcm47XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEJORihydWxlTmFtZSA9IG51bGwpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTogYm5mID0gdGhpcy50ZXJtQk5GOyBicmVhaztcbiAgICAgIGNhc2UgU1RBVEVNRU5UX1JVTEVfTkFNRTogYm5mID0gdGhpcy5zdGF0ZW1lbnRCTkY7IGJyZWFrO1xuICAgICAgY2FzZSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRTogYm5mID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GOyBicmVhaztcblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCBydWxlTmFtZXMgPSBbXG4gICAgICAgICAgICAgICAgVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgICAgICAgU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICAgICAgICBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBjb21iaW5lZEJORiA9IHJ1bGVOYW1lcy5yZWR1Y2UoKGNvbWJpbmVkQk5GLCBydWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgICAgIGlmIChibmYgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgY29tYmluZWRCTkYgPSBgJHtjb21iaW5lZEJORn1cbiAgICAgICAgICAgIFxuJHtibmZ9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29tYmluZWRCTkY7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICAgICAgYm5mID0gY29tYmluZWRCTkY7ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgZ2V0UGF0dGVybihwYXR0ZXJuTmFtZSkge1xuICAgIGxldCBwYXR0ZXJuO1xuXG4gICAgc3dpdGNoIChwYXR0ZXJuTmFtZSkge1xuICAgICAgY2FzZSBUWVBFX1BBVFRFUk5fTkFNRTogcGF0dGVybiA9IHRoaXMudHlwZVBhdHRlcm47IGJyZWFrO1xuICAgICAgY2FzZSBTWU1CT0xfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy5zeW1ib2xQYXR0ZXJuOyBicmVhaztcbiAgICAgIGNhc2UgT1BFUkFUT1JfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy5vcGVyYXRvclBhdHRlcm47IGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UGF0dGVybnMoKSB7XG4gICAgY29uc3QgcGF0dGVybnMgPSBbXG4gICAgICB0aGlzLnR5cGVQYXR0ZXJuLFxuICAgICAgdGhpcy5zeW1ib2xQYXR0ZXJuLFxuICAgICAgdGhpcy5vcGVyYXRvclBhdHRlcm5cbiAgICBdO1xuXG4gICAgcmV0dXJuIHBhdHRlcm5zO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEJORihydWxlTmFtZSwgYm5mKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHN3aXRjaCAocGF0dGVybk5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMudHlwZVBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNZTUJPTF9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMuc3ltYm9sUGF0dGVybiA9IHBhdHRlcm47XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT1BFUkFUT1JfUEFUVEVSTl9OQU1FOlxuICAgICAgICB0aGlzLm9wZXJhdG9yUGF0dGVybiA9IHBhdHRlcm47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHJlc2V0UGF0dGVybihwYXR0ZXJuTmFtZSkge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICB9XG5cbiAgdXBkYXRlKHJ1bGVOYW1lLCBibmYsIHBhdHRlcm5OYW1lLCBwYXR0ZXJuKSB7XG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgdGVybUJORiA9IHRoaXMudGVybUJORixcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdGhpcy50eXBlUGF0dGVybixcbiAgICAgICAgICBzeW1ib2xQYXR0ZXJuID0gdGhpcy5zeW1ib2xQYXR0ZXJuLFxuICAgICAgICAgIG9wZXJhdG9yUGF0dGVybiA9IHRoaXMub3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdGVybUJORixcbiAgICAgICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgICAgIHN5bWJvbFBhdHRlcm4sXG4gICAgICAgICAgICBvcGVyYXRvclBhdHRlcm5cbiAgICAgICAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4sIG9wZXJhdG9yUGF0dGVybiB9ID0ganNvbixcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0ZXJtQk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN5bWJvbFBhdHRlcm4gPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgb3BlcmF0b3JQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJ0ZXJtQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsInR5cGVQYXR0ZXJuIiwic3ltYm9sUGF0dGVybiIsIm9wZXJhdG9yUGF0dGVybiIsImdldE5hbWUiLCJnZXRCTkYiLCJydWxlTmFtZSIsImJuZiIsIlRFUk1fUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiY29tYmluZWRCTkYiLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJnZXRQYXR0ZXJuIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuIiwiVFlQRV9QQVRURVJOX05BTUUiLCJTWU1CT0xfUEFUVEVSTl9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9OQU1FIiwiZ2V0UGF0dGVybnMiLCJwYXR0ZXJucyIsInNldE5hbWUiLCJzZXRCTkYiLCJzZXRQYXR0ZXJuIiwicmVzZXRCTkYiLCJyZXNldFBhdHRlcm4iLCJ1cGRhdGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU1RQSxhQUFhOzs7eUJBSkwsYUFBYTt5QkFDbUMsYUFBYTs0QkFDWixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9FLElBQUEsQUFBTUEsYUFBYSxpQkFBbkI7YUFBTUEsYUFBYSxDQUNwQkMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxlQUFlOzhCQURuRlAsYUFBYTtRQUU5QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFP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