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
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var CustomGrammar = /*#__PURE__*/ function() {
    function CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern) {
        _class_call_check(this, CustomGrammar);
        this.name = name;
        this.termBNF = termBNF;
        this.statementBNF = statementBNF;
        this.typePattern = typePattern;
        this.symbolPattern = symbolPattern;
    }
    _create_class(CustomGrammar, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getTermBNF",
            value: function getTermBNF() {
                return this.termBNF;
            }
        },
        {
            key: "getStatementBNF",
            value: function getStatementBNF() {
                return this.statementBNF;
            }
        },
        {
            key: "getTypePattern",
            value: function getTypePattern() {
                return this.typePattern;
            }
        },
        {
            key: "getSymbolPattern",
            value: function getSymbolPattern() {
                return this.symbolPattern;
            }
        },
        {
            key: "getBNF",
            value: function getBNF() {
                var _this = this;
                var ruleName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                var bnf;
                switch(ruleName){
                    case _ruleNames.TERM_RULE_NAME:
                        bnf = this.termBNF;
                        break;
                    case _ruleNames.STATEMENT_RULE_NAME:
                        bnf = this.statementBNF;
                        break;
                    default:
                        {
                            var ruleNames = [
                                _ruleNames.TERM_RULE_NAME,
                                _ruleNames.STATEMENT_RULE_NAME
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
                    case _patternNames.SYMBOL_PATTERN_NAME:
                        pattern = this.symbolPattern;
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
                    this.symbolPattern
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
                    case _patternNames.SYMBOL_PATTERN_NAME:
                        this.symbolPattern = pattern;
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
                var name = this.name, termBNF = this.termBNF, statementBNF = this.statementBNF, typePattern = this.typePattern, symbolPattern = this.symbolPattern, json = {
                    name: name,
                    termBNF: termBNF,
                    statementBNF: statementBNF,
                    typePattern: typePattern,
                    symbolPattern: symbolPattern
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var name = json.name, termBNF = json.termBNF, statementBNF = json.statementBNF, typePattern = json.typePattern, symbolPattern = json.symbolPattern, customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern);
                return customGrammar;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var termBNF = _constants.EMPTY_STRING, statementBNF = _constants.EMPTY_STRING, typePattern = _constants.EMPTY_STRING, symbolPattern = _constants.EMPTY_STRING, customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern);
                return customGrammar;
            }
        },
        {
            key: "fromNameTermBNFStatementBNFTypePatternAndSymbolPattern",
            value: function fromNameTermBNFStatementBNFTypePatternAndSymbolPattern(name, termBNF, statementBNF, typePattern, symbolPattern) {
                var customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBTWU1CT0xfUEFUVEVSTl9OQU1FIH0gZnJvbSBcIi4vcGF0dGVybk5hbWVzXCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtQk5GID0gdGVybUJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLnR5cGVQYXR0ZXJuID0gdHlwZVBhdHRlcm47XG4gICAgdGhpcy5zeW1ib2xQYXR0ZXJuID0gc3ltYm9sUGF0dGVybjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybUJORigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtQk5GO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Qk5GKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudEJORjtcbiAgfVxuXG4gIGdldFR5cGVQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0U3ltYm9sUGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0Qk5GKHJ1bGVOYW1lID0gbnVsbCkge1xuICAgIGxldCBibmY7XG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiBibmYgPSB0aGlzLnRlcm1CTkY7IGJyZWFrO1xuICAgICAgY2FzZSBTVEFURU1FTlRfUlVMRV9OQU1FOiBibmYgPSB0aGlzLnN0YXRlbWVudEJORjsgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVzID0gW1xuICAgICAgICAgICAgICAgIFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgICAgICAgIFNUQVRFTUVOVF9SVUxFX05BTUVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgY29tYmluZWRCTkYgPSBydWxlTmFtZXMucmVkdWNlKChjb21iaW5lZEJORiwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORihydWxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYm5mICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gYCR7Y29tYmluZWRCTkZ9XG4gICAgICAgICAgICBcbiR7Ym5mfWA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkQk5GO1xuICAgICAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgICAgIGJuZiA9IGNvbWJpbmVkQk5GOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIGdldFBhdHRlcm4ocGF0dGVybk5hbWUpIHtcbiAgICBsZXQgcGF0dGVybjtcblxuICAgIHN3aXRjaCAocGF0dGVybk5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9QQVRURVJOX05BTUU6IHBhdHRlcm4gPSB0aGlzLnR5cGVQYXR0ZXJuOyBicmVhaztcbiAgICAgIGNhc2UgU1lNQk9MX1BBVFRFUk5fTkFNRTogcGF0dGVybiA9IHRoaXMuc3ltYm9sUGF0dGVybjsgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdHRlcm47XG4gIH1cblxuICBnZXRQYXR0ZXJucygpIHtcbiAgICBjb25zdCBwYXR0ZXJucyA9IFtcbiAgICAgIHRoaXMudHlwZVBhdHRlcm4sXG4gICAgICB0aGlzLnN5bWJvbFBhdHRlcm5cbiAgICBdO1xuXG4gICAgcmV0dXJuIHBhdHRlcm5zO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEJORihydWxlTmFtZSwgYm5mKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pIHtcbiAgICBzd2l0Y2ggKHBhdHRlcm5OYW1lKSB7XG4gICAgICBjYXNlIFRZUEVfUEFUVEVSTl9OQU1FOlxuICAgICAgICB0aGlzLnR5cGVQYXR0ZXJuID0gcGF0dGVybjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTWU1CT0xfUEFUVEVSTl9OQU1FOlxuICAgICAgICB0aGlzLnN5bWJvbFBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgYm5mID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICByZXNldFBhdHRlcm4ocGF0dGVybk5hbWUpIHtcbiAgICBjb25zdCBwYXR0ZXJuID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHRlcm1CTkYgPSB0aGlzLnRlcm1CTkYsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgdHlwZVBhdHRlcm4gPSB0aGlzLnR5cGVQYXR0ZXJuLFxuICAgICAgICAgIHN5bWJvbFBhdHRlcm4gPSB0aGlzLnN5bWJvbFBhdHRlcm4sXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0ZXJtQk5GLFxuICAgICAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICAgICAgdHlwZVBhdHRlcm4sXG4gICAgICAgICAgICBzeW1ib2xQYXR0ZXJuXG4gICAgICAgICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuIH0gPSBqc29uLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0ZXJtQk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB0eXBlUGF0dGVybiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzeW1ib2xQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lVGVybUJORlN0YXRlbWVudEJORlR5cGVQYXR0ZXJuQW5kU3ltYm9sUGF0dGVybihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuKSB7XG4gICAgY29uc3QgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyIiwibmFtZSIsInRlcm1CTkYiLCJzdGF0ZW1lbnRCTkYiLCJ0eXBlUGF0dGVybiIsInN5bWJvbFBhdHRlcm4iLCJnZXROYW1lIiwiZ2V0VGVybUJORiIsImdldFN0YXRlbWVudEJORiIsImdldFR5cGVQYXR0ZXJuIiwiZ2V0U3ltYm9sUGF0dGVybiIsImdldEJORiIsInJ1bGVOYW1lIiwiYm5mIiwiVEVSTV9SVUxFX05BTUUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiY29tYmluZWRCTkYiLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJnZXRQYXR0ZXJuIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuIiwiVFlQRV9QQVRURVJOX05BTUUiLCJTWU1CT0xfUEFUVEVSTl9OQU1FIiwiZ2V0UGF0dGVybnMiLCJwYXR0ZXJucyIsInNldE5hbWUiLCJzZXRCTkYiLCJzZXRQYXR0ZXJuIiwicmVzZXRCTkYiLCJyZXNldFBhdHRlcm4iLCJ1cGRhdGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiLCJmcm9tTmFtZVRlcm1CTkZTdGF0ZW1lbnRCTkZUeXBlUGF0dGVybkFuZFN5bWJvbFBhdHRlcm4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpROzRCQUMwQjt5QkFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBQSxBQUFNQSw4QkFBTjthQUFNQSxjQUNQQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLGFBQWE7Z0NBRGhETDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBTkpMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxPQUFPO1lBQ3JCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxZQUFZO1lBQzFCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxXQUFXO1lBQ3pCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxhQUFhO1lBQzNCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBOztvQkFBT0MsV0FBQUEsaUVBQVc7Z0JBQ2hCLElBQUlDO2dCQUVKLE9BQVFEO29CQUNOLEtBQUtFLHlCQUFjO3dCQUFFRCxNQUFNLElBQUksQ0FBQ1gsT0FB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