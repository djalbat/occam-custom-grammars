"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { rulesUtilities } from "occam-parsers";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";
import { lexersUtilities, parsersUtilities, defaultCustomGrammar, CombinedCustomGrammar } from "../index";  ///

import SubHeading from "./subHeading";
import NameSelect from "./select/name";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import PatternInput from "./input/pattern";
import RuleNameSelect from "./select/ruleName";
import ContentTextarea from "./textarea/content";
import PatternNameSelect from "./select/patternName";
import ParseTreeTextarea from "./textarea/parseTree";
import StartRuleNameInput from "./input/startRuleName";
import FlorenceBNFTextarea from "./textarea/florenceBNF";
import userDefinedCustomGrammar1 from "./userDefinedCustomGrammar1";
import userDefinedCustomGrammar2 from "./userDefinedCustomGrammar2";

import { rulesFromParser } from "./utilities/rules";
import { DEFAULT_CUSTOM_GRAMMAR_NAME, USER_DEFINED_CUSTOM_GRAMMAR_NAME_1, USER_DEFINED_CUSTOM_GRAMMAR_NAME_2 } from "./grammarNames";

const { rulesAsString } = rulesUtilities,
      { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    try {
      const name = this.getName(),
            bnf = this.getBNF(),
            pattern = this.getPattern(),
            ruleName = this.getRuleName(),
            patternName = this.getPatternName();

      if (name === USER_DEFINED_CUSTOM_GRAMMAR_NAME_1) {
        userDefinedCustomGrammar1.setBNF(ruleName, bnf);
        userDefinedCustomGrammar1.setPattern(patternName, pattern);
      }

      if (name === USER_DEFINED_CUSTOM_GRAMMAR_NAME_2) {
        userDefinedCustomGrammar2.setBNF(ruleName, bnf);
        userDefinedCustomGrammar2.setPattern(patternName, pattern);
      }

      const customGrammars = [
              userDefinedCustomGrammar1,
              userDefinedCustomGrammar2
            ],
            combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
            florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
            florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

      const ruleMap = florenceParser.getRuleMap(),
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

  changeHandler = (event, element) => {
    let customGrammar;

    const name = this.getName(),
          ruleName = this.getRuleName(),
          patternName = this.getPatternName();

    switch (name) {
      case DEFAULT_CUSTOM_GRAMMAR_NAME:
        customGrammar = defaultCustomGrammar;

        break;

      case USER_DEFINED_CUSTOM_GRAMMAR_NAME_1:
        customGrammar = userDefinedCustomGrammar1;

        break;

      case USER_DEFINED_CUSTOM_GRAMMAR_NAME_2:
        customGrammar = userDefinedCustomGrammar2;

        break;
    }

    const bnf = customGrammar.getBNF(ruleName),
          pattern = customGrammar.getPattern(patternName);

    this.setBNF(bnf);

    this.setPattern(pattern);
  }

  childElements() {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Custom grammar
            </SubHeading>
            <NameSelect onChange={changeHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <RuleNameSelect onChange={changeHandler} />
            <BNFTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Pattern
            </SubHeading>
            <PatternNameSelect onChange={changeHandler} />
            <PatternInput onKeyUp={keyUpHandler} />
            <SubHeading>
              Start rule
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

    const { initialContent, initialStartRuleName } = this.constructor;

    const content = initialContent, ///
          startRuleName = initialStartRuleName; ///

    this.setContent(content);

    this.setStartRuleName(startRuleName);

    this.changeHandler();

    this.keyUpHandler();
  }

  static initialStartRuleName = "";

  static initialContent = `Rule (blah)
  Conclusion
    u is omitted from P
  
Axiom (blah)
  x = x is contained in x
`;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
