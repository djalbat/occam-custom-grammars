"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
      var name = directoryPath,
          ///
      lexicalPattern = lexicalPatternFromDirectoryPath(directoryPath),
          termBNF = termBNFFromDirectoryPath(directoryPath),
          expressionBNF = expressionBNFFromDirectoryPath(directoryPath),
          statementBNF = statementBNFFromDirectoryPath(directoryPath),
          metastatementBNF = metastatementBNFFromDirectoryPath(directoryPath),
          customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);
      return customGrammar;
    }
  }]);

  return CustomGrammar;
}();

exports["default"] = CustomGrammar;

function lexicalPatternFromDirectoryPath(directoryPath) {
  var lexicalPatternFilePath = "".concat(directoryPath, "/pattern.lex"),
      lexicalPatternFileExists = checkFileExists(lexicalPatternFilePath),
      lexicalPatternContent = lexicalPatternFileExists ? readFile(lexicalPatternFilePath) : null,
      lexicalPattern = lexicalPatternContent; ///

  return lexicalPattern;
}

function metastatementBNFFromDirectoryPath(directoryPath) {
  var metastatementBNFFilePath = "".concat(directoryPath, "/metastatement.bnf"),
      metastatementBNF = bnfFromBNFFilePath(metastatementBNFFilePath);
  return metastatementBNF;
}

function statementBNFFromDirectoryPath(directoryPath) {
  var statementBNFFilePath = "".concat(directoryPath, "/statement.bnf"),
      statementBNF = bnfFromBNFFilePath(statementBNFFilePath);
  return statementBNF;
}

function expressionBNFFromDirectoryPath(directoryPath) {
  var expressionBNFFilePath = "".concat(directoryPath, "/expression.bnf"),
      expressionBNF = bnfFromBNFFilePath(expressionBNFFilePath);
  return expressionBNF;
}

function termBNFFromDirectoryPath(directoryPath) {
  var termBNFFilePath = "".concat(directoryPath, "/term.bnf"),
      termBNF = bnfFromBNFFilePath(termBNFFilePath);
  return termBNF;
}

function bnfFromBNFFilePath(bnfFilePath) {
  var bnfFileExists = checkFileExists(bnfFilePath),
      bnfContent = bnfFileExists ? readFile(bnfFilePath) : null,
      bnf = bnfContent; ///

  return bnf;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUdyYW1tYXIuanMiXSwibmFtZXMiOlsicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiY2hlY2tGaWxlRXhpc3RzIiwiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsInJ1bGVOYW1lIiwiYm5mIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJqc29uIiwiY3VzdG9tR3JhbW1hciIsImRpcmVjdG9yeVBhdGgiLCJsZXhpY2FsUGF0dGVybkZyb21EaXJlY3RvcnlQYXRoIiwidGVybUJORkZyb21EaXJlY3RvcnlQYXRoIiwiZXhwcmVzc2lvbkJORkZyb21EaXJlY3RvcnlQYXRoIiwic3RhdGVtZW50Qk5GRnJvbURpcmVjdG9yeVBhdGgiLCJtZXRhc3RhdGVtZW50Qk5GRnJvbURpcmVjdG9yeVBhdGgiLCJsZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwibGV4aWNhbFBhdHRlcm5GaWxlRXhpc3RzIiwibGV4aWNhbFBhdHRlcm5Db250ZW50IiwibWV0YXN0YXRlbWVudEJORkZpbGVQYXRoIiwiYm5mRnJvbUJORkZpbGVQYXRoIiwic3RhdGVtZW50Qk5GRmlsZVBhdGgiLCJleHByZXNzaW9uQk5GRmlsZVBhdGgiLCJ0ZXJtQk5GRmlsZVBhdGgiLCJibmZGaWxlUGF0aCIsImJuZkZpbGVFeGlzdHMiLCJibmZDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVRQSxRLEdBQThCQyw4QixDQUE5QkQsUTtJQUFVRSxlLEdBQW9CRCw4QixDQUFwQkMsZTs7SUFFR0MsYTtBQUNuQix5QkFBWUMsSUFBWixFQUFrQkMsY0FBbEIsRUFBa0NDLE9BQWxDLEVBQTJDQyxhQUEzQyxFQUEwREMsWUFBMUQsRUFBd0VDLGdCQUF4RSxFQUEwRjtBQUFBOztBQUN4RixTQUFLTCxJQUFMLEdBQVlB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cm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcmVhZEZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBcInRlcm1cIjpcbiAgICAgICAgYm5mID0gdGhpcy50ZXJtQk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImV4cHJlc3Npb25cIjpcbiAgICAgICAgYm5mID0gdGhpcy5leHByZXNzaW9uQk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInN0YXRlbWVudFwiOlxuICAgICAgICBibmYgPSB0aGlzLnN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJtZXRhc3RhdGVtZW50XCI6XG4gICAgICAgIGJuZiA9IHRoaXMubWV0YXN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybikge1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIHNldEJORihydWxlTmFtZSwgYm5mKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBcInRlcm1cIjpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImV4cHJlc3Npb25cIjpcbiAgICAgICAgdGhpcy5leHByZXNzaW9uQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInN0YXRlbWVudFwiOlxuICAgICAgICB0aGlzLnN0YXRlbWVudEJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJtZXRhc3RhdGVtZW50XCI6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRMZXhpY2FsUGF0dGVybigpIHsgXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgbGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgXCJuYW1lXCI6IHRoaXMubmFtZSxcbiAgICAgIFwibGV4aWNhbFBhdHRlcm5cIjogdGhpcy5sZXhpY2FsUGF0dGVybixcbiAgICAgIFwidGVybUJORlwiOiB0aGlzLnRlcm1CTkYsXG4gICAgICBcImV4cHJlc3Npb25CTkZcIjogdGhpcy5leHByZXNzaW9uQk5GLFxuICAgICAgXCJzdGF0ZW1lbnRCTkZcIjogdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICBcIm1ldGFzdGF0ZW1lbnRCTkZcIjogdGhpcy5tZXRhc3RhdGVtZW50Qk5GXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZSA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0ganNvbltcImxleGljYWxQYXR0ZXJuXCJdLFxuICAgICAgICAgIHRlcm1CTkYgPSBqc29uW1widGVybUJORlwiXSxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0ganNvbltcImV4cHJlc3Npb25CTkZcIl0sXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0ganNvbltcInN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0ganNvbltcIm1ldGFzdGF0ZW1lbnRCTkZcIl0sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBuYW1lID0gZGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybkZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIHRlcm1CTkYgPSB0ZXJtQk5GRnJvbURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCksXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkZGcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkZGcm9tRGlyZWN0b3J5UGF0aChkaXJlY3RvcnlQYXRoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORkZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxleGljYWxQYXR0ZXJuRnJvbURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBsZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vcGF0dGVybi5sZXhgLFxuICAgICAgICBsZXhpY2FsUGF0dGVybkZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMobGV4aWNhbFBhdHRlcm5GaWxlUGF0aCksXG4gICAgICAgIGxleGljYWxQYXR0ZXJuQ29udGVudCA9IGxleGljYWxQYXR0ZXJuRmlsZUV4aXN0cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEZpbGUobGV4aWNhbFBhdHRlcm5GaWxlUGF0aCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybkNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBsZXhpY2FsUGF0dGVybjtcbn1cblxuZnVuY3Rpb24gbWV0YXN0YXRlbWVudEJORkZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3QgbWV0YXN0YXRlbWVudEJORkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vbWV0YXN0YXRlbWVudC5ibmZgLFxuICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gYm5mRnJvbUJORkZpbGVQYXRoKG1ldGFzdGF0ZW1lbnRCTkZGaWxlUGF0aCk7XG5cbiAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRCTkY7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEJORkZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3RhdGVtZW50Qk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9zdGF0ZW1lbnQuYm5mYCxcbiAgICAgICAgc3RhdGVtZW50Qk5GID0gYm5mRnJvbUJORkZpbGVQYXRoKHN0YXRlbWVudEJORkZpbGVQYXRoKTtcblxuICByZXR1cm4gc3RhdGVtZW50Qk5GO1xufVxuXG5mdW5jdGlvbiBleHByZXNzaW9uQk5GRnJvbURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBleHByZXNzaW9uQk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9leHByZXNzaW9uLmJuZmAsXG4gICAgICAgIGV4cHJlc3Npb25CTkYgPSBibmZGcm9tQk5GRmlsZVBhdGgoZXhwcmVzc2lvbkJORkZpbGVQYXRoKTtcblxuICByZXR1cm4gZXhwcmVzc2lvbkJORjtcbn1cblxuZnVuY3Rpb24gdGVybUJORkZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3QgdGVybUJORkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vdGVybS5ibmZgLFxuICAgICAgdGVybUJORiA9IGJuZkZyb21CTkZGaWxlUGF0aCh0ZXJtQk5GRmlsZVBhdGgpO1xuXG4gIHJldHVybiB0ZXJtQk5GO1xufVxuXG5mdW5jdGlvbiBibmZGcm9tQk5GRmlsZVBhdGgoYm5mRmlsZVBhdGgpIHtcbiAgY29uc3QgYm5mRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhibmZGaWxlUGF0aCksXG4gICAgICAgIGJuZkNvbnRlbnQgPSBibmZGaWxlRXhpc3RzID9cbiAgICAgICAgICAgICAgICAgICAgICAgcmVhZEZpbGUoYm5mRmlsZVBhdGgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICBibmYgPSBibmZDb250ZW50OyAvLy9cblxuICByZXR1cm4gYm5mO1xufVxuIl19