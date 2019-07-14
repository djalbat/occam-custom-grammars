'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var fileSystemUtilities = necessary.fileSystemUtilities,
    readFile = fileSystemUtilities.readFile,
    checkFileExists = fileSystemUtilities.checkFileExists;

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
  }, {
    key: 'fromDirectoryPath',
    value: function fromDirectoryPath(directoryPath) {
      var lexicalPatternFilePath = directoryPath + '/pattern.lex',
          termBNFFilePath = directoryPath + '/term.bnf',
          expressionBNFFilePath = directoryPath + '/expression.bnf',
          statementBNFFilePath = directoryPath + '/statement.bnf',
          metastatementBNFFilePath = directoryPath + '/metastatement.bnf',
          lexicalPatternFileExists = checkFileExists(lexicalPatternFilePath),
          termBNFFileExists = checkFileExists(termBNFFilePath),
          expressionBNFFileExists = checkFileExists(expressionBNFFilePath),
          statementBNFFileExists = checkFileExists(statementBNFFilePath),
          metastatementBNFFileExists = checkFileExists(metastatementBNFFilePath),
          lexicalPatternContent = lexicalPatternFileExists ? readFile(lexicalPatternFilePath) : null,
          termBNFContent = termBNFFileExists ? readFile(termBNFFilePath) : null,
          expressionBNFContent = expressionBNFFileExists ? readFile(expressionBNFFilePath) : null,
          statementBNFContent = statementBNFFileExists ? readFile(statementBNFFilePath) : null,
          metastatementBNFContent = metastatementBNFFileExists ? readFile(metastatementBNFFilePath) : null,
          name = directoryPath,
          ///
      lexicalPattern = lexicalPatternContent,
          ///
      termBNF = termBNFContent,
          ///
      expressionBNF = expressionBNFContent,
          ///
      statementBNF = statementBNFContent,
          ///
      metastatementBNF = metastatementBNFContent,
          ///
      customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

      return customGrammar;
    }
  }]);

  return CustomGrammar;
}();

module.exports = CustomGrammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jdXN0b21HcmFtbWFyLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicmVhZEZpbGUiLCJjaGVja0ZpbGVFeGlzdHMiLCJDdXN0b21HcmFtbWFyIiwibmFtZSIsImxleGljYWxQYXR0ZXJuIiwidGVybUJORiIsImV4cHJlc3Npb25CTkYiLCJzdGF0ZW1lbnRCTkYiLCJtZXRhc3RhdGVtZW50Qk5GIiwicnVsZU5hbWUiLCJibmYiLCJzZXRMZXhpY2FsUGF0dGVybiIsInNldEJORiIsImpzb24iLCJjdXN0b21HcmFtbWFyIiwiZGlyZWN0b3J5UGF0aCIsImxleGljYWxQYXR0ZXJuRmlsZVBhdGgiLCJ0ZXJtQk5GRmlsZVBhdGgiLCJleHByZXNzaW9uQk5GRmlsZVBhdGgiLCJzdGF0ZW1lbnRCTkZGaWxlUGF0aCIsIm1ldGFzdGF0ZW1lbnRCTkZGaWxlUGF0aCIsImxleGljYWxQYXR0ZXJuRmlsZUV4aXN0cyIsInRlcm1CTkZGaWxlRXhpc3RzIiwiZXhwcmVzc2lvbkJORkZpbGVFeGlzdHMiLCJzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzIiwibWV0YXN0YXRlbWVudEJORkZpbGVFeGlzdHMiLCJsZXhpY2FsUGF0dGVybkNvbnRlbnQiLCJ0ZXJtQk5GQ29udGVudCIsImV4cHJlc3Npb25CTkZDb250ZW50Iiwic3RhdGVtZW50Qk5GQ29udGVudCIsIm1ldGFzdGF0ZW1lbnRCTkZDb250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFTSxJQUFFQyxtQkFBRixHQUEwQkYsU0FBMUIsQ0FBRUUsbUJBQUY7QUFBQSxJQUNFQyxRQURGLEdBQ2dDRCxtQkFEaEMsQ0FDRUMsUUFERjtBQUFBLElBQ1lDLGVBRFosR0FDZ0NGLG1CQURoQyxDQUNZRSxlQURaOztJQUdBQyxhO0FBQ0oseUJBQVlDLElBQVos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YUFmYjtBQUFBLFVBZTRCO0FBQ3RCWCx1QkFBaUJzQixxQkFoQnZCO0FBQUEsVUFnQjhDO0FBQ3hDckIsZ0JBQVVzQixjQWpCaEI7QUFBQSxVQWlCZ0M7QUFDMUJyQixzQkFBZ0JzQixvQkFsQnRCO0FBQUEsVUFrQjRDO0FBQ3RDckIscUJBQWVzQixtQkFuQnJCO0FBQUEsVUFtQjBDO0FBQ3BDckIseUJBQW1Cc0IsdUJBcEJ6QjtBQUFBLFVBb0JrRDtBQUM1Q2hCLHNCQUFnQixJQUFJWixhQUFKLENBQWtCQyxJQUFsQixFQUF3QkMsY0FBeEIsRUFBd0NDLE9BQXhDLEVBQWlEQyxhQUFqRCxFQUFnRUMsWUFBaEUsRUFBOEVDLGdCQUE5RSxDQXJCdEI7O0FBdUJBLGFBQU9NLGFBQVA7QUFDRDs7Ozs7O0FBR0hpQixPQUFPQyxPQUFQLEdBQWlCOUIsYUFBakIiLCJmaWxlIjoiY3VzdG9tR3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgZmlsZVN5c3RlbVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyByZWFkRmlsZSwgY2hlY2tGaWxlRXhpc3RzIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5jbGFzcyBDdXN0b21HcmFtbWFyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICAgIHRoaXMudGVybUJORiA9IHRlcm1CTkY7XG4gICAgdGhpcy5leHByZXNzaW9uQk5GID0gZXhwcmVzc2lvbkJORjtcbiAgICB0aGlzLnN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORjtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBtZXRhc3RhdGVtZW50Qk5GO1xuICB9XG4gIFxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRMZXhpY2FsUGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIGdldEJORihydWxlTmFtZSkge1xuICAgIGxldCBibmY7XG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlICd0ZXJtJyA6XG4gICAgICAgIGJuZiA9IHRoaXMudGVybUJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2V4cHJlc3Npb24nIDpcbiAgICAgICAgYm5mID0gdGhpcy5leHByZXNzaW9uQk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3RhdGVtZW50JyA6XG4gICAgICAgIGJuZiA9IHRoaXMuc3RhdGVtZW50Qk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbWV0YXN0YXRlbWVudCcgOlxuICAgICAgICBibmYgPSB0aGlzLm1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgJ3Rlcm0nIDpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZXhwcmVzc2lvbicgOlxuICAgICAgICB0aGlzLmV4cHJlc3Npb25CTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGF0ZW1lbnQnIDpcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtZXRhc3RhdGVtZW50JyA6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRMZXhpY2FsUGF0dGVybigpIHsgXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgbGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgXCJuYW1lXCI6IHRoaXMubmFtZSxcbiAgICAgIFwibGV4aWNhbFBhdHRlcm5cIjogdGhpcy5sZXhpY2FsUGF0dGVybixcbiAgICAgIFwidGVybUJORlwiOiB0aGlzLnRlcm1CTkYsXG4gICAgICBcImV4cHJlc3Npb25CTkZcIjogdGhpcy5leHByZXNzaW9uQk5GLFxuICAgICAgXCJzdGF0ZW1lbnRCTkZcIjogdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICBcIm1ldGFzdGF0ZW1lbnRCTkZcIjogdGhpcy5tZXRhc3RhdGVtZW50Qk5GXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZSA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0ganNvbltcImxleGljYWxQYXR0ZXJuXCJdLFxuICAgICAgICAgIHRlcm1CTkYgPSBqc29uW1widGVybUJORlwiXSxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0ganNvbltcImV4cHJlc3Npb25CTkZcIl0sXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0ganNvbltcInN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0ganNvbltcIm1ldGFzdGF0ZW1lbnRCTkZcIl0sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vcGF0dGVybi5sZXhgLFxuICAgICAgICAgIHRlcm1CTkZGaWxlUGF0aCA9IGAke2RpcmVjdG9yeVBhdGh9L3Rlcm0uYm5mYCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9leHByZXNzaW9uLmJuZmAsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9zdGF0ZW1lbnQuYm5mYCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9tZXRhc3RhdGVtZW50LmJuZmAsXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm5GaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGxleGljYWxQYXR0ZXJuRmlsZVBhdGgpLFxuICAgICAgICAgIHRlcm1CTkZGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHRlcm1CTkZGaWxlUGF0aCksXG4gICAgICAgICAgZXhwcmVzc2lvbkJORkZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMoZXhwcmVzc2lvbkJORkZpbGVQYXRoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHN0YXRlbWVudEJORkZpbGVQYXRoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGgpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuQ29udGVudCA9IGxleGljYWxQYXR0ZXJuRmlsZUV4aXN0cyA/IHJlYWRGaWxlKGxleGljYWxQYXR0ZXJuRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GQ29udGVudCA9IHRlcm1CTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUodGVybUJORkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORkNvbnRlbnQgPSBleHByZXNzaW9uQk5GRmlsZUV4aXN0cyA/IHJlYWRGaWxlKGV4cHJlc3Npb25CTkZGaWxlUGF0aCkgOiBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEJORkNvbnRlbnQgPSBzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUoc3RhdGVtZW50Qk5GRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GQ29udGVudCA9IG1ldGFzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUobWV0YXN0YXRlbWVudEJORkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgbmFtZSA9IGRpcmVjdG9yeVBhdGgsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm5Db250ZW50LCAvLy9cbiAgICAgICAgICB0ZXJtQk5GID0gdGVybUJORkNvbnRlbnQsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBleHByZXNzaW9uQk5GQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GQ29udGVudCwgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkZDb250ZW50LCAvLy9cbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXI7XG4iXX0=