"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findRuleByRuleName = findRuleByRuleName;
function findRuleByRuleName(ruleName, rules) {
    var name = ruleName, rule1 = rules.find(function(rule) {
        var _$ruleName = rule.getName();
        if (_$ruleName === name) {
            return true;
        }
    }) || null; ///
    return rule1;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUnVsZUJ5UnVsZU5hbWUocnVsZU5hbWUsIHJ1bGVzKSB7XG4gIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBpZiAocnVsZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgcmV0dXJuIHJ1bGU7XG59XG4iXSwibmFtZXMiOlsiZmluZFJ1bGVCeVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlcyIsIm5hbWUiLCJydWxlIiwiZmluZCIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7O0VBQWI7UUFFZ0JBLGtCQUFrQixHQUFsQkEsa0JBQWtCLEFBRmxDO0FBRU8sU0FBU0Esa0JBQWtCLENBQUNDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO0lBQ2xELElBQU1DLElBQUksR0FBR0YsUUFBUSxFQUNmRyxLQUFJLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLFNBQUNELElBQUksRUFBSztRQUMxQixJQUFNSCxVQUFRLEdBQUdHLElBQUksQ0FBQ0UsT0FBTyxFQUFFLEFBQUM7UUFFaEMsSUFBSUwsVUFBUSxLQUFLRSxJQUFJLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsSUFBSSxJQUFJLEFBQUMsRUFBQyxHQUFHO0lBRXJCLE9BQU9DLEtBQUksQ0FBQztDQUNiIn0=