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

## Declaration order
```css
declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```

## Else
 * Never use IDs
 * No magic number
 * Only use `!important` on utility classes
 * Max nesting level: 3
 * Format rgba stuff
```css
.Component {
  color: rgba(255,255,255, .8);
  background-color: rgba(0,0,0, .5);
}
```
