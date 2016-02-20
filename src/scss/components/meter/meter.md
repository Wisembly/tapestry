# Meters

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
      <td class="Table-cell Table-cell--important u-tal">$meter-height</td>
      <td class="Table-cell">height</td>
      <td class="Table-cell">meter height<br><code>$lh--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-radius</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">meter border-radius<br><code>$meter-height / 2</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-base-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">meter background-color<br><code>$porcelain</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-bar-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">meter bar background-color<br><code>$curious-blue</code></td>
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
