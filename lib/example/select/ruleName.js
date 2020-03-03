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

var RuleNameSelect = /*#__PURE__*/function (_InputElement) {
  _inherits(RuleNameSelect, _InputElement);

  function RuleNameSelect() {
    _classCallCheck(this, RuleNameSelect);

    return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameSelect).apply(this, arguments));
  }

  _createClass(RuleNameSelect, [{
    key: "getSelectedOptionValue",
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      return [React.createElement("option", {
        value: "term",
        selected: true
      }, "term"), React.createElement("option", {
        value: "expression"
      }, "expression"), React.createElement("option", {
        value: "statement"
      }, "statement"), React.createElement("option", {
        value: "metastatement"
      }, "metastatement")];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getRuleName = this.getSelectedOptionValue.bind(this); ///

      return {
        getRuleName: getRuleName
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(RuleNameSelect, properties);
    }
  }]);

  return RuleNameSelect;
}(InputElement);

Object.assign(RuleNameSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'rule-name',
    spellCheck: false
  }
});
module.exports = RuleNameSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiUnVsZU5hbWVTZWxlY3QiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJnZXRSdWxlTmFtZSIsImdldFNlbGVjdGVkT3B0aW9uVmFsdWUiLCJiaW5kIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsYzs7Ozs7Ozs7Ozs7NkNBQ3FCO0FBQ3ZCLFVBQU1DLFVBQVUsR0FBRyxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsbUJBQW1CLEdBQUdGLFVBQVUsQ0FBQ0csS0FEdkMsQ0FEdUIsQ0FFdUI7O0FBRTlDLGFBQU9ELG1CQUFQO0FBQ0Q7OztrQ0FFYUUsVSxFQUFZO0FBQ3hCLGFBQVEsQ0FFTjtBQUFRLFFBQUEsS0FBSyxFQUFDLE1BQWQ7QUFBcUIsUUFBQSxRQUFRO0FBQTdCLGdCQUZNLEVBR047QUFBUSxRQUFBLEtBQUssRUFBQztBQUFkLHNCQUhNLEVBSU47QUFBUSxRQUFBLEtBQUssRUFBQztBQUFkLHFCQUpNLEVBS047QUFBUSxRQUFBLEtBQUssRUFBQztBQUFkLHlCQUxNLENBQVI7QUFRRDs7O29DQUVlO0FBQ2QsVUFBTUMsV0FBVyxHQUFHLEtBQUtDLHNCQUFMLENBQTRCQyxJQUE1QixDQUFpQyxJQUFqQyxDQUFwQixDQURjLENBQzhDOztBQUU1RCxhQUFRO0FBQ05GLFFBQUFBLFdBQVcsRUFBWEE7QUFETSxPQUFSO0FBR0Q7OzttQ0FFcUJELFUsRUFBWTtBQUFFLGFBQU9OLFlBQVksQ0FBQ1UsY0FBYixDQUE0QlQsY0FBNUIsRUFBNENLLFVBQTVDLENBQVA7QUFBaUU7Ozs7RUEzQjFFTixZOztBQThCN0JXLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWCxjQUFkLEVBQThCO0FBQzVCWSxFQUFBQSxPQUFPLEVBQUUsUUFEbUI7QUFFNUJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUUsV0FETTtBQUVqQkMsSUFBQUEsVUFBVSxFQUFFO0FBRks7QUFGUyxDQUE5QjtBQVFBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJqQixjQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFJ1bGVOYW1lU2VsZWN0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IGRvbUVsZW1lbnQudmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uVmFsdWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInRlcm1cIiBzZWxlY3RlZCA+dGVybTwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJleHByZXNzaW9uXCI+ZXhwcmVzc2lvbjwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJzdGF0ZW1lbnRcIj5zdGF0ZW1lbnQ8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPVwibWV0YXN0YXRlbWVudFwiPm1ldGFzdGF0ZW1lbnQ8L29wdGlvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRSdWxlTmFtZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UnVsZU5hbWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUnVsZU5hbWVTZWxlY3QsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oUnVsZU5hbWVTZWxlY3QsIHtcbiAgdGFnTmFtZTogJ3NlbGVjdCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAncnVsZS1uYW1lJyxcbiAgICBzcGVsbENoZWNrOiBmYWxzZVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlTmFtZVNlbGVjdDtcbiJdfQ==