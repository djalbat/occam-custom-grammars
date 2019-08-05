'use strict';

const easy = require('easy'),
      parsers = require('occam-parsers'), ///
      easyLayout = require('easy-layout');

const constants = require('../constants'),
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

const { Element } = easy,
      { SizeableElement } = easyLayout,
      { rulesAsString, rulesAsEntries } = rulesUtilities,
      { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities,
      { DEFAULT_CUSTOM_GRAMMAR_NAME, USER_DEFINED_CUSTOM_GRAMMAR_NAME } = constants,
      { termDefaultCustomGrammarBNF, statementDefaultCustomGrammarBNF, expressionDefaultCustomGrammarBNF, metastatementDefaultCustomGrammarBNF  } = parsers;

const name = USER_DEFINED_CUSTOM_GRAMMAR_NAME,  ///
      userDefinedCustomGrammar = CustomGrammar.fromName(name),
      customGrammars = [
        userDefinedCustomGrammar
      ];

class View extends Element {
  keyUpHandler() {
    try {
      const customGrammarName = this.getCustomGrammarName();

      if (customGrammarName === USER_DEFINED_CUSTOM_GRAMMAR_NAME) {
        const bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();

        userDefinedCustomGrammar.setBNF(ruleName, bnf);

        userDefinedCustomGrammar.setLexicalPattern(lexicalPattern);
      }

      const combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceLexerRules = florenceLexer.getRules(),
            florenceParserRules = florenceParser.getRules(),
            florenceLexerEntries = rulesAsEntries(florenceLexerRules),
            florenceParserRulesString = rulesAsString(florenceParserRules),
            florenceLexicalEntries = florenceLexerEntries,  ///
            florenceBNF = florenceParserRulesString;  ///

      this.setFlorenceBNF(florenceBNF);

      this.setFlorenceLexicalEntries(florenceLexicalEntries);

      this.hideBNFError();

      this.hideLexicalPatternError();
    } catch (error) {
      const { message } = error;

      message.includes('regular expression') ? ///
        this.showLexicalPatternError() :
          this.showBNFError();
    }
  }

  changeHandler() {
    const ruleName = this.getRuleName(),
          customGrammarName = this.getCustomGrammarName();

    let bnf,
        readOnly,
        lexicalPattern;

    if (customGrammarName === DEFAULT_CUSTOM_GRAMMAR_NAME) {
      switch (ruleName) {
        case 'term' : bnf = termDefaultCustomGrammarBNF; break;
        case 'statement' : bnf = statementDefaultCustomGrammarBNF; break;
        case 'expression' : bnf = expressionDefaultCustomGrammarBNF; break;
        case 'metastatement' : bnf = metastatementDefaultCustomGrammarBNF; break;
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

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return (

      <div className="columns">
        <SizeableElement>
          <h2>
            Custom grammar
          </h2>
          <CustomGrammarNameSelect onChange={changeHandler} />
          <h2>
            Rule name
          </h2>
          <RuleNameSelect onChange={changeHandler} />
          <h2>
            Lexical pattern
          </h2>
          <LexicalPatternInput onKeyUp={keyUpHandler} />
          <h2>
            BNF
          </h2>
          <BNFTextarea onKeyUp={keyUpHandler} />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>
            Florence lexical entries
          </h2>
          <FlorenceLexicalEntriesTextarea />
          <h2>
            Florence BNF
          </h2>
          <FlorenceBNFTextarea />
        </div>
      </div>

    );
  }

  initialise() {
    this.assignContext();

    this.changeHandler(); ///

    this.keyUpHandler();  ///
  }

  static fromProperties(properties) {
    const view = Element.fromProperties(View, properties);

    view.initialise();

    return view
  }
}

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
