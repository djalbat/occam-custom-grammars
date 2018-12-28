'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var RuleNameSelect = function (_InputElement) {
  _inherits(RuleNameSelect, _InputElement);

  function RuleNameSelect() {
    _classCallCheck(this, RuleNameSelect);

    return _possibleConstructorReturn(this, (RuleNameSelect.__proto__ || Object.getPrototypeOf(RuleNameSelect)).apply(this, arguments));
  }

  _createClass(RuleNameSelect, [{
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      return [React.createElement(
        'option',
        { value: 'metastatement', selected: true },
        'metastatement'
      ), React.createElement(
        'option',
        { value: 'statement' },
        'statement'
      ), React.createElement(
        'option',
        { value: 'expression' },
        'expression'
      ), React.createElement(
        'option',
        { value: 'term' },
        'term'
      )];
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getRuleName = this.getSelectedOptionValue.bind(this); ///

      return {
        getRuleName: getRuleName
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(RuleNameSelect, properties);
    }
  }]);

  return RuleNameSelect;
}(InputElement);

Object.assign(RuleNameSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'rule-name',
    spellCheck: false
  }
});

module.exports = RuleNameSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3NlbGVjdC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlJ1bGVOYW1lU2VsZWN0IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiZ2V0UnVsZU5hbWUiLCJnZXRTZWxlY3RlZE9wdGlvblZhbHVlIiwiYmluZCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGM7Ozs7Ozs7Ozs7OzZDQUNxQjtBQUN2QixVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxzQkFBc0JGLFdBQVdHLEtBRHZDLENBRHVCLENBRXVCOztBQUU5QyxhQUFPRCxtQkFBUDtBQUNEOzs7a0NBRWFFLFUsRUFBWTtBQUN4QixhQUFRLENBRU47QUFBQTtBQUFBLFVBQVEsT0FBTSxlQUFkLEVBQThCLGNBQTlCO0FBQUE7QUFBQSxPQUZNLEVBR047QUFBQTtBQUFBLFVBQVEsT0FBTSxXQUFkO0FBQUE7QUFBQSxPQUhNLEVBSU47QUFBQTtBQUFBLFVBQVEsT0FBTSxZQUFkO0FBQUE7QUFBQSxPQUpNLEVBS047QUFBQTtBQUFBLFVBQVEsT0FBTSxNQUFkO0FBQUE7QUFBQSxPQUxNLENBQVI7QUFRRDs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxLQUFLQyxzQkFBTCxDQUE0QkMsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBcEIsQ0FEYyxDQUM4Qzs7QUFFNUQsYUFBUTtBQUNORjtBQURNLE9BQVI7QUFHRDs7O21DQUVxQkQsVSxFQUFZO0FBQUUsYUFBT04sYUFBYVUsY0FBYixDQUE0QlQsY0FBNUIsRUFBNENLLFVBQTVDLENBQVA7QUFBaUU7Ozs7RUEzQjFFTixZOztBQThCN0JXLE9BQU9DLE1BQVAsQ0FBY1gsY0FBZCxFQUE4QjtBQUM1QlksV0FBUyxRQURtQjtBQUU1QkMscUJBQW1CO0FBQ2pCQyxlQUFXLFdBRE07QUFFakJDLGdCQUFZO0FBRks7QUFGUyxDQUE5Qjs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQmpCLGNBQWpCIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgUnVsZU5hbWVTZWxlY3QgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gZG9tRWxlbWVudC52YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8b3B0aW9uIHZhbHVlPVwibWV0YXN0YXRlbWVudFwiIHNlbGVjdGVkPm1ldGFzdGF0ZW1lbnQ8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPVwic3RhdGVtZW50XCI+c3RhdGVtZW50PC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImV4cHJlc3Npb25cIj5leHByZXNzaW9uPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInRlcm1cIj50ZXJtPC9vcHRpb24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0UnVsZU5hbWUgPSB0aGlzLmdldFNlbGVjdGVkT3B0aW9uVmFsdWUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFJ1bGVOYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFJ1bGVOYW1lU2VsZWN0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFJ1bGVOYW1lU2VsZWN0LCB7XG4gIHRhZ05hbWU6ICdzZWxlY3QnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3J1bGUtbmFtZScsXG4gICAgc3BlbGxDaGVjazogZmFsc2VcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZU5hbWVTZWxlY3Q7XG4iXX0=