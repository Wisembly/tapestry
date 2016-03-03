# Box

A box is used to create a grouping of related content.
Boxes do not have paddings by default. They are added while structuring it with .Box-header and/or .Box-content.

## Variables

```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal" style="width: 25%;">Name</th>
    <th class="Table-cell Table-cell--header" style="width: 10%;">Type</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$box-space-between</td>
      <td class="Table-cell">margin</td>
      <td class="Table-cell">space between two boxes<br><code>$mg--m</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$box-title-fz</td>
      <td class="Table-cell">font-size</td>
      <td class="Table-cell">box title font-size<br><code>$fz--xl</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$box-title-lh</td>
      <td class="Table-cell">line-height</td>
      <td class="Table-cell">box title line-height<br><code>$fz--xl</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$box-title-fw</td>
      <td class="Table-cell">font-weight</td>
      <td class="Table-cell">box title font-weight<br><code>$fw--semi-bold</code></td>
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
