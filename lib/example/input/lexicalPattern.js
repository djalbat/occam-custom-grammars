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
          setLexicalPatternReadOnly = this.setReadOnly.bind(this); ///

      return {
        getLexicalPattern: getLexicalPattern,
        setLexicalPattern: setLexicalPattern,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2lucHV0L2xleGljYWxQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsUGF0dGVybiIsInNldFZhbHVlIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJiaW5kIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5Iiwic2V0UmVhZE9ubHkiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsbUI7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLGlCQUFpQkYsS0FEdkIsQ0FEa0IsQ0FFYTs7QUFFL0IsYUFBT0UsY0FBUDtBQUNEOzs7c0NBRWlCQSxjLEVBQWdCO0FBQ2hDLFVBQU1GLFFBQVFFLGtCQUFrQixFQUFoQyxDQURnQyxDQUNLOztBQUVyQyxXQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUksb0JBQW9CLEtBQUtBLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUExQjtBQUFBLFVBQ01DLG9CQUFvQixLQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FEMUI7QUFBQSxVQUVNRSw0QkFBNEIsS0FBS0MsV0FBTCxDQUFpQkgsSUFBakIsQ0FBc0IsSUFBdEIsQ0FGbEMsQ0FEYyxDQUdpRDs7QUFFL0QsYUFBUTtBQUNORCw0Q0FETTtBQUVORSw0Q0FGTTtBQUdOQztBQUhNLE9BQVI7QUFLRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT1gsYUFBYVksY0FBYixDQUE0QlgsbUJBQTVCLEVBQWlEVSxVQUFqRCxDQUFQO0FBQXNFOzs7O0VBMUIxRVgsWTs7QUE2QmxDYSxPQUFPQyxNQUFQLENBQWNiLG1CQUFkLEVBQW1DO0FBQ2pDYyxXQUFTLE9BRHdCO0FBRWpDQyxxQkFBbUI7QUFDakJDLGVBQVcsaUJBRE07QUFFakJDLGdCQUFZO0FBRks7QUFGYyxDQUFuQzs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQm5CLG1CQUFqQiIsImZpbGUiOiJsZXhpY2FsUGF0dGVybi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIExleGljYWxQYXR0ZXJuSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRMZXhpY2FsUGF0dGVybigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybikge1xuICAgIGNvbnN0IHZhbHVlID0gbGV4aWNhbFBhdHRlcm4gfHwgJyc7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRMZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsUGF0dGVybiA9IHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4uYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5ID0gdGhpcy5zZXRSZWFkT25seS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TGV4aWNhbFBhdHRlcm4sXG4gICAgICBzZXRMZXhpY2FsUGF0dGVybixcbiAgICAgIHNldExleGljYWxQYXR0ZXJuUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTGV4aWNhbFBhdHRlcm5JbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihMZXhpY2FsUGF0dGVybklucHV0LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnbGV4aWNhbC1wYXR0ZXJuJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExleGljYWxQYXR0ZXJuSW5wdXQ7XG4iXX0=