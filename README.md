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

Custom grammars augment the Florence grammar, specifically its lexer regular expression [entries](https://raw.githubusercontent.com/occam-proof-assistant/Lexers/master/es6/florence/entries.js) and parser [BNF](https://raw.githubusercontent.com/occam-proof-assistant/Parsers/master/es6/florence/bnf.js), to allow for custom terms, expressions, statements and metastatements. This package exports the means to combine custom grammars as well as supplying factory functions to create Florence lexers and parsers that make use of them.

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

const { CustomGrammar, CombinedCustomGrammar } = customGrammars;

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
Once combined, custom grammars can be passed to factory functions to create lexers and parsers:
```
const { lexers, parsers } = customGrammars,
      { florenceLexerFromCombinedCustomGrammar } = lexers,
      { florenceParserFromCombinedCustomGrammar } = parsers;

const combinedCustomGrammar = ...
      florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
      florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

...
```

## Example

There is one example to enable you to alter a single user defined custom grammar, see it combined with the default Florence custom grammar and then merged with the Florence grammar. To view it, open the `example.html` file in the root of the repository.

The default Florence custom grammar has default [lexical pattern](https://raw.githubusercontent.com/jecs-imperial/occam-lexers/master/es6/florence/defaultLexicalPattern.js) as well as default BNF snippets for [terms](https://raw.githubusercontent.com/jecs-imperial/occam-parsers/master/es6/florence/defaultBNF/term.js), [expressions](https://raw.githubusercontent.com/jecs-imperial/occam-parsers/master/es6/florence/defaultBNF/expression.js), [statements](https://raw.githubusercontent.com/jecs-imperial/occam-parsers/master/es6/florence/defaultBNF/statement.js) and [metastatements](https://raw.githubusercontent.com/jecs-imperial/occam-parsers/master/es6/florence/defaultBNF/metastatement.js). These can be viewed at any time by choosing the 'Default' option from the custom grammar select field and the appropriate option from the rule name select field underneath.

To set your own lexical pattern and BNF, choose the 'User defined' option. If you type `=>` into the lexical pattern input field, for example, you will see it appearing as part of the `custom` regular expression entry in the Florence lexical entries textarea. Note that the custom entry comes first, taking precedence over the default entries.

Now select the `expression` option from the rule name select field and add the following to the BNF textarea:

```
  expression ::= expression operator expression

               | "(" expression ")"

               ;

  operator   ::= "+" | "-" | "/" | "*" ;
```
You will see that the Florence BNF textarea has been augmented with the rules you have just added together with the default rules. Note that if the rule is left recursive, as in the example above, the left recursion will have been removed.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
