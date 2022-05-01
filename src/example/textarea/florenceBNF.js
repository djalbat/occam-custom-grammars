"use strict";

import withStyle from "easy-with-style";  ///

import Textarea from "../textarea";

import { EMPTY_STRING } from "../../constants";

class FlorenceBNFTextarea extends Textarea {
  getFlorenceBNF() {
    const value = this.getValue(),
          florenceBNF = value; ///

    return florenceBNF;
  }

  setFlorenceBNF(florenceBNF) {
    const value = florenceBNF;  ///

    this.setValue(value);
  }

  clearFlorenceBNF() {
    const value = EMPTY_STRING;

    this.setValue(value);
  }

  parentContext() {
    const getFlorenceBNF = this.getFlorenceBNF.bind(this),
          setFlorenceBNF = this.setFlorenceBNF.bind(this),
          clearFlorenceBNF = this.clearFlorenceBNF.bind(this);

    return ({
      getFlorenceBNF,
      setFlorenceBNF,
      clearFlorenceBNF
    });
  }

  static defaultProperties = {
    className: "florence-bnf",
    spellCheck: "false"
  };
}

export default withStyle(FlorenceBNFTextarea)`

  height: 48rem;
  
`;
