'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    parsers = require('occam-parsers'),
    ///
easyLayout = require('easy-layout');

var constants = require('../constants'),
    BNFTextarea = require('./textarea/bnf'),
    CustomGrammar = require('../customGrammar'),
    rulesUtilities = require('../utilities/rules'),
    RuleNameSelect = require('./select/ruleName'),
    lexersUtilities = require('../utilities/lexers'),
    parsersUtilities = require('../utilities/parsers'),
    LexicalPatternInput = require('./input/lexicalPattern'),
    FlorenceBNFTextarea = require('./textarea/florenceBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    CombinedCustomGrammar = require('../combinedCustomGrammar'),
    CustomGrammarNameSelect = require('./select/customGrammarName'),
    FlorenceLexicalEntriesTextarea = require('./textarea/florenceLexicalEntries');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement,
    rulesAsString = rulesUtilities.rulesAsString,
    rulesAsEntries = rulesUtilities.rulesAsEntries,
    florenceLexerFromCombinedCustomGrammar = lexersUtilities.florenceLexerFromCombinedCustomGrammar,
    florenceParserFromCombinedCustomGrammar = parsersUtilities.florenceParserFromCombinedCustomGrammar,
    DEFAULT_CUSTOM_GRAMMAR_NAME = constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    termDefaultCustomGrammarBNF = parsers.termDefaultCustomGrammarBNF,
    statementDefaultCustomGrammarBNF = parsers.statementDefaultCustomGrammarBNF,
    expressionDefaultCustomGrammarBNF = parsers.expressionDefaultCustomGrammarBNF,
    metastatementDefaultCustomGrammarBNF = parsers.metastatementDefaultCustomGrammarBNF;


var name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    ///
userDefinedCustomGrammar = CustomGrammar.fromName(name),
    customGrammars = [userDefinedCustomGrammar];

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
        var customGrammarName = this.getCustomGrammarName();

        if (customGrammarName === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
          var bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();

          userDefinedCustomGrammar.setBNF(ruleName, bnf);

          userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);
        }

        var combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceLexerRules = florenceLexer.getRules(),
            florenceParserRules = florenceParser.getRules(),
            florenceLexerEntries = rulesAsEntries(florenceLexerRules),
            florenceParserRulesString = rulesAsString(florenceParserRules),
            florenceLexicalEntries = florenceLexerEntries,
            ///
        florenceBNF = florenceParserRulesString; ///

        this.setFlorenceBNF(florenceBNF);

        this.setFlorenceLexicalEntries(florenceLexicalEntries);

        this.hideBNFError();

        this.hideLexicalPatternError();
      } catch (error) {
        var message = error.message;


        message.includes('regular expression') ? ///
        this.showLexicalPatternError() : this.showBNFError();
      }
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler() {
      var ruleName = this.getRuleName(),
          customGrammarName = this.getCustomGrammarName();

      var bnf = void 0,
          readOnly = void 0,
          lexicalPattern = void 0;

      if (customGrammarName === DEFAULT_CUSTOM_GRAMMAR_NAME) {
        switch (ruleName) {
          case 'term':
            bnf = termDefaultCustomGrammarBNF;break;
          case 'statement':
            bnf = statementDefaultCustomGrammarBNF;break;
          case 'expression':
            bnf = expressionDefaultCustomGrammarBNF;break;
          case 'metastatement':
            bnf = metastatementDefaultCustomGrammarBNF;break;
        }

        lexicalPattern = null;

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
            'Custom grammar'
          ),
          React.createElement(CustomGrammarNameSelect, { onChange: changeHandler }),
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
          React.createElement(BNFTextarea, { onKeyUp: keyUpHandler })
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Florence lexical entries'
          ),
          React.createElement(FlorenceLexicalEntriesTextarea, null),
          React.createElement(
            'h2',
            null,
            'Florence BNF'
          ),
          React.createElement(FlorenceBNFTextarea, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImNvbnN0YW50cyIsIkJORlRleHRhcmVhIiwiQ3VzdG9tR3JhbW1hciIsInJ1bGVzVXRpbGl0aWVzIiwiUnVsZU5hbWVTZWxlY3QiLCJsZXhlcnNVdGlsaXRpZXMiLCJwYXJzZXJzVXRpbGl0aWVzIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIkZsb3JlbmNlQk5GVGV4dGFyZWEiLCJNYWluVmVydGljYWxTcGxpdHRlciIsIkNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIkN1c3RvbUdyYW1tYXJOYW1lU2VsZWN0IiwiRmxvcmVuY2VMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsInJ1bGVzQXNTdHJpbmciLCJydWxlc0FzRW50cmllcyIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwiREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FIiwiVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJ0ZXJtRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsImV4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsIm1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsIm5hbWUiLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tTmFtZSIsImN1c3RvbUdyYW1tYXJzIiwiVmlldyIsImN1c3RvbUdyYW1tYXJOYW1lIiwiZ2V0Q3VzdG9tR3JhbW1hck5hbWUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbUN1c3RvbUdyYW1tYXJzIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwiZmxvcmVuY2VMZXhlclJ1bGVzIiwiZ2V0UnVsZXMiLCJmbG9yZW5jZVBhcnNlclJ1bGVzIiwiZmxvcmVuY2VMZXhlckVudHJpZXMiLCJmbG9yZW5jZVBhcnNlclJ1bGVzU3RyaW5nIiwiZmxvcmVuY2VMZXhpY2FsRW50cmllcyIsImZsb3JlbmNlQk5GIiwic2V0RmxvcmVuY2VCTkYiLCJzZXRGbG9yZW5jZUxleGljYWxFbnRyaWVzIiwiaGlkZUJORkVycm9yIiwiaGlkZUxleGljYWxQYXR0ZXJuRXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsInNob3dMZXhpY2FsUGF0dGVybkVycm9yIiwic2hvd0JORkVycm9yIiwicmVhZE9ubHkiLCJzZXRCTkZSZWFkT25seSIsInNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImNoYW5nZUhhbmRsZXIiLCJhc3NpZ25Db250ZXh0IiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLGVBQVIsQ0FEaEI7QUFBQSxJQUMwQztBQUNwQ0UsYUFBYUYsUUFBUSxhQUFSLENBRm5COztBQUlBLElBQU1HLFlBQVlILFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01JLGNBQWNKLFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNSyxnQkFBZ0JMLFFBQVEsa0JBQVIsQ0FGdEI7QUFBQSxJQUdNTSxpQkFB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aWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyksIC8vL1xuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2JuZicpLFxuICAgICAgQ3VzdG9tR3JhbW1hciA9IHJlcXVpcmUoJy4uL2N1c3RvbUdyYW1tYXInKSxcbiAgICAgIHJ1bGVzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVzJyksXG4gICAgICBSdWxlTmFtZVNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0L3J1bGVOYW1lJyksXG4gICAgICBsZXhlcnNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvbGV4ZXJzJyksXG4gICAgICBwYXJzZXJzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnNlcnMnKSxcbiAgICAgIExleGljYWxQYXR0ZXJuSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L2xleGljYWxQYXR0ZXJuJyksXG4gICAgICBGbG9yZW5jZUJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9mbG9yZW5jZUJORicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgQ29tYmluZWRDdXN0b21HcmFtbWFyID0gcmVxdWlyZSgnLi4vY29tYmluZWRDdXN0b21HcmFtbWFyJyksXG4gICAgICBDdXN0b21HcmFtbWFyTmFtZVNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0L2N1c3RvbUdyYW1tYXJOYW1lJyksXG4gICAgICBGbG9yZW5jZUxleGljYWxFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2Zsb3JlbmNlTGV4aWNhbEVudHJpZXMnKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVzQXNFbnRyaWVzIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzLFxuICAgICAgeyBERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUsIFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIH0gPSBjb25zdGFudHMsXG4gICAgICB7IHRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYsIGV4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgbWV0YXN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GICB9ID0gcGFyc2VycztcblxuY29uc3QgbmFtZSA9IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FLCAgLy8vXG4gICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIgPSBDdXN0b21HcmFtbWFyLmZyb21OYW1lKG5hbWUpLFxuICAgICAgY3VzdG9tR3JhbW1hcnMgPSBbXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hclxuICAgICAgXTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGN1c3RvbUdyYW1tYXJOYW1lID0gdGhpcy5nZXRDdXN0b21HcmFtbWFyTmFtZSgpO1xuXG4gICAgICBpZiAoY3VzdG9tR3JhbW1hck5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgICB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuc2V0Qk5GKHJ1bGVOYW1lLCBibmYpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hci5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgICAgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgICAgZmxvcmVuY2VMZXhlclJ1bGVzID0gZmxvcmVuY2VMZXhlci5nZXRSdWxlcygpLFxuICAgICAgICAgICAgZmxvcmVuY2VQYXJzZXJSdWxlcyA9IGZsb3JlbmNlUGFyc2VyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyRW50cmllcyA9IHJ1bGVzQXNFbnRyaWVzKGZsb3JlbmNlTGV4ZXJSdWxlcyksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlclJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhmbG9yZW5jZVBhcnNlclJ1bGVzKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4aWNhbEVudHJpZXMgPSBmbG9yZW5jZUxleGVyRW50cmllcywgIC8vL1xuICAgICAgICAgICAgZmxvcmVuY2VCTkYgPSBmbG9yZW5jZVBhcnNlclJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0RmxvcmVuY2VCTkYoZmxvcmVuY2VCTkYpO1xuXG4gICAgICB0aGlzLnNldEZsb3JlbmNlTGV4aWNhbEVudHJpZXMoZmxvcmVuY2VMZXhpY2FsRW50cmllcyk7XG5cbiAgICAgIHRoaXMuaGlkZUJORkVycm9yKCk7XG5cbiAgICAgIHRoaXMuaGlkZUxleGljYWxQYXR0ZXJuRXJyb3IoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBlcnJvcjtcblxuICAgICAgbWVzc2FnZS5pbmNsdWRlcygncmVndWxhciBleHByZXNzaW9uJykgPyAvLy9cbiAgICAgICAgdGhpcy5zaG93TGV4aWNhbFBhdHRlcm5FcnJvcigpIDpcbiAgICAgICAgICB0aGlzLnNob3dCTkZFcnJvcigpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgY3VzdG9tR3JhbW1hck5hbWUgPSB0aGlzLmdldEN1c3RvbUdyYW1tYXJOYW1lKCk7XG5cbiAgICBsZXQgYm5mLFxuICAgICAgICByZWFkT25seSxcbiAgICAgICAgbGV4aWNhbFBhdHRlcm47XG5cbiAgICBpZiAoY3VzdG9tR3JhbW1hck5hbWUgPT09IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlICd0ZXJtJyA6IGJuZiA9IHRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0YXRlbWVudCcgOiBibmYgPSBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V4cHJlc3Npb24nIDogYm5mID0gZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnbWV0YXN0YXRlbWVudCcgOiBibmYgPSBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkY7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZXhpY2FsUGF0dGVybiA9IG51bGw7XG5cbiAgICAgIHJlYWRPbmx5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm5mID0gdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLmdldEJORihydWxlTmFtZSk7XG5cbiAgICAgIGxleGljYWxQYXR0ZXJuID0gdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICAgIHJlYWRPbmx5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Qk5GUmVhZE9ubHkocmVhZE9ubHkpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuUmVhZE9ubHkocmVhZE9ubHkpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBDdXN0b20gZ3JhbW1hclxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEN1c3RvbUdyYW1tYXJOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIFJ1bGUgbmFtZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPFJ1bGVOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEJORlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEZsb3JlbmNlIGxleGljYWwgZW50cmllc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEZsb3JlbmNlTGV4aWNhbEVudHJpZXNUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEZsb3JlbmNlIEJORlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEZsb3JlbmNlQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7IC8vL1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==