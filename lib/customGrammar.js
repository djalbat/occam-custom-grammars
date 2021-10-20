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
                var json = {
                    "name": this.name,
                    "lexicalPattern": this.lexicalPattern,
                    "termBNF": this.termBNF,
                    "expressionBNF": this.expressionBNF,
                    "statementBNF": this.statementBNF,
                    "metastatementBNF": this.metastatementBNF
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var name = json["name"], lexicalPattern = json["lexicalPattern"], termBNF = json["termBNF"], expressionBNF = json["expressionBNF"], statementBNF = json["statementBNF"], metastatementBNF = json["metastatementBNF"], customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBURVJNLCBTVEFURU1FTlQsIEVYUFJFU1NJT04sIE1FVEFTVEFURU1FTlQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNOlxuICAgICAgICBibmYgPSB0aGlzLnRlcm1CTkY7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRVhQUkVTU0lPTjpcblxuICAgICAgICBibmYgPSB0aGlzLmV4cHJlc3Npb25CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVDpcblxuICAgICAgICBibmYgPSB0aGlzLnN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVDpcblxuICAgICAgICBibmYgPSB0aGlzLm1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVYUFJFU1NJT046XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTVEFURU1FTlQ6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlQ6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXNldExleGljYWxQYXR0ZXJuKCkgeyBcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gIH1cblxuICByZXNldEJORihydWxlTmFtZSkge1xuICAgIGNvbnN0IGJuZiA9IG51bGw7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBsZXhpY2FsUGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBcIm5hbWVcIjogdGhpcy5uYW1lLFxuICAgICAgXCJsZXhpY2FsUGF0dGVyblwiOiB0aGlzLmxleGljYWxQYXR0ZXJuLFxuICAgICAgXCJ0ZXJtQk5GXCI6IHRoaXMudGVybUJORixcbiAgICAgIFwiZXhwcmVzc2lvbkJORlwiOiB0aGlzLmV4cHJlc3Npb25CTkYsXG4gICAgICBcInN0YXRlbWVudEJORlwiOiB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgIFwibWV0YXN0YXRlbWVudEJORlwiOiB0aGlzLm1ldGFzdGF0ZW1lbnRCTkZcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBqc29uW1wibGV4aWNhbFBhdHRlcm5cIl0sXG4gICAgICAgICAgdGVybUJORiA9IGpzb25bXCJ0ZXJtQk5GXCJdLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBqc29uW1wiZXhwcmVzc2lvbkJORlwiXSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBqc29uW1wic3RhdGVtZW50Qk5GXCJdLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBqc29uW1wibWV0YXN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHRlcm1CTkYgPSBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IG51bGwsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyIiwibmFtZSIsImxleGljYWxQYXR0ZXJuIiwidGVybUJORiIsImV4cHJlc3Npb25CTkYiLCJzdGF0ZW1lbnRCTkYiLCJtZXRhc3RhdGVtZW50Qk5GIiwiZ2V0TmFtZSIsImdldExleGljYWxQYXR0ZXJuIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJibmYiLCJzZXROYW1lIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJyZXNldExleGljYWxQYXR0ZXJuIiwicmVzZXRCTkYiLCJ1cGRhdGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRStDLEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVuREEsYUFBYSxpQkFBbkIsUUFBUTthQUFGQSxhQUFhLENBQ3BCQyxJQUFJLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCOzhCQURyRU4sYUFBYTtRQUU5QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtRQUNoQixJQUFJLENBQUNDLGNBQWMsR0FBR0EsY0FBYztRQUNwQyxJ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