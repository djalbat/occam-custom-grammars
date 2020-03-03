'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var necessary = require('necessary');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUdyYW1tYXIuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWFkRmlsZSIsImNoZWNrRmlsZUV4aXN0cyIsIkN1c3RvbUdyYW1tYXIiLCJuYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJ0ZXJtQk5GIiwiZXhwcmVzc2lvbkJORiIsInN0YXRlbWVudEJORiIsIm1ldGFzdGF0ZW1lbnRCTkYiLCJydWxlTmFtZSIsImJuZiIsInNldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwianNvbiIsImN1c3RvbUdyYW1tYXIiLCJkaXJlY3RvcnlQYXRoIiwibGV4aWNhbFBhdHRlcm5GaWxlUGF0aCIsInRlcm1CTkZGaWxlUGF0aCIsImV4cHJlc3Npb25CTkZGaWxlUGF0aCIsInN0YXRlbWVudEJORkZpbGVQYXRoIiwibWV0YXN0YXRlbWVudEJORkZpbGVQYXRoIiwibGV4aWNhbFBhdHRlcm5GaWxlRXhpc3RzIiwidGVybUJORkZpbGVFeGlzdHMiLCJleHByZXNzaW9uQk5GRmlsZUV4aXN0cyIsInN0YXRlbWVudEJORkZpbGVFeGlzdHMiLCJtZXRhc3RhdGVtZW50Qk5GRmlsZUV4aXN0cyIsImxleGljYWxQYXR0ZXJuQ29udGVudCIsInRlcm1CTkZDb250ZW50IiwiZXhwcmVzc2lvbkJORkNvbnRlbnQiLCJzdGF0ZW1lbnRCTkZDb250ZW50IiwibWV0YXN0YXRlbWVudEJORkNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXpCOztBQUVNLElBQUVDLG1CQUFGLEdBQTBCRixTQUExQixDQUFFRSxtQkFBRjtBQUFBLElBQ0VDLFFBREYsR0FDZ0NELG1CQURoQyxDQUNFQyxRQURGO0FBQUEsSUFDWUMsZUFEWixHQUNnQ0YsbUJBRGhDLENBQ1lFLGVBRFo7O0lBR0FDLGE7QUFDSix5QkFBWUMs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Q2lCLGVBQUQsQ0FBWCxHQUErQixJQVh2RTtBQUFBLFVBWU1XLG9CQUFvQixHQUFHTCx1QkFBdUIsR0FBR3ZCLFFBQVEsQ0FBQ2tCLHFCQUFELENBQVgsR0FBcUMsSUFaekY7QUFBQSxVQWFNVyxtQkFBbUIsR0FBR0wsc0JBQXNCLEdBQUd4QixRQUFRLENBQUNtQixvQkFBRCxDQUFYLEdBQW9DLElBYnRGO0FBQUEsVUFjTVcsdUJBQXVCLEdBQUdMLDBCQUEwQixHQUFHekIsUUFBUSxDQUFDb0Isd0JBQUQsQ0FBWCxHQUF3QyxJQWRsRztBQUFBLFVBZU1qQixJQUFJLEdBQUdZLGFBZmI7QUFBQSxVQWU0QjtBQUN0QlgsTUFBQUEsY0FBYyxHQUFHc0IscUJBaEJ2QjtBQUFBLFVBZ0I4QztBQUN4Q3JCLE1BQUFBLE9BQU8sR0FBR3NCLGNBakJoQjtBQUFBLFVBaUJnQztBQUMxQnJCLE1BQUFBLGFBQWEsR0FBR3NCLG9CQWxCdEI7QUFBQSxVQWtCNEM7QUFDdENyQixNQUFBQSxZQUFZLEdBQUdzQixtQkFuQnJCO0FBQUEsVUFtQjBDO0FBQ3BDckIsTUFBQUEsZ0JBQWdCLEdBQUdzQix1QkFwQnpCO0FBQUEsVUFvQmtEO0FBQzVDaEIsTUFBQUEsYUFBYSxHQUFHLElBQUlaLGFBQUosQ0FBa0JDLElBQWxCLEVBQXdCQyxjQUF4QixFQUF3Q0MsT0FBeEMsRUFBaURDLGFBQWpELEVBQWdFQyxZQUFoRSxFQUE4RUMsZ0JBQTlFLENBckJ0QjtBQXVCQSxhQUFPTSxhQUFQO0FBQ0Q7Ozs7OztBQUdIaUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCOUIsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcmVhZEZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSAndGVybScgOlxuICAgICAgICBibmYgPSB0aGlzLnRlcm1CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdleHByZXNzaW9uJyA6XG4gICAgICAgIGJuZiA9IHRoaXMuZXhwcmVzc2lvbkJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0YXRlbWVudCcgOlxuICAgICAgICBibmYgPSB0aGlzLnN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21ldGFzdGF0ZW1lbnQnIDpcbiAgICAgICAgYm5mID0gdGhpcy5tZXRhc3RhdGVtZW50Qk5GO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSB7XG4gICAgdGhpcy5sZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuO1xuICB9XG5cbiAgc2V0Qk5GKHJ1bGVOYW1lLCBibmYpIHtcbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlICd0ZXJtJyA6XG4gICAgICAgIHRoaXMudGVybUJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2V4cHJlc3Npb24nIDpcbiAgICAgICAgdGhpcy5leHByZXNzaW9uQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3RhdGVtZW50JyA6XG4gICAgICAgIHRoaXMuc3RhdGVtZW50Qk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbWV0YXN0YXRlbWVudCcgOlxuICAgICAgICB0aGlzLm1ldGFzdGF0ZW1lbnRCTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0TGV4aWNhbFBhdHRlcm4oKSB7IFxuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHJlc2V0Qk5GKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgYm5mID0gbnVsbDtcblxuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICB9XG5cbiAgdXBkYXRlKHJ1bGVOYW1lLCBibmYsIGxleGljYWxQYXR0ZXJuKSB7XG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIFwibmFtZVwiOiB0aGlzLm5hbWUsXG4gICAgICBcImxleGljYWxQYXR0ZXJuXCI6IHRoaXMubGV4aWNhbFBhdHRlcm4sXG4gICAgICBcInRlcm1CTkZcIjogdGhpcy50ZXJtQk5GLFxuICAgICAgXCJleHByZXNzaW9uQk5GXCI6IHRoaXMuZXhwcmVzc2lvbkJORixcbiAgICAgIFwic3RhdGVtZW50Qk5GXCI6IHRoaXMuc3RhdGVtZW50Qk5GLFxuICAgICAgXCJtZXRhc3RhdGVtZW50Qk5GXCI6IHRoaXMubWV0YXN0YXRlbWVudEJORlxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IG5hbWUgPSBqc29uW1wibmFtZVwiXSxcbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGpzb25bXCJsZXhpY2FsUGF0dGVyblwiXSxcbiAgICAgICAgICB0ZXJtQk5GID0ganNvbltcInRlcm1CTkZcIl0sXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IGpzb25bXCJleHByZXNzaW9uQk5GXCJdLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IGpzb25bXCJzdGF0ZW1lbnRCTkZcIl0sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IGpzb25bXCJtZXRhc3RhdGVtZW50Qk5GXCJdLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGwsXG4gICAgICAgICAgdGVybUJORiA9IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gbnVsbCxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm5GaWxlUGF0aCA9IGAke2RpcmVjdG9yeVBhdGh9L3BhdHRlcm4ubGV4YCxcbiAgICAgICAgICB0ZXJtQk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS90ZXJtLmJuZmAsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vZXhwcmVzc2lvbi5ibmZgLFxuICAgICAgICAgIHN0YXRlbWVudEJORkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vc3RhdGVtZW50LmJuZmAsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vbWV0YXN0YXRlbWVudC5ibmZgLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhsZXhpY2FsUGF0dGVybkZpbGVQYXRoKSxcbiAgICAgICAgICB0ZXJtQk5GRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyh0ZXJtQk5GRmlsZVBhdGgpLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkZGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGV4cHJlc3Npb25CTkZGaWxlUGF0aCksXG4gICAgICAgICAgc3RhdGVtZW50Qk5GRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhzdGF0ZW1lbnRCTkZGaWxlUGF0aCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORkZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMobWV0YXN0YXRlbWVudEJORkZpbGVQYXRoKSxcbiAgICAgICAgICBsZXhpY2FsUGF0dGVybkNvbnRlbnQgPSBsZXhpY2FsUGF0dGVybkZpbGVFeGlzdHMgPyByZWFkRmlsZShsZXhpY2FsUGF0dGVybkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgdGVybUJORkNvbnRlbnQgPSB0ZXJtQk5GRmlsZUV4aXN0cyA/IHJlYWRGaWxlKHRlcm1CTkZGaWxlUGF0aCkgOiBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkZDb250ZW50ID0gZXhwcmVzc2lvbkJORkZpbGVFeGlzdHMgPyByZWFkRmlsZShleHByZXNzaW9uQk5GRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkZDb250ZW50ID0gc3RhdGVtZW50Qk5GRmlsZUV4aXN0cyA/IHJlYWRGaWxlKHN0YXRlbWVudEJORkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORkNvbnRlbnQgPSBtZXRhc3RhdGVtZW50Qk5GRmlsZUV4aXN0cyA/IHJlYWRGaWxlKG1ldGFzdGF0ZW1lbnRCTkZGaWxlUGF0aCkgOiBudWxsLFxuICAgICAgICAgIG5hbWUgPSBkaXJlY3RvcnlQYXRoLCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGxleGljYWxQYXR0ZXJuQ29udGVudCwgLy8vXG4gICAgICAgICAgdGVybUJORiA9IHRlcm1CTkZDb250ZW50LCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gZXhwcmVzc2lvbkJORkNvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEJORiA9IHN0YXRlbWVudEJORkNvbnRlbnQsIC8vL1xuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBtZXRhc3RhdGVtZW50Qk5GQ29udGVudCwgLy8vXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdXN0b21HcmFtbWFyO1xuIl19