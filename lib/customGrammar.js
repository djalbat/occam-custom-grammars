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

exports["default"] = CustomGrammar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUdyYW1tYXIuanMiXSwibmFtZXMiOlsicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiY2hlY2tGaWxlRXhpc3RzIiwiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsInJ1bGVOYW1lIiwiYm5mIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJqc29uIiwiY3VzdG9tR3JhbW1hciIsImRpcmVjdG9yeVBhdGgiLCJsZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwidGVybUJORkZpbGVQYXRoIiwiZXhwcmVzc2lvbkJORkZpbGVQYXRoIiwic3RhdGVtZW50Qk5GRmlsZVBhdGgiLCJtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGgiLCJsZXhpY2FsUGF0dGVybkZpbGVFeGlzdHMiLCJ0ZXJtQk5GRmlsZUV4aXN0cyIsImV4cHJlc3Npb25CTkZGaWxlRXhpc3RzIiwic3RhdGVtZW50Qk5GRmlsZUV4aXN0cyIsIm1ldGFzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzIiwibGV4aWNhbFBhdHRlcm5Db250ZW50IiwidGVybUJORkNvbnRlbnQiLCJleHByZXNzaW9uQk5GQ29udGVudCIsInN0YXRlbWVudEJORkNvbnRlbnQiLCJtZXRhc3RhdGVtZW50Qk5GQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFUUEsUSxHQUE4QkMsOEIsQ0FBOUJELFE7SUFBVUUsZSxHQUFvQkQsOEIsQ0FBcEJDLGU7O0lBRUdDLGE7QUFDbkIseUJBQVlDLElBQVosRUFBa0JDLGNBQWxCLEVBQWtDQyxPQUFsQyxFQUEyQ0MsYUFBM0MsRUFBMERDLFlBQTFELEVBQXdFQyxnQkFBeEUsRUFBMEY7QUFBQTs7QUFDeEYsU0FBS0wsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLTCxJQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLQyxjQUFaO0FBQ0Q7OzsyQkFFTUssUSxFQUFVO0FBQ2YsVUFBSUMsR0FBSjs7QUFFQSxjQUFRRCxRQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0VDLFVBQUFBLEdBQUcsR0FBRyxLQUFLTCxPQUFYO0FBQ0E7O0FBRUYsYUFBSyxZQUFMO0FBQ0VLLFVBQUFBLEdBQUcsR0FBRyxLQUFLSixhQUFYO0FBQ0E7O0FBRUYsYUFBSyxXQUFMO0FBQ0VJLFVBQUFBLEdBQUcsR0FBRyxLQUFLSCxZQUFYO0FBQ0E7O0FBRUYsYUFBSyxlQUFMO0FBQ0VHLFVBQUFBLEdBQUcsR0FBRyxLQUFLRixnQkFBWDtBQUNBO0FBZko7O0FBa0JBLGFBQU9FLEdBQVA7QUFDRDs7OzRCQUVPUCxJLEVBQU07QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7O3NDQUVpQkMsYyxFQUFnQjtBQUNoQyxXQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNEOzs7MkJBRU1LLFEsRUFBVUMsRyxFQUFLO0FBQ3BCLGNBQVFELFFBQVI7QUFDRSxhQUFLLE1BQUw7QUFDRSxlQUFLSixPQUFMLEdBQWVLLEdBQWY7QUFDQTs7QUFFRixhQUFLLFlBQUw7QUFDRSxlQUFLSixhQUFMLEdBQXFCSSxHQUFyQjtBQUNBOztBQUVGLGFBQUssV0FBTDtBQUNFLGVBQUtILFlBQUwsR0FBb0JHLEdBQXBCO0FBQ0E7O0FBRUYsYUFBSyxlQUFMO0FBQ0UsZUFBS0YsZ0JBQUwsR0FBd0JFLEdBQXhCO0FBQ0E7QUFmSjtBQWlCRDs7OzBDQUVxQjtBQUNwQixVQUFNTixjQUFjLEdBQUcsSUFBdkI7QUFFQSxXQUFLTyxpQkFBTCxDQUF1QlAsY0FBdkI7QUFDRDs7OzZCQUVRSyxRLEVBQVU7QUFDakIsVUFBTUMsR0FBRyxHQUFHLElBQVo7QUFFQSxXQUFLRSxNQUFMLENBQVlILFFBQVosRUFBc0JDLEdBQXRCO0FBQ0Q7OzsyQkFFTUQsUSxFQUFVQyxHLEVBQUtOLGMsRUFBZ0I7QUFDcEMsV0FBS1EsTUFBTCxDQUFZSCxRQUFaLEVBQXNCQyxHQUF0QjtBQUNBLFdBQUtDLGlCQUFMLENBQXVCUCxjQUF2QjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNUyxJQUFJLEdBQUc7QUFDWCxnQkFBUSxLQUFLVixJQURGO0FBRVgsMEJBQWtCLEtBQUtDLGNBRlo7QUFHWCxtQkFBVyxLQUFLQyxPQUhMO0FBSVgseUJBQWlCLEtBQUtDLGFBSlg7QUFLWCx3QkFBZ0IsS0FBS0MsWUFMVjtBQU1YLDRCQUFvQixLQUFLQztBQU5kLE9BQWI7QUFTQSxhQUFPSyxJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1WLElBQUksR0FBR1UsSUFBSSxDQUFDLE1BQUQsQ0FBakI7QUFBQSxVQUNNVCxjQUFjLEdBQUdTLElBQUksQ0FBQyxnQkFBRCxDQUQzQjtBQUFBLFVBRU1SLE9BQU8sR0FBR1EsSUFBSSxDQUFDLFNBQUQsQ0FGcEI7QUFBQSxVQUdNUCxhQUFhLEdBQUdPLElBQUksQ0FBQyxlQUFELENBSDFCO0FBQUEsVUFJTU4sWUFBWSxHQUFHTSxJQUFJLENBQUMsY0FBRCxDQUp6QjtBQUFBLFVBS01MLGdCQUFnQixHQUFHSyxJQUFJLENBQUMsa0JBQUQsQ0FMN0I7QUFBQSxVQU1NQyxhQUFhLEdBQUcsSUFBSVosYUFBSixDQUFrQkMsSUFBbEIsRUFBd0JDLGNBQXhCLEVBQXdDQyxPQUF4QyxFQUFpREMsYUFBakQsRUFBZ0VDLFlBQWhFLEVBQThFQyxnQkFBOUUsQ0FOdEI7QUFRQSxhQUFPTSxhQUFQO0FBQ0Q7Ozs2QkFFZVgsSSxFQUFNO0FBQ3BCLFVBQU1DLGNBQWMsR0FBRyxJQUF2QjtBQUFBLFVBQ01DLE9BQU8sR0FBRyxJQURoQjtBQUFBLFVBRU1DLGFBQWEsR0FBRyxJQUZ0QjtBQUFBLFVBR01DLFlBQVksR0FBRyxJQUhyQjtBQUFBLFVBSU1DLGdCQUFnQixHQUFHLElBSnpCO0FBQUEsVUFLTU0sYUFBYSxHQUFHLElBQUlaLGFBQUosQ0FBa0JDLElBQWxCLEVBQXdCQyxjQUF4QixFQUF3Q0MsT0FBeEMsRUFBaURDLGFBQWpELEVBQWdFQyxZQUFoRSxFQUE4RUMsZ0JBQTlFLENBTHRCO0FBT0EsYUFBT00sYUFBUDtBQUNEOzs7c0NBRXdCQyxhLEVBQWU7QUFDdEMsVUFBTUMsc0JBQXNCLGFBQU1ELGFBQU4saUJBQTVCO0FBQUEsVUFDTUUsZUFBZSxhQUFNRixhQUFOLGNBRHJCO0FBQUEsVUFFTUcscUJBQXFCLGFBQU1ILGFBQU4sb0JBRjNCO0FBQUEsVUFHTUksb0JBQW9CLGFBQU1KLGFBQU4sbUJBSDFCO0FBQUEsVUFJTUssd0JBQXdCLGFBQU1MLGFBQU4sdUJBSjlCO0FBQUEsVUFLTU0sd0JBQXdCLEdBQUdwQixlQUFlLENBQUNlLHNCQUFELENBTGhEO0FBQUEsVUFNTU0saUJBQWlCLEdBQUdyQixlQUFlLENBQUNnQixlQUFELENBTnpDO0FBQUEsVUFPTU0sdUJBQXVCLEdBQUd0QixlQUFlLENBQUNpQixxQkFBRCxDQVAvQztBQUFBLFVBUU1NLHNCQUFzQixHQUFHdkIsZUFBZSxDQUFDa0Isb0JBQUQsQ0FSOUM7QUFBQSxVQVNNTSwwQkFBMEIsR0FBR3hCLGVBQWUsQ0FBQ21CLHdCQUFELENBVGxEO0FBQUEsVUFVTU0scUJBQXFCLEdBQUdMLHdCQUF3QixHQUFHdEIsUUFBUSxDQUFDaUIsc0JBQUQsQ0FBWCxHQUFzQyxJQVY1RjtBQUFBLFVBV01XLGNBQWMsR0FBR0wsaUJBQWlCLEdBQUd2QixRQUFRLENBQUNrQixlQUFELENBQVgsR0FBK0IsSUFYdkU7QUFBQSxVQVlNVyxvQkFBb0IsR0FBR0wsdUJBQXVCLEdBQUd4QixRQUFRLENBQUNtQixxQkFBRCxDQUFYLEdBQXFDLElBWnpGO0FBQUEsVUFhTVcsbUJBQW1CLEdBQUdMLHNCQUFzQixHQUFHekIsUUFBUSxDQUFDb0Isb0JBQUQsQ0FBWCxHQUFvQyxJQWJ0RjtBQUFBLFVBY01XLHVCQUF1QixHQUFHTCwwQkFBMEIsR0FBRzFCLFFBQVEsQ0FBQ3FCLHdCQUFELENBQVgsR0FBd0MsSUFkbEc7QUFBQSxVQWVNakIsSUFBSSxHQUFHWSxhQWZiO0FBQUEsVUFlNEI7QUFDdEJYLE1BQUFBLGNBQWMsR0FBR3NCLHFCQWhCdkI7QUFBQSxVQWdCOEM7QUFDeENyQixNQUFBQSxPQUFPLEdBQUdzQixjQWpCaEI7QUFBQSxVQWlCZ0M7QUFDMUJyQixNQUFBQSxhQUFhLEdBQUdzQixvQkFsQnRCO0FBQUEsVUFrQjRDO0FBQ3RDckIsTUFBQUEsWUFBWSxHQUFHc0IsbUJBbkJyQjtBQUFBLFVBbUIwQztBQUNwQ3JCLE1BQUFBLGdCQUFnQixHQUFHc0IsdUJBcEJ6QjtBQUFBLFVBb0JrRDtBQUM1Q2hCLE1BQUFBLGFBQWEsR0FBRyxJQUFJWixhQUFKLENBQWtCQyxJQUFsQixFQUF3QkMsY0FBeEIsRUFBd0NDLE9BQXhDLEVBQWlEQyxhQUFqRCxFQUFnRUMsWUFBaEUsRUFBOEVDLGdCQUE5RSxDQXJCdEI7QUF1QkEsYUFBT00sYUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcmVhZEZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBcInRlcm1cIjpcbiAgICAgICAgYm5mID0gdGhpcy50ZXJtQk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImV4cHJlc3Npb25cIjpcbiAgICAgICAgYm5mID0gdGhpcy5leHByZXNzaW9uQk5GO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInN0YXRlbWVudFwiOlxuICAgICAgICBibmYgPSB0aGlzLnN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJtZXRhc3RhdGVtZW50XCI6XG4gICAgICAgIGJuZiA9IHRoaXMubWV0YXN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybikge1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgfVxuXG4gIHNldEJORihydWxlTmFtZSwgYm5mKSB7XG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBcInRlcm1cIjpcbiAgICAgICAgdGhpcy50ZXJtQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImV4cHJlc3Npb25cIjpcbiAgICAgICAgdGhpcy5leHByZXNzaW9uQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInN0YXRlbWVudFwiOlxuICAgICAgICB0aGlzLnN0YXRlbWVudEJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJtZXRhc3RhdGVtZW50XCI6XG4gICAgICAgIHRoaXMubWV0YXN0YXRlbWVudEJORiA9IGJuZjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRMZXhpY2FsUGF0dGVybigpIHsgXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgcmVzZXRCTkYocnVsZU5hbWUpIHtcbiAgICBjb25zdCBibmYgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gIH1cblxuICB1cGRhdGUocnVsZU5hbWUsIGJuZiwgbGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgXCJuYW1lXCI6IHRoaXMubmFtZSxcbiAgICAgIFwibGV4aWNhbFBhdHRlcm5cIjogdGhpcy5sZXhpY2FsUGF0dGVybixcbiAgICAgIFwidGVybUJORlwiOiB0aGlzLnRlcm1CTkYsXG4gICAgICBcImV4cHJlc3Npb25CTkZcIjogdGhpcy5leHByZXNzaW9uQk5GLFxuICAgICAgXCJzdGF0ZW1lbnRCTkZcIjogdGhpcy5zdGF0ZW1lbnRCTkYsXG4gICAgICBcIm1ldGFzdGF0ZW1lbnRCTkZcIjogdGhpcy5tZXRhc3RhdGVtZW50Qk5GXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgbmFtZSA9IGpzb25bXCJuYW1lXCJdLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0ganNvbltcImxleGljYWxQYXR0ZXJuXCJdLFxuICAgICAgICAgIHRlcm1CTkYgPSBqc29uW1widGVybUJORlwiXSxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0ganNvbltcImV4cHJlc3Npb25CTkZcIl0sXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0ganNvbltcInN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0ganNvbltcIm1ldGFzdGF0ZW1lbnRCTkZcIl0sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GID0gbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc3RhdGljIGZyb21EaXJlY3RvcnlQYXRoKGRpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vcGF0dGVybi5sZXhgLFxuICAgICAgICAgIHRlcm1CTkZGaWxlUGF0aCA9IGAke2RpcmVjdG9yeVBhdGh9L3Rlcm0uYm5mYCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9leHByZXNzaW9uLmJuZmAsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9zdGF0ZW1lbnQuYm5mYCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9tZXRhc3RhdGVtZW50LmJuZmAsXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm5GaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKGxleGljYWxQYXR0ZXJuRmlsZVBhdGgpLFxuICAgICAgICAgIHRlcm1CTkZGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHRlcm1CTkZGaWxlUGF0aCksXG4gICAgICAgICAgZXhwcmVzc2lvbkJORkZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMoZXhwcmVzc2lvbkJORkZpbGVQYXRoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKHN0YXRlbWVudEJORkZpbGVQYXRoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGgpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuQ29udGVudCA9IGxleGljYWxQYXR0ZXJuRmlsZUV4aXN0cyA/IHJlYWRGaWxlKGxleGljYWxQYXR0ZXJuRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICB0ZXJtQk5GQ29udGVudCA9IHRlcm1CTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUodGVybUJORkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgZXhwcmVzc2lvbkJORkNvbnRlbnQgPSBleHByZXNzaW9uQk5GRmlsZUV4aXN0cyA/IHJlYWRGaWxlKGV4cHJlc3Npb25CTkZGaWxlUGF0aCkgOiBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEJORkNvbnRlbnQgPSBzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUoc3RhdGVtZW50Qk5GRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GQ29udGVudCA9IG1ldGFzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUobWV0YXN0YXRlbWVudEJORkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgbmFtZSA9IGRpcmVjdG9yeVBhdGgsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm5Db250ZW50LCAvLy9cbiAgICAgICAgICB0ZXJtQk5GID0gdGVybUJORkNvbnRlbnQsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBleHByZXNzaW9uQk5GQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Qk5GID0gc3RhdGVtZW50Qk5GQ29udGVudCwgLy8vXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IG1ldGFzdGF0ZW1lbnRCTkZDb250ZW50LCAvLy9cbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxufVxuIl19