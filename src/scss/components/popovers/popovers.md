# Popovers

## Variables

| Variable                   | property         | value                                   | desc.                         |
|----------------------------|------------------|-----------------------------------------|-------------------------------|
| ** $popover-arrow-size **  | size             | `rem(8px)`                              | popover arrow size (triangle) |
| ** $popover-pdv **         | padding          | `$pd--s`                                | popover vertical padding      |
| ** $popover-pdh **         | padding          | `$base-pd`                              | popover horizontal padding    |
| ** $popover-base-color **  | color            | `$white`                                | popover base text color       |
| ** $popover-base-color **  | background-color | `$gray-chateau`                         | popover base background-color |
| ** $popover-base-shadow ** | box-shadow       | `0 1px 1.5px 0 rgba($gray-chateau, .5)` | popover base shadow           |




## Basic

```html
<div class="Pellet has-popover">
  <div class="Popover">Regular popover</div>
</div>
```

## Colors

```html
<div class="Pellet Pellet--validate has-popover">
  <div class="Popover Popover--validate">Regular popover</div>
</div>
```

```html
<div class="Pellet Pellet--info has-popover">
  <div class="Popover Popover--info">Regular popover</div>
</div>
```

```html
<div class="Pellet Pellet--error has-popover">
  <div class="Popover Popover--error">Regular popover</div>
</div>
```
