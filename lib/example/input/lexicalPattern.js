"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _input = _interopRequireDefault(require("../input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var LexicalPatternInput = /*#__PURE__*/function (_Input) {
  _inherits(LexicalPatternInput, _Input);

  var _super = _createSuper(LexicalPatternInput);

  function LexicalPatternInput() {
    _classCallCheck(this, LexicalPatternInput);

    return _super.apply(this, arguments);
  }

  _createClass(LexicalPatternInput, [{
    key: "getLexicalPattern",
    value: function getLexicalPattern() {
      var value = this.getValue(),
          lexicalPattern = value; ///

      return lexicalPattern;
    }
  }, {
    key: "setLexicalPattern",
    value: function setLexicalPattern(lexicalPattern) {
      var value = lexicalPattern; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getLexicalPattern = this.getLexicalPattern.bind(this),
          setLexicalPattern = this.setLexicalPattern.bind(this),
          setLexicalPatternReadOnly = this.setReadOnly.bind(this); ///;

      return {
        getLexicalPattern: getLexicalPattern,
        setLexicalPattern: setLexicalPattern,
        setLexicalPatternReadOnly: setLexicalPatternReadOnly
      };
    }
  }]);

  return LexicalPatternInput;
}(_input["default"]);

exports["default"] = LexicalPatternInput;

_defineProperty(LexicalPatternInput, "defaultProperties", {
  className: "lexical-pattern",
  spellCheck: "false"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGljYWxQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJ2YWx1ZSIsImdldFZhbHVlIiwibGV4aWNhbFBhdHRlcm4iLCJzZXRWYWx1ZSIsImdldExleGljYWxQYXR0ZXJuIiwiYmluZCIsInNldExleGljYWxQYXR0ZXJuIiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsInNldFJlYWRPbmx5IiwiSW5wdXQiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxtQjs7Ozs7Ozs7Ozs7Ozt3Q0FDQztBQUNsQixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsY0FBYyxHQUFHRixLQUR2QixDQURrQixDQUVZOztBQUU5QixhQUFPRSxjQUFQO0FBQ0Q7OztzQ0FFaUJBLGMsRUFBZ0I7QUFDaEMsVUFBTUYsS0FBSyxHQUFHRSxjQUFkLENBRGdDLENBQ0Y7O0FBRTlCLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxpQkFBaUIsR0FBRyxLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBMUI7QUFBQSxVQUNNQyxpQkFBaUIsR0FBRyxLQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FEMUI7QUFBQSxVQUVNRSx5QkFBeUIsR0FBRyxLQUFLQyxXQUFMLENBQWlCSCxJQUFqQixDQUFzQixJQUF0QixDQUZsQyxDQURjLENBR2lEOztBQUUvRCxhQUFRO0FBQ05ELFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBRE07QUFFTkUsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFGTTtBQUdOQyxRQUFBQSx5QkFBeUIsRUFBekJBO0FBSE0sT0FBUjtBQUtEOzs7O0VBeEI4Q0UsaUI7Ozs7Z0JBQTVCVixtQix1QkEwQlE7QUFDekJXLEVBQUFBLFNBQVMsRUFBRSxpQkFEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2lucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExleGljYWxQYXR0ZXJuSW5wdXQgZXh0ZW5kcyBJbnB1dCB7XG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGxleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRMZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsUGF0dGVybiA9IHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAvLy87XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxQYXR0ZXJuLFxuICAgICAgc2V0TGV4aWNhbFBhdHRlcm4sXG4gICAgICBzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxleGljYWwtcGF0dGVyblwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl19