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
var _patternNames = require("./patternNames");
var _ruleNames = require("./ruleNames");
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
    function CustomGrammar(name, typePattern, operatorPattern, termBNF, expressionBNF, statementBNF, metastatementBNF) {
        _classCallCheck(this, CustomGrammar);
        this.name = name;
        this.typePattern = typePattern;
        this.operatorPattern = operatorPattern;
        this.termBNF = termBNF;
        this.expressionBNF = expressionBNF;
        this.statementBNF = statementBNF;
        this.metastatementBNF = metastatementBNF;
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
                    case _ruleNames.EXPRESSION_RULE_NAME:
                        bnf = this.expressionBNF;
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
                                _ruleNames.EXPRESSION_RULE_NAME,
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
                    case _ruleNames.EXPRESSION_RULE_NAME:
                        this.expressionBNF = bnf;
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
                var name = this.name, typePattern = this.typePattern, operatorPattern = this.operatorPattern, termBNF = this.termBNF, expressionBNF = this.expressionBNF, statementBNF = this.statementBNF, metastatementBNF = this.metastatementBNF, json = {
                    name: name,
                    typePattern: typePattern,
                    operatorPattern: operatorPattern,
                    termBNF: termBNF,
                    expressionBNF: expressionBNF,
                    statementBNF: statementBNF,
                    metastatementBNF: metastatementBNF
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var name = json.name, typePattern = json.typePattern, operatorPattern = json.operatorPattern, termBNF = json.termBNF, expressionBNF = json.expressionBNF, statementBNF = json.statementBNF, metastatementBNF = json.metastatementBNF, customGrammar = new CustomGrammar(name, typePattern, operatorPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);
                return customGrammar;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var typePattern = _constants.EMPTY_STRING, operatorPattern = _constants.EMPTY_STRING, termBNF = _constants.EMPTY_STRING, expressionBNF = _constants.EMPTY_STRING, statementBNF = _constants.EMPTY_STRING, metastatementBNF = _constants.EMPTY_STRING, customGrammar = new CustomGrammar(name, typePattern, operatorPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi9wYXR0ZXJuTmFtZXNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBFWFBSRVNTSU9OX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGVQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlUGF0dGVybiA9IHR5cGVQYXR0ZXJuO1xuICAgIHRoaXMub3BlcmF0b3JQYXR0ZXJuID0gb3BlcmF0b3JQYXR0ZXJuO1xuICAgIHRoaXMudGVybUJORiA9IHRlcm1CTkY7XG4gICAgdGhpcy5leHByZXNzaW9uQk5GID0gZXhwcmVzc2lvbkJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBtZXRhc3RhdGVtZW50Qk5GO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUgPSBudWxsKSB7XG4gICAgbGV0IGJuZjtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IGJuZiA9IHRoaXMudGVybUJORjsgYnJlYWs7XG4gICAgICBjYXNlIEVYUFJFU1NJT05fUlVMRV9OQU1FOiBibmYgPSB0aGlzLmV4cHJlc3Npb25CTkY7IGJyZWFrO1xuICAgICAgY2FzZSBTVEFURU1FTlRfUlVMRV9OQU1FOiBibmYgPSB0aGlzLnN0YXRlbWVudEJORjsgYnJlYWs7XG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOiBibmYgPSB0aGlzLm1ldGFzdGF0ZW1lbnRCTkY7IGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lcyA9IFtcbiAgICAgICAgICAgICAgICBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICAgICAgICBFWFBSRVNTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICAgICAgICBTVEFURU1FTlRfUlVMRV9OQU1FLFxuICAgICAgICAgICAgICAgIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gcnVsZU5hbWVzLnJlZHVjZSgoY29tYmluZWRCTkYsIHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKGJuZiAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICBjb21iaW5lZEJORiA9IGAke2NvbWJpbmVkQk5GfVxuICAgICAgICAgICAgXG4ke2JuZn1gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb21iaW5lZEJORjtcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgICAgICBibmYgPSBjb21iaW5lZEJORjsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBnZXRQYXR0ZXJuKHBhdHRlcm5OYW1lKSB7XG4gICAgbGV0IHBhdHRlcm47XG5cbiAgICBzd2l0Y2ggKHBhdHRlcm5OYW1lKSB7XG4gICAgICBjYXNlIFRZUEVfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy50eXBlUGF0dGVybjsgYnJlYWs7XG4gICAgICBjYXNlIE9QRVJBVE9SX1BBVFRFUk5fTkFNRTogcGF0dGVybiA9IHRoaXMub3BlcmF0b3JQYXR0ZXJuOyBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0dGVybjtcbiAgfVxuXG4gIGdldFBhdHRlcm5zKCkge1xuICAgIGNvbnN0IHBhdHRlcm5zID0gW1xuICAgICAgdGhpcy50eXBlUGF0dGVybixcbiAgICAgIHRoaXMub3BlcmF0b3JQYXR0ZXJuXG4gICAgXTtcblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMudGVybUJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFWFBSRVNTSU9OX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy5leHByZXNzaW9uQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHN3aXRjaCAocGF0dGVybk5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMudHlwZVBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9QRVJBVE9SX1BBVFRFUk5fTkFNRTpcbiAgICAgICAgdGhpcy5vcGVyYXRvclBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgYm5mID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICByZXNldFBhdHRlcm4ocGF0dGVybk5hbWUpIHtcbiAgICBjb25zdCBwYXR0ZXJuID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdGhpcy50eXBlUGF0dGVybixcbiAgICAgICAgICBvcGVyYXRvclBhdHRlcm4gPSB0aGlzLm9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgICB0ZXJtQk5GID0gdGhpcy50ZXJtQk5GLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSB0aGlzLmV4cHJlc3Npb25CTkYsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IHRoaXMubWV0YXN0YXRlbWVudEJORixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICAgICAgb3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICAgICAgdGVybUJORixcbiAgICAgICAgICAgIGV4cHJlc3Npb25CTkYsXG4gICAgICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GXG4gICAgICAgICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCB0eXBlUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYgfSA9IGpzb24sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHR5cGVQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgdHlwZVBhdHRlcm4gPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgb3BlcmF0b3JQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHRlcm1CTkYgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdHlwZVBhdHRlcm4sIG9wZXJhdG9yUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXIiLCJuYW1lIiwidHlwZVBhdHRlcm4iLCJvcGVyYXRvclBhdHRlcm4iLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJnZXROYW1lIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJibmYiLCJURVJNX1JVTEVfTkFNRSIsIkVYUFJFU1NJT05fUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiY29tYmluZWRCTkYiLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJnZXRQYXR0ZXJuIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuIiwiVFlQRV9QQVRURVJOX05BTUUiLCJPUEVSQVRPUl9QQVRURVJOX05BTUUiLCJnZXRQYXR0ZXJucyIsInBhdHRlcm5zIiwic2V0TmFtZSIsInNldEJORiIsInNldFBhdHRlcm4iLCJyZXNldEJORiIsInJlc2V0UGF0dGVybiIsInVwZGF0ZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImN1c3RvbUdyYW1tYXIiLCJmcm9tTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBTVFBLGFBQWE7Ozt5QkFKTCxhQUFhOzRCQUNlLGdCQUFnQjt5QkFDMEIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakcsSUFBQSxBQUFNQSxhQUFhLGlCQUFuQjthQUFNQSxhQUFhLENBQ3BCQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxnQkFBZ0I7O1FBQ3BHLElBQUksQ0FBQ04sSUFBSSxHQUFHQSxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUNDLGVBQWUsR0FBR0EsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBLGdCQUFnQixDQUFDOzs7O1lBRzNDQyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sR0FBRztnQkFDUixPQUFPLElBQUksQ0FBQ1AsSUFBSSxDQUFDO2FBQ2xCOzs7WUFFRFEsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQWtCO29CQUFqQkMsUUFBUSxHQUFSQSwrQ0FBZSxrQkFBSixJQUFJOztnQkFDcEIsSUFBSUMsR0FBRyxBQUFDO2dCQUVSLE9BQVFELFFBQVE7b0JBQ2QsS0FBS0UsVUFBYyxlQUFBO3dCQUFFRCxHQUFHLEdBQUcsSUFBSSxDQUFDUCxPQUFPLENBQUM7d0JBQUMsTUFBTTtvQkFDL0MsS0FBS1MsVUFBb0IscUJBQUE7d0JBQUVGLEdBQUcsR0FBRyxJQUFJLENBQUNOLGFBQWEsQ0FBQzt3QkFBQyxNQUFNO29CQUMzRCxLQUFLUyxVQUFtQixvQkFBQTt3QkFBRUgsR0FBRyxHQUFHLElBQUksQ0FBQ0wsWUFBWSxDQUFDO3dCQUFDLE1BQU07b0JBQ3pELEtBQUtTLFVBQXVCLHdCQUFBO3dCQUFFSixHQUFHLEdBQUcsSUFBSSxDQUFDSixnQkFBZ0IsQ0FBQzt3QkFBQyxNQUFNO29CQUVqRTt3QkFBUzs0QkFDUCxJQUFNUyxTQUFTLEdBQUc7Z0NBQ1ZKLFVBQWMsZUFBQTtnQ0FDZEMsVUFBb0IscUJBQUE7Z0NBQ3BCQyxVQUFtQixvQkFBQTtnQ0FDbkJDLFVBQXVCLHdCQUFBOzZCQUN4QixFQUNERSxXQUFXLEdBQUdELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFNBQUNELFdBQVcsRUFBRVAsUUFBUSxFQUFLO2dDQUM5RCxJQUFNQyxHQUFHLEdBQUcsTUFBS0YsTUFBTSxDQUFDQyxRQUFRLENBQUMsQUFBQztnQ0FFbEMsSUFBSUMsR0FBRyxLQUFLUSxVQUFZLGFBQUEsRUFBRTtvQ0FDeEJGLFdBQVcsR0FBRyxBQUFDLEVBQUEsQ0FFekJOLE1BQUcsQ0FGd0JNLFdBQVcsRUFBQyxrQkFFekMsQ0FBTSxDQUFBLE1BQUEsQ0FBSk4sR0FBRyxDQUFFLENBQUM7aUNBQ0c7Z0NBRUQsT0FBT00sV0FBVyxDQUFDOzZCQUNwQixFQUFFRSxVQUFZLGFBQUEsQ0FBQyxBQUFDOzRCQUVqQlIsR0FBRyxHQUFHTSxXQUFXLENBQUMsQ0FBRSxHQUFHOzRCQUV2QixNQUFNO3lCQUNQO2lCQUNGO2dCQUVELE9BQU9OLEdBQUcsQ0FBQzthQUNaOzs7WUFFRFMsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLENBQUNDLFdBQVcsRUFBRTtnQkFDdEIsSUFBSUMsT0FBTyxBQUFDO2dCQUVaLE9BQVFELFdBQVc7b0JBQ2pCLEtBQUtFLGFBQWlCLGtCQUFBO3dCQUFFRCxPQUFPLEdBQUcsSUFBSSxDQUFDcEIsV0FBVyxDQUFDO3dCQUFDLE1BQU07b0JBQzFELEtBQUtzQixhQUFxQixzQkFBQTt3QkFBRUYsT0FBTyxHQUFHLElBQUksQ0FBQ25CLGVBQWUsQ0FBQzt3QkFBQyxNQUFNO2lCQUNuRTtnQkFFRCxPQUFPbUIsT0FBTyxDQUFDO2FBQ2hCOzs7WUFFREcsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osSUFBTUMsUUFBUSxHQUFHO29CQUNmLElBQUksQ0FBQ3hCLFdBQVc7b0JBQ2hCLElBQUksQ0FBQ0MsZUFBZTtpQkFDckIsQUFBQztnQkFFRixPQUFPdUIsUUFBUSxDQUFDO2FBQ2pCOzs7WUFFREMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUMxQixJQUFJLEVBQUU7Z0JBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUksQ0FBQzthQUNsQjs7O1lBRUQyQixHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sQ0FBQ2xCLFFBQVEsRUFBRUMsR0FBRyxFQUFFO2dCQUNwQixPQUFRRCxRQUFRO29CQUNkLEtBQUtFLFVBQWMsZUFBQTt3QkFDakIsSUFBSSxDQUFDUixPQUFPLEdBQUdPLEdBQUcsQ0FBQzt3QkFFbkIsTUFBTTtvQkFFUixLQUFLRSxVQUFvQixxQkFBQTt3QkFDdkIsSUFBSSxDQUFDUixhQUFhLEdBQUdNLEdBQUcsQ0FBQzt3QkFFekIsTUFBTTtvQkFFUixLQUFLRyxVQUFtQixvQkFBQTt3QkFDdEIsSUFBSSxDQUFDUixZQUFZLEdBQUdLLEdBQUcsQ0FBQzt3QkFFeEIsTUFBTTtvQkFFUixLQUFLSSxVQUF1Qix3QkFBQTt3QkFDMUIsSUFBSSxDQUFDUixnQkFBZ0IsR0FBR0ksR0FBRyxDQUFDO3dCQUU1QixNQUFNO2lCQUNUO2FBQ0Y7OztZQUVEa0IsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLENBQUNSLFdBQVcsRUFBRUMsT0FBTyxFQUFFO2dCQUMvQixPQUFRRCxXQUFXO29CQUNqQixLQUFLRSxhQUFpQixrQkFBQTt3QkFDcEIsSUFBSSxDQUFDckIsV0FBVyxHQUFHb0IsT0FBTyxDQUFDO3dCQUUzQixNQUFNO29CQUVSLEtBQUtFLGFBQXFCLHNCQUFBO3dCQUN4QixJQUFJLENBQUNyQixlQUFlLEdBQUdtQixPQUFPLENBQUM7d0JBRS9CLE1BQU07aUJBQ1Q7YUFDRjs7O1lBRURRLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDcEIsUUFBUSxFQUFFO2dCQUNqQixJQUFNQyxHQUFHLEdBQUdRLFVBQVksYUFBQSxBQUFDO2dCQUV6QixJQUFJLENBQUNTLE1BQU0sQ0FBQ2xCLFFBQVEsRUFBRUMsR0FBRyxDQUFDLENBQUM7YUFDNUI7OztZQUVEb0IsR0FBWSxFQUFaQSxjQUFZO21CQUFaQSxTQUFBQSxZQUFZLENBQUNWLFdBQVcsRUFBRTtnQkFDeEIsSUFBTUMsT0FBTyxHQUFHSCxVQUFZLGFBQUEsQUFBQztnQkFFN0IsSUFBSSxDQUFDVSxVQUFVLENBQUNSLFdBQVcsRUFBRUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7OztZQUVEVSxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sQ0FBQ3RCLFFBQVEsRUFBRUMsR0FBRyxFQUFFVSxXQUFXLEVBQUVDLE9BQU8sRUFBRTtnQkFDMUMsSUFBSSxDQUFDTSxNQUFNLENBQUNsQixRQUFRLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO2dCQUUzQixJQUFJLENBQUNrQixVQUFVLENBQUNSLFdBQVcsRUFBRUMsT0FBTyxDQUFDLENBQUM7YUFDdkM7OztZQUVEVyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxJQUFNaEMsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxFQUM5QkMsZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxFQUN0Q0MsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxFQUN0QkMsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxFQUNsQ0MsWUFBWSxHQUFHLElBQUksQ0FBQ0EsWUFBWSxFQUNoQ0MsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQSxnQkFBZ0IsRUFDeEMyQixJQUFJLEdBQUc7b0JBQ0xqQyxJQUFJLEVBQUpBLElBQUk7b0JBQ0pDLFdBQVcsRUFBWEEsV0FBVztvQkFDWEMsZUFBZSxFQUFmQSxlQUFlO29CQUNmQyxPQUFPLEVBQVBBLE9BQU87b0JBQ1BDLGFBQWEsRUFBYkEsYUFBYTtvQkFDYkMsWUFBWSxFQUFaQSxZQUFZO29CQUNaQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtpQkFDakIsQUFBQztnQkFFUixPQUFPMkIsSUFBSSxDQUFDO2FBQ2I7Ozs7WUFFTUMsR0FBUSxFQUFSQSxVQUFRO21CQUFmLFNBQU9BLFFBQVEsQ0FBQ0QsSUFBSSxFQUFFO2dCQUNwQixJQUFRakMsSUFBSSxHQUEyRmlDLElBQUksQ0FBbkdqQyxJQUFJLEVBQUVDLFdBQVcsR0FBOEVnQyxJQUFJLENBQTdGaEMsV0FBVyxFQUFFQyxlQUFlLEdBQTZEK0IsSUFBSSxDQUFoRi9CLGVBQWUsRUFBRUMsT0FBTyxHQUFvRDhCLElBQUksQ0FBL0Q5QixPQUFPLEVBQUVDLGFBQWEsR0FBcUM2QixJQUFJLENBQXREN0IsYUFBYSxFQUFFQyxZQUFZLEdBQXVCNEIsSUFBSSxDQUF2QzVCLFlBQVksRUFBRUMsZ0JBQWdCLEdBQUsyQixJQUFJLENBQXpCM0IsZ0JBQWdCLEVBQzVGNkIsYUFBYSxHQUFHLElBQUlwQyxhQUFhLENBQUNDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLE9BQU8sRUFBRUMsYUFBYSxFQUFFQyxZQUFZLEVBQUVDLGdCQUFnQixDQUFDLEFBQUM7Z0JBRXBJLE9BQU82QixhQUFhLENBQUM7YUFDdEI7OztZQUVNQyxHQUFRLEVBQVJBLFVBQVE7bUJBQWYsU0FBT0EsUUFBUSxDQUFDcEMsSUFBSSxFQUFFO2dCQUNwQixJQUFNQyxXQUFXLEdBQUdpQixVQUFZLGFBQUEsRUFDMUJoQixlQUFlLEdBQUdnQixVQUFZLGFBQUEsRUFDOUJmLE9BQU8sR0FBR2UsVUFBWSxhQUFBLEVBQ3RCZCxhQUFhLEdBQUdjLFVBQVksYUFBQSxFQUM1QmIsWUFBWSxHQUFHYSxVQUFZLGFBQUEsRUFDM0JaLGdCQUFnQixHQUFHWSxVQUFZLGFBQUEsRUFDL0JpQixhQUFhLEdBQUcsSUFBSXBDLGFBQWEsQ0FBQ0MsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCLENBQUMsQUFBQztnQkFFcEksT0FBTzZCLGFBQWEsQ0FBQzthQUN0Qjs7OztDQUNGLEVBQUEifQ==