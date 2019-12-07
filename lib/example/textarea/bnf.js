'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var BNFTextarea = function (_InputElement) {
  _inherits(BNFTextarea, _InputElement);

  function BNFTextarea() {
    _classCallCheck(this, BNFTextarea);

    return _possibleConstructorReturn(this, (BNFTextarea.__proto__ || Object.getPrototypeOf(BNFTextarea)).apply(this, arguments));
  }

  _createClass(BNFTextarea, [{
    key: 'clearBNF',
    value: function clearBNF() {
      var value = '';

      this.setValue(value);
    }
  }, {
    key: 'getBNF',
    value: function getBNF() {
      var value = this.getValue(),
          bnf = value; ///

      return bnf;
    }
  }, {
    key: 'setBNF',
    value: function setBNF(bnf) {
      var value = bnf; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
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
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIkJORlRleHRhcmVhIiwidmFsdWUiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwiYm5mIiwiZ2V0Qk5GIiwiYmluZCIsInNldEJORiIsImNsZWFyQk5GIiwic2V0Qk5GUmVhZE9ubHkiLCJzZXRSZWFkT25seSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLFc7Ozs7Ozs7Ozs7OytCQUNPO0FBQ1QsVUFBTUMsUUFBUSxFQUFkOztBQUVBLFdBQUtDLFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQSxRQUFRLEtBQUtFLFFBQUwsRUFBZDtBQUFBLFVBQ01DLE1BQU1ILEtBRFosQ0FETyxDQUVhOztBQUVwQixhQUFRRyxHQUFSO0FBQ0Q7OzsyQkFFTUEsRyxFQUFLO0FBQ1YsVUFBTUgsUUFBUUcsR0FBZCxDQURVLENBQ1U7O0FBRXBCLFdBQUtGLFFBQUwsQ0FBY0QsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxTQUFTLEtBQUtBLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFmO0FBQUEsVUFDTUMsU0FBUyxLQUFLQSxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FEZjtBQUFBLFVBRU1FLFdBQVcsS0FBS0EsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBRmpCO0FBQUEsVUFHTUcsaUJBQWlCLEtBQUtDLFdBQUwsQ0FBaUJKLElBQWpCLENBQXNCLElBQXRCLENBSHZCOztBQUtBLGFBQVE7QUFDTkQsc0JBRE07QUFFTkUsc0JBRk07QUFHTkMsMEJBSE07QUFJTkM7QUFKTSxPQUFSO0FBTUQ7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9aLGFBQWFhLGNBQWIsQ0FBNEJaLFdBQTVCLEVBQXlDVyxVQUF6QyxDQUFQO0FBQThEOzs7O0VBbEMxRVosWTs7QUFxQzFCYyxPQUFPQyxNQUFQLENBQWNkLFdBQWQsRUFBMkI7QUFDekJlLFdBQVMsVUFEZ0I7QUFFekJDLHFCQUFtQjtBQUNqQkMsZUFBVyxLQURNO0FBRWpCQyxnQkFBWSxPQUZLO0FBR2pCQyxjQUFVO0FBSE87QUFGTSxDQUEzQjs7QUFTQUMsT0FBT0MsT0FBUCxHQUFpQnJCLFdBQWpCIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEJORlRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY2xlYXJCTkYoKSB7XG4gICAgY29uc3QgdmFsdWUgPSAnJztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gKGJuZik7XG4gIH1cblxuICBzZXRCTkYoYm5mKSB7XG4gICAgY29uc3QgdmFsdWUgPSBibmY7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRCTkYgPSB0aGlzLmdldEJORi5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEJORiA9IHRoaXMuc2V0Qk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJCTkYgPSB0aGlzLmNsZWFyQk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Qk5GUmVhZE9ubHkgPSB0aGlzLnNldFJlYWRPbmx5LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEJORixcbiAgICAgIHNldEJORixcbiAgICAgIGNsZWFyQk5GLFxuICAgICAgc2V0Qk5GUmVhZE9ubHlcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQk5GVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oQk5GVGV4dGFyZWEsIHtcbiAgdGFnTmFtZTogJ3RleHRhcmVhJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdibmYnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZScsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQk5GVGV4dGFyZWE7XG4iXX0=