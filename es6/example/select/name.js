"use strict";

import Select from "../select";

import { DEFAULT_CUSTOM_GRAMMAR_NAME, USER_DEFINED_CUSTOM_GRAMMAR_NAME } from "../../constants";

export default class NameSelect extends Select {
  getName() {
    const value = this.getValue(),
          name = value; ///

    return name;
  }

  childElements(properties) {
    const defaultName = DEFAULT_CUSTOM_GRAMMAR_NAME,  ///
          defaultValue = defaultName, ///
          userDefinedName = USER_DEFINED_CUSTOM_GRAMMAR_NAME, ///
          userDefinedValue = userDefinedName; ///

    return ([

      <option value={defaultValue} selected >
        {defaultName}
      </option>,
      <option value={userDefinedValue}>
        {userDefinedName}
      </option>,

    ]);
  }

  parentContext() {
    const getName = this.getName.bind(this); ///

    return ({
      getName
    });
  }

  static defaultProperties = {
    className: "name",
    spellCheck: "false"
  }
}
