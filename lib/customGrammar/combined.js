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
var _patternNames = require("../patternNames");
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
    var patternNames = [
        _patternNames.TYPE_PATTERN_NAME,
        _patternNames.SYMBOL_PATTERN_NAME
    ], entries = patternNames.map(function(patternName) {
        var entry = entryFromCustomGrammars(customGrammars, patternName);
        return entry;
    });
    return entries;
}
function entryFromCustomGrammars(customGrammars, patternName) {
    var patterns = [];
    backwardsForEach(customGrammars, function(customGrammar) {
        var pattern = customGrammar.getPattern(patternName);
        if (pattern !== null && pattern !== _constants.EMPTY_STRING) {
            var subPatterns = pattern.split(_constants.VERTICAL_BAR);
            subPatterns.forEach(function(subPattern) {
                var pattern = patternName === _patternNames.TYPE_PATTERN_NAME ? "".concat(subPattern, "(?!\\w)") : subPattern; ///
                patterns.push(pattern);
            });
        }
    });
    var patternsString = patterns.join(_constants.VERTICAL_BAR), entryName = patternName, entryValue = "^(?:".concat(patternsString, ")"), entry = _define_property({}, entryName, entryValue);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXItdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBkZWZhdWx0Q3VzdG9tR3JhbW1hciBmcm9tIFwiLi4vY3VzdG9tR3JhbW1hci9kZWZhdWx0XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgVkVSVElDQUxfQkFSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9QQVRURVJOX05BTUUsIFNZTUJPTF9QQVRURVJOX05BTUUgfSBmcm9tIFwiLi4vcGF0dGVybk5hbWVzXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXMsXG4gICAgICB7IHVuc2hpZnQsIGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5lZEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihydWxlcywgZW50cmllcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG4gIFxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIHBvc3RQcm9jZXNzKHJ1bGVzKSB7XG4gICAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGxldCBjdXN0b21HcmFtbWFycyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVEZWZhdWx0KSB7XG4gICAgICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbmV3IENvbWJpbmVkQ3VzdG9tR3JhbW1hcihydWxlcywgZW50cmllcyk7XG5cbiAgICByZXR1cm4gY29tYmluZWRDdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgaW5jbHVkZURlZmF1bHQgPSB0cnVlKSB7XG4gICAgaWYgKGluY2x1ZGVEZWZhdWx0KSB7XG4gICAgICBjdXN0b21HcmFtbWFycyA9IFsgZGVmYXVsdEN1c3RvbUdyYW1tYXIsIC4uLmN1c3RvbUdyYW1tYXJzIF07IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVzID0gcnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbmV3IENvbWJpbmVkQ3VzdG9tR3JhbW1hcihydWxlcywgZW50cmllcyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21DdXN0b21HcmFtbWFyc0FuZERlZmF1bHRCTkYoY3VzdG9tR3JhbW1hcnMpIHtcbiAgY29uc3QgYm5mcyA9IGN1c3RvbUdyYW1tYXJzLm1hcCgoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGJuZiA9IGN1c3RvbUdyYW1tYXIuZ2V0Qk5GKCk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKEVNUFRZX1NUUklORyksXG4gICAgICAgIHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgY29tYmluZVJ1bGVzKHJ1bGVzKVxuXG4gIHJldHVybiBydWxlcztcbn1cblxuZnVuY3Rpb24gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBwYXR0ZXJuTmFtZXMgPSBbXG4gICAgICAgICAgVFlQRV9QQVRURVJOX05BTUUsXG4gICAgICAgICAgU1lNQk9MX1BBVFRFUk5fTkFNRVxuICAgICAgICBdLFxuICAgICAgICBlbnRyaWVzID0gcGF0dGVybk5hbWVzLm1hcCgocGF0dGVybk5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRyeSA9IGVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBwYXR0ZXJuTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBlbnRyeUZyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycywgcGF0dGVybk5hbWUpIHtcbiAgY29uc3QgcGF0dGVybnMgPSBbXTtcblxuICBiYWNrd2FyZHNGb3JFYWNoKGN1c3RvbUdyYW1tYXJzLCAoY3VzdG9tR3JhbW1hcikgPT4ge1xuICAgIGNvbnN0IHBhdHRlcm4gPSBjdXN0b21HcmFtbWFyLmdldFBhdHRlcm4ocGF0dGVybk5hbWUpO1xuXG4gICAgaWYgKChwYXR0ZXJuICE9PSBudWxsKSAmJiAocGF0dGVybiAhPT0gRU1QVFlfU1RSSU5HKSkge1xuICAgICAgY29uc3Qgc3ViUGF0dGVybnMgPSBwYXR0ZXJuLnNwbGl0KFZFUlRJQ0FMX0JBUik7XG5cbiAgICAgIHN1YlBhdHRlcm5zLmZvckVhY2goKHN1YlBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IChwYXR0ZXJuTmFtZSA9PT0gVFlQRV9QQVRURVJOX05BTUUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3ViUGF0dGVybn0oPyFcXFxcdylgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViUGF0dGVybjsgLy8vXG5cbiAgICAgICAgcGF0dGVybnMucHVzaChwYXR0ZXJuKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcGF0dGVybnNTdHJpbmcgPSBwYXR0ZXJucy5qb2luKFZFUlRJQ0FMX0JBUiksXG4gICAgICAgIGVudHJ5TmFtZSA9IHBhdHRlcm5OYW1lLCAgLy8vXG4gICAgICAgIGVudHJ5VmFsdWUgPSBgXig/OiR7cGF0dGVybnNTdHJpbmd9KWAsXG4gICAgICAgIGVudHJ5ID0ge1xuICAgICAgICAgIFtlbnRyeU5hbWVdOiBlbnRyeVZhbHVlXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lUnVsZXMocnVsZXMpIHtcbiAgbGV0IG91dGVySW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuXG4gIHdoaWxlIChvdXRlckluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgb3V0ZXJSdWxlID0gcnVsZXNbb3V0ZXJJbmRleF0sXG4gICAgICAgICAgb3V0ZXJSdWxlTmFtZSA9IG91dGVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgaW5uZXJJbmRleCA9IG91dGVySW5kZXggKyAxO1xuXG4gICAgd2hpbGUgKGlubmVySW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlubmVyUnVsZSA9IHJ1bGVzW2lubmVySW5kZXhdLFxuICAgICAgICAgICAgaW5uZXJSdWxlTmFtZSA9IGlubmVyUnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChpbm5lclJ1bGVOYW1lID09PSBvdXRlclJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IGlubmVyUnVsZURlZmluaXRpb25zID0gaW5uZXJSdWxlLmdldERlZmluaXRpb25zKCksXG4gICAgICAgICAgICAgIG91dGVyUnVsZURlZmluaXRpb25zID0gb3V0ZXJSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICAgICAgdW5zaGlmdChvdXRlclJ1bGVEZWZpbml0aW9ucywgaW5uZXJSdWxlRGVmaW5pdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5uZXJJbmRleCwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBydWxlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICAgICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lckluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3V0ZXJJbmRleCsrO1xuXG4gICAgbGVuZ3RoID0gcnVsZXMubGVuZ3RoO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwidW5zaGlmdCIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzRm9yRWFjaCIsInJ1bGVzIiwiZW50cmllcyIsImdldFJ1bGVzIiwiZ2V0RW50cmllcyIsInBvc3RQcm9jZXNzIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsImZyb21Ob3RoaW5nIiwiaW5jbHVkZURlZmF1bHQiLCJjdXN0b21HcmFtbWFycyIsImRlZmF1bHRDdXN0b21HcmFtbWFyIiwicnVsZXNGcm9tQ3VzdG9tR3JhbW1hcnNBbmREZWZhdWx0Qk5GIiwiZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImJuZnMiLCJtYXAiLCJjdXN0b21HcmFtbWFyIiwiYm5mIiwiZ2V0Qk5GIiwiam9pbiIsIkVNUFRZX1NUUklORyIsImNvbWJpbmVSdWxlcyIsInBhdHRlcm5OYW1lcyIsIlRZUEVfUEFUVEVSTl9OQU1FIiwiU1lNQk9MX1BBVFRFUk5fTkFNRSIsInBhdHRlcm5OYW1lIiwiZW50cnkiLCJlbnRyeUZyb21DdXN0b21HcmFtbWFycyIsInBhdHRlcm5zIiwicGF0dGVybiIsImdldFBhdHRlcm4iLCJzdWJQYXR0ZXJucyIsInNwbGl0IiwiVkVSVElDQUxfQkFSIiwiZm9yRWFjaCIsInN1YlBhdHRlcm4iLCJwdXNoIiwicGF0dGVybnNTdHJpbmciLCJlbnRyeU5hbWUiLCJlbnRyeVZhbHVlIiwib3V0ZXJJbmRleCIsImxlbmd0aCIsIm91dGVyUnVsZSIsIm91dGVyUnVsZU5hbWUiLCJnZXROYW1lIiwiaW5uZXJJbmRleCIsImlubmVyUnVsZSIsImlubmVyUnVsZU5hbWUiLCJpbm5lclJ1bGVEZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwib3V0ZXJSdWxlRGVmaW5pdGlvbnMiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozt5QkFaVTs0QkFDQztxQ0FDTzs4REFFTjt5QkFFVTs0QkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELElBQU0sQUFBRUMsZUFBaUJDLDZCQUFlLENBQWhDRCxjQUNBRSxVQUE4QkMseUJBQWMsQ0FBNUNELFNBQVNFLG1CQUFxQkQseUJBQWMsQ0FBbkNDO0FBRUYsSUFBQSxBQUFNTCxzQ0FBTjthQUFNQSxzQkFDUE0sS0FBSyxFQUFFQyxPQUFPO2dDQURQUDtR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