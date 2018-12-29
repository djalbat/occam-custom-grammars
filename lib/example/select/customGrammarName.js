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

var CustomGrammarNameSelect = function (_InputElement) {
  _inherits(CustomGrammarNameSelect, _InputElement);

  function CustomGrammarNameSelect() {
    _classCallCheck(this, CustomGrammarNameSelect);

    return _possibleConstructorReturn(this, (CustomGrammarNameSelect.__proto__ || Object.getPrototypeOf(CustomGrammarNameSelect)).apply(this, arguments));
  }

  _createClass(CustomGrammarNameSelect, [{
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
      var getCustomGrammarName = this.getSelectedOptionValue.bind(this); ///

      return {
        getCustomGrammarName: getCustomGrammarName
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(CustomGrammarNameSelect, properties);
    }
  }]);

  return CustomGrammarNameSelect;
}(InputElement);

Object.assign(CustomGrammarNameSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'custom-grammar-name',
    spellCheck: false
  }
});

module.exports = CustomGrammarNameSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3NlbGVjdC9jdXN0b21HcmFtbWFyTmFtZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImNvbnN0YW50cyIsIklucHV0RWxlbWVudCIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiQ3VzdG9tR3JhbW1hck5hbWVTZWxlY3QiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJkZWZhdWx0TmFtZSIsImRlZmF1bHRWYWx1ZSIsInVzZXJEZWZpbmVkTmFtZSIsInVzZXJEZWZpbmVkVmFsdWUiLCJnZXRDdXN0b21HcmFtbWFyTmFtZSIsImdldFNlbGVjdGVkT3B0aW9uVmFsdWUiLCJiaW5kIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGlCQUFSLENBQWxCOztBQUVNLElBQUVFLFlBQUYsR0FBbUJILElBQW5CLENBQUVHLFlBQUY7QUFBQSxJQUNFQywyQkFERixHQUNvRUYsU0FEcEUsQ0FDRUUsMkJBREY7QUFBQSxJQUMrQkMsZ0NBRC9CLEdBQ29FSCxTQURwRSxDQUMrQkcsZ0NBRC9COztJQUdBQyx1Qjs7Ozs7Ozs7Ozs7NkNBQ3FCO0FBQ3ZCLFVBQU1DLGFBQWEsS0FBS0MsYUFBTCxFQUFuQjtBQUFBLFVBQ01DLHNCQUFzQkYsV0FBV0csS0FEdkMsQ0FEdUIsQ0FFdUI7O0FBRTlDLGFBQU9ELG1CQUFQO0FBQ0Q7OztrQ0FFYUUsVSxFQUFZO0FBQ3hCLFVBQU1DLGNBQWNSLDJCQUFwQjtBQUFBLFVBQWtEO0FBQzVDUyxxQkFBZUQsV0FEckI7QUFBQSxVQUNrQztBQUM1QkUsd0JBQWtCVCxnQ0FGeEI7QUFBQSxVQUUwRDtBQUNwRFUseUJBQW1CRCxlQUh6QixDQUR3QixDQUlrQjs7QUFFMUMsYUFBUSxDQUVOO0FBQUE7QUFBQSxVQUFRLE9BQU9ELFlBQWYsRUFBNkIsY0FBN0I7QUFBdUNEO0FBQXZDLE9BRk0sRUFHTjtBQUFBO0FBQUEsVUFBUSxPQUFPRyxnQkFBZjtBQUFrQ0Q7QUFBbEMsT0FITSxDQUFSO0FBTUQ7OztvQ0FFZTtBQUNkLFVBQU1FLHVCQUF1QixLQUFLQyxzQkFBTCxDQUE0QkMsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBN0IsQ0FEYyxDQUN1RDs7QUFFckUsYUFBUTtBQUNORjtBQURNLE9BQVI7QUFHRDs7O21DQUVxQkwsVSxFQUFZO0FBQUUsYUFBT1IsYUFBYWdCLGNBQWIsQ0FBNEJiLHVCQUE1QixFQUFxREssVUFBckQsQ0FBUDtBQUEwRTs7OztFQTlCMUVSLFk7O0FBaUN0Q2lCLE9BQU9DLE1BQVAsQ0FBY2YsdUJBQWQsRUFBdUM7QUFDckNnQixXQUFTLFFBRDRCO0FBRXJDQyxxQkFBbUI7QUFDakJDLGVBQVcscUJBRE07QUFFakJDLGdCQUFZO0FBRks7QUFGa0IsQ0FBdkM7O0FBUUFDLE9BQU9DLE9BQVAsR0FBaUJyQix1QkFBakIiLCJmaWxlIjoiY3VzdG9tR3JhbW1hck5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBDdXN0b21HcmFtbWFyTmFtZVNlbGVjdCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBkb21FbGVtZW50LnZhbHVlOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgZGVmYXVsdE5hbWUgPSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsICAvLy9cbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0TmFtZSwgLy8vXG4gICAgICAgICAgdXNlckRlZmluZWROYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUsIC8vL1xuICAgICAgICAgIHVzZXJEZWZpbmVkVmFsdWUgPSB1c2VyRGVmaW5lZE5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxvcHRpb24gdmFsdWU9e2RlZmF1bHRWYWx1ZX0gc2VsZWN0ZWQ+e2RlZmF1bHROYW1lfTwvb3B0aW9uPixcbiAgICAgIDxvcHRpb24gdmFsdWU9e3VzZXJEZWZpbmVkVmFsdWV9Pnt1c2VyRGVmaW5lZE5hbWV9PC9vcHRpb24+LFxuXG4gICAgXSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEN1c3RvbUdyYW1tYXJOYW1lID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRDdXN0b21HcmFtbWFyTmFtZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhDdXN0b21HcmFtbWFyTmFtZVNlbGVjdCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihDdXN0b21HcmFtbWFyTmFtZVNlbGVjdCwge1xuICB0YWdOYW1lOiAnc2VsZWN0JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdjdXN0b20tZ3JhbW1hci1uYW1lJyxcbiAgICBzcGVsbENoZWNrOiBmYWxzZVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21HcmFtbWFyTmFtZVNlbGVjdDtcbiJdfQ==