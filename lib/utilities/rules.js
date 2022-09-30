"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "rulesFromParser", {
    enumerable: true,
    get: function() {
        return rulesFromParser;
    }
});
var _necessary = require("necessary");
var filter = _necessary.arrayUtilities.filter;
function rulesFromParser(parser) {
    var ruleMap = parser.getRuleMap(), startRule = parser.getStartRule(), startRuleName = startRule.getName(), ruleMapValues = Object.values(ruleMap), rules = ruleMapValues; ///
    filter(rules, function(rule) {
        var ruleName = rule.getName();
        if (ruleName !== startRuleName) {
            return true;
        }
    });
    rules.unshift(startRule);
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlc0Zyb21QYXJzZXIocGFyc2VyKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBwYXJzZXIuZ2V0UnVsZU1hcCgpLFxuICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBzdGFydFJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICBydWxlTWFwVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhydWxlTWFwKSxcbiAgICAgICAgcnVsZXMgPSBydWxlTWFwVmFsdWVzOyAgLy8vXG5cbiAgZmlsdGVyKHJ1bGVzLCAocnVsZSkgPT4ge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICBpZiAocnVsZU5hbWUgIT09IHN0YXJ0UnVsZU5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcnVsZXMudW5zaGlmdChzdGFydFJ1bGUpO1xuXG4gIHJldHVybiBydWxlcztcbn1cbiJdLCJuYW1lcyI6WyJydWxlc0Zyb21QYXJzZXIiLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsInBhcnNlciIsInJ1bGVNYXAiLCJnZXRSdWxlTWFwIiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwic3RhcnRSdWxlTmFtZSIsImdldE5hbWUiLCJydWxlTWFwVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwicnVsZXMiLCJydWxlIiwicnVsZU5hbWUiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNZ0JBOzs7ZUFBQUE7Ozt5QkFKZTtBQUUvQixJQUFNLEFBQUVDLFNBQVdDLHlCQUFjLENBQXpCRDtBQUVELFNBQVNELGdCQUFnQkcsTUFBTSxFQUFFO0lBQ3RDLElBQU1DLFVBQVVELE9BQU9FLFVBQVUsSUFDM0JDLFlBQVlILE9BQU9JLFlBQVksSUFDL0JDLGdCQUFnQkYsVUFBVUcsT0FBTyxJQUNqQ0MsZ0JBQWdCQyxPQUFPQyxNQUFNLENBQUNSLFVBQzlCUyxRQUFRSCxlQUFnQixHQUFHO0lBRWpDVCxPQUFPWSxPQUFPLFNBQUNDLE1BQVM7UUFDdEIsSUFBTUMsV0FBV0QsS0FBS0wsT0FBTztRQUU3QixJQUFJTSxhQUFhUCxlQUFlO1lBQzlCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtJQUVBSyxNQUFNRyxPQUFPLENBQUNWO0lBRWQsT0FBT087QUFDVCJ9