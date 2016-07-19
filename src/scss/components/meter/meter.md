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
      <td class="Table-cell">meter height<br><code>r(1)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-radius</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">meter border-radius<br><code>$meter-height / 2</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$small-meter-height</td>
      <td class="Table-cell">height</td>
      <td class="Table-cell">small meter height<br><code>3px</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$small-meter-radius</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">small meter border-radius<br><code>0</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$large-meter-height</td>
      <td class="Table-cell">height</td>
      <td class="Table-cell">large meter height<br><code>r(3)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$large-meter-radius</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">large meter border-radius<br><code>$large-meter-height / 2</code></td>
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
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-info-status-bar-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">meter bar background-color at info-status<br><code>$info</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-info-status-selector</td>
      <td class="Table-cell">selector</td>
      <td class="Table-cell">meter bar selector at info-status<br><code>[data-threshold="75"]</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-error-status-bar-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">meter bar background-color at error-status<br><code>$error</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$meter-error-status-selector</td>
      <td class="Table-cell">selector</td>
      <td class="Table-cell">meter bar selector at error-status<br><code>[data-threshold="99"]</code></td>
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



## Sizes

```html
<div class="Meter Meter--s u-mgb--m" data-threshold="25">
  <div class="Meter-bar Meter-bar--s" style="width: 25%;"></div>
</div>

<div class="Meter Meter--s u-mgb--m" data-threshold="75">
  <div class="Meter-bar Meter-bar--s" style="width:75%;"></div>
</div>

<div class="Meter Meter--s" data-threshold="99">
  <div class="Meter-bar Meter-bar--s" style="width:99%;"></div>
</div>
```

```html
<div class="Meter Meter--l u-mgb--m" data-threshold="25">
  <div class="Meter-bar Meter-bar--l" style="width:25%;"></div>
</div>

<div class="Meter Meter--l u-mgb--m" data-threshold="75">
  <div class="Meter-bar Meter-bar--l" style="width:75%;"></div>
</div>

<div class="Meter Meter--l" data-threshold="99">
  <div class="Meter-bar Meter-bar--l" style="width:99%;"></div>
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
