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
var _vocabulary = require("../utilities/vocabulary");
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
    var expressions = [];
    backwardsForEach(customGrammars, function(customGrammar) {
        var vocabulary = customGrammar.getVocabulary(vocabularyName), customGrammarDefaultCustomGrammar = customGrammar.isDefaultCustomGrammar();
        if (!customGrammarDefaultCustomGrammar) {
            (0, _vocabulary.validateVocabulary)(vocabulary);
        }
        (0, _vocabulary.expressionsFromVocabulary)(vocabulary, expressions);
    });
    var pattern = expressions.join(_constants.VERTICAL_BAR), entryName = vocabularyName, entryValue = "^(?:".concat(pattern, ")"), entry = _define_property({}, entryName, entryValue);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgVkVSVElDQUxfQkFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVWb2NhYnVsYXJ5LCBleHByZXNzaW9uc0Zyb21Wb2NhYnVsYXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy92b2NhYnVsYXJ5XCI7XG5pbXBvcnQgeyBUWVBFX1ZPQ0FCVUxBUllfTkFNRSwgU1lNQk9MX1ZPQ0FCVUxBUllfTkFNRSB9IGZyb20gXCIuLi92b2NhYnVsYXJ5TmFtZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgdW5zaGlmdCwgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVzLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cbiAgXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgcG9zdFByb2Nlc3MocnVsZXMpIHtcbiAgICBydWxlcyA9IFsgLy8vXG4gICAgICAuLi5ydWxlcyxcbiAgICAgIC4uLnRoaXMucnVsZXNcbiAgICBdO1xuXG4gICAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGxldCBjdXN0b21HcmFtbWFycyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVEZWZhdWx0KSB7XG4gICAgICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbmV3IENvbWJpbmVkQ3VzdG9tR3JhbW1hcihydWxlcywgZW50cmllcyk7XG5cbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgaW5jbHVkZURlZmF1bHQgPSB0cnVlKSB7XG4gICAgaWYgKGluY2x1ZGVEZWZhdWx0KSB7XG4gICAgICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbmV3IENvbWJpbmVkQ3VzdG9tR3JhbW1hcihydWxlcywgZW50cmllcyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgYm5mcyA9IGN1c3RvbUdyYW1tYXJzLm1hcCgoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKCk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCB2b2NhYnVsYXJ5TmFtZXMgPSBbXG4gICAgICAgICAgVFlQRV9WT0NBQlVMQVJZX05BTUUsXG4gICAgICAgICAgU1lNQk9MX1ZPQ0FCVUxBUllfTkFNRVxuICAgICAgICBdLFxuICAgICAgICBlbnRyaWVzID0gdm9jYWJ1bGFyeU5hbWVzLm1hcCgodm9jYWJ1bGFyeU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCB2b2NhYnVsYXJ5TmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgdm9jYWJ1bGFyeU5hbWUpIHtcbiAgY29uc3QgZXhwcmVzc2lvbnMgPSBbXTtcblxuICBiYWNrd2FyZHNGb3JFYWNoKGN1c3RvbUdyYW1tYXJzLCAoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IHZvY2FidWxhcnkgPSBjdXN0b21HcmFtbWFyLmdldFZvY2FidWxhcnkodm9jYWJ1bGFyeU5hbWUpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJEZWZhdWx0Q3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXIuaXNEZWZhdWx0Q3VzdG9tR3JhbW1hcigpO1xuXG4gICAgaWYgKCFjdXN0b21HcmFtbWFyRGVmYXVsdEN1c3RvbUdyYW1tYXIpIHtcbiAgICAgIHZhbGlkYXRlVm9jYWJ1bGFyeSh2b2NhYnVsYXJ5KTtcbiAgICB9XG5cbiAgICBleHByZXNzaW9uc0Zyb21Wb2NhYnVsYXJ5KHZvY2FidWxhcnksIGV4cHJlc3Npb25zKTtcbiAgfSk7XG5cbiAgY29uc3QgcGF0dGVybiA9IGV4cHJlc3Npb25zLmpvaW4oVkVSVElDQUxfQkFSKSxcbiAgICAgICAgZW50cnlOYW1lID0gdm9jYWJ1bGFyeU5hbWUsICAvLy9cbiAgICAgICAgZW50cnlWYWx1ZSA9IGBeKD86JHtwYXR0ZXJufSlgLFxuICAgICAgICBlbnRyeSA9IHtcbiAgICAgICAgICBbZW50cnlOYW1lXTogZW50cnlWYWx1ZVxuICAgICAgICB9O1xuXG4gIHJldHVybiBlbnRyeTtcbn1cblxuZnVuY3Rpb24gY29tYmluZVJ1bGVzKHJ1bGVzKSB7XG4gIGxldCBvdXRlckluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcblxuICB3aGlsZSAob3V0ZXJJbmRleCA8IGxlbmd0aCkge1xuICAgIGNvbnN0IG91dGVyUnVsZSA9IHJ1bGVzW291dGVySW5kZXhdLFxuICAgICAgICAgIG91dGVyUnVsZU5hbWUgPSBvdXRlclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IGlubmVySW5kZXggPSBvdXRlckluZGV4ICsgMTtcblxuICAgIHdoaWxlIChpbm5lckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbm5lclJ1bGUgPSBydWxlc1tpbm5lckluZGV4XSxcbiAgICAgICAgICAgIGlubmVyUnVsZU5hbWUgPSBpbm5lclJ1bGUuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAoaW5uZXJSdWxlTmFtZSA9PT0gb3V0ZXJSdWxlTmFtZSkge1xuICAgICAgICBjb25zdCBpbm5lclJ1bGVEZWZpbml0aW9ucyA9IGlubmVyUnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgICAgICBvdXRlclJ1bGVEZWZpbml0aW9ucyA9IG91dGVyUnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gICAgICAgIHVuc2hpZnQob3V0ZXJSdWxlRGVmaW5pdGlvbnMsIGlubmVyUnVsZURlZmluaXRpb25zKTtcblxuICAgICAgICBjb25zdCBzdGFydCA9IGlubmVySW5kZXgsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgcnVsZXMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5uZXJJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG91dGVySW5kZXgrKztcblxuICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgfVxufVxuXG5cbiJdLCJuYW1lcyI6WyJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJ1bnNoaWZ0IiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNGb3JFYWNoIiwicnVsZXMiLCJlbnRyaWVzIiwiZ2V0UnVsZXMiLCJnZXRFbnRyaWVzIiwicG9zdFByb2Nlc3MiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwiZnJvbU5vdGhpbmciLCJpbmNsdWRlRGVmYXVsdCIsImN1c3RvbUdyYW1tYXJzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYiLCJlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiYm5mcyIsIm1hcCIsImN1c3RvbUdyYW1tYXIiLCJibmYiLCJnZXRCTkYiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwiY29tYmluZVJ1bGVzIiwidm9jYWJ1bGFyeU5hbWVzIiwiVFlQRV9WT0NBQlVMQVJZX05BTUUiLCJTWU1CT0xfVk9DQUJVTEFSWV9OQU1FIiwidm9jYWJ1bGFyeU5hbWUiLCJlbnRyeSIsImVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzIiwiZXhwcmVzc2lvbnMiLCJ2b2NhYnVsYXJ5IiwiZ2V0Vm9jYWJ1bGFyeSIsImN1c3RvbUdyYW1tYXJEZWZhdWx0Q3VzdG9tR3JhbW1hciIsImlzRGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJ2YWxpZGF0ZVZvY2FidWxhcnkiLCJleHByZXNzaW9uc0Zyb21Wb2NhYnVsYXJ5IiwicGF0dGVybiIsIlZFUlRJQ0FMX0JBUiIsImVudHJ5TmFtZSIsImVudHJ5VmFsdWUiLCJvdXRlckluZGV4IiwibGVuZ3RoIiwib3V0ZXJSdWxlIiwib3V0ZXJSdWxlTmFtZSIsImdldE5hbWUiLCJpbm5lckluZGV4IiwiaW5uZXJSdWxlIiwiaW5uZXJSdWxlTmFtZSIsImlubmVyUnVsZURlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJvdXRlclJ1bGVEZWZpbml0aW9ucyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O3lCQWJVOzRCQUNDO3FDQUNPOzhEQUVOO3lCQUVVOzBCQUNtQjsrQkFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdELElBQU0sQUFB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