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
const _necessary = require("necessary");
const _occamlexers = require("occam-lexers");
const _occamparsers = require("occam-parsers");
const _occamgrammarutilities = require("occam-grammar-utilities");
const _default = /*#__PURE__*/ _interop_require_default(require("../customGrammar/default"));
const _vocabulary = require("../utilities/vocabulary");
const _constants = require("../constants");
const _validate = require("../utilities/validate");
const _ruleNames = require("../ruleNames");
const _vocabularyNames = require("../vocabularyNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { opaque } = _occamlexers.specialSymbols, { rulesFromBNF } = _occamparsers.parserUtilities, { unshift, forwardsForEach, backwardsForEach } = _necessary.arrayUtilities;
class CombinedCustomGrammar {
    constructor(rules, entries){
        this.rules = rules;
        this.entries = entries;
    }
    getRules() {
        return this.rules;
    }
    getEntries() {
        return this.entries;
    }
    postProcess(rules) {
        rules = [
            ...rules,
            ...this.rules
        ];
        rules = (0, _occamgrammarutilities.eliminateLeftRecursion)(rules); ///
        return rules;
    }
    static fromNothing(includeDefault = true) {
        let customGrammars = [];
        if (includeDefault) {
            customGrammars = [
                _default.default,
                ...customGrammars
            ]; ///
        }
        const rules = rulesFromCustomGrammars(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
        return combinedCustomGrammar;
    }
    static fromCustomGrammars(customGrammars, includeDefault = true) {
        if (includeDefault) {
            customGrammars = [
                _default.default,
                ...customGrammars
            ]; ///
        }
        const rules = rulesFromCustomGrammars(customGrammars), entries = entriesFromCustomGrammars(customGrammars), combinedCustomGrammar = new CombinedCustomGrammar(rules, entries);
        return combinedCustomGrammar;
    }
}
function rulesFromCustomGrammars(customGrammars) {
    const ruleNames = [
        _ruleNames.TERM_RULE_NAME,
        _ruleNames.STATEMENT_RULE_NAME
    ], bnfs = ruleNames.map((ruleName)=>{
        const bnf = bnfFromCustomGrammars(customGrammars, ruleName);
        return bnf;
    }), bnf = bnfs.join(_constants.VERTICAL_SPACE), rules = rulesFromBNF(bnf);
    combineRules(rules);
    const opacity = opaque; ///
    ruleNames.forEach((ruleName)=>{
        const rule = rules.find((rule)=>{
            const name = rule.getName();
            if (name === ruleName) {
                return true;
            }
        });
        rule.setOpacity(opacity);
    });
    return rules;
}
function entriesFromCustomGrammars(customGrammars) {
    const vocabularyNames = [
        _vocabularyNames.TYPE_VOCABULARY_NAME,
        _vocabularyNames.SYMBOL_VOCABULARY_NAME
    ], entries = vocabularyNames.map((vocabularyName)=>{
        const entry = entryFromCustomGrammars(customGrammars, vocabularyName);
        return entry;
    });
    return entries;
}
function entryFromCustomGrammars(customGrammars, vocabularyName) {
    const expressions = [];
    backwardsForEach(customGrammars, (customGrammar)=>{
        const vocabulary = customGrammar.getVocabulary(vocabularyName), customGrammarDefaultCustomGrammar = customGrammar.isDefaultCustomGrammar();
        if (!customGrammarDefaultCustomGrammar) {
            (0, _validate.validateVocabulary)(vocabulary);
        }
        (0, _vocabulary.expressionsFromVocabulary)(vocabulary, expressions);
    });
    const pattern = expressions.join(_constants.VERTICAL_BAR), entryName = vocabularyName, entryValue = `^(?:${pattern})`, entry = {
        [entryName]: entryValue
    };
    return entry;
}
function bnfFromCustomGrammars(customGrammars, ruleName) {
    const bnfs = [];
    forwardsForEach(customGrammars, (customGrammar)=>{
        const bnf = customGrammar.getBNF(ruleName), customGrammarDefaultCustomGrammar = customGrammar.isDefaultCustomGrammar();
        if (!customGrammarDefaultCustomGrammar) {
            (0, _validate.validateBNF)(bnf, ruleName);
        }
        bnfs.push(bnf);
    });
    const bnf = bnfs.join(_constants.VERTICAL_SPACE);
    return bnf;
}
function combineRules(rules) {
    let outerIndex = 0, length = rules.length;
    while(outerIndex < length){
        const outerRule = rules[outerIndex], outerRuleName = outerRule.getName();
        let innerIndex = outerIndex + 1;
        while(innerIndex < length){
            const innerRule = rules[innerIndex], innerRuleName = innerRule.getName();
            if (innerRuleName === outerRuleName) {
                const innerRuleDefinitions = innerRule.getDefinitions(), outerRuleDefinitions = outerRule.getDefinitions();
                unshift(outerRuleDefinitions, innerRuleDefinitions);
                const start = innerIndex, deleteCount = 1;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b21HcmFtbWFyL2NvbWJpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNwZWNpYWxTeW1ib2xzIH0gZnJvbSBcIm9jY2FtLWxleGVyc1wiO1xuaW1wb3J0IHsgcGFyc2VyVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwib2NjYW0tZ3JhbW1hci11dGlsaXRpZXNcIjtcblxuaW1wb3J0IGRlZmF1bHRDdXN0b21HcmFtbWFyIGZyb20gXCIuLi9jdXN0b21HcmFtbWFyL2RlZmF1bHRcIjtcblxuaW1wb3J0IHsgZXhwcmVzc2lvbnNGcm9tVm9jYWJ1bGFyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdm9jYWJ1bGFyeVwiO1xuaW1wb3J0IHsgVkVSVElDQUxfQkFSLCBWRVJUSUNBTF9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHZhbGlkYXRlQk5GLCB2YWxpZGF0ZVZvY2FidWxhcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbGlkYXRlXCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IFRZUEVfVk9DQUJVTEFSWV9OQU1FLCBTWU1CT0xfVk9DQUJVTEFSWV9OQU1FIH0gZnJvbSBcIi4uL3ZvY2FidWxhcnlOYW1lc1wiO1xuXG5jb25zdCB7IG9wYXF1ZSAgfSA9IHNwZWNpYWxTeW1ib2xzLFxuICAgICAgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgdW5zaGlmdCwgZm9yd2FyZHNGb3JFYWNoLCBiYWNrd2FyZHNGb3JFYWNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluZWRDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IocnVsZXMsIGVudHJpZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuICBcbiAgZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXM7XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBwb3N0UHJvY2VzcyhydWxlcykge1xuICAgIHJ1bGVzID0gWyAvLy9cbiAgICAgIC4uLnJ1bGVzLFxuICAgICAgLi4udGhpcy5ydWxlc1xuICAgIF07XG5cbiAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoaW5jbHVkZURlZmF1bHQgPSB0cnVlKSB7XG4gICAgbGV0IGN1c3RvbUdyYW1tYXJzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZURlZmF1bHQpIHtcbiAgICAgIGN1c3RvbUdyYW1tYXJzID0gWyBkZWZhdWx0Q3VzdG9tR3JhbW1hciwgLi4uY3VzdG9tR3JhbW1hcnMgXTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgcnVsZXMgPSBydWxlc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IG5ldyBDb21iaW5lZEN1c3RvbUdyYW1tYXIocnVsZXMsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIGluY2x1ZGVEZWZhdWx0ID0gdHJ1ZSkge1xuICAgIGlmIChpbmNsdWRlRGVmYXVsdCkge1xuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbIGRlZmF1bHRDdXN0b21HcmFtbWFyLCAuLi5jdXN0b21HcmFtbWFycyBdOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IHJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICBlbnRyaWVzID0gZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gbmV3IENvbWJpbmVkQ3VzdG9tR3JhbW1hcihydWxlcywgZW50cmllcyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbWJpbmVkQ3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBydWxlc0Zyb21DdXN0b21HcmFtbWFycyhjdXN0b21HcmFtbWFycykge1xuICBjb25zdCBydWxlTmFtZXMgPSBbXG4gICAgICAgICAgVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgU1RBVEVNRU5UX1JVTEVfTkFNRSxcbiAgICAgICAgXSxcbiAgICAgICAgYm5mcyA9IHJ1bGVOYW1lcy5tYXAoKHJ1bGVOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm5mID0gYm5mRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCBydWxlTmFtZSk7XG5cbiAgICAgICAgICByZXR1cm4gYm5mO1xuICAgICAgICB9KSxcbiAgICAgICAgYm5mID0gYm5mcy5qb2luKFZFUlRJQ0FMX1NQQUNFKSxcbiAgICAgICAgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICBjb21iaW5lUnVsZXMocnVsZXMpO1xuXG4gIGNvbnN0IG9wYWNpdHkgPSBvcGFxdWU7IC8vL1xuXG4gIHJ1bGVOYW1lcy5mb3JFYWNoKChydWxlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChuYW1lID09PSBydWxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJ1bGUuc2V0T3BhY2l0eShvcGFjaXR5KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG5mdW5jdGlvbiBlbnRyaWVzRnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSB7XG4gIGNvbnN0IHZvY2FidWxhcnlOYW1lcyA9IFtcbiAgICAgICAgICBUWVBFX1ZPQ0FCVUxBUllfTkFNRSxcbiAgICAgICAgICBTWU1CT0xfVk9DQUJVTEFSWV9OQU1FXG4gICAgICAgIF0sXG4gICAgICAgIGVudHJpZXMgPSB2b2NhYnVsYXJ5TmFtZXMubWFwKCh2b2NhYnVsYXJ5TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudHJ5ID0gZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHZvY2FidWxhcnlOYW1lKTtcblxuICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVudHJpZXM7XG59XG5cbmZ1bmN0aW9uIGVudHJ5RnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzLCB2b2NhYnVsYXJ5TmFtZSkge1xuICBjb25zdCBleHByZXNzaW9ucyA9IFtdO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goY3VzdG9tR3JhbW1hcnMsIChjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeSA9IGN1c3RvbUdyYW1tYXIuZ2V0Vm9jYWJ1bGFyeSh2b2NhYnVsYXJ5TmFtZSksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hckRlZmF1bHRDdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hci5pc0RlZmF1bHRDdXN0b21HcmFtbWFyKCk7XG5cbiAgICBpZiAoIWN1c3RvbUdyYW1tYXJEZWZhdWx0Q3VzdG9tR3JhbW1hcikge1xuICAgICAgdmFsaWRhdGVWb2NhYnVsYXJ5KHZvY2FidWxhcnkpO1xuICAgIH1cblxuICAgIGV4cHJlc3Npb25zRnJvbVZvY2FidWxhcnkodm9jYWJ1bGFyeSwgZXhwcmVzc2lvbnMpO1xuICB9KTtcblxuICBjb25zdCBwYXR0ZXJuID0gZXhwcmVzc2lvbnMuam9pbihWRVJUSUNBTF9CQVIpLFxuICAgICAgICBlbnRyeU5hbWUgPSB2b2NhYnVsYXJ5TmFtZSwgIC8vL1xuICAgICAgICBlbnRyeVZhbHVlID0gYF4oPzoke3BhdHRlcm59KWAsXG4gICAgICAgIGVudHJ5ID0ge1xuICAgICAgICAgIFtlbnRyeU5hbWVdOiBlbnRyeVZhbHVlXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIGVudHJ5O1xufVxuXG5mdW5jdGlvbiBibmZGcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMsIHJ1bGVOYW1lKSB7XG4gIGNvbnN0IGJuZnMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goY3VzdG9tR3JhbW1hcnMsIChjdXN0b21HcmFtbWFyKSA9PiB7XG4gICAgY29uc3QgYm5mID0gY3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJEZWZhdWx0Q3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXIuaXNEZWZhdWx0Q3VzdG9tR3JhbW1hcigpO1xuXG4gICAgaWYgKCFjdXN0b21HcmFtbWFyRGVmYXVsdEN1c3RvbUdyYW1tYXIpIHtcbiAgICAgIHZhbGlkYXRlQk5GKGJuZiwgcnVsZU5hbWUpO1xuICAgIH1cblxuICAgIGJuZnMucHVzaChibmYpO1xuICB9KTtcblxuICBjb25zdCBibmYgPSBibmZzLmpvaW4oVkVSVElDQUxfU1BBQ0UpO1xuXG4gIHJldHVybiBibmY7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVSdWxlcyhydWxlcykge1xuICBsZXQgb3V0ZXJJbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG5cbiAgd2hpbGUgKG91dGVySW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb25zdCBvdXRlclJ1bGUgPSBydWxlc1tvdXRlckluZGV4XSxcbiAgICAgICAgICBvdXRlclJ1bGVOYW1lID0gb3V0ZXJSdWxlLmdldE5hbWUoKTtcblxuICAgIGxldCBpbm5lckluZGV4ID0gb3V0ZXJJbmRleCArIDE7XG5cbiAgICB3aGlsZSAoaW5uZXJJbmRleCA8IGxlbmd0aCkge1xuICAgICAgY29uc3QgaW5uZXJSdWxlID0gcnVsZXNbaW5uZXJJbmRleF0sXG4gICAgICAgICAgICBpbm5lclJ1bGVOYW1lID0gaW5uZXJSdWxlLmdldE5hbWUoKTtcblxuICAgICAgaWYgKGlubmVyUnVsZU5hbWUgPT09IG91dGVyUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgaW5uZXJSdWxlRGVmaW5pdGlvbnMgPSBpbm5lclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICAgICAgb3V0ZXJSdWxlRGVmaW5pdGlvbnMgPSBvdXRlclJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgICAgICB1bnNoaWZ0KG91dGVyUnVsZURlZmluaXRpb25zLCBpbm5lclJ1bGVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbm5lckluZGV4LCAvLy9cbiAgICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICAgIHJ1bGVzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gICAgICAgIGxlbmd0aCA9IHJ1bGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRlckluZGV4Kys7XG5cbiAgICBsZW5ndGggPSBydWxlcy5sZW5ndGg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJvcGFxdWUiLCJzcGVjaWFsU3ltYm9scyIsInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInVuc2hpZnQiLCJmb3J3YXJkc0ZvckVhY2giLCJiYWNrd2FyZHNGb3JFYWNoIiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlcyIsImVudHJpZXMiLCJnZXRSdWxlcyIsImdldEVudHJpZXMiLCJwb3N0UHJvY2VzcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJmcm9tTm90aGluZyIsImluY2x1ZGVEZWZhdWx0IiwiY3VzdG9tR3JhbW1hcnMiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hciIsInJ1bGVzRnJvbUN1c3RvbUdyYW1tYXJzIiwiZW50cmllc0Zyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsInJ1bGVOYW1lcyIsIlRFUk1fUlVMRV9OQU1FIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsImJuZnMiLCJtYXAiLCJydWxlTmFtZSIsImJuZiIsImJuZkZyb21DdXN0b21HcmFtbWFycyIsImpvaW4iLCJWRVJUSUNBTF9TUEFDRSIsImNvbWJpbmVSdWxlcyIsIm9wYWNpdHkiLCJmb3JFYWNoIiwicnVsZSIsImZpbmQiLCJuYW1lIiwiZ2V0TmFtZSIsInNldE9wYWNpdHkiLCJ2b2NhYnVsYXJ5TmFtZXMiLCJUWVBFX1ZPQ0FCVUxBUllfTkFNRSIsIlNZTUJPTF9WT0NBQlVMQVJZX05BTUUiLCJ2b2NhYnVsYXJ5TmFtZSIsImVudHJ5IiwiZW50cnlGcm9tQ3VzdG9tR3JhbW1hcnMiLCJleHByZXNzaW9ucyIsImN1c3RvbUdyYW1tYXIiLCJ2b2NhYnVsYXJ5IiwiZ2V0Vm9jYWJ1bGFyeSIsImN1c3RvbUdyYW1tYXJEZWZhdWx0Q3VzdG9tR3JhbW1hciIsImlzRGVmYXVsdEN1c3RvbUdyYW1tYXIiLCJ2YWxpZGF0ZVZvY2FidWxhcnkiLCJleHByZXNzaW9uc0Zyb21Wb2NhYnVsYXJ5IiwicGF0dGVybiIsIlZFUlRJQ0FMX0JBUiIsImVudHJ5TmFtZSIsImVudHJ5VmFsdWUiLCJnZXRCTkYiLCJ2YWxpZGF0ZUJORiIsInB1c2giLCJvdXRlckluZGV4IiwibGVuZ3RoIiwib3V0ZXJSdWxlIiwib3V0ZXJSdWxlTmFtZSIsImlubmVySW5kZXgiLCJpbm5lclJ1bGUiLCJpbm5lclJ1bGVOYW1lIiwiaW5uZXJSdWxlRGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsIm91dGVyUnVsZURlZmluaXRpb25zIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBcUJBOzs7MkJBakJVOzZCQUNBOzhCQUNDO3VDQUNPO2dFQUVOOzRCQUVTOzJCQUNHOzBCQUNHOzJCQUNJO2lDQUNTOzs7Ozs7QUFFN0QsTUFBTSxFQUFFQyxNQUFNLEVBQUcsR0FBR0MsMkJBQWMsRUFDNUIsRUFBRUMsWUFBWSxFQUFFLEdBQUdDLDZCQUFlLEVBQ2xDLEVBQUVDLE9BQU8sRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHQyx5QkFBYztBQUV0RCxNQUFNUjtJQUNuQixZQUFZUyxLQUFLLEVBQUVDLE9BQU8sQ0FBRTtRQUMxQixJQUFJLENBQUNELEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7SUFDakI7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0YsT0FBTztJQUNyQjtJQUVBRyxZQUFZSixLQUFLLEVBQUU7UUFDakJBLFFBQVE7ZUFDSEE7ZUFDQSxJQUFJLENBQUNBLEtBQUs7U0FDZDtRQUVEQSxRQUFRSyxJQUFBQSw2Q0FBc0IsRUFBQ0wsUUFBUyxHQUFHO1FBRTNDLE9BQU9BO0lBQ1Q7SUFFQSxPQUFPTSxZQUFZQyxpQkFBaUIsSUFBSSxFQUFFO1FBQ3hDLElBQUlDLGlCQUFpQixFQUFFO1FBRXZCLElBQUlELGdCQUFnQjtZQUNsQkMsaUJBQWlCO2dCQUFFQyxnQkFBb0I7bUJBQUtEO2FBQWdCLEVBQUUsR0FBRztRQUNuRTtRQUVBLE1BQU1SLFFBQVFVLHdCQUF3QkYsaUJBQ2hDUCxVQUFVVSwwQkFBMEJILGlCQUNwQ0ksd0JBQXdCLElBQUlyQixzQkFBc0JTLE9BQU9DO1FBRS9ELE9BQU9XO0lBQ1Q7SUFFQSxPQUFPQyxtQkFBbUJMLGNBQWMsRUFBRUQsaUJBQWlCLElBQUksRUFBRTtRQUMvRCxJQUFJQSxnQkFBZ0I7WUFDbEJDLGlCQUFpQjtnQkFBRUMsZ0JBQW9CO21CQUFLRDthQUFnQixFQUFFLEdBQUc7UUFDbkU7UUFFQSxNQUFNUixRQUFRVSx3QkFBd0JGLGlCQUNoQ1AsVUFBVVUsMEJBQTBCSCxpQkFDcENJLHdCQUF3QixJQUFJckIsc0JBQXNCUyxPQUFPQztRQUUvRCxPQUFPVztJQUNUO0FBQ0Y7QUFFQSxTQUFTRix3QkFBd0JGLGNBQWM7SUFDN0MsTUFBTU0sWUFBWTtRQUNWQyx5QkFBYztRQUNkQyw4QkFBbUI7S0FDcEIsRUFDREMsT0FBT0gsVUFBVUksR0FBRyxDQUFDLENBQUNDO1FBQ3BCLE1BQU1DLE1BQU1DLHNCQUFzQmIsZ0JBQWdCVztRQUVsRCxPQUFPQztJQUNULElBQ0FBLE1BQU1ILEtBQUtLLElBQUksQ0FBQ0MseUJBQWMsR0FDOUJ2QixRQUFRTixhQUFhMEI7SUFFM0JJLGFBQWF4QjtJQUViLE1BQU15QixVQUFVakMsUUFBUSxHQUFHO0lBRTNCc0IsVUFBVVksT0FBTyxDQUFDLENBQUNQO1FBQ2pCLE1BQU1RLE9BQU8zQixNQUFNNEIsSUFBSSxDQUFDLENBQUNEO1lBQ3ZCLE1BQU1FLE9BQU9GLEtBQUtHLE9BQU87WUFFekIsSUFBSUQsU0FBU1YsVUFBVTtnQkFDckIsT0FBTztZQUNUO1FBQ0Y7UUFFQVEsS0FBS0ksVUFBVSxDQUFDTjtJQUNsQjtJQUVBLE9BQU96QjtBQUNUO0FBRUEsU0FBU1csMEJBQTBCSCxjQUFjO0lBQy9DLE1BQU13QixrQkFBa0I7UUFDaEJDLHFDQUFvQjtRQUNwQkMsdUNBQXNCO0tBQ3ZCLEVBQ0RqQyxVQUFVK0IsZ0JBQWdCZCxHQUFHLENBQUMsQ0FBQ2lCO1FBQzdCLE1BQU1DLFFBQVFDLHdCQUF3QjdCLGdCQUFnQjJCO1FBRXRELE9BQU9DO0lBQ1Q7SUFFTixPQUFPbkM7QUFDVDtBQUVBLFNBQVNvQyx3QkFBd0I3QixjQUFjLEVBQUUyQixjQUFjO0lBQzdELE1BQU1HLGNBQWMsRUFBRTtJQUV0QnhDLGlCQUFpQlUsZ0JBQWdCLENBQUMrQjtRQUNoQyxNQUFNQyxhQUFhRCxjQUFjRSxhQUFhLENBQUNOLGlCQUN6Q08sb0NBQW9DSCxjQUFjSSxzQkFBc0I7UUFFOUUsSUFBSSxDQUFDRCxtQ0FBbUM7WUFDdENFLElBQUFBLDRCQUFrQixFQUFDSjtRQUNyQjtRQUVBSyxJQUFBQSxxQ0FBeUIsRUFBQ0wsWUFBWUY7SUFDeEM7SUFFQSxNQUFNUSxVQUFVUixZQUFZaEIsSUFBSSxDQUFDeUIsdUJBQVksR0FDdkNDLFlBQVliLGdCQUNaYyxhQUFhLENBQUMsSUFBSSxFQUFFSCxRQUFRLENBQUMsQ0FBQyxFQUM5QlYsUUFBUTtRQUNOLENBQUNZLFVBQVUsRUFBRUM7SUFDZjtJQUVOLE9BQU9iO0FBQ1Q7QUFFQSxTQUFTZixzQkFBc0JiLGNBQWMsRUFBRVcsUUFBUTtJQUNyRCxNQUFNRixPQUFPLEVBQUU7SUFFZnBCLGdCQUFnQlcsZ0JBQWdCLENBQUMrQjtRQUMvQixNQUFNbkIsTUFBTW1CLGNBQWNXLE1BQU0sQ0FBQy9CLFdBQzNCdUIsb0NBQW9DSCxjQUFjSSxzQkFBc0I7UUFFOUUsSUFBSSxDQUFDRCxtQ0FBbUM7WUFDdENTLElBQUFBLHFCQUFXLEVBQUMvQixLQUFLRDtRQUNuQjtRQUVBRixLQUFLbUMsSUFBSSxDQUFDaEM7SUFDWjtJQUVBLE1BQU1BLE1BQU1ILEtBQUtLLElBQUksQ0FBQ0MseUJBQWM7SUFFcEMsT0FBT0g7QUFDVDtBQUVBLFNBQVNJLGFBQWF4QixLQUFLO0lBQ3pCLElBQUlxRCxhQUFhLEdBQ2JDLFNBQVN0RCxNQUFNc0QsTUFBTTtJQUV6QixNQUFPRCxhQUFhQyxPQUFRO1FBQzFCLE1BQU1DLFlBQVl2RCxLQUFLLENBQUNxRCxXQUFXLEVBQzdCRyxnQkFBZ0JELFVBQVV6QixPQUFPO1FBRXZDLElBQUkyQixhQUFhSixhQUFhO1FBRTlCLE1BQU9JLGFBQWFILE9BQVE7WUFDMUIsTUFBTUksWUFBWTFELEtBQUssQ0FBQ3lELFdBQVcsRUFDN0JFLGdCQUFnQkQsVUFBVTVCLE9BQU87WUFFdkMsSUFBSTZCLGtCQUFrQkgsZUFBZTtnQkFDbkMsTUFBTUksdUJBQXVCRixVQUFVRyxjQUFjLElBQy9DQyx1QkFBdUJQLFVBQVVNLGNBQWM7Z0JBRXJEakUsUUFBUWtFLHNCQUFzQkY7Z0JBRTlCLE1BQU1HLFFBQVFOLFlBQ1JPLGNBQWM7Z0JBRXBCaEUsTUFBTWlFLE1BQU0sQ0FBQ0YsT0FBT0M7Z0JBRXBCVixTQUFTdEQsTUFBTXNELE1BQU07WUFDdkIsT0FBTztnQkFDTEc7WUFDRjtRQUNGO1FBRUFKO1FBRUFDLFNBQVN0RCxNQUFNc0QsTUFBTTtJQUN2QjtBQUNGIn0=