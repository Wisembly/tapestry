# CSS guidelines

## Goals
* Maintainable CSS components
* Scalable code

## Naming
* BEM
* PascaleCase for component name
* cascaleCase for component childs
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
 * Nest childs
```css
.Component {
}

  .Component-child {
  }
  .Component-otherChild {
  }
```
 * Use `is` and `has` as modifier when needed
 * Group modifiers
 * Scope parent modifier for childs
```css
.ParentComponent {
}
.ParentComponent--modifier {
}
.ParentComponent.is-modified {
}
.ParentComponent.has-modifier {
}

  .ParentComponent-child {
  }
  .ParentComponent-child--modifier {
  }
  .ParentComponent-child--is-modified {
  }
  .ParentComponent--modifier {
    .ParentComponent-child {
    }
  }
```
