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
const _necessary = require("necessary");
const { filter } = _necessary.arrayUtilities;
function rulesFromParser(parser) {
    const ruleMap = parser.getRuleMap(), startRule = parser.getStartRule(), startRuleName = startRule.getName(), ruleMapValues = Object.values(ruleMap), rules = ruleMapValues; ///
    filter(rules, (rule)=>{
        const ruleName = rule.getName();
        if (ruleName !== startRuleName) {
            return true;
        }
    });
    rules.unshift(startRule);
    return rules;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3V0aWxpdGllcy9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbVBhcnNlcihwYXJzZXIpIHtcbiAgY29uc3QgcnVsZU1hcCA9IHBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHN0YXJ0UnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVNYXBWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHJ1bGVNYXApLFxuICAgICAgICBydWxlcyA9IHJ1bGVNYXBWYWx1ZXM7ICAvLy9cblxuICBmaWx0ZXIocnVsZXMsIChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGlmIChydWxlTmFtZSAhPT0gc3RhcnRSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBydWxlcy51bnNoaWZ0KHN0YXJ0UnVsZSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbVBhcnNlciIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicGFyc2VyIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVNYXBWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJydWxlcyIsInJ1bGUiLCJydWxlTmFtZSIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1nQkE7OztlQUFBQTs7OzJCQUplO0FBRS9CLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjO0FBRTFCLFNBQVNGLGdCQUFnQkcsTUFBTTtJQUNwQyxNQUFNQyxVQUFVRCxPQUFPRSxVQUFVLElBQzNCQyxZQUFZSCxPQUFPSSxZQUFZLElBQy9CQyxnQkFBZ0JGLFVBQVVHLE9BQU8sSUFDakNDLGdCQUFnQkMsT0FBT0MsTUFBTSxDQUFDUixVQUM5QlMsUUFBUUgsZUFBZ0IsR0FBRztJQUVqQ1QsT0FBT1ksT0FBTyxDQUFDQztRQUNiLE1BQU1DLFdBQVdELEtBQUtMLE9BQU87UUFFN0IsSUFBSU0sYUFBYVAsZUFBZTtZQUM5QixPQUFPO1FBQ1Q7SUFDRjtJQUVBSyxNQUFNRyxPQUFPLENBQUNWO0lBRWQsT0FBT087QUFDVCJ9