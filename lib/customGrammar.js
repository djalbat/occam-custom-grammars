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
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var CustomGrammar = /*#__PURE__*/ function() {
    function CustomGrammar(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern) {
        _class_call_check(this, CustomGrammar);
        this.name = name;
        this.termBNF = termBNF;
        this.statementBNF = statementBNF;
        this.metastatementBNF = metastatementBNF;
        this.typePattern = typePattern;
        this.symbolPattern = symbolPattern;
        this.operatorPattern = operatorPattern;
    }
    _create_class(CustomGrammar, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getBNF",
            value: function getBNF() {
                var _this = this;
                var ruleName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
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
        },
        {
            key: "fromNameTermBNFStatementBNFMetastatementBNFTypePatternSymbolPatternAndOperatorPattern",
            value: function fromNameTermBNFStatementBNFMetastatementBNFTypePatternSymbolPatternAndOperatorPattern(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern) {
                var customGrammar = new CustomGrammar(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUsIE9QRVJBVE9SX1BBVFRFUk5fTkFNRSB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy50eXBlUGF0dGVybiA9IHR5cGVQYXR0ZXJuO1xuICAgIHRoaXMuc3ltYm9sUGF0dGVybiA9IHN5bWJvbFBhdHRlcm47XG4gICAgdGhpcy5vcGVyYXRvclBhdHRlcm4gPSBvcGVyYXRvclBhdHRlcm47XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEJORihydWxlTmFtZSA9IG51bGwpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTogYm5mID0gdGhpcy50ZXJtQk5GOyBicmVhaztcbiAgICAgIGNhc2UgU1RBVEVNRU5UX1JVTEVfTkFNRTogYm5mID0gdGhpcy5zdGF0ZW1lbnRCTkY7IGJyZWFrO1xuICAgICAgY2FzZSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRTogYm5mID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GOyBicmVhaztcblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCBydWxlTmFtZXMgPSBbXG4gICAgICAgICAgICAgICAgVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgICAgICAgU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICAgICAgICBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBjb21iaW5lZEJORiA9IHJ1bGVOYW1lcy5yZWR1Y2UoKGNvbWJpbmVkQk5GLCBydWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgICAgIGlmIChibmYgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgY29tYmluZWRCTkYgPSBgJHtjb21iaW5lZEJORn1cbiAgICAgICAgICAgIFxuJHtibmZ9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29tYmluZWRCTkY7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICAgICAgYm5mID0gY29tYmluZWRCTkY7ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgZ2V0UGF0dGVybihwYXR0ZXJuTmFtZSkge1xuICAgIGxldCBwYXR0ZXJuO1xuXG4gICAgc3dpdGNoIChwYXR0ZXJuTmFtZSkge1xuICAgICAgY2FzZSBUWVBFX1BBVFRFUk5fTkFNRTogcGF0dGVybiA9IHRoaXMudHlwZVBhdHRlcm47IGJyZWFrO1xuICAgICAgY2FzZSBTWU1CT0xfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy5zeW1ib2xQYXR0ZXJuOyBicmVhaztcbiAgICAgIGNhc2UgT1BFUkFUT1JfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy5vcGVyYXRvclBhdHRlcm47IGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UGF0dGVybnMoKSB7XG4gICAgY29uc3QgcGF0dGVybnMgPSBbXG4gICAgICB0aGlzLnR5cGVQYXR0ZXJuLFxuICAgICAgdGhpcy5zeW1ib2xQYXR0ZXJuLFxuICAgICAgdGhpcy5vcGVyYXRvclBhdHRlcm5cbiAgICBdO1xuXG4gICAgcmV0dXJuIHBhdHRlcm5zO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEJORihydWxlTmFtZSwgYm5mKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHN3aXRjaCAocGF0dGVybk5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMudHlwZVBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNZTUJPTF9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMuc3ltYm9sUGF0dGVybiA9IHBhdHRlcm47XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT1BFUkFUT1JfUEFUVEVSTl9OQU1FOlxuICAgICAgICB0aGlzLm9wZXJhdG9yUGF0dGVybiA9IHBhdHRlcm47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHJlc2V0UGF0dGVybihwYXR0ZXJuTmFtZSkge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICB9XG5cbiAgdXBkYXRlKHJ1bGVOYW1lLCBibmYsIHBhdHRlcm5OYW1lLCBwYXR0ZXJuKSB7XG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgdGVybUJORiA9IHRoaXMudGVybUJORixcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdGhpcy50eXBlUGF0dGVybixcbiAgICAgICAgICBzeW1ib2xQYXR0ZXJuID0gdGhpcy5zeW1ib2xQYXR0ZXJuLFxuICAgICAgICAgIG9wZXJhdG9yUGF0dGVybiA9IHRoaXMub3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdGVybUJORixcbiAgICAgICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgICAgIHN5bWJvbFBhdHRlcm4sXG4gICAgICAgICAgICBvcGVyYXRvclBhdHRlcm5cbiAgICAgICAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4sIG9wZXJhdG9yUGF0dGVybiB9ID0ganNvbixcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0ZXJtQk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN5bWJvbFBhdHRlcm4gPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgb3BlcmF0b3JQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVUZXJtQk5GU3RhdGVtZW50Qk5GTWV0YXN0YXRlbWVudEJORlR5cGVQYXR0ZXJuU3ltYm9sUGF0dGVybkFuZE9wZXJhdG9yUGF0dGVybihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4pIHtcbiAgICBjb25zdCBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJ0ZXJtQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsInR5cGVQYXR0ZXJuIiwic3ltYm9sUGF0dGVybiIsIm9wZXJhdG9yUGF0dGVybiIsImdldE5hbWUiLCJnZXRCTkYiLCJydWxlTmFtZSIsImJuZiIsIlRFUk1fUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiY29tYmluZWRCTkYiLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJnZXRQYXR0ZXJuIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuIiwiVFlQRV9QQVRURVJOX05BTUUiLCJTWU1CT0xfUEFUVEVSTl9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9OQU1FIiwiZ2V0UGF0dGVybnMiLCJwYXR0ZXJucyIsInNldE5hbWUiLCJzZXRCTkYiLCJzZXRQYXR0ZXJuIiwicmVzZXRCTkYiLCJyZXNldFBhdHRlcm4iLCJ1cGRhdGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiLCJmcm9tTmFtZVRlcm1CTkZTdGF0ZW1lbnRCTkZNZXRhc3RhdGVtZW50Qk5GVHlwZVBhdHRlcm5TeW1ib2xQYXR0ZXJuQW5kT3BlcmF0b3JQYXR0ZXJuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKUTt5QkFDZ0Q7NEJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEsOEJBQUQsQUFBTDthQUFNQSxjQUNQQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGVBQWU7Z0NBRG5GUDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7O2tCQVJOUDs7WUFXbkJRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1AsSUFBSTtZQUNsQjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTs7b0JBQU9DLFdBQUFBLGlFQUFXO2dCQUNoQixJQUFJQztnQkFFSixPQUFRRDtvQkFDTixLQUFLRSx5QkFBYzt3QkFBRUQsTUFBTSxJQUFJLENBQUNULE9B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