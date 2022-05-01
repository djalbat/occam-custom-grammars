"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";
import { defaultCustomGrammar, CombinedCustomGrammar, lexersUtilities, parsersUtilities } from "../index";  ///

import SubHeading from "./subHeading";
import NameSelect from "./select/name";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import RuleNameSelect from "./select/ruleName";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import StartRuleNameInput from "./input/startRuleName";
import LexicalPatternInput from "./input/lexicalPattern";
import FlorenceBNFTextarea from "./textarea/florenceBNF";
import userDefinedCustomGrammar1 from "./userDefinedCustomGrammar1";
import userDefinedCustomGrammar2 from "./userDefinedCustomGrammar2";

import { rulesAsString, rulesFromParser } from "../utilities/rules";
import { DEFAULT_CUSTOM_GRAMMAR_NAME, USER_DEFINED_CUSTOM_GRAMMAR_NAME_1, USER_DEFINED_CUSTOM_GRAMMAR_NAME_2 } from "../grammarNames";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

class View extends Element {
  keyUpHandler() {
    try {
      const name = this.getName();

      if (name === USER_DEFINED_CUSTOM_GRAMMAR_NAME_1) {
        const bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();

        userDefinedCustomGrammar1.setBNF(ruleName, bnf);

        userDefinedCustomGrammar1.setLexicalPattern(lexicalPattern);
      }

      if (name === USER_DEFINED_CUSTOM_GRAMMAR_NAME_2) {
        const bnf = this.getBNF(),
              ruleName = this.getRuleName(),
              lexicalPattern = this.getLexicalPattern();

        userDefinedCustomGrammar2.setBNF(ruleName, bnf);

        userDefinedCustomGrammar2.setLexicalPattern(lexicalPattern);
      }

      const customGrammars = [
              userDefinedCustomGrammar1,
              userDefinedCustomGrammar2
            ],
            combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
            ruleMap = florenceParser.getRuleMap(),
            startRuleName = this.getStartRuleName(),
            startRule = ruleMap[startRuleName], ///
            content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens, startRule);

      let parseTree = null;

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      this.setParseTree(parseTree);

      const florenceRules = rulesFromParser(florenceParser),
            multiLine = true,
            rulesString = rulesAsString(florenceRules, multiLine),
            florenceBNF = rulesString;  ///

      this.setFlorenceBNF(florenceBNF);
    } catch (error) {
      console.log(error);

      this.clearParseTree();

      this.clearFlorenceBNF();
    }
  }

  changeHandler() {
    let readOnly, customGrammar;

    const name = this.getName(),
          ruleName = this.getRuleName();

    switch (name) {
      case DEFAULT_CUSTOM_GRAMMAR_NAME:
        readOnly = true;
        customGrammar = defaultCustomGrammar;

        break;

      case USER_DEFINED_CUSTOM_GRAMMAR_NAME_1:
        readOnly = false;
        customGrammar = userDefinedCustomGrammar1;

        break;

      case USER_DEFINED_CUSTOM_GRAMMAR_NAME_2:
        readOnly = false;
        customGrammar = userDefinedCustomGrammar2;

        break;
    }

    const bnf = customGrammar.getBNF(ruleName),
          lexicalPattern = customGrammar.getLexicalPattern();

    this.setBNF(bnf);

    this.setBNFReadOnly(readOnly);

    this.setLexicalPattern(lexicalPattern);

    this.setLexicalPatternReadOnly(readOnly);
  }

  childElements() {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Name
            </SubHeading>
            <NameSelect onChange={changeHandler} />
            <SubHeading>
              Rule name
            </SubHeading>
            <RuleNameSelect onChange={changeHandler} />
            <SubHeading>
              Lexical pattern
            </SubHeading>
            <LexicalPatternInput onKeyUp={keyUpHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <BNFTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Start rule name
            </SubHeading>
            <StartRuleNameInput onKeyUp={keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea />
            <SubHeading>
              Florence BNF
            </SubHeading>
            <FlorenceBNFTextarea />
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise() {
    this.assignContext();

    const { initialContent } = this.constructor;

    const content = initialContent; ///

    this.setContent(content);

    this.changeHandler();

    this.keyUpHandler();
  }

  static initialContent = `Rule (Explosion)
  Conclusion
    ρ |- R::S
  
`;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;