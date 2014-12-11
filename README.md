# CSS guidelines

## Goals
* Maintainable OOCSS components
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

## Comments
 * Use "big" comment for block declaration.
 * Use "small" comment for precision
```css
/*
 * This is a comment
 */
 
 // This is a small comment
```

## Component file structure
 * Use 3 empty lines between block types
```
/*
 * ComponentName
 * 
 * Component variables
 * Component placeholders
 * Component mixins
 *
 * ComponentChild
 * ComponentOtherChild
 */
```
Example
```css
/*
 * Modal
 * 
 * Modal variables
 * Modal mixins
 *
 * Modal-header
 * Modal-body
 * Modal-header
 */
 
 
 
$ModalOverlayBg: rgba(0,0,0, .7);
 
 
 
@mixin Modal--splash {
  color: #fff;
  background-color: transparent;
  padding: 0;
}



.Modal {
 ...
}
.Modal.has-overlay {
  ...
}

  .Modal-header {
    ...
  }
  
  .Modal-body {
    ...
  }
  
  .Modal-footer {
    ...
  }
```

## Else
 * Never use IDs
 * No magic number
 * Only use `!important` on utility classes
 * Max nesting level: 3
 * Formatte rgba stuff
```css
.Component {
  color: rgba(255,255,255, .8);
  background-color: rgba(0,0,0, .5);
}
```
