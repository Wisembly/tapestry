# Box

A box is used to create a grouping of related content.
By default, boxes don't have paddings, you need to structure with `Box-header` and/or `Box-content`

## Variables

```esc
<table class="Table">
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal" width="35%">$box-space-between</td>
      <td class="Table-cell Table-cell--important">$mg--m</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$box-title-fz</td>
      <td class="Table-cell Table-cell--important">$fz--xl</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$box-title-lh</td>
      <td class="Table-cell Table-cell--important">$base-lh</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$box-title-fw</td>
      <td class="Table-cell Table-cell--important">$fw--semi-bold</td>
    </tr>
  </tbody>
</table>
```

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

## Type

### Raw
Remove box borders.

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
