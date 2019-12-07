'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var CombinedBNFTextarea = function (_InputElement) {
  _inherits(CombinedBNFTextarea, _InputElement);

  function CombinedBNFTextarea() {
    _classCallCheck(this, CombinedBNFTextarea);

    return _possibleConstructorReturn(this, (CombinedBNFTextarea.__proto__ || Object.getPrototypeOf(CombinedBNFTextarea)).apply(this, arguments));
  }

  _createClass(CombinedBNFTextarea, [{
    key: 'clearCombinedBNF',
    value: function clearCombinedBNF() {
      var value = '';

      this.setValue(value);
    }
  }, {
    key: 'setCombinedBNF',
    value: function setCombinedBNF(combinedBNF) {
      var value = combinedBNF; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setCombinedBNF = this.setCombinedBNF.bind(this),
          clearCombinedBNF = this.clearCombinedBNF.bind(this);

      return {
        setCombinedBNF: setCombinedBNF,
        clearCombinedBNF: clearCombinedBNF
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(CombinedBNFTextarea, properties);
    }
  }]);

  return CombinedBNFTextarea;
}(InputElement);

Object.assign(CombinedBNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'combined-bnf',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = CombinedBNFTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL2NvbWJpbmVkQk5GLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiQ29tYmluZWRCTkZUZXh0YXJlYSIsInZhbHVlIiwic2V0VmFsdWUiLCJjb21iaW5lZEJORiIsInNldENvbWJpbmVkQk5GIiwiYmluZCIsImNsZWFyQ29tYmluZWRCTkYiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxtQjs7Ozs7Ozs7Ozs7dUNBQ2U7QUFDakIsVUFBTUMsUUFBUSxFQUFkOztBQUVBLFdBQUtDLFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7bUNBRWNFLFcsRUFBYTtBQUMxQixVQUFNRixRQUFRRSxXQUFkLENBRDBCLENBQ0U7O0FBRTVCLFdBQUtELFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRyxpQkFBaUIsS0FBS0EsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdkI7QUFBQSxVQUNNQyxtQkFBbUIsS0FBS0EsZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCLENBRHpCOztBQUdBLGFBQVE7QUFDTkQsc0NBRE07QUFFTkU7QUFGTSxPQUFSO0FBSUQ7OzttQ0FFcUJDLFUsRUFBWTtBQUFFLGFBQU9SLGFBQWFTLGNBQWIsQ0FBNEJSLG1CQUE1QixFQUFpRE8sVUFBakQsQ0FBUDtBQUFzRTs7OztFQXZCMUVSLFk7O0FBMEJsQ1UsT0FBT0MsTUFBUCxDQUFjVixtQkFBZCxFQUFtQztBQUNqQ1csV0FBUyxVQUR3QjtBQUVqQ0MscUJBQW1CO0FBQ2pCQyxlQUFXLGNBRE07QUFFakJDLGdCQUFZLE9BRks7QUFHakJDLGNBQVU7QUFITztBQUZjLENBQW5DOztBQVNBQyxPQUFPQyxPQUFQLEdBQWlCakIsbUJBQWpCIiwiZmlsZSI6ImNvbWJpbmVkQk5GLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgQ29tYmluZWRCTkZUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNsZWFyQ29tYmluZWRCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSAnJztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgc2V0Q29tYmluZWRCTkYoY29tYmluZWRCTkYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNvbWJpbmVkQk5GOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0Q29tYmluZWRCTkYgPSB0aGlzLnNldENvbWJpbmVkQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJDb21iaW5lZEJORiA9IHRoaXMuY2xlYXJDb21iaW5lZEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRDb21iaW5lZEJORixcbiAgICAgIGNsZWFyQ29tYmluZWRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ29tYmluZWRCTkZUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihDb21iaW5lZEJORlRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnY29tYmluZWQtYm5mJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnLFxuICAgIHJlYWRPbmx5OiB0cnVlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbWJpbmVkQk5GVGV4dGFyZWE7XG4iXX0=