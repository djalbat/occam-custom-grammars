'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    lexers = require('occam-lexers'),
    ///
parsers = require('occam-parsers'),
    ///
easyLayout = require('easy-layout'),
    grammarUtilities = require('occam-grammar-utilities');

var constants = require('../constants'),
    NameSelect = require('./select/name'),
    BNFTextarea = require('./textarea/bnf'),
    ruleUtilities = require('../utilities/rule'),
    rulesUtilities = require('../utilities/rules'),
    RuleNameSelect = require('./select/ruleName'),
    ErrorParagraph = require('./paragraph/error'),
    lexersUtilities = require('../utilities/lexers'),
    ContentTextarea = require('./textarea/content'),
    parsersUtilities = require('../utilities/parsers'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    CombinedBNFTextarea = require('./textarea/combinedBNF'),
    LexicalPatternInput = require('./input/lexicalPattern'),
    TopmostRuleNameInput = require('./input/topmostRuleName'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    CombinedCustomGrammar = require('../combinedCustomGrammar'),
    userDefinedCustomGrammar = require('../userDefinedCustomGrammar');

var Element = easy.Element,
    findRule = ruleUtilities.findRule,
    rulesAsString = rulesUtilities.rulesAsString,
    SizeableElement = easyLayout.SizeableElement,
    defaultLexicalPattern = lexers.defaultLexicalPattern,
    removeOrRenameIntermediateNodes = grammarUtilities.removeOrRenameIntermediateNodes,
    florenceLexerFromCombinedCustomGrammar = lexersUtilities.florenceLexerFromCombinedCustomGrammar,
    florenceParserFromCombinedCustomGrammar = parsersUtilities.florenceParserFromCombinedCustomGrammar,
    DEFAULT_CUSTOM_GRAMMAR_NAME = constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    termDefaultBNF = parsers.termDefaultBNF,
    statementDefaultBNF = parsers.statementDefaultBNF,
    expressionDefaultBNF = parsers.expressionDefaultBNF,
    metastatementDefaultBNF = parsers.metastatementDefaultBNF;

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      try {
        var name = this.getName();

        if (name === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
          var bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();

          userDefinedCustomGrammar.setBNF(ruleName, bnf);

          userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);
        }

        var customGrammars = [userDefinedCustomGrammar],
            combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            combinedCustomGrammarRules = combinedCustomGrammar.getRules(),
            multiLine = true,
            combinedCustomGrammarRulesString = rulesAsString(combinedCustomGrammarRules, multiLine),
            combinedBNF = combinedCustomGrammarRulesString,
            ///
        florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            topmostRuleName = this.getTopmostRuleName(),
            rules = florenceParser.getRules(),
            topmostRule = findRule(topmostRuleName, rules),
            content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens, topmostRule);

        var parseTree = null;

        if (node !== null) {
          removeOrRenameIntermediateNodes(node);

          parseTree = node.asParseTree(tokens);
        }

        this.setCombinedBNF(combinedBNF);

        this.setParseTree(parseTree);

        this.hideError();
      } catch (error) {
        this.clearCombinedBNF();

        this.clearParseTree();

        this.showError(error);
      }
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler() {
      var name = this.getName(),
          ruleName = this.getRuleName();

      var bnf = void 0,
          readOnly = void 0,
          lexicalPattern = void 0;

      if (name === DEFAULT_CUSTOM_GRAMMAR_NAME) {
        switch (ruleName) {
          case 'term':
            bnf = termDefaultBNF;break;
          case 'statement':
            bnf = statementDefaultBNF;break;
          case 'expression':
            bnf = expressionDefaultBNF;break;
          case 'metastatement':
            bnf = metastatementDefaultBNF;break;
        }

        lexicalPattern = defaultLexicalPattern;

        readOnly = true;
      } else {
        bnf = userDefinedCustomGrammar.getBNF(ruleName);

        lexicalPattern = userDefinedCustomGrammar.getLexicalPattern();

        readOnly = false;
      }

      this.setBNF(bnf);

      this.setBNFReadOnly(readOnly);

      this.setLexicalPattern(lexicalPattern);

      this.setLexicalPatternReadOnly(readOnly);
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

      return React.createElement(
        'div',
        { className: 'columns' },
        React.createElement(
          SizeableElement,
          null,
          React.createElement(
            'h2',
            null,
            'Name'
          ),
          React.createElement(NameSelect, { onChange: changeHandler }),
          React.createElement(
            'h2',
            null,
            'Rule name'
          ),
          React.createElement(RuleNameSelect, { onChange: changeHandler }),
          React.createElement(
            'h2',
            null,
            'Lexical pattern'
          ),
          React.createElement(LexicalPatternInput, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'BNF'
          ),
          React.createElement(BNFTextarea, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'Topmost rule name'
          ),
          React.createElement(TopmostRuleNameInput, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Combined BNF'
          ),
          React.createElement(CombinedBNFTextarea, null),
          React.createElement(
            'h2',
            null,
            'Parse tree'
          ),
          React.createElement(ParseTreeTextarea, null),
          React.createElement(ErrorParagraph, null)
        )
      );
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      this.changeHandler(); ///

      this.keyUpHandler(); ///
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var view = Element.fromProperties(View, properties);

      view.initialise();

      return view;
    }
  }]);

  return View;
}(Element);

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImdyYW1tYXJVdGlsaXRpZXMiLCJjb25zdGFudHMiLCJOYW1lU2VsZWN0IiwiQk5GVGV4dGFyZWEiLCJydWxlVXRpbGl0aWVzIiwicnVsZXNVdGlsaXRpZXMiLCJSdWxlTmFtZVNlbGVjdCIsIkVycm9yUGFyYWdyYXBoIiwibGV4ZXJzVXRpbGl0aWVzIiwiQ29udGVudFRleHRhcmVhIiwicGFyc2Vyc1V0aWxpdGllcyIsIlBhcnNlVHJlZVRleHRhcmVhIiwiQ29tYmluZWRCTkZUZXh0YXJlYSIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJUb3Btb3N0UnVsZU5hbWVJbnB1dCIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFyIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyIiwiRWxlbWVudCIsImZpbmRSdWxlIiwicnVsZXNBc1N0cmluZyIsIlNpemVhYmxlRWxlbWVudCIsImRlZmF1bHRMZXhpY2FsUGF0dGVybiIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIiwidGVybURlZmF1bHRCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Qk5GIiwiZXhwcmVzc2lvbkRlZmF1bHRCTkYiLCJtZXRhc3RhdGVtZW50RGVmYXVsdEJORiIsIlZpZXciLCJuYW1lIiwiZ2V0TmFtZSIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJjdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImZyb21DdXN0b21HcmFtbWFycyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzIiwiZ2V0UnVsZXMiLCJtdWx0aUxpbmUiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZyIsImNvbWJpbmVkQk5GIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwidG9wbW9zdFJ1bGVOYW1lIiwiZ2V0VG9wbW9zdFJ1bGVOYW1lIiwicnVsZXMiLCJ0b3Btb3N0UnVsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldENvbWJpbmVkQk5GIiwic2V0UGFyc2VUcmVlIiwiaGlkZUVycm9yIiwiZXJyb3IiLCJjbGVhckNvbWJpbmVkQk5GIiwiY2xlYXJQYXJzZVRyZWUiLCJzaG93RXJyb3IiLCJyZWFkT25seSIsInNldEJORlJlYWRPbmx5Iiwic2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiY2hhbmdlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsY0FBUixDQURmO0FBQUEsSUFDd0M7QUFDbENFLFVBQVVGLFFBQVEsZUFBUixDQUZoQjtBQUFBLElBRTBDO0FBQ3BDRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7QUFBQSxJQUlNSSxtQkFBbUJK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LEdBVkY7QUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBWEY7QUFZRSw4QkFBQyxlQUFELElBQWlCLFNBQVNBLFlBQTFCO0FBWkYsU0FERjtBQWVFLDRCQUFDLG9CQUFELE9BZkY7QUFnQkU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUUsOEJBQUMsbUJBQUQsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FIRjtBQUlFLDhCQUFDLGlCQUFELE9BSkY7QUFLRSw4QkFBQyxjQUFEO0FBTEY7QUFoQkYsT0FGRjtBQTRCRDs7O2lDQUVZO0FBQ1gsV0FBS0csYUFBTDs7QUFFQSxXQUFLRCxhQUFMLEdBSFcsQ0FHVzs7QUFFdEIsV0FBS0YsWUFBTCxHQUxXLENBS1c7QUFDdkI7OzttQ0FFcUJELFUsRUFBWTtBQUNoQyxVQUFNSyxPQUFPOUQsUUFBUStELGNBQVIsQ0FBdUJqRCxJQUF2QixFQUE2QjJDLFVBQTdCLENBQWI7O0FBRUFLLFdBQUtFLFVBQUw7O0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBMUlnQjlELE87O0FBNkluQmlFLE9BQU9DLE1BQVAsQ0FBY3BELElBQWQsRUFBb0I7QUFDbEJxRCxXQUFTLEtBRFM7QUFFbEJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJ6RCxJQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbGV4ZXJzID0gcmVxdWlyZSgnb2NjYW0tbGV4ZXJzJyksIC8vL1xuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSwgLy8vXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKSxcbiAgICAgIGdyYW1tYXJVdGlsaXRpZXMgPSByZXF1aXJlKCdvY2NhbS1ncmFtbWFyLXV0aWxpdGllcycpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIE5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9uYW1lJyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYm5mJyksXG4gICAgICBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIHJ1bGVzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVzJyksXG4gICAgICBSdWxlTmFtZVNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0L3J1bGVOYW1lJyksXG4gICAgICBFcnJvclBhcmFncmFwaCA9IHJlcXVpcmUoJy4vcGFyYWdyYXBoL2Vycm9yJyksXG4gICAgICBsZXhlcnNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbGV4ZXJzJyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2NvbnRlbnQnKSxcbiAgICAgIHBhcnNlcnNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFyc2VycycpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL3BhcnNlVHJlZScpLFxuICAgICAgQ29tYmluZWRCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvY29tYmluZWRCTkYnKSxcbiAgICAgIExleGljYWxQYXR0ZXJuSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L2xleGljYWxQYXR0ZXJuJyksXG4gICAgICBUb3Btb3N0UnVsZU5hbWVJbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvdG9wbW9zdFJ1bGVOYW1lJyksXG4gICAgICBNYWluVmVydGljYWxTcGxpdHRlciA9IHJlcXVpcmUoJy4vdmVydGljYWxTcGxpdHRlci9tYWluJyksXG4gICAgICBDb21iaW5lZEN1c3RvbUdyYW1tYXIgPSByZXF1aXJlKCcuLi9jb21iaW5lZEN1c3RvbUdyYW1tYXInKSxcbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciA9IHJlcXVpcmUoJy4uL3VzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hcicpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IGZpbmRSdWxlIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBydWxlc0FzU3RyaW5nIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0LFxuICAgICAgeyBkZWZhdWx0TGV4aWNhbFBhdHRlcm4gfSA9IGxleGVycyxcbiAgICAgIHsgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyB9ID0gZ3JhbW1hclV0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzLFxuICAgICAgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHRlcm1EZWZhdWx0Qk5GLCBzdGF0ZW1lbnREZWZhdWx0Qk5GLCBleHByZXNzaW9uRGVmYXVsdEJORiwgbWV0YXN0YXRlbWVudERlZmF1bHRCTkYgIH0gPSBwYXJzZXJzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAobmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VzdG9tR3JhbW1hcnMgPSBbXG4gICAgICAgICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hclxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICAgIG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJSdWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcoY29tYmluZWRDdXN0b21HcmFtbWFyUnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBjb21iaW5lZEJORiA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hclJ1bGVzU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICB0b3Btb3N0UnVsZU5hbWUgPSB0aGlzLmdldFRvcG1vc3RSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcnVsZXMgPSBmbG9yZW5jZVBhcnNlci5nZXRSdWxlcygpLFxuICAgICAgICAgICAgdG9wbW9zdFJ1bGUgPSBmaW5kUnVsZSh0b3Btb3N0UnVsZU5hbWUsIHJ1bGVzKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zLCB0b3Btb3N0UnVsZSk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRDb21iaW5lZEJORihjb21iaW5lZEJORik7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuY2xlYXJDb21iaW5lZEJORigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuc2hvd0Vycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGxldCBibmYsXG4gICAgICAgIHJlYWRPbmx5LFxuICAgICAgICBsZXhpY2FsUGF0dGVybjtcblxuICAgIGlmIChuYW1lID09PSBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgICAgY2FzZSAndGVybScgOiBibmYgPSB0ZXJtRGVmYXVsdEJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0YXRlbWVudCcgOiBibmYgPSBzdGF0ZW1lbnREZWZhdWx0Qk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnZXhwcmVzc2lvbicgOiBibmYgPSBleHByZXNzaW9uRGVmYXVsdEJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21ldGFzdGF0ZW1lbnQnIDogYm5mID0gbWV0YXN0YXRlbWVudERlZmF1bHRCTkY7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZXhpY2FsUGF0dGVybiA9IGRlZmF1bHRMZXhpY2FsUGF0dGVybjtcblxuICAgICAgcmVhZE9ubHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBibmYgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgbGV4aWNhbFBhdHRlcm4gPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRCTkZSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seShyZWFkT25seSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5OYW1lPC9oMj5cbiAgICAgICAgICA8TmFtZVNlbGVjdCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+UnVsZSBuYW1lPC9oMj5cbiAgICAgICAgICA8UnVsZU5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkxleGljYWwgcGF0dGVybjwvaDI+XG4gICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5CTkY8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlRvcG1vc3QgcnVsZSBuYW1lPC9oMj5cbiAgICAgICAgICA8VG9wbW9zdFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5Db21iaW5lZCBCTkY8L2gyPlxuICAgICAgICAgIDxDb21iaW5lZEJORlRleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxFcnJvclBhcmFncmFwaCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTsgLy8vXG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19