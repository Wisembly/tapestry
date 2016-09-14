# Tapestry [![Build Status](https://travis-ci.org/Wisembly/tapestry.svg?branch=master)](https://travis-ci.org/Wisembly/tapestry) [![npm version](https://badge.fury.io/js/tapestry-css.svg)](https://badge.fury.io/js/tapestry-css) [![Bower version](https://badge.fury.io/bo/tapestry.svg)](https://badge.fury.io/bo/tapestry)

## CSS guidelines

### Goals
* Maintainable OOCSS components
* Scalable code

### Naming

* BEM - Block-element--modifier
* PascaleCase for component name
* camelCase for component childs
* Lowercase for modifiers
 * Use `is-*` and `has-*` modifiers when needed

```html
<div class="Component Component--modifier is-state">
  <div class="Component-child"></div>
  <div class="Component-otherChild"></div>
</div>
```

### Spacing and indentation

* Two spaces indent
* Space after `:` property declaration
* Space before `{` rule declaration
* Closing braces on a new line

```css
.Component {
  display: inline-block;
}
```

### Else

 * Never use IDs
 * No magic number
 * Only use `!important` on utility classes
 * Max nesting level: 3



## Development

### Installation

```
npm install
npm install -g phantomjs
npm install -g casperjs
```

### Run

```js
gulp // starts server and watch files, available on localhost:3000
gulp icons // builds icons
```

### Pre-commit and pre-push

#### Installation

Pre-commit hook ensures code has been linted.

```bash
npm run pre-commit
```

#### Bypass

To bypass the pre-commit, just add `-n` option.

```
git ci -n
git ci -nm "My commit message"
```


### Tests

[Tests are disabled at the moment.](https://github.com/Wisembly/tapestry/issues/313)
~~Tests are run with Travis and have to be updated before branch merges. They can be run locally with these following commands.~~

```js
npm run lint // linter
npm run vt:refs // visual tests: builds references
npm run vt:compare // visual tests: compares references with actual HEAD
```
