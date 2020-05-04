"use strict";

import Textarea from "../textarea";

export default class CombinedBNFTextarea extends Textarea {
  getCombinedBNF() {
    const value = this.getValue(),
          combinedBNF = value; ///

    return combinedBNF;
  }

  clearCombinedBNF() {
    const value = "";

    this.setValue(value);
  }

  parentContext() {
    const getCombinedBNF = this.getCombinedBNF.bind(this),
          clearCombinedBNF = this.clearCombinedBNF.bind(this);

    return ({
      getCombinedBNF,
      clearCombinedBNF
    });
  }

  static defaultProperties = {
    className: "combined-bnf",
    spellCheck: "false"
  };
}
