# Meters

## Variables

```esc
<table class="Table">
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal" width="35%">$meter-height</td>
      <td class="Table-cell Table-cell--important">$lh--s</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-radius</td>
      <td class="Table-cell Table-cell--important">$base-radius * 2</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-base-bg</td>
      <td class="Table-cell Table-cell--important">$porcelain</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-bar-bg</td>
      <td class="Table-cell Table-cell--important">$curious-blue</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-bar-bg--75</td>
      <td class="Table-cell Table-cell--important">$saffron</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-bar-bg--99</td>
      <td class="Table-cell Table-cell--important">$mandy</td>
    </tr>
  </tbody>
</table>
```



## Example

```html
<div class="Meter">
  <div class="Meter-bar" style="width:50%;"></div>
</div>
```

## Colors

```html
<div class="Meter u-mgb--m" data-threshold="75">
  <div class="Meter-bar" style="width:75%;"></div>
</div>

<div class="Meter" data-threshold="99">
  <div class="Meter-bar" style="width:99%;"></div>
</div>
```
