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
    function CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, propertyPattern, operatorPattern) {
        _class_call_check(this, CustomGrammar);
        this.name = name;
        this.termBNF = termBNF;
        this.statementBNF = statementBNF;
        this.typePattern = typePattern;
        this.symbolPattern = symbolPattern;
        this.propertyPattern = propertyPattern;
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
                    default:
                        {
                            var ruleNames = [
                                _ruleNames.TERM_RULE_NAME,
                                _ruleNames.STATEMENT_RULE_NAME
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
                    case _patternNames.PROPERTY_PATTERN_NAME:
                        pattern = this.propertyPattern;
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
                    this.propertyPattern,
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
                    case _patternNames.PROPERTY_PATTERN_NAME:
                        this.propertyPattern = pattern;
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
                var name = this.name, termBNF = this.termBNF, statementBNF = this.statementBNF, typePattern = this.typePattern, symbolPattern = this.symbolPattern, propertyPattern = this.propertyPattern, operatorPattern = this.operatorPattern, json = {
                    name: name,
                    termBNF: termBNF,
                    statementBNF: statementBNF,
                    typePattern: typePattern,
                    symbolPattern: symbolPattern,
                    propertyPattern: propertyPattern,
                    operatorPattern: operatorPattern
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var name = json.name, termBNF = json.termBNF, statementBNF = json.statementBNF, typePattern = json.typePattern, symbolPattern = json.symbolPattern, propertyPattern = json.propertyPattern, operatorPattern = json.operatorPattern, customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, propertyPattern, operatorPattern);
                return customGrammar;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var termBNF = _constants.EMPTY_STRING, statementBNF = _constants.EMPTY_STRING, typePattern = _constants.EMPTY_STRING, symbolPattern = _constants.EMPTY_STRING, propertyPattern = _constants.EMPTY_STRING, operatorPattern = _constants.EMPTY_STRING, customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, propertyPattern, operatorPattern);
                return customGrammar;
            }
        },
        {
            key: "fromNameTermBNFStatementBNFTypePatternSymbolPatternPropertyPatternAndOperatorPattern",
            value: function fromNameTermBNFStatementBNFTypePatternSymbolPatternPropertyPatternAndOperatorPattern(name, termBNF, statementBNF, typePattern, symbolPattern, propertyPattern, operatorPattern) {
                var customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, propertyPattern, operatorPattern);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBUWVBFX1BBVFRFUk5fTkFNRSwgU1lNQk9MX1BBVFRFUk5fTkFNRSwgUFJPUEVSVFlfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi9wYXR0ZXJuTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4sIHByb3BlcnR5UGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GO1xuICAgIHRoaXMudHlwZVBhdHRlcm4gPSB0eXBlUGF0dGVybjtcbiAgICB0aGlzLnN5bWJvbFBhdHRlcm4gPSBzeW1ib2xQYXR0ZXJuO1xuICAgIHRoaXMucHJvcGVydHlQYXR0ZXJuID0gcHJvcGVydHlQYXR0ZXJuO1xuICAgIHRoaXMub3BlcmF0b3JQYXR0ZXJuID0gb3BlcmF0b3JQYXR0ZXJuO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUgPSBudWxsKSB7XG4gICAgbGV0IGJuZjtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IGJuZiA9IHRoaXMudGVybUJORjsgYnJlYWs7XG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6IGJuZiA9IHRoaXMuc3RhdGVtZW50Qk5GOyBicmVhaztcblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCBydWxlTmFtZXMgPSBbXG4gICAgICAgICAgICAgICAgVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgICAgICAgU1RBVEVNRU5UX1JVTEVfTkFNRVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBjb21iaW5lZEJORiA9IHJ1bGVOYW1lcy5yZWR1Y2UoKGNvbWJpbmVkQk5GLCBydWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmIChibmYgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICAgICAgY29tYmluZWRCTkYgPSBgJHtjb21iaW5lZEJORn1cbiAgICAgICAgICAgIFxuJHtibmZ9YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZWRCTkY7XG4gICAgICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICAgICAgYm5mID0gY29tYmluZWRCTkY7ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgZ2V0UGF0dGVybihwYXR0ZXJuTmFtZSkge1xuICAgIGxldCBwYXR0ZXJuO1xuXG4gICAgc3dpdGNoIChwYXR0ZXJuTmFtZSkge1xuICAgICAgY2FzZSBUWVBFX1BBVFRFUk5fTkFNRTogcGF0dGVybiA9IHRoaXMudHlwZVBhdHRlcm47IGJyZWFrO1xuICAgICAgY2FzZSBTWU1CT0xfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy5zeW1ib2xQYXR0ZXJuOyBicmVhaztcbiAgICAgIGNhc2UgUFJPUEVSVFlfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy5wcm9wZXJ0eVBhdHRlcm47IGJyZWFrO1xuICAgICAgY2FzZSBPUEVSQVRPUl9QQVRURVJOX05BTUU6IHBhdHRlcm4gPSB0aGlzLm9wZXJhdG9yUGF0dGVybjsgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdHRlcm47XG4gIH1cblxuICBnZXRQYXR0ZXJucygpIHtcbiAgICBjb25zdCBwYXR0ZXJucyA9IFtcbiAgICAgIHRoaXMudHlwZVBhdHRlcm4sXG4gICAgICB0aGlzLnN5bWJvbFBhdHRlcm4sXG4gICAgICB0aGlzLnByb3BlcnR5UGF0dGVybixcbiAgICAgIHRoaXMub3BlcmF0b3JQYXR0ZXJuXG4gICAgXTtcblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMudGVybUJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLnN0YXRlbWVudEJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKSB7XG4gICAgc3dpdGNoIChwYXR0ZXJuTmFtZSkge1xuICAgICAgY2FzZSBUWVBFX1BBVFRFUk5fTkFNRTpcbiAgICAgICAgdGhpcy50eXBlUGF0dGVybiA9IHBhdHRlcm47XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU1lNQk9MX1BBVFRFUk5fTkFNRTpcbiAgICAgICAgdGhpcy5zeW1ib2xQYXR0ZXJuID0gcGF0dGVybjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBQUk9QRVJUWV9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMucHJvcGVydHlQYXR0ZXJuID0gcGF0dGVybjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPUEVSQVRPUl9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMub3BlcmF0b3JQYXR0ZXJuID0gcGF0dGVybjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXNldEJORihydWxlTmFtZSkge1xuICAgIGNvbnN0IGJuZiA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICB9XG5cbiAgcmVzZXRQYXR0ZXJuKHBhdHRlcm5OYW1lKSB7XG4gICAgY29uc3QgcGF0dGVybiA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgcGF0dGVybk5hbWUsIHBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcblxuICAgIHRoaXMuc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybik7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICB0ZXJtQk5GID0gdGhpcy50ZXJtQk5GLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IHRoaXMuc3RhdGVtZW50Qk5GLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdGhpcy50eXBlUGF0dGVybixcbiAgICAgICAgICBzeW1ib2xQYXR0ZXJuID0gdGhpcy5zeW1ib2xQYXR0ZXJuLFxuICAgICAgICAgIHByb3BlcnR5UGF0dGVybiA9IHRoaXMucHJvcGVydHlQYXR0ZXJuLFxuICAgICAgICAgIG9wZXJhdG9yUGF0dGVybiA9IHRoaXMub3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdGVybUJORixcbiAgICAgICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICAgICAgc3ltYm9sUGF0dGVybixcbiAgICAgICAgICAgIHByb3BlcnR5UGF0dGVybixcbiAgICAgICAgICAgIG9wZXJhdG9yUGF0dGVyblxuICAgICAgICAgIH07XG4gICAgXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgbmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgcHJvcGVydHlQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4gfSA9IGpzb24sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4sIHByb3BlcnR5UGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0ZXJtQk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB0eXBlUGF0dGVybiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzeW1ib2xQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHByb3BlcnR5UGF0dGVybiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBvcGVyYXRvclBhdHRlcm4gPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4sIHByb3BlcnR5UGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lVGVybUJORlN0YXRlbWVudEJORlR5cGVQYXR0ZXJuU3ltYm9sUGF0dGVyblByb3BlcnR5UGF0dGVybkFuZE9wZXJhdG9yUGF0dGVybihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuLCBwcm9wZXJ0eVBhdHRlcm4sIG9wZXJhdG9yUGF0dGVybikge1xuICAgIGNvbnN0IGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuLCBwcm9wZXJ0eVBhdHRlcm4sIG9wZXJhdG9yUGF0dGVybik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXIiLCJuYW1lIiwidGVybUJORiIsInN0YXRlbWVudEJORiIsInR5cGVQYXR0ZXJuIiwic3ltYm9sUGF0dGVybiIsInByb3BlcnR5UGF0dGVybiIsIm9wZXJhdG9yUGF0dGVybiIsImdldE5hbWUiLCJnZXRCTkYiLCJydWxlTmFtZSIsImJuZiIsIlRFUk1fUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInJ1bGVOYW1lcyIsImNvbWJpbmVkQk5GIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwiZ2V0UGF0dGVybiIsInBhdHRlcm5OYW1lIiwicGF0dGVybiIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiU1lNQk9MX1BBVFRFUk5fTkFNRSIsIlBST1BFUlRZX1BBVFRFUk5fTkFNRSIsIk9QRVJBVE9SX1BBVFRFUk5fTkFNRSIsImdldFBhdHRlcm5zIiwicGF0dGVybnMiLCJzZXROYW1lIiwic2V0Qk5GIiwic2V0UGF0dGVybiIsInJlc2V0Qk5GIiwicmVzZXRQYXR0ZXJuIiwidXBkYXRlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY3VzdG9tR3JhbW1hciIsImZyb21OYW1lIiwiZnJvbU5hbWVUZXJtQk5GU3RhdGVtZW50Qk5GVHlwZVBhdHRlcm5TeW1ib2xQYXR0ZXJuUHJvcGVydHlQYXR0ZXJuQW5kT3BlcmF0b3JQYXR0ZXJuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt5QkFKUTt5QkFDdUI7NEJBQ2lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RixJQUFBLEFBQU1BLDhCQUFOO2FBQU1BLGNBQ1BDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxlQUFlLEVBQUVDLGVBQWU7Z0NBRGxGUDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBOztrQkFSTlA7O1lBV25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLElBQUk7WUFDbEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7O29CQUFPQyxXQUFBQSxpRUFBVztnQkFDaEIsSUFBSUM7Z0JBRUosT0FBUUQ7b0JBQ04sS0FBS0UseUJBQWM7d0JBQUVELE1BQU0sSUFBSSxDQUFDVCxPQUFPO3dCQUFFO29CQUN6QyxLQUFLVyw4QkFBbUI7d0JBQUVGLE1BQU0sSUFBSSxDQUFDUixZQUFZO3dCQUFFO29CQUVuRDt3QkFBUzs0QkFDUCxJQUFNVyxZQUFZO2dDQUNWRix5QkFBYztnQ0FDZEMsOEJBQW1COzZCQUNwQixFQUNERSxjQUFjRCxVQUFVRSxNQUFNLENBQUMsU0FBQ0QsYUFBYUw7Z0NBQzNDLElBQU1DLE1BQU0sTUFBS0YsTUFBTSxDQUFDQztnQ0FFeEIsSUFBSUMsUUFBUU0sdUJBQVksRUFBRTtv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