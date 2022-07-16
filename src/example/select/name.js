"use strict";

import Select from "../select";

import { DEFAULT_CUSTOM_GRAMMAR_NAME, USER_DEFINED_CUSTOM_GRAMMAR_NAME_1, USER_DEFINED_CUSTOM_GRAMMAR_NAME_2 } from "../grammarNames";

export default class NameSelect extends Select {
  getName() {
    const value = this.getValue(),
          name = value; ///

    return name;
  }

  childElements() {
    const defaultName = DEFAULT_CUSTOM_GRAMMAR_NAME,
          userDefinedName1 = USER_DEFINED_CUSTOM_GRAMMAR_NAME_1,
          userDefinedName2 = USER_DEFINED_CUSTOM_GRAMMAR_NAME_2,
          defaultValue = defaultName, ///
          userDefinedValue1 = userDefinedName1, ///
          userDefinedValue2 = userDefinedName2; ///

    return ([

      <option value={defaultValue} selected >
        {defaultName}
      </option>,
      <option value={userDefinedValue1}>
        {userDefinedName1}
      </option>,
      <option value={userDefinedValue2}>
        {userDefinedName2}
      </option>

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
