'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
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
    CombinedCustomGrammars = require('../combinedCustomGrammars'),
    CustomGrammarNameSelect = require('./select/customGrammarName'),
    FlorenceLexicalEntriesTextarea = require('./textarea/florenceLexicalEntries');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement,
    rulesAsString = rulesUtilities.rulesAsString,
    rulesAsEntries = rulesUtilities.rulesAsEntries,
    florenceLexerFromCombinedCustomGrammars = lexersUtilities.florenceLexerFromCombinedCustomGrammars,
    florenceParserFromCombinedCustomGrammars = parsersUtilities.florenceParserFromCombinedCustomGrammars,
    DEFAULT_CUSTOM_GRAMMAR_NAME = constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    _parsers = parsers,
    termDefaultCustomGrammarBNF = _parsers.termDefaultCustomGrammarBNF,
    statementDefaultCustomGrammarBNF = _parsers.statementDefaultCustomGrammarBNF,
    expressionDefaultCustomGrammarBNF = _parsers.expressionDefaultCustomGrammarBNF,
    metastatementDefaultCustomGrammarBNF = _parsers.metastatementDefaultCustomGrammarBNF;


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

        var combinedCustomGrammars = CombinedCustomGrammars.fromCustomGrammars(customGrammars),
            florenceLexer = florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars),
            florenceParser = florenceParserFromCombinedCustomGrammars(combinedCustomGrammars),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiY29uc3RhbnRzIiwiQk5GVGV4dGFyZWEiLCJDdXN0b21HcmFtbWFyIiwicnVsZXNVdGlsaXRpZXMiLCJSdWxlTmFtZVNlbGVjdCIsImxleGVyc1V0aWxpdGllcyIsInBhcnNlcnNVdGlsaXRpZXMiLCJMZXhpY2FsUGF0dGVybklucHV0IiwiRmxvcmVuY2VCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiQ29tYmluZWRDdXN0b21HcmFtbWFycyIsIkN1c3RvbUdyYW1tYXJOYW1lU2VsZWN0IiwiRmxvcmVuY2VMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsInJ1bGVzQXNTdHJpbmciLCJydWxlc0FzRW50cmllcyIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFycyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMiLCJERUZBVUxUX0NVU1RPTV9HUkFNTUFSX05BTUUiLCJVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsInBhcnNlcnMiLCJ0ZXJtRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsImV4cHJlc3Npb25EZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsIm1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiIsIm5hbWUiLCJ1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIiLCJmcm9tTmFtZSIsImN1c3RvbUdyYW1tYXJzIiwiVmlldyIsImN1c3RvbUdyYW1tYXJOYW1lIiwiZ2V0Q3VzdG9tR3JhbW1hck5hbWUiLCJibmYiLCJnZXRCTkYiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldExleGljYWxQYXR0ZXJuIiwiY29tYmluZWRDdXN0b21HcmFtbWFycyIsImZyb21DdXN0b21HcmFtbWFycyIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsImZsb3JlbmNlTGV4ZXJSdWxlcyIsImdldFJ1bGVzIiwiZmxvcmVuY2VQYXJzZXJSdWxlcyIsImZsb3JlbmNlTGV4ZXJFbnRyaWVzIiwiZmxvcmVuY2VQYXJzZXJSdWxlc1N0cmluZyIsImZsb3JlbmNlTGV4aWNhbEVudHJpZXMiLCJmbG9yZW5jZUJORiIsInNldEZsb3JlbmNlQk5GIiwic2V0RmxvcmVuY2VMZXhpY2FsRW50cmllcyIsImhpZGVCTkZFcnJvciIsImhpZGVMZXhpY2FsUGF0dGVybkVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJzaG93TGV4aWNhbFBhdHRlcm5FcnJvciIsInNob3dCTkZFcnJvciIsInJlYWRPbmx5Iiwic2V0Qk5GUmVhZE9ubHkiLCJzZXRMZXhpY2FsUGF0dGVyblJlYWRPbmx5IiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJjaGFuZ2VIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdBLElBQU1FLFlBQVlGLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01HLGNBQWNILFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNSSxnQkFBZ0JKLFFBQVEsa0JBQVIsQ0FGdEI7QUFBQSxJQUdNSyxpQkFBaUJMLFFBQVEsb0JBQVIsQ0FIdkI7QUFBQSxJQUlNTSxpQkFB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LDhCQUFDLHVCQUFELElBQXlCLFVBQVVDLGFBQW5DLEdBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTEY7QUFRRSw4QkFBQyxjQUFELElBQWdCLFVBQVVBLGFBQTFCLEdBUkY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVEY7QUFZRSw4QkFBQyxtQkFBRCxJQUFxQixTQUFTRixZQUE5QixHQVpGO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWJGO0FBZ0JFLDhCQUFDLFdBQUQsSUFBYSxTQUFTQSxZQUF0QjtBQWhCRixTQURGO0FBbUJFLDRCQUFDLG9CQUFELE9BbkJGO0FBb0JFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUlFLDhCQUFDLDhCQUFELE9BSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTEY7QUFRRSw4QkFBQyxtQkFBRDtBQVJGO0FBcEJGLE9BRkY7QUFtQ0Q7OztpQ0FFWTtBQUNYLFdBQUtHLGFBQUw7O0FBRUEsV0FBS0QsYUFBTCxHQUhXLENBR1c7O0FBRXRCLFdBQUtGLFlBQUwsR0FMVyxDQUtXO0FBQ3ZCOzs7bUNBRXFCRCxVLEVBQVk7QUFDaEMsVUFBTUssT0FBT3hELFFBQVF5RCxjQUFSLENBQXVCeEMsSUFBdkIsRUFBNkJrQyxVQUE3QixDQUFiOztBQUVBSyxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQXBJZ0J4RCxPOztBQXVJbkIyRCxPQUFPQyxNQUFQLENBQWMzQyxJQUFkLEVBQW9CO0FBQ2xCNEMsV0FBUyxLQURTO0FBRWxCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZELENBQXBCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCaEQsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIEN1c3RvbUdyYW1tYXIgPSByZXF1aXJlKCcuLi9jdXN0b21HcmFtbWFyJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgUnVsZU5hbWVTZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdC9ydWxlTmFtZScpLFxuICAgICAgbGV4ZXJzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2xleGVycycpLFxuICAgICAgcGFyc2Vyc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9wYXJzZXJzJyksXG4gICAgICBMZXhpY2FsUGF0dGVybklucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9sZXhpY2FsUGF0dGVybicpLFxuICAgICAgRmxvcmVuY2VCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvZmxvcmVuY2VCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIENvbWJpbmVkQ3VzdG9tR3JhbW1hcnMgPSByZXF1aXJlKCcuLi9jb21iaW5lZEN1c3RvbUdyYW1tYXJzJyksXG4gICAgICBDdXN0b21HcmFtbWFyTmFtZVNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0L2N1c3RvbUdyYW1tYXJOYW1lJyksXG4gICAgICBGbG9yZW5jZUxleGljYWxFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2Zsb3JlbmNlTGV4aWNhbEVudHJpZXMnKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVzQXNFbnRyaWVzIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSwgVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiwgZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYgIH0gPSBwYXJzZXJzO1xuXG5jb25zdCBuYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUsICAvLy9cbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbU5hbWUobmFtZSksXG4gICAgICBjdXN0b21HcmFtbWFycyA9IFtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXG4gICAgICBdO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3VzdG9tR3JhbW1hck5hbWUgPSB0aGlzLmdldEN1c3RvbUdyYW1tYXJOYW1lKCk7XG5cbiAgICAgIGlmIChjdXN0b21HcmFtbWFyTmFtZSA9PT0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUpIHtcbiAgICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG5cbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFycyA9IENvbWJpbmVkQ3VzdG9tR3JhbW1hcnMuZnJvbUN1c3RvbUdyYW1tYXJzKGN1c3RvbUdyYW1tYXJzKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMoY29tYmluZWRDdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMoY29tYmluZWRDdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgICBmbG9yZW5jZUxleGVyUnVsZXMgPSBmbG9yZW5jZUxleGVyLmdldFJ1bGVzKCksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlclJ1bGVzID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICAgIGZsb3JlbmNlTGV4ZXJFbnRyaWVzID0gcnVsZXNBc0VudHJpZXMoZmxvcmVuY2VMZXhlclJ1bGVzKSxcbiAgICAgICAgICAgIGZsb3JlbmNlUGFyc2VyUnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKGZsb3JlbmNlUGFyc2VyUnVsZXMpLFxuICAgICAgICAgICAgZmxvcmVuY2VMZXhpY2FsRW50cmllcyA9IGZsb3JlbmNlTGV4ZXJFbnRyaWVzLCAgLy8vXG4gICAgICAgICAgICBmbG9yZW5jZUJORiA9IGZsb3JlbmNlUGFyc2VyUnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXRGbG9yZW5jZUJORihmbG9yZW5jZUJORik7XG5cbiAgICAgIHRoaXMuc2V0RmxvcmVuY2VMZXhpY2FsRW50cmllcyhmbG9yZW5jZUxleGljYWxFbnRyaWVzKTtcblxuICAgICAgdGhpcy5oaWRlQk5GRXJyb3IoKTtcblxuICAgICAgdGhpcy5oaWRlTGV4aWNhbFBhdHRlcm5FcnJvcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGVycm9yO1xuXG4gICAgICBtZXNzYWdlLmluY2x1ZGVzKCdyZWd1bGFyIGV4cHJlc3Npb24nKSA/IC8vL1xuICAgICAgICB0aGlzLnNob3dMZXhpY2FsUGF0dGVybkVycm9yKCkgOlxuICAgICAgICAgIHRoaXMuc2hvd0JORkVycm9yKCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyTmFtZSA9IHRoaXMuZ2V0Q3VzdG9tR3JhbW1hck5hbWUoKTtcblxuICAgIGxldCBibmYsXG4gICAgICAgIHJlYWRPbmx5LFxuICAgICAgICBsZXhpY2FsUGF0dGVybjtcblxuICAgIGlmIChjdXN0b21HcmFtbWFyTmFtZSA9PT0gREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgJ3Rlcm0nIDogYm5mID0gdGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnc3RhdGVtZW50JyA6IGJuZiA9IHN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnZXhwcmVzc2lvbicgOiBibmYgPSBleHByZXNzaW9uRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkY7IGJyZWFrO1xuICAgICAgICBjYXNlICdtZXRhc3RhdGVtZW50JyA6IGJuZiA9IG1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORjsgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGxleGljYWxQYXR0ZXJuID0gbnVsbDtcblxuICAgICAgcmVhZE9ubHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBibmYgPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0Qk5GKHJ1bGVOYW1lKTtcblxuICAgICAgbGV4aWNhbFBhdHRlcm4gPSB1c2VyRGVmaW5lZEN1c3RvbUdyYW1tYXIuZ2V0TGV4aWNhbFBhdHRlcm4oKTtcblxuICAgICAgcmVhZE9ubHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRCTkZSZWFkT25seShyZWFkT25seSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm5SZWFkT25seShyZWFkT25seSk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEN1c3RvbSBncmFtbWFyXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Q3VzdG9tR3JhbW1hck5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgUnVsZSBuYW1lXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8UnVsZU5hbWVTZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQk5GXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgRmxvcmVuY2UgbGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8RmxvcmVuY2VMZXhpY2FsRW50cmllc1RleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgRmxvcmVuY2UgQk5GXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8RmxvcmVuY2VCTkZUZXh0YXJlYSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTsgLy8vXG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19