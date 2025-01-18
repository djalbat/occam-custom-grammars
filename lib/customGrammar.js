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
var _ruleNames = require("./ruleNames");
var _patternNames = require("./patternNames");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBUWVBFX1BBVFRFUk5fTkFNRSwgU1lNQk9MX1BBVFRFUk5fTkFNRSB9IGZyb20gXCIuL3BhdHRlcm5OYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtQk5GID0gdGVybUJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLnR5cGVQYXR0ZXJuID0gdHlwZVBhdHRlcm47XG4gICAgdGhpcy5zeW1ib2xQYXR0ZXJuID0gc3ltYm9sUGF0dGVybjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0Qk5GKHJ1bGVOYW1lID0gbnVsbCkge1xuICAgIGxldCBibmY7XG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiBibmYgPSB0aGlzLnRlcm1CTkY7IGJyZWFrO1xuICAgICAgY2FzZSBTVEFURU1FTlRfUlVMRV9OQU1FOiBibmYgPSB0aGlzLnN0YXRlbWVudEJORjsgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVzID0gW1xuICAgICAgICAgICAgICAgIFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgICAgICAgIFNUQVRFTUVOVF9SVUxFX05BTUVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgY29tYmluZWRCTkYgPSBydWxlTmFtZXMucmVkdWNlKChjb21iaW5lZEJORiwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORihydWxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYm5mICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gYCR7Y29tYmluZWRCTkZ9XG4gICAgICAgICAgICBcbiR7Ym5mfWA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkQk5GO1xuICAgICAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgICAgIGJuZiA9IGNvbWJpbmVkQk5GOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIGdldFBhdHRlcm4ocGF0dGVybk5hbWUpIHtcbiAgICBsZXQgcGF0dGVybjtcblxuICAgIHN3aXRjaCAocGF0dGVybk5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9QQVRURVJOX05BTUU6IHBhdHRlcm4gPSB0aGlzLnR5cGVQYXR0ZXJuOyBicmVhaztcbiAgICAgIGNhc2UgU1lNQk9MX1BBVFRFUk5fTkFNRTogcGF0dGVybiA9IHRoaXMuc3ltYm9sUGF0dGVybjsgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdHRlcm47XG4gIH1cblxuICBnZXRQYXR0ZXJucygpIHtcbiAgICBjb25zdCBwYXR0ZXJucyA9IFtcbiAgICAgIHRoaXMudHlwZVBhdHRlcm4sXG4gICAgICB0aGlzLnN5bWJvbFBhdHRlcm5cbiAgICBdO1xuXG4gICAgcmV0dXJuIHBhdHRlcm5zO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEJORihydWxlTmFtZSwgYm5mKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pIHtcbiAgICBzd2l0Y2ggKHBhdHRlcm5OYW1lKSB7XG4gICAgICBjYXNlIFRZUEVfUEFUVEVSTl9OQU1FOlxuICAgICAgICB0aGlzLnR5cGVQYXR0ZXJuID0gcGF0dGVybjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTWU1CT0xfUEFUVEVSTl9OQU1FOlxuICAgICAgICB0aGlzLnN5bWJvbFBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgYm5mID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICByZXNldFBhdHRlcm4ocGF0dGVybk5hbWUpIHtcbiAgICBjb25zdCBwYXR0ZXJuID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHRlcm1CTkYgPSB0aGlzLnRlcm1CTkYsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgdHlwZVBhdHRlcm4gPSB0aGlzLnR5cGVQYXR0ZXJuLFxuICAgICAgICAgIHN5bWJvbFBhdHRlcm4gPSB0aGlzLnN5bWJvbFBhdHRlcm4sXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0ZXJtQk5GLFxuICAgICAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICAgICAgdHlwZVBhdHRlcm4sXG4gICAgICAgICAgICBzeW1ib2xQYXR0ZXJuXG4gICAgICAgICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuIH0gPSBqc29uLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0ZXJtQk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB0eXBlUGF0dGVybiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzeW1ib2xQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lVGVybUJORlN0YXRlbWVudEJORlR5cGVQYXR0ZXJuQW5kU3ltYm9sUGF0dGVybihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuKSB7XG4gICAgY29uc3QgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyIiwibmFtZSIsInRlcm1CTkYiLCJzdGF0ZW1lbnRCTkYiLCJ0eXBlUGF0dGVybiIsInN5bWJvbFBhdHRlcm4iLCJnZXROYW1lIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJibmYiLCJURVJNX1JVTEVfTkFNRSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJydWxlTmFtZXMiLCJjb21iaW5lZEJORiIsInJlZHVjZSIsIkVNUFRZX1NUUklORyIsImdldFBhdHRlcm4iLCJwYXR0ZXJuTmFtZSIsInBhdHRlcm4iLCJUWVBFX1BBVFRFUk5fTkFNRSIsIlNZTUJPTF9QQVRURVJOX05BTUUiLCJnZXRQYXR0ZXJucyIsInBhdHRlcm5zIiwic2V0TmFtZSIsInNldEJORiIsInNldFBhdHRlcm4iLCJyZXNldEJORiIsInJlc2V0UGF0dGVybiIsInVwZGF0ZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImN1c3RvbUdyYW1tYXIiLCJmcm9tTmFtZSIsImZyb21OYW1lVGVybUJORlN0YXRlbWVudEJORlR5cGVQYXR0ZXJuQW5kU3ltYm9sUGF0dGVybiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSlE7eUJBQ3VCOzRCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFBLEFBQU1BLDhCQUFOO2FBQU1BLGNBQ1BDLElBQUksRUFBRUMsT0FBTyxFQUFF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