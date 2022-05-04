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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBFWFBSRVNTSU9OX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgcnVsZU5hbWVzID0gW1xuICBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gIFRFUk1fUlVMRV9OQU1FXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICAgIHRoaXMudGVybUJORiA9IHRlcm1CTkY7XG4gICAgdGhpcy5leHByZXNzaW9uQk5GID0gZXhwcmVzc2lvbkJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBtZXRhc3RhdGVtZW50Qk5GO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRMZXhpY2FsUGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIGdldEJORihydWxlTmFtZSA9IG51bGwpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTogYm5mID0gdGhpcy50ZXJtQk5GOyBicmVhaztcbiAgICAgIGNhc2UgRVhQUkVTU0lPTl9SVUxFX05BTUU6IGJuZiA9IHRoaXMuZXhwcmVzc2lvbkJORjsgYnJlYWs7XG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6IGJuZiA9IHRoaXMuc3RhdGVtZW50Qk5GOyBicmVhaztcbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IGJuZiA9IHRoaXMubWV0YXN0YXRlbWVudEJORjsgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgY29tYmluZWRCTkYgPSBydWxlTmFtZXMucmVkdWNlKChjb21iaW5lZEJORiwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORihydWxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoYm5mICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb21iaW5lZEJORiA9IGAke2NvbWJpbmVkQk5GfVxuICAgICAgICAgICAgXG4ke2JuZn1gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb21iaW5lZEJORjtcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgICAgICBibmYgPSBjb21iaW5lZEJORjsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMudGVybUJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFWFBSRVNTSU9OX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy5leHByZXNzaW9uQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRMZXhpY2FsUGF0dGVybigpIHsgXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgbGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5sZXhpY2FsUGF0dGVybixcbiAgICAgICAgICB0ZXJtQk5GID0gdGhpcy50ZXJtQk5GLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSB0aGlzLmV4cHJlc3Npb25CTkYsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IHRoaXMubWV0YXN0YXRlbWVudEJORixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuLFxuICAgICAgICAgICAgdGVybUJORixcbiAgICAgICAgICAgIGV4cHJlc3Npb25CTkYsXG4gICAgICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GXG4gICAgICAgICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GIH0gPSBqc29uLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGwsXG4gICAgICAgICAgdGVybUJORiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gbnVsbCxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJydWxlTmFtZXMiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJFWFBSRVNTSU9OX1JVTEVfTkFNRSIsIlRFUk1fUlVMRV9OQU1FIiwiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImdldE5hbWUiLCJnZXRMZXhpY2FsUGF0dGVybiIsImdldEJORiIsInJ1bGVOYW1lIiwiYm5mIiwiY29tYmluZWRCTkYiLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJzZXROYW1lIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJyZXNldExleGljYWxQYXR0ZXJuIiwicmVzZXRCTkYiLCJ1cGRhdGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFZ0IsSUFBQSxVQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ3lELElBQUEsVUFBYSxXQUFiLGFBQWEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEgsSUFBTUEsU0FBUyxHQUFHO0lBQ2hCQyxVQUF1Qix3QkFBQTtJQUN2QkMsVUFBbUIsb0JBQUE7SUFDbkJDLFVBQW9CLHFCQUFBO0lBQ3BCQyxVQUFjLGVBQUE7Q0FDZixBQUFDO0FBRWEsSUFBQSxBQUFNQyxhQUFhLGlCQ1ovQixBRFlZO2FBQU1BLGFBQWEsQ0FDcEJDLElBQUksRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxnQkFBZ0I7O1FBQ3RGLElBQUksQ0FBQ0wsSUFBSSxHQUFHQSxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBLGNBQWMs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