# Notification

.Notification is horizontally centered, based on its parent width. Add .Notification--fixed class if a fixed position is needed.

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
      <td class="Table-cell Table-cell--important u-tal">$notification-pdv</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">notification vertical padding<br><code>$pd--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$notification-pdh</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">notification horizontal padding<br><code>$base-pd</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$notification-base-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">notification base text color<br><code>$white</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$notification-base-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">notification base background-color<br><code>$neutral</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$notification-outer-space</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">notification outer space<br><code>$mg--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$notification-shadow</td>
      <td class="Table-cell">box-color</td>
      <td class="Table-cell">notification shadow<br><code>0 1px 1.5px 0 rgba($gray-chateau, .5)</code></td>
    </tr>
  </tbody>
</table>
```



```html
<div class="has-notification">
	<div class="Notification">Productive and actionable meetings, every time.</div>
</div>
```

```html
<div class="has-notification">
	<div class="Notification Notification--primary">Productive and actionable meetings, every time.</div>
</div>
```

```html
<div class="has-notification">
  <div class="Notification Notification--validate">Productive and actionable meetings, every time.</div>
</div>
```

```html
<div class="has-notification">
  <div class="Notification Notification--info">Productive and actionable meetings, every time.</div>
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
* The direction wanted "`tc | tr | bl | br`"

## Options
```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Modifier</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">.Notification--fixed</td>
      <td class="Table-cell">Will add a position fixed to `.Notification`</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">.Notification--block</td>
      <td class="Table-cell">Will display `.Notification` as block</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">.Notification--tc</td>
      <td class="Table-cell">Top Center window position</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">.Notification--tr</td>
      <td class="Table-cell">Top Right window position</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">.Notification--bl</td>
      <td class="Table-cell">Bottom Left window position</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">.Notification--br</td>
      <td class="Table-cell">Bottom Right window position</td>
    </tr>
  </tbody>
</table>
```
