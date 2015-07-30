# Notification

* A `Notification` is horizontally centered, based on its parent width. Add `Notification--fixed` class if you need a fixed position.

```html
<div class="has-notification">
	<div class="Notification">Productive and actionable meetings, every time.</div>
</div>
```

```html
<div class="has-notification">
  <div class="Notification Notification--success">Productive and actionable meetings, every time.</div>
</div>
```

```html
<div class="has-notification">
  <div class="Notification Notification--warning">Productive and actionable meetings, every time.</div>
</div>
```

```html
<div class="has-notification">
  <div class="Notification Notification--error">Productive and actionable meetings, every time.</div>
</div>
```

## Positions

To fix your Notification, simply add
* `.Notification--fixed` class, because, it's a fixed position, it does not need the `.has-notification` wrapper.
* The direction wanted "`tc | bl | br`"

## Options
```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Modifier</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">`.Notification--fixed`</td>
      <td class="Table-cell">Will add a position fixed to `.Notification`</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">`.Notification--tc`</td>
      <td class="Table-cell">Top Center window position</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">`.Notification--bl`</td>
      <td class="Table-cell">Bottom Left window position</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">`.Notification--br`</td>
      <td class="Table-cell">Bottom Right window position</td>
    </tr>
  </tbody>
</table>
```
