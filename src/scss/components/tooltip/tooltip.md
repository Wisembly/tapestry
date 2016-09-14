# Tooltip

## Variables

| Variable                             | property         | value              | desc.                             |
|--------------------------------------|------------------|--------------------|-----------------------------------|
| ** $tooltip-arrow-size **            | size             | `rem(5px)`         | tooltip arrow size                |
| ** $tooltip-bg **                    | background-color | `rgba($black, .8)` | tooltip background-color          |
| ** $tooltip-color **                 | color            | `$white`           | tooltip color                     |
| ** $tooltip-space-between-content ** | size             | `$mg--xs`          | space between tooltip and content |
| ** $tooltip-width **                 | width            | `10rem`            | tooltip width                     |
| ** $tooltip-large-width **           | width            | `20rem`            | large tooltip width               |
| ** $tooltip-pd **                    | padding          | `$pd--s`           | tooltip padding                   |



```html
<p>Default <strong class="has-tooltip" aria-label="Classic tooltip">tooltip</strong></p>
```



## Directions

```html
<p>Tooltip <strong class="has-tooltip has-tooltip--top" aria-label="Tooltip on the top">on the top</strong></p>
```

```html
<p>Tooltip <strong class="has-tooltip has-tooltip--right" aria-label="Tooltip on the right">on the right</strong></p>
```

```html
<p>Tooltip <strong class="has-tooltip has-tooltip--bottom" aria-label="Tooltip on the bottom">on the bottom</strong></p>
```

```html
<p>Tooltip <strong class="has-tooltip" aria-label="Tooltip on the left">on the left</strong></p>
```



## Sizes

```html
<p>Bigger <strong class="has-tooltip has-tooltip--l has-tooltip--right" aria-label="Bigger tooltip for longer text, you know. Because longer text are more significants, because they contains more words, because they're more significants">tooltip</strong></p>
```
