# Meters

## Variables

| Variable                           | property         | value                     | desc.                                      |
|------------------------------------|------------------|---------------------------|--------------------------------------------|
| ** $meter-height **                | height           | `r(1)`                    | meter height                               |
| ** $meter-radius **                | size             | `$meter-height / 2`       | meter border-radius                        |
| ** $small-meter-height **          | height           | `2px`                     | small meter height                         |
| ** $small-meter-radius **          | size             | `0`                       | small meter border-radius                  |
| ** $large-meter-height **          | height           | `r(3)`                    | large meter height                         |
| ** $large-meter-radius **          | size             | `$large-meter-height / 2` | large meter border-radius                  |
| ** $meter-base-bg **               | background-color | `$porcelain`              | meter background-color                     |
| ** $meter-bar-bg **                | background-color | `$boston-blue`            | meter bar background-color                 |
| ** $meter-info-status-bar-bg **    | background-color | `$info`                   | meter bar background-color at info-status  |
| ** $meter-info-status-selector **  | selector         | `[data-threshold="75"]`   | meter bar selector at info-status          |
| ** $meter-error-status-bar-bg **   | background-color | `$error`                  | meter bar background-color at error-status |
| ** $meter-error-status-selector ** | selector         | `[data-threshold="99"]`   | meter bar selector at error-status         |



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
