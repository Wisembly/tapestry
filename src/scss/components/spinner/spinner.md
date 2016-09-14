# Spinner

## Variables

| Variable                               | property     | value          | desc.                           |
|----------------------------------------|--------------|----------------|---------------------------------|
| ** $spinner-size **                    | size         | `r(8)`         | spinner size                    |
| ** $spinner-thickness **               | border-width | `"rem(4px)`    | spinner thickness               |
| ** $small-spinner-size **              | size         | `r(4)`         | small spinner size              |
| ** $small-spinner-thickness **         | border-width | `"rem(2px)`    | small spinner thickness         |
| ** $large-spinner-size **              | size         | `r(16)`        | large spinner size              |
| ** $large-spinner-thickness **         | border-width | `"rem(8px)`    | large spinner thickness         |
| ** $spinner-primary-color **           | color        | `$venice-blue` | spinner primary color           |
| ** $spinner-secondary-color **         | color        | `$iron`        | spinner secondary color         |
| ** $neutral-spinner-primary-color **   | color        | `$alabaster`   | neutral spinner primary color   |
| ** $neutral-spinner-secondary-color ** | color        | `$outer-space` | neutral spinner secondary color |
| ** $spinner-rotation-duration **       | duration     | `.75s`         | spinner rotation duration       |



## Basic

```html
<div class="Spinner"></div>
```


## Sizes

```html
<div class="Spinner Spinner--s"></div>
<div class="Spinner"></div>
<div class="Spinner Spinner--l"></div>
```

## Colors

```html
<div style="background-color: #000; padding: 20px;">
  <div class="Spinner Spinner--neutral Spinner--s"></div>
  <div class="Spinner Spinner--neutral"></div>
  <div class="Spinner Spinner--neutral Spinner--l"></div>
</div>
```

## Types

```html
<div class="Spinner Spinner--infinite"></div>
```
