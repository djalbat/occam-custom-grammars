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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBURVJNLCBTVEFURU1FTlQsIEVYUFJFU1NJT04sIE1FVEFTVEFURU1FTlQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNOlxuICAgICAgICBibmYgPSB0aGlzLnRlcm1CTkY7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRVhQUkVTU0lPTjpcblxuICAgICAgICBibmYgPSB0aGlzLmV4cHJlc3Npb25CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVDpcblxuICAgICAgICBibmYgPSB0aGlzLnN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVDpcblxuICAgICAgICBibmYgPSB0aGlzLm1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVYUFJFU1NJT046XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTVEFURU1FTlQ6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlQ6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXNldExleGljYWxQYXR0ZXJuKCkgeyBcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gIH1cblxuICByZXNldEJORihydWxlTmFtZSkge1xuICAgIGNvbnN0IGJuZiA9IG51bGw7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBsZXhpY2FsUGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmxleGljYWxQYXR0ZXJuLFxuICAgICAgICAgIHRlcm1CTkYgPSB0aGlzLnRlcm1CTkYsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IHRoaXMuZXhwcmVzc2lvbkJORixcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4sXG4gICAgICAgICAgICB0ZXJtQk5GLFxuICAgICAgICAgICAgZXhwcmVzc2lvbkJORixcbiAgICAgICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkZcbiAgICAgICAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYgfSA9IGpzb24sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImdldE5hbWUiLCJnZXRMZXhpY2FsUGF0dGVybiIsImdldEJORiIsInJ1bGVOYW1lIiwiYm5mIiwiVEVSTSIsIkVYUFJFU1NJT04iLCJTVEFURU1FTlQiLCJNRVRBU1RBVEVNRU5UIiwic2V0TmFtZSIsInNldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwicmVzZXRMZXhpY2FsUGF0dGVybiIsInJlc2V0Qk5GIiwidXBkYXRlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY3VzdG9tR3JhbW1hciIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztFQUFiO3dCQUFBO0FBRTJELElBQUEsVUFBYSxXQUFiLGFBQWEsQ0FBQTs7Ozs7Ozs7OzhEQUZ4RTtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7O0FBSWUsSUFBQSxBQUFNQSxhQUFhLGlCQ0ovQixBRElZO2FBQU1BLGFBQWEsQ0FDcEJDLElBQUksRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxn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