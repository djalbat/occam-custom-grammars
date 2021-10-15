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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sIm5hbWVzIjpbIlRFUk0iLCJTVEFURU1FTlQiLCJFWFBSRVNTSU9OIiwiTUVUQVNUQVRFTUVOVCIsIkN1c3RvbUdyYW1tYXIiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImdldE5hbWUiLCJnZXRMZXhpY2FsUGF0dGVybiIsImdldEJORiIsInJ1bGVOYW1lIiwiYm5mIiwic2V0TmFtZSIsInNldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwicmVzZXRMZXhpY2FsUGF0dGVybiIsInJlc2V0Qk5GIiwidXBkYXRlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY3VzdG9tR3JhbW1hciIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUUrQyxHQUFhLENBQWIsVUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbkQsYUFBYSxpQkFBbkIsUUFBUTthQUFGLGFBQWEsQ0FDcEIsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxnQkFBZ0I7OEJBRHJFLGFBQWE7UUFFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWTtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCOztpQkFQdkIsYUFBYTs7WUFVaEMsR0FBTyxFQUFQLENBQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFpQixFQUFqQixDQUFpQjttQkFBakIsUUFBUSxDQUFSLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYztZQUM1QixDQUFDOzs7WUFFRCxHQUFNLEVBQU4sQ0FBTTttQkFBTixRQUFRLENBQVIsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixHQUFHLENBQUMsR0FBRztnQkFFUCxNQUFNLENBQUUsUUFBUTtvQkFDZCxJQUFJLENBeEJpRCxVQUFhO3dCQXlCaEUsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPO3dCQUVsQixLQUFLO29CQUVQLElBQUksQ0E3QmlELFVBQWE7d0JBK0JoRSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWE7d0JBQ3hCLEtBQUs7b0JBRVAsSUFBSSxDQWxDaUQsVUFBYTt3QkFvQ2hFLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWTt3QkFDdkIsS0FBSztvQkFFUCxJQUFJLENBdkNpRCxVQUFhO3dCQXlDaEUsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7d0JBQzNCLEtBQUs7O2dCQUdULE1BQU0sQ0FBQyxHQUFHO1lBQ1osQ0FBQzs7O1lBRUQsR0FBTyxFQUFQLENBQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBaUIsRUFBakIsQ0FBaUI7bUJBQWpCLFFBQVEsQ0FBUixpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjO1lBQ3RDLENBQUM7OztZQUVELEdBQU0sRUFBTixDQUFNO21CQUFOLFFBQVEsQ0FBUixNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixNQUFNLENBQUUsUUFBUTtvQkFDZCxJQUFJLENBMURpRCxVQUFhO3dCQTJEaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHO3dCQUVsQixLQUFLO29CQUVQLElBQUksQ0EvRGlELFVBQWE7d0JBZ0VoRSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUc7d0JBRXhCLEtBQUs7b0JBRVAsSUFBSSxDQXBFaUQsVUFBYTt3QkFxRWhFLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRzt3QkFFdkIsS0FBSztvQkFFUCxJQUFJLENBekVpRCxVQUFhO3dCQTBFaEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUc7d0JBRTNCLEtBQUs7O1lBRVgsQ0FBQzs7O1lBRUQsR0FBbUIsRUFBbkIsQ0FBbUI7bUJBQW5CLFFBQVEsQ0FBUixtQkFBbUIsR0FBRyxDQUFDO2dCQUNyQixHQUFLLENBQUMsY0FBYyxHQUFHLElBQUk7Z0JBRTNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjO1lBQ3ZDLENBQUM7OztZQUVELEdBQVEsRUFBUixDQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2xCLEdBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSTtnQkFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRztZQUMzQixDQUFDOzs7WUFFRCxHQUFNLEVBQU4sQ0FBTTttQkFBTixRQUFRLENBQVIsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUc7Z0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjO1lBQ3ZDLENBQUM7OztZQUVELEdBQU0sRUFBTixDQUFNO21CQUFOLFFBQVEsQ0FBUixNQUFNLEdBQUcsQ0FBQztnQkFDUixHQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7b0JBQ1osQ0FBTSxPQUFFLElBQUksQ0FBQyxJQUFJO29CQUNqQixDQUFnQixpQkFBRSxJQUFJLENBQUMsY0FBYztvQkFDckMsQ0FBUyxVQUFFLElBQUksQ0FBQyxPQUFPO29CQUN2QixDQUFlLGdCQUFFLElBQUksQ0FBQyxhQUFhO29CQUNuQyxDQUFjLGVBQUUsSUFBSSxDQUFDLFlBQVk7b0JBQ2pDLENBQWtCLG1CQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQzNDLENBQUM7Z0JBRUQsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDOzs7O1lBRU0sR0FBUSxFQUFSLENBQVE7bUJBQWYsUUFBUSxDQUFELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsR0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBTSxRQUNsQixjQUFjLEdBQUcsSUFBSSxDQUFDLENBQWdCLGtCQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQVMsV0FDeEIsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFlLGlCQUNwQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQWMsZ0JBQ2xDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFrQixvQkFDMUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxnQkFBZ0I7Z0JBRXBILE1BQU0sQ0FBQyxhQUFhO1lBQ3RCLENBQUM7OztZQUVNLEdBQVEsRUFBUixDQUFRO21CQUFmLFFBQVEsQ0FBRCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLEdBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxFQUNyQixPQUFPLEdBQUcsSUFBSSxFQUNkLGFBQWEsR0FBRyxJQUFJLEVBQ3BCLFlBQVksR0FBRyxJQUFJLEVBQ25CLGdCQUFnQixHQUFHLElBQUksRUFDdkIsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxnQkFBZ0I7Z0JBRXBILE1BQU0sQ0FBQyxhQUFhO1lBQ3RCLENBQUM7OztXQWpJa0IsYUFBYTs7a0JBQWIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBURVJNLCBTVEFURU1FTlQsIEVYUFJFU1NJT04sIE1FVEFTVEFURU1FTlQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNOlxuICAgICAgICBibmYgPSB0aGlzLnRlcm1CTkY7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRVhQUkVTU0lPTjpcblxuICAgICAgICBibmYgPSB0aGlzLmV4cHJlc3Npb25CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVDpcblxuICAgICAgICBibmYgPSB0aGlzLnN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVDpcblxuICAgICAgICBibmYgPSB0aGlzLm1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVYUFJFU1NJT046XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTVEFURU1FTlQ6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlQ6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXNldExleGljYWxQYXR0ZXJuKCkgeyBcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gIH1cblxuICByZXNldEJORihydWxlTmFtZSkge1xuICAgIGNvbnN0IGJuZiA9IG51bGw7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBsZXhpY2FsUGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBcIm5hbWVcIjogdGhpcy5uYW1lLFxuICAgICAgXCJsZXhpY2FsUGF0dGVyblwiOiB0aGlzLmxleGljYWxQYXR0ZXJuLFxuICAgICAgXCJ0ZXJtQk5GXCI6IHRoaXMudGVybUJORixcbiAgICAgIFwiZXhwcmVzc2lvbkJORlwiOiB0aGlzLmV4cHJlc3Npb25CTkYsXG4gICAgICBcInN0YXRlbWVudEJORlwiOiB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgIFwibWV0YXN0YXRlbWVudEJORlwiOiB0aGlzLm1ldGFzdGF0ZW1lbnRCTkZcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBqc29uW1wibGV4aWNhbFBhdHRlcm5cIl0sXG4gICAgICAgICAgdGVybUJORiA9IGpzb25bXCJ0ZXJtQk5GXCJdLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBqc29uW1wiZXhwcmVzc2lvbkJORlwiXSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBqc29uW1wic3RhdGVtZW50Qk5GXCJdLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBqc29uW1wibWV0YXN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHRlcm1CTkYgPSBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IG51bGwsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cbiJdfQ==