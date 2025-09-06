"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CombinedCustomGrammar;
    }
});
var _necessary = require("necessary");
var _occamparsers = require("occam-parsers");
var _occamgrammarutilities = require("occam-grammar-utilities");
var _default = /*#__PURE__*/ _interop_require_default(require("../customGrammar/default"));
var _constants = require("../constants");
var _vocabularyNames = require("../vocabularyNames");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, unshift = _necessary.arrayUtilities.unshift, backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var CombinedCustomGrammar = /*#__PURE__*/ function() {
    function CombinedCustomGrammar(rules, entries) {
        _class_call_check(this, CombinedCustomGrammar);
        this.rules = rules;
        this.entries = entries;
    }
    _create_class(CombinedCustomGrammar, [
        {
            key: "getRules",
            value: function getRules() {
                return this.rules;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return this.entries;
            }
        },
        {
            key: "postProcess",
            value: function postProcess(rules) {
                rules = _to_consumable_array(rules).concat(_to_consumable_array(this.rules));
                rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
                return rules;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var includeDefault = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var customGrammars = [];
                if (includeDefault) {
                    customGrammars = [
                        _default.default
                    ].concat(_to_consumable_array(customGrammars)); ///
                }
                var rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
                return combinedCustomGrammar;
            }
        },
        {
            key: "fromCustomGrammars",
            value: function fromCustomGrammars(customGrammars) {
                var includeDefault = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                if (includeDefault) {
                    customGrammars = [
                        _default.default
                    ].concat(_to_consumable_array(customGrammars)); ///
                }
                var rules = rulesFromCustomGrammarsAndDefaultBNF(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
                return combinedCustomGrammar;
            }
        }
    ]);
    return CombinedCustomGrammar;
}();
function rulesFromCustomGrammarsAndDefaultBNF(customGrammars) {
    var bnfs = customGrammars.map(function(customGrammar) {
        var bnf = customGrammar.getBNF();
        return bnf;
    }), bnf = bnfs.join(_constants.EMPTY_STRING), rules = rulesFromBNF(bnf);
    combineRules(rules);
    return rules;
}
function entriesFromCustomGrammars(customGrammars) {
    var vocabularyNames = [
        _vocabularyNames.TYPE_VOCABULARY_NAME,
        _vocabularyNames.SYMBOL_VOCABULARY_NAME
    ], entries = vocabularyNames.map(function(vocabularyName) {
        var entry = entryFromCustomGrammars(customGrammars, vocabularyName);
        return entry;
    });
    return entries;
}
function entryFromCustomGrammars(customGrammars, vocabularyName) {
    var vocabularies = [];
    backwardsForEach(customGrammars, function(customGrammar) {
        var vocabulary = customGrammar.getVocabulary(vocabularyName);
        if (vocabulary !== null && vocabulary !== _constants.EMPTY_STRING) {
            debugger;
            var subVocabularies = vocabulary.split(_constants.VERTICAL_BAR);
            subVocabularies.forEach(function(subVocabulary) {
                var vocabulary = vocabularyName === _vocabularyNames.TYPE_VOCABULARY_NAME ? "".concat(subVocabulary, "(?!\\w)") : subVocabulary; ///
                vocabularies.push(vocabulary);
            });
        }
    });
    var vocabulariesString = vocabularies.join(_constants.VERTICAL_BAR), entryName = vocabularyName, entryValue = "^(?:".concat(vocabulariesString, ")"), entry = _define_property({}, entryName, entryValue);
    return entry;
}
function combineRules(rules) {
    var outerIndex = 0, length = rules.length;
    while(outerIndex < length){
        var outerRule = rules[outerIndex], outerRuleName = outerRule.getName();
        var innerIndex = outerIndex + 1;
        while(innerIndex < length){
            var innerRule = rules[innerIndex], innerRuleName = innerRule.getName();
            if (innerRuleName === outerRuleName) {
                var innerRuleDefinitions = innerRule.getDefinitions(), outerRuleDefinitions = outerRule.getDefinitions();
                unshift(outerRuleDefinitions, innerRuleDefinitions);
                var start = innerIndex, deleteCount = 1;
                rules.splice(start, deleteCount);
                length = rules.length;
            } else {
                innerIndex++;
            }
        }
        outerIndex++;
        length = rules.length;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgVkVSVElDQUxfQkFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9WT0NBQlVMQVJZX05BTUUsIFNZTUJPTF9WT0NBQlVMQVJZX05BTUUgfSBmcm9tIFwiLi4vdm9jYWJ1bGFyeU5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXMsXG4gICAgICB7IHVuc2hpZnQsIGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihydWxlcywgZW50cmllcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHBvc3RQcm9jZXNzKHJ1bGVzKSB7XG4gICAgcnVsZXMgPSBbIC8vL1xuICAgICAgLi4ucnVsZXMsXG4gICAgICAuLi50aGlzLnJ1bGVzXG4gICAgXTtcblxuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhpbmNsdWRlRGVmYXVsdCA9IHRydWUpIHtcbiAgICBsZXQgY3VzdG9tR3JhbW1hcnMgPSBbXTtcblxuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzQW5kRGVmYXVsdEJORihjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuICAgIFxuICAgIHJldHVybiBjb21iaW5lZEN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IGJuZnMgPSBjdXN0b21HcmFtbWFycy5tYXAoKGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICAgICAgICBjb25zdCBibmYgPSBjdXN0b21HcmFtbWFyLmdldEJORigpO1xuXG4gICAgICAgICAgcmV0dXJuIGJuZjtcbiAgICAgICAgfSksXG4gICAgICAgIGJuZiA9IGJuZnMuam9pbihFTVBUWV9TVFJJTkcpLFxuICAgICAgICBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gIGNvbWJpbmVSdWxlcyhydWxlcylcblxuICByZXR1cm4gcnVsZXM7XG59XG5cbmZ1bmN0aW9uIGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3Qgdm9jYWJ1bGFyeU5hbWVzID0gW1xuICAgICAgICAgIFRZUEVfVk9DQUJVTEFSWV9OQU1FLFxuICAgICAgICAgIFNZTUJPTF9WT0NBQlVMQVJZX05BTUVcbiAgICAgICAgXSxcbiAgICAgICAgZW50cmllcyA9IHZvY2FidWxhcnlOYW1lcy5tYXAoKHZvY2FidWxhcnlOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50cnkgPSBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgdm9jYWJ1bGFyeU5hbWUpO1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZW50cmllcztcbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHZvY2FidWxhcnlOYW1lKSB7XG4gIGNvbnN0IHZvY2FidWxhcmllcyA9IFtdO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goY3VzdG9tR3JhbW1hcnMsIChjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeSA9IGN1c3RvbUdyYW1tYXIuZ2V0Vm9jYWJ1bGFyeSh2b2NhYnVsYXJ5TmFtZSk7XG5cbiAgICBpZiAoKHZvY2FidWxhcnkgIT09IG51bGwpICYmICh2b2NhYnVsYXJ5ICE9PSBFTVBUWV9TVFJJTkcpKSB7XG4gICAgICBkZWJ1Z2dlclxuXG4gICAgICBjb25zdCBzdWJWb2NhYnVsYXJpZXMgPSB2b2NhYnVsYXJ5LnNwbGl0KFZFUlRJQ0FMX0JBUik7XG5cbiAgICAgIHN1YlZvY2FidWxhcmllcy5mb3JFYWNoKChzdWJWb2NhYnVsYXJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZvY2FidWxhcnkgPSAodm9jYWJ1bGFyeU5hbWUgPT09IFRZUEVfVk9DQUJVTEFSWV9OQU1FKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1YlZvY2FidWxhcnl9KD8hXFxcXHcpYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlZvY2FidWxhcnk7IC8vL1xuXG4gICAgICAgIHZvY2FidWxhcmllcy5wdXNoKHZvY2FidWxhcnkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCB2b2NhYnVsYXJpZXNTdHJpbmcgPSB2b2NhYnVsYXJpZXMuam9pbihWRVJUSUNBTF9CQVIpLFxuICAgICAgICBlbnRyeU5hbWUgPSB2b2NhYnVsYXJ5TmFtZSwgIC8vL1xuICAgICAgICBlbnRyeVZhbHVlID0gYF4oPzoke3ZvY2FidWxhcmllc1N0cmluZ30pYCxcbiAgICAgICAgZW50cnkgPSB7XG4gICAgICAgICAgW2VudHJ5TmFtZV06IGVudHJ5VmFsdWVcbiAgICAgICAgfTtcblxuICByZXR1cm4gZW50cnk7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVSdWxlcyhydWxlcykge1xuICBsZXQgb3V0ZXJJbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKG91dGVySW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb25zdCBvdXRlclJ1bGUgPSBydWxlc1tvdXRlckluZGV4XSxcbiAgICAgICAgICBvdXRlclJ1bGVOYW1lID0gb3V0ZXJSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBpbm5lckluZGV4ID0gb3V0ZXJJbmRleCArIDE7XG5cbiAgICB3aGlsZSAoaW5uZXJJbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29uc3QgaW5uZXJSdWxlID0gcnVsZXNbaW5uZXJJbmRleF0sXG4gICAgICAgICAgICBpbm5lclJ1bGVOYW1lID0gaW5uZXJSdWxlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGlubmVyUnVsZU5hbWUgPT09IG91dGVyUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5uZXJSdWxlRGVmaW5pdGlvbnMgPSBpbm5lclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBvdXRlclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgICAgICB1bnNoaWZ0KG91dGVyUnVsZURlZmluaXRpb25zLCBpbm5lclJ1bGVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbm5lckluZGV4LCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHJ1bGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRlckluZGV4Kys7XG5cbiAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJ1bnNoaWZ0IiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNGb3JFYWNoIiwicnVsZXMiLCJlbnRyaWVzIiwiZ2V0UnVsZXMiLCJnZXRFbnRyaWVzIiwicG9zdFByb2Nlc3MiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwiZnJvbU5vdGhpbmciLCJpbmNsdWRlRGVmYXVsdCIsImN1c3RvbUdyYW1tYXJzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiYm5mcyIsIm1hcCIsImN1c3RvbUdyYW1tYXIiLCJibmYiLCJnZXRCTkYiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwiY29tYmluZVJ1bGVzIiwidm9jYWJ1bGFyeU5hbWVzIiwiVFlQRV9WT0NBQlVMQVJZX05BTUUiLCJTWU1CT0xfVk9DQUJVTEFSWV9OQU1FIiwidm9jYWJ1bGFyeU5hbWUiLCJlbnRyeSIsImVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzIiwidm9jYWJ1bGFyaWVzIiwidm9jYWJ1bGFyeSIsImdldFZvY2FidWxhcnkiLCJzdWJWb2NhYnVsYXJpZXMiLCJzcGxpdCIsIlZFUlRJQ0FMX0JBUiIsImZvckVhY2giLCJzdWJWb2NhYnVsYXJ5IiwicHVzaCIsInZvY2FidWxhcmllc1N0cmluZyIsImVudHJ5TmFtZSIsImVudHJ5VmFsdWUiLCJvdXRlckluZGV4IiwibGVuZ3RoIiwib3V0ZXJSdWxlIiwib3V0ZXJSdWxlTmFtZSIsImdldE5hbWUiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJvdXRlclJ1bGVEZWZpbml0aW9ucyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O3lCQVpVOzRCQUNDO3FDQUNPOzhEQUVOO3lCQUVV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