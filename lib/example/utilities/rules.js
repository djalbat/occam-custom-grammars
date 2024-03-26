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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3V0aWxpdGllcy9ydWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZmlsdGVyIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzRnJvbVBhcnNlcihwYXJzZXIpIHtcbiAgY29uc3QgcnVsZU1hcCA9IHBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHN0YXJ0UnVsZS5nZXROYW1lKCksXG4gICAgICAgIHJ1bGVNYXBWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHJ1bGVNYXApLFxuICAgICAgICBydWxlcyA9IHJ1bGVNYXBWYWx1ZXM7ICAvLy9cblxuICBmaWx0ZXIocnVsZXMsIChydWxlKSA9PiB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgIGlmIChydWxlTmFtZSAhPT0gc3RhcnRSdWxlTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBydWxlcy51bnNoaWZ0KHN0YXJ0UnVsZSk7XG5cbiAgcmV0dXJuIHJ1bGVzO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbVBhcnNlciIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwicGFyc2VyIiwicnVsZU1hcCIsImdldFJ1bGVNYXAiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0TmFtZSIsInJ1bGVNYXBWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJydWxlcyIsInJ1bGUiLCJydWxlTmFtZSIsInVuc2hpZnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTWdCQTs7O2VBQUFBOzs7eUJBSmU7QUFFL0IsSUFBTSxBQUFFQyxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFRCxTQUFTRCxnQkFBZ0JHLE1BQU07SUFDcEMsSUFBTUMsVUFBVUQsT0FBT0UsVUFBVSxJQUMzQkMsWUFBWUgsT0FBT0ksWUFBWSxJQUMvQkMsZ0JBQWdCRixVQUFVRyxPQUFPLElBQ2pDQyxnQkFBZ0JDLE9BQU9DLE1BQU0sQ0FBQ1IsVUFDOUJTLFFBQVFILGVBQWdCLEdBQUc7SUFFakNULE9BQU9ZLE9BQU8sU0FBQ0M7UUFDYixJQUFNQyxXQUFXRCxLQUFLTCxPQUFPO1FBRTdCLElBQUlNLGFBQWFQLGVBQWU7WUFDOUIsT0FBTztRQUNUO0lBQ0Y7SUFFQUssTUFBTUcsT0FBTyxDQUFDVjtJQUVkLE9BQU9PO0FBQ1QifQ==