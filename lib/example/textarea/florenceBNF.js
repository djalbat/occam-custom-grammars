'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var FlorenceBNFTextarea = function (_InputElement) {
  _inherits(FlorenceBNFTextarea, _InputElement);

  function FlorenceBNFTextarea() {
    _classCallCheck(this, FlorenceBNFTextarea);

    return _possibleConstructorReturn(this, (FlorenceBNFTextarea.__proto__ || Object.getPrototypeOf(FlorenceBNFTextarea)).apply(this, arguments));
  }

  _createClass(FlorenceBNFTextarea, [{
    key: 'setFlorenceBNF',
    value: function setFlorenceBNF(florenceBNF) {
      var value = florenceBNF; ///

      this.setValue(value);
    }
  }, {
    key: 'clearFlorenceBNF',
    value: function clearFlorenceBNF() {
      var value = '';

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setFlorenceBNF = this.setFlorenceBNF.bind(this),
          clearFlorenceBNF = this.clearFlorenceBNF.bind(this);

      return {
        setFlorenceBNF: setFlorenceBNF,
        clearFlorenceBNF: clearFlorenceBNF
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(FlorenceBNFTextarea, properties);
    }
  }]);

  return FlorenceBNFTextarea;
}(InputElement);

Object.assign(FlorenceBNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'florence-bnf',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = FlorenceBNFTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL2Zsb3JlbmNlQk5GLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiRmxvcmVuY2VCTkZUZXh0YXJlYSIsImZsb3JlbmNlQk5GIiwidmFsdWUiLCJzZXRWYWx1ZSIsInNldEZsb3JlbmNlQk5GIiwiYmluZCIsImNsZWFyRmxvcmVuY2VCTkYiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxtQjs7Ozs7Ozs7Ozs7bUNBQ1dDLFcsRUFBYTtBQUMxQixVQUFNQyxRQUFRRCxXQUFkLENBRDBCLENBQ0U7O0FBRTVCLFdBQUtFLFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1BLFFBQVEsRUFBZDs7QUFFQSxXQUFLQyxRQUFMLENBQWNELEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUUsaUJBQWlCLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXZCO0FBQUEsVUFDTUMsbUJBQW1CLEtBQUtBLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQUR6Qjs7QUFHQSxhQUFRO0FBQ05ELHNDQURNO0FBRU5FO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPUixhQUFhUyxjQUFiLENBQTRCUixtQkFBNUIsRUFBaURPLFVBQWpELENBQVA7QUFBc0U7Ozs7RUF2QjFFUixZOztBQTBCbENVLE9BQU9DLE1BQVAsQ0FBY1YsbUJBQWQsRUFBbUM7QUFDakNXLFdBQVMsVUFEd0I7QUFFakNDLHFCQUFtQjtBQUNqQkMsZUFBVyxjQURNO0FBRWpCQyxnQkFBWSxPQUZLO0FBR2pCQyxjQUFVO0FBSE87QUFGYyxDQUFuQzs7QUFTQUMsT0FBT0MsT0FBUCxHQUFpQmpCLG1CQUFqQiIsImZpbGUiOiJmbG9yZW5jZUJORi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEZsb3JlbmNlQk5GVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzZXRGbG9yZW5jZUJORihmbG9yZW5jZUJORikge1xuICAgIGNvbnN0IHZhbHVlID0gZmxvcmVuY2VCTkY7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2xlYXJGbG9yZW5jZUJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9ICcnO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldEZsb3JlbmNlQk5GID0gdGhpcy5zZXRGbG9yZW5jZUJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyRmxvcmVuY2VCTkYgPSB0aGlzLmNsZWFyRmxvcmVuY2VCTkYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0RmxvcmVuY2VCTkYsXG4gICAgICBjbGVhckZsb3JlbmNlQk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZsb3JlbmNlQk5GVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxvcmVuY2VCTkZUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2Zsb3JlbmNlLWJuZicsXG4gICAgc3BlbGxDaGVjazogJ2ZhbHNlJyxcbiAgICByZWFkT25seTogdHJ1ZVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbG9yZW5jZUJORlRleHRhcmVhO1xuIl19