# Notification

.Notification is horizontally centered, based on its parent width. Add .Notification--fixed class if a fixed position is needed.

## Variables

| Variable                        | property         | value                                   | desc.                              |
|---------------------------------|------------------|-----------------------------------------|------------------------------------|
| ** $notification-pdv **         | padding          | `$pd--s`                                | notification vertical padding      |
| ** $notification-pdh **         | padding          | `$base-pd`                              | notification horizontal padding    |
| ** $notification-base-color **  | color            | `$white`                                | notification base text color       |
| ** $notification-base-bg **     | background-color | `$neutral`                              | notification base background-color |
| ** $notification-outer-space ** | background-color | `$mg--s`                                | notification outer space           |
| ** $notification-shadow **      | box-color        | `0 1px 1.5px 0 rgba($gray-chateau, .5)` | notification shadow                |



## Basic

```html
<div class="has-notification">
	<div class="Notification">Productive and actionable meetings, every time.</div>
</div>
```



## Colors

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

| Modifier                   | Description                                  |
|----------------------------|----------------------------------------------|
| ** .Notification--fixed ** | Will add a position fixed to `.Notification` |
| ** .Notification--block ** | Will display `.Notification` as block        |
| ** .Notification--tc **    | Top center window position                   |
| ** .Notification--tr **    | Top right window position                    |
| ** .Notification--rc **    | Right center window position                 |
| ** .Notification--br **    | Bottom right window position                 |
| ** .Notification--bc **    | Bottom center window position                |
| ** .Notification--bl **    | Bottom left window position                  |
| ** .Notification--lc **    | Left center window position                  |
| ** .Notification--tl **    | Top left window position                     |
