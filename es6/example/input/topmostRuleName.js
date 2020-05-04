"use strict";

import Input from "../input";

export default class TopmostRuleNameInput extends Input {
  getTopmostRuleName() {
    const value = this.getValue(),
          topmostRuleName = value; ///

    return topmostRuleName;
  }

  parentContext() {
    const getTopmostRuleName = this.getTopmostRuleName.bind(this);

    return ({
      getTopmostRuleName
    });
  }

  static defaultProperties = {
    className: "topmost-rule-name",
    spellCheck: "false"
  };
}
