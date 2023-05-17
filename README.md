# Occam Custom Grammars

[Occam](https://github.com/djalbat/occam)'s custom grammars.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Building](#building)
- [Contact](#contact)

## Introduction

In Occam parlance, a grammar is a combination of lexical entries for a lexer and BNF for a parser. On the other hand, a custom grammar is a single lexical entry together with four BNF snippets for terms, expressions, statements and metastatements.

Custom grammars augment the Florence grammar, specifically its [lexical entries](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/entries.js) and [BNF](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/bnf.js), to allow for custom terms, expressions, statements and metastatements. This package exports the means to combine custom grammars as well as supplying factory functions to create Florence lexers and parsers that make use of them.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-custom-grammars

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-custom-grammars.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

Custom grammars can be created by calling the `fromName(...)` method of the `CustomGrammar` class and then calling the requisite setters for other properties besides its name:

```
import { CustomGrammar } from "occam-custom-grammars";

const name = "User defined",
      customGrammar = CustomGrammar.fromName(name),
      ruleName = "term",
      bnf = `

        ...
      `,
      lexicalPattern = "->|=>";

customGrammar.setBNF(ruleName, bnf);

customGrammar.setLexicalPattern(lexicalPattern);
...
```
Arrays of Custom grammars can then be combined:
```
import { CombinedCustomGrammar } from "occam-custom-grammars";

const customGrammars = [

        ...

      ],
      combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);
```
Once combined, custom grammars can be passed to utility functions in order to create lexers and parsers:
```
const { lexersUtilities, parsersUtilities } = customGrammars,
      { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = ...
      florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
```

Custom grammars should be provided in topological order, with dependencies coming before dependents.

## Example

The example allows you to define a custom grammar and see the resultant parse tree for any content you provide. To view it, open the `index.html` file in the root of the repository.

To alter the custom grammar, change the option of the 'Name' select field to 'User defined'. This makes both the 'Lexical pattern' input field and 'BNF' textarea editable. Changing the 'Rule name' select field allows you to alter the BNF for terms, expressions, statements and metastatements. Note that there is already a lexical pattern and some BNF defined for illustrative purposes. Try the following content to see them in action, making sure to include a trailing carriage return:

```
Axiom (InsertOperation)
  Suppose
    n <= |s|
  Hence
    insert(n,t)(s) = s[...n] + t + s[n+m...]
```
For the curious, the combined BNF is shown below the parse tree.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888 and will reload automatically when changes are made.

## Contact

* james.smith@djalbat.com

