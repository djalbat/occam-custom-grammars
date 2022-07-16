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
    _ruleNames.TYPE_RULE_NAME,
    _ruleNames.TERM_RULE_NAME,
    _ruleNames.EXPRESSION_RULE_NAME,
    _ruleNames.STATEMENT_RULE_NAME,
    _ruleNames.METASTATEMENT_RULE_NAME
];
var CustomGrammar = /*#__PURE__*/ function() {
    function CustomGrammar(name, lexicalPattern, typeBNF, termBNF, expressionBNF, statementBNF, metastatementBNF) {
        _classCallCheck(this, CustomGrammar);
        this.name = name;
        this.lexicalPattern = lexicalPattern;
        this.typeBNF = typeBNF;
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
            key: "getLexicalPattern",
            value: function getLexicalPattern() {
                return this.lexicalPattern;
            }
        },
        {
            key: "getBNF",
            value: function getBNF() {
                var ruleName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var _this = this;
                var bnf;
                switch(ruleName){
                    case _ruleNames.TYPE_RULE_NAME:
                        bnf = this.typeBNF;
                        break;
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
            key: "setLexicalPattern",
            value: function setLexicalPattern(lexicalPattern) {
                this.lexicalPattern = lexicalPattern;
            }
        },
        {
            key: "setBNF",
            value: function setBNF(ruleName, bnf) {
                switch(ruleName){
                    case _ruleNames.TYPE_RULE_NAME:
                        this.typeBNF = bnf;
                        break;
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
            key: "resetLexicalPattern",
            value: function resetLexicalPattern() {
                var lexicalPattern = null;
                this.setLexicalPattern(lexicalPattern);
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
            value: function update(ruleName, bnf, lexicalPattern) {
                this.setBNF(ruleName, bnf);
                this.setLexicalPattern(lexicalPattern);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, lexicalPattern = this.lexicalPattern, typeBNF = this.typeBNF, termBNF = this.termBNF, expressionBNF = this.expressionBNF, statementBNF = this.statementBNF, metastatementBNF = this.metastatementBNF, json = {
                    name: name,
                    lexicalPattern: lexicalPattern,
                    typeBNF: typeBNF,
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
                var name = json.name, lexicalPattern = json.lexicalPattern, typeBNF = json.typeBNF, termBNF = json.termBNF, expressionBNF = json.expressionBNF, statementBNF = json.statementBNF, metastatementBNF = json.metastatementBNF, customGrammar = new CustomGrammar(name, lexicalPattern, typeBNF, termBNF, expressionBNF, statementBNF, metastatementBNF);
                return customGrammar;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var lexicalPattern = null, typeBNF = null, termBNF = null, expressionBNF = null, statementBNF = null, metastatementBNF = null, customGrammar = new CustomGrammar(name, lexicalPattern, typeBNF, termBNF, expressionBNF, statementBNF, metastatementBNF);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRZUEVfUlVMRV9OQU1FLCBURVJNX1JVTEVfTkFNRSwgRVhQUkVTU0lPTl9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUsIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHJ1bGVOYW1lcyA9IFtcbiAgVFlQRV9SVUxFX05BTUUsXG4gIFRFUk1fUlVMRV9OQU1FLFxuICBFWFBSRVNTSU9OX1JVTEVfTkFNRSxcbiAgU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdHlwZUJORiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gICAgdGhpcy50eXBlQk5GID0gdHlwZUJORjtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUgPSBudWxsKSB7XG4gICAgbGV0IGJuZjtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9SVUxFX05BTUU6IGJuZiA9IHRoaXMudHlwZUJORjsgYnJlYWs7XG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiBibmYgPSB0aGlzLnRlcm1CTkY7IGJyZWFrO1xuICAgICAgY2FzZSBFWFBSRVNTSU9OX1JVTEVfTkFNRTogYm5mID0gdGhpcy5leHByZXNzaW9uQk5GOyBicmVhaztcbiAgICAgIGNhc2UgU1RBVEVNRU5UX1JVTEVfTkFNRTogYm5mID0gdGhpcy5zdGF0ZW1lbnRCTkY7IGJyZWFrO1xuICAgICAgY2FzZSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRTogYm5mID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GOyBicmVhaztcblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCBjb21iaW5lZEJORiA9IHJ1bGVOYW1lcy5yZWR1Y2UoKGNvbWJpbmVkQk5GLCBydWxlTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgICAgIGlmIChibmYgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gYCR7Y29tYmluZWRCTkZ9XG4gICAgICAgICAgICBcbiR7Ym5mfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbWJpbmVkQk5GO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgICAgIGJuZiA9IGNvbWJpbmVkQk5GOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybikge1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIHNldEJORihydWxlTmFtZSwgYm5mKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBUWVBFX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy50eXBlQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLnRlcm1CTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRVhQUkVTU0lPTl9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLnN0YXRlbWVudEJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0TGV4aWNhbFBhdHRlcm4oKSB7IFxuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHJlc2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgYm5mID0gbnVsbDtcblxuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICB9XG5cbiAgdXBkYXRlKHJ1bGVOYW1lLCBibmYsIGxleGljYWxQYXR0ZXJuKSB7XG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMubGV4aWNhbFBhdHRlcm4sXG4gICAgICAgICAgdHlwZUJORiA9IHRoaXMudHlwZUJORixcbiAgICAgICAgICB0ZXJtQk5GID0gdGhpcy50ZXJtQk5GLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSB0aGlzLmV4cHJlc3Npb25CTkYsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IHRoaXMubWV0YXN0YXRlbWVudEJORixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuLFxuICAgICAgICAgICAgdHlwZUJORixcbiAgICAgICAgICAgIHRlcm1CTkYsXG4gICAgICAgICAgICBleHByZXNzaW9uQk5GLFxuICAgICAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICAgICAgbWV0YXN0YXRlbWVudEJORlxuICAgICAgICAgIH07XG4gICAgXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgbmFtZSwgbGV4aWNhbFBhdHRlcm4sIHR5cGVCTkYsIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORiB9ID0ganNvbixcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHR5cGVCTkYsIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHR5cGVCTkYgPSBudWxsLFxuICAgICAgICAgIHRlcm1CTkYgPSBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IG51bGwsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0eXBlQk5GLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hciIsInJ1bGVOYW1lcyIsIlRZUEVfUlVMRV9OQU1FIiwiVEVSTV9SVUxFX05BTUUiLCJFWFBSRVNTSU9OX1JVTEVfTkFNRSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInR5cGVCTkYiLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJnZXROYW1lIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJnZXRCTkYiLCJydWxlTmFtZSIsImJuZiIsImNvbWJpbmVkQk5GIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwic2V0TmFtZSIsInNldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwicmVzZXRMZXhpY2FsUGF0dGVybiIsInJlc2V0Qk5GIiwidXBkYXRlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY3VzdG9tR3JhbW1hciIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFhUUEsYUFBYTs7O3lCQVhMLGFBQWE7eUJB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