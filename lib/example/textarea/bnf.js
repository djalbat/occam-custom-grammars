'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var BNFTextarea = function (_InputElement) {
  _inherits(BNFTextarea, _InputElement);

  function BNFTextarea() {
    _classCallCheck(this, BNFTextarea);

    return _possibleConstructorReturn(this, (BNFTextarea.__proto__ || Object.getPrototypeOf(BNFTextarea)).apply(this, arguments));
  }

  _createClass(BNFTextarea, [{
    key: 'getBNF',
    value: function getBNF() {
      var value = this.getValue(),
          bnf = value; ///

      return bnf;
    }
  }, {
    key: 'setBNF',
    value: function setBNF(bnf) {
      var value = bnf || ''; ///

      this.setValue(value);
    }
  }, {
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
    key: 'parentContext',
    value: function parentContext() {
      var getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this),
          showBNFError = this.showError.bind(this),
          ///
      hideBNFError = this.hideError.bind(this),
          ///
      setBNFReadOnly = this.setReadOnly.bind(this); ///

      return {
        getBNF: getBNF,
        setBNF: setBNF,
        showBNFError: showBNFError,
        hideBNFError: hideBNFError,
        setBNFReadOnly: setBNFReadOnly
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(BNFTextarea, properties);
    }
  }]);

  return BNFTextarea;
}(InputElement);

Object.assign(BNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'bnf',
    spellCheck: 'false'
  }
});

module.exports = BNFTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIkJORlRleHRhcmVhIiwidmFsdWUiLCJnZXRWYWx1ZSIsImJuZiIsInNldFZhbHVlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImdldEJORiIsImJpbmQiLCJzZXRCTkYiLCJzaG93Qk5GRXJyb3IiLCJzaG93RXJyb3IiLCJoaWRlQk5GRXJyb3IiLCJoaWRlRXJyb3IiLCJzZXRCTkZSZWFkT25seSIsInNldFJlYWRPbmx5IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLFc7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBTUMsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxNQUFNRixLQURaLENBRE8sQ0FFYTs7QUFFcEIsYUFBT0UsR0FBUDtBQUNEOzs7MkJBRU1BLEcsRUFBSztBQUNWLFVBQU1GLFFBQVFFLE9BQU8sRUFBckIsQ0FEVSxDQUNnQjs7QUFFMUIsV0FBS0MsUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtJLFFBQUwsQ0FBYyxPQUFkO0FBQ0Q7OztnQ0FFVztBQUNWLFdBQUtDLFdBQUwsQ0FBaUIsT0FBakI7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUMsU0FBUyxLQUFLQSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBZjtBQUFBLFVBQ01DLFNBQVMsS0FBS0EsTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBRGY7QUFBQSxVQUVNRSxlQUFlLEtBQUtDLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixJQUFwQixDQUZyQjtBQUFBLFVBRWdEO0FBQzFDSSxxQkFBZSxLQUFLQyxTQUFMLENBQWVMLElBQWYsQ0FBb0IsSUFBcEIsQ0FIckI7QUFBQSxVQUdnRDtBQUMxQ00sdUJBQWlCLEtBQUtDLFdBQUwsQ0FBaUJQLElBQWpCLENBQXNCLElBQXRCLENBSnZCLENBRGMsQ0FLc0M7O0FBRXBELGFBQVE7QUFDTkQsc0JBRE07QUFFTkUsc0JBRk07QUFHTkMsa0NBSE07QUFJTkUsa0NBSk07QUFLTkU7QUFMTSxPQUFSO0FBT0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9qQixhQUFha0IsY0FBYixDQUE0QmpCLFdBQTVCLEVBQXlDZ0IsVUFBekMsQ0FBUDtBQUE4RDs7OztFQXRDMUVqQixZOztBQXlDMUJtQixPQUFPQyxNQUFQLENBQWNuQixXQUFkLEVBQTJCO0FBQ3pCb0IsV0FBUyxVQURnQjtBQUV6QkMscUJBQW1CO0FBQ2pCQyxlQUFXLEtBRE07QUFFakJDLGdCQUFZO0FBRks7QUFGTSxDQUEzQjs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQnpCLFdBQWpCIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEJORlRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0Qk5GKGJuZikge1xuICAgIGNvbnN0IHZhbHVlID0gYm5mIHx8ICcnOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHNob3dFcnJvcigpIHtcbiAgICB0aGlzLmFkZENsYXNzKCdlcnJvcicpO1xuICB9XG5cbiAgaGlkZUVycm9yKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEJORiA9IHRoaXMuZ2V0Qk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Qk5GID0gdGhpcy5zZXRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzaG93Qk5GRXJyb3IgPSB0aGlzLnNob3dFcnJvci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlQk5GRXJyb3IgPSB0aGlzLmhpZGVFcnJvci5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRCTkZSZWFkT25seSA9IHRoaXMuc2V0UmVhZE9ubHkuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEJORixcbiAgICAgIHNldEJORixcbiAgICAgIHNob3dCTkZFcnJvcixcbiAgICAgIGhpZGVCTkZFcnJvcixcbiAgICAgIHNldEJORlJlYWRPbmx5XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJORlRleHRhcmVhLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEJORlRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnYm5mJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJORlRleHRhcmVhO1xuIl19