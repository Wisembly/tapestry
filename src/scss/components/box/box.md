# Box

A box is used to create a grouping of related content.
Boxes do not have paddings by default. They are added while structuring it with .Box-header and/or .Box-content.

## Variables

| Variable                     | property      | value            | desc.                   |
|------------------------------|---------------|------------------|-------------------------|
| ** $box-space-between **     | margin        | `$mg--m`         | space between two boxes |
| ** $box-title-fz **          | font-size     | `$fz--xl`        | box title font-size     |
| ** $box-title-lh **          | line-height   | `$fz--xl`        | box title line-height   |
| ** $box-title-fw **          | font-weight   | `$fw--semi-bold` | box title font-weight   |



## Examples

```html
<div class="Box">
  <div class="Box-header">
    <h4 class="Box-title">Box title</h4>
  </div>
  <p class="Box-content">Box content</p>
</div>

<div class="Box">
  <div class="Box-content">Box content</div>
</div>
```



## Horizontal Boxes

```html
<div class="Boxes">
  <div class="Box">
    <div class="Box-header">
      <h4 class="Box-title">Title</h4>
    </div>
    <p class="Box-content">Box content</p>
  </div>
  <div class="Box">
    <div class="Box-header">
      <h4 class="Box-title">Title</h4>
    </div>
    <p class="Box-content">Box content</p>
  </div>
  <div class="Box">
    <div class="Box-header">
      <h4 class="Box-title">Title</h4>
    </div>
    <p class="Box-content">Bigger box content. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
  </div>
</div>
```



## Raw
Use .Box--raw to remove box borders.

```
<div class="Box Box--raw">
  <div class="Box-content">
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
    Donec eu libero sit amet quam egestas semper.
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
  </div>
</div>
```
