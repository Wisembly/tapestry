# CSS guidelines

## Visual tests

### Installation
```
 npm install
 sudo npm install -g phantomjs
 sudo npm install -g casperjs
```

### Pre-commit

#### Installation

```
cp pre-commit.sh .git/hooks/pre-commit && chmod 777 .git/hooks/pre-commit
```

#### Bypass
To bypass the pre-commit, just add `-n` option.
```
git ci -n
git ci -nm "My commit message"
```

### Gulp scripts

```js
  // build references
  gulp vtests:ref

  // compare references with actual HEAD
  gulp vtests:compare
```


## Goals
* Maintainable OOCSS components
* Scalable code

## Naming
* BEM - Block-element--modifier
* PascaleCase for component name
* camelCase for component childs
* Lowercase for modifiers
```html
<div class="Component Component--modifier">
  <div class="Component-child"></div>
  <div class="Component-otherChild"></div>
</div>
```

## Spacing and indentation
 * Two spaces indent
 * Space after `:` property declaration
 * Space before `{` rule declaration
 * Closing braces on a new line

```css
.Component {
  display: inline-block;
}
```

 * Use `is` and `has` as modifier when needed, especialy if you want to share CSS with JS. Those prefix-classes will always be found in both JS AND CSS files.


## Declaration order
See https://github.com/Wisembly/tapestry/blob/master/scss-lint.yml

## Else
 * Never use IDs
 * No magic number (In CSS: https://css-tricks.com/magic-numbers-in-css/)
 * Only use `!important` on utility classes
 * Max nesting level: 3
