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
var _bnf = require("../utilities/bnf");
var _constants = require("../constants");
var _ruleNames = require("../ruleNames");
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
                var rules = rulesFromCustomGrammars(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
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
                var rules = rulesFromCustomGrammars(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
                return combinedCustomGrammar;
            }
        }
    ]);
    return CombinedCustomGrammar;
}();
function rulesFromCustomGrammars(customGrammars) {
    var ruleNames = [
        _ruleNames.TERM_RULE_NAME,
        _ruleNames.STATEMENT_RULE_NAME
    ], bnfs = ruleNames.map(function(ruleName) {
        var bnf = bnfFromCustomGrammars(customGrammars, ruleName);
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
function bnfFromCustomGrammars(customGrammars, ruleName) {
    var bnfs = [];
    backwardsForEach(customGrammars, function(customGrammar) {
        var bnf = customGrammar.getBNF(ruleName), customGrammarDefaultCustomGrammar = customGrammar.isDefaultCustomGrammar();
        if (!customGrammarDefaultCustomGrammar) {
            (0, _bnf.validateBNF)(bnf, ruleName);
        }
        bnfs.push(bnf);
    });
    var bnf = bnfs.join(_constants.EMPTY_STRING);
    return bnf;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5cbmltcG9ydCB7IHZhbGlkYXRlQk5GIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ibmZcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORywgVkVSVElDQUxfQkFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIFNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZVZvY2FidWxhcnksIGV4cHJlc3Npb25zRnJvbVZvY2FidWxhcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZvY2FidWxhcnlcIjtcbmltcG9ydCB7IFRZUEVfVk9DQUJVTEFSWV9OQU1FLCBTWU1CT0xfVk9DQUJVTEFSWV9OQU1FIH0gZnJvbSBcIi4uL3ZvY2FidWxhcnlOYW1lc1wiO1xuXG5jb25zdCB7IHJ1bGVzRnJvbUJORiB9ID0gcGFyc2VyVXRpbGl0aWVzLFxuICAgICAgeyB1bnNoaWZ0LCBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluZWRDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IocnVsZXMsIGVudHJpZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuICBcbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBwb3N0UHJvY2VzcyhydWxlcykge1xuICAgIHJ1bGVzID0gWyAvLy9cbiAgICAgIC4uLnJ1bGVzLFxuICAgICAgLi4udGhpcy5ydWxlc1xuICAgIF07XG5cbiAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoaW5jbHVkZURlZmF1bHQgPSB0cnVlKSB7XG4gICAgbGV0IGN1c3RvbUdyYW1tYXJzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZURlZmF1bHQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbmV3IENvbWJpbmVkQ3VzdG9tR3JhbW1hcihydWxlcywgZW50cmllcyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBydWxlTmFtZXMgPSBbXG4gICAgICAgICAgVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgXSxcbiAgICAgICAgYm5mcyA9IHJ1bGVOYW1lcy5tYXAoKHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm5mID0gYm5mRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBydWxlTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCB2b2NhYnVsYXJ5TmFtZXMgPSBbXG4gICAgICAgICAgVFlQRV9WT0NBQlVMQVJZX05BTUUsXG4gICAgICAgICAgU1lNQk9MX1ZPQ0FCVUxBUllfTkFNRVxuICAgICAgICBdLFxuICAgICAgICBlbnRyaWVzID0gdm9jYWJ1bGFyeU5hbWVzLm1hcCgodm9jYWJ1bGFyeU5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCB2b2NhYnVsYXJ5TmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBibmZGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHJ1bGVOYW1lKSB7XG4gIGNvbnN0IGJuZnMgPSBbXTtcblxuICBiYWNrd2FyZHNGb3JFYWNoKGN1c3RvbUdyYW1tYXJzLCAoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyRGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyLmlzRGVmYXVsdEN1c3RvbUdyYW1tYXIoKTtcblxuICAgIGlmICghY3VzdG9tR3JhbW1hckRlZmF1bHRDdXN0b21HcmFtbWFyKSB7XG4gICAgICB2YWxpZGF0ZUJORihibmYsIHJ1bGVOYW1lKTtcbiAgICB9XG5cbiAgICBibmZzLnB1c2goYm5mKTtcbiAgfSk7XG5cbiAgY29uc3QgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIGJuZjtcbn1cblxuZnVuY3Rpb24gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHZvY2FidWxhcnlOYW1lKSB7XG4gIGNvbnN0IGV4cHJlc3Npb25zID0gW107XG5cbiAgYmFja3dhcmRzRm9yRWFjaChjdXN0b21HcmFtbWFycywgKGN1c3RvbUdyYW1tYXIpID0+IHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5ID0gY3VzdG9tR3JhbW1hci5nZXRWb2NhYnVsYXJ5KHZvY2FidWxhcnlOYW1lKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyRGVmYXVsdEN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyLmlzRGVmYXVsdEN1c3RvbUdyYW1tYXIoKTtcblxuICAgIGlmICghY3VzdG9tR3JhbW1hckRlZmF1bHRDdXN0b21HcmFtbWFyKSB7XG4gICAgICB2YWxpZGF0ZVZvY2FidWxhcnkodm9jYWJ1bGFyeSk7XG4gICAgfVxuXG4gICAgZXhwcmVzc2lvbnNGcm9tVm9jYWJ1bGFyeSh2b2NhYnVsYXJ5LCBleHByZXNzaW9ucyk7XG4gIH0pO1xuXG4gIGNvbnN0IHBhdHRlcm4gPSBleHByZXNzaW9ucy5qb2luKFZFUlRJQ0FMX0JBUiksXG4gICAgICAgIGVudHJ5TmFtZSA9IHZvY2FidWxhcnlOYW1lLCAgLy8vXG4gICAgICAgIGVudHJ5VmFsdWUgPSBgXig/OiR7cGF0dGVybn0pYCxcbiAgICAgICAgZW50cnkgPSB7XG4gICAgICAgICAgW2VudHJ5TmFtZV06IGVudHJ5VmFsdWVcbiAgICAgICAgfTtcblxuICByZXR1cm4gZW50cnk7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVSdWxlcyhydWxlcykge1xuICBsZXQgb3V0ZXJJbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKG91dGVySW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb25zdCBvdXRlclJ1bGUgPSBydWxlc1tvdXRlckluZGV4XSxcbiAgICAgICAgICBvdXRlclJ1bGVOYW1lID0gb3V0ZXJSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBpbm5lckluZGV4ID0gb3V0ZXJJbmRleCArIDE7XG5cbiAgICB3aGlsZSAoaW5uZXJJbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29uc3QgaW5uZXJSdWxlID0gcnVsZXNbaW5uZXJJbmRleF0sXG4gICAgICAgICAgICBpbm5lclJ1bGVOYW1lID0gaW5uZXJSdWxlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGlubmVyUnVsZU5hbWUgPT09IG91dGVyUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5uZXJSdWxlRGVmaW5pdGlvbnMgPSBpbm5lclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBvdXRlclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgICAgICB1bnNoaWZ0KG91dGVyUnVsZURlZmluaXRpb25zLCBpbm5lclJ1bGVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbm5lckluZGV4LCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHJ1bGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRlckluZGV4Kys7XG5cbiAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJ1bnNoaWZ0IiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNGb3JFYWNoIiwicnVsZXMiLCJlbnRyaWVzIiwiZ2V0UnVsZXMiLCJnZXRFbnRyaWVzIiwicG9zdFByb2Nlc3MiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwiZnJvbU5vdGhpbmciLCJpbmNsdWRlRGVmYXVsdCIsImN1c3RvbUdyYW1tYXJzIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJydWxlc0Zyb21DdXN0b21HcmFtbWFycyIsImVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tQ3VzdG9tR3JhbW1hcnMiLCJydWxlTmFtZXMiLCJURVJNX1JVTEVfTkFNRSIsIlNUQVRFTUVOVF9SVUxFX05BTUUiLCJibmZzIiwibWFwIiwicnVsZU5hbWUiLCJibmYiLCJibmZGcm9tQ3VzdG9tR3JhbW1hcnMiLCJqb2luIiwiRU1QVFlfU1RSSU5HIiwiY29tYmluZVJ1bGVzIiwidm9jYWJ1bGFyeU5hbWVzIiwiVFlQRV9WT0NBQlVMQVJZX05BTUUiLCJTWU1CT0xfVk9DQUJVTEFSWV9OQU1FIiwidm9jYWJ1bGFyeU5hbWUiLCJlbnRyeSIsImVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzIiwiY3VzdG9tR3JhbW1hciIsImdldEJORiIsImN1c3RvbUdyYW1tYXJEZWZhdWx0Q3VzdG9tR3JhbW1hciIsImlzRGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJ2YWxpZGF0ZUJORiIsInB1c2giLCJleHByZXNzaW9ucyIsInZvY2FidWxhcnkiLCJnZXRWb2NhYnVsYXJ5IiwidmFsaWRhdGVWb2NhYnVsYXJ5IiwiZXhwcmVzc2lvbnNGcm9tVm9jYWJ1bGFyeSIsInBhdHRlcm4iLCJWRVJUSUNBTF9CQVIiLCJlbnRyeU5hbWUiLCJlbnRyeVZhbHVlIiwib3V0ZXJJbmRleCIsImxlbmd0aCIsIm91dGVyUnVsZSIsIm91dGVyUnVsZU5hbWUiLCJnZXROYW1lIiwiaW5uZXJJbmRleCIsImlubmVyUnVsZSIsImlubmVyUnVsZU5hbWUiLCJpbm5lclJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwib3V0ZXJSdWxlRGVmaW5pdGlvbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7eUJBZlU7NEJBQ0M7cUNBQ087OERBRU47bUJBRUw7eUJBQ2U7eUJBQ1M7MEJBQ1U7K0JBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RCxJQUFNLEFBQUVDLGVBQWlCQyw2QkFBZSxDQUFoQ0QsY0FDQUUsVUFBOEJDLHlCQUFjLENBQTVDRCxTQUFTRSxtQkFBcUJELHlCQUFjLENBQW5DQztBQUVGLElBQUEsQUFBTUwsc0NBQU47YUFBTUEsc0JBQ1BNLEtBQUssRUFBRUMsT0FBTztnQ0FEUFA7UUFFakIsSUFBSSxD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