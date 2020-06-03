"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

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

var CombinedBNFTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(CombinedBNFTextarea, _Textarea);

  var _super = _createSuper(CombinedBNFTextarea);

  function CombinedBNFTextarea() {
    _classCallCheck(this, CombinedBNFTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(CombinedBNFTextarea, [{
    key: "getCombinedBNF",
    value: function getCombinedBNF() {
      var value = this.getValue(),
          combinedBNF = value; ///

      return combinedBNF;
    }
  }, {
    key: "setCombinedBNF",
    value: function setCombinedBNF(combinedBNF) {
      var value = combinedBNF; ///

      this.setValue(value);
    }
  }, {
    key: "clearCombinedBNF",
    value: function clearCombinedBNF() {
      var value = "";
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getCombinedBNF = this.getCombinedBNF.bind(this),
          setCombinedBNF = this.setCombinedBNF.bind(this),
          clearCombinedBNF = this.clearCombinedBNF.bind(this);
      return {
        getCombinedBNF: getCombinedBNF,
        setCombinedBNF: setCombinedBNF,
        clearCombinedBNF: clearCombinedBNF
      };
    }
  }]);

  return CombinedBNFTextarea;
}(_textarea["default"]);

exports["default"] = CombinedBNFTextarea;

_defineProperty(CombinedBNFTextarea, "defaultProperties", {
  className: "combined-bnf",
  spellCheck: "false"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJpbmVkQk5GLmpzIl0sIm5hbWVzIjpbIkNvbWJpbmVkQk5GVGV4dGFyZWEiLCJ2YWx1ZSIsImdldFZhbHVlIiwiY29tYmluZWRCTkYiLCJzZXRWYWx1ZSIsImdldENvbWJpbmVkQk5GIiwiYmluZCIsInNldENvbWJpbmVkQk5GIiwiY2xlYXJDb21iaW5lZEJORiIsIlRleHRhcmVhIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7cUNBQ0Y7QUFDZixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsV0FBVyxHQUFHRixLQURwQixDQURlLENBRVk7O0FBRTNCLGFBQU9FLFdBQVA7QUFDRDs7O21DQUVjQSxXLEVBQWE7QUFDMUIsVUFBTUYsS0FBSyxHQUFHRSxXQUFkLENBRDBCLENBQ0U7O0FBRTVCLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1BLEtBQUssR0FBRyxFQUFkO0FBRUEsV0FBS0csUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1JLGNBQWMsR0FBRyxLQUFLQSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUF2QjtBQUFBLFVBQ01DLGNBQWMsR0FBRyxLQUFLQSxjQUFMLENBQW9CRCxJQUFwQixDQUF5QixJQUF6QixDQUR2QjtBQUFBLFVBRU1FLGdCQUFnQixHQUFHLEtBQUtBLGdCQUFMLENBQXNCRixJQUF0QixDQUEyQixJQUEzQixDQUZ6QjtBQUlBLGFBQVE7QUFDTkQsUUFBQUEsY0FBYyxFQUFkQSxjQURNO0FBRU5FLFFBQUFBLGNBQWMsRUFBZEEsY0FGTTtBQUdOQyxRQUFBQSxnQkFBZ0IsRUFBaEJBO0FBSE0sT0FBUjtBQUtEOzs7O0VBOUI4Q0Msb0I7Ozs7Z0JBQTVCVCxtQix1QkFnQ1E7QUFDekJVLEVBQUFBLFNBQVMsRUFBRSxjQURjO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUU7QUFGYSxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluZWRCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Q29tYmluZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgY29tYmluZWRCTkYgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gY29tYmluZWRCTkY7XG4gIH1cblxuICBzZXRDb21iaW5lZEJORihjb21iaW5lZEJORikge1xuICAgIGNvbnN0IHZhbHVlID0gY29tYmluZWRCTkY7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJDb21iaW5lZEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFwiXCI7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29tYmluZWRCTkYgPSB0aGlzLmdldENvbWJpbmVkQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Q29tYmluZWRCTkYgPSB0aGlzLnNldENvbWJpbmVkQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJDb21iaW5lZEJORiA9IHRoaXMuY2xlYXJDb21iaW5lZEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRDb21iaW5lZEJORixcbiAgICAgIHNldENvbWJpbmVkQk5GLFxuICAgICAgY2xlYXJDb21iaW5lZEJORlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb21iaW5lZC1ibmZcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdfQ==