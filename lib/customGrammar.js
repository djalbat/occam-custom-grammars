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
    function CustomGrammar(name, typeBNF, termBNF, statementBNF, typePattern, symbolPattern) {
        _class_call_check(this, CustomGrammar);
        this.name = name;
        this.typeBNF = typeBNF;
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
            key: "getTypeBNF",
            value: function getTypeBNF() {
                return this.typeBNF;
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
                    case _ruleNames.TYPE_RULE_NAME:
                        bnf = this.typeBNF;
                        break;
                    case _ruleNames.TERM_RULE_NAME:
                        bnf = this.termBNF;
                        break;
                    case _ruleNames.STATEMENT_RULE_NAME:
                        bnf = this.statementBNF;
                        break;
                    default:
                        {
                            var ruleNames = [
                                _ruleNames.TYPE_RULE_NAME,
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
                    case _ruleNames.TYPE_RULE_NAME:
                        this.typeBNF = bnf;
                        break;
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
                var name = this.name, typeBNF = this.typeBNF, termBNF = this.termBNF, statementBNF = this.statementBNF, typePattern = this.typePattern, symbolPattern = this.symbolPattern, json = {
                    name: name,
                    typeBNF: typeBNF,
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
                var name = json.name, typeBNF = json.typeBNF, termBNF = json.termBNF, statementBNF = json.statementBNF, typePattern = json.typePattern, symbolPattern = json.symbolPattern, customGrammar = new CustomGrammar(name, typeBNF, termBNF, statementBNF, typePattern, symbolPattern);
                return customGrammar;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var typeBNF = _constants.EMPTY_STRING, termBNF = _constants.EMPTY_STRING, statementBNF = _constants.EMPTY_STRING, typePattern = _constants.EMPTY_STRING, symbolPattern = _constants.EMPTY_STRING, customGrammar = new CustomGrammar(name, typeBNF, termBNF, statementBNF, typePattern, symbolPattern);
                return customGrammar;
            }
        },
        {
            key: "fromNameTypeBNFTermBNFStatementBNFTypePatternAndSymbolPattern",
            value: function fromNameTypeBNFTermBNFStatementBNFTypePatternAndSymbolPattern(name, typeGNF, termBNF, statementBNF, typePattern, symbolPattern) {
                var customGrammar = new CustomGrammar(name, typeGNF, termBNF, statementBNF, typePattern, symbolPattern);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRZUEVfUEFUVEVSTl9OQU1FLCBTWU1CT0xfUEFUVEVSTl9OQU1FIH0gZnJvbSBcIi4vcGF0dGVybk5hbWVzXCI7XG5pbXBvcnQgeyBUWVBFX1JVTEVfTkFNRSwgVEVSTV9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGVCTkYsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZUJORiA9IHR5cGVCTkY7XG4gICAgdGhpcy50ZXJtQk5GID0gdGVybUJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLnR5cGVQYXR0ZXJuID0gdHlwZVBhdHRlcm47XG4gICAgdGhpcy5zeW1ib2xQYXR0ZXJuID0gc3ltYm9sUGF0dGVybjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZUJORigpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlQk5GO1xuICB9XG5cbiAgZ2V0VGVybUJORigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtQk5GO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Qk5GKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudEJORjtcbiAgfVxuXG4gIGdldFR5cGVQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0U3ltYm9sUGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0Qk5GKHJ1bGVOYW1lID0gbnVsbCkge1xuICAgIGxldCBibmY7XG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFRZUEVfUlVMRV9OQU1FOiBibmYgPSB0aGlzLnR5cGVCTkY7IGJyZWFrO1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTogYm5mID0gdGhpcy50ZXJtQk5GOyBicmVhaztcbiAgICAgIGNhc2UgU1RBVEVNRU5UX1JVTEVfTkFNRTogYm5mID0gdGhpcy5zdGF0ZW1lbnRCTkY7IGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lcyA9IFtcbiAgICAgICAgICAgICAgICBUWVBFX1JVTEVfTkFNRSxcbiAgICAgICAgICAgICAgICBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICAgICAgICBTVEFURU1FTlRfUlVMRV9OQU1FXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gcnVsZU5hbWVzLnJlZHVjZSgoY29tYmluZWRCTkYsIHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYocnVsZU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJuZiAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgICAgICBjb21iaW5lZEJORiA9IGAke2NvbWJpbmVkQk5GfVxuICAgICAgICAgICAgXG4ke2JuZn1gO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lZEJORjtcbiAgICAgICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgICAgICBibmYgPSBjb21iaW5lZEJORjsgIC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBnZXRQYXR0ZXJuKHBhdHRlcm5OYW1lKSB7XG4gICAgbGV0IHBhdHRlcm47XG5cbiAgICBzd2l0Y2ggKHBhdHRlcm5OYW1lKSB7XG4gICAgICBjYXNlIFRZUEVfUEFUVEVSTl9OQU1FOiBwYXR0ZXJuID0gdGhpcy50eXBlUGF0dGVybjsgYnJlYWs7XG4gICAgICBjYXNlIFNZTUJPTF9QQVRURVJOX05BTUU6IHBhdHRlcm4gPSB0aGlzLnN5bWJvbFBhdHRlcm47IGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9XG5cbiAgZ2V0UGF0dGVybnMoKSB7XG4gICAgY29uc3QgcGF0dGVybnMgPSBbXG4gICAgICB0aGlzLnR5cGVQYXR0ZXJuLFxuICAgICAgdGhpcy5zeW1ib2xQYXR0ZXJuXG4gICAgXTtcblxuICAgIHJldHVybiBwYXR0ZXJucztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMudHlwZUJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhdHRlcm4ocGF0dGVybk5hbWUsIHBhdHRlcm4pIHtcbiAgICBzd2l0Y2ggKHBhdHRlcm5OYW1lKSB7XG4gICAgICBjYXNlIFRZUEVfUEFUVEVSTl9OQU1FOlxuICAgICAgICB0aGlzLnR5cGVQYXR0ZXJuID0gcGF0dGVybjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTWU1CT0xfUEFUVEVSTl9OQU1FOlxuICAgICAgICB0aGlzLnN5bWJvbFBhdHRlcm4gPSBwYXR0ZXJuO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgYm5mID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICByZXNldFBhdHRlcm4ocGF0dGVybk5hbWUpIHtcbiAgICBjb25zdCBwYXR0ZXJuID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBwYXR0ZXJuTmFtZSwgcGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgdGhpcy5zZXRQYXR0ZXJuKHBhdHRlcm5OYW1lLCBwYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHR5cGVCTkYgPSB0aGlzLnR5cGVCTkYsXG4gICAgICAgICAgdGVybUJORiA9IHRoaXMudGVybUJORixcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgICAgICB0eXBlUGF0dGVybiA9IHRoaXMudHlwZVBhdHRlcm4sXG4gICAgICAgICAgc3ltYm9sUGF0dGVybiA9IHRoaXMuc3ltYm9sUGF0dGVybixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHR5cGVCTkYsXG4gICAgICAgICAgICB0ZXJtQk5GLFxuICAgICAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICAgICAgdHlwZVBhdHRlcm4sXG4gICAgICAgICAgICBzeW1ib2xQYXR0ZXJuXG4gICAgICAgICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCB0eXBlQk5GLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuIH0gPSBqc29uLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0eXBlQk5GLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0eXBlQk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHRlcm1CTkYgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHR5cGVQYXR0ZXJuID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN5bWJvbFBhdHRlcm4gPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHR5cGVCTkYsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVUeXBlQk5GVGVybUJORlN0YXRlbWVudEJORlR5cGVQYXR0ZXJuQW5kU3ltYm9sUGF0dGVybihuYW1lLCB0eXBlR05GLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVQYXR0ZXJuLCBzeW1ib2xQYXR0ZXJuKSB7XG4gICAgY29uc3QgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHR5cGVHTkYsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgdHlwZVBhdHRlcm4sIHN5bWJvbFBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyIiwibmFtZSIsInR5cGVCTkYiLCJ0ZXJtQk5GIiwic3RhdGVtZW50Qk5GIiwidHlwZVBhdHRlcm4iLCJzeW1ib2xQYXR0ZXJuIiwiZ2V0TmFtZSIsImdldFR5cGVCTkYiLCJnZXRUZXJtQk5GIiwiZ2V0U3RhdGVtZW50Qk5GIiwiZ2V0VHlwZVBhdHRlcm4iLCJnZXRTeW1ib2xQYXR0ZXJuIiwiZ2V0Qk5GIiwicnVsZU5hbWUiLCJibmYiLCJUWVBFX1JVTEVfTkFNRSIsIlRFUk1fUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInJ1bGVOYW1lcyIsImNvbWJpbmVkQk5GIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwiZ2V0UGF0dGVybiIsInBhdHRlcm5OYW1lIiwicGF0dGVybiIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiU1lNQk9MX1BBVFRFUk5fTkFNRSIsImdldFBhdHRlcm5zIiwicGF0dGVybnMiLCJzZXROYW1lIiwic2V0Qk5GIiwic2V0UGF0dGVybiIsInJlc2V0Qk5GIiwicmVzZXRQYXR0ZXJuIiwidXBkYXRlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY3VzdG9tR3JhbW1hciIsImZyb21OYW1lIiwiZnJvbU5hbWVUeXBlQk5GVGVybUJORlN0YXRlbWVudEJORlR5cGVQYXR0ZXJuQW5kU3ltYm9sUGF0dGVybiIsInR5cGVHTkYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lCQUpROzRCQUMwQjt5QkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsSUFBQSxBQUFNQSw4QkFBTjthQUFNQSxjQUNQQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLFdBQVcsRUFBRUMsYUFBYTtnQ0FEekROO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsT0FBTyxHQUFH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