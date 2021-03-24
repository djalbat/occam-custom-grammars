"use strict";

import Input from "../input";

export default class StartRuleNameInput extends Input {
  getStartRuleName() {
    const value = this.getValue(),
          startRuleName = value; ///

    return startRuleName;
  }

  parentContext() {
    const getStartRuleName = this.getStartRuleName.bind(this);

    return ({
      getStartRuleName
    });
  }

  static defaultProperties = {
    className: "start-rule-name",
    spellCheck: "false"
  };
}
