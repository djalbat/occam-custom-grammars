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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUsIE9QRVJBVE9SX1BBVFRFUk5fTkFNRSB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy50eXBlUGF0dGVybiA9IHR5cGVQYXR0ZXJuO1xuICAgIHRoaXMuc3ltYm9sUGF0dGVybiA9IHN5bWJvbFBhdHRlcm47XG4gICAgdGhpcy5vcGVyYXRvclBhdHRlcm4gPSBvcGVyYXRvclBhdHRlcm47XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEJORihydWxlTmFtZSA9IG51bGwpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTogYm5mID0gdGhpcy50ZXJtQk5GOyBicmVhaztcbiAgICAgIGNhc2UgU1RBVEVNRU5UX1JVTEVfTkFNRTogYm5mID0gdGhpcy5zdGF0ZW1lbnRCTkY7IGJyZWFrO1xuICAgICAgY2FzZSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRTogYm5mID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GOyBicmVhaztcblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCBydWxlTmFtZXMgPSBbXG4gICAgICAgICAgICAgICAgVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgICAgICAgU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgICAgICAgICBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBjb21iaW5lZEJORiA9IHJ1bGVOYW1lcy5yZWR1Y2UoKGNvbWJpbmVkQk5GLCBydWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgICAgIGlmIChibmYgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgY29tYmluZWRCTkYgPSBgJHtjb21iaW5lZEJORn1cbiAgICAgICAgICAgIFxuJHtibmZ9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29tYmluZWRCTkY7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICAgICAgYm5mID0gY29tYmluZWRCTkY7ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgZ2V0UGF0dGVybihwYXR0ZXJuTmFtZSkge1xuICAgIGxldCBwYXR0ZXJuO1xuXG4gICAgc3dpdGNoIChwYXR0ZXJuTmFtZSkge1xuICAgICAgY2FzZSBUWVBFX1BBVFRFUk5fTkFNRTogcGF0dGVybiA9IHRoaXMudHlwZVBhdHRlcm47IGJyZWFrO1xuICAgICAgY2FzZSBTWU1CT0xfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy5zeW1ib2xQYXR0ZXJuOyBicmVhaztcbiAgICAgIGNhc2UgT1BFUkFUT1JfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy5vcGVyYXRvclBhdHRlcm47IGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UGF0dGVybnMoKSB7XG4gICAgY29uc3QgcGF0dGVybnMgPSBbXG4gICAgICB0aGlzLnR5cGVQYXR0ZXJuLFxuICAgICAgdGhpcy5zeW1ib2xQYXR0ZXJuLFxuICAgICAgdGhpcy5vcGVyYXRvclBhdHRlcm5cbiAgICBdO1xuXG4gICAgcmV0dXJuIHBhdHRlcm5zO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEJORihydWxlTmFtZSwgYm5mKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHN3aXRjaCAocGF0dGVybk5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMudHlwZVBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNZTUJPTF9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMuc3ltYm9sUGF0dGVybiA9IHBhdHRlcm47XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT1BFUkFUT1JfUEFUVEVSTl9OQU1FOlxuICAgICAgICB0aGlzLm9wZXJhdG9yUGF0dGVybiA9IHBhdHRlcm47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHJlc2V0UGF0dGVybihwYXR0ZXJuTmFtZSkge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICB9XG5cbiAgdXBkYXRlKHJ1bGVOYW1lLCBibmYsIHBhdHRlcm5OYW1lLCBwYXR0ZXJuKSB7XG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgdGVybUJORiA9IHRoaXMudGVybUJORixcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdGhpcy50eXBlUGF0dGVybixcbiAgICAgICAgICBzeW1ib2xQYXR0ZXJuID0gdGhpcy5zeW1ib2xQYXR0ZXJuLFxuICAgICAgICAgIG9wZXJhdG9yUGF0dGVybiA9IHRoaXMub3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdGVybUJORixcbiAgICAgICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgICAgIHN5bWJvbFBhdHRlcm4sXG4gICAgICAgICAgICBvcGVyYXRvclBhdHRlcm5cbiAgICAgICAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4sIG9wZXJhdG9yUGF0dGVybiB9ID0ganNvbixcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0ZXJtQk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN5bWJvbFBhdHRlcm4gPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgb3BlcmF0b3JQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVUZXJtQk5GU3RhdGVtZW50Qk5GTWV0YXN0YXRlbWVudEJORlR5cGVQYXR0ZXJuU3ltYm9sUGF0dGVybkFuZE9wZXJhdG9yUGF0dGVybihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4pIHtcbiAgICBjb25zdCBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXIiLCJuYW1lIiwidGVybUJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJ0eXBlUGF0dGVybiIsInN5bWJvbFBhdHRlcm4iLCJvcGVyYXRvclBhdHRlcm4iLCJnZXROYW1lIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJibmYiLCJURVJNX1JVTEVfTkFNRSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInJ1bGVOYW1lcyIsImNvbWJpbmVkQk5GIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwiZ2V0UGF0dGVybiIsInBhdHRlcm5OYW1lIiwicGF0dGVybiIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiU1lNQk9MX1BBVFRFUk5fTkFNRSIsIk9QRVJBVE9SX1BBVFRFUk5fTkFNRSIsImdldFBhdHRlcm5zIiwicGF0dGVybnMiLCJzZXROYW1lIiwic2V0Qk5GIiwic2V0UGF0dGVybiIsInJlc2V0Qk5GIiwicmVzZXRQYXR0ZXJuIiwidXBkYXRlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY3VzdG9tR3JhbW1hciIsImZyb21OYW1lIiwiZnJvbU5hbWVUZXJtQk5GU3RhdGVtZW50Qk5GTWV0YXN0YXRlbWVudEJORlR5cGVQYXR0ZXJuU3ltYm9sUGF0dGVybkFuZE9wZXJhdG9yUGF0dGVybiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSlE7eUJBQ2dEOzRCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxJQUFBLEFBQU1BLDhCQUFOO2FBQU1BLGNBQ1BDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLGdCQUFnQixFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsZUFBZTtnQ0FEbkZQO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7a0JBUk5QOztZQVduQlEsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNQLElBQUk7WUFDbEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBd0I7b0JBQWpCQyxXQUFBQSxpRUFBVyxJQUFJOztnQkFDcEIsSUFBSUM7Z0JBRUosT0FBUUQ7b0JBQ04sS0FBS0UseUJBQWM7d0JBQUVELE1BQU0sSUFBSSxDQUFDVCxPQUFPO3dCQUFFLEtBQU07b0JBQy9DLEtBQUtXLDhCQUFtQjt3QkFBRUYsTUFBTSxJQUFJLENBQUNSLFlBQVk7d0JBQUUsS0FBTTtvQkFDekQsS0FBS1csa0NBQXVCO3dCQUFFSCxNQUFNLElBQUksQ0FBQ1AsZ0JBQWdCO3dCQUFFLEtBQU07b0JBRWpFO3dCQUFTOzRCQUNQLElBQU1XLFlBQVk7Z0NBQ1ZILHlCQUFjO2dDQUNkQyw4QkFBbUI7Z0NBQ25CQyxrQ0FBdUI7NkJBQ3hCLEVBQ0RFLGNBQWNELFVBQVVFLE1BQU0sQ0FBQyxTQUFDRCxhQUFhTixVQUFhO2dDQUM5RCxJQUFNQyxNQUFNLE1BQUtGLE1BQU0sQ0FBQ0M7Z0NBRXhCLElBQUlDLFFBQVFPLHVCQUFZLEVBQUU7b0NBQ3hCRixjQUFjLEFBQUMsR0FFekJMLE9BRjJCSyxhQUFZLG9CQUVuQyxPQUFKTDtnQ0FDUSxDQUFDO2dDQUVELE9BQU9LOzRCQUNULEdBQUdFLHVCQUFZOzRCQUVmUCxNQUFNSyxhQUFjLEdBQUc7NEJBRXZCLEtBQU07d0JBQ1I7Z0JBQ0Y7Z0JBRUEsT0FBT0w7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxXQUFXLEVBQUU7Z0JBQ3RCLElBQUlDO2dCQUVKLE9BQVFEO29CQUNOLEtBQUtFLCtCQUFpQjt3QkFBRUQsVUFBVSxJQUFJLENBQUNoQixXQUFXO3dCQUFFLEtBQU07b0JBQzFELEtBQUtrQixpQ0FBbUI7d0JBQUVGLFVBQVUsSUFBSSxDQUFDZixhQUFhO3dCQUFFLEtBQU07b0JBQzlELEtBQUtrQixtQ0FBcUI7d0JBQUVILFVBQVUsSUFBSSxDQUFDZCxlQUFlO3dCQUFFLEtBQU07Z0JBQ3BFO2dCQUVBLE9BQU9jO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixJQUFNQyxXQUFXO29CQUNmLElBQUksQ0FBQ3JCLFdBQVc7b0JBQ2hCLElBQUksQ0FBQ0MsYUFBYTtvQkFDbEIsSUFBSSxDQUFDQyxlQUFlO2lCQUNyQjtnQkFFRCxPQUFPbUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRMUIsSUFBSSxFQUFFO2dCQUNaLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtZQUNkOzs7WUFFQTJCLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPbEIsUUFBUSxFQUFFQyxHQUFHLEVBQUU7Z0JBQ3BCLE9BQVFEO29CQUNOLEtBQUtFLHlCQUFjO3dCQUNqQixJQUFJLENBQUNWLE9BQU8sR0FBR1M7d0JBRWYsS0FBTTtvQkFFUixLQUFLRSw4QkFBbUI7d0JBQ3RCLElBQUksQ0FBQ1YsWUFBWSxHQUFHUTt3QkFFcEIsS0FBTTtvQkFFUixLQUFLRyxrQ0FBdUI7d0JBQzFCLElBQUksQ0FBQ1YsZ0JBQWdCLEdBQUdPO3dCQUV4QixLQUFNO2dCQUNWO1lBQ0Y7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdULFdBQVcsRUFBRUMsT0FBTyxFQUFFO2dCQUMvQixPQUFRRDtvQkFDTixLQUFLRSwrQkFBaUI7d0JBQ3BCLElBQUksQ0FBQ2pCLFdBQVcsR0FBR2dCO3dCQUVuQixLQUFNO29CQUVSLEtBQUtFLGlDQUFtQjt3QkFDdEIsSUFBSSxDQUFDakIsYUFBYSxHQUFHZTt3QkFFckIsS0FBTTtvQkFFUixLQUFLRyxtQ0FBcUI7d0JBQ3hCLElBQUksQ0FBQ2pCLGVBQWUsR0FBR2M7d0JBRXZCLEtBQU07Z0JBQ1Y7WUFDRjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTcEIsUUFBUSxFQUFFO2dCQUNqQixJQUFNQyxNQUFNTyx1QkFBWTtnQkFFeEIsSUFBSSxDQUFDVSxNQUFNLENBQUNsQixVQUFVQztZQUN4Qjs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUEsYUFBYVgsV0FBVyxFQUFFO2dCQUN4QixJQUFNQyxVQUFVSCx1QkFBWTtnQkFFNUIsSUFBSSxDQUFDVyxVQUFVLENBQUNULGFBQWFDO1lBQy9COzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU90QixRQUFRLEVBQUVDLEdBQUcsRUFBRVMsV0FBVyxFQUFFQyxPQUFPLEVBQUU7Z0JBQzFDLElBQUksQ0FBQ08sTUFBTSxDQUFDbEIsVUFBVUM7Z0JBRXRCLElBQUksQ0FBQ2tCLFVBQVUsQ0FBQ1QsYUFBYUM7WUFDL0I7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNaEMsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLFVBQVUsSUFBSSxDQUFDQSxPQUFPLEVBQ3RCQyxlQUFlLElBQUksQ0FBQ0EsWUFBWSxFQUNoQ0MsbUJBQW1CLElBQUksQ0FBQ0EsZ0JBQWdCLEVBQ3hDQyxjQUFjLElBQUksQ0FBQ0EsV0FBVyxFQUM5QkMsZ0JBQWdCLElBQUksQ0FBQ0EsYUFBYSxFQUNsQ0Msa0JBQWtCLElBQUksQ0FBQ0EsZUFBZSxFQUN0QzJCLE9BQU87b0JBQ0xqQyxNQUFBQTtvQkFDQUMsU0FBQUE7b0JBQ0FDLGNBQUFBO29CQUNBQyxrQkFBQUE7b0JBQ0FDLGFBQUFBO29CQUNBQyxlQUFBQTtvQkFDQUMsaUJBQUFBO2dCQUNGO2dCQUVOLE9BQU8yQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRTtnQkFDcEIsSUFBUWpDLE9BQStGaUMsS0FBL0ZqQyxNQUFNQyxVQUF5RmdDLEtBQXpGaEMsU0FBU0MsZUFBZ0YrQixLQUFoRi9CLGNBQWNDLG1CQUFrRThCLEtBQWxFOUIsa0JBQWtCQyxjQUFnRDZCLEtBQWhEN0IsYUFBYUMsZ0JBQW1DNEIsS0FBbkM1QixlQUFlQyxrQkFBb0IyQixLQUFwQjNCLGlCQUM3RTZCLGdCQUFnQixJQTNKTHBDLGNBMkp1QkMsTUFBTUMsU0FBU0MsY0FBY0Msa0JBQWtCQyxhQUFhQyxlQUFlQztnQkFFbkgsT0FBTzZCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTcEMsSUFBSSxFQUFFO2dCQUNwQixJQUFNQyxVQUFVZ0IsdUJBQVksRUFDdEJmLGVBQWVlLHVCQUFZLEVBQzNCZCxtQkFBbUJjLHVCQUFZLEVBQy9CYixjQUFjYSx1QkFBWSxFQUMxQlosZ0JBQWdCWSx1QkFBWSxFQUM1Qlgsa0JBQWtCVyx1QkFBWSxFQUM5QmtCLGdCQUFnQixJQXZLTHBDLGNBdUt1QkMsTUFBTUMsU0FBU0MsY0FBY0Msa0JBQWtCQyxhQUFhQyxlQUFlQztnQkFFbkgsT0FBTzZCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxzRkFBc0ZyQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGVBQWUsRUFBRTtnQkFDdkwsSUFBTTZCLGdCQUFnQixJQTdLTHBDLGNBNkt1QkMsTUFBTUMsU0FBU0MsY0FBY0Msa0JBQWtCQyxhQUFhQyxlQUFlQztnQkFFbkgsT0FBTzZCO1lBQ1Q7OztXQWhMbUJwQyJ9