'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers'), ///
      parsers = require('occam-parsers'), ///
      easyLayout = require('easy-layout');

const constants = require('../constants'),
      CustomGrammar = require('../customGrammar'),
      ErrorParagraph = require('./paragraph/error'),
      rulesUtilities = require('../utilities/rules'),
      RuleNameSelect = require('./select/ruleName'),
      lexersUtilities = require('../utilities/lexers'),
      ContentTextarea = require('./textarea/content'),
      parsersUtilities = require('../utilities/parsers'),
      ParseTreeTextarea = require('./textarea/parseTree'),
      LexicalPatternInput = require('./input/lexicalPattern'),
      AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
      MainVerticalSplitter = require('./verticalSplitter/main'),
      CombinedCustomGrammar = require('../combinedCustomGrammar'),
      CustomGrammarNameSelect = require('./select/customGrammarName');

const { Element } = easy,
      { SizeableElement } = easyLayout,
      { defaultLexicalPattern } = lexers,
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
    return

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
    return

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

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return (

      <div className="columns">
        <SizeableElement>
          <h2>Custom grammar</h2>
          <CustomGrammarNameSelect onChange={changeHandler} />
          <h2>Rule name</h2>
          <RuleNameSelect onChange={changeHandler} />
          <h2>Lexical pattern</h2>
          <LexicalPatternInput onKeyUp={keyUpHandler} />
          <h2>Adjusted BNF</h2>
          <AdjustedBNFTextarea />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>Parse tree</h2>
          <ParseTreeTextarea />
          <h2>Content</h2>
          <ContentTextarea onKeyUp={keyUpHandler} />
          <ErrorParagraph />
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
