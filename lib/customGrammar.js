"use strict";

var _necessary = require("necessary");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var readFile = _necessary.fileSystemUtilities.readFile,
    checkFileExists = _necessary.fileSystemUtilities.checkFileExists;

var CustomGrammar = /*#__PURE__*/function () {
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
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getLexicalPattern",
    value: function getLexicalPattern() {
      return this.lexicalPattern;
    }
  }, {
    key: "getBNF",
    value: function getBNF(ruleName) {
      var bnf;

      switch (ruleName) {
        case "term":
          bnf = this.termBNF;
          break;

        case "expression":
          bnf = this.expressionBNF;
          break;

        case "statement":
          bnf = this.statementBNF;
          break;

        case "metastatement":
          bnf = this.metastatementBNF;
          break;
      }

      return bnf;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "setLexicalPattern",
    value: function setLexicalPattern(lexicalPattern) {
      this.lexicalPattern = lexicalPattern;
    }
  }, {
    key: "setBNF",
    value: function setBNF(ruleName, bnf) {
      switch (ruleName) {
        case "term":
          this.termBNF = bnf;
          break;

        case "expression":
          this.expressionBNF = bnf;
          break;

        case "statement":
          this.statementBNF = bnf;
          break;

        case "metastatement":
          this.metastatementBNF = bnf;
          break;
      }
    }
  }, {
    key: "resetLexicalPattern",
    value: function resetLexicalPattern() {
      var lexicalPattern = null;
      this.setLexicalPattern(lexicalPattern);
    }
  }, {
    key: "resetBNF",
    value: function resetBNF(ruleName) {
      var bnf = null;
      this.setBNF(ruleName, bnf);
    }
  }, {
    key: "update",
    value: function update(ruleName, bnf, lexicalPattern) {
      this.setBNF(ruleName, bnf);
      this.setLexicalPattern(lexicalPattern);
    }
  }, {
    key: "toJSON",
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
    key: "fromJSON",
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
    key: "fromName",
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
    key: "fromDirectoryPath",
    value: function fromDirectoryPath(directoryPath) {
      var lexicalPatternFilePath = "".concat(directoryPath, "/pattern.lex"),
          termBNFFilePath = "".concat(directoryPath, "/term.bnf"),
          expressionBNFFilePath = "".concat(directoryPath, "/expression.bnf"),
          statementBNFFilePath = "".concat(directoryPath, "/statement.bnf"),
          metastatementBNFFilePath = "".concat(directoryPath, "/metastatement.bnf"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUdyYW1tYXIuanMiXSwibmFtZXMiOlsicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiY2hlY2tGaWxlRXhpc3RzIiwiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsInJ1bGVOYW1lIiwiYm5mIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJqc29uIiwiY3VzdG9tR3JhbW1hciIsImRpcmVjdG9yeVBhdGgiLCJsZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwidGVybUJORkZpbGVQYXRoIiwiZXhwcmVzc2lvbkJORkZpbGVQYXRoIiwic3RhdGVtZW50Qk5GRmlsZVBhdGgiLCJtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGgiLCJsZXhpY2FsUGF0dGVybkZpbGVFeGlzdHMiLCJ0ZXJtQk5GRmlsZUV4aXN0cyIsImV4cHJlc3Npb25CTkZGaWxlRXhpc3RzIiwic3RhdGVtZW50Qk5GRmlsZUV4aXN0cyIsIm1ldGFzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzIiwibGV4aWNhbFBhdHRlcm5Db250ZW50IiwidGVybUJORkNvbnRlbnQiLCJleHByZXNzaW9uQk5GQ29udGVudCIsInN0YXRlbWVudEJORkNvbnRlbnQiLCJtZXRhc3RhdGVtZW50Qk5GQ29udGVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7OztJQUVRQSxRLEdBQThCQyw4QixDQUE5QkQsUTtJQUFVRSxlLEdBQW9CRCw4QixDQUFwQkMsZTs7SUFFWkMsYTtBQUNKLHlCQUFZQyxJQUFaLEVBQWtCQyxjQUFsQixFQUFrQ0MsT0FBbEMsRUFBMkNDLGFBQTNDLEVBQTBEQyxZQUExRCxFQUF3RUMsZ0JBQXhFLEVBQTBGO0FBQUE7O0FBQ3hGLFNBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLGNBQUwsR0FB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R0FBR3pCLFFBQVEsQ0FBQ29CLG9CQUFELENBQVgsR0FBb0MsSUFidEY7QUFBQSxVQWNNVyx1QkFBdUIsR0FBR0wsMEJBQTBCLEdBQUcxQixRQUFRLENBQUNxQix3QkFBRCxDQUFYLEdBQXdDLElBZGxHO0FBQUEsVUFlTWpCLElBQUksR0FBR1ksYUFmYjtBQUFBLFVBZTRCO0FBQ3RCWCxNQUFBQSxjQUFjLEdBQUdzQixxQkFoQnZCO0FBQUEsVUFnQjhDO0FBQ3hDckIsTUFBQUEsT0FBTyxHQUFHc0IsY0FqQmhCO0FBQUEsVUFpQmdDO0FBQzFCckIsTUFBQUEsYUFBYSxHQUFHc0Isb0JBbEJ0QjtBQUFBLFVBa0I0QztBQUN0Q3JCLE1BQUFBLFlBQVksR0FBR3NCLG1CQW5CckI7QUFBQSxVQW1CMEM7QUFDcENyQixNQUFBQSxnQkFBZ0IsR0FBR3NCLHVCQXBCekI7QUFBQSxVQW9Ca0Q7QUFDNUNoQixNQUFBQSxhQUFhLEdBQUcsSUFBSVosYUFBSixDQUFrQkMsSUFBbEIsRUFBd0JDLGNBQXhCLEVBQXdDQyxPQUF4QyxFQUFpREMsYUFBakQsRUFBZ0VDLFlBQWhFLEVBQThFQyxnQkFBOUUsQ0FyQnRCO0FBdUJBLGFBQU9NLGFBQVA7QUFDRDs7Ozs7O0FBR0hpQixNQUFNLENBQUNDLE9BQVAsR0FBaUI5QixhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IHJlYWRGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmNsYXNzIEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gICAgdGhpcy50ZXJtQk5GID0gdGVybUJORjtcbiAgICB0aGlzLmV4cHJlc3Npb25CTkYgPSBleHByZXNzaW9uQk5GO1xuICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkY7XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgbGV0IGJuZjtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgXCJ0ZXJtXCIgOlxuICAgICAgICBibmYgPSB0aGlzLnRlcm1CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiZXhwcmVzc2lvblwiIDpcbiAgICAgICAgYm5mID0gdGhpcy5leHByZXNzaW9uQk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInN0YXRlbWVudFwiIDpcbiAgICAgICAgYm5mID0gdGhpcy5zdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwibWV0YXN0YXRlbWVudFwiIDpcbiAgICAgICAgYm5mID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSB7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgc2V0Qk5GKHJ1bGVOYW1lLCBibmYpIHtcbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFwidGVybVwiIDpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImV4cHJlc3Npb25cIiA6XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJzdGF0ZW1lbnRcIiA6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIm1ldGFzdGF0ZW1lbnRcIiA6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRMZXhpY2FsUGF0dGVybigpIHsgXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgbGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgXCJuYW1lXCI6IHRoaXMubmFtZSxcbiAgICAgIFwibGV4aWNhbFBhdHRlcm5cIjogdGhpcy5sZXhpY2FsUGF0dGVybixcbiAgICAgIFwidGVybUJORlwiOiB0aGlzLnRlcm1CTkYsXG4gICAgICBcImV4cHJlc3Npb25CTkZcIjogdGhpcy5leHByZXNzaW9uQk5GLFxuICAgICAgXCJzdGF0ZW1lbnRCTkZcIjogdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICBcIm1ldGFzdGF0ZW1lbnRCTkZcIjogdGhpcy5tZXRhc3RhdGVtZW50Qk5GXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZSA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0ganNvbltcImxleGljYWxQYXR0ZXJuXCJdLFxuICAgICAgICAgIHRlcm1CTkYgPSBqc29uW1widGVybUJORlwiXSxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0ganNvbltcImV4cHJlc3Npb25CTkZcIl0sXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0ganNvbltcInN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0ganNvbltcIm1ldGFzdGF0ZW1lbnRCTkZcIl0sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vcGF0dGVybi5sZXhgLFxuICAgICAgICAgIHRlcm1CTkZGaWxlUGF0aCA9IGAke2RpcmVjdG9yeVBhdGh9L3Rlcm0uYm5mYCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9leHByZXNzaW9uLmJuZmAsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9zdGF0ZW1lbnQuYm5mYCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9tZXRhc3RhdGVtZW50LmJuZmAsXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm5GaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGxleGljYWxQYXR0ZXJuRmlsZVBhdGgpLFxuICAgICAgICAgIHRlcm1CTkZGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHRlcm1CTkZGaWxlUGF0aCksXG4gICAgICAgICAgZXhwcmVzc2lvbkJORkZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMoZXhwcmVzc2lvbkJORkZpbGVQYXRoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHN0YXRlbWVudEJORkZpbGVQYXRoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGgpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuQ29udGVudCA9IGxleGljYWxQYXR0ZXJuRmlsZUV4aXN0cyA/IHJlYWRGaWxlKGxleGljYWxQYXR0ZXJuRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GQ29udGVudCA9IHRlcm1CTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUodGVybUJORkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORkNvbnRlbnQgPSBleHByZXNzaW9uQk5GRmlsZUV4aXN0cyA/IHJlYWRGaWxlKGV4cHJlc3Npb25CTkZGaWxlUGF0aCkgOiBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEJORkNvbnRlbnQgPSBzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUoc3RhdGVtZW50Qk5GRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GQ29udGVudCA9IG1ldGFzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUobWV0YXN0YXRlbWVudEJORkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgbmFtZSA9IGRpcmVjdG9yeVBhdGgsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm5Db250ZW50LCAvLy9cbiAgICAgICAgICB0ZXJtQk5GID0gdGVybUJORkNvbnRlbnQsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBleHByZXNzaW9uQk5GQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GQ29udGVudCwgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkZDb250ZW50LCAvLy9cbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXI7XG4iXX0=