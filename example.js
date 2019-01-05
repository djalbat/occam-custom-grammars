(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var ruleUtilities = require('./utilities/rule'),
    leftRecursionUtilities = require('./utilities/leftRecursion');

var arrayUtilities = necessary.arrayUtilities,
    unshift = arrayUtilities.unshift,
    findRuleByName = ruleUtilities.findRuleByName,
    eliminateLeftRecursion = leftRecursionUtilities.eliminateLeftRecursion,
    BasicParser = parsers.BasicParser,
    termDefaultCustomGrammarBNF = parsers.termDefaultCustomGrammarBNF,
    statementDefaultCustomGrammarBNF = parsers.statementDefaultCustomGrammarBNF,
    expressionDefaultCustomGrammarBNF = parsers.expressionDefaultCustomGrammarBNF,
    metastatementDefaultCustomGrammarBNF = parsers.metastatementDefaultCustomGrammarBNF;

var CombinedCustomGrammars = function () {
  function CombinedCustomGrammars(lexicalPattern, rules) {
    _classCallCheck(this, CombinedCustomGrammars);

    this.lexicalPattern = lexicalPattern;
    this.rules = rules;
  }

  _createClass(CombinedCustomGrammars, [{
    key: 'getLexicalPattern',
    value: function getLexicalPattern() {
      return this.lexicalPattern;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }], [{
    key: 'fromCustomGrammars',
    value: function fromCustomGrammars(customGrammars) {
      var combinedLexicalPattern = combinedLexicalPatternFromCustomGrammars(customGrammars),
          combinedRules = combinedRulesFromCustomGrammars(customGrammars),
          lexicalPattern = combinedLexicalPattern,
          ///
      rules = combinedRules,
          ///
      combinedCustomGrammars = new CombinedCustomGrammars(lexicalPattern, rules);

      return combinedCustomGrammars;
    }
  }]);

  return CombinedCustomGrammars;
}();

module.exports = CombinedCustomGrammars;

function combinedLexicalPatternFromCustomGrammars(customGrammars) {
  var lexicalPatterns = lexicalPatternsFromCustomGrammars(customGrammars),
      combinedLexicalPattern = lexicalPatterns.reverse().join('|'); ///

  return combinedLexicalPattern;
}

function combinedRulesFromCustomGrammars(customGrammars) {
  var metastatementDefaultBNF = metastatementDefaultCustomGrammarBNF,
      ///
  expressionDefaultBNF = expressionDefaultCustomGrammarBNF,
      ///
  statementDefaultBNF = statementDefaultCustomGrammarBNF,
      ///
  termDefaultBNF = termDefaultCustomGrammarBNF,
      ///
  metastatementBNFs = bnfsFromCustomGrammars('metastatement', customGrammars),
      expressionBNFs = bnfsFromCustomGrammars('expression', customGrammars),
      statementBNFs = bnfsFromCustomGrammars('statement', customGrammars),
      termBNFs = bnfsFromCustomGrammars('term', customGrammars),
      metastatementRules = rulesFromBNFs('metastatement', metastatementDefaultBNF, metastatementBNFs),
      expressionRules = rulesFromBNFs('expression', expressionDefaultBNF, expressionBNFs),
      statementRules = rulesFromBNFs('statement', statementDefaultBNF, statementBNFs),
      termRules = rulesFromBNFs('term', termDefaultBNF, termBNFs),
      combinedRules = [].concat(metastatementRules).concat(statementRules).concat(expressionRules).concat(termRules); ///

  return combinedRules;
}

function lexicalPatternsFromCustomGrammars(customGrammars) {
  var lexicalPatterns = [];

  customGrammars.forEach(function (customGrammar) {
    var lexicalPattern = customGrammar.getLexicalPattern();

    if (lexicalPattern) {
      ///
      lexicalPatterns.push(lexicalPattern);
    }
  });

  return lexicalPatterns;
}

function bnfsFromCustomGrammars(ruleName, customGrammars) {
  var bnfs = [];

  customGrammars.forEach(function (customGrammar) {
    var bnf = customGrammar.getBNF(ruleName);

    if (bnf) {
      ///
      bnfs.push(bnf);
    }
  });

  return bnfs;
}

function rulesFromBNFs(ruleName, defaultBNF, bnfs) {
  var defaultRules = rulesFromBNF(defaultBNF),
      defaultMainRule = mainRuleFromRulesAndRuleName(defaultRules, ruleName),
      defaultRemainingRules = remainingRulesFromRulesAndMainRule(defaultRules, defaultMainRule),
      defaultMainRuleDefinitions = defaultMainRule.getDefinitions();

  bnfs.forEach(function (bnf) {
    var rules = rulesFromBNF(bnf),
        mainRule = mainRuleFromRulesAndRuleName(rules, ruleName),
        remainingRules = remainingRulesFromRulesAndMainRule(rules, mainRule),
        mainRuleDefinitions = mainRule !== null ? mainRule.getDefinitions() : [];

    unshift(defaultRemainingRules, remainingRules);

    unshift(defaultMainRuleDefinitions, mainRuleDefinitions);
  });

  var mainRule = defaultMainRule,
      ///
  remainingRules = defaultRemainingRules; ///

  var rules = [].concat(mainRule).concat(remainingRules);

  rules = eliminateLeftRecursion(rules, ruleName);

  return rules;
}

function rulesFromBNF(bnf) {
  var basicParser = BasicParser.fromBNF(bnf),
      rules = basicParser.getRules();

  return rules;
}

function mainRuleFromRulesAndRuleName(rules, ruleName) {
  var name = ruleName,
      ///
  mainRule = findRuleByName(name, rules);

  return mainRule;
}

function remainingRulesFromRulesAndMainRule(rules, mainRule) {
  var remainingRules = rules.filter(function (rule) {
    if (rule !== mainRule) {
      return true;
    }
  });

  return remainingRules;
}

},{"./utilities/leftRecursion":15,"./utilities/rule":17,"necessary":120,"occam-parsers":204}],2:[function(require,module,exports){
'use strict';

var DEFAULT_CUSTOM_GRAMMAR_NAME = 'Default',
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = 'User defined';

module.exports = {
  DEFAULT_CUSTOM_GRAMMAR_NAME: DEFAULT_CUSTOM_GRAMMAR_NAME,
  USER_DEFINED_CUSTOM_GRAMMAR_NAME: USER_DEFINED_CUSTOM_GRAMMAR_NAME
};

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomGrammar = function () {
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
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getLexicalPattern',
    value: function getLexicalPattern() {
      return this.lexicalPattern;
    }
  }, {
    key: 'getBNF',
    value: function getBNF(ruleName) {
      var bnf = void 0;

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
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: 'setLexicalPattern',
    value: function setLexicalPattern(lexicalPattern) {
      this.lexicalPattern = lexicalPattern;
    }
  }, {
    key: 'setBNF',
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
    key: 'resetLexicalPattern',
    value: function resetLexicalPattern() {
      var lexicalPattern = null;

      this.setLexicalPattern(lexicalPattern);
    }
  }, {
    key: 'resetBNF',
    value: function resetBNF(ruleName) {
      var bnf = null;

      this.setBNF(ruleName, bnf);
    }
  }, {
    key: 'update',
    value: function update(ruleName, bnf, lexicalPattern) {
      this.setBNF(ruleName, bnf);
      this.setLexicalPattern(lexicalPattern);
    }
  }, {
    key: 'toJSON',
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
    key: 'fromJSON',
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
    key: 'fromName',
    value: function fromName(name) {
      var lexicalPattern = null,
          termBNF = null,
          expressionBNF = null,
          statementBNF = null,
          metastatementBNF = null,
          customGrammar = new CustomGrammar(name, lexicalPattern, termBNF, expressionBNF, statementBNF, metastatementBNF);

      return customGrammar;
    }
  }]);

  return CustomGrammar;
}();

module.exports = CustomGrammar;

},{}],4:[function(require,module,exports){
'use strict';

require('juxtapose');

var easy = require('easy');

var View = require('./example/view');

var Body = easy.Body;


var body = new Body();

body.append(React.createElement(View, null));

},{"./example/view":12,"easy":59,"juxtapose":86}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var LexicalPatternInput = function (_InputElement) {
  _inherits(LexicalPatternInput, _InputElement);

  function LexicalPatternInput() {
    _classCallCheck(this, LexicalPatternInput);

    return _possibleConstructorReturn(this, (LexicalPatternInput.__proto__ || Object.getPrototypeOf(LexicalPatternInput)).apply(this, arguments));
  }

  _createClass(LexicalPatternInput, [{
    key: 'showError',
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: 'hideError',
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
    key: 'getLexicalPattern',
    value: function getLexicalPattern() {
      var value = this.getValue(),
          lexicalPattern = value; ///

      return lexicalPattern;
    }
  }, {
    key: 'setLexicalPattern',
    value: function setLexicalPattern(lexicalPattern) {
      var value = lexicalPattern || ''; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getLexicalPattern = this.getLexicalPattern.bind(this),
          setLexicalPattern = this.setLexicalPattern.bind(this),
          showLexicalPatternError = this.showError.bind(this),
          ///
      hideLexicalPatternError = this.hideError.bind(this),
          ///
      setLexicalPatternReadOnly = this.setReadOnly.bind(this); ///

      return {
        getLexicalPattern: getLexicalPattern,
        setLexicalPattern: setLexicalPattern,
        showLexicalPatternError: showLexicalPatternError,
        hideLexicalPatternError: hideLexicalPatternError,
        setLexicalPatternReadOnly: setLexicalPatternReadOnly
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(LexicalPatternInput, properties);
    }
  }]);

  return LexicalPatternInput;
}(InputElement);

Object.assign(LexicalPatternInput, {
  tagName: 'input',
  defaultProperties: {
    className: 'lexical-pattern',
    spellCheck: 'false'
  }
});

module.exports = LexicalPatternInput;

},{"easy":59}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var constants = require('../../constants');

var InputElement = easy.InputElement,
    DEFAULT_CUSTOM_GRAMMAR_NAME = constants.DEFAULT_CUSTOM_GRAMMAR_NAME,
    USER_DEFINED_CUSTOM_GRAMMAR_NAME = constants.USER_DEFINED_CUSTOM_GRAMMAR_NAME;

var CustomGrammarNameSelect = function (_InputElement) {
  _inherits(CustomGrammarNameSelect, _InputElement);

  function CustomGrammarNameSelect() {
    _classCallCheck(this, CustomGrammarNameSelect);

    return _possibleConstructorReturn(this, (CustomGrammarNameSelect.__proto__ || Object.getPrototypeOf(CustomGrammarNameSelect)).apply(this, arguments));
  }

  _createClass(CustomGrammarNameSelect, [{
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var defaultName = DEFAULT_CUSTOM_GRAMMAR_NAME,
          ///
      defaultValue = defaultName,
          ///
      userDefinedName = USER_DEFINED_CUSTOM_GRAMMAR_NAME,
          ///
      userDefinedValue = userDefinedName; ///

      return [React.createElement(
        'option',
        { value: defaultValue, selected: true },
        defaultName
      ), React.createElement(
        'option',
        { value: userDefinedValue },
        userDefinedName
      )];
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getCustomGrammarName = this.getSelectedOptionValue.bind(this); ///

      return {
        getCustomGrammarName: getCustomGrammarName
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(CustomGrammarNameSelect, properties);
    }
  }]);

  return CustomGrammarNameSelect;
}(InputElement);

Object.assign(CustomGrammarNameSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'custom-grammar-name',
    spellCheck: false
  }
});

module.exports = CustomGrammarNameSelect;

},{"../../constants":2,"easy":59}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var RuleNameSelect = function (_InputElement) {
  _inherits(RuleNameSelect, _InputElement);

  function RuleNameSelect() {
    _classCallCheck(this, RuleNameSelect);

    return _possibleConstructorReturn(this, (RuleNameSelect.__proto__ || Object.getPrototypeOf(RuleNameSelect)).apply(this, arguments));
  }

  _createClass(RuleNameSelect, [{
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      var domElement = this.getDOMElement(),
          selectedOptionValue = domElement.value; ///

      return selectedOptionValue;
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      return [React.createElement(
        'option',
        { value: 'term', selected: true },
        'term'
      ), React.createElement(
        'option',
        { value: 'expression' },
        'expression'
      ), React.createElement(
        'option',
        { value: 'statement' },
        'statement'
      ), React.createElement(
        'option',
        { value: 'metastatement' },
        'metastatement'
      )];
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getRuleName = this.getSelectedOptionValue.bind(this); ///

      return {
        getRuleName: getRuleName
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(RuleNameSelect, properties);
    }
  }]);

  return RuleNameSelect;
}(InputElement);

Object.assign(RuleNameSelect, {
  tagName: 'select',
  defaultProperties: {
    className: 'rule-name',
    spellCheck: false
  }
});

module.exports = RuleNameSelect;

},{"easy":59}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var BNFTextarea = function (_InputElement) {
  _inherits(BNFTextarea, _InputElement);

  function BNFTextarea() {
    _classCallCheck(this, BNFTextarea);

    return _possibleConstructorReturn(this, (BNFTextarea.__proto__ || Object.getPrototypeOf(BNFTextarea)).apply(this, arguments));
  }

  _createClass(BNFTextarea, [{
    key: 'getBNF',
    value: function getBNF() {
      var value = this.getValue(),
          bnf = value; ///

      return bnf;
    }
  }, {
    key: 'setBNF',
    value: function setBNF(bnf) {
      var value = bnf || ''; ///

      this.setValue(value);
    }
  }, {
    key: 'showError',
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: 'hideError',
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this),
          showBNFError = this.showError.bind(this),
          ///
      hideBNFError = this.hideError.bind(this),
          ///
      setBNFReadOnly = this.setReadOnly.bind(this); ///

      return {
        getBNF: getBNF,
        setBNF: setBNF,
        showBNFError: showBNFError,
        hideBNFError: hideBNFError,
        setBNFReadOnly: setBNFReadOnly
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(BNFTextarea, properties);
    }
  }]);

  return BNFTextarea;
}(InputElement);

Object.assign(BNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'bnf',
    spellCheck: 'false'
  }
});

module.exports = BNFTextarea;

},{"easy":59}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var FlorenceBNFTextarea = function (_InputElement) {
  _inherits(FlorenceBNFTextarea, _InputElement);

  function FlorenceBNFTextarea() {
    _classCallCheck(this, FlorenceBNFTextarea);

    return _possibleConstructorReturn(this, (FlorenceBNFTextarea.__proto__ || Object.getPrototypeOf(FlorenceBNFTextarea)).apply(this, arguments));
  }

  _createClass(FlorenceBNFTextarea, [{
    key: 'setFlorenceBNF',
    value: function setFlorenceBNF(florenceBNF) {
      var value = florenceBNF; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setFlorenceBNF = this.setFlorenceBNF.bind(this);

      return {
        setFlorenceBNF: setFlorenceBNF
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(FlorenceBNFTextarea, properties);
    }
  }]);

  return FlorenceBNFTextarea;
}(InputElement);

Object.assign(FlorenceBNFTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'florence-bnf',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = FlorenceBNFTextarea;

},{"easy":59}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var FlorenceLexicalEntriesTextarea = function (_InputElement) {
  _inherits(FlorenceLexicalEntriesTextarea, _InputElement);

  function FlorenceLexicalEntriesTextarea() {
    _classCallCheck(this, FlorenceLexicalEntriesTextarea);

    return _possibleConstructorReturn(this, (FlorenceLexicalEntriesTextarea.__proto__ || Object.getPrototypeOf(FlorenceLexicalEntriesTextarea)).apply(this, arguments));
  }

  _createClass(FlorenceLexicalEntriesTextarea, [{
    key: 'setFlorenceLexicalEntries',
    value: function setFlorenceLexicalEntries(florenceLexicalEntries) {
      var value = JSON.stringify(florenceLexicalEntries, null, '  '); ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setFlorenceLexicalEntries = this.setFlorenceLexicalEntries.bind(this);

      return {
        setFlorenceLexicalEntries: setFlorenceLexicalEntries
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(FlorenceLexicalEntriesTextarea, properties);
    }
  }]);

  return FlorenceLexicalEntriesTextarea;
}(InputElement);

Object.assign(FlorenceLexicalEntriesTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'florence-lexical-entries',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = FlorenceLexicalEntriesTextarea;

},{"easy":59}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easylayout = require('easy-layout');

var Splitter = easylayout.Splitter,
    VerticalSplitter = easylayout.VerticalSplitter;

var MainVerticalSplitter = function (_VerticalSplitter) {
  _inherits(MainVerticalSplitter, _VerticalSplitter);

  function MainVerticalSplitter() {
    _classCallCheck(this, MainVerticalSplitter);

    return _possibleConstructorReturn(this, (MainVerticalSplitter.__proto__ || Object.getPrototypeOf(MainVerticalSplitter)).apply(this, arguments));
  }

  _createClass(MainVerticalSplitter, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var afterSizeableElement = true;

      Object.assign(properties, { afterSizeableElement: afterSizeableElement });

      var mainVerticalSplitter = Splitter.fromProperties(MainVerticalSplitter, properties);

      return mainVerticalSplitter;
    }
  }]);

  return MainVerticalSplitter;
}(VerticalSplitter);

Object.assign(MainVerticalSplitter, {
  defaultProperties: {
    className: 'main'
  }
});

module.exports = MainVerticalSplitter;

},{"easy-layout":20}],12:[function(require,module,exports){
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
    florenceLexerFromCombinedCustomGrammars = lexers.florenceLexerFromCombinedCustomGrammars,
    florenceParserFromCombinedCustomGrammars = parsers.florenceParserFromCombinedCustomGrammars,
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

},{"../combinedCustomGrammars":1,"../constants":2,"../customGrammar":3,"../lexers":13,"../parsers":14,"../utilities/rules":18,"./input/lexicalPattern":5,"./select/customGrammarName":6,"./select/ruleName":7,"./textarea/bnf":8,"./textarea/florenceBNF":9,"./textarea/florenceLexicalEntries":10,"./verticalSplitter/main":11,"easy":59,"easy-layout":20}],13:[function(require,module,exports){
'use strict';

var lexers = require('occam-lexers');

var Rule = lexers.Rule,
    Rules = lexers.Rules,
    FlorenceLexer = lexers.FlorenceLexer;


function florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars) {
  var entries = FlorenceLexer.entries,
      florenceLexer = florenceLexerFromEntriesAndCombinedCustomGrammars(entries, combinedCustomGrammars);


  return florenceLexer;
}

function florenceLexerFromEntriesAndCombinedCustomGrammars(entries, combinedCustomGrammars) {
  var combinedCustomGrammarsLexicalPattern = combinedCustomGrammars.getLexicalPattern(),
      custom = combinedCustomGrammarsLexicalPattern,
      ///
  customGrammarEntry = {
    custom: custom
  },
      customGrammarRule = Rule.fromEntry(customGrammarEntry),
      rules = Rules.fromEntries(entries);

  rules.addRule(customGrammarRule);

  var florenceLexer = new FlorenceLexer(rules);

  return florenceLexer;
}

module.exports = {
  florenceLexerFromCombinedCustomGrammars: florenceLexerFromCombinedCustomGrammars,
  florenceLexerFromEntriesAndCombinedCustomGrammars: florenceLexerFromEntriesAndCombinedCustomGrammars
};

},{"occam-lexers":149}],14:[function(require,module,exports){
'use strict';

var lexers = require('occam-lexers'),
    parsers = require('occam-parsers'),
    necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    push = arrayUtilities.push,
    BNFLexer = lexers.BNFLexer,
    BNFParser = parsers.BNFParser,
    FlorenceParser = parsers.FlorenceParser,
    termDefaultCustomGrammarBNF = parsers.termDefaultCustomGrammarBNF,
    statementDefaultCustomGrammarBNF = parsers.statementDefaultCustomGrammarBNF,
    expressionDefaultCustomGrammarBNF = parsers.expressionDefaultCustomGrammarBNF,
    metastatementDefaultCustomGrammarBNF = parsers.metastatementDefaultCustomGrammarBNF;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

function florenceParserFromCombinedCustomGrammars(combinedCustomGrammars) {
      var bnf = FlorenceParser.bnf,
          florenceParser = florenceParserFromBNFAndCombinedCustomGrammars(bnf, combinedCustomGrammars);


      return florenceParser;
}

function florenceParserFromBNFAndCombinedCustomGrammars(bnf, combinedCustomGrammars) {
      var combinedCustomGrammarsRules = combinedCustomGrammars.getRules(),
          tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens);

      push(rules, combinedCustomGrammarsRules);

      var florenceParser = new FlorenceParser(rules);

      return florenceParser;
}

module.exports = {
      termDefaultCustomGrammarBNF: termDefaultCustomGrammarBNF,
      statementDefaultCustomGrammarBNF: statementDefaultCustomGrammarBNF,
      expressionDefaultCustomGrammarBNF: expressionDefaultCustomGrammarBNF,
      metastatementDefaultCustomGrammarBNF: metastatementDefaultCustomGrammarBNF,
      florenceParserFromCombinedCustomGrammars: florenceParserFromCombinedCustomGrammars,
      florenceParserFromBNFAndCombinedCustomGrammars: florenceParserFromBNFAndCombinedCustomGrammars
};

},{"necessary":120,"occam-lexers":149,"occam-parsers":204}],15:[function(require,module,exports){
'use strict';

var necessary = require('necessary'),
    grammarUtilities = require('occam-grammar-utilities');

var partUtilities = require('../utilities/part');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    separate = arrayUtilities.separate,
    isPartRuleNamePart = partUtilities.isPartRuleNamePart,
    eliminateOrphanedRules = grammarUtilities.eliminateOrphanedRules,
    eliminateImplicitLeftRecursion = grammarUtilities.eliminateImplicitLeftRecursion;


function eliminateLeftRecursion(rules, ruleName) {
  var leftRecursiveRules = [],
      remainingRules = [];

  separate(rules, leftRecursiveRules, remainingRules, function (rule) {
    var ruleLeftRecursive = isRuleLeftRecursive(rule, ruleName);

    if (ruleLeftRecursive) {
      return true;
    }
  });

  var leftRecursiveRulesLength = leftRecursiveRules.length,
      rulesImplicitlyLeftRecursive = leftRecursiveRulesLength > 0;

  if (rulesImplicitlyLeftRecursive) {
    rules = [].concat(leftRecursiveRules).concat(remainingRules); ///

    rules = eliminateImplicitLeftRecursion(rules); ///

    var excludingFirstRule = false;

    rules = eliminateOrphanedRules(rules, excludingFirstRule); ///
  }

  return rules;
}

module.exports = {
  eliminateLeftRecursion: eliminateLeftRecursion
};

function isRuleLeftRecursive(rule, ruleName) {
  var definitions = rule.getDefinitions(),
      ruleLeftRecursive = definitions.some(function (definition) {
    var definitionLeftRecursive = isDefinitionLeftRecursive(definition, ruleName);

    if (definitionLeftRecursive) {
      return true;
    }
  });

  return ruleLeftRecursive;
}

function isDefinitionLeftRecursive(definition, ruleName) {
  var definitionLeftRecursive = false; ///

  var parts = definition.getParts(),
      partsLength = parts.length;

  if (partsLength > 0) {
    var firstPart = first(parts),
        firstPartRuleNamePart = isPartRuleNamePart(firstPart);

    if (firstPartRuleNamePart) {
      var ruleNamePart = firstPart,
          ///
      ruleNamePartRuleName = ruleNamePart.getRuleName();

      if (ruleNamePartRuleName === ruleName) {
        definitionLeftRecursive = true; ///
      }
    }
  }

  return definitionLeftRecursive;
}

},{"../utilities/part":16,"necessary":120,"occam-grammar-utilities":127}],16:[function(require,module,exports){
'use strict';

var parsers = require('occam-parsers');

var Parts = parsers.Parts,
    RuleNamePart = Parts.RuleNamePart,
    type = RuleNamePart.type,
    ruleNameType = type; ///

function isPartRuleNamePart(part) {
      var partRuleNamePart = false;

      var partTerminalPart = part.isTerminalPart(),
          partNonTerminalPart = !partTerminalPart; ///

      if (partNonTerminalPart) {
            var nonTerminalPart = part,
                ///
            _type = nonTerminalPart.getType(),
                typeRuleNameType = _type === ruleNameType;

            partRuleNamePart = typeRuleNameType; ///
      }

      return partRuleNamePart;
}

module.exports = {
      isPartRuleNamePart: isPartRuleNamePart
};

},{"occam-parsers":204}],17:[function(require,module,exports){
'use strict';

function findRuleByName(name, rules) {
  var rule = rules.find(function (rule) {
    var ruleName = rule.getName();

    if (ruleName === name) {
      return true;
    }
  }) || null; ///

  return rule;
}

module.exports = {
  findRuleByName: findRuleByName
};

},{}],18:[function(require,module,exports){
'use strict';

function rulesAsString(rules) {
  var maximumRuleNameLength = rules.reduce(function (maximumRuleNameLength, rule) {
    var ruleName = rule.getName(),
        ruleNameLength = ruleName.length;

    maximumRuleNameLength = Math.max(maximumRuleNameLength, ruleNameLength);

    return maximumRuleNameLength;
  }, 0),
      rulesString = rules.reduce(function (rulesString, rule) {
    var ruleString = rule.asString(maximumRuleNameLength);

    rulesString += ruleString;

    return rulesString;
  }, '');

  return rulesString;
}

function rulesAsEntries(rules) {
  var entries = rules.map(function (rule) {
    var entry = rule.asEntry();

    return entry;
  });

  return entries;
}

module.exports = {
  rulesAsString: rulesAsString,
  rulesAsEntries: rulesAsEntries
};

},{}],19:[function(require,module,exports){

},{}],20:[function(require,module,exports){
'use strict';

module.exports = {
  options: require('./lib/options'),
  Splitter: require('./lib/splitter'),
  SizeableElement: require('./lib/sizeableElement'),
  VerticalSplitter: require('./lib/splitter/vertical'),
  HorizontalSplitter: require('./lib/splitter/horizontal')
};

},{"./lib/options":22,"./lib/sizeableElement":23,"./lib/splitter":24,"./lib/splitter/horizontal":25,"./lib/splitter/vertical":26}],21:[function(require,module,exports){
'use strict';

var easy = require('easy');

var Body = easy.Body;


var body = new Body();

var previousCursor = void 0; ///

function columnResize() {
  var currentCursor = getCurrentCursor();

  if (currentCursor !== 'col-resize') {
    previousCursor = currentCursor;

    setCursor('col-resize');
  }
}

function rowResize() {
  var currentCursor = getCurrentCursor();

  if (currentCursor !== 'row-resize') {
    previousCursor = currentCursor;

    setCursor('row-resize');
  }
}

function reset() {
  setCursor(previousCursor); ///
}

module.exports = {
  columnResize: columnResize,
  rowResize: rowResize,
  reset: reset
};

function setCursor(cursor) {
  var css = {
    cursor: cursor
  };

  body.css(css);
}

function getCurrentCursor() {
  var currentCursor = body.css('cursor'); ///

  return currentCursor || 'auto'; ///
}

},{"easy":27}],22:[function(require,module,exports){
'use strict';

var ESCAPE_KEY_STOPS_DRAGGING = 'ESCAPE_KEY_STOPS_DRAGGING';

module.exports = {
	ESCAPE_KEY_STOPS_DRAGGING: ESCAPE_KEY_STOPS_DRAGGING
};

},{}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var SizeableElement = function (_Element) {
  _inherits(SizeableElement, _Element);

  function SizeableElement() {
    _classCallCheck(this, SizeableElement);

    return _possibleConstructorReturn(this, (SizeableElement.__proto__ || Object.getPrototypeOf(SizeableElement)).apply(this, arguments));
  }

  _createClass(SizeableElement, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(SizeableElement, properties);
    }
  }]);

  return SizeableElement;
}(Element);

Object.assign(SizeableElement, {
  tagName: 'div',
  defaultProperties: {
    className: 'sizeable'
  }
});

module.exports = SizeableElement;

},{"easy":27}],24:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var options = require('./options');

var window = easy.window,
    Element = easy.Element,
    ESCAPE_KEY_STOPS_DRAGGING = options.ESCAPE_KEY_STOPS_DRAGGING;


var ESCAPE_KEY_CODE = 27;

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

    _this.beforeSizeableElement = beforeSizeableElement;
    _this.afterSizeableElement = afterSizeableElement;

    _this.startDraggingHandler = startDraggingHandler || defaultStartDraggingHandler;
    _this.stopDraggingHandler = stopDraggingHandler || defaultStopDraggingHandler;
    _this.dragHandler = dragHandler || defaultDragHandler;
    _this.options = options || defaultOptions;
    return _this;
  }

  _createClass(Splitter, [{
    key: 'isBeforeSizeableElement',
    value: function isBeforeSizeableElement() {
      return this.beforeSizeableElement;
    }
  }, {
    key: 'isAfterSizeableElement',
    value: function isAfterSizeableElement() {
      return this.afterSizeableElement;
    }
  }, {
    key: 'getDragHandler',
    value: function getDragHandler() {
      return this.dragHandler;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      var disabled = this.hasClass('disabled');

      return disabled;
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      var dragging = this.hasClass('dragging');

      return dragging;
    }
  }, {
    key: 'getDirection',
    value: function getDirection() {
      var direction = void 0;

      if (this.beforeSizeableElement) {
        direction = +1;
      }

      if (this.afterSizeableElement) {
        direction = -1;
      }

      return direction;
    }
  }, {
    key: 'getSizeableElement',
    value: function getSizeableElement() {
      var sizeableElement = void 0;

      var direction = this.getDirection();

      switch (direction) {
        case -1:
          sizeableElement = this.getPreviousSiblingElement(); ///
          break;

        case +1:
          sizeableElement = this.getNextSiblingElement(); ///
          break;
      }

      return sizeableElement;
    }
  }, {
    key: 'isOptionPresent',
    value: function isOptionPresent(option) {
      var optionPresent = this.options[option] === true; ///

      return optionPresent;
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: 'setOption',
    value: function setOption(option) {
      this.options[option] = true;
    }
  }, {
    key: 'unsetOption',
    value: function unsetOption(option) {
      delete this.options[option];
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.removeClass('disabled');
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.addClass('disabled');
    }
  }, {
    key: 'startDragging',
    value: function startDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.onKeyDown(this.keyDownHandler, this);
      }

      this.addClass('dragging');

      this.startDraggingHandler();
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.offKeyDown(this.keyDownHandler, this);
      }

      this.removeClass('dragging');

      this.stopDraggingHandler();
    }
  }, {
    key: 'onDrag',
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
    }
  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(keyCode) {
      if (keyCode === ESCAPE_KEY_CODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }
      }
    }
  }, {
    key: 'initialise',
    value: function initialise(disabled) {
      disabled === true ? ///
      this.disable() : this.enable();

      window.on('mouseup blur', this.mouseUp.bind(this)); ///

      window.onMouseMove(this.mouseMove.bind(this));

      this.onMouseDown(this.mouseDown.bind(this));
      this.onMouseOver(this.mouseOver.bind(this));
      this.onMouseOut(this.mouseOut.bind(this));
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var beforeSizeableElement = properties.beforeSizeableElement,
          afterSizeableElement = properties.afterSizeableElement,
          onStartDragging = properties.onStartDragging,
          onStopDragging = properties.onStopDragging,
          onDrag = properties.onDrag,
          options = properties.options,
          disabled = properties.disabled,
          startDraggingHandler = onStartDragging,
          stopDraggingHandler = onStopDragging,
          dragHandler = onDrag,
          splitter = Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);


      splitter.initialise(disabled);

      return splitter;
    }
  }]);

  return Splitter;
}(Element);

Object.assign(Splitter, {
  tagName: 'div',
  ignoredProperties: ['beforeSizeableElement', 'afterSizeableElement', 'onStartDragging', 'onStopDragging', 'onDrag', 'options', 'disabled']
});

module.exports = Splitter;

function defaultStartDraggingHandler() {}

function defaultStopDraggingHandler() {}

function defaultDragHandler() {}

var defaultOptions = {};

},{"./options":22,"easy":27}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var HorizontalSplitter = function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    _classCallCheck(this, HorizontalSplitter);

    var _this = _possibleConstructorReturn(this, (HorizontalSplitter.__proto__ || Object.getPrototypeOf(HorizontalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options));

    _this.setInitialState();
    return _this;
  }

  _createClass(HorizontalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }

        cursor.reset();
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              dragHandler = this.getDragHandler(),
              sizeableElement = this.getSizeableElement(),
              previousMouseTop = this.getPreviousMouseTop(),
              previousSizeableElementHeight = this.getPreviousSizeableElementHeight(),
              relativeMouseTop = mouseTop - previousMouseTop;

          var sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop;

          var height = sizeableElementHeight; ///

          sizeableElement.setHeight(height);

          sizeableElementHeight = sizeableElement.getHeight(); ///

          dragHandler(sizeableElementHeight);
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var previousMouseTop = mouseTop,
            ///
        dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementHeight = sizeableElement.getHeight(),
            previousSizeableElementHeight = sizeableElementHeight; /// 

        this.setPreviousMouseTop(previousMouseTop);

        this.setPreviousSizeableElementHeight(previousSizeableElementHeight);

        if (!dragging) {
          this.startDragging();
        }

        cursor.rowResize();
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.rowResize();
      }
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();
      }
    }
  }, {
    key: 'getPreviousMouseTop',
    value: function getPreviousMouseTop() {
      var state = this.getState(),
          previousMouseTop = state.previousMouseTop;


      return previousMouseTop;
    }
  }, {
    key: 'getPreviousSizeableElementHeight',
    value: function getPreviousSizeableElementHeight() {
      var state = this.getState(),
          previousSizeableElementHeight = state.previousSizeableElementHeight;


      return previousSizeableElementHeight;
    }
  }, {
    key: 'setPreviousMouseTop',
    value: function setPreviousMouseTop(previousMouseTop) {
      this.updateState({
        previousMouseTop: previousMouseTop
      });
    }
  }, {
    key: 'setPreviousSizeableElementHeight',
    value: function setPreviousSizeableElementHeight(previousSizeableElementHeight) {
      this.updateState({
        previousSizeableElementHeight: previousSizeableElementHeight
      });
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState() {
      var previousMouseTop = null,
          previousSizeableElementHeight = null;

      this.setState({
        previousMouseTop: previousMouseTop,
        previousSizeableElementHeight: previousSizeableElementHeight
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(HorizontalSplitter, properties);
    }
  }]);

  return HorizontalSplitter;
}(Splitter);

Object.assign(HorizontalSplitter, {
  defaultProperties: {
    className: 'horizontal splitter'
  }
});

module.exports = HorizontalSplitter;

},{"../cursor":21,"../splitter":24}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, (VerticalSplitter.__proto__ || Object.getPrototypeOf(VerticalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options));

    _this.setInitialState();
    return _this;
  }

  _createClass(VerticalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }

        cursor.reset();
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              dragHandler = this.getDragHandler(),
              sizeableElement = this.getSizeableElement(),
              previousMouseLeft = this.getPreviousMouseLeft(),
              previousSizeableElementWidth = this.getPreviousSizeableElementWidth(),
              relativeMouseLeft = mouseLeft - previousMouseLeft;

          var sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft;

          var width = sizeableElementWidth; ///

          sizeableElement.setWidth(width);

          sizeableElementWidth = sizeableElement.getWidth(); ///

          dragHandler(sizeableElementWidth);
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var previousMouseLeft = mouseLeft,
            ///
        dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementWidth = sizeableElement.getWidth(),
            previousSizeableElementWidth = sizeableElementWidth; /// 

        this.setPreviousMouseLeft(previousMouseLeft);

        this.setPreviousSizeableElementWidth(previousSizeableElementWidth);

        if (!dragging) {
          this.startDragging();
        }

        cursor.columnResize();
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.columnResize();
      }
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();
      }
    }
  }, {
    key: 'getPreviousMouseLeft',
    value: function getPreviousMouseLeft() {
      var state = this.getState(),
          previousMouseLeft = state.previousMouseLeft;


      return previousMouseLeft;
    }
  }, {
    key: 'getPreviousSizeableElementWidth',
    value: function getPreviousSizeableElementWidth() {
      var state = this.getState(),
          previousSizeableElementWidth = state.previousSizeableElementWidth;


      return previousSizeableElementWidth;
    }
  }, {
    key: 'setPreviousMouseLeft',
    value: function setPreviousMouseLeft(previousMouseLeft) {
      this.updateState({
        previousMouseLeft: previousMouseLeft
      });
    }
  }, {
    key: 'setPreviousSizeableElementWidth',
    value: function setPreviousSizeableElementWidth(previousSizeableElementWidth) {
      this.updateState({
        previousSizeableElementWidth: previousSizeableElementWidth
      });
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState() {
      var previousMouseLeft = null,
          previousSizeableElementWidth = null;

      this.setState({
        previousMouseLeft: previousMouseLeft,
        previousSizeableElementWidth: previousSizeableElementWidth
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(VerticalSplitter, properties);
    }
  }]);

  return VerticalSplitter;
}(Splitter);

Object.assign(VerticalSplitter, {
  defaultProperties: {
    className: 'vertical splitter'
  }
});

module.exports = VerticalSplitter;

},{"../cursor":21,"../splitter":24}],27:[function(require,module,exports){
'use strict';

module.exports = {
  window: require('./lib/window'),
  document: require('./lib/document'),
  Div: require('./lib/element/div'),
  Span: require('./lib/element/span'),
  Body: require('./lib/element/body'),
  Link: require('./lib/element/link'),
  Select: require('./lib/element/select'),
  Button: require('./lib/element/button'),
  Checkbox: require('./lib/element/checkbox'),
  Element: require('./lib/element'),
  TextElement: require('./lib/textElement'),
  Input: require('./lib/inputElement/input'),
  Textarea: require('./lib/inputElement/textarea'),
  InputElement: require('./lib/inputElement'),
  Bounds: require('./lib/miscellaneous/bounds'),
  Offset: require('./lib/miscellaneous/offset'),
  React: require('./lib/react')
};

},{"./lib/document":29,"./lib/element":30,"./lib/element/body":31,"./lib/element/button":32,"./lib/element/checkbox":33,"./lib/element/div":34,"./lib/element/link":35,"./lib/element/select":36,"./lib/element/span":37,"./lib/inputElement":38,"./lib/inputElement/input":39,"./lib/inputElement/textarea":40,"./lib/miscellaneous/bounds":41,"./lib/miscellaneous/offset":42,"./lib/react":51,"./lib/textElement":52,"./lib/window":58}],28:[function(require,module,exports){
'use strict';

var SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg';

module.exports = {
  SVG_NAMESPACE_URI: SVG_NAMESPACE_URI
};

},{}],29:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var keyMixins = require('./mixins/key'),
    eventMixins = require('./mixins/event'),
    clickMixins = require('./mixins/click'),
    mouseMixins = require('./mixins/mouse');

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document; ///
};

Object.assign(Document.prototype, keyMixins);
Object.assign(Document.prototype, eventMixins);
Object.assign(Document.prototype, clickMixins);
Object.assign(Document.prototype, mouseMixins);

module.exports = typeof document === 'undefined' ? undefined : new Document(); ///

},{"./mixins/click":43,"./mixins/event":44,"./mixins/key":46,"./mixins/mouse":47}],30:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = require('./miscellaneous/offset'),
    Bounds = require('./miscellaneous/bounds'),
    constants = require('./constants'),
    jsxMixins = require('./mixins/jsx'),
    keyMixins = require('./mixins/key'),
    stateMixins = require('./mixins/state'),
    mouseMixins = require('./mixins/mouse'),
    eventMixins = require('./mixins/event'),
    clickMixins = require('./mixins/click'),
    scrollMixins = require('./mixins/scroll'),
    resizeMixins = require('./mixins/resize'),
    domUtilities = require('./utilities/dom'),
    nameUtilities = require('./utilities/name'),
    arrayUtilities = require('./utilities/array'),
    objectUtilities = require('./utilities/object');

var combine = objectUtilities.combine,
    isSVGTagName = nameUtilities.isSVGTagName,
    first = arrayUtilities.first,
    augment = arrayUtilities.augment,
    SVG_NAMESPACE_URI = constants.SVG_NAMESPACE_URI,
    domNodeMatchesSelector = domUtilities.domNodeMatchesSelector,
    domElementFromSelector = domUtilities.domElementFromSelector,
    elementsFromDOMElements = domUtilities.elementsFromDOMElements,
    filterDOMNodesBySelector = domUtilities.filterDOMNodesBySelector,
    descendantDOMNodesFromDOMNode = domUtilities.descendantDOMNodesFromDOMNode;

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);

    this.domElement.__element__ = this; ///
  }

  _createClass(Element, [{
    key: 'clone',
    value: function clone() {
      return Element.clone(this);
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);

      return offset;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;

      return width;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      width = width + 'px'; ///

      this.style('width', width);
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      height = height + 'px'; ///

      this.style('height', height);
    }
  }, {
    key: 'hasAttribute',
    value: function hasAttribute(name) {
      return this.domElement.hasAttribute(name);
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      this.domElement.setAttribute(name, value);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: 'addAttribute',
    value: function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(name) {
      this.clearAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: 'appendTo',
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: 'addTo',
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: 'prepend',
    value: function prepend(element) {
      var domElement = element.domElement,
          firstChildDOMElement = this.domElement.firstChild;

      this.domElement.insertBefore(domElement, firstChildDOMElement);
    }
  }, {
    key: 'append',
    value: function append(element) {
      var domElement = element.domElement;

      this.domElement.insertBefore(domElement, null); ///
    }
  }, {
    key: 'add',
    value: function add(element) {
      this.append(element);
    }
  }, {
    key: 'remove',
    value: function remove(element) {
      if (element) {
        var domElement = element.domElement;

        this.domElement.removeChild(domElement);
      } else {
        this.domElement.remove();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var displayStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'block';
      this.display(displayStyle);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.style('display', 'none');
    }
  }, {
    key: 'display',
    value: function display(_display) {
      this.style('display', _display);
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.clearAttribute('disabled');
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.setAttribute('disabled', 'disabled');
    }
  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      var disabled = this.isDisabled(),
          enabled = !disabled;

      return enabled;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      var disabled = this.hasAttribute('disabled');

      return disabled;
    }
  }, {
    key: 'isDisplayed',
    value: function isDisplayed() {
      var display = this.style('display'),
          displayed = display !== 'none';

      return displayed;
    }
  }, {
    key: 'isShowing',
    value: function isShowing() {
      var displayed = this.isDisplayed(),
          showing = displayed; ///

      return showing;
    }
  }, {
    key: 'isHidden',
    value: function isHidden() {
      var displayed = this.isDisplayed(),
          hidden = !displayed;

      return hidden;
    }
  }, {
    key: 'style',
    value: function style(name, value) {
      if (value !== undefined) {
        this.domElement.style[name] = value;
      } else {
        var style = this.domElement.style[name];

        return style;
      }
    }
  }, {
    key: 'html',
    value: function html(_html) {
      if (_html === undefined) {
        var innerHTML = this.domElement.innerHTML;

        _html = innerHTML; ///

        return _html;
      } else {
        var _innerHTML = _html; ///

        this.domElement.innerHTML = _innerHTML;
      }
    }
  }, {
    key: 'css',
    value: function css(_css) {
      if (_css === undefined) {
        var computedStyle = getComputedStyle(this.domElement),
            css = {};

        for (var index = 0; index < computedStyle.length; index++) {
          var name = computedStyle[0],
              ///
          value = computedStyle.getPropertyValue(name); ///

          css[name] = value;
        }

        return css;
      } else if (typeof _css === 'string') {
        var _name = _css; ///

        var _computedStyle = getComputedStyle(this.domElement),
            _value = _computedStyle.getPropertyValue(_name); ///

        _css = _value; ///

        return _css;
      } else {
        var names = Object.keys(_css); ///

        names.forEach(function (name) {
          var value = _css[name];

          this.style(name, value);
        }.bind(this));
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.domElement.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.domElement.focus();
    }
  }, {
    key: 'hasFocus',
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: 'getDescendantElements',
    value: function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var domNode = this.domElement,
          ///
      descendantDOMNodes = descendantDOMNodesFromDOMNode(domNode),
          descendantDOMElements = filterDOMNodesBySelector(descendantDOMNodes, selector),
          descendantElements = elementsFromDOMElements(descendantDOMElements);

      return descendantElements;
    }
  }, {
    key: 'getChildElements',
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = filterDOMNodesBySelector(childDOMNodes, selector),
          childElements = elementsFromDOMElements(childDOMElements);

      return childElements;
    }
  }, {
    key: 'getParentElement',
    value: function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var parentElement = null;

      var parentDOMElement = this.domElement.parentElement;

      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [parentDOMElement],
              parentElements = elementsFromDOMElements(parentDOMElements),
              firstParentElement = first(parentElements);

          parentElement = firstParentElement || null;
        }
      }

      return parentElement;
    }
  }, {
    key: 'getAscendantElements',
    value: function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var ascendantDOMElements = [],
          parentDOMElement = this.domElement.parentElement;

      var ascendantDOMElement = parentDOMElement; ///
      while (ascendantDOMElement !== null) {
        if (ascendantDOMElement.matches(selector)) {
          ascendantDOMElements.push(ascendantDOMElement);
        }

        ascendantDOMElement = ascendantDOMElement.parentElement;
      }

      var ascendantElements = elementsFromDOMElements(ascendantDOMElements);

      return ascendantElements;
    }
  }, {
    key: 'getPreviousSiblingElement',
    value: function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var previousSiblingElement = null;

      var previousSiblingDOMNode = this.domElement.previousSibling; ///

      if (previousSiblingDOMNode !== null && domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
      }

      return previousSiblingElement;
    }
  }, {
    key: 'getNextSiblingElement',
    value: function getNextSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var nextSiblingElement = null;

      var nextSiblingDOMNode = this.domElement.nextSibling;

      if (nextSiblingDOMNode !== null && domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }

      return nextSiblingElement;
    }
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      var deep = true,
          domElement = element.domElement.cloneNode(deep);

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _fromDOMElement.apply(undefined, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      var outerDOMElement = document.createElement('div');

      outerDOMElement.innerHTML = html; ///

      var domElement = outerDOMElement.firstChild;

      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return _fromDOMElement.apply(undefined, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return _fromDOMElement.apply(undefined, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len4 = arguments.length, remainingArguments = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        remainingArguments[_key4 - 2] = arguments[_key4];
      }

      var tagName = Class.tagName,
          element = _fromTagName.apply(undefined, [Class, tagName].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

      element.applyProperties(properties, defaultProperties, ignoredProperties);

      return element;
    }
  }, {
    key: 'fromTagName',
    value: function fromTagName(tagName, properties) {
      for (var _len5 = arguments.length, remainingArguments = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        remainingArguments[_key5 - 2] = arguments[_key5];
      }

      var element = _fromTagName.apply(undefined, [Element, tagName].concat(remainingArguments)),
          defaultProperties = {},
          ///
      ignoredProperties = []; ///

      element.applyProperties(properties, defaultProperties, ignoredProperties);

      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, jsxMixins);
Object.assign(Element.prototype, keyMixins);
Object.assign(Element.prototype, stateMixins);
Object.assign(Element.prototype, mouseMixins);
Object.assign(Element.prototype, eventMixins);
Object.assign(Element.prototype, clickMixins);
Object.assign(Element.prototype, scrollMixins);
Object.assign(Element.prototype, resizeMixins);

Object.assign(Element, {
  LEFT_MOUSE_BUTTON: 0,
  RIGHT_MOUSE_BUTTON: 2,
  MIDDLE_MOUSE_BUTTON: 1
});

module.exports = Element;

function _fromTagName(Class, tagName) {
  var domElement = isSVGTagName(tagName) ? document.createElementNS(SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);

  for (var _len6 = arguments.length, remainingArguments = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
    remainingArguments[_key6 - 2] = arguments[_key6];
  }

  return _fromDOMElement.apply(undefined, [Class, domElement].concat(remainingArguments));
}

function _fromDOMElement(Class, domElement) {
  var _Function$prototype$b;

  for (var _len7 = arguments.length, remainingArguments = Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    remainingArguments[_key7 - 2] = arguments[_key7];
  }

  remainingArguments.unshift(domElement);

  remainingArguments.unshift(null);

  return new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [Class].concat(remainingArguments)))();
}

function defaultPropertiesFromClass(Class) {
  var defaultProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (Class.hasOwnProperty('defaultProperties')) {
    combine(defaultProperties, Class.defaultProperties);
  }

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    defaultPropertiesFromClass(superClass, defaultProperties);
  }

  return defaultProperties;
}

function ignoredPropertiesFromClass(Class) {
  var ignoredProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Class.hasOwnProperty('ignoredProperties')) {
    augment(ignoredProperties, Class.ignoredProperties, function (ignoredProperty) {
      return !ignoredProperties.includes(ignoredProperty);
    });
  }

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}

},{"./constants":28,"./miscellaneous/bounds":41,"./miscellaneous/offset":42,"./mixins/click":43,"./mixins/event":44,"./mixins/jsx":45,"./mixins/key":46,"./mixins/mouse":47,"./mixins/resize":48,"./mixins/scroll":49,"./mixins/state":50,"./utilities/array":53,"./utilities/dom":54,"./utilities/name":56,"./utilities/object":57}]