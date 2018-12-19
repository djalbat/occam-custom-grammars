'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parsers = require('occam-parsers');

var termDefaultCustomGrammarBNF = parsers.termDefaultCustomGrammarBNF,
    statementDefaultCustomGrammarBNF = parsers.statementDefaultCustomGrammarBNF,
    expressionDefaultCustomGrammarBNF = parsers.expressionDefaultCustomGrammarBNF,
    metastatementDefaultCustomGrammarBNF = parsers.metastatementDefaultCustomGrammarBNF;


var defaultCustomGrammarProjectName = 'default',
    ///
defaultCustomGrammarLexicalPattern = '';

var CustomGrammar = function () {
  function CustomGrammar(projectName, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF) {
    _classCallCheck(this, CustomGrammar);

    this.projectName = projectName;
    this.lexicalPattern = lexicalPattern;
    this.termBNF = termBNF;
    this.expressionBNF = expressionBNF;
    this.statementBNF = statementBNF;
    this.metastatementBNF = metastatementBNF;
  }

  _createClass(CustomGrammar, [{
    key: 'getProjectName',
    value: function getProjectName() {
      return this.projectName;
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
    key: 'setProjectName',
    value: function setProjectName(projectName) {
      this.projectName = projectName;
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
        "projectName": this.projectName,
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
      var projectName = json["projectName"],
          lexicalPattern = json["lexicalPattern"],
          termBNF = json["termBNF"],
          expressionBNF = json["expressionBNF"],
          statementBNF = json["statementBNF"],
          metastatementBNF = json["metastatementBNF"],
          customGrammar = new CustomGrammar(projectName, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

      return customGrammar;
    }
  }, {
    key: 'fromProjectName',
    value: function fromProjectName(projectName) {
      var lexicalPattern = null,
          termBNF = null,
          expressionBNF = null,
          statementBNF = null,
          metastatementBNF = null,
          customGrammar = new CustomGrammar(projectName, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

      return customGrammar;
    }
  }, {
    key: 'fromDefaults',
    value: function fromDefaults() {
      var projectName = defaultCustomGrammarProjectName,
          ///
      lexicalPattern = defaultCustomGrammarLexicalPattern,
          ///
      termBNF = termDefaultCustomGrammarBNF,
          ///
      expressionBNF = expressionDefaultCustomGrammarBNF,
          ///
      statementBNF = statementDefaultCustomGrammarBNF,
          ///
      metastatementBNF = metastatementDefaultCustomGrammarBNF,
          ///
      customGrammar = new CustomGrammar(projectName, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

      return customGrammar;
    }
  }]);

  return CustomGrammar;
}();

module.exports = CustomGrammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jdXN0b21HcmFtbWFyLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwidGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwic3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJleHByZXNzaW9uRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJkZWZhdWx0Q3VzdG9tR3JhbW1hclByb2plY3ROYW1lIiwiZGVmYXVsdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybiIsIkN1c3RvbUdyYW1tYXIiLCJwcm9qZWN0TmFtZSIsImxleGljYWxQYXR0ZXJuIiwidGVybUJORiIsImV4cHJlc3Npb25CTkYiLCJzdGF0ZW1lbnRCTkYiLCJtZXRhc3RhdGVtZW50Qk5GIiwicnVsZU5hbWUiLCJibmYiLCJzZXRMZXhpY2FsUGF0dGVybiIsInNldEJORiIsImpzb24iLCJjdXN0b21HcmFtbWFyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7SUFFUUMsMkIsR0FBMklGLE8sQ0FBM0lFLDJCO0lBQTZCQyxnQyxHQUE4R0gsTyxDQUE5R0csZ0M7SUFBa0NDLGlDLEdBQTRFSixPLENBQTVFSSxpQztJQUFtQ0Msb0MsR0FBeUNMLE8sQ0FBekNLLG9DOzs7QUFFMUcsSUFBTUMsa0NBQWtDLFNBQXhDO0FBQUEsSUFBbUQ7QUFDN0NDLHFDQUFxQyxFQUQzQzs7SUFHTUMsYTtBQUNKLHlCQUFZQyxXQUFaLEVBQXlCQyxjQUF6QixFQUF5Q0MsT0FBekMsRUFBa0RDLGFBQWxELEVBQWlFQyxZQUFqRSxFQUErRUMsZ0JBQS9FLEVBQWlHO0FBQUE7O0FBQy9GLFNBQUtMLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVB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eEQsRUFBdUVDLFlBQXZFLEVBQXFGQyxnQkFBckYsQ0FMdEI7O0FBT0EsYUFBT00sYUFBUDtBQUNEOzs7bUNBRXFCO0FBQ3BCLFVBQU1YLGNBQWNILCtCQUFwQjtBQUFBLFVBQXFEO0FBQy9DSSx1QkFBaUJILGtDQUR2QjtBQUFBLFVBQzREO0FBQ3RESSxnQkFBVVQsMkJBRmhCO0FBQUEsVUFFOEM7QUFDeENVLHNCQUFnQlIsaUNBSHRCO0FBQUEsVUFHMEQ7QUFDcERTLHFCQUFlVixnQ0FKckI7QUFBQSxVQUl3RDtBQUNsRFcseUJBQW1CVCxvQ0FMekI7QUFBQSxVQUtnRTtBQUMxRGUsc0JBQWdCLElBQUlaLGFBQUosQ0FBa0JDLFdBQWxCLEVBQStCQyxjQUEvQixFQUErQ0MsT0FBL0MsRUFBd0RDLGFBQXhELEVBQXVFQyxZQUF2RSxFQUFxRkMsZ0JBQXJGLENBTnRCOztBQVFBLGFBQU9NLGFBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJkLGFBQWpCIiwiZmlsZSI6ImN1c3RvbUdyYW1tYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHsgdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgfSA9IHBhcnNlcnM7XG5cbmNvbnN0IGRlZmF1bHRDdXN0b21HcmFtbWFyUHJvamVjdE5hbWUgPSAnZGVmYXVsdCcsIC8vL1xuICAgICAgZGVmYXVsdEN1c3RvbUdyYW1tYXJMZXhpY2FsUGF0dGVybiA9ICcnO1xuXG5jbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpIHtcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICAgIHRoaXMudGVybUJORiA9IHRlcm1CTkY7XG4gICAgdGhpcy5leHByZXNzaW9uQk5GID0gZXhwcmVzc2lvbkJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBtZXRhc3RhdGVtZW50Qk5GO1xuICB9XG4gIFxuICBnZXRQcm9qZWN0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0TmFtZTtcbiAgfVxuXG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgbGV0IGJuZjtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgJ3Rlcm0nIDpcbiAgICAgICAgYm5mID0gdGhpcy50ZXJtQk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZXhwcmVzc2lvbicgOlxuICAgICAgICBibmYgPSB0aGlzLmV4cHJlc3Npb25CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGF0ZW1lbnQnIDpcbiAgICAgICAgYm5mID0gdGhpcy5zdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtZXRhc3RhdGVtZW50JyA6XG4gICAgICAgIGJuZiA9IHRoaXMubWV0YXN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIHNldFByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgJ3Rlcm0nIDpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZXhwcmVzc2lvbicgOlxuICAgICAgICB0aGlzLmV4cHJlc3Npb25CTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGF0ZW1lbnQnIDpcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtZXRhc3RhdGVtZW50JyA6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRMZXhpY2FsUGF0dGVybigpIHsgXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgbGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgXCJwcm9qZWN0TmFtZVwiOiB0aGlzLnByb2plY3ROYW1lLFxuICAgICAgXCJsZXhpY2FsUGF0dGVyblwiOiB0aGlzLmxleGljYWxQYXR0ZXJuLFxuICAgICAgXCJ0ZXJtQk5GXCI6IHRoaXMudGVybUJORixcbiAgICAgIFwiZXhwcmVzc2lvbkJORlwiOiB0aGlzLmV4cHJlc3Npb25CTkYsXG4gICAgICBcInN0YXRlbWVudEJORlwiOiB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgIFwibWV0YXN0YXRlbWVudEJORlwiOiB0aGlzLm1ldGFzdGF0ZW1lbnRCTkZcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGpzb25bXCJwcm9qZWN0TmFtZVwiXSxcbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGpzb25bXCJsZXhpY2FsUGF0dGVyblwiXSxcbiAgICAgICAgICB0ZXJtQk5GID0ganNvbltcInRlcm1CTkZcIl0sXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IGpzb25bXCJleHByZXNzaW9uQk5GXCJdLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IGpzb25bXCJzdGF0ZW1lbnRCTkZcIl0sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IGpzb25bXCJtZXRhc3RhdGVtZW50Qk5GXCJdLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihwcm9qZWN0TmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGwsXG4gICAgICAgICAgdGVybUJORiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gbnVsbCxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIocHJvamVjdE5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tRGVmYXVsdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkZWZhdWx0Q3VzdG9tR3JhbW1hclByb2plY3ROYW1lLCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGRlZmF1bHRDdXN0b21HcmFtbWFyTGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgICB0ZXJtQk5GID0gdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCAgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEJORiA9IHN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCAgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgIC8vL1xuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihwcm9qZWN0TmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG4gICAgXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21HcmFtbWFyO1xuIl19