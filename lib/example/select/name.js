"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _select = _interopRequireDefault(require("../select"));

var _constants = require("../../constants");

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

var NameSelect = /*#__PURE__*/function (_Select) {
  _inherits(NameSelect, _Select);

  var _super = _createSuper(NameSelect);

  function NameSelect() {
    _classCallCheck(this, NameSelect);

    return _super.apply(this, arguments);
  }

  _createClass(NameSelect, [{
    key: "childElements",
    value: function childElements(properties) {
      var defaultName = _constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
          ///
      defaultValue = defaultName,
          ///
      userDefinedName = _constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME,
          ///
      userDefinedValue = userDefinedName; ///

      return [/*#__PURE__*/React.createElement("option", {
        value: defaultValue,
        selected: true
      }, defaultName), /*#__PURE__*/React.createElement("option", {
        value: userDefinedValue
      }, userDefinedName)];
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getName = this.getSelectedOptionValue.bind(this); ///

      return {
        getName: getName
      };
    }
  }]);

  return NameSelect;
}(_select["default"]);

exports["default"] = NameSelect;

_defineProperty(NameSelect, "defaultProperties", {
  className: "name",
  spellCheck: "false"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUuanMiXSwibmFtZXMiOlsiTmFtZVNlbGVjdCIsInByb3BlcnRpZXMiLCJkZWZhdWx0TmFtZSIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsImRlZmF1bHRWYWx1ZSIsInVzZXJEZWZpbmVkTmFtZSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIiwidXNlckRlZmluZWRWYWx1ZSIsImdldE5hbWUiLCJnZXRTZWxlY3RlZE9wdGlvblZhbHVlIiwiYmluZCIsIlNlbGVjdCIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7a0NBQ0xDLFUsRUFBWTtBQUN4QixVQUFNQyxXQUFXLEdBQUdDLHNDQUFwQjtBQUFBLFVBQWtEO0FBQzVDQyxNQUFBQSxZQUFZLEdBQUdGLFdBRHJCO0FBQUEsVUFDa0M7QUFDNUJHLE1BQUFBLGVBQWUsR0FBR0MsMkNBRnhCO0FBQUEsVUFFMEQ7QUFDcERDLE1BQUFBLGdCQUFnQixHQUFHRixlQUh6QixDQUR3QixDQUlrQjs7QUFFMUMsYUFBUSxjQUVOO0FBQVEsUUFBQSxLQUFLLEVBQUVELFlBQWY7QUFBNkIsUUFBQSxRQUFRO0FBQXJDLFNBQ0dGLFdBREgsQ0FGTSxlQUtOO0FBQVEsUUFBQSxLQUFLLEVBQUVLO0FBQWYsU0FDR0YsZUFESCxDQUxNLENBQVI7QUFVRDs7O29DQUVlO0FBQ2QsVUFBTUcsT0FBTyxHQUFHLEtBQUtDLHNCQUFMLENBQTRCQyxJQUE1QixDQUFpQyxJQUFqQyxDQUFoQixDQURjLENBQzBDOztBQUV4RCxhQUFRO0FBQ05GLFFBQUFBLE9BQU8sRUFBUEE7QUFETSxPQUFSO0FBR0Q7Ozs7RUF6QnFDRyxrQjs7OztnQkFBbkJYLFUsdUJBMkJRO0FBQ3pCWSxFQUFBQSxTQUFTLEVBQUUsTUFEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9zZWxlY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmFtZVNlbGVjdCBleHRlbmRzIFNlbGVjdCB7XG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGRlZmF1bHROYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCAgLy8vXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gZGVmYXVsdE5hbWUsIC8vL1xuICAgICAgICAgIHVzZXJEZWZpbmVkTmFtZSA9IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FLCAvLy9cbiAgICAgICAgICB1c2VyRGVmaW5lZFZhbHVlID0gdXNlckRlZmluZWROYW1lOyAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8b3B0aW9uIHZhbHVlPXtkZWZhdWx0VmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge2RlZmF1bHROYW1lfVxuICAgICAgPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17dXNlckRlZmluZWRWYWx1ZX0+XG4gICAgICAgIHt1c2VyRGVmaW5lZE5hbWV9XG4gICAgICA8L29wdGlvbj4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TmFtZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiJdfQ==