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
var _patternNames = require("./patternNames");
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
var CustomGrammar = /*#__PURE__*/ function() {
    function CustomGrammar(name, typePattern, operatorPattern, termBNF, statementBNF, metastatementBNF) {
        _classCallCheck(this, CustomGrammar);
        this.name = name;
        this.typePattern = typePattern;
        this.operatorPattern = operatorPattern;
        this.termBNF = termBNF;
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
            key: "getBNF",
            value: function getBNF() {
                var ruleName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var _this = this;
                var bnf;
                switch(ruleName){
                    case _ruleNames.TERM_RULE_NAME:
                        bnf = this.termBNF;
                        break;
                    case _ruleNames.STATEMENT_RULE_NAME:
                        bnf = this.statementBNF;
                        break;
                    case _ruleNames.METASTATEMENT_RULE_NAME:
                        bnf = this.metastatementBNF;
                        break;
                    default:
                        {
                            var ruleNames = [
                                _ruleNames.TERM_RULE_NAME,
                                _ruleNames.STATEMENT_RULE_NAME,
                                _ruleNames.METASTATEMENT_RULE_NAME
                            ], combinedBNF = ruleNames.reduce(function(combinedBNF, ruleName) {
                                var bnf = _this.getBNF(ruleName);
                                if (bnf !== _constants.EMPTY_STRING) {
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
            key: "getPattern",
            value: function getPattern(patternName) {
                var pattern;
                switch(patternName){
                    case _patternNames.TYPE_PATTERN_NAME:
                        pattern = this.typePattern;
                        break;
                    case _patternNames.OPERATOR_PATTERN_NAME:
                        pattern = this.operatorPattern;
                        break;
                }
                return pattern;
            }
        },
        {
            key: "getPatterns",
            value: function getPatterns() {
                var patterns = [
                    this.typePattern,
                    this.operatorPattern
                ];
                return patterns;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setBNF",
            value: function setBNF(ruleName, bnf) {
                switch(ruleName){
                    case _ruleNames.TERM_RULE_NAME:
                        this.termBNF = bnf;
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
            key: "setPattern",
            value: function setPattern(patternName, pattern) {
                switch(patternName){
                    case _patternNames.TYPE_PATTERN_NAME:
                        this.typePattern = pattern;
                        break;
                    case _patternNames.OPERATOR_PATTERN_NAME:
                        this.operatorPattern = pattern;
                        break;
                }
            }
        },
        {
            key: "resetBNF",
            value: function resetBNF(ruleName) {
                var bnf = _constants.EMPTY_STRING;
                this.setBNF(ruleName, bnf);
            }
        },
        {
            key: "resetPattern",
            value: function resetPattern(patternName) {
                var pattern = _constants.EMPTY_STRING;
                this.setPattern(patternName, pattern);
            }
        },
        {
            key: "update",
            value: function update(ruleName, bnf, patternName, pattern) {
                this.setBNF(ruleName, bnf);
                this.setPattern(patternName, pattern);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, typePattern = this.typePattern, operatorPattern = this.operatorPattern, termBNF = this.termBNF, statementBNF = this.statementBNF, metastatementBNF = this.metastatementBNF, json = {
                    name: name,
                    typePattern: typePattern,
                    operatorPattern: operatorPattern,
                    termBNF: termBNF,
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
                var name = json.name, typePattern = json.typePattern, operatorPattern = json.operatorPattern, termBNF = json.termBNF, statementBNF = json.statementBNF, metastatementBNF = json.metastatementBNF, customGrammar = new CustomGrammar(name, typePattern, operatorPattern, termBNF, statementBNF, metastatementBNF);
                return customGrammar;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var typePattern = _constants.EMPTY_STRING, operatorPattern = _constants.EMPTY_STRING, termBNF = _constants.EMPTY_STRING, statementBNF = _constants.EMPTY_STRING, metastatementBNF = _constants.EMPTY_STRING, customGrammar = new CustomGrammar(name, typePattern, operatorPattern, termBNF, statementBNF, metastatementBNF);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBPUEVSQVRPUl9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi9wYXR0ZXJuTmFtZXNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdHlwZVBhdHRlcm4sIG9wZXJhdG9yUGF0dGVybiwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGVQYXR0ZXJuID0gdHlwZVBhdHRlcm47XG4gICAgdGhpcy5vcGVyYXRvclBhdHRlcm4gPSBvcGVyYXRvclBhdHRlcm47XG4gICAgdGhpcy50ZXJtQk5GID0gdGVybUJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBtZXRhc3RhdGVtZW50Qk5GO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUgPSBudWxsKSB7XG4gICAgbGV0IGJuZjtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IGJuZiA9IHRoaXMudGVybUJORjsgYnJlYWs7XG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6IGJuZiA9IHRoaXMuc3RhdGVtZW50Qk5GOyBicmVhaztcbiAgICAgIGNhc2UgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUU6IGJuZiA9IHRoaXMubWV0YXN0YXRlbWVudEJORjsgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVzID0gW1xuICAgICAgICAgICAgICAgIFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgICAgICAgIFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgICAgICAgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgY29tYmluZWRCTkYgPSBydWxlTmFtZXMucmVkdWNlKChjb21iaW5lZEJORiwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORihydWxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoYm5mICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gYCR7Y29tYmluZWRCTkZ9XG4gICAgICAgICAgICBcbiR7Ym5mfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbWJpbmVkQk5GO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgICAgIGJuZiA9IGNvbWJpbmVkQk5GOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIGdldFBhdHRlcm4ocGF0dGVybk5hbWUpIHtcbiAgICBsZXQgcGF0dGVybjtcblxuICAgIHN3aXRjaCAocGF0dGVybk5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9QQVRURVJOX05BTUU6IHBhdHRlcm4gPSB0aGlzLnR5cGVQYXR0ZXJuOyBicmVhaztcbiAgICAgIGNhc2UgT1BFUkFUT1JfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy5vcGVyYXRvclBhdHRlcm47IGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UGF0dGVybnMoKSB7XG4gICAgY29uc3QgcGF0dGVybnMgPSBbXG4gICAgICB0aGlzLnR5cGVQYXR0ZXJuLFxuICAgICAgdGhpcy5vcGVyYXRvclBhdHRlcm5cbiAgICBdO1xuXG4gICAgcmV0dXJuIHBhdHRlcm5zO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEJORihydWxlTmFtZSwgYm5mKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHN3aXRjaCAocGF0dGVybk5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMudHlwZVBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9QRVJBVE9SX1BBVFRFUk5fTkFNRTpcbiAgICAgICAgdGhpcy5vcGVyYXRvclBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgYm5mID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICByZXNldFBhdHRlcm4ocGF0dGVybk5hbWUpIHtcbiAgICBjb25zdCBwYXR0ZXJuID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gdGhpcy50eXBlUGF0dGVybixcbiAgICAgICAgICBvcGVyYXRvclBhdHRlcm4gPSB0aGlzLm9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgICB0ZXJtQk5GID0gdGhpcy50ZXJtQk5GLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IHRoaXMuc3RhdGVtZW50Qk5GLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgICAgIG9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgICAgIHRlcm1CTkYsXG4gICAgICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GXG4gICAgICAgICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCB0eXBlUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYgfSA9IGpzb24sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHR5cGVQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4sIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgdHlwZVBhdHRlcm4gPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgb3BlcmF0b3JQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHRlcm1CTkYgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHR5cGVQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4sIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyIiwibmFtZSIsInR5cGVQYXR0ZXJuIiwib3BlcmF0b3JQYXR0ZXJuIiwidGVybUJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJnZXROYW1lIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJibmYiLCJURVJNX1JVTEVfTkFNRSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsInJ1bGVOYW1lcyIsImNvbWJpbmVkQk5GIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwiZ2V0UGF0dGVybiIsInBhdHRlcm5OYW1lIiwicGF0dGVybiIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9OQU1FIiwiZ2V0UGF0dGVybnMiLCJwYXR0ZXJucyIsInNldE5hbWUiLCJzZXRCTkYiLCJzZXRQYXR0ZXJuIiwicmVzZXRCTkYiLCJyZXNldFBhdHRlcm4iLCJ1cGRhdGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU1RQSxhQUFhOzs7eUJBSkwsYUFBYTs0QkFDZSxnQkFBZ0I7eUJBQ0ksYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0UsSUFBQSxBQUFNQSxhQUFhLGlCQUFuQjthQUFNQSxhQUFhLENBQ3BCQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCOzhCQURwRU4sYUFBYTtRQUU5QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDQyxlQUFlLEdBQUdBLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUM7O2lCQVB4Qk4sYUFBYTs7WUFVaENPLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxHQUFHO2dCQUNSLE9BQU8sSUFBSSxDQUFDTixJQUFJLENBQUM7WUFDbkIsQ0FBQzs7O1lBRURPLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFrQjtvQkFBakJDLFFBQVEsR0FBUkEsK0NBQWUsa0JBQUosSUFBSTs7Z0JBQ3BCLElBQUlDLEdBQUcsQUFBQztnQkFFUixPQUFRRCxRQUFRO29CQUNkLEtBQUtFLFVBQWMsZUFBQTt3QkFBRUQsR0FBRyxHQUFHLElBQUksQ0FBQ04sT0FBTyxDQUFDO3dCQUFDLE1BQU07b0JBQy9DLEtBQUtRLFVBQW1CLG9CQUFBO3dCQUFFRixHQUFHLEdBQUcsSUFBSSxDQUFDTCxZQUFZLENBQUM7d0JBQUMsTUFBTTtvQkFDekQsS0FBS1EsVUFBdUIsd0JBQUE7d0JBQUVILEdBQUcsR0FBRyxJQUFJLENBQUNKLGdCQUFnQixDQUFDO3dCQUFDLE1BQU07b0JBRWpFO3dCQUFTOzRCQUNQLElBQU1RLFNBQVMsR0FBRztnQ0FDVkgsVUFBYyxlQUFBO2dDQUNkQyxVQUFtQixvQkFBQTtnQ0FDbkJDLFVBQXVCLHdCQUFBOzZCQUN4QixFQUNERSxXQUFXLEdBQUdELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFNBQUNELFdBQVcsRUFBRU4sUUFBUSxFQUFLO2dDQUM5RCxJQUFNQyxHQUFHLEdBQUcsTUFBS0YsTUFBTSxDQUFDQyxRQUFRLENBQUMsQUFBQztnQ0FFbEMsSUFBSUMsR0FBRyxLQUFLTyxVQUFZLGFBQUEsRUFBRTtvQ0FDeEJGLFdBQVcsR0FBRyxBQUFDLEVBQUEsQ0FFekJMLE1BQUcsQ0FGd0JLLFdBQVcsRUFBQyxrQkFFekMsQ0FBTSxDQUFBLE1BQUEsQ0FBSkwsR0FBRyxDQUFFLENBQUM7Z0NBQ0UsQ0FBQztnQ0FFRCxPQUFPSyxXQUFXLENBQUM7NEJBQ3JCLENBQUMsRUFBRUUsVUFBWSxhQUFBLENBQUMsQUFBQzs0QkFFakJQLEdBQUcsR0FBR0ssV0FBVyxDQUFDLENBQUUsR0FBRzs0QkFFdkIsTUFBTTt3QkFDUixDQUFDO2lCQUNGO2dCQUVELE9BQU9MLEdBQUcsQ0FBQztZQUNiLENBQUM7OztZQUVEUSxHQUFVLEVBQVZBLFlBQVU7bUJBQVZBLFNBQUFBLFVBQVUsQ0FBQ0MsV0FBVyxFQUFFO2dCQUN0QixJQUFJQyxPQUFPLEFBQUM7Z0JBRVosT0FBUUQsV0FBVztvQkFDakIsS0FBS0UsYUFBaUIsa0JBQUE7d0JBQUVELE9BQU8sR0FBRyxJQUFJLENBQUNsQixXQUFXLENBQUM7d0JBQUMsTUFBTTtvQkFDMUQsS0FBS29CLGFBQXFCLHNCQUFBO3dCQUFFRixPQUFPLEdBQUcsSUFBSSxDQUFDakIsZUFBZSxDQUFDO3dCQUFDLE1BQU07aUJBQ25FO2dCQUVELE9BQU9pQixPQUFPLENBQUM7WUFDakIsQ0FBQzs7O1lBRURHLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLElBQU1DLFFBQVEsR0FBRztvQkFDZixJQUFJLENBQUN0QixXQUFXO29CQUNoQixJQUFJLENBQUNDLGVBQWU7aUJBQ3JCLEFBQUM7Z0JBRUYsT0FBT3FCLFFBQVEsQ0FBQztZQUNsQixDQUFDOzs7WUFFREMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUN4QixJQUFJLEVBQUU7Z0JBQ1osSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUksQ0FBQztZQUNuQixDQUFDOzs7WUFFRHlCLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxDQUFDakIsUUFBUSxFQUFFQyxHQUFHLEVBQUU7Z0JBQ3BCLE9BQVFELFFBQVE7b0JBQ2QsS0FBS0UsVUFBYyxlQUFBO3dCQUNqQixJQUFJLENBQUNQLE9BQU8sR0FBR00sR0FBRyxDQUFDO3dCQUVuQixNQUFNO29CQUVSLEtBQUtFLFVBQW1CLG9CQUFBO3dCQUN0QixJQUFJLENBQUNQLFlBQVksR0FBR0ssR0FBRyxDQUFDO3dCQUV4QixNQUFNO29CQUVSLEtBQUtHLFVBQXVCLHdCQUFBO3dCQUMxQixJQUFJLENBQUNQLGdCQUFnQixHQUFHSSxHQUFHLENBQUM7d0JBRTVCLE1BQU07aUJBQ1Q7WUFDSCxDQUFDOzs7WUFFRGlCLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxDQUFDUixXQUFXLEVBQUVDLE9BQU8sRUFBRTtnQkFDL0IsT0FBUUQsV0FBVztvQkFDakIsS0FBS0UsYUFBaUIsa0JBQUE7d0JBQ3BCLElBQUksQ0FBQ25CLFdBQVcsR0FBR2tCLE9BQU8sQ0FBQzt3QkFFM0IsTUFBTTtvQkFFUixLQUFLRSxhQUFxQixzQkFBQTt3QkFDeEIsSUFBSSxDQUFDbkIsZUFBZSxHQUFHaUIsT0FBTyxDQUFDO3dCQUUvQixNQUFNO2lCQUNUO1lBQ0gsQ0FBQzs7O1lBRURRLEdBQVEsRUFBUkEsVUFBUTttQkFBUkEsU0FBQUEsUUFBUSxDQUFDbkIsUUFBUSxFQUFFO2dCQUNqQixJQUFNQyxHQUFHLEdBQUdPLFVBQVksYUFBQSxBQUFDO2dCQUV6QixJQUFJLENBQUNTLE1BQU0sQ0FBQ2pCLFFBQVEsRUFBRUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsQ0FBQzs7O1lBRURtQixHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksQ0FBQ1YsV0FBVyxFQUFFO2dCQUN4QixJQUFNQyxPQUFPLEdBQUdILFVBQVksYUFBQSxBQUFDO2dCQUU3QixJQUFJLENBQUNVLFVBQVUsQ0FBQ1IsV0FBVyxFQUFFQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxDQUFDOzs7WUFFRFUsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNyQixRQUFRLEVBQUVDLEdBQUcsRUFBRVMsV0FBVyxFQUFFQyxPQUFPLEVBQUU7Z0JBQzFDLElBQUksQ0FBQ00sTUFBTSxDQUFDakIsUUFBUSxFQUFFQyxHQUFHLENBQUMsQ0FBQztnQkFFM0IsSUFBSSxDQUFDaUIsVUFBVSxDQUFDUixXQUFXLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7OztZQUVEVyxHQUFNLEVBQU5BLFFBQU07bUJBQU5BLFNBQUFBLE1BQU0sR0FBRztnQkFDUCxJQUFNOUIsSUFBSSxHQUFHLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxFQUM5QkMsZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxFQUN0Q0MsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxFQUN0QkMsWUFBWSxHQUFHLElBQUksQ0FBQ0EsWUFBWSxFQUNoQ0MsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQSxnQkFBZ0IsRUFDeEMwQixJQUFJLEdBQUc7b0JBQ0wvQixJQUFJLEVBQUpBLElBQUk7b0JBQ0pDLFdBQVcsRUFBWEEsV0FBVztvQkFDWEMsZUFBZSxFQUFmQSxlQUFlO29CQUNmQyxPQUFPLEVBQVBBLE9BQU87b0JBQ1BDLFlBQVksRUFBWkEsWUFBWTtvQkFDWkMsZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7aUJBQ2pCLEFBQUM7Z0JBRVIsT0FBTzBCLElBQUksQ0FBQztZQUNkLENBQUM7Ozs7WUFFTUMsR0FBUSxFQUFSQSxVQUFRO21CQUFmLFNBQU9BLFFBQVEsQ0FBQ0QsSUFBSSxFQUFFO2dCQUNwQixJQUFRL0IsSUFBSSxHQUE0RStCLElBQUksQ0FBcEYvQixJQUFJLEVBQUVDLFdBQVcsR0FBK0Q4QixJQUFJLENBQTlFOUIsV0FBVyxFQUFFQyxlQUFlLEdBQThDNkIsSUFBSSxDQUFqRTdCLGVBQWUsRUFBRUMsT0FBTyxHQUFxQzRCLElBQUksQ0FBaEQ1QixPQUFPLEVBQUVDLFlBQVksR0FBdUIyQixJQUFJLENBQXZDM0IsWUFBWSxFQUFFQyxnQkFBZ0IsR0FBSzBCLElBQUksQ0FBekIxQixnQkFBZ0IsRUFDN0U0QixhQUFhLEdBQUcsSUFqSkxsQyxhQUFhLENBaUpVQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCLENBQUMsQUFBQztnQkFFckgsT0FBTzRCLGFBQWEsQ0FBQztZQUN2QixDQUFDOzs7WUFFTUMsR0FBUSxFQUFSQSxVQUFRO21CQUFmLFNBQU9BLFFBQVEsQ0FBQ2xDLElBQUksRUFBRTtnQkFDcEIsSUFBTUMsV0FBVyxHQUFHZSxVQUFZLGFBQUEsRUFDMUJkLGVBQWUsR0FBR2MsVUFBWSxhQUFBLEVBQzlCYixPQUFPLEdBQUdhLFVBQVksYUFBQSxFQUN0QlosWUFBWSxHQUFHWSxVQUFZLGFBQUEsRUFDM0JYLGdCQUFnQixHQUFHVyxVQUFZLGFBQUEsRUFDL0JpQixhQUFhLEdBQUcsSUE1SkxsQyxhQUFhLENBNEpVQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCLENBQUMsQUFBQztnQkFFckgsT0FBTzRCLGFBQWEsQ0FBQztZQUN2QixDQUFDOzs7V0EvSmtCbEMsYUFBYTtDQWdLakMsRUFBQSJ9