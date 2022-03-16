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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBURVJNLCBTVEFURU1FTlQsIEVYUFJFU1NJT04sIE1FVEFTVEFURU1FTlQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNOlxuICAgICAgICBibmYgPSB0aGlzLnRlcm1CTkY7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRVhQUkVTU0lPTjpcblxuICAgICAgICBibmYgPSB0aGlzLmV4cHJlc3Npb25CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVDpcblxuICAgICAgICBibmYgPSB0aGlzLnN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVDpcblxuICAgICAgICBibmYgPSB0aGlzLm1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVYUFJFU1NJT046XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTVEFURU1FTlQ6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlQ6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXNldExleGljYWxQYXR0ZXJuKCkgeyBcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gIH1cblxuICByZXNldEJORihydWxlTmFtZSkge1xuICAgIGNvbnN0IGJuZiA9IG51bGw7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBsZXhpY2FsUGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmxleGljYWxQYXR0ZXJuLFxuICAgICAgICAgIHRlcm1CTkYgPSB0aGlzLnRlcm1CTkYsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IHRoaXMuZXhwcmVzc2lvbkJORixcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbGV4aWNhbFBhdHRlcm4sXG4gICAgICAgICAgICB0ZXJtQk5GLFxuICAgICAgICAgICAgZXhwcmVzc2lvbkJORixcbiAgICAgICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkZcbiAgICAgICAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYgfSA9IGpzb24sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImdldE5hbWUiLCJnZXRMZXhpY2FsUGF0dGVybiIsImdldEJORiIsInJ1bGVOYW1lIiwiYm5mIiwiVEVSTSIsIkVYUFJFU1NJT04iLCJTVEFURU1FTlQiLCJNRVRBU1RBVEVNRU5UIiwic2V0TmFtZSIsInNldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwicmVzZXRMZXhpY2FsUGF0dGVybiIsInJlc2V0Qk5GIiwidXBkYXRlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY3VzdG9tR3JhbW1hciIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFMkQsR0FBYSxDQUFiLFVBQWE7Ozs7Ozs7Ozs4REFGeEU7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7OztBQUllLEdBQUssQ0FBQ0EsYUFBYSxpQkFBbkIsUUFBUTthQUFGQSxhQUFhLENBQ3BCQyxJQUFJLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdC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