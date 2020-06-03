"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findRule = findRule;

function findRule(ruleName, rules) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuanMiXSwibmFtZXMiOlsiZmluZFJ1bGUiLCJydWxlTmFtZSIsInJ1bGVzIiwibmFtZSIsInJ1bGUiLCJmaW5kIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFTyxTQUFTQSxRQUFULENBQWtCQyxRQUFsQixFQUE0QkMsS0FBNUIsRUFBbUM7QUFDeEMsTUFBTUMsSUFBSSxHQUFHRixRQUFiO0FBQUEsTUFBd0I7QUFDbEJHLEVBQUFBLElBQUksR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVcsVUFBQ0QsSUFBRCxFQUFVO0FBQzFCLFFBQU1ILFFBQVEsR0FBR0csSUFBSSxDQUFDRSxPQUFMLEVBQWpCOztBQUVBLFFBQUlMLFFBQVEsS0FBS0UsSUFBakIsRUFBdUI7QUFDckIsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQU5NLEtBTUQsSUFQWixDQUR3QyxDQVF0Qjs7QUFFbEIsU0FBT0MsSUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUnVsZShydWxlTmFtZSwgcnVsZXMpIHtcbiAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgICAgIGlmIChydWxlTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsOyAvLy9cblxuICByZXR1cm4gcnVsZTtcbn1cbiJdfQ==