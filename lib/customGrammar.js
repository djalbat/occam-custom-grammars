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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sIm5hbWVzIjpbIlRFUk0iLCJTVEFURU1FTlQiLCJFWFBSRVNTSU9OIiwiTUVUQVNUQVRFTUVOVCIsIkN1c3RvbUdyYW1tYXIiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsImdldE5hbWUiLCJnZXRMZXhpY2FsUGF0dGVybiIsImdldEJORiIsInJ1bGVOYW1lIiwiYm5mIiwic2V0TmFtZSIsInNldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwicmVzZXRMZXhpY2FsUGF0dGVybiIsInJlc2V0Qk5GIiwidXBkYXRlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY3VzdG9tR3JhbW1hciIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUUrQyxHQUFhLENBQWIsVUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbkQsYUFBYSxpQkFBbkIsUUFBUTthQUFGLGFBQWEsQ0FDcEIsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxnQkFBZ0I7OEJBRHJFLGFBQWE7UUFFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWTtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCOztpQkFQdkIsYUFBYTs7WUFVaEMsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFpQixH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QUNqQyxnQkFBa0IsR0FBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUMzQyxDQUFDO2dCQUVELE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQzs7OztZQUVNLEdBQVEsR0FBUixRQUFRO21CQUFmLFFBQVEsQ0FBRCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLEdBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFDLElBQU0sSUFDbEIsY0FBYyxHQUFHLElBQUksRUFBQyxjQUFnQixJQUN0QyxPQUFPLEdBQUcsSUFBSSxFQUFDLE9BQVMsSUFDeEIsYUFBYSxHQUFHLElBQUksRUFBQyxhQUFlLElBQ3BDLFlBQVksR0FBRyxJQUFJLEVBQUMsWUFBYyxJQUNsQyxnQkFBZ0IsR0FBRyxJQUFJLEVBQUMsZ0JBQWtCLElBQzFDLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCO2dCQUVwSCxNQUFNLENBQUMsYUFBYTtZQUN0QixDQUFDOzs7WUFFTSxHQUFRLEdBQVIsUUFBUTttQkFBZixRQUFRLENBQUQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixHQUFLLENBQUMsY0FBYyxHQUFHLElBQUksRUFDckIsT0FBTyxHQUFHLElBQUksRUFDZCxhQUFhLEdBQUcsSUFBSSxFQUNwQixZQUFZLEdBQUcsSUFBSSxFQUNuQixnQkFBZ0IsR0FBRyxJQUFJLEVBQ3ZCLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCO2dCQUVwSCxNQUFNLENBQUMsYUFBYTtZQUN0QixDQUFDOzs7V0FqSWtCLGFBQWE7O2tCQUFiLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVEVSTSwgU1RBVEVNRU5ULCBFWFBSRVNTSU9OLCBNRVRBU1RBVEVNRU5UIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gICAgdGhpcy50ZXJtQk5GID0gdGVybUJORjtcbiAgICB0aGlzLmV4cHJlc3Npb25CTkYgPSBleHByZXNzaW9uQk5GO1xuICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkY7XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgbGV0IGJuZjtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTTpcbiAgICAgICAgYm5mID0gdGhpcy50ZXJtQk5GO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVYUFJFU1NJT046XG5cbiAgICAgICAgYm5mID0gdGhpcy5leHByZXNzaW9uQk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTVEFURU1FTlQ6XG5cbiAgICAgICAgYm5mID0gdGhpcy5zdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlQ6XG5cbiAgICAgICAgYm5mID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSB7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgc2V0Qk5GKHJ1bGVOYW1lLCBibmYpIHtcbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFRFUk06XG4gICAgICAgIHRoaXMudGVybUJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBFWFBSRVNTSU9OOlxuICAgICAgICB0aGlzLmV4cHJlc3Npb25CTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU1RBVEVNRU5UOlxuICAgICAgICB0aGlzLnN0YXRlbWVudEJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBNRVRBU1RBVEVNRU5UOlxuICAgICAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRMZXhpY2FsUGF0dGVybigpIHsgXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgbGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgXCJuYW1lXCI6IHRoaXMubmFtZSxcbiAgICAgIFwibGV4aWNhbFBhdHRlcm5cIjogdGhpcy5sZXhpY2FsUGF0dGVybixcbiAgICAgIFwidGVybUJORlwiOiB0aGlzLnRlcm1CTkYsXG4gICAgICBcImV4cHJlc3Npb25CTkZcIjogdGhpcy5leHByZXNzaW9uQk5GLFxuICAgICAgXCJzdGF0ZW1lbnRCTkZcIjogdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICBcIm1ldGFzdGF0ZW1lbnRCTkZcIjogdGhpcy5tZXRhc3RhdGVtZW50Qk5GXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZSA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0ganNvbltcImxleGljYWxQYXR0ZXJuXCJdLFxuICAgICAgICAgIHRlcm1CTkYgPSBqc29uW1widGVybUJORlwiXSxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0ganNvbltcImV4cHJlc3Npb25CTkZcIl0sXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0ganNvbltcInN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0ganNvbltcIm1ldGFzdGF0ZW1lbnRCTkZcIl0sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iXX0=