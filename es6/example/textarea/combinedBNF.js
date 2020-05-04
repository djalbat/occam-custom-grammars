"use strict";

import Textarea from "../textarea";

export default class CombinedBNFTextarea extends Textarea {
  getCombinedBNF() {
    const value = this.getValue(),
          combinedBNF = value; ///

    return combinedBNF;
  }

  setCombinedBNF(combinedBNF) {
    const value = combinedBNF;  ///

    this.setValue(value);
  }

  clearCombinedBNF() {
    const value = "";

    this.setValue(value);
  }

  parentContext() {
    const getCombinedBNF = this.getCombinedBNF.bind(this),
          setCombinedBNF = this.setCombinedBNF.bind(this),
          clearCombinedBNF = this.clearCombinedBNF.bind(this);

    return ({
      getCombinedBNF,
      setCombinedBNF,
      clearCombinedBNF
    });
  }

  static defaultProperties = {
    className: "combined-bnf",
    spellCheck: "false"
  };
}
