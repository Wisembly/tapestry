# Inputs

Input is displayed as a 100% width by default.

## Variables

| Variable                       | property         | value                                         | desc.                                                           |
|--------------------------------|------------------|-----------------------------------------------|-----------------------------------------------------------------|
| ** $form-base-color **         | color            | `$shuttle-gray`                               | default form text color                                         |
| ** $form-placeholder-color **  | color            | `$shuttle-gray`                               | form placeholder text color                                     |
| ** $form-focus-color **        | color            | `$shuttle-gray`                               | default focus form item color                                   |
| ** $form-disabled-color **     | color            | `$gray-chateau`                               | default disabled form item color                                |
| ** $form-base-bg **            | background-color | `$white`                                      | default form background-color                                   |
| ** $form-disabled-bg **        | background-color | `$porcelain`                                  | default disabled form background-color                          |
| ** $form-base-border-color **  | color            | `$iron`                                       | default form border-color                                       |
| ** $form-focus-border-color ** | color            | `$gray-chateau`                               | default focus form border-color                                 |
| ** $form-hover-border-color ** | color            | `$gray-chateau`                               | default hover form item border-color                            |
| ** $input-pdv **               | padding          | `rb(2)`                                       | input vertical padding                                          |
| ** $input-pdh **               | padding          | `$pd--s`                                      | input horizontal padding                                        |
| ** $input-valid-class **       | class name       | `".is-valid"`                                 | class for valid inputs                                          |
| ** $input-valid-bg-path **     | path             | `"/src/svg/backgrounds/inputBg--valid.svg"`   | background location for valid inputs (will be base64 encoded)   |
| ** $input-invalid-class **     | class name       | `".is-invalid"`                               | class for invalid inputs                                        |
| ** $input-invalid-bg-path **   | path             | `"/src/svg/backgrounds/inputBg--invalid.svg"` | background location for invalid inputs (will be base64 encoded) |
| ** $input-group-icon-color **  | color            | `$iron`                                       | icon color for prefixed/suffixed input                          |
| ** $input-group-icon-width **  | width            | `r(6)`                                        | icon width for prefixed/suffixed input                          |
| ** $textarea-height **         | height           | `$base-pd + ($base-lh * 2) + rem(2px)`        | textarea height                                                 |
| ** $checkbox-height **         | height           | `r(4)`                                        | checkbox height                                                 |
| ** $checkbox-base-color **     | color            | `$iron`                                       | checkbox base color                                             |
| ** $checkbox-hover-color **    | color            | `$mint`                                       | checkbox hover color                                            |
| ** $checkbox-checked-color **  | color            | `$mint`                                       | checkbox checked color                                          |
| ** $checkbox-inner-space **    | size             | `$mg--s`                                      | space between checkbox and label                                |
| ** $checkbox-space-between **  | size             | `r(2)`                                        | space between checkboxes                                        |
| ** $radio-height **            | height           | `r(4)`                                        | radio height                                                    |
| ** $radio-base-color **        | color            | `$iron`                                       | radio base color                                                |
| ** $radio-hover-color **       | color            | `$mint`                                       | radio hover color                                               |
| ** $radio-checked-color **     | color            | `$mint`                                       | radio checked color                                             |
| ** $radio-inner-space **       | size             | `$mg--s`                                      | space between radio and label                                   |
| ** $radio-space-between **     | size             | `r(2)`                                        | space between radios                                            |



## Basic

```html
<div id="basicInputWrapper1">
  <label for="basicInput" class="Label">Foo</label>
  <input id="basicInput" class="Input" type="text" placeholder="Basic input" aria-label="Input item">
</div>

<div id="basicInputWrapper2" class="u-mgt--m">
  <label for="disabledInput" class="Label">Bar</label>
  <input id="disabledInput" class="Input" type="text" placeholder="Disabled input" aria-label="Input item" disabled>
</div>
```

Items can be inlined with .Input--inline class.

```html
<div id="inlinedInputWrapper1">
  <label for="fooLabel" class="Label">Foo</label>
  <input id="fooLabel" class="Input Input--inline" type="text" placeholder="" aria-label="Input item">
</div>

<div id="inlinedInputWrapper2" class="u-mgt--m">
  <input id="barLabel" class="Input Input--inline" type="text" placeholder="" aria-label="Input item">
  <label for="barLabel" class="Label">Bar</label>
</div>
```



## Textarea

```html
<div id="textareaWrapper1">
  <label class="Label Label--block" for="textarea1">Textarea</label>
  <textarea class="Textarea" placeholder="Textarea" name="textarea1" id="textarea1"></textarea>
</div>

<div id="textareaWrapper2" class="u-mgt--m">
  <label class="Label Label--block" for="textarea2">Disabled textarea</label>
  <textarea class="Textarea" placeholder="Disabled textarea" name="textarea2" id="textarea2" disabled></textarea>
</div>
```



## Checkbox

```html
<div class="Checkbox">
  <input name="checkbox1" id="checkbox1" type="checkbox" class="Checkbox-input">
  <label for="checkbox1" class="Checkbox-label">Would you like to receive our newsletter?</label>
</div>
<div class="Checkbox">
  <input name="checkbox2" id="checkbox2" type="checkbox" class="Checkbox-input" checked>
  <label for="checkbox2" class="Checkbox-label">I am a robot</label>
</div>
<div class="Checkbox">
  <input name="checkbox3" id="checkbox3" type="checkbox" class="Checkbox-input" disabled>
  <label for="checkbox3" class="Checkbox-label">I am disabled</label>
</div>
<div class="Checkbox">
  <input name="checkbox4" id="checkbox4" type="checkbox" class="Checkbox-input" disabled checked>
  <label for="checkbox4" class="Checkbox-label">I am disabled and checked!</label>
</div>
```



## Radio

```html
<div class="Radio">
  <input name="title" id="foo" type="radio" class="Radio-input" checked>
  <label for="foo" class="Radio-label">Foo</label>
</div>
<div class="Radio">
  <input name="title" id="bar" type="radio" class="Radio-input">
  <label for="bar" class="Radio-label">Bar</label>
</div>
<div class="Radio">
  <input name="title" id="baz" type="radio" class="Radio-input">
  <label for="baz" class="Radio-label">Baz</label>
</div>
```

```html
<div class="Radio">
  <input name="name" id="foobar" type="radio" class="Radio-input" disabled>
  <label for="foobar" class="Radio-label">Foobar</label>
</div>
<div class="Radio">
  <input name="name" id="foobaz" type="radio" class="Radio-input" checked disabled>
  <label for="foobaz" class="Radio-label">Foobaz</label>
</div>
```



## Prefixed and suffixed

```html
<div class="InputGroup u-mgb--m">
  <label for="prefixedInput" class="InputGroup-prefix Icon Icon--mail"></label>
  <input id="prefixedInput" class="Input Input--prefixed" type="text" placeholder="Prefixed input" aria-label="Input item">
</div>
<div class="InputGroup">
  <label for="suffixedInput" class="InputGroup-suffix Icon Icon--glass"></label>
  <input id="suffixedInput" class="Input Input--suffixed" type="text" placeholder="Suffixed input" aria-label="Input item">
</div>
```



## Addons

```html
<div class="InputGroup u-mgb--m">
  <span class="InputGroup-item Input-addOn">@</span>
  <input class="Input InputGroup-item" type="text" placeholder="Basic input with addon" aria-label="Input item">
</div>
<div class="InputGroup">
  <input class="Input InputGroup-item" type="text" placeholder="Basic input with addon" aria-label="Input item">
  <button class="Btn Btn--validate InputGroup-item Input-addOn">Add</button>
</div>
```



## Input-group

```html
<div class="InputGroup">
  <input class="Input InputGroup-item" id="InputGrouped1" placeholder="input" aria-label="Input item 1">
  <input class="Input InputGroup-item" id="InputGrouped2" placeholder="input" aria-label="Input item 2">
  <input class="Input InputGroup-item" id="InputGrouped3" placeholder="input" aria-label="Input item 3">
  <input class="Input InputGroup-item" id="InputGrouped4" placeholder="input" aria-label="Input item 4">
</div>
```

```html

<div class="InputGroup">
  <input class="Input InputGroup-item" id="InputGrouped5" placeholder="Search…"/>
  <button class="Btn Btn--outline InputGroup-item Input-addOn">Reset</button>
  <button class="Btn Btn--validate InputGroup-item Input-addOn">Validate</button>
</div>

<div class="InputGroup">
  <input class="Input InputGroup-item" id="InputGrouped6" placeholder="Search…" aria-label="Search aria label">
  <select class="Select InputGroup-item" name="">
    <option value="">Choose a foobar option</option>
    <option value="foo" selected>foo</option>
    <option value="bar" data-label="Foo Label">bar</option>
    <option value="baz">baz</option>
  </select>
  <button class="Btn Input-addOn InputGroup-item" id="InputGrouped4" placeholder="input" aria-label="Input item 4">Search</button>
</div>
```



## States

Tapestry does not rely on neither :valid nor :invalid since those behaviors are quite random. When page is loaded, inputs are considered :valid even if their values are empty. Plus, it adds visual noise before you submit anything! We advise to use .is-valid and .is-invalid but classes are fully customizable. You can also consider giving a try to [ParsleyJS](http://parsleyjs.org/).

```html
<div id="validInputWrapper">
  <label for="validInput" class="Label Label--block">Validated input</label>
  <input id="validInput" class="Input is-valid" type="text" value="I am a correct value" placeholder="Valid input">
</div>

<div id="invalidInputWrapper" class="u-mgt--m">
  <label for="invalidInput" class="Label Label--block">Errored input</label>
  <input id="invalidInput" class="Input is-invalid" type="text" value="I am an incorrect value" placeholder="Invalid input">
</div>
```
