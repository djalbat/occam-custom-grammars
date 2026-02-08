"use strict";

import CustomGrammar from "../customGrammar";
import CombinedCustomGrammar from "../customGrammar/combined";

export function combinedCustomGrammarFromJSON(json) {
  const customGrammarsJSON = json,  ///
        customGrammars = customGrammarsJSON.map((customGrammarJSON) => {
          const json = customGrammarJSON, ///
                customGrammar = CustomGrammar.fromJSON(json);

          return customGrammar;
        });

  customGrammars.reverse(); //

  const combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);

  return combinedCustomGrammar;
}

export function combinedCustomGrammarFromNothing() {
  const customGrammars = [],
        combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);

  return combinedCustomGrammar;
}

export function combinedCustomGrammarFromCustomGrammars(customGrammars) {
  customGrammars = [  ///
    ...customGrammars
  ];

  customGrammars.reverse(); ///

  const combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);

  return combinedCustomGrammar;
}

export default {
  combinedCustomGrammarFromJSON,
  combinedCustomGrammarFromNothing,
  combinedCustomGrammarFromCustomGrammars
};
