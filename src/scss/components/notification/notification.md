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
* `.Notification--fixed` class
* The direction wanted "`tc | bl | br`"
