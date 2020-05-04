"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _select = _interopRequireDefault(require("../select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RuleNameSelect = /*#__PURE__*/function (_Select) {
  _inherits(RuleNameSelect, _Select);

  var _super = _createSuper(RuleNameSelect);

  function RuleNameSelect() {
    _classCallCheck(this, RuleNameSelect);

    return _super.apply(this, arguments);
  }

  _createClass(RuleNameSelect, [{
    key: "childElements",
    value: function childElements(properties) {
      return [/*#__PURE__*/React.createElement("option", {
        value: "term",
        selected: true
      }, "term"), /*#__PURE__*/React.createElement("option", {
        value: "term",
        selected: true
      }, "expression"), /*#__PURE__*/React.createElement("option", {
        value: "term",
        selected: true
      }, "statement"), /*#__PURE__*/React.createElement("option", {
        value: "term",
        selected: true
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
  }]);

  return RuleNameSelect;
}(_select["default"]);

exports["default"] = RuleNameSelect;

_defineProperty(RuleNameSelect, "defaultProperties", {
  className: "rule-name",
  spellCheck: "false"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGVOYW1lU2VsZWN0IiwicHJvcGVydGllcyIsImdldFJ1bGVOYW1lIiwiZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSIsImJpbmQiLCJTZWxlY3QiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7O2tDQUNMQyxVLEVBQVk7QUFDeEIsYUFBUSxjQUVOO0FBQVEsUUFBQSxLQUFLLEVBQUMsTUFBZDtBQUFxQixRQUFBLFFBQVE7QUFBN0IsZ0JBRk0sZUFLTjtBQUFRLFFBQUEsS0FBSyxFQUFDLE1BQWQ7QUFBcUIsUUFBQSxRQUFRO0FBQTdCLHNCQUxNLGVBUU47QUFBUSxRQUFBLEtBQUssRUFBQyxNQUFkO0FBQXFCLFFBQUEsUUFBUTtBQUE3QixxQkFSTSxlQVdOO0FBQVEsUUFBQSxLQUFLLEVBQUMsTUFBZDtBQUFxQixRQUFBLFFBQVE7QUFBN0IseUJBWE0sQ0FBUjtBQWdCRDs7O29DQUVlO0FBQ2QsVUFBTUMsV0FBVyxHQUFHLEtBQUtDLHNCQUFMLENBQTRCQyxJQUE1QixDQUFpQyxJQUFqQyxDQUFwQixDQURjLENBQzhDOztBQUU1RCxhQUFRO0FBQ05GLFFBQUFBLFdBQVcsRUFBWEE7QUFETSxPQUFSO0FBR0Q7Ozs7RUExQnlDRyxrQjs7OztnQkFBdkJMLGMsdUJBNEJRO0FBQ3pCTSxFQUFBQSxTQUFTLEVBQUUsV0FEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9zZWxlY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZU5hbWVTZWxlY3QgZXh0ZW5kcyBTZWxlY3Qge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInRlcm1cIiBzZWxlY3RlZCA+XG4gICAgICAgIHRlcm1cbiAgICAgIDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJ0ZXJtXCIgc2VsZWN0ZWQgPlxuICAgICAgICBleHByZXNzaW9uXG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPVwidGVybVwiIHNlbGVjdGVkID5cbiAgICAgICAgc3RhdGVtZW50XG4gICAgICA8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPVwidGVybVwiIHNlbGVjdGVkID5cbiAgICAgICAgbWV0YXN0YXRlbWVudFxuICAgICAgPC9vcHRpb24+LFxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJ1bGVOYW1lID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJydWxlLW5hbWVcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfVxufVxuIl19