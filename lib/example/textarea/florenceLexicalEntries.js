'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var FlorenceLexicalEntriesTextarea = function (_InputElement) {
  _inherits(FlorenceLexicalEntriesTextarea, _InputElement);

  function FlorenceLexicalEntriesTextarea() {
    _classCallCheck(this, FlorenceLexicalEntriesTextarea);

    return _possibleConstructorReturn(this, (FlorenceLexicalEntriesTextarea.__proto__ || Object.getPrototypeOf(FlorenceLexicalEntriesTextarea)).apply(this, arguments));
  }

  _createClass(FlorenceLexicalEntriesTextarea, [{
    key: 'setFlorenceLexicalEntries',
    value: function setFlorenceLexicalEntries(florenceLexicalEntries) {
      var value = JSON.stringify(florenceLexicalEntries, null, '  '); ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setFlorenceLexicalEntries = this.setFlorenceLexicalEntries.bind(this);

      return {
        setFlorenceLexicalEntries: setFlorenceLexicalEntries
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(FlorenceLexicalEntriesTextarea, properties);
    }
  }]);

  return FlorenceLexicalEntriesTextarea;
}(InputElement);

Object.assign(FlorenceLexicalEntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'florence-lexical-entries',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = FlorenceLexicalEntriesTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL2Zsb3JlbmNlTGV4aWNhbEVudHJpZXMuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJGbG9yZW5jZUxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJmbG9yZW5jZUxleGljYWxFbnRyaWVzIiwidmFsdWUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0VmFsdWUiLCJzZXRGbG9yZW5jZUxleGljYWxFbnRyaWVzIiwiYmluZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLDhCOzs7Ozs7Ozs7Ozs4Q0FDc0JDLHNCLEVBQXdCO0FBQ2hELFVBQU1DLFFBQVFDLEtBQUtDLFNBQUwsQ0FBZUgsc0JBQWYsRUFBdUMsSUFBdkMsRUFBNkMsSUFBN0MsQ0FBZCxDQURnRCxDQUNtQjs7QUFFbkUsV0FBS0ksUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1JLDRCQUE0QixLQUFLQSx5QkFBTCxDQUErQkMsSUFBL0IsQ0FBb0MsSUFBcEMsQ0FBbEM7O0FBRUEsYUFBUTtBQUNORDtBQURNLE9BQVI7QUFHRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT1QsYUFBYVUsY0FBYixDQUE0QlQsOEJBQTVCLEVBQTREUSxVQUE1RCxDQUFQO0FBQWlGOzs7O0VBZjFFVCxZOztBQWtCN0NXLE9BQU9DLE1BQVAsQ0FBY1gsOEJBQWQsRUFBOEM7QUFDNUNZLFdBQVMsVUFEbUM7QUFFNUNDLHFCQUFtQjtBQUNqQkMsZUFBVywwQkFETTtBQUVqQkMsZ0JBQVksT0FGSztBQUdqQkMsY0FBVTtBQUhPO0FBRnlCLENBQTlDOztBQVNBQyxPQUFPQyxPQUFQLEdBQWlCbEIsOEJBQWpCIiwiZmlsZSI6ImZsb3JlbmNlTGV4aWNhbEVudHJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBGbG9yZW5jZUxleGljYWxFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzZXRGbG9yZW5jZUxleGljYWxFbnRyaWVzKGZsb3JlbmNlTGV4aWNhbEVudHJpZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGZsb3JlbmNlTGV4aWNhbEVudHJpZXMsIG51bGwsICcgICcpOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0RmxvcmVuY2VMZXhpY2FsRW50cmllcyA9IHRoaXMuc2V0RmxvcmVuY2VMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRGbG9yZW5jZUxleGljYWxFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZsb3JlbmNlTGV4aWNhbEVudHJpZXNUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihGbG9yZW5jZUxleGljYWxFbnRyaWVzVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdmbG9yZW5jZS1sZXhpY2FsLWVudHJpZXMnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZScsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmxvcmVuY2VMZXhpY2FsRW50cmllc1RleHRhcmVhO1xuIl19