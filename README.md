# Custom Grammars

[Occam](https://github.com/jecs-imperial/occam)'s custom grammars.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Building](#building)
- [Contact](#contact)

## Introduction

In Occam parlance, a grammar is a combination of a series of regular expression entries for a lexer and BNF for a parser. A custom grammar on the other hand is a single regular expression plus four BNF snippets for terms, expressions, statements and metastatements.

Custom grammars augment the Florence grammar, specifically its lexer regular expression [entries](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/entries.js) and parser [BNF](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/bnf.js), to allow for custom terms, expressions, statements and metastatements. This package exports the means to combine custom grammars as well as supplying factory methods to create Florence lexers and parsers that make use of them.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-custom-grammars

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-custom-grammars.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Usage

```js
const customGrammars = require('occam-custom-grammars');

const { CustomGrammar, CombinedCustomGrammars } = customGrammars;

const name = 'User defined',
      customGrammar = CustomGrammar.fromName(name),
      ruleName = 'term',
      bnf = `

        ...
      `,
      lexicalPattern = '->|=>';

customGrammar.setBNF(ruleName, bnf);

customGrammar.setLexicalPattern(lexicalPattern);

...

const customGrammars = [
        customGrammar
      ],
      combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);

...
```
Have a look at the source of the `CustomGrammar` class for a full list of methods.
```
const { lexers, parsers } = customGrammars,
      { florenceLexerFromCombinedCustomGrammars } = lexers,
      { florenceParserFromCombinedCustomGrammars } = parsers;

const combinedCustomGrammars = ...
      florenceLexer = florenceLexerFromCombinedCustomGrammars(combinedCustomGrammars),
      florenceParser = florenceParserFromCombinedCustomGrammars(combinedCustomGrammars);

...
```

## Example

There is one example to enable you to alter a single user defined custom grammar, see it combined with the default Florence custom grammar and then merged with the Florence grammar. To view it, open the `example.html` file in the root of the repository.

The default Florence custom grammar has an empty regular expression entry, no additional tokens are defined effectively, but it does have default BNF snippets. These can be viewed by choosing the 'Default' option from the custom grammar select field.

To set your own custom regular expression for defining additional tokens and your own BNF for defining additional terms, expressions, statements  and metastatements, choose the 'User defined' option. If you type `=>` into the lexical pattern input field, for example, you will see it appearing as part of the `custom` regular expression entry in the Florence lexical entries textarea. Note that the custom entry comes first, taking precedence over the default entries.

Now select the `expression` option from the rule name select field and add the following to the BNF textarea:

```
  expression ::= expression operator expression

               | "(" expression ")"

               ;

  operator   ::= "+" | "-" | "/" | "*" ;
```
You will see that the Florence BNF textarea has been augmented with the rules you have just added.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
