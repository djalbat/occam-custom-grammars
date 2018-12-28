'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var constants = require('../../constants');

var InputElement = easy.InputElement,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME;

var CustomGrammarSelect = function (_InputElement) {
  _inherits(CustomGrammarSelect, _InputElement);

  function CustomGrammarSelect() {
    _classCallCheck(this, CustomGrammarSelect);

    return _possibleConstructorReturn(this, (CustomGrammarSelect.__proto__ || Object.getPrototypeOf(CustomGrammarSelect)).apply(this, arguments));
  }

  _createClass(CustomGrammarSelect, [{
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var value = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
          ///
      option = USER_DEFINED_CUSTOM_GRAMMAR_NAME; ///

      return [React.createElement(
        'option',
        { value: 'Default', selected: true },
        'Default'
      ), React.createElement(
        'option',
        { value: value },
        option
      )];
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getCustomGrammar = this.getSelectedOptionValue.bind(this); ///

      return {
        getCustomGrammar: getCustomGrammar
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(CustomGrammarSelect, properties);
    }
  }]);

  return CustomGrammarSelect;
}(InputElement);

Object.assign(CustomGrammarSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'custom-grammar',
    spellCheck: false
  }
});

module.exports = CustomGrammarSelect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3NlbGVjdC9jdXN0b21HcmFtbWFyLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiSW5wdXRFbGVtZW50IiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJDdXN0b21HcmFtbWFyU2VsZWN0IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwib3B0aW9uIiwiZ2V0Q3VzdG9tR3JhbW1hciIsImdldFNlbGVjdGVkT3B0aW9uVmFsdWUiLCJiaW5kIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGlCQUFSLENBQWxCOztBQUVNLElBQUVFLFlBQUYsR0FBbUJILElBQW5CLENBQUVHLFlBQUY7QUFBQSxJQUNFQyxnQ0FERixHQUN1Q0YsU0FEdkMsQ0FDRUUsZ0NBREY7O0lBR0FDLG1COzs7Ozs7Ozs7Ozs2Q0FDcUI7QUFDdkIsVUFBTUMsYUFBYSxLQUFLQyxhQUFMLEVBQW5CO0FBQUEsVUFDTUMsc0JBQXNCRixXQUFXRyxLQUR2QyxDQUR1QixDQUV1Qjs7QUFFOUMsYUFBT0QsbUJBQVA7QUFDRDs7O2tDQUVhRSxVLEVBQVk7QUFDeEIsVUFBTUQsUUFBUUwsZ0NBQWQ7QUFBQSxVQUFnRDtBQUMxQ08sZUFBU1AsZ0NBRGYsQ0FEd0IsQ0FFMEI7O0FBRWxELGFBQVEsQ0FFTjtBQUFBO0FBQUEsVUFBUSxPQUFNLFNBQWQsRUFBd0IsY0FBeEI7QUFBQTtBQUFBLE9BRk0sRUFHTjtBQUFBO0FBQUEsVUFBUSxPQUFPSyxLQUFmO0FBQXVCRTtBQUF2QixPQUhNLENBQVI7QUFNRDs7O29DQUVlO0FBQ2QsVUFBTUMsbUJBQW1CLEtBQUtDLHNCQUFMLENBQTRCQyxJQUE1QixDQUFpQyxJQUFqQyxDQUF6QixDQURjLENBQ21EOztBQUVqRSxhQUFRO0FBQ05GO0FBRE0sT0FBUjtBQUdEOzs7bUNBRXFCRixVLEVBQVk7QUFBRSxhQUFPUCxhQUFhWSxjQUFiLENBQTRCVixtQkFBNUIsRUFBaURLLFVBQWpELENBQVA7QUFBc0U7Ozs7RUE1QjFFUCxZOztBQStCbENhLE9BQU9DLE1BQVAsQ0FBY1osbUJBQWQsRUFBbUM7QUFDakNhLFdBQVMsUUFEd0I7QUFFakNDLHFCQUFtQjtBQUNqQkMsZUFBVyxnQkFETTtBQUVqQkMsZ0JBQVk7QUFGSztBQUZjLENBQW5DOztBQVFBQyxPQUFPQyxPQUFQLEdBQWlCbEIsbUJBQWpCIiwiZmlsZSI6ImN1c3RvbUdyYW1tYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IElucHV0RWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUgfSA9IGNvbnN0YW50cztcblxuY2xhc3MgQ3VzdG9tR3JhbW1hclNlbGVjdCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFNlbGVjdGVkT3B0aW9uVmFsdWUoKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBkb21FbGVtZW50LnZhbHVlOyAvLy9cblxuICAgIHJldHVybiBzZWxlY3RlZE9wdGlvblZhbHVlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgLy8vXG4gICAgICAgICAgb3B0aW9uID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUU7ICAvLy9cblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiRGVmYXVsdFwiIHNlbGVjdGVkPkRlZmF1bHQ8L29wdGlvbj4sXG4gICAgICA8b3B0aW9uIHZhbHVlPXt2YWx1ZX0+e29wdGlvbn08L29wdGlvbj4sXG5cbiAgICBdKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Q3VzdG9tR3JhbW1hciA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZS5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Q3VzdG9tR3JhbW1hclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhDdXN0b21HcmFtbWFyU2VsZWN0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEN1c3RvbUdyYW1tYXJTZWxlY3QsIHtcbiAgdGFnTmFtZTogJ3NlbGVjdCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnY3VzdG9tLWdyYW1tYXInLFxuICAgIHNwZWxsQ2hlY2s6IGZhbHNlXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXJTZWxlY3Q7XG4iXX0=