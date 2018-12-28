'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomGrammar = function () {
  function CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF) {
    _classCallCheck(this, CustomGrammar);

    this.name = name;
    this.lexicalPattern = lexicalPattern;
    this.termBNF = termBNF;
    this.expressionBNF = expressionBNF;
    this.statementBNF = statementBNF;
    this.metastatementBNF = metastatementBNF;
  }

  _createClass(CustomGrammar, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getLexicalPattern',
    value: function getLexicalPattern() {
      return this.lexicalPattern;
    }
  }, {
    key: 'getBNF',
    value: function getBNF(ruleName) {
      var bnf = void 0;

      switch (ruleName) {
        case 'term':
          bnf = this.termBNF;
          break;

        case 'expression':
          bnf = this.expressionBNF;
          break;

        case 'statement':
          bnf = this.statementBNF;
          break;

        case 'metastatement':
          bnf = this.metastatementBNF;
          break;
      }

      return bnf;
    }
  }, {
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'setLexicalPattern',
    value: function setLexicalPattern(lexicalPattern) {
      this.lexicalPattern = lexicalPattern;
    }
  }, {
    key: 'setBNF',
    value: function setBNF(ruleName, bnf) {
      switch (ruleName) {
        case 'term':
          this.termBNF = bnf;
          break;

        case 'expression':
          this.expressionBNF = bnf;
          break;

        case 'statement':
          this.statementBNF = bnf;
          break;

        case 'metastatement':
          this.metastatementBNF = bnf;
          break;
      }
    }
  }, {
    key: 'resetLexicalPattern',
    value: function resetLexicalPattern() {
      var lexicalPattern = null;

      this.setLexicalPattern(lexicalPattern);
    }
  }, {
    key: 'resetBNF',
    value: function resetBNF(ruleName) {
      var bnf = null;

      this.setBNF(ruleName, bnf);
    }
  }, {
    key: 'update',
    value: function update(ruleName, bnf, lexicalPattern) {
      this.setBNF(ruleName, bnf);
      this.setLexicalPattern(lexicalPattern);
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = {
        "name": this.name,
        "lexicalPattern": this.lexicalPattern,
        "termBNF": this.termBNF,
        "expressionBNF": this.expressionBNF,
        "statementBNF": this.statementBNF,
        "metastatementBNF": this.metastatementBNF
      };

      return json;
    }
  }], [{
    key: 'fromJSON',
    value: function fromJSON(json) {
      var name = json["name"],
          lexicalPattern = json["lexicalPattern"],
          termBNF = json["termBNF"],
          expressionBNF = json["expressionBNF"],
          statementBNF = json["statementBNF"],
          metastatementBNF = json["metastatementBNF"],
          customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

      return customGrammar;
    }
  }, {
    key: 'fromName',
    value: function fromName(name) {
      var lexicalPattern = null,
          termBNF = null,
          expressionBNF = null,
          statementBNF = null,
          metastatementBNF = null,
          customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

      return customGrammar;
    }
  }]);

  return CustomGrammar;
}();

module.exports = CustomGrammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jdXN0b21HcmFtbWFyLmpzIl0sIm5hbWVzIjpbIkN1c3RvbUdyYW1tYXIiLCJuYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJydWxlTmFtZSIsImJuZiIsInNldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwianNvbiIsImN1c3RvbUdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGE7QUFDSix5QkFBWUMsSUFBWixFQUFrQkMsY0FBbEIsRUFBa0NDLE9BQWxDLEVBQTJDQyxhQUEzQyxFQUEwREMsWUFBMUQsRUFBd0VDLGdCQUF4RSxFQUEwRjtBQUFBOztBQUN4RixTQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QkEsZ0JBQXhCO0FBQ0Q7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtMLElBQVo7QUFDRDs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtDLGNBQVo7QUFDRDs7OzJCQUVNSyxRLEVBQVU7QUFDZixVQUFJQyxZQUFKOztBQUVBLGNBQVFELFFBQVI7QUFDRSxhQUFLLE1BQUw7QUFDRUMsZ0JBQU0sS0FBS0wsT0FBWDtBQUNBOztBQUVGLGFBQUssWUFBTDtBQUNFSyxnQkFBTSxLQUFLSixhQUFYO0FBQ0E7O0FBRUYsYUFBSyxXQUFMO0FBQ0VJLGdCQUFNLEtBQUtILFlBQVg7QUFDQTs7QUFFRixhQUFLLGVBQUw7QUFDRUcsZ0JBQU0sS0FBS0YsZ0JBQVg7QUFDQTtBQWZKOztBQWtCQSxhQUFPRSxHQUFQO0FBQ0Q7Ozs0QkFFT1AsSSxFQUFNO0FBQ1osV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OztzQ0FFaUJDLGMsRUFBZ0I7QUFDaEMsV0FBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRDs7OzJCQUVNSyxRLEVBQVVDLEcsRUFBSztBQUNwQixjQUFRRCxRQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0UsZUFBS0osT0FBTCxHQUFlSyxHQUFmO0FBQ0E7O0FBRUYsYUFBSyxZQUFMO0FBQ0UsZUFBS0osYUFBTCxHQUFxQkksR0FBckI7QUFDQTs7QUFFRixhQUFLLFdBQUw7QUFDRSxlQUFLSCxZQUFMLEdBQW9CRyxHQUFwQjtBQUNBOztBQUVGLGFBQUssZUFBTDtBQUNFLGVBQUtGLGdCQUFMLEdBQXdCRSxHQUF4QjtBQUNBO0FBZko7QUFpQkQ7OzswQ0FFcUI7QUFDcEIsVUFBTU4saUJBQWlCLElBQXZCOztBQUVBLFdBQUtPLGlCQUFMLENBQXVCUCxjQUF2QjtBQUNEOzs7NkJBRVFLLFEsRUFBVTtBQUNqQixVQUFNQyxNQUFNLElBQVo7O0FBRUEsV0FBS0UsTUFBTCxDQUFZSCxRQUFaLEVBQXNCQyxHQUF0QjtBQUNEOzs7MkJBRU1ELFEsRUFBVUMsRyxFQUFLTixjLEVBQWdCO0FBQ3BDLFdBQUtRLE1BQUwsQ0FBWUgsUUFBWixFQUFzQkMsR0FBdEI7QUFDQSxXQUFLQyxpQkFBTCxDQUF1QlAsY0FBdkI7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTVMsT0FBTztBQUNYLGdCQUFRLEtBQUtWLElBREY7QUFFWCwwQkFBa0IsS0FBS0MsY0FGWjtBQUdYLG1CQUFXLEtBQUtDLE9BSEw7QUFJWCx5QkFBaUIsS0FBS0MsYUFKWDtBQUtYLHdCQUFnQixLQUFLQyxZQUxWO0FBTVgsNEJBQW9CLEtBQUtDO0FBTmQsT0FBYjs7QUFTQSxhQUFPSyxJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1WLE9BQU9VLEtBQUssTUFBTCxDQUFiO0FBQUEsVUFDTVQsaUJBQWlCUyxLQUFLLGdCQUFMLENBRHZCO0FBQUEsVUFFTVIsVUFBVVEsS0FBSyxTQUFMLENBRmhCO0FBQUEsVUFHTVAsZ0JBQWdCTyxLQUFLLGVBQUwsQ0FIdEI7QUFBQSxVQUlNTixlQUFlTSxLQUFLLGNBQUwsQ0FKckI7QUFBQSxVQUtNTCxtQkFBbUJLLEtBQUssa0JBQUwsQ0FMekI7QUFBQSxVQU1NQyxnQkFBZ0IsSUFBSVosYUFBSixDQUFrQkMsSUFBbEIsRUFBd0JDLGNBQXhCLEVBQXdDQyxPQUF4QyxFQUFpREMsYUFBakQsRUFBZ0VDLFlBQWhFLEVBQThFQyxnQkFBOUUsQ0FOdEI7O0FBUUEsYUFBT00sYUFBUDtBQUNEOzs7NkJBRWVYLEksRUFBTTtBQUNwQixVQUFNQyxpQkFBaUIsSUFBdkI7QUFBQSxVQUNNQyxVQUFVLElBRGhCO0FBQUEsVUFFTUMsZ0JBQWdCLElBRnRCO0FBQUEsVUFHTUMsZUFBZSxJQUhyQjtBQUFBLFVBSU1DLG1CQUFtQixJQUp6QjtBQUFBLFVBS01NLGdCQUFnQixJQUFJWixhQUFKLENBQWtCQyxJQUFsQixFQUF3QkMsY0FBeEIsRUFBd0NDLE9BQXhDLEVBQWlEQyxhQUFqRCxFQUFnRUMsWUFBaEUsRUFBOEVDLGdCQUE5RSxDQUx0Qjs7QUFPQSxhQUFPTSxhQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCZCxhQUFqQiIsImZpbGUiOiJjdXN0b21HcmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICAgIHRoaXMudGVybUJORiA9IHRlcm1CTkY7XG4gICAgdGhpcy5leHByZXNzaW9uQk5GID0gZXhwcmVzc2lvbkJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBtZXRhc3RhdGVtZW50Qk5GO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRMZXhpY2FsUGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIGdldEJORihydWxlTmFtZSkge1xuICAgIGxldCBibmY7XG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlICd0ZXJtJyA6XG4gICAgICAgIGJuZiA9IHRoaXMudGVybUJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2V4cHJlc3Npb24nIDpcbiAgICAgICAgYm5mID0gdGhpcy5leHByZXNzaW9uQk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3RhdGVtZW50JyA6XG4gICAgICAgIGJuZiA9IHRoaXMuc3RhdGVtZW50Qk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbWV0YXN0YXRlbWVudCcgOlxuICAgICAgICBibmYgPSB0aGlzLm1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgJ3Rlcm0nIDpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZXhwcmVzc2lvbicgOlxuICAgICAgICB0aGlzLmV4cHJlc3Npb25CTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGF0ZW1lbnQnIDpcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtZXRhc3RhdGVtZW50JyA6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRMZXhpY2FsUGF0dGVybigpIHsgXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgbGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgXCJuYW1lXCI6IHRoaXMubmFtZSxcbiAgICAgIFwibGV4aWNhbFBhdHRlcm5cIjogdGhpcy5sZXhpY2FsUGF0dGVybixcbiAgICAgIFwidGVybUJORlwiOiB0aGlzLnRlcm1CTkYsXG4gICAgICBcImV4cHJlc3Npb25CTkZcIjogdGhpcy5leHByZXNzaW9uQk5GLFxuICAgICAgXCJzdGF0ZW1lbnRCTkZcIjogdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICBcIm1ldGFzdGF0ZW1lbnRCTkZcIjogdGhpcy5tZXRhc3RhdGVtZW50Qk5GXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZSA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0ganNvbltcImxleGljYWxQYXR0ZXJuXCJdLFxuICAgICAgICAgIHRlcm1CTkYgPSBqc29uW1widGVybUJORlwiXSxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0ganNvbltcImV4cHJlc3Npb25CTkZcIl0sXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0ganNvbltcInN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0ganNvbltcIm1ldGFzdGF0ZW1lbnRCTkZcIl0sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tR3JhbW1hcjtcbiJdfQ==