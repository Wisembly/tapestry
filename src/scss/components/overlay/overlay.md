# Overlay

To prevent background scrolling when a fixed modal/panel with an overlay is appearing, you may consider setting hidden overflow on HTML body tag with .u-ovh.


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
      <td class="Table-cell Table-cell--important u-tal">$overlay-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">overlay background-color<br><code>rgba($limed-spruce, .8)</code></td>
    </tr>
  </tbody>
</table>
```



```html
<div id="Overlay" class="Overlay" aria-hidden="true"></div>
```
