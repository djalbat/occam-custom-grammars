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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbUdyYW1tYXIuanMiXSwibmFtZXMiOlsicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiY2hlY2tGaWxlRXhpc3RzIiwiQ3VzdG9tR3JhbW1hciIsIm5hbWUiLCJsZXhpY2FsUGF0dGVybiIsInRlcm1CTkYiLCJleHByZXNzaW9uQk5GIiwic3RhdGVtZW50Qk5GIiwibWV0YXN0YXRlbWVudEJORiIsInJ1bGVOYW1lIiwiYm5mIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJqc29uIiwiY3VzdG9tR3JhbW1hciIsImRpcmVjdG9yeVBhdGgiLCJsZXhpY2FsUGF0dGVybkZpbGVQYXRoIiwidGVybUJORkZpbGVQYXRoIiwiZXhwcmVzc2lvbkJORkZpbGVQYXRoIiwic3RhdGVtZW50Qk5GRmlsZVBhdGgiLCJtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGgiLCJsZXhpY2FsUGF0dGVybkZpbGVFeGlzdHMiLCJ0ZXJtQk5GRmlsZUV4aXN0cyIsImV4cHJlc3Npb25CTkZGaWxlRXhpc3RzIiwic3RhdGVtZW50Qk5GRmlsZUV4aXN0cyIsIm1ldGFzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzIiwibGV4aWNhbFBhdHRlcm5Db250ZW50IiwidGVybUJORkNvbnRlbnQiLCJleHByZXNzaW9uQk5GQ29udGVudCIsInN0YXRlbWVudEJORkNvbnRlbnQiLCJtZXRhc3RhdGVtZW50Qk5GQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFUUEsUSxHQUE4QkMsOEIsQ0FBOUJELFE7SUFBVUUsZSxHQUFvQkQsOEIsQ0FBcEJDLGU7O0lBRUdDLGE7QUFDbkIseUJBQVlDLElBQVosRUFBa0JDLGNBQWxCLEVBQWtDQyxPQUFsQyxFQUEyQ0MsYUFBM0MsRUFBMERDLFlBQTFELEVBQXdFQyxnQkFBeEUsRUFBMEY7QUFBQTs7QUFDeEYsU0FBS0wsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNEOzs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLTCxJQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsYUFBTyxLQUFLQyxjQUFaO0FBQ0Q7OzsyQkFFTUssUSxFQUFVO0FBQ2YsVUFBSUMsR0FBSjs7QUFFQSxjQUFRRCxRQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0VDLFVBQUFBLEdBQUcsR0FBRyxLQUFLTCxPQUFYO0FBQ0E7O0FBRUYsYUFBSyxZQUFMO0FBQ0VLLFVBQUFBLEdBQUcsR0FBRyxLQUFLSixhQUFYO0FBQ0E7O0FBRUYsYUFBSyxXQUFMO0FBQ0VJLFVBQUFBLEdBQUcsR0FBRyxLQUFLSCxZQUFYO0FBQ0E7O0FBRUYsYUFBSyxlQUFMO0FBQ0VHLFVBQUFBLEdBQUcsR0FBRyxLQUFLRixnQkFBWDtBQUNBO0FBZko7O0FBa0JBLGFBQU9FLEdBQVA7QUFDRDs7OzRCQUVPUCxJLEVBQU07QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7O3NDQUVpQkMsYyxFQUFnQjtBQUNoQyxXQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNEOzs7MkJBRU1LLFEsRUFBVUMsRyxFQUFLO0FBQ3BCLGNBQVFELFFBQVI7QUFDRSxhQUFLLE1BQUw7QUFDRSxlQUFLSixPQUFMLEdBQWVLLEdBQWY7QUFDQTs7QUFFRixhQUFLLFlBQUw7QUFDRSxlQUFLSixhQUFMLEdBQXFCSSxHQUFyQjtBQUNBOztBQUVGLGFBQUssV0FBTDtBQUNFLGVBQUtILFlBQUwsR0FBb0JHLEdBQXBCO0FBQ0E7O0FBRUYsYUFBSyxlQUFMO0FBQ0UsZUFBS0YsZ0JBQUwsR0FBd0JFLEdBQXhCO0FBQ0E7QUFmSjtBQWlCRDs7OzBDQUVxQjtBQUNwQixVQUFNTixjQUFjLEdBQUcsSUFBdkI7QUFFQSxXQUFLTyxpQkFBTCxDQUF1QlAsY0FBdkI7QUFDRDs7OzZCQUVRSyxRLEVBQVU7QUFDakIsVUFBTUMsR0FBRyxHQUFHLElBQVo7QUFFQSxXQUFLRSxNQUFMLENBQVlILFFBQVosRUFBc0JDLEdBQXRCO0FBQ0Q7OzsyQkFFTUQsUSxFQUFVQyxHLEVBQUtOLGMsRUFBZ0I7QUFDcEMsV0FBS1EsTUFBTCxDQUFZSCxRQUFaLEVBQXNCQyxHQUF0QjtBQUNBLFdBQUtDLGlCQUFMLENBQXVCUCxjQUF2QjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNUyxJQUFJLEdBQUc7QUFDWCxnQkFBUSxLQUFLVixJQURGO0FBRVgsMEJBQWtCLEtBQUtDLGNBRlo7QUFHWCxtQkFBVyxLQUFLQyxPQUhMO0FBSVgseUJBQWlCLEtBQUtDLGFBSlg7QUFLWCx3QkFBZ0IsS0FBS0MsWUFMVjtBQU1YLDRCQUFvQixLQUFLQztBQU5kLE9BQWI7QUFTQSxhQUFPSyxJQUFQO0FBQ0Q7Ozs2QkFFZUEsSSxFQUFNO0FBQ3BCLFVBQU1WLElBQUksR0FBR1UsSUFBSSxDQUFDLE1BQUQsQ0FBakI7QUFBQSxVQUNNVCxjQUFjLEdBQUdTLElBQUksQ0FBQyxnQkFBRCxDQUQzQjtBQUFBLFVBRU1SLE9BQU8sR0FBR1EsSUFBSSxDQUFDLFNBQUQsQ0FGcEI7QUFBQSxVQUdNUCxhQUFhLEdBQUdPLElBQUksQ0FBQyxlQUFELENBSDFCO0FBQUEsVUFJTU4sWUFBWSxHQUFHTSxJQUFJLENBQUMsY0FBRCxDQUp6QjtBQUFBLFVBS01MLGdCQUFnQixHQUFHSyxJQUFJLENBQUMsa0JBQUQsQ0FMN0I7QUFBQSxVQU1NQyxhQUFhLEdBQUcsSUFBSVosYUFBSixDQUFrQkMsSUFBbEIsRUFBd0JDLGNBQXhCLEVBQXdDQyxPQUF4QyxFQUFpREMsYUFBakQsRUFBZ0VDLFlBQWhFLEVBQThFQyxnQkFBOUUsQ0FOdEI7QUFRQSxhQUFPTSxhQUFQO0FBQ0Q7Ozs2QkFFZVgsSSxFQUFNO0FBQ3BCLFVBQU1DLGNBQWMsR0FBRyxJQUF2QjtBQUFBLFVBQ01DLE9BQU8sR0FBRyxJQURoQjtBQUFBLFVBRU1DLGFBQWEsR0FBRyxJQUZ0QjtBQUFBLFVBR01DLFlBQVksR0FBRyxJQUhyQjtBQUFBLFVBSU1DLGdCQUFnQixHQUFHLElBSnpCO0FBQUEsVUFLTU0sYUFBYSxHQUFHLElBQUlaLGFBQUosQ0FBa0JDLElBQWxCLEVBQXdCQyxjQUF4QixFQUF3Q0MsT0FBeEMsRUFBaURDLGFBQWpELEVBQWdFQyxZQUFoRSxFQUE4RUMsZ0JBQTlFLENBTHRCO0FBT0EsYUFBT00sYUFBUDtBQUNEOzs7c0NBRXdCQyxhLEVBQWU7QUFDdEMsVUFBTUMsc0JBQXNCLGFBQU1ELGFBQU4saUJBQTVCO0FBQUEsVUFDTUUsZUFBZSxhQUFNRixhQUFOLGNBRHJCO0FBQUEsVUFFTUcscUJBQXFCLGFBQU1ILGFBQU4sb0JBRjNCO0FBQUEsVUFHTUksb0JBQW9CLGFBQU1KLGFBQU4sbUJBSDFCO0FBQUEsVUFJTUssd0JBQXdCLGFBQU1MLGFBQU4sdUJBSjlCO0FBQUEsVUFLTU0sd0JBQXdCLEdBQUdwQixlQUFlLENBQUNlLHNCQUFELENBTGhEO0FBQUEsVUFNTU0saUJBQWlCLEdBQUdyQixlQUFlLENBQUNnQixlQUFELENBTnpDO0FBQUEsVUFPTU0sdUJBQXVCLEdBQUd0QixlQUFlLENBQUNpQixxQkFBRCxDQVAvQztBQUFBLFVBUU1NLHNCQUFzQixHQUFHdkIsZUFBZSxDQUFDa0Isb0JBQUQsQ0FSOUM7QUFBQSxVQVNNTSwwQkFBMEIsR0FBR3hCLGVBQWUsQ0FBQ21CLHdCQUFELENBVGxEO0FBQUEsVUFVTU0scUJBQXFCLEdBQUdMLHdCQUF3QixHQUFHdEIsUUFBUSxDQUFDaUIsc0JBQUQsQ0FBWCxHQUFzQyxJQVY1RjtBQUFBLFVBV01XLGNBQWMsR0FBR0wsaUJBQWlCLEdBQUd2QixRQUFRLENBQUNrQixlQUFELENBQVgsR0FBK0IsSUFYdkU7QUFBQSxVQVlNVyxvQkFBb0IsR0FBR0wsdUJBQXVCLEdBQUd4QixRQUFRLENBQUNtQixxQkFBRCxDQUFYLEdBQXFDLElBWnpGO0FBQUEsVUFhTVcsbUJBQW1CLEdBQUdMLHNCQUFzQixHQUFHekIsUUFBUSxDQUFDb0Isb0JBQUQsQ0FBWCxHQUFvQyxJQWJ0RjtBQUFBLFVBY01XLHVCQUF1QixHQUFHTCwwQkFBMEIsR0FBRzFCLFFBQVEsQ0FBQ3FCLHdCQUFELENBQVgsR0FBd0MsSUFkbEc7QUFBQSxVQWVNakIsSUFBSSxHQUFHWSxhQWZiO0FBQUEsVUFlNEI7QUFDdEJYLE1BQUFBLGNBQWMsR0FBR3NCLHFCQWhCdkI7QUFBQSxVQWdCOEM7QUFDeENyQixNQUFBQSxPQUFPLEdBQUdzQixjQWpCaEI7QUFBQSxVQWlCZ0M7QUFDMUJyQixNQUFBQSxhQUFhLEdBQUdzQixvQkFsQnRCO0FBQUEsVUFrQjRDO0FBQ3RDckIsTUFBQUEsWUFBWSxHQUFHc0IsbUJBbkJyQjtBQUFBLFVBbUIwQztBQUNwQ3JCLE1BQUFBLGdCQUFnQixHQUFHc0IsdUJBcEJ6QjtBQUFBLFVBb0JrRDtBQUM1Q2hCLE1BQUFBLGFBQWEsR0FBRyxJQUFJWixhQUFKLENBQWtCQyxJQUFsQixFQUF3QkMsY0FBeEIsRUFBd0NDLE9BQXhDLEVBQWlEQyxhQUFqRCxFQUFnRUMsWUFBaEUsRUFBOEVDLGdCQUE5RSxDQXJCdEI7QUF1QkEsYUFBT00sYUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgcmVhZEZpbGUsIGNoZWNrRmlsZUV4aXN0cyB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tR3JhbW1hciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybjtcbiAgICB0aGlzLnRlcm1CTkYgPSB0ZXJtQk5GO1xuICAgIHRoaXMuZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkY7XG4gICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkY7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORjtcbiAgfVxuICBcbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4aWNhbFBhdHRlcm4oKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBnZXRCTkYocnVsZU5hbWUpIHtcbiAgICBsZXQgYm5mO1xuXG4gICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgY2FzZSBcInRlcm1cIiA6XG4gICAgICAgIGJuZiA9IHRoaXMudGVybUJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJleHByZXNzaW9uXCIgOlxuICAgICAgICBibmYgPSB0aGlzLmV4cHJlc3Npb25CTkY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwic3RhdGVtZW50XCIgOlxuICAgICAgICBibmYgPSB0aGlzLnN0YXRlbWVudEJORjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJtZXRhc3RhdGVtZW50XCIgOlxuICAgICAgICBibmYgPSB0aGlzLm1ldGFzdGF0ZW1lbnRCTkY7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBibmY7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgICB0aGlzLmxleGljYWxQYXR0ZXJuID0gbGV4aWNhbFBhdHRlcm47XG4gIH1cblxuICBzZXRCTkYocnVsZU5hbWUsIGJuZikge1xuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgXCJ0ZXJtXCIgOlxuICAgICAgICB0aGlzLnRlcm1CTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiZXhwcmVzc2lvblwiIDpcbiAgICAgICAgdGhpcy5leHByZXNzaW9uQk5GID0gYm5mO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInN0YXRlbWVudFwiIDpcbiAgICAgICAgdGhpcy5zdGF0ZW1lbnRCTkYgPSBibmY7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwibWV0YXN0YXRlbWVudFwiIDpcbiAgICAgICAgdGhpcy5tZXRhc3RhdGVtZW50Qk5GID0gYm5mO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXNldExleGljYWxQYXR0ZXJuKCkgeyBcbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gIH1cblxuICByZXNldEJORihydWxlTmFtZSkge1xuICAgIGNvbnN0IGJuZiA9IG51bGw7XG5cbiAgICB0aGlzLnNldEJORihydWxlTmFtZSwgYm5mKTtcbiAgfVxuXG4gIHVwZGF0ZShydWxlTmFtZSwgYm5mLCBsZXhpY2FsUGF0dGVybikge1xuICAgIHRoaXMuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBcIm5hbWVcIjogdGhpcy5uYW1lLFxuICAgICAgXCJsZXhpY2FsUGF0dGVyblwiOiB0aGlzLmxleGljYWxQYXR0ZXJuLFxuICAgICAgXCJ0ZXJtQk5GXCI6IHRoaXMudGVybUJORixcbiAgICAgIFwiZXhwcmVzc2lvbkJORlwiOiB0aGlzLmV4cHJlc3Npb25CTkYsXG4gICAgICBcInN0YXRlbWVudEJORlwiOiB0aGlzLnN0YXRlbWVudEJORixcbiAgICAgIFwibWV0YXN0YXRlbWVudEJORlwiOiB0aGlzLm1ldGFzdGF0ZW1lbnRCTkZcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBuYW1lID0ganNvbltcIm5hbWVcIl0sXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBqc29uW1wibGV4aWNhbFBhdHRlcm5cIl0sXG4gICAgICAgICAgdGVybUJORiA9IGpzb25bXCJ0ZXJtQk5GXCJdLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBqc29uW1wiZXhwcmVzc2lvbkJORlwiXSxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBqc29uW1wic3RhdGVtZW50Qk5GXCJdLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkYgPSBqc29uW1wibWV0YXN0YXRlbWVudEJORlwiXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gbmV3IEN1c3RvbUdyYW1tYXIobmFtZSwgbGV4aWNhbFBhdHRlcm4sIHRlcm1CTkYsIGV4cHJlc3Npb25CTkYsIHN0YXRlbWVudEJORiwgbWV0YXN0YXRlbWVudEJORik7XG5cbiAgICByZXR1cm4gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSBudWxsLFxuICAgICAgICAgIHRlcm1CTkYgPSBudWxsLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkYgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudEJORiA9IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudEJORiA9IG51bGwsXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IG5ldyBDdXN0b21HcmFtbWFyKG5hbWUsIGxleGljYWxQYXR0ZXJuLCB0ZXJtQk5GLCBleHByZXNzaW9uQk5GLCBzdGF0ZW1lbnRCTkYsIG1ldGFzdGF0ZW1lbnRCTkYpO1xuXG4gICAgcmV0dXJuIGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpcmVjdG9yeVBhdGgoZGlyZWN0b3J5UGF0aCkge1xuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuRmlsZVBhdGggPSBgJHtkaXJlY3RvcnlQYXRofS9wYXR0ZXJuLmxleGAsXG4gICAgICAgICAgdGVybUJORkZpbGVQYXRoID0gYCR7ZGlyZWN0b3J5UGF0aH0vdGVybS5ibmZgLFxuICAgICAgICAgIGV4cHJlc3Npb25CTkZGaWxlUGF0aCA9IGAke2RpcmVjdG9yeVBhdGh9L2V4cHJlc3Npb24uYm5mYCxcbiAgICAgICAgICBzdGF0ZW1lbnRCTkZGaWxlUGF0aCA9IGAke2RpcmVjdG9yeVBhdGh9L3N0YXRlbWVudC5ibmZgLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkZGaWxlUGF0aCA9IGAke2RpcmVjdG9yeVBhdGh9L21ldGFzdGF0ZW1lbnQuYm5mYCxcbiAgICAgICAgICBsZXhpY2FsUGF0dGVybkZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMobGV4aWNhbFBhdHRlcm5GaWxlUGF0aCksXG4gICAgICAgICAgdGVybUJORkZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHModGVybUJORkZpbGVQYXRoKSxcbiAgICAgICAgICBleHByZXNzaW9uQk5GRmlsZUV4aXN0cyA9IGNoZWNrRmlsZUV4aXN0cyhleHByZXNzaW9uQk5GRmlsZVBhdGgpLFxuICAgICAgICAgIHN0YXRlbWVudEJORkZpbGVFeGlzdHMgPSBjaGVja0ZpbGVFeGlzdHMoc3RhdGVtZW50Qk5GRmlsZVBhdGgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkZGaWxlRXhpc3RzID0gY2hlY2tGaWxlRXhpc3RzKG1ldGFzdGF0ZW1lbnRCTkZGaWxlUGF0aCksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm5Db250ZW50ID0gbGV4aWNhbFBhdHRlcm5GaWxlRXhpc3RzID8gcmVhZEZpbGUobGV4aWNhbFBhdHRlcm5GaWxlUGF0aCkgOiBudWxsLFxuICAgICAgICAgIHRlcm1CTkZDb250ZW50ID0gdGVybUJORkZpbGVFeGlzdHMgPyByZWFkRmlsZSh0ZXJtQk5GRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICBleHByZXNzaW9uQk5GQ29udGVudCA9IGV4cHJlc3Npb25CTkZGaWxlRXhpc3RzID8gcmVhZEZpbGUoZXhwcmVzc2lvbkJORkZpbGVQYXRoKSA6IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50Qk5GQ29udGVudCA9IHN0YXRlbWVudEJORkZpbGVFeGlzdHMgPyByZWFkRmlsZShzdGF0ZW1lbnRCTkZGaWxlUGF0aCkgOiBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRCTkZDb250ZW50ID0gbWV0YXN0YXRlbWVudEJORkZpbGVFeGlzdHMgPyByZWFkRmlsZShtZXRhc3RhdGVtZW50Qk5GRmlsZVBhdGgpIDogbnVsbCxcbiAgICAgICAgICBuYW1lID0gZGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBsZXhpY2FsUGF0dGVybkNvbnRlbnQsIC8vL1xuICAgICAgICAgIHRlcm1CTkYgPSB0ZXJtQk5GQ29udGVudCwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbkJORiA9IGV4cHJlc3Npb25CTkZDb250ZW50LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRCTkYgPSBzdGF0ZW1lbnRCTkZDb250ZW50LCAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Qk5GID0gbWV0YXN0YXRlbWVudEJORkNvbnRlbnQsIC8vL1xuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBuZXcgQ3VzdG9tR3JhbW1hcihuYW1lLCBsZXhpY2FsUGF0dGVybiwgdGVybUJORiwgZXhwcmVzc2lvbkJORiwgc3RhdGVtZW50Qk5GLCBtZXRhc3RhdGVtZW50Qk5GKTtcblxuICAgIHJldHVybiBjdXN0b21HcmFtbWFyO1xuICB9XG59XG4iXX0=