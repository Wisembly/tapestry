 ># Btons

## Types

| Type           | desc.                              |
|----------------|------------------------------------|
| ** outline **  | transparent button with borders    |
| ** raw **      | transparent button without borders |
| ** inverted ** | white button without borders       |

```html
<button type="button" class="Btn">default button</button>
<button type="button" class="Btn Btn--outline">Outlined button</button>
<button type="button" class="Btn" disabled>Disabled button</button>
<button type="button" class="Btn Btn--raw">Raw button</button>
<button type="button" class="Btn Btn--inverted">Inverted button</button>
```



## Variables

| Variable                                   | property         | value                                                          | desc.                                   |
|--------------------------------------------|------------------|----------------------------------------------------------------|-----------------------------------------|
| ** $btn-pdv **                             | padding          | `$pd--s`                                                       | vertical padding for regular buttons    |
| ** $btn-pdv--s **                          | padding          | `$pd--xs`                                                      | vertical padding for small buttons      |
| ** $btn-pdh **                             | padding          | `$pd--s`                                                       | horizontal padding for regular buttons  |
| ** $btn-pdh--s **                          | padding          | `$pd--xs`                                                      | horizontal padding for small buttons    |
| ** $btn-fixed-unit **                      | size             | `r(8)`                                                         | squared button size                     |
| ** $btn-fixed-unit--s **                   | size             | `r(6)`                                                         | small squared button size               |
| ** $btn-name-colors **                     | list             | `"-primary" "-alt" "-validate" "-info" "-error"`               | button classnames                       |
| ** $btn-base-colors **                     | list             | `$venice-blue $boston-blue $mint $saffron $mandy`              | button default colors                   |
| ** $btn-hover-colors **                    | list             | `$atoll $jelly-bean $ocean-green $galliano $fuzzy-wuzzy-brown` | button hover colors                     |
| ** $btn-outline-base-color **              | color            | `$slate-gray`                                                  | outline button base color               |
| ** $btn-outline-base-border-color **       | border-color     | `$base-border-color`                                           | outline button base border-color        |
| ** $btn-outline-hover-color **             | color            | `$shuttle-gray`                                                | outline button hover color              |
| ** $btn-outline-hover-border-color **      | border-color     | `$shuttle-gray`                                                | outline button hover border-color       |
| ** $btn-group-space-between **             | margin           | `$pd--s`                                                       | space between button-groups             |
| ** $btn-group-selected-color **            | color            | `$mint`                                                        | selected color for button-group item    |
| ** $btn-group-selected-item-selector **    | selector         | `".is-selected"`                                               | selector for selected button-group item |
| ** $btn-loading-selector **                | selector         | `".is-loading >"`                                              | loading button selector                 |
| ** $btn-loading-spinner-primary-color **   | color            | `$white`                                                       | button-spinner color                    |
| ** $btn-loading-spinner-secondary-color ** | color            | `$deep-sea-green`                                              | button-spinner container color          |
| ** $btn-loading-spinner-outline-color **   | color            | `$slate-gray`                                                  | button-outline spinner color            |
| ** $btn-loading-duration **                | time             | `1s`                                                           | button-spinner duration                 |
| ** $btn-loading-spinner-thickness **       | size             | `2px`                                                          | button-spinner thickness                |
| ** $btn-failed-selector **                 | selector         | `".has-failed >"`                                              | failing button selector                 |
| ** $btn-failed-bg **                       | background-color | `$mandy`                                                       | failing button background               |
| ** $btn-failed-color **                    | background-color | `$white`                                                       | failing button label color              |
| ** $btn-completed-selector **              | selector         | `".has-completed >"`                                           | completed button selector               |
| ** $btn-completed-bg **                    | background-color | `$mint`                                                        | completed button background             |
| ** $btn-completed-color **                 | background-color | `$white`                                                       | completed button label color            |
| ** $btn-end-animation-duration **          | time             | `.5s`                                                          | button end animation duration           |


## Sizes

```html
<button type="button" class="Btn Btn--s">Small button</button>
<button type="button" class="Btn Btn--outline Btn--s">Small outlined button</button>
<button type="button" class="Btn Btn--s" disabled>Small disabled button</button>
<button type="button" class="Btn Btn--raw Btn--s">Small raw button</button>
<button type="button" class="Btn Btn--inverted Btn--s">Small inverted button</button>
```



## Block
```html
<button type="button" class="Btn Btn--alt Btn--block">Block button</button>
```



## Expand
```html
<div class="BtnContainer">
  <button type="button" class="Btn Btn--expand">Expanded button</button>
  <button type="button" class="Btn Btn--validate">Button</button>
</div>
```



## Squared
```html
<button type="button" class="Btn Btn--squared">
  <i class="Icon Icon--like"></i>
</button>
<button type="button" class="Btn Btn--s Btn--outline Btn--squared">
  <i class="Icon Icon--trash"></i>
</button>
```



## Types

```html
<button type="button" class="Btn Btn--raw">Raw button</button>
```

```html
<button type="button" class="Btn">
  <i class="Btn-icon Icon Icon--like"></i>
  Button with icon
</button>

<button type="button" class="Btn Btn--s">
  <i class="Btn-icon Icon Icon--like Icon--s"></i>
  Button with icon
</button>

<button type="button" class="Btn has-icon">
  <i class="Btn-icon Icon Icon--like"></i>
  Button with icon
</button>

<button class="Btn Btn--outline has-icon">
  <i class="Btn-icon Icon Icon--like"></i>
  Button with icon
</button>
```



## Colors

```html
<button type="button" class="Btn Btn--primary">primary button</button>
<button type="button" class="Btn Btn--alt">alt button</button>
<button type="button" class="Btn Btn--validate">validate button</button>
<button type="button" class="Btn Btn--info">info button</button>
<button type="button" class="Btn Btn--error">error button</button>
```
```html
<button type="button" class="Btn Btn--primary Btn--outline">primary button</button>
<button type="button" class="Btn Btn--alt Btn--outline">alt button</button>
<button type="button" class="Btn Btn--validate Btn--outline">validate button</button>
<button type="button" class="Btn Btn--info Btn--outline">info button</button>
<button type="button" class="Btn Btn--error Btn--outline">error button</button>
```
```html
<button type="button" class="Btn Btn--primary Btn--raw">primary button</button>
<button type="button" class="Btn Btn--alt Btn--raw">alt button</button>
<button type="button" class="Btn Btn--validate Btn--raw">validate button</button>
<button type="button" class="Btn Btn--info Btn--raw">info button</button>
<button type="button" class="Btn Btn--error Btn--raw">error button</button>
```
```html
<div class="u-primary u-pd--m">
  <button type="button" class="Btn Btn--primary Btn--inverted">primary button</button>
  <button type="button" class="Btn Btn--alt Btn--inverted">alt button</button>
  <button type="button" class="Btn Btn--validate Btn--inverted">validate button</button>
  <button type="button" class="Btn Btn--info Btn--inverted">info button</button>
  <button type="button" class="Btn Btn--error Btn--inverted">error button</button>
</div>
```



## Isolated cases
```html
<div class="u-primary u-pd--m">
  <button type="button" class="Btn Btn--inverted Btn--outline">Inverted&outlined button</button>
  <button type="button" class="Btn Btn--inverted Btn--raw">Inverted&raw button</button>
</div>
```



## Button group

```html
<div class="BtnGroup">
  <button class="Btn BtnGroup-item is-selected">Button A</button>
  <button class="Btn BtnGroup-item">Button B</button>
  <button class="Btn BtnGroup-item" disabled>Button C</button>
</div>
<div class="BtnGroup">
  <button class="Btn BtnGroup-item BtnGroup-item--s">Button A</button>
  <button class="Btn BtnGroup-item BtnGroup-item--s">Button B</button>
  <button class="Btn BtnGroup-item BtnGroup-item--s is-selected">Button C</button>
</div>
```


## Buttons with statuses

```html
<div class="js-BtnComplete" style="display: inline-block; margin-right: 1rem;">
  <button type="button" class="Btn Btn--status js-BtnStatus">Great success!</button>
</div>
<div class="js-BtnFail" style="display: inline-block; margin-right: 1rem;">
  <button type="button" class="Btn Btn--status js-BtnStatus">I'm a loser, baby!</button>
</div>

<div class="js-BtnComplete" style="display: inline-block; margin-right: 1rem;">
  <button type="button" class="Btn Btn--outline Btn--status js-BtnStatus">Great success!</button>
</div>
<div class="js-BtnFail" style="display: inline-block; margin-right: 1rem;">
  <button type="button" class="Btn Btn--outline Btn--status js-BtnStatus">I'm a loser, baby!</button>
</div>

<div class="js-BtnComplete" style="display: inline-block; margin-right: 1rem;">
  <button type="button" class="Btn Btn--s Btn--status js-BtnStatus">Great success!</button>
</div>
<div class="js-BtnFail" style="display: inline-block;">
  <button type="button" class="Btn Btn--s Btn--status js-BtnStatus">I'm a loser, baby!</button>
</div>
```

```esc
<script>
  $(document).ready(function(){
    $('.js-BtnStatus').on('click', function (event) {
      var $parent = $(event.currentTarget).parent();
      var shoudComplete = $parent.hasClass('js-BtnComplete');

      $parent.removeClass('is-loading has-failed has-completed').addClass('is-loading');

      setTimeout(function () {
        $parent.removeClass('is-loading has-failed').addClass(shoudComplete ? 'has-completed' : 'has-failed');
      }, 3000);
    })
  });
</script>
```
