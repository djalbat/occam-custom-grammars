'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var TopmostRuleNameInput = function (_InputElement) {
  _inherits(TopmostRuleNameInput, _InputElement);

  function TopmostRuleNameInput() {
    _classCallCheck(this, TopmostRuleNameInput);

    return _possibleConstructorReturn(this, (TopmostRuleNameInput.__proto__ || Object.getPrototypeOf(TopmostRuleNameInput)).apply(this, arguments));
  }

  _createClass(TopmostRuleNameInput, [{
    key: 'getTopmostRuleName',
    value: function getTopmostRuleName() {
      var value = this.getValue(),
          topmostRuleName = value; ///

      return topmostRuleName;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getTopmostRuleName = this.getTopmostRuleName.bind(this);

      return {
        getTopmostRuleName: getTopmostRuleName
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(TopmostRuleNameInput, properties);
    }
  }]);

  return TopmostRuleNameInput;
}(InputElement);

Object.assign(TopmostRuleNameInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'topmost-rule-name',
    spellCheck: 'false'
  }
});

module.exports = TopmostRuleNameInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2lucHV0L3RvcG1vc3RSdWxlTmFtZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlRvcG1vc3RSdWxlTmFtZUlucHV0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInRvcG1vc3RSdWxlTmFtZSIsImdldFRvcG1vc3RSdWxlTmFtZSIsImJpbmQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsb0I7Ozs7Ozs7Ozs7O3lDQUNpQjtBQUNuQixVQUFNQyxRQUFRLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLGtCQUFrQkYsS0FEeEIsQ0FEbUIsQ0FFYTs7QUFFaEMsYUFBT0UsZUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxxQkFBcUIsS0FBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBQTNCOztBQUVBLGFBQVE7QUFDTkQ7QUFETSxPQUFSO0FBR0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9QLGFBQWFRLGNBQWIsQ0FBNEJQLG9CQUE1QixFQUFrRE0sVUFBbEQsQ0FBUDtBQUF1RTs7OztFQWhCMUVQLFk7O0FBbUJuQ1MsT0FBT0MsTUFBUCxDQUFjVCxvQkFBZCxFQUFvQztBQUNsQ1UsV0FBUyxPQUR5QjtBQUVsQ0MscUJBQW1CO0FBQ2pCQyxlQUFXLG1CQURNO0FBRWpCQyxnQkFBWTtBQUZLO0FBRmUsQ0FBcEM7O0FBUUFDLE9BQU9DLE9BQVAsR0FBaUJmLG9CQUFqQiIsImZpbGUiOiJ0b3Btb3N0UnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBUb3Btb3N0UnVsZU5hbWVJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFRvcG1vc3RSdWxlTmFtZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICB0b3Btb3N0UnVsZU5hbWUgPSB2YWx1ZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRvcG1vc3RSdWxlTmFtZTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0VG9wbW9zdFJ1bGVOYW1lID0gdGhpcy5nZXRUb3Btb3N0UnVsZU5hbWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0VG9wbW9zdFJ1bGVOYW1lXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRvcG1vc3RSdWxlTmFtZUlucHV0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFRvcG1vc3RSdWxlTmFtZUlucHV0LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndG9wbW9zdC1ydWxlLW5hbWUnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVG9wbW9zdFJ1bGVOYW1lSW5wdXQ7XG4iXX0=