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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    key: "getName",
    value: function getName() {
      var value = this.getValue(),
          name = value; ///

      return name;
    }
  }, {
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
      var getName = this.getName.bind(this); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUuanMiXSwibmFtZXMiOlsiTmFtZVNlbGVjdCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJuYW1lIiwicHJvcGVydGllcyIsImRlZmF1bHROYW1lIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiZGVmYXVsdFZhbHVlIiwidXNlckRlZmluZWROYW1lIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJ1c2VyRGVmaW5lZFZhbHVlIiwiZ2V0TmFtZSIsImJpbmQiLCJTZWxlY3QiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7OzhCQUNUO0FBQ1IsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLElBQUksR0FBR0YsS0FEYixDQURRLENBRVk7O0FBRXBCLGFBQU9FLElBQVA7QUFDRDs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsVUFBTUMsV0FBVyxHQUFHQyxzQ0FBcEI7QUFBQSxVQUFrRDtBQUM1Q0MsTUFBQUEsWUFBWSxHQUFHRixXQURyQjtBQUFBLFVBQ2tDO0FBQzVCRyxNQUFBQSxlQUFlLEdBQUdDLDJDQUZ4QjtBQUFBLFVBRTBEO0FBQ3BEQyxNQUFBQSxnQkFBZ0IsR0FBR0YsZUFIekIsQ0FEd0IsQ0FJa0I7O0FBRTFDLGFBQVEsY0FFTjtBQUFRLFFBQUEsS0FBSyxFQUFFRCxZQUFmO0FBQTZCLFFBQUEsUUFBUTtBQUFyQyxTQUNHRixXQURILENBRk0sZUFLTjtBQUFRLFFBQUEsS0FBSyxFQUFFSztBQUFmLFNBQ0dGLGVBREgsQ0FMTSxDQUFSO0FBVUQ7OztvQ0FFZTtBQUNkLFVBQU1HLE9BQU8sR0FBRyxLQUFLQSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBaEIsQ0FEYyxDQUMyQjs7QUFFekMsYUFBUTtBQUNORCxRQUFBQSxPQUFPLEVBQVBBO0FBRE0sT0FBUjtBQUdEOzs7O0VBaENxQ0Usa0I7Ozs7Z0JBQW5CYixVLHVCQWtDUTtBQUN6QmMsRUFBQUEsU0FBUyxFQUFFLE1BRGM7QUFFekJDLEVBQUFBLFVBQVUsRUFBRTtBQUZhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi4vc2VsZWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hbWVTZWxlY3QgZXh0ZW5kcyBTZWxlY3Qge1xuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIG5hbWUgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGRlZmF1bHROYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCAgLy8vXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gZGVmYXVsdE5hbWUsIC8vL1xuICAgICAgICAgIHVzZXJEZWZpbmVkTmFtZSA9IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FLCAvLy9cbiAgICAgICAgICB1c2VyRGVmaW5lZFZhbHVlID0gdXNlckRlZmluZWROYW1lOyAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8b3B0aW9uIHZhbHVlPXtkZWZhdWx0VmFsdWV9IHNlbGVjdGVkID5cbiAgICAgICAge2RlZmF1bHROYW1lfVxuICAgICAgPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT17dXNlckRlZmluZWRWYWx1ZX0+XG4gICAgICAgIHt1c2VyRGVmaW5lZE5hbWV9XG4gICAgICA8L29wdGlvbj4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TmFtZSA9IHRoaXMuZ2V0TmFtZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJuYW1lXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH1cbn1cbiJdfQ==