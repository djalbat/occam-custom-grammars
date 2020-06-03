"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findRuleByRuleName = findRuleByRuleName;

function findRuleByRuleName(ruleName, rules) {
  var name = ruleName,
      ///
  rule = rules.find(function (rule) {
    var ruleName = rule.getName();

    if (ruleName === name) {
      return true;
    }
  }) || null; ///

  return rule;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImZpbmRSdWxlQnlSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZXMiLCJuYW1lIiwicnVsZSIsImZpbmQiLCJnZXROYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVPLFNBQVNBLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQ0MsS0FBdEMsRUFBNkM7QUFDbEQsTUFBTUMsSUFBSSxHQUFHRixRQUFiO0FBQUEsTUFBd0I7QUFDbEJHLEVBQUFBLElBQUksR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVcsVUFBQ0QsSUFBRCxFQUFVO0FBQzFCLFFBQU1ILFFBQVEsR0FBR0csSUFBSSxDQUFDRSxPQUFMLEVBQWpCOztBQUVBLFFBQUlMLFFBQVEsS0FBS0UsSUFBakIsRUFBdUI7QUFDckIsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQU5NLEtBTUQsSUFQWixDQURrRCxDQVFoQzs7QUFFbEIsU0FBT0MsSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUnVsZUJ5UnVsZU5hbWUocnVsZU5hbWUsIHJ1bGVzKSB7XG4gIGNvbnN0IG5hbWUgPSBydWxlTmFtZSwgIC8vL1xuICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gcnVsZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICBpZiAocnVsZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgcmV0dXJuIHJ1bGU7XG59XG4iXX0=