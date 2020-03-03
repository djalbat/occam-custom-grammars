'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy');

var InputElement = easy.InputElement;

var TopmostRuleNameInput = /*#__PURE__*/function (_InputElement) {
  _inherits(TopmostRuleNameInput, _InputElement);

  function TopmostRuleNameInput() {
    _classCallCheck(this, TopmostRuleNameInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(TopmostRuleNameInput).apply(this, arguments));
  }

  _createClass(TopmostRuleNameInput, [{
    key: "getTopmostRuleName",
    value: function getTopmostRuleName() {
      var value = this.getValue(),
          topmostRuleName = value; ///

      return topmostRuleName;
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getTopmostRuleName = this.getTopmostRuleName.bind(this);
      return {
        getTopmostRuleName: getTopmostRuleName
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(TopmostRuleNameInput, properties);
    }
  }]);

  return TopmostRuleNameInput;
}(InputElement);

Object.assign(TopmostRuleNameInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'topmost-rule-name',
    spellCheck: 'false'
  }
});
module.exports = TopmostRuleNameInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcG1vc3RSdWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlRvcG1vc3RSdWxlTmFtZUlucHV0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInRvcG1vc3RSdWxlTmFtZSIsImdldFRvcG1vc3RSdWxlTmFtZSIsImJpbmQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsb0I7Ozs7Ozs7Ozs7O3lDQUNpQjtBQUNuQixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsZUFBZSxHQUFHRixLQUR4QixDQURtQixDQUVhOztBQUVoQyxhQUFPRSxlQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLGtCQUFrQixHQUFHLEtBQUtBLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixDQUEzQjtBQUVBLGFBQVE7QUFDTkQsUUFBQUEsa0JBQWtCLEVBQWxCQTtBQURNLE9BQVI7QUFHRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT1AsWUFBWSxDQUFDUSxjQUFiLENBQTRCUCxvQkFBNUIsRUFBa0RNLFVBQWxELENBQVA7QUFBdUU7Ozs7RUFoQjFFUCxZOztBQW1CbkNTLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVCxvQkFBZCxFQUFvQztBQUNsQ1UsRUFBQUEsT0FBTyxFQUFFLE9BRHlCO0FBRWxDQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFLG1CQURNO0FBRWpCQyxJQUFBQSxVQUFVLEVBQUU7QUFGSztBQUZlLENBQXBDO0FBUUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmYsb0JBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgVG9wbW9zdFJ1bGVOYW1lSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRUb3Btb3N0UnVsZU5hbWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgdG9wbW9zdFJ1bGVOYW1lID0gdmFsdWU7ICAvLy9cblxuICAgIHJldHVybiB0b3Btb3N0UnVsZU5hbWU7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFRvcG1vc3RSdWxlTmFtZSA9IHRoaXMuZ2V0VG9wbW9zdFJ1bGVOYW1lLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFRvcG1vc3RSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhUb3Btb3N0UnVsZU5hbWVJbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihUb3Btb3N0UnVsZU5hbWVJbnB1dCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3RvcG1vc3QtcnVsZS1uYW1lJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcG1vc3RSdWxlTmFtZUlucHV0O1xuIl19