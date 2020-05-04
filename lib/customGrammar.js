"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var necessary = require("necessary");

var fileSystemUtilities = necessary.fileSystemUtilities,
    readFile = fileSystemUtilities.readFile,
    checkFileExists = fileSystemUtilities.checkFileExists;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUdyYW1tYXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsImNoZWNrRmlsZUV4aXN0cyIsIkN1c3RvbUdyYW1tYXIiLCJuYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJydWxlTmFtZSIsImJuZiIsInNldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwianNvbiIsImN1c3RvbUdyYW1tYXIiLCJkaXJlY3RvcnlQYXRoIiwibGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsInRlcm1CTkZGaWxlUGF0aCIsImV4cHJlc3Npb25CTkZGaWxlUGF0aCIsInN0YXRlbWVudEJORkZpbGVQYXRoIiwibWV0YXN0YXRlbWVudEJORkZpbGVQYXRoIiwibGV4aWNhbFBhdHRlcm5GaWxlRXhpc3RzIiwidGVybUJORkZpbGVFeGlzdHMiLCJleHByZXNzaW9uQk5GRmlsZUV4aXN0cyIsInN0YXRlbWVudEJORkZpbGVFeGlzdHMiLCJtZXRhc3RhdGVtZW50Qk5GRmlsZUV4aXN0cyIsImxleGljYWxQYXR0ZXJuQ29udGVudCIsInRlcm1CTkZDb250ZW50IiwiZXhwcmVzc2lvbkJORkNvbnRlbnQiLCJzdGF0ZW1lbnRCTkZDb250ZW50IiwibWV0YXN0YXRlbWVudEJORkNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXpCOztBQUVNLElBQUVDLG1CQUFGLEdBQTBCRixTQUExQixDQUFFRSxtQkFBRjtBQUFBLElBQ0VDLFFBREYsR0FDZ0NELG1CQURoQyxDQUNFQyxRQURGO0FBQUEsSUFDWUMsZUFEWixHQUNnQ0YsbUJBRGhDLENBQ1lFLGVBRFo7O0lBR0FDLGE7QUFDSix5QkFBWUMs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Q2lCLGVBQUQsQ0FBWCxHQUErQixJQVh2RTtBQUFBLFVBWU1XLG9CQUFvQixHQUFHTCx1QkFBdUIsR0FBR3ZCLFFBQVEsQ0FBQ2tCLHFCQUFELENBQVgsR0FBcUMsSUFaekY7QUFBQSxVQWFNVyxtQkFBbUIsR0FBR0wsc0JBQXNCLEdBQUd4QixRQUFRLENBQUNtQixvQkFBRCxDQUFYLEdBQW9DLElBYnRGO0FBQUEsVUFjTVcsdUJBQXVCLEdBQUdMLDBCQUEwQixHQUFHekIsUUFBUSxDQUFDb0Isd0JBQUQsQ0FBWCxHQUF3QyxJQWRsRztBQUFBLFVBZU1qQixJQUFJLEdBQUdZLGFBZmI7QUFBQSxVQWU0QjtBQUN0QlgsTUFBQUEsY0FBYyxHQUFHc0IscUJBaEJ2QjtBQUFBLFVBZ0I4QztBQUN4Q3JCLE1BQUFBLE9BQU8sR0FBR3NCLGNBakJoQjtBQUFBLFVBaUJnQztBQUMxQnJCLE1BQUFBLGFBQWEsR0FBR3NCLG9CQWxCdEI7QUFBQSxVQWtCNEM7QUFDdENyQixNQUFBQSxZQUFZLEdBQUdzQixtQkFuQnJCO0FBQUEsVUFtQjBDO0FBQ3BDckIsTUFBQUEsZ0JBQWdCLEdBQUdzQix1QkFwQnpCO0FBQUEsVUFvQmtEO0FBQzVDaEIsTUFBQUEsYUFBYSxHQUFHLElBQUlaLGFBQUosQ0FBa0JDLElBQWxCLEVBQXdCQyxjQUF4QixFQUF3Q0MsT0FBeEMsRUFBaURDLGFBQWpELEVBQWdFQyxZQUFoRSxFQUE4RUMsZ0JBQTlFLENBckJ0QjtBQXVCQSxhQUFPTSxhQUFQO0FBQ0Q7Ozs7OztBQUdIaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCOUIsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZShcIm5lY2Vzc2FyeVwiKTtcblxuY29uc3QgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IHJlYWRGaWxlLCBjaGVja0ZpbGVFeGlzdHMgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmNsYXNzIEN1c3RvbUdyYW1tYXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gICAgdGhpcy50ZXJtQk5GID0gdGVybUJORjtcbiAgICB0aGlzLmV4cHJlc3Npb25CTkYgPSBleHByZXNzaW9uQk5GO1xuICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkY7XG4gIH1cbiAgXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldExleGljYWxQYXR0ZXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgZ2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgbGV0IGJuZjtcblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgXCJ0ZXJtXCIgOlxuICAgICAgICBibmYgPSB0aGlzLnRlcm1CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiZXhwcmVzc2lvblwiIDpcbiAgICAgICAgYm5mID0gdGhpcy5leHByZXNzaW9uQk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInN0YXRlbWVudFwiIDpcbiAgICAgICAgYm5mID0gdGhpcy5zdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwibWV0YXN0YXRlbWVudFwiIDpcbiAgICAgICAgYm5mID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSB7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgc2V0Qk5GKHJ1bGVOYW1lLCBibmYpIHtcbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIFwidGVybVwiIDpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImV4cHJlc3Npb25cIiA6XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJzdGF0ZW1lbnRcIiA6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIm1ldGFzdGF0ZW1lbnRcIiA6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRMZXhpY2FsUGF0dGVybigpIHsgXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgbGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgXCJuYW1lXCI6IHRoaXMubmFtZSxcbiAgICAgIFwibGV4aWNhbFBhdHRlcm5cIjogdGhpcy5sZXhpY2FsUGF0dGVybixcbiAgICAgIFwidGVybUJORlwiOiB0aGlzLnRlcm1CTkYsXG4gICAgICBcImV4cHJlc3Npb25CTkZcIjogdGhpcy5leHByZXNzaW9uQk5GLFxuICAgICAgXCJzdGF0ZW1lbnRCTkZcIjogdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICBcIm1ldGFzdGF0ZW1lbnRCTkZcIjogdGhpcy5tZXRhc3RhdGVtZW50Qk5GXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZSA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0ganNvbltcImxleGljYWxQYXR0ZXJuXCJdLFxuICAgICAgICAgIHRlcm1CTkYgPSBqc29uW1widGVybUJORlwiXSxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0ganNvbltcImV4cHJlc3Npb25CTkZcIl0sXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0ganNvbltcInN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0ganNvbltcIm1ldGFzdGF0ZW1lbnRCTkZcIl0sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vcGF0dGVybi5sZXhgLFxuICAgICAgICAgIHRlcm1CTkZGaWxlUGF0aCA9IGAke2RpcmVjdG9yeVBhdGh9L3Rlcm0uYm5mYCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9leHByZXNzaW9uLmJuZmAsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9zdGF0ZW1lbnQuYm5mYCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9tZXRhc3RhdGVtZW50LmJuZmAsXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm5GaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGxleGljYWxQYXR0ZXJuRmlsZVBhdGgpLFxuICAgICAgICAgIHRlcm1CTkZGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHRlcm1CTkZGaWxlUGF0aCksXG4gICAgICAgICAgZXhwcmVzc2lvbkJORkZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMoZXhwcmVzc2lvbkJORkZpbGVQYXRoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHN0YXRlbWVudEJORkZpbGVQYXRoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGgpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuQ29udGVudCA9IGxleGljYWxQYXR0ZXJuRmlsZUV4aXN0cyA/IHJlYWRGaWxlKGxleGljYWxQYXR0ZXJuRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GQ29udGVudCA9IHRlcm1CTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUodGVybUJORkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORkNvbnRlbnQgPSBleHByZXNzaW9uQk5GRmlsZUV4aXN0cyA/IHJlYWRGaWxlKGV4cHJlc3Npb25CTkZGaWxlUGF0aCkgOiBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEJORkNvbnRlbnQgPSBzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUoc3RhdGVtZW50Qk5GRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GQ29udGVudCA9IG1ldGFzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUobWV0YXN0YXRlbWVudEJORkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgbmFtZSA9IGRpcmVjdG9yeVBhdGgsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm5Db250ZW50LCAvLy9cbiAgICAgICAgICB0ZXJtQk5GID0gdGVybUJORkNvbnRlbnQsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBleHByZXNzaW9uQk5GQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GQ29udGVudCwgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkZDb250ZW50LCAvLy9cbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEN1c3RvbUdyYW1tYXI7XG4iXX0=