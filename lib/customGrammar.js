"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
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
            value: function getBNF(ruleName) {
                var bnf;
                switch(ruleName){
                    case _constants.TERM:
                        bnf = this.termBNF;
                        break;
                    case _constants.EXPRESSION:
                        bnf = this.expressionBNF;
                        break;
                    case _constants.STATEMENT:
                        bnf = this.statementBNF;
                        break;
                    case _constants.METASTATEMENT:
                        bnf = this.metastatementBNF;
                        break;
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
                    case _constants.TERM:
                        this.termBNF = bnf;
                        break;
                    case _constants.EXPRESSION:
                        this.expressionBNF = bnf;
                        break;
                    case _constants.STATEMENT:
                        this.statementBNF = bnf;
                        break;
                    case _constants.METASTATEMENT:
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBURVJNLCBTVEFURU1FTlQsIEVYUFJFU1NJT04sIE1FVEFTVEFURU1FTlQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNOlxuICAgICAgICBibmYgPSB0aGlzLnRlcm1CTkY7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRVhQUkVTU0lPTjpcblxuICAgICAgICBibmYgPSB0aGlzLmV4cHJlc3Npb25CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVDpcblxuICAgICAgICBibmYgPSB0aGlzLnN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVDpcblxuICAgICAgICBibmYgPSB0aGlzLm1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVYUFJFU1NJT046XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTVEFURU1FTlQ6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlQ6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXNldExleGljYWxQYXR0ZXJuKCkgeyBcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gIH1cblxuICByZXNldEJORihydWxlTmFtZSkge1xuICAgIGNvbnN0IGJuZiA9IG51bGw7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBsZXhpY2FsUGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmxleGljYWxQYXR0ZXJuLFxuICAgICAgICAgIHRlcm1CTkYgPSB0aGlzLnRlcm1CTkYsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IHRoaXMuZXhwcmVzc2lvbkJORixcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4sXG4gICAgICAgICAgICB0ZXJtQk5GLFxuICAgICAgICAgICAgZXhwcmVzc2lvbkJORixcbiAgICAgICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkZcbiAgICAgICAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYgfSA9IGpzb24sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXIiLCJuYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJnZXROYW1lIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJnZXRCTkYiLCJydWxlTmFtZSIsImJuZiIsIlRFUk0iLCJFWFBSRVNTSU9OIiwiU1RBVEVNRU5UIiwiTUVUQVNUQVRFTUVOVCIsInNldE5hbWUiLCJzZXRMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInJlc2V0TGV4aWNhbFBhdHRlcm4iLCJyZXNldEJORiIsInVwZGF0ZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImN1c3RvbUdyYW1tYXIiLCJmcm9tTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUU4QyxJQUFBLFVBQWEsV0FBYixhQUFhLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpELElBQUEsQUFBTUEsYUFBYSxpQkNKL0IsQURJWTthQUFNQSxhQUFhLENBQ3BCQyxJQUFJLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLFlB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