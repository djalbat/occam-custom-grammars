'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var constants = require('../../constants');

var InputElement = easy.InputElement,
    DEFAULT_CUSTOM_GRAMMAR_NAME = constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME;

var NameSelect = function (_InputElement) {
  _inherits(NameSelect, _InputElement);

  function NameSelect() {
    _classCallCheck(this, NameSelect);

    return _possibleConstructorReturn(this, (NameSelect.__proto__ || Object.getPrototypeOf(NameSelect)).apply(this, arguments));
  }

  _createClass(NameSelect, [{
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var defaultName = DEFAULT_CUSTOM_GRAMMAR_NAME,
          ///
      defaultValue = defaultName,
          ///
      userDefinedName = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
          ///
      userDefinedValue = userDefinedName; ///

      return [React.createElement(
        'option',
        { value: defaultValue, selected: true },
        defaultName
      ), React.createElement(
        'option',
        { value: userDefinedValue },
        userDefinedName
      )];
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getName = this.getSelectedOptionValue.bind(this); ///

      return {
        getName: getName
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(NameSelect, properties);
    }
  }]);

  return NameSelect;
}(InputElement);

Object.assign(NameSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'name',
    spellCheck: false
  }
});

module.exports = NameSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3NlbGVjdC9uYW1lLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiSW5wdXRFbGVtZW50IiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJOYW1lU2VsZWN0IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdE5hbWUiLCJkZWZhdWx0VmFsdWUiLCJ1c2VyRGVmaW5lZE5hbWUiLCJ1c2VyRGVmaW5lZFZhbHVlIiwiZ2V0TmFtZSIsImdldFNlbGVjdGVkT3B0aW9uVmFsdWUiLCJiaW5kIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGlCQUFSLENBQWxCOztBQUVNLElBQUVFLFlBQUYsR0FBbUJILElBQW5CLENBQUVHLFlBQUY7QUFBQSxJQUNFQywyQkFERixHQUNvRUYsU0FEcEUsQ0FDRUUsMkJBREY7QUFBQSxJQUMrQkMsZ0NBRC9CLEdBQ29FSCxTQURwRSxDQUMrQkcsZ0NBRC9COztJQUdBQyxVOzs7Ozs7Ozs7Ozs2Q0FDcUI7QUFDdkIsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsc0JBQXNCRixXQUFXRyxLQUR2QyxDQUR1QixDQUV1Qjs7QUFFOUMsYUFBT0QsbUJBQVA7QUFDRDs7O2tDQUVhRSxVLEVBQVk7QUFDeEIsVUFBTUMsY0FBY1IsMkJBQXBCO0FBQUEsVUFBa0Q7QUFDNUNTLHFCQUFlRCxXQURyQjtBQUFBLFVBQ2tDO0FBQzVCRSx3QkFBa0JULGdDQUZ4QjtBQUFBLFVBRTBEO0FBQ3BEVSx5QkFBbUJELGVBSHpCLENBRHdCLENBSWtCOztBQUUxQyxhQUFRLENBRU47QUFBQTtBQUFBLFVBQVEsT0FBT0QsWUFBZixFQUE2QixjQUE3QjtBQUF1Q0Q7QUFBdkMsT0FGTSxFQUdOO0FBQUE7QUFBQSxVQUFRLE9BQU9HLGdCQUFmO0FBQWtDRDtBQUFsQyxPQUhNLENBQVI7QUFNRDs7O29DQUVlO0FBQ2QsVUFBTUUsVUFBVSxLQUFLQyxzQkFBTCxDQUE0QkMsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBaEIsQ0FEYyxDQUMwQzs7QUFFeEQsYUFBUTtBQUNORjtBQURNLE9BQVI7QUFHRDs7O21DQUVxQkwsVSxFQUFZO0FBQUUsYUFBT1IsYUFBYWdCLGNBQWIsQ0FBNEJiLFVBQTVCLEVBQXdDSyxVQUF4QyxDQUFQO0FBQTZEOzs7O0VBOUIxRVIsWTs7QUFpQ3pCaUIsT0FBT0MsTUFBUCxDQUFjZixVQUFkLEVBQTBCO0FBQ3hCZ0IsV0FBUyxRQURlO0FBRXhCQyxxQkFBbUI7QUFDakJDLGVBQVcsTUFETTtBQUVqQkMsZ0JBQVk7QUFGSztBQUZLLENBQTFCOztBQVFBQyxPQUFPQyxPQUFQLEdBQWlCckIsVUFBakIiLCJmaWxlIjoibmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gPSBjb25zdGFudHM7XG5cbmNsYXNzIE5hbWVTZWxlY3QgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRTZWxlY3RlZE9wdGlvblZhbHVlKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvblZhbHVlID0gZG9tRWxlbWVudC52YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25WYWx1ZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGRlZmF1bHROYW1lID0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCAgLy8vXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gZGVmYXVsdE5hbWUsIC8vL1xuICAgICAgICAgIHVzZXJEZWZpbmVkTmFtZSA9IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FLCAvLy9cbiAgICAgICAgICB1c2VyRGVmaW5lZFZhbHVlID0gdXNlckRlZmluZWROYW1lOyAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8b3B0aW9uIHZhbHVlPXtkZWZhdWx0VmFsdWV9IHNlbGVjdGVkPntkZWZhdWx0TmFtZX08L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXt1c2VyRGVmaW5lZFZhbHVlfT57dXNlckRlZmluZWROYW1lfTwvb3B0aW9uPixcblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXROYW1lID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXROYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE5hbWVTZWxlY3QsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oTmFtZVNlbGVjdCwge1xuICB0YWdOYW1lOiAnc2VsZWN0JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICBzcGVsbENoZWNrOiBmYWxzZVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBOYW1lU2VsZWN0O1xuIl19