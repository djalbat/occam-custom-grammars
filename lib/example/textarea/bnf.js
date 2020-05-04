'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var easy = require('easy');

var InputElement = easy.InputElement;

var BNFTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(BNFTextarea, _InputElement);

  var _super = _createSuper(BNFTextarea);

  function BNFTextarea() {
    _classCallCheck(this, BNFTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(BNFTextarea, [{
    key: "clearBNF",
    value: function clearBNF() {
      var value = '';
      this.setValue(value);
    }
  }, {
    key: "getBNF",
    value: function getBNF() {
      var value = this.getValue(),
          bnf = value; ///

      return bnf;
    }
  }, {
    key: "setBNF",
    value: function setBNF(bnf) {
      var value = bnf; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this),
          clearBNF = this.clearBNF.bind(this),
          setBNFReadOnly = this.setReadOnly.bind(this);
      return {
        getBNF: getBNF,
        setBNF: setBNF,
        clearBNF: clearBNF,
        setBNFReadOnly: setBNFReadOnly
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(BNFTextarea, properties);
    }
  }]);

  return BNFTextarea;
}(InputElement);

Object.assign(BNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'bnf',
    spellCheck: 'false',
    readOnly: true
  }
});
module.exports = BNFTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIkJORlRleHRhcmVhIiwidmFsdWUiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwiYm5mIiwiZ2V0Qk5GIiwiYmluZCIsInNldEJORiIsImNsZWFyQk5GIiwic2V0Qk5GUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxXOzs7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsS0FBSyxHQUFHLEVBQWQ7QUFFQSxXQUFLQyxRQUFMLENBQWNELEtBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUEsS0FBSyxHQUFHLEtBQUtFLFFBQUwsRUFBZDtBQUFBLFVBQ01DLEdBQUcsR0FBR0gsS0FEWixDQURPLENBRWE7O0FBRXBCLGFBQVFHLEdBQVI7QUFDRDs7OzJCQUVNQSxHLEVBQUs7QUFDVixVQUFNSCxLQUFLLEdBQUdHLEdBQWQsQ0FEVSxDQUNVOztBQUVwQixXQUFLRixRQUFMLENBQWNELEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUksTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFmO0FBQUEsVUFDTUMsTUFBTSxHQUFHLEtBQUtBLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQixDQURmO0FBQUEsVUFFTUUsUUFBUSxHQUFHLEtBQUtBLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUZqQjtBQUFBLFVBR01HLGNBQWMsR0FBRyxLQUFLQyxXQUFMLENBQWlCSixJQUFqQixDQUFzQixJQUF0QixDQUh2QjtBQUtBLGFBQVE7QUFDTkQsUUFBQUEsTUFBTSxFQUFOQSxNQURNO0FBRU5FLFFBQUFBLE1BQU0sRUFBTkEsTUFGTTtBQUdOQyxRQUFBQSxRQUFRLEVBQVJBLFFBSE07QUFJTkMsUUFBQUEsY0FBYyxFQUFkQTtBQUpNLE9BQVI7QUFNRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT1osWUFBWSxDQUFDYSxjQUFiLENBQTRCWixXQUE1QixFQUF5Q1csVUFBekMsQ0FBUDtBQUE4RDs7OztFQWxDMUVaLFk7O0FBcUMxQmMsTUFBTSxDQUFDQyxNQUFQLENBQWNkLFdBQWQsRUFBMkI7QUFDekJlLEVBQUFBLE9BQU8sRUFBRSxVQURnQjtBQUV6QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRSxLQURNO0FBRWpCQyxJQUFBQSxVQUFVLEVBQUUsT0FGSztBQUdqQkMsSUFBQUEsUUFBUSxFQUFFO0FBSE87QUFGTSxDQUEzQjtBQVNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJyQixXQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEJORlRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY2xlYXJCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSAnJztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gKGJuZik7XG4gIH1cblxuICBzZXRCTkYoYm5mKSB7XG4gICAgY29uc3QgdmFsdWUgPSBibmY7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRCTkYgPSB0aGlzLmdldEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEJORiA9IHRoaXMuc2V0Qk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJCTkYgPSB0aGlzLmNsZWFyQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Qk5GUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEJORixcbiAgICAgIHNldEJORixcbiAgICAgIGNsZWFyQk5GLFxuICAgICAgc2V0Qk5GUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQk5GVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdibmYnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZScsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GVGV4dGFyZWE7XG4iXX0=