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
    function CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern) {
        _class_call_check(this, CustomGrammar);
        this.name = name;
        this.termBNF = termBNF;
        this.statementBNF = statementBNF;
        this.typePattern = typePattern;
        this.symbolPattern = symbolPattern;
        this.operatorPattern = operatorPattern;
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
                    this.symbolPattern,
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
                var name = this.name, termBNF = this.termBNF, statementBNF = this.statementBNF, typePattern = this.typePattern, symbolPattern = this.symbolPattern, operatorPattern = this.operatorPattern, json = {
                    name: name,
                    termBNF: termBNF,
                    statementBNF: statementBNF,
                    typePattern: typePattern,
                    symbolPattern: symbolPattern,
                    operatorPattern: operatorPattern
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var name = json.name, termBNF = json.termBNF, statementBNF = json.statementBNF, typePattern = json.typePattern, symbolPattern = json.symbolPattern, operatorPattern = json.operatorPattern, customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern);
                return customGrammar;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var termBNF = _constants.EMPTY_STRING, statementBNF = _constants.EMPTY_STRING, typePattern = _constants.EMPTY_STRING, symbolPattern = _constants.EMPTY_STRING, operatorPattern = _constants.EMPTY_STRING, customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern);
                return customGrammar;
            }
        },
        {
            key: "fromNameTermBNFStatementBNFTypePatternSymbolPatternAndOperatorPattern",
            value: function fromNameTermBNFStatementBNFTypePatternSymbolPatternAndOperatorPattern(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern) {
                var customGrammar = new CustomGrammar(name, termBNF, statementBNF, typePattern, symbolPattern, operatorPattern);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBUWVBFX1BBVFRFUk5fTkFNRSwgU1lNQk9MX1BBVFRFUk5fTkFNRSwgT1BFUkFUT1JfUEFUVEVSTl9OQU1FIH0gZnJvbSBcIi4vcGF0dGVybk5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGVybUJORiA9IHRlcm1CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy50eXBlUGF0dGVybiA9IHR5cGVQYXR0ZXJuO1xuICAgIHRoaXMuc3ltYm9sUGF0dGVybiA9IHN5bWJvbFBhdHRlcm47XG4gICAgdGhpcy5vcGVyYXRvclBhdHRlcm4gPSBvcGVyYXRvclBhdHRlcm47XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEJORihydWxlTmFtZSA9IG51bGwpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTogYm5mID0gdGhpcy50ZXJtQk5GOyBicmVhaztcbiAgICAgIGNhc2UgU1RBVEVNRU5UX1JVTEVfTkFNRTogYm5mID0gdGhpcy5zdGF0ZW1lbnRCTkY7IGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lcyA9IFtcbiAgICAgICAgICAgICAgICBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICAgICAgICBTVEFURU1FTlRfUlVMRV9OQU1FXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gcnVsZU5hbWVzLnJlZHVjZSgoY29tYmluZWRCTkYsIHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYocnVsZU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJuZiAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgICAgICBjb21iaW5lZEJORiA9IGAke2NvbWJpbmVkQk5GfVxuICAgICAgICAgICAgXG4ke2JuZn1gO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lZEJORjtcbiAgICAgICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgICAgICBibmYgPSBjb21iaW5lZEJORjsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBnZXRQYXR0ZXJuKHBhdHRlcm5OYW1lKSB7XG4gICAgbGV0IHBhdHRlcm47XG5cbiAgICBzd2l0Y2ggKHBhdHRlcm5OYW1lKSB7XG4gICAgICBjYXNlIFRZUEVfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy50eXBlUGF0dGVybjsgYnJlYWs7XG4gICAgICBjYXNlIFNZTUJPTF9QQVRURVJOX05BTUU6IHBhdHRlcm4gPSB0aGlzLnN5bWJvbFBhdHRlcm47IGJyZWFrO1xuICAgICAgY2FzZSBPUEVSQVRPUl9QQVRURVJOX05BTUU6IHBhdHRlcm4gPSB0aGlzLm9wZXJhdG9yUGF0dGVybjsgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdHRlcm47XG4gIH1cblxuICBnZXRQYXR0ZXJucygpIHtcbiAgICBjb25zdCBwYXR0ZXJucyA9IFtcbiAgICAgIHRoaXMudHlwZVBhdHRlcm4sXG4gICAgICB0aGlzLnN5bWJvbFBhdHRlcm4sXG4gICAgICB0aGlzLm9wZXJhdG9yUGF0dGVyblxuICAgIF07XG5cbiAgICByZXR1cm4gcGF0dGVybnM7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0Qk5GKHJ1bGVOYW1lLCBibmYpIHtcbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLnRlcm1CTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU1RBVEVNRU5UX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBibmY7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2V0UGF0dGVybihwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHN3aXRjaCAocGF0dGVybk5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMudHlwZVBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNZTUJPTF9QQVRURVJOX05BTUU6XG4gICAgICAgIHRoaXMuc3ltYm9sUGF0dGVybiA9IHBhdHRlcm47XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT1BFUkFUT1JfUEFUVEVSTl9OQU1FOlxuICAgICAgICB0aGlzLm9wZXJhdG9yUGF0dGVybiA9IHBhdHRlcm47XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHJlc2V0UGF0dGVybihwYXR0ZXJuTmFtZSkge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICB9XG5cbiAgdXBkYXRlKHJ1bGVOYW1lLCBibmYsIHBhdHRlcm5OYW1lLCBwYXR0ZXJuKSB7XG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICB0aGlzLnNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgdGVybUJORiA9IHRoaXMudGVybUJORixcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgICAgICB0eXBlUGF0dGVybiA9IHRoaXMudHlwZVBhdHRlcm4sXG4gICAgICAgICAgc3ltYm9sUGF0dGVybiA9IHRoaXMuc3ltYm9sUGF0dGVybixcbiAgICAgICAgICBvcGVyYXRvclBhdHRlcm4gPSB0aGlzLm9wZXJhdG9yUGF0dGVybixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRlcm1CTkYsXG4gICAgICAgICAgICBzdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgICB0eXBlUGF0dGVybixcbiAgICAgICAgICAgIHN5bWJvbFBhdHRlcm4sXG4gICAgICAgICAgICBvcGVyYXRvclBhdHRlcm5cbiAgICAgICAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IG5hbWUsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4sIG9wZXJhdG9yUGF0dGVybiB9ID0ganNvbixcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0ZXJtQk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB0eXBlUGF0dGVybiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzeW1ib2xQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIG9wZXJhdG9yUGF0dGVybiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lVGVybUJORlN0YXRlbWVudEJORlR5cGVQYXR0ZXJuU3ltYm9sUGF0dGVybkFuZE9wZXJhdG9yUGF0dGVybihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuLCBvcGVyYXRvclBhdHRlcm4pIHtcbiAgICBjb25zdCBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlUGF0dGVybiwgc3ltYm9sUGF0dGVybiwgb3BlcmF0b3JQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJ0ZXJtQk5GIiwic3RhdGVtZW50Qk5GIiwidHlwZVBhdHRlcm4iLCJzeW1ib2xQYXR0ZXJuIiwib3BlcmF0b3JQYXR0ZXJuIiwiZ2V0TmFtZSIsImdldEJORiIsInJ1bGVOYW1lIiwiYm5mIiwiVEVSTV9SVUxFX05BTUUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiY29tYmluZWRCTkYiLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJnZXRQYXR0ZXJuIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuIiwiVFlQRV9QQVRURVJOX05BTUUiLCJTWU1CT0xfUEFUVEVSTl9OQU1FIiwiT1BFUkFUT1JfUEFUVEVSTl9OQU1FIiwiZ2V0UGF0dGVybnMiLCJwYXR0ZXJucyIsInNldE5hbWUiLCJzZXRCTkYiLCJzZXRQYXR0ZXJuIiwicmVzZXRCTkYiLCJyZXNldFBhdHRlcm4iLCJ1cGRhdGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiLCJmcm9tTmFtZVRlcm1CTkZTdGF0ZW1lbnRCTkZUeXBlUGF0dGVyblN5bWJvbFBhdHRlcm5BbmRPcGVyYXRvclBhdHRlcm4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpRO3lCQUN1Qjs0QkFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9ELElBQUEsQUFBTUEsOEJBQU47YUFBTUEsY0FDUEMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGVBQWU7Z0NBRGpFTjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7O2tCQVBOTjs7WUFVbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sSUFBSTtZQUNsQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTs7b0JBQU9DLFdBQUFBLGlFQUFXO2dCQUNo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