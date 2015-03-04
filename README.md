# CSS guidelines

## Goals
* Maintainable OOCSS components
* Scalable code

## Naming
* BEM
* PascaleCase for component name
* camelCase for component childs
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

 * Use `is` and `has` as modifier when needed


## Declaration order
See https://github.com/Wisembly/tapestry/blob/master/scss-lint.yml

## Else
 * Never use IDs
 * No magic number
 * Only use `!important` on utility classes
 * Max nesting level: 3

