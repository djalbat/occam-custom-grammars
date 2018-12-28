# Custom Grammars

[Occam](https://github.com/jecs-imperial/occam)'s custom grammars.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Building](#building)
- [Contact](#contact)

## Introduction

In Occam parlance, a grammar is a combination of a series of regular expressions for a lexer and BNF for a parser. A custom grammar is a single regular expression together with four BNF snippets for terms, expressions, statements and metastatements. Custom grammars augment the Florence grammar, allowing for custom terms, expressions, statements and metastatements to be defined. This package exports a class that encapsulates custom grammars plus the means to combine them. It also supplies factory methods to create Florence lexers and parsers that make use of them. Further details, including an outline of how custom grammars are combined and merged with the Florence grammar, are given in the description of the example below.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-custom-grammars

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-custom-grammars.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Example

There is one example to enable you to alter and single custom grammar and see it combined with the default Florence grammars and merged with the Florence grammar. To view it, open the `example.html` file in the root of the repository.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
