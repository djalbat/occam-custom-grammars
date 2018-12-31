'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var LexicalPatternInput = function (_InputElement) {
  _inherits(LexicalPatternInput, _InputElement);

  function LexicalPatternInput() {
    _classCallCheck(this, LexicalPatternInput);

    return _possibleConstructorReturn(this, (LexicalPatternInput.__proto__ || Object.getPrototypeOf(LexicalPatternInput)).apply(this, arguments));
  }

  _createClass(LexicalPatternInput, [{
    key: 'showError',
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: 'hideError',
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
    key: 'getLexicalPattern',
    value: function getLexicalPattern() {
      var value = this.getValue(),
          lexicalPattern = value; ///

      return lexicalPattern;
    }
  }, {
    key: 'setLexicalPattern',
    value: function setLexicalPattern(lexicalPattern) {
      var value = lexicalPattern || ''; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getLexicalPattern = this.getLexicalPattern.bind(this),
          setLexicalPattern = this.setLexicalPattern.bind(this),
          showLexicalPatternError = this.showError.bind(this),
          ///
      hideLexicalPatternError = this.hideError.bind(this),
          ///
      setLexicalPatternReadOnly = this.setReadOnly.bind(this); ///

      return {
        getLexicalPattern: getLexicalPattern,
        setLexicalPattern: setLexicalPattern,
        showLexicalPatternError: showLexicalPatternError,
        hideLexicalPatternError: hideLexicalPatternError,
        setLexicalPatternReadOnly: setLexicalPatternReadOnly
      };
    }
  }], [{
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2lucHV0L2xleGljYWxQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ2YWx1ZSIsImdldFZhbHVlIiwibGV4aWNhbFBhdHRlcm4iLCJzZXRWYWx1ZSIsImdldExleGljYWxQYXR0ZXJuIiwiYmluZCIsInNldExleGljYWxQYXR0ZXJuIiwic2hvd0xleGljYWxQYXR0ZXJuRXJyb3IiLCJzaG93RXJyb3IiLCJoaWRlTGV4aWNhbFBhdHRlcm5FcnJvciIsImhpZGVFcnJvciIsInNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxtQjs7Ozs7Ozs7Ozs7Z0NBQ1E7QUFDVixXQUFLQyxRQUFMLENBQWMsT0FBZDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLQyxXQUFMLENBQWlCLE9BQWpCO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxpQkFBaUJGLEtBRHZCLENBRGtCLENBRWE7O0FBRS9CLGFBQU9FLGNBQVA7QUFDRDs7O3NDQUVpQkEsYyxFQUFnQjtBQUNoQyxVQUFNRixRQUFRRSxrQkFBa0IsRUFBaEMsQ0FEZ0MsQ0FDSzs7QUFFckMsV0FBS0MsUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1JLG9CQUFvQixLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBMUI7QUFBQSxVQUNNQyxvQkFBb0IsS0FBS0EsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBRDFCO0FBQUEsVUFFTUUsMEJBQTBCLEtBQUtDLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixJQUFwQixDQUZoQztBQUFBLFVBRTJEO0FBQ3JESSxnQ0FBMEIsS0FBS0MsU0FBTCxDQUFlTCxJQUFmLENBQW9CLElBQXBCLENBSGhDO0FBQUEsVUFHMkQ7QUFDckRNLGtDQUE0QixLQUFLQyxXQUFMLENBQWlCUCxJQUFqQixDQUFzQixJQUF0QixDQUpsQyxDQURjLENBS2lEOztBQUUvRCxhQUFRO0FBQ05ELDRDQURNO0FBRU5FLDRDQUZNO0FBR05DLHdEQUhNO0FBSU5FLHdEQUpNO0FBS05FO0FBTE0sT0FBUjtBQU9EOzs7bUNBRXFCRSxVLEVBQVk7QUFBRSxhQUFPakIsYUFBYWtCLGNBQWIsQ0FBNEJqQixtQkFBNUIsRUFBaURnQixVQUFqRCxDQUFQO0FBQXNFOzs7O0VBdEMxRWpCLFk7O0FBeUNsQ21CLE9BQU9DLE1BQVAsQ0FBY25CLG1CQUFkLEVBQW1DO0FBQ2pDb0IsV0FBUyxPQUR3QjtBQUVqQ0MscUJBQW1CO0FBQ2pCQyxlQUFXLGlCQURNO0FBRWpCQyxnQkFBWTtBQUZLO0FBRmMsQ0FBbkM7O0FBUUFDLE9BQU9DLE9BQVAsR0FBaUJ6QixtQkFBakIiLCJmaWxlIjoibGV4aWNhbFBhdHRlcm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBMZXhpY2FsUGF0dGVybklucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc2hvd0Vycm9yKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gIH1cblxuICBoaWRlRXJyb3IoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgfVxuXG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdmFsdWU7ICAvLy9cblxuICAgIHJldHVybiBsZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIHNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSB7XG4gICAgY29uc3QgdmFsdWUgPSBsZXhpY2FsUGF0dGVybiB8fCAnJzsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldExleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldExleGljYWxQYXR0ZXJuID0gdGhpcy5zZXRMZXhpY2FsUGF0dGVybi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNob3dMZXhpY2FsUGF0dGVybkVycm9yID0gdGhpcy5zaG93RXJyb3IuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgaGlkZUxleGljYWxQYXR0ZXJuRXJyb3IgPSB0aGlzLmhpZGVFcnJvci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TGV4aWNhbFBhdHRlcm4sXG4gICAgICBzZXRMZXhpY2FsUGF0dGVybixcbiAgICAgIHNob3dMZXhpY2FsUGF0dGVybkVycm9yLFxuICAgICAgaGlkZUxleGljYWxQYXR0ZXJuRXJyb3IsXG4gICAgICBzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKExleGljYWxQYXR0ZXJuSW5wdXQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGV4aWNhbFBhdHRlcm5JbnB1dCwge1xuICB0YWdOYW1lOiAnaW5wdXQnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2xleGljYWwtcGF0dGVybicsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMZXhpY2FsUGF0dGVybklucHV0O1xuIl19