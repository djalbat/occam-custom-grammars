"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findRuleByRuleName = findRuleByRuleName;
function findRuleByRuleName(ruleName, rules) {
    var name = ruleName, rule = rules.find(function(rule) {
        var ruleName = rule.getName();
        if (ruleName === name) {
            return true;
        }
    }) || null; ///
    return rule;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWUuanMiXSwibmFtZXMiOlsiZmluZFJ1bGVCeVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlcyIsIm5hbWUiLCJydWxlIiwiZmluZCIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFFSSxrQkFBa0IsR0FBbEIsa0JBQWtCO1NBQWxCLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNuRCxHQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFDZixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQVAsSUFBSSxFQUFLLENBQUM7UUFDM0IsR0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTztRQUU3QixFQUFFLEVBQUUsUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJO1FBQ2IsQ0FBQztJQUNILENBQUMsS0FBSyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRXJCLE1BQU0sQ0FBQyxJQUFJO0FBQ2IsQ0FBQyJ9