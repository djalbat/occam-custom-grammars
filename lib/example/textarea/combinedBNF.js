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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

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
    key: "clearCombinedBNF",
    value: function clearCombinedBNF() {
      var value = "";
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getCombinedBNF = this.getCombinedBNF.bind(this),
          clearCombinedBNF = this.clearCombinedBNF.bind(this);
      return {
        getCombinedBNF: getCombinedBNF,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJpbmVkQk5GLmpzIl0sIm5hbWVzIjpbIkNvbWJpbmVkQk5GVGV4dGFyZWEiLCJ2YWx1ZSIsImdldFZhbHVlIiwiY29tYmluZWRCTkYiLCJzZXRWYWx1ZSIsImdldENvbWJpbmVkQk5GIiwiYmluZCIsImNsZWFyQ29tYmluZWRCTkYiLCJUZXh0YXJlYSIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7Ozs7O3FDQUNGO0FBQ2YsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFdBQVcsR0FBR0YsS0FEcEIsQ0FEZSxDQUVZOztBQUUzQixhQUFPRSxXQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUYsS0FBSyxHQUFHLEVBQWQ7QUFFQSxXQUFLRyxRQUFMLENBQWNILEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUksY0FBYyxHQUFHLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXZCO0FBQUEsVUFDTUMsZ0JBQWdCLEdBQUcsS0FBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCLENBRHpCO0FBR0EsYUFBUTtBQUNORCxRQUFBQSxjQUFjLEVBQWRBLGNBRE07QUFFTkUsUUFBQUEsZ0JBQWdCLEVBQWhCQTtBQUZNLE9BQVI7QUFJRDs7OztFQXRCOENDLG9COzs7O2dCQUE1QlIsbUIsdUJBd0JRO0FBQ3pCUyxFQUFBQSxTQUFTLEVBQUUsY0FEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmVkQk5GVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldENvbWJpbmVkQk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbWJpbmVkQk5GID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmVkQk5GO1xuICB9XG5cbiAgY2xlYXJDb21iaW5lZEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFwiXCI7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q29tYmluZWRCTkYgPSB0aGlzLmdldENvbWJpbmVkQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJDb21iaW5lZEJORiA9IHRoaXMuY2xlYXJDb21iaW5lZEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRDb21iaW5lZEJORixcbiAgICAgIGNsZWFyQ29tYmluZWRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29tYmluZWQtYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG4iXX0=