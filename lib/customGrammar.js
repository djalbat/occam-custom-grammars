"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
                    case "term":
                        bnf = this.termBNF;
                        break;
                    case "expression":
                        bnf = this.expressionBNF;
                        break;
                    case "statement":
                        bnf = this.statementBNF;
                        break;
                    case "metastatement":
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
                    case "term":
                        this.termBNF = bnf;
                        break;
                    case "expression":
                        this.expressionBNF = bnf;
                        break;
                    case "statement":
                        this.statementBNF = bnf;
                        break;
                    case "metastatement":
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICAgIHRoaXMudGVybUJORiA9IHRlcm1CTkY7XG4gICAgdGhpcy5leHByZXNzaW9uQk5GID0gZXhwcmVzc2lvbkJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBtZXRhc3RhdGVtZW50Qk5GO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRMZXhpY2FsUGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIGdldEJORihydWxlTmFtZSkge1xuICAgIGxldCBibmY7XG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFwidGVybVwiOlxuICAgICAgICBibmYgPSB0aGlzLnRlcm1CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiZXhwcmVzc2lvblwiOlxuICAgICAgICBibmYgPSB0aGlzLmV4cHJlc3Npb25CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwic3RhdGVtZW50XCI6XG4gICAgICAgIGJuZiA9IHRoaXMuc3RhdGVtZW50Qk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIm1ldGFzdGF0ZW1lbnRcIjpcbiAgICAgICAgYm5mID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSB7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgc2V0Qk5GKHJ1bGVOYW1lLCBibmYpIHtcbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFwidGVybVwiOlxuICAgICAgICB0aGlzLnRlcm1CTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiZXhwcmVzc2lvblwiOlxuICAgICAgICB0aGlzLmV4cHJlc3Npb25CTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwic3RhdGVtZW50XCI6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIm1ldGFzdGF0ZW1lbnRcIjpcbiAgICAgICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gYm5mO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXNldExleGljYWxQYXR0ZXJuKCkgeyBcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gIH1cblxuICByZXNldEJORihydWxlTmFtZSkge1xuICAgIGNvbnN0IGJuZiA9IG51bGw7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBsZXhpY2FsUGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBcIm5hbWVcIjogdGhpcy5uYW1lLFxuICAgICAgXCJsZXhpY2FsUGF0dGVyblwiOiB0aGlzLmxleGljYWxQYXR0ZXJuLFxuICAgICAgXCJ0ZXJtQk5GXCI6IHRoaXMudGVybUJORixcbiAgICAgIFwiZXhwcmVzc2lvbkJORlwiOiB0aGlzLmV4cHJlc3Npb25CTkYsXG4gICAgICBcInN0YXRlbWVudEJORlwiOiB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgIFwibWV0YXN0YXRlbWVudEJORlwiOiB0aGlzLm1ldGFzdGF0ZW1lbnRCTkZcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBqc29uW1wibGV4aWNhbFBhdHRlcm5cIl0sXG4gICAgICAgICAgdGVybUJORiA9IGpzb25bXCJ0ZXJtQk5GXCJdLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBqc29uW1wiZXhwcmVzc2lvbkJORlwiXSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBqc29uW1wic3RhdGVtZW50Qk5GXCJdLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBqc29uW1wibWV0YXN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHRlcm1CTkYgPSBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IG51bGwsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUyxhQUFhO2FBQWIsYUFBYSxDQUNwQixJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGdCQUFnQjs4QkFEckUsYUFBYTthQUV6QixJQUFJLEdBQUcsSUFBSTthQUNYLGNBQWMsR0FBRyxjQUFjO2FBQy9CLE9BQU8sR0FBRyxPQUFPO2FBQ2pCLGFBQWEsR0FBRyxhQUFhO2FBQzdCLFlBQVksR0FBRyxZQUFZO2FBQzNCLGdCQUFnQixHQUFHLGdCQUFnQjs7aUJBUHZCLGFBQWE7O1lBVWhDLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sR0FBRyxDQUFDOzRCQUNHLElBQUk7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBaUIsR0FBakIsaUJBQWlCOzRCQUFqQixpQkFBaUIsR0FBRyxDQUFDOzRCQUNQLGNBQWM7WUFDNUIsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07NEJBQU4sTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixHQUFHLENBQUMsR0FBRzt1QkFFQyxRQUFROzBCQUNULElBQU07d0JBQ1QsR0FBRyxRQUFRLE9BQU87OzBCQUdmLFVBQVk7d0JBQ2YsR0FBRyxRQUFRLGFBQWE7OzBCQUdyQixTQUFXO3dCQUNkLEdBQUcsUUFBUSxZQUFZOzswQkFH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