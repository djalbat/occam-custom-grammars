'use strict';

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

var easy = require('easy');

var InputElement = easy.InputElement;

var LexicalPatternInput = /*#__PURE__*/function (_InputElement) {
  _inherits(LexicalPatternInput, _InputElement);

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
      var value = lexicalPattern || ''; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getLexicalPattern = this.getLexicalPattern.bind(this),
          setLexicalPattern = this.setLexicalPattern.bind(this),
          setLexicalPatternReadOnly = this.setReadOnly.bind(this); ///

      return {
        getLexicalPattern: getLexicalPattern,
        setLexicalPattern: setLexicalPattern,
        setLexicalPatternReadOnly: setLexicalPatternReadOnly
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(LexicalPatternInput, properties);
    }
  }]);

  return LexicalPatternInput;
}(InputElement);

Object.assign(LexicalPatternInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'lexical-pattern',
    spellCheck: 'false'
  }
});
module.exports = LexicalPatternInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGljYWxQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsUGF0dGVybiIsInNldFZhbHVlIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJiaW5kIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5Iiwic2V0UmVhZE9ubHkiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLG1COzs7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsY0FBYyxHQUFHRixLQUR2QixDQURrQixDQUVhOztBQUUvQixhQUFPRSxjQUFQO0FBQ0Q7OztzQ0FFaUJBLGMsRUFBZ0I7QUFDaEMsVUFBTUYsS0FBSyxHQUFHRSxjQUFjLElBQUksRUFBaEMsQ0FEZ0MsQ0FDSzs7QUFFckMsV0FBS0MsUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1JLGlCQUFpQixHQUFHLEtBQUtBLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUExQjtBQUFBLFVBQ01DLGlCQUFpQixHQUFHLEtBQUtBLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUQxQjtBQUFBLFVBRU1FLHlCQUF5QixHQUFHLEtBQUtDLFdBQUwsQ0FBaUJILElBQWpCLENBQXNCLElBQXRCLENBRmxDLENBRGMsQ0FHaUQ7O0FBRS9ELGFBQVE7QUFDTkQsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFETTtBQUVORSxRQUFBQSxpQkFBaUIsRUFBakJBLGlCQUZNO0FBR05DLFFBQUFBLHlCQUF5QixFQUF6QkE7QUFITSxPQUFSO0FBS0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9YLFlBQVksQ0FBQ1ksY0FBYixDQUE0QlgsbUJBQTVCLEVBQWlEVSxVQUFqRCxDQUFQO0FBQXNFOzs7O0VBMUIxRVgsWTs7QUE2QmxDYSxNQUFNLENBQUNDLE1BQVAsQ0FBY2IsbUJBQWQsRUFBbUM7QUFDakNjLEVBQUFBLE9BQU8sRUFBRSxPQUR3QjtBQUVqQ0MsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRSxpQkFETTtBQUVqQkMsSUFBQUEsVUFBVSxFQUFFO0FBRks7QUFGYyxDQUFuQztBQVFBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJuQixtQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBMZXhpY2FsUGF0dGVybklucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB2YWx1ZTsgIC8vL1xuXG4gICAgcmV0dXJuIGxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGxleGljYWxQYXR0ZXJuIHx8ICcnOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TGV4aWNhbFBhdHRlcm4gPSB0aGlzLnNldExleGljYWxQYXR0ZXJuLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxQYXR0ZXJuLFxuICAgICAgc2V0TGV4aWNhbFBhdHRlcm4sXG4gICAgICBzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExleGljYWxQYXR0ZXJuSW5wdXQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGV4aWNhbFBhdHRlcm5JbnB1dCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2xleGljYWwtcGF0dGVybicsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMZXhpY2FsUGF0dGVybklucHV0O1xuIl19