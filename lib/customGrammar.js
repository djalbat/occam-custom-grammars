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
var _vocabularyNames = require("./vocabularyNames");
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
    function CustomGrammar(name, termBNF, statementBNF, typeVocabulary, symbolVocabulary) {
        _class_call_check(this, CustomGrammar);
        this.name = name;
        this.termBNF = termBNF;
        this.statementBNF = statementBNF;
        this.typeVocabulary = typeVocabulary;
        this.symbolVocabulary = symbolVocabulary;
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
            key: "getTypeVocabulary",
            value: function getTypeVocabulary() {
                return this.typeVocabulary;
            }
        },
        {
            key: "getSymbolVocabulary",
            value: function getSymbolVocabulary() {
                return this.symbolVocabulary;
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
            key: "getVocabulary",
            value: function getVocabulary(vocabularyName) {
                var vocabulary;
                switch(vocabularyName){
                    case _vocabularyNames.TYPE_VOCABULARY_NAME:
                        vocabulary = this.typeVocabulary;
                        break;
                    case _vocabularyNames.SYMBOL_VOCABULARY_NAME:
                        vocabulary = this.symbolVocabulary;
                        break;
                }
                return vocabulary;
            }
        },
        {
            key: "getVocabularies",
            value: function getVocabularies() {
                var vocabularies = [
                    this.typeVocabulary,
                    this.symbolVocabulary
                ];
                return vocabularies;
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
            key: "setVocabulary",
            value: function setVocabulary(vocabularyName, vocabulary) {
                switch(vocabularyName){
                    case _vocabularyNames.TYPE_VOCABULARY_NAME:
                        this.typeVocabulary = vocabulary;
                        break;
                    case _vocabularyNames.SYMBOL_VOCABULARY_NAME:
                        this.symbolVocabulary = vocabulary;
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
            key: "resetVocabulary",
            value: function resetVocabulary(vocabularyName) {
                var vocabulary = _constants.EMPTY_STRING;
                this.setVocabulary(vocabularyName, vocabulary);
            }
        },
        {
            key: "update",
            value: function update(ruleName, bnf, vocabularyName, vocabulary) {
                this.setBNF(ruleName, bnf);
                this.setVocabulary(vocabularyName, vocabulary);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, termBNF = this.termBNF, statementBNF = this.statementBNF, typeVocabulary = this.typeVocabulary, symbolVocabulary = this.symbolVocabulary, json = {
                    name: name,
                    termBNF: termBNF,
                    statementBNF: statementBNF,
                    typeVocabulary: typeVocabulary,
                    symbolVocabulary: symbolVocabulary
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var name = json.name, termBNF = json.termBNF, statementBNF = json.statementBNF, typeVocabulary = json.typeVocabulary, symbolVocabulary = json.symbolVocabulary, customGrammar = new CustomGrammar(name, termBNF, statementBNF, typeVocabulary, symbolVocabulary);
                return customGrammar;
            }
        },
        {
            key: "fromName",
            value: function fromName(name) {
                var termBNF = _constants.EMPTY_STRING, statementBNF = _constants.EMPTY_STRING, typeVocabulary = _constants.EMPTY_STRING, symbolVocabulary = _constants.EMPTY_STRING, customGrammar = new CustomGrammar(name, termBNF, statementBNF, typeVocabulary, symbolVocabulary);
                return customGrammar;
            }
        },
        {
            key: "fromNameTermBNFStatementBNFTypeVocabularyAndSymbolVocabulary",
            value: function fromNameTermBNFStatementBNFTypeVocabularyAndSymbolVocabulary(name, termBNF, statementBNF, typeVocabulary, symbolVocabulary) {
                var customGrammar = new CustomGrammar(name, termBNF, statementBNF, typeVocabulary, symbolVocabulary);
                return customGrammar;
            }
        }
    ]);
    return CustomGrammar;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FLCBTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBUWVBFX1ZPQ0FCVUxBUllfTkFNRSwgU1lNQk9MX1ZPQ0FCVUxBUllfTkFNRSB9IGZyb20gXCIuL3ZvY2FidWxhcnlOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlVm9jYWJ1bGFyeSwgc3ltYm9sVm9jYWJ1bGFyeSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtQk5GID0gdGVybUJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLnR5cGVWb2NhYnVsYXJ5ID0gdHlwZVZvY2FidWxhcnk7XG4gICAgdGhpcy5zeW1ib2xWb2NhYnVsYXJ5ID0gc3ltYm9sVm9jYWJ1bGFyeTtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VGVybUJORigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtQk5GO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Qk5GKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudEJORjtcbiAgfVxuXG4gIGdldFR5cGVWb2NhYnVsYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVWb2NhYnVsYXJ5O1xuICB9XG5cbiAgZ2V0U3ltYm9sVm9jYWJ1bGFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xWb2NhYnVsYXJ5O1xuICB9XG5cbiAgZ2V0Qk5GKHJ1bGVOYW1lID0gbnVsbCkge1xuICAgIGxldCBibmY7XG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiBibmYgPSB0aGlzLnRlcm1CTkY7IGJyZWFrO1xuICAgICAgY2FzZSBTVEFURU1FTlRfUlVMRV9OQU1FOiBibmYgPSB0aGlzLnN0YXRlbWVudEJORjsgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVzID0gW1xuICAgICAgICAgICAgICAgIFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgICAgICAgIFNUQVRFTUVOVF9SVUxFX05BTUVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgY29tYmluZWRCTkYgPSBydWxlTmFtZXMucmVkdWNlKChjb21iaW5lZEJORiwgcnVsZU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORihydWxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYm5mICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQk5GID0gYCR7Y29tYmluZWRCTkZ9XG4gICAgICAgICAgICBcbiR7Ym5mfWA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkQk5GO1xuICAgICAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgICAgIGJuZiA9IGNvbWJpbmVkQk5GOyAgLy8vXG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIGdldFZvY2FidWxhcnkodm9jYWJ1bGFyeU5hbWUpIHtcbiAgICBsZXQgdm9jYWJ1bGFyeTtcblxuICAgIHN3aXRjaCAodm9jYWJ1bGFyeU5hbWUpIHtcbiAgICAgIGNhc2UgVFlQRV9WT0NBQlVMQVJZX05BTUU6IHZvY2FidWxhcnkgPSB0aGlzLnR5cGVWb2NhYnVsYXJ5OyBicmVhaztcbiAgICAgIGNhc2UgU1lNQk9MX1ZPQ0FCVUxBUllfTkFNRTogdm9jYWJ1bGFyeSA9IHRoaXMuc3ltYm9sVm9jYWJ1bGFyeTsgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZvY2FidWxhcnk7XG4gIH1cblxuICBnZXRWb2NhYnVsYXJpZXMoKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyaWVzID0gW1xuICAgICAgdGhpcy50eXBlVm9jYWJ1bGFyeSxcbiAgICAgIHRoaXMuc3ltYm9sVm9jYWJ1bGFyeVxuICAgIF07XG5cbiAgICByZXR1cm4gdm9jYWJ1bGFyaWVzO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEJORihydWxlTmFtZSwgYm5mKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBURVJNX1JVTEVfTkFNRTpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNldFZvY2FidWxhcnkodm9jYWJ1bGFyeU5hbWUsIHZvY2FidWxhcnkpIHtcbiAgICBzd2l0Y2ggKHZvY2FidWxhcnlOYW1lKSB7XG4gICAgICBjYXNlIFRZUEVfVk9DQUJVTEFSWV9OQU1FOlxuICAgICAgICB0aGlzLnR5cGVWb2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTWU1CT0xfVk9DQUJVTEFSWV9OQU1FOlxuICAgICAgICB0aGlzLnN5bWJvbFZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5O1xuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgYm5mID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICByZXNldFZvY2FidWxhcnkodm9jYWJ1bGFyeU5hbWUpIHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5ID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRWb2NhYnVsYXJ5KHZvY2FidWxhcnlOYW1lLCB2b2NhYnVsYXJ5KTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCB2b2NhYnVsYXJ5TmFtZSwgdm9jYWJ1bGFyeSkge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgdGhpcy5zZXRWb2NhYnVsYXJ5KHZvY2FidWxhcnlOYW1lLCB2b2NhYnVsYXJ5KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHRlcm1CTkYgPSB0aGlzLnRlcm1CTkYsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICAgICAgdHlwZVZvY2FidWxhcnkgPSB0aGlzLnR5cGVWb2NhYnVsYXJ5LFxuICAgICAgICAgIHN5bWJvbFZvY2FidWxhcnkgPSB0aGlzLnN5bWJvbFZvY2FidWxhcnksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0ZXJtQk5GLFxuICAgICAgICAgICAgc3RhdGVtZW50Qk5GLFxuICAgICAgICAgICAgdHlwZVZvY2FidWxhcnksXG4gICAgICAgICAgICBzeW1ib2xWb2NhYnVsYXJ5XG4gICAgICAgICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVWb2NhYnVsYXJ5LCBzeW1ib2xWb2NhYnVsYXJ5IH0gPSBqc29uLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVWb2NhYnVsYXJ5LCBzeW1ib2xWb2NhYnVsYXJ5KTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCB0ZXJtQk5GID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB0eXBlVm9jYWJ1bGFyeSA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzeW1ib2xWb2NhYnVsYXJ5ID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVWb2NhYnVsYXJ5LCBzeW1ib2xWb2NhYnVsYXJ5KTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lVGVybUJORlN0YXRlbWVudEJORlR5cGVWb2NhYnVsYXJ5QW5kU3ltYm9sVm9jYWJ1bGFyeShuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVWb2NhYnVsYXJ5LCBzeW1ib2xWb2NhYnVsYXJ5KSB7XG4gICAgY29uc3QgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIHRlcm1CTkYsIHN0YXRlbWVudEJORiwgdHlwZVZvY2FidWxhcnksIHN5bWJvbFZvY2FidWxhcnkpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDdXN0b21HcmFtbWFyIiwibmFtZSIsInRlcm1CTkYiLCJzdGF0ZW1lbnRCTkYiLCJ0eXBlVm9jYWJ1bGFyeSIsInN5bWJvbFZvY2FidWxhcnkiLCJnZXROYW1lIiwiZ2V0VGVybUJORiIsImdldFN0YXRlbWVudEJORiIsImdldFR5cGVWb2NhYnVsYXJ5IiwiZ2V0U3ltYm9sVm9jYWJ1bGFyeSIsImdldEJORiIsInJ1bGVOYW1lIiwiYm5mIiwiVEVSTV9SVUxFX05BTUUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwicnVsZU5hbWVzIiwiY29tYmluZWRCTkYiLCJyZWR1Y2UiLCJFTVBUWV9TVFJJTkciLCJnZXRWb2NhYnVsYXJ5Iiwidm9jYWJ1bGFyeU5hbWUiLCJ2b2NhYnVsYXJ5IiwiVFlQRV9WT0NBQlVMQVJZX05BTUUiLCJTWU1CT0xfVk9DQUJVTEFSWV9OQU1FIiwiZ2V0Vm9jYWJ1bGFyaWVzIiwidm9jYWJ1bGFyaWVzIiwic2V0TmFtZSIsInNldEJORiIsInNldFZvY2FidWxhcnkiLCJyZXNldEJORiIsInJlc2V0Vm9jYWJ1bGFyeSIsInVwZGF0ZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImN1c3RvbUdyYW1tYXIiLCJmcm9tTmFtZSIsImZyb21OYW1lVGVybUJORlN0YXRlbWVudEJORlR5cGVWb2NhYnVsYXJ5QW5kU3ltYm9sVm9jYWJ1bGFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7eUJBSlE7eUJBQ3VCOytCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFBLEFBQU1BLDhCQUFOO2FBQU1BLGNBQ1BDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsRUFBRUMsZ0JBQWdCO2dDQUR0REw7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtRQUN0QixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTs7a0JBTlBMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxPQUFPO1lBQ3JCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxZQUFZO1lBQzFCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxjQUFjO1lBQzVCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxnQkFBZ0I7WUFDOUI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7O29CQUFPQyxXQUFBQSxpRUFBVztnQkFDaEIsSUFBSUM7Z0JBRUosT0FBUUQ7b0JBQ04sS0FBS0UseUJBQWM7d0JBQUVELE1BQU0sSUFBSSxDQUFDWCxPQUFPO3dCQUFFO29CQUN6QyxLQUFLYSw4QkFBbUI7d0JBQUVGLE1BQU0sSUFBSSxDQUFDVixZQUFZO3dCQUFFO29CQUVuRDt3QkFBUzs0QkFDUCxJQUFNYSxZQUFZO2dDQUNWRix5QkFBYztnQ0FDZEMsOEJBQW1COzZCQUNwQixFQUNERSxjQUFjRCxVQUFVRSxNQUFNLENBQUMsU0FBQ0QsYUFBYUw7Z0NBQzNDLElBQU1DLE1BQU0sTUFBS0YsTUFBTSxDQUFDQztnQ0FFeEIsSUFBSUMsUUFBUU0sdUJBQVksRUFBRTtvQ0FDeEJGLGNBQWMsQUFBQyxHQUUvQkosT0FGaUNJLGFBQVksb0JBRXpDLE9BQUpKO2dDQUNjO2dDQUVBLE9BQU9JOzRCQUNULEdBQUdFLHVCQUFZOzRCQUVyQk4sTUFBTUksYUFBYyxHQUFHOzRCQUV2Qjt3QkFDRjtnQkFDRjtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLGNBQWM7Z0JBQzFCLElBQUlDO2dCQUVKLE9BQVFEO29CQUNOLEtBQUtFLHFDQUFvQjt3QkFBRUQsYUFBYSxJQUFJLENBQUNsQixjQUFjO3dCQUFFO29CQUM3RCxLQUFLb0IsdUNBQXNCO3dCQUFFRixhQUFhLElBQUksQ0FBQ2pCLGdCQUFnQjt3QkFBRTtnQkFDbkU7Z0JBRUEsT0FBT2lCO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZTtvQkFDbkIsSUFBSSxDQUFDdEIsY0FBYztvQkFDbkIsSUFBSSxDQUFDQyxnQkFBZ0I7aUJBQ3RCO2dCQUVELE9BQU9xQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVExQixJQUFJO2dCQUNWLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtZQUNkOzs7WUFFQTJCLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPaEIsUUFBUSxFQUFFQyxHQUFHO2dCQUNsQixPQUFRRDtvQkFDTixLQUFLRSx5QkFBYzt3QkFDakIsSUFBSSxDQUFDWixPQUFPLEdBQUdXO3dCQUVmO29CQUVGLEtBQUtFLDhCQUFtQjt3QkFDdEIsSUFBSSxDQUFDWixZQUFZLEdBQUdVO3dCQUVwQjtnQkFDSjtZQUNGOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjUixjQUFjLEVBQUVDLFVBQVU7Z0JBQ3RDLE9BQVFEO29CQUNOLEtBQUtFLHFDQUFvQjt3QkFDdkIsSUFBSSxDQUFDbkIsY0FBYyxHQUFHa0I7d0JBRXRCO29CQUVGLEtBQUtFLHVDQUFzQjt3QkFDekIsSUFBSSxDQUFDbkIsZ0JBQWdCLEdBQUdpQjt3QkFFeEI7Z0JBQ0o7WUFDRjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTbEIsUUFBUTtnQkFDZixJQUFNQyxNQUFNTSx1QkFBWTtnQkFFeEIsSUFBSSxDQUFDUyxNQUFNLENBQUNoQixVQUFVQztZQUN4Qjs7O1lBRUFrQixLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCVixjQUFjO2dCQUM1QixJQUFNQyxhQUFhSCx1QkFBWTtnQkFFL0IsSUFBSSxDQUFDVSxhQUFhLENBQUNSLGdCQUFnQkM7WUFDckM7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT3BCLFFBQVEsRUFBRUMsR0FBRyxFQUFFUSxjQUFjLEVBQUVDLFVBQVU7Z0JBQzlDLElBQUksQ0FBQ00sTUFBTSxDQUFDaEIsVUFBVUM7Z0JBRXRCLElBQUksQ0FBQ2dCLGFBQWEsQ0FBQ1IsZ0JBQWdCQztZQUNyQzs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEMsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLFVBQVUsSUFBSSxDQUFDQSxPQUFPLEVBQ3RCQyxlQUFlLElBQUksQ0FBQ0EsWUFBWSxFQUNoQ0MsaUJBQWlCLElBQUksQ0FBQ0EsY0FBYyxFQUNwQ0MsbUJBQW1CLElBQUksQ0FBQ0EsZ0JBQWdCLEVBQ3hDNkIsT0FBTztvQkFDTGpDLE1BQUFBO29CQUNBQyxTQUFBQTtvQkFDQUMsY0FBQUE7b0JBQ0FDLGdCQUFBQTtvQkFDQUMsa0JBQUFBO2dCQUNGO2dCQUVOLE9BQU82QjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUk7Z0JBQ2xCLElBQVFqQyxPQUFrRWlDLEtBQWxFakMsTUFBTUMsVUFBNERnQyxLQUE1RGhDLFNBQVNDLGVBQW1EK0IsS0FBbkQvQixjQUFjQyxpQkFBcUM4QixLQUFyQzlCLGdCQUFnQkMsbUJBQXFCNkIsS0FBckI3QixrQkFDL0MrQixnQkFBZ0IsSUF2SkxwQyxjQXVKdUJDLE1BQU1DLFNBQVNDLGNBQWNDLGdCQUFnQkM7Z0JBRXJGLE9BQU8rQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU3BDLElBQUk7Z0JBQ2xCLElBQU1DLFVBQVVpQix1QkFBWSxFQUN0QmhCLGVBQWVnQix1QkFBWSxFQUMzQmYsaUJBQWlCZSx1QkFBWSxFQUM3QmQsbUJBQW1CYyx1QkFBWSxFQUMvQmlCLGdCQUFnQixJQWpLTHBDLGNBaUt1QkMsTUFBTUMsU0FBU0MsY0FBY0MsZ0JBQWdCQztnQkFFckYsT0FBTytCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSw2REFBNkRyQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxjQUFjLEVBQUVDLGdCQUFnQjtnQkFDL0gsSUFBTStCLGdCQUFnQixJQXZLTHBDLGNBdUt1QkMsTUFBTUMsU0FBU0MsY0FBY0MsZ0JBQWdCQztnQkFFckYsT0FBTytCO1lBQ1Q7OztXQTFLbUJwQyJ9