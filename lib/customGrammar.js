"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
    _ruleNames.METASTATEMENT_RULE_NAME,
    _ruleNames.STATEMENT_RULE_NAME,
    _ruleNames.EXPRESSION_RULE_NAME,
    _ruleNames.TERM_RULE_NAME
];
var CustomGrammar = /*#__PURE__*/ function() {
    function CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF) {
        _classCallCheck(this, CustomGrammar);
        this.name = name;
        this.lexicalPattern = lexicalPattern;
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
                var ruleName1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var bnf1;
                switch(ruleName1){
                    case _ruleNames.TERM_RULE_NAME:
                        bnf1 = this.termBNF;
                        break;
                    case _ruleNames.EXPRESSION_RULE_NAME:
                        bnf1 = this.expressionBNF;
                        break;
                    case _ruleNames.STATEMENT_RULE_NAME:
                        bnf1 = this.statementBNF;
                        break;
                    case _ruleNames.METASTATEMENT_RULE_NAME:
                        bnf1 = this.metastatementBNF;
                        break;
                    default:
                        {
                            var _this = this;
                            var combinedBNF1 = ruleNames.reduce(function(combinedBNF, ruleName) {
                                var bnf = _this.getBNF(ruleName);
                                if (bnf !== null) {
                                    combinedBNF = "".concat(combinedBNF, "\n            \n").concat(bnf);
                                }
                                return combinedBNF;
                            }, _constants.EMPTY_STRING);
                            bnf1 = combinedBNF1; ///
                            break;
                        }
                }
                return bnf1;
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
                var name = this.name, lexicalPattern = this.lexicalPattern, termBNF = this.termBNF, expressionBNF = this.expressionBNF, statementBNF = this.statementBNF, metastatementBNF = this.metastatementBNF, json = {
                    name: name,
                    lexicalPattern: lexicalPattern,
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
                var name = json.name, lexicalPattern = json.lexicalPattern, termBNF = json.termBNF, expressionBNF = json.expressionBNF, statementBNF = json.statementBNF, metastatementBNF = json.metastatementBNF, customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);
                return customGrammar;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var lexicalPattern = null, termBNF = null, expressionBNF = null, statementBNF = null, metastatementBNF = null, customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();
exports.default = CustomGrammar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBFWFBSRVNTSU9OX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgcnVsZU5hbWVzID0gW1xuICBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gIFRFUk1fUlVMRV9OQU1FXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICAgIHRoaXMudGVybUJORiA9IHRlcm1CTkY7XG4gICAgdGhpcy5leHByZXNzaW9uQk5GID0gZXhwcmVzc2lvbkJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBtZXRhc3RhdGVtZW50Qk5GO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRMZXhpY2FsUGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIGdldEJORihydWxlTmFtZSA9IG51bGwpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTogYm5mID0gdGhpcy50ZXJtQk5GOyBicmVhaztcbiAgICAgIGNhc2UgRVhQUkVTU0lPTl9SVUxFX05BTUU6IGJuZiA9IHRoaXMuZXhwcmVzc2lvbkJORjsgYnJlYWs7XG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6IGJuZiA9IHRoaXMuc3RhdGVtZW50Qk5GOyBicmVhaztcbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IGJuZiA9IHRoaXMubWV0YXN0YXRlbWVudEJORjsgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgY29tYmluZWRCTkYgPSBydWxlTmFtZXMucmVkdWNlKChjb21iaW5lZEJORiwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORihydWxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoYm5mICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb21iaW5lZEJORiA9IGAke2NvbWJpbmVkQk5GfVxuICAgICAgICAgICAgXG4ke2JuZn1gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb21iaW5lZEJORjtcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgICAgICBibmYgPSBjb21iaW5lZEJORjsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMudGVybUJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFWFBSRVNTSU9OX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy5leHByZXNzaW9uQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRMZXhpY2FsUGF0dGVybigpIHsgXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgbGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5sZXhpY2FsUGF0dGVybixcbiAgICAgICAgICB0ZXJtQk5GID0gdGhpcy50ZXJtQk5GLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSB0aGlzLmV4cHJlc3Npb25CTkYsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IHRoaXMubWV0YXN0YXRlbWVudEJORixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuLFxuICAgICAgICAgICAgdGVybUJORixcbiAgICAgICAgICAgIGV4cHJlc3Npb25CTkYsXG4gICAgICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GXG4gICAgICAgICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GIH0gPSBqc29uLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGwsXG4gICAgICAgICAgdGVybUJORiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gbnVsbCxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJFWFBSRVNTSU9OX1JVTEVfTkFNRSIsIlRFUk1fUlVMRV9OQU1FIiwiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImdldE5hbWUiLCJnZXRMZXhpY2FsUGF0dGVybiIsImdldEJORiIsInJ1bGVOYW1lIiwiYm5mIiwiY29tYmluZWRCTkYiLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJzZXROYW1lIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJyZXNldExleGljYWxQYXR0ZXJuIiwicmVzZXRCTkYiLCJ1cGRhdGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFZ0IsSUFBQSxVQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ3lELElBQUEsVUFBYSxXQUFiLGFBQWEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEgsSUFBTUEsU0FBUyxHQUFHO0lBQ2hCQyxVQUF1Qix3QkFBQTtJQUN2QkMsVUFBbUIsb0JBQUE7SUFDbkJDLFVBQW9CLHFCQUFBO0lBQ3BCQyxVQUFjLGVBQUE7Q0FDZixBQUFDO0FBRWEsSUFBQSxBQUFNQyxhQUFhLGlCQUFuQjthQUFNQSxhQUFhLENBQ3BCQyxJQUFJLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCOztRQUN0RixJQUFJLENBQUNMLElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQSxjQUFjLENBQUM7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