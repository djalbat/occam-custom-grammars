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
var _grammarNames = require("./grammarNames");
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
            key: "isDefaultCustomGrammar",
            value: function isDefaultCustomGrammar() {
                var defaultCustomGrammar = this.name === _grammarNames.DEFAULT_CUSTOM_GRAMMAR_NAME;
                return defaultCustomGrammar;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b21HcmFtbWFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuL2dyYW1tYXJOYW1lc1wiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IFRZUEVfVk9DQUJVTEFSWV9OQU1FLCBTWU1CT0xfVk9DQUJVTEFSWV9OQU1FIH0gZnJvbSBcIi4vdm9jYWJ1bGFyeU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVWb2NhYnVsYXJ5LCBzeW1ib2xWb2NhYnVsYXJ5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GO1xuICAgIHRoaXMudHlwZVZvY2FidWxhcnkgPSB0eXBlVm9jYWJ1bGFyeTtcbiAgICB0aGlzLnN5bWJvbFZvY2FidWxhcnkgPSBzeW1ib2xWb2NhYnVsYXJ5O1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUZXJtQk5GKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1CTkY7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRCTkYoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Qk5GO1xuICB9XG5cbiAgZ2V0VHlwZVZvY2FidWxhcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZVZvY2FidWxhcnk7XG4gIH1cblxuICBnZXRTeW1ib2xWb2NhYnVsYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbFZvY2FidWxhcnk7XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUgPSBudWxsKSB7XG4gICAgbGV0IGJuZjtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IGJuZiA9IHRoaXMudGVybUJORjsgYnJlYWs7XG4gICAgICBjYXNlIFNUQVRFTUVOVF9SVUxFX05BTUU6IGJuZiA9IHRoaXMuc3RhdGVtZW50Qk5GOyBicmVhaztcblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCBydWxlTmFtZXMgPSBbXG4gICAgICAgICAgICAgICAgVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgICAgICAgU1RBVEVNRU5UX1JVTEVfTkFNRVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBjb21iaW5lZEJORiA9IHJ1bGVOYW1lcy5yZWR1Y2UoKGNvbWJpbmVkQk5GLCBydWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmIChibmYgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgICAgICAgICAgY29tYmluZWRCTkYgPSBgJHtjb21iaW5lZEJORn1cbiAgICAgICAgICAgIFxuJHtibmZ9YDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluZWRCTkY7XG4gICAgICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICAgICAgYm5mID0gY29tYmluZWRCTkY7ICAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgZ2V0Vm9jYWJ1bGFyeSh2b2NhYnVsYXJ5TmFtZSkge1xuICAgIGxldCB2b2NhYnVsYXJ5O1xuXG4gICAgc3dpdGNoICh2b2NhYnVsYXJ5TmFtZSkge1xuICAgICAgY2FzZSBUWVBFX1ZPQ0FCVUxBUllfTkFNRTogdm9jYWJ1bGFyeSA9IHRoaXMudHlwZVZvY2FidWxhcnk7IGJyZWFrO1xuICAgICAgY2FzZSBTWU1CT0xfVk9DQUJVTEFSWV9OQU1FOiB2b2NhYnVsYXJ5ID0gdGhpcy5zeW1ib2xWb2NhYnVsYXJ5OyBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gdm9jYWJ1bGFyeTtcbiAgfVxuXG4gIGdldFZvY2FidWxhcmllcygpIHtcbiAgICBjb25zdCB2b2NhYnVsYXJpZXMgPSBbXG4gICAgICB0aGlzLnR5cGVWb2NhYnVsYXJ5LFxuICAgICAgdGhpcy5zeW1ib2xWb2NhYnVsYXJ5XG4gICAgXTtcblxuICAgIHJldHVybiB2b2NhYnVsYXJpZXM7XG4gIH1cblxuICBpc0RlZmF1bHRDdXN0b21HcmFtbWFyKCkge1xuICAgIGNvbnN0IGRlZmF1bHRDdXN0b21HcmFtbWFyID0gKHRoaXMubmFtZSA9PT0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FKTtcblxuICAgIHJldHVybiBkZWZhdWx0Q3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6XG4gICAgICAgIHRoaXMudGVybUJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTVEFURU1FTlRfUlVMRV9OQU1FOlxuICAgICAgICB0aGlzLnN0YXRlbWVudEJORiA9IGJuZjtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzZXRWb2NhYnVsYXJ5KHZvY2FidWxhcnlOYW1lLCB2b2NhYnVsYXJ5KSB7XG4gICAgc3dpdGNoICh2b2NhYnVsYXJ5TmFtZSkge1xuICAgICAgY2FzZSBUWVBFX1ZPQ0FCVUxBUllfTkFNRTpcbiAgICAgICAgdGhpcy50eXBlVm9jYWJ1bGFyeSA9IHZvY2FidWxhcnk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU1lNQk9MX1ZPQ0FCVUxBUllfTkFNRTpcbiAgICAgICAgdGhpcy5zeW1ib2xWb2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXNldEJORihydWxlTmFtZSkge1xuICAgIGNvbnN0IGJuZiA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICB9XG5cbiAgcmVzZXRWb2NhYnVsYXJ5KHZvY2FidWxhcnlOYW1lKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeSA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuc2V0Vm9jYWJ1bGFyeSh2b2NhYnVsYXJ5TmFtZSwgdm9jYWJ1bGFyeSk7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgdm9jYWJ1bGFyeU5hbWUsIHZvY2FidWxhcnkpIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcblxuICAgIHRoaXMuc2V0Vm9jYWJ1bGFyeSh2b2NhYnVsYXJ5TmFtZSwgdm9jYWJ1bGFyeSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICB0ZXJtQk5GID0gdGhpcy50ZXJtQk5GLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IHRoaXMuc3RhdGVtZW50Qk5GLFxuICAgICAgICAgIHR5cGVWb2NhYnVsYXJ5ID0gdGhpcy50eXBlVm9jYWJ1bGFyeSxcbiAgICAgICAgICBzeW1ib2xWb2NhYnVsYXJ5ID0gdGhpcy5zeW1ib2xWb2NhYnVsYXJ5LFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdGVybUJORixcbiAgICAgICAgICAgIHN0YXRlbWVudEJORixcbiAgICAgICAgICAgIHR5cGVWb2NhYnVsYXJ5LFxuICAgICAgICAgICAgc3ltYm9sVm9jYWJ1bGFyeVxuICAgICAgICAgIH07XG4gICAgXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgbmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlVm9jYWJ1bGFyeSwgc3ltYm9sVm9jYWJ1bGFyeSB9ID0ganNvbixcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlVm9jYWJ1bGFyeSwgc3ltYm9sVm9jYWJ1bGFyeSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgdGVybUJORiA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgdHlwZVZvY2FidWxhcnkgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgc3ltYm9sVm9jYWJ1bGFyeSA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlVm9jYWJ1bGFyeSwgc3ltYm9sVm9jYWJ1bGFyeSk7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZVRlcm1CTkZTdGF0ZW1lbnRCTkZUeXBlVm9jYWJ1bGFyeUFuZFN5bWJvbFZvY2FidWxhcnkobmFtZSwgdGVybUJORiwgc3RhdGVtZW50Qk5GLCB0eXBlVm9jYWJ1bGFyeSwgc3ltYm9sVm9jYWJ1bGFyeSkge1xuICAgIGNvbnN0IGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCB0ZXJtQk5GLCBzdGF0ZW1lbnRCTkYsIHR5cGVWb2NhYnVsYXJ5LCBzeW1ib2xWb2NhYnVsYXJ5KTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJ0ZXJtQk5GIiwic3RhdGVtZW50Qk5GIiwidHlwZVZvY2FidWxhcnkiLCJzeW1ib2xWb2NhYnVsYXJ5IiwiZ2V0TmFtZSIsImdldFRlcm1CTkYiLCJnZXRTdGF0ZW1lbnRCTkYiLCJnZXRUeXBlVm9jYWJ1bGFyeSIsImdldFN5bWJvbFZvY2FidWxhcnkiLCJnZXRCTkYiLCJydWxlTmFtZSIsImJuZiIsIlRFUk1fUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInJ1bGVOYW1lcyIsImNvbWJpbmVkQk5GIiwicmVkdWNlIiwiRU1QVFlfU1RSSU5HIiwiZ2V0Vm9jYWJ1bGFyeSIsInZvY2FidWxhcnlOYW1lIiwidm9jYWJ1bGFyeSIsIlRZUEVfVk9DQUJVTEFSWV9OQU1FIiwiU1lNQk9MX1ZPQ0FCVUxBUllfTkFNRSIsImdldFZvY2FidWxhcmllcyIsInZvY2FidWxhcmllcyIsImlzRGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsInNldE5hbWUiLCJzZXRCTkYiLCJzZXRWb2NhYnVsYXJ5IiwicmVzZXRCTkYiLCJyZXNldFZvY2FidWxhcnkiLCJ1cGRhdGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiLCJmcm9tTmFtZVRlcm1CTkZTdGF0ZW1lbnRCTkZUeXBlVm9jYWJ1bGFyeUFuZFN5bWJvbFZvY2FidWxhcnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3lCQUxROzRCQUNlO3lCQUNROytCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFBLEFBQU1BLDhCQUFOO2FBQU1BLGNBQ1BDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLGNBQWMsRUFBRUMsZ0JBQWdCO2dDQUR0REw7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