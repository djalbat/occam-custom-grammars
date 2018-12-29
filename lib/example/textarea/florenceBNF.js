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
    key: 'parentContext',
    value: function parentContext() {
      var setFlorenceBNF = this.setFlorenceBNF.bind(this);

      return {
        setFlorenceBNF: setFlorenceBNF
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL2Zsb3JlbmNlQk5GLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiRmxvcmVuY2VCTkZUZXh0YXJlYSIsImZsb3JlbmNlQk5GIiwidmFsdWUiLCJzZXRWYWx1ZSIsInNldEZsb3JlbmNlQk5GIiwiYmluZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLG1COzs7Ozs7Ozs7OzttQ0FDV0MsVyxFQUFhO0FBQzFCLFVBQU1DLFFBQVFELFdBQWQsQ0FEMEIsQ0FDRTs7QUFFNUIsV0FBS0UsUUFBTCxDQUFjRCxLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1FLGlCQUFpQixLQUFLQSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUF2Qjs7QUFFQSxhQUFRO0FBQ05EO0FBRE0sT0FBUjtBQUdEOzs7bUNBRXFCRSxVLEVBQVk7QUFBRSxhQUFPUCxhQUFhUSxjQUFiLENBQTRCUCxtQkFBNUIsRUFBaURNLFVBQWpELENBQVA7QUFBc0U7Ozs7RUFmMUVQLFk7O0FBa0JsQ1MsT0FBT0MsTUFBUCxDQUFjVCxtQkFBZCxFQUFtQztBQUNqQ1UsV0FBUyxVQUR3QjtBQUVqQ0MscUJBQW1CO0FBQ2pCQyxlQUFXLGNBRE07QUFFakJDLGdCQUFZLE9BRks7QUFHakJDLGNBQVU7QUFITztBQUZjLENBQW5DOztBQVNBQyxPQUFPQyxPQUFQLEdBQWlCaEIsbUJBQWpCIiwiZmlsZSI6ImZsb3JlbmNlQk5GLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgRmxvcmVuY2VCTkZUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIHNldEZsb3JlbmNlQk5GKGZsb3JlbmNlQk5GKSB7XG4gICAgY29uc3QgdmFsdWUgPSBmbG9yZW5jZUJORjsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldEZsb3JlbmNlQk5GID0gdGhpcy5zZXRGbG9yZW5jZUJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRGbG9yZW5jZUJORlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhGbG9yZW5jZUJORlRleHRhcmVhLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEZsb3JlbmNlQk5GVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdmbG9yZW5jZS1ibmYnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZScsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VCTkZUZXh0YXJlYTtcbiJdfQ==