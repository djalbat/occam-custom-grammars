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
        { value: 'term', selected: true },
        'term'
      ), React.createElement(
        'option',
        { value: 'expression' },
        'expression'
      ), React.createElement(
        'option',
        { value: 'statement' },
        'statement'
      ), React.createElement(
        'option',
        { value: 'metastatement' },
        'metastatement'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3NlbGVjdC9ydWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlJ1bGVOYW1lU2VsZWN0IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiZ2V0UnVsZU5hbWUiLCJnZXRTZWxlY3RlZE9wdGlvblZhbHVlIiwiYmluZCIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGM7Ozs7Ozs7Ozs7OzZDQUNxQjtBQUN2QixVQUFNQyxhQUFhLEtBQUtDLGFBQUwsRUFBbkI7QUFBQSxVQUNNQyxzQkFBc0JGLFdBQVdHLEtBRHZDLENBRHVCLENBRXVCOztBQUU5QyxhQUFPRCxtQkFBUDtBQUNEOzs7a0NBRWFFLFUsRUFBWTtBQUN4QixhQUFRLENBRU47QUFBQTtBQUFBLFVBQVEsT0FBTSxNQUFkLEVBQXFCLGNBQXJCO0FBQUE7QUFBQSxPQUZNLEVBR047QUFBQTtBQUFBLFVBQVEsT0FBTSxZQUFkO0FBQUE7QUFBQSxPQUhNLEVBSU47QUFBQTtBQUFBLFVBQVEsT0FBTSxXQUFkO0FBQUE7QUFBQSxPQUpNLEVBS047QUFBQTtBQUFBLFVBQVEsT0FBTSxlQUFkO0FBQUE7QUFBQSxPQUxNLENBQVI7QUFRRDs7O29DQUVlO0FBQ2QsVUFBTUMsY0FBYyxLQUFLQyxzQkFBTCxDQUE0QkMsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBcEIsQ0FEYyxDQUM4Qzs7QUFFNUQsYUFBUTtBQUNORjtBQURNLE9BQVI7QUFHRDs7O21DQUVxQkQsVSxFQUFZO0FBQUUsYUFBT04sYUFBYVUsY0FBYixDQUE0QlQsY0FBNUIsRUFBNENLLFVBQTVDLENBQVA7QUFBaUU7Ozs7RUEzQjFFTixZOztBQThCN0JXLE9BQU9DLE1BQVAsQ0FBY1gsY0FBZCxFQUE4QjtBQUM1QlksV0FBUyxRQURtQjtBQUU1QkMscUJBQW1CO0FBQ2pCQyxlQUFXLFdBRE07QUFFakJDLGdCQUFZO0FBRks7QUFGUyxDQUE5Qjs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQmpCLGNBQWpCIiwiZmlsZSI6InJ1bGVOYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgUnVsZU5hbWVTZWxlY3QgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gZG9tRWxlbWVudC52YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8b3B0aW9uIHZhbHVlPVwidGVybVwiIHNlbGVjdGVkID50ZXJtPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cImV4cHJlc3Npb25cIj5leHByZXNzaW9uPC9vcHRpb24+LFxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInN0YXRlbWVudFwiPnN0YXRlbWVudDwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRhc3RhdGVtZW50XCI+bWV0YXN0YXRlbWVudDwvb3B0aW9uPlxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldFJ1bGVOYW1lID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRSdWxlTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhSdWxlTmFtZVNlbGVjdCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihSdWxlTmFtZVNlbGVjdCwge1xuICB0YWdOYW1lOiAnc2VsZWN0JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdydWxlLW5hbWUnLFxuICAgIHNwZWxsQ2hlY2s6IGZhbHNlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVOYW1lU2VsZWN0O1xuIl19