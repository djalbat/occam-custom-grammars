'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var lexers = require('../lexers'),
    parsers = require('../parsers'),
    constants = require('../constants'),
    BNFTextarea = require('./textarea/bnf'),
    CustomGrammar = require('../customGrammar'),
    rulesUtilities = require('../utilities/rules'),
    RuleNameSelect = require('./select/ruleName'),
    FlorenceBNFTextarea = require('./textarea/florenceBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    CombinedCustomGrammars = require('../combinedCustomGrammars'),
    CustomGrammarNameSelect = require('./select/customGrammarName'),
    FlorenceLexicalEntriesTextarea = require('./textarea/florenceLexicalEntries');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement,
    rulesAsString = rulesUtilities.rulesAsString,
    rulesAsEntries = rulesUtilities.rulesAsEntries,
    florenceLexerFromCombinedCustomGrammars = lexers.florenceLexerFromCombinedCustomGrammars,
    florenceParserFromCombinedCustomGrammars = parsers.florenceParserFromCombinedCustomGrammars,
    DEFAULT_CUSTOM_GRAMMAR_NAME = constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    termDefaultCustomGrammarBNF = parsers.termDefaultCustomGrammarBNF,
    statementDefaultCustomGrammarBNF = parsers.statementDefaultCustomGrammarBNF,
    expressionDefaultCustomGrammarBNF = parsers.expressionDefaultCustomGrammarBNF,
    metastatementDefaultCustomGrammarBNF = parsers.metastatementDefaultCustomGrammarBNF,
    name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
    userDefinedCustomGrammar = CustomGrammar.fromName(name),
    customGrammars = [userDefinedCustomGrammar];

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'update',
    value: function update() {
      var customGrammarName = this.getCustomGrammarName(),
          combinedCustomGrammars = CombinedCustomGrammars.fromCustomGrammars(customGrammars),
          florenceLexer = florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars),
          florenceParser = florenceParserFromCombinedCustomGrammars(combinedCustomGrammars),
          florenceLexerRules = florenceLexer.getRules(),
          florenceParserRules = florenceParser.getRules(),
          florenceLexerEntries = rulesAsEntries(florenceLexerRules),
          florenceParserRulesString = rulesAsString(florenceParserRules),
          florenceLexicalEntries = florenceLexerEntries,
          ///
      florenceBNF = florenceParserRulesString; ///

      if (customGrammarName === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
        var bnf = this.getBNF(),
            ruleName = this.getRuleName();

        userDefinedCustomGrammar.setBNF(ruleName, bnf);
      }

      this.setFlorenceLexicalEntries(florenceLexicalEntries);

      this.setFlorenceBNF(florenceBNF);
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler() {
      var ruleName = this.getRuleName(),
          customGrammarName = this.getCustomGrammarName();

      var bnf = void 0,
          readOnly = void 0;

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

        readOnly = true;
      } else {
        bnf = userDefinedCustomGrammar.getBNF(ruleName);

        readOnly = false;
      }

      this.setBNF(bnf);

      this.setBNFReadOnly(readOnly);
    }
  }, {
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      this.update();
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

      this.update();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwibGV4ZXJzIiwicGFyc2VycyIsImNvbnN0YW50cyIsIkJORlRleHRhcmVhIiwiQ3VzdG9tR3JhbW1hciIsInJ1bGVzVXRpbGl0aWVzIiwiUnVsZU5hbWVTZWxlY3QiLCJGbG9yZW5jZUJORlRleHRhcmVhIiwiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJDb21iaW5lZEN1c3RvbUdyYW1tYXJzIiwiQ3VzdG9tR3JhbW1hck5hbWVTZWxlY3QiLCJGbG9yZW5jZUxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJFbGVtZW50IiwiU2l6ZWFibGVFbGVtZW50IiwicnVsZXNBc1N0cmluZyIsInJ1bGVzQXNFbnRyaWVzIiwiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFycyIsIkRFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSIsIlVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FIiwidGVybURlZmF1bHRDdXN0b21HcmFtbWFyQk5GIiwic3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJleHByZXNzaW9uRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYiLCJuYW1lIiwidXNlckRlZmluZWRDdXN0b21HcmFtbWFyIiwiZnJvbU5hbWUiLCJjdXN0b21HcmFtbWFycyIsIlZpZXciLCJjdXN0b21HcmFtbWFyTmFtZSIsImdldEN1c3RvbUdyYW1tYXJOYW1lIiwiY29tYmluZWRDdXN0b21HcmFtbWFycyIsImZyb21DdXN0b21HcmFtbWFycyIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsImZsb3JlbmNlTGV4ZXJSdWxlcyIsImdldFJ1bGVzIiwiZmxvcmVuY2VQYXJzZXJSdWxlcyIsImZsb3JlbmNlTGV4ZXJFbnRyaWVzIiwiZmxvcmVuY2VQYXJzZXJSdWxlc1N0cmluZyIsImZsb3JlbmNlTGV4aWNhbEVudHJpZXMiLCJmbG9yZW5jZUJORiIsImJuZiIsImdldEJORiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJzZXRCTkYiLCJzZXRGbG9yZW5jZUxleGljYWxFbnRyaWVzIiwic2V0RmxvcmVuY2VCTkYiLCJyZWFkT25seSIsInNldEJORlJlYWRPbmx5IiwidXBkYXRlIiwicHJvcGVydGllcyIsImtleVVwSGFuZGxlciIsImJpbmQiLCJjaGFuZ2VIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxhQUFSLENBRG5COztBQUdBLElBQU1FLFNBQVNGLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUcsVUFBVUgsUUFBUSxZQUFSLENBRGhCO0FBQUEsSUFFTUksWUFBWUosUUFBUSxjQUFSLENBRmxCO0FBQUEsSUFHTUssY0FBY0wsUUFBUSxnQkFBUixDQUhwQjtBQUFBLElBSU1NLGdCQUFnQk4sUUFBUSxrQkFBUixDQUp0QjtBQUFBLElBS01PLGlCQUFpQlAsUUFBUSxvQkFBUixDQUx2QjtBQUFBLElBTU1RLGlCQUFpQlIsUUFBUSxtQkFBUixDQU52QjtBQUFBLElBT01TLHNCQUFzQlQsUUFBUSx3QkFBUixDQVA1QjtBQUFBLElBUU1VLHVCQUF1QlYsUUFBUSx5QkFBUixDQVI3QjtBQUFBLElBU01XLHlCQUF5QlgsUUFBUSwyQkFBUixDQVQvQjtBQUFBLElBVU1ZLDBCQUEwQlosUUFBUSw0QkFBUixDQVZoQztBQUFBLElB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LEtBRFM7QUFFbEJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJ0QyxJQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IGxleGVycyA9IHJlcXVpcmUoJy4uL2xleGVycycpLFxuICAgICAgcGFyc2VycyA9IHJlcXVpcmUoJy4uL3BhcnNlcnMnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgQk5GVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2JuZicpLFxuICAgICAgQ3VzdG9tR3JhbW1hciA9IHJlcXVpcmUoJy4uL2N1c3RvbUdyYW1tYXInKSxcbiAgICAgIHJ1bGVzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVzJyksXG4gICAgICBSdWxlTmFtZVNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0L3J1bGVOYW1lJyksXG4gICAgICBGbG9yZW5jZUJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9mbG9yZW5jZUJORicpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgQ29tYmluZWRDdXN0b21HcmFtbWFycyA9IHJlcXVpcmUoJy4uL2NvbWJpbmVkQ3VzdG9tR3JhbW1hcnMnKSxcbiAgICAgIEN1c3RvbUdyYW1tYXJOYW1lU2VsZWN0ID0gcmVxdWlyZSgnLi9zZWxlY3QvY3VzdG9tR3JhbW1hck5hbWUnKSxcbiAgICAgIEZsb3JlbmNlTGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvZmxvcmVuY2VMZXhpY2FsRW50cmllcycpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IFNpemVhYmxlRWxlbWVudCB9ID0gZWFzeUxheW91dCxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZXNBc0VudHJpZXMgfSA9IHJ1bGVzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMgfSA9IGxleGVycyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFycyB9ID0gcGFyc2VycyxcbiAgICAgIHsgREVGQVVMVF9DVVNUT01fR1JBTU1BUl9OQU1FLCBVU0VSX0RFRklORURfQ1VTVE9NX0dSQU1NQVJfTkFNRSB9ID0gY29uc3RhbnRzLFxuICAgICAgeyB0ZXJtRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYsIHN0YXRlbWVudERlZmF1bHRDdXN0b21HcmFtbWFyQk5GLCBleHByZXNzaW9uRGVmYXVsdEN1c3RvbUdyYW1tYXJCTkYsIG1ldGFzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORiAgfSA9IHBhcnNlcnMsXG4gICAgICBuYW1lID0gVVNFUl9ERUZJTkVEX0NVU1RPTV9HUkFNTUFSX05BTUUsICAvLy9cbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hciA9IEN1c3RvbUdyYW1tYXIuZnJvbU5hbWUobmFtZSksXG4gICAgICBjdXN0b21HcmFtbWFycyA9IFtcbiAgICAgICAgdXNlckRlZmluZWRDdXN0b21HcmFtbWFyXG4gICAgICBdO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjdXN0b21HcmFtbWFyTmFtZSA9IHRoaXMuZ2V0Q3VzdG9tR3JhbW1hck5hbWUoKSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXJzID0gQ29tYmluZWRDdXN0b21HcmFtbWFycy5mcm9tQ3VzdG9tR3JhbW1hcnMoY3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMoY29tYmluZWRDdXN0b21HcmFtbWFycyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXJzKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcnMpLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXJSdWxlcyA9IGZsb3JlbmNlTGV4ZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlclJ1bGVzID0gZmxvcmVuY2VQYXJzZXIuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyRW50cmllcyA9IHJ1bGVzQXNFbnRyaWVzKGZsb3JlbmNlTGV4ZXJSdWxlcyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXJSdWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcoZmxvcmVuY2VQYXJzZXJSdWxlcyksXG4gICAgICAgICAgZmxvcmVuY2VMZXhpY2FsRW50cmllcyA9IGZsb3JlbmNlTGV4ZXJFbnRyaWVzLCAgLy8vXG4gICAgICAgICAgZmxvcmVuY2VCTkYgPSBmbG9yZW5jZVBhcnNlclJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICBpZiAoY3VzdG9tR3JhbW1hck5hbWUgPT09IFVTRVJfREVGSU5FRF9DVVNUT01fR1JBTU1BUl9OQU1FKSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5zZXRCTkYocnVsZU5hbWUsIGJuZik7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRGbG9yZW5jZUxleGljYWxFbnRyaWVzKGZsb3JlbmNlTGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5zZXRGbG9yZW5jZUJORihmbG9yZW5jZUJORik7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXJOYW1lID0gdGhpcy5nZXRDdXN0b21HcmFtbWFyTmFtZSgpO1xuXG4gICAgbGV0IGJuZiwgcmVhZE9ubHk7XG5cbiAgICBpZiAoY3VzdG9tR3JhbW1hck5hbWUgPT09IERFRkFVTFRfQ1VTVE9NX0dSQU1NQVJfTkFNRSkge1xuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlICd0ZXJtJyA6IGJuZiA9IHRlcm1EZWZhdWx0Q3VzdG9tR3JhbW1hckJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0YXRlbWVudCcgOiBibmYgPSBzdGF0ZW1lbnREZWZhdWx0Q3VzdG9tR3JhbW1hckJORjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V4cHJlc3Npb24nIDogYm5mID0gZXhwcmVzc2lvbkRlZmF1bHRDdXN0b21HcmFtbWFyQk5GOyBicmVhaztcbiAgICAgICAgY2FzZSAnbWV0YXN0YXRlbWVudCcgOiBibmYgPSBtZXRhc3RhdGVtZW50RGVmYXVsdEN1c3RvbUdyYW1tYXJCTkY7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZWFkT25seSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJuZiA9IHVzZXJEZWZpbmVkQ3VzdG9tR3JhbW1hci5nZXRCTkYocnVsZU5hbWUpO1xuXG4gICAgICByZWFkT25seSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldEJORlJlYWRPbmx5KHJlYWRPbmx5KTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBDdXN0b20gZ3JhbW1hclxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEN1c3RvbUdyYW1tYXJOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIFJ1bGUgbmFtZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPFJ1bGVOYW1lU2VsZWN0IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEJORlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEZsb3JlbmNlIGxleGljYWwgZW50cmllc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEZsb3JlbmNlTGV4aWNhbEVudHJpZXNUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIEZsb3JlbmNlIEJORlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPEZsb3JlbmNlQk5GVGV4dGFyZWEgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7IC8vL1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=