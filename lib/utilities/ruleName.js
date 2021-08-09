"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findRuleByRuleName = findRuleByRuleName;
function findRuleByRuleName(ruleName, rules) {
    var name = ruleName, rule = rules.find(function(rule1) {
        var ruleName1 = rule1.getName();
        if (ruleName1 === name) {
            return true;
        }
    }) || null; ///
    return rule;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUnVsZUJ5UnVsZU5hbWUocnVsZU5hbWUsIHJ1bGVzKSB7XG4gIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBpZiAocnVsZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgcmV0dXJuIHJ1bGU7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUVJLGtCQUFrQixHQUFsQixrQkFBa0I7U0FBbEIsa0JBQWtCLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ25ELEdBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUNmLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxVQUFFLEtBQUksRUFBSyxDQUFDO1FBQzNCLEdBQUssQ0FBQyxTQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU87UUFFN0IsRUFBRSxFQUFFLFNBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQzttQkFDZixJQUFJO1FBQ2IsQ0FBQztJQUNILENBQUMsS0FBSyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1dBRWQsSUFBSTtBQUNiLENBQUMifQ==