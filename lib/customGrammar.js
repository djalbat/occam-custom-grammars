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
var ruleNames = [
    _ruleNames.TERM_RULE_NAME,
    _ruleNames.EXPRESSION_RULE_NAME,
    _ruleNames.STATEMENT_RULE_NAME,
    _ruleNames.METASTATEMENT_RULE_NAME
];
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
            key: "getTypePattern",
            value: function getTypePattern() {
                return this.typePattern;
            }
        },
        {
            key: "getOperatorPattern",
            value: function getOperatorPattern() {
                return this.operatorPattern;
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
                            var combinedBNF = ruleNames.reduce(function(combinedBNF, ruleName) {
                                var bnf = _this.getBNF(ruleName);
                                if (bnf !== null) {
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
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setTypePattern",
            value: function setTypePattern(typePattern) {
                this.typePattern = typePattern;
            }
        },
        {
            key: "setOperatorPattern",
            value: function setOperatorPattern(operatorPattern) {
                this.operatorPattern = operatorPattern;
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
            key: "resetTypePattern",
            value: function resetTypePattern() {
                var typePattern = null;
                this.setTypePattern(typePattern);
            }
        },
        {
            key: "resetOperatorPattern",
            value: function resetOperatorPattern() {
                var operatorPattern = null;
                this.setOperatorPattern(operatorPattern);
            }
        },
        {
            key: "resetBNF",
            value: function resetBNF(ruleName) {
                var bnf = null;
                this.setBNF(ruleName, bnf);
            }
        },
        {
            key: "update",
            value: function update(ruleName, bnf, typePattern, operatorPattern) {
                this.setBNF(ruleName, bnf);
                this.setTypePattern(typePattern);
                this.setOperatorPattern(operatorPattern);
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
                var typePattern = null, operatorPattern = null, termBNF = null, expressionBNF = null, statementBNF = null, metastatementBNF = null, customGrammar = new CustomGrammar(name, typePattern, operatorPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBFWFBSRVNTSU9OX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgcnVsZU5hbWVzID0gW1xuICBURVJNX1JVTEVfTkFNRSxcbiAgRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gIFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdHlwZVBhdHRlcm4sIG9wZXJhdG9yUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGVQYXR0ZXJuID0gdHlwZVBhdHRlcm47XG4gICAgdGhpcy5vcGVyYXRvclBhdHRlcm4gPSBvcGVyYXRvclBhdHRlcm47XG4gICAgdGhpcy50ZXJtQk5GID0gdGVybUJORjtcbiAgICB0aGlzLmV4cHJlc3Npb25CTkYgPSBleHByZXNzaW9uQk5GO1xuICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkY7XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGVQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0T3BlcmF0b3JQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLm9wZXJhdG9yUGF0dGVybjtcbiAgfVxuXG4gIGdldEJORihydWxlTmFtZSA9IG51bGwpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTogYm5mID0gdGhpcy50ZXJtQk5GOyBicmVhaztcbiAgICAgIGNhc2UgRVhQUkVTU0lPTl9SVUxFX05BTUU6IGJuZiA9IHRoaXMuZXhwcmVzc2lvbkJORjsgYnJlYWs7XG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6IGJuZiA9IHRoaXMuc3RhdGVtZW50Qk5GOyBicmVhaztcbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IGJuZiA9IHRoaXMubWV0YXN0YXRlbWVudEJORjsgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgY29tYmluZWRCTkYgPSBydWxlTmFtZXMucmVkdWNlKChjb21iaW5lZEJORiwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORihydWxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoYm5mICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb21iaW5lZEJORiA9IGAke2NvbWJpbmVkQk5GfVxuICAgICAgICAgICAgXG4ke2JuZn1gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb21iaW5lZEJORjtcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgICAgICBibmYgPSBjb21iaW5lZEJORjsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0VHlwZVBhdHRlcm4odHlwZVBhdHRlcm4pIHtcbiAgICB0aGlzLnR5cGVQYXR0ZXJuID0gdHlwZVBhdHRlcm47XG4gIH1cblxuICBzZXRPcGVyYXRvclBhdHRlcm4ob3BlcmF0b3JQYXR0ZXJuKSB7XG4gICAgdGhpcy5vcGVyYXRvclBhdHRlcm4gPSBvcGVyYXRvclBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMudGVybUJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFWFBSRVNTSU9OX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy5leHByZXNzaW9uQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRUeXBlUGF0dGVybigpIHtcbiAgICBjb25zdCB0eXBlUGF0dGVybiA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5zZXRUeXBlUGF0dGVybih0eXBlUGF0dGVybik7XG4gIH1cblxuICByZXNldE9wZXJhdG9yUGF0dGVybigpIHtcbiAgICBjb25zdCBvcGVyYXRvclBhdHRlcm4gPSBudWxsO1xuXG4gICAgdGhpcy5zZXRPcGVyYXRvclBhdHRlcm4ob3BlcmF0b3JQYXR0ZXJuKTtcbiAgfVxuXG4gIHJlc2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgYm5mID0gbnVsbDtcblxuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICB9XG5cbiAgdXBkYXRlKHJ1bGVOYW1lLCBibmYsIHR5cGVQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcblxuICAgIHRoaXMuc2V0VHlwZVBhdHRlcm4odHlwZVBhdHRlcm4pO1xuXG4gICAgdGhpcy5zZXRPcGVyYXRvclBhdHRlcm4ob3BlcmF0b3JQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdGhpcy50eXBlUGF0dGVybixcbiAgICAgICAgICBvcGVyYXRvclBhdHRlcm4gPSB0aGlzLm9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgICB0ZXJtQk5GID0gdGhpcy50ZXJtQk5GLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSB0aGlzLmV4cHJlc3Npb25CTkYsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IHRoaXMubWV0YXN0YXRlbWVudEJORixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHR5cGVQYXR0ZXJuLFxuICAgICAgICAgICAgb3BlcmF0b3JQYXR0ZXJuLFxuICAgICAgICAgICAgdGVybUJORixcbiAgICAgICAgICAgIGV4cHJlc3Npb25CTkYsXG4gICAgICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GXG4gICAgICAgICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCB0eXBlUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYgfSA9IGpzb24sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHR5cGVQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgdHlwZVBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIG9wZXJhdG9yUGF0dGVybiA9IG51bGwsXG4gICAgICAgICAgdGVybUJORiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gbnVsbCxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdHlwZVBhdHRlcm4sIG9wZXJhdG9yUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXIiLCJydWxlTmFtZXMiLCJURVJNX1JVTEVfTkFNRSIsIkVYUFJFU1NJT05fUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwibmFtZSIsInR5cGVQYXR0ZXJuIiwib3BlcmF0b3JQYXR0ZXJuIiwidGVybUJORiIsImV4cHJlc3Npb25CTkYiLCJzdGF0ZW1lbnRCTkYiLCJtZXRhc3RhdGVtZW50Qk5GIiwiZ2V0TmFtZSIsImdldFR5cGVQYXR0ZXJuIiwiZ2V0T3BlcmF0b3JQYXR0ZXJuIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJibmYiLCJjb21iaW5lZEJORiIsInJlZHVjZSIsIkVNUFRZX1NUUklORyIsInNldE5hbWUiLCJzZXRUeXBlUGF0dGVybiIsInNldE9wZXJhdG9yUGF0dGVybiIsInNldEJORiIsInJlc2V0VHlwZVBhdHRlcm4iLCJyZXNldE9wZXJhdG9yUGF0dGVybiIsInJlc2V0Qk5GIiwidXBkYXRlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY3VzdG9tR3JhbW1hciIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFZUUEsYUFBYTs7O3lCQVZMLGFBQWE7eUJBQ3lELGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhILElBQU1DLFNBQVMsR0FBRztJQUNoQkMsVUFBYyxlQUFBO0lBQ2RDLFVBQW9CLHFCQUFBO0lBQ3BCQyxVQUFtQixvQkFBQTtJQUNuQkMsVUFBdUIsd0JBQUE7Q0FDeEIsQUFBQztBQUVhLElBQUEsQUFBTUwsYUFBYSxpQkFBbkI7YUFBTUEsYUFBYSxDQUNwQk0sSUFBSSxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCOztRQUNwRyxJQUFJLENBQUNOLElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDQyxlQUFlLEdBQUdBLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQSxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDQyxZQUFZLEdBQUdBLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUNDLGdCQUFnQixHQUFHQSxnQkFBZ0IsQ0FBQzs7OztZQUczQ0MsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNQLElBQUksQ0FBQzthQUNsQjs7O1lBRURRLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQWRBLFNBQUFBLGNBQWMsR0FBRztnQkFDZixP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