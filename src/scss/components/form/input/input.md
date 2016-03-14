# Inputs

Input is displayed as a 100% width by default.


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
      <td class="Table-cell Table-cell--important u-tal">$form-base-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">default form text color<br><code>$limed-spruce</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$form-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">default form background-color<br><code>$white</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$form-disabled-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">default disabled form item color<br><code>$gray-chateau</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$form-disabled-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">default disabled form background-color<br><code>$alabaster</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$form-focus-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">default focus form item color<br><code>$limed-spruce</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$form-focus-border-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">default focus form border-color<br><code>$gray-chateau</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$form-hover-border-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">default hover form item border-color<br><code>$gray-chateau</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$input-pdv</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">input vertical padding<br><code>rb(2)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$input-pdh</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">input horizontal padding<br><code>$pd--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$input-valid-class</td>
      <td class="Table-cell">class name</td>
      <td class="Table-cell">class for valid inputs<br><code>".is-valid"</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$input-valid-bg-path</td>
      <td class="Table-cell">path</td>
      <td class="Table-cell">background location for valid inputs (will be base64 encoded)<br><code>"/src/svg/backgrounds/inputBg--valid.svg"</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$input-invalid-class</td>
      <td class="Table-cell">class name</td>
      <td class="Table-cell">class for invalid inputs<br><code>".is-invalid"</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$input-invalid-bg-path</td>
      <td class="Table-cell">path</td>
      <td class="Table-cell">background location for invalid inputs (will be base64 encoded)<br><code>"/src/svg/backgrounds/inputBg--invalid.svg"</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$input-group-icon-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">icon color for prefixed/suffixed input<br><code>$iron</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$input-group-icon-width</td>
      <td class="Table-cell">width</td>
      <td class="Table-cell">icon width for prefixed/suffixed input<br><code>r(6)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$textarea-height</td>
      <td class="Table-cell">height</td>
      <td class="Table-cell">textarea height<br><code>$base-pd + ($base-lh * 2) + rem(2px)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$checkbox-height</td>
      <td class="Table-cell">height</td>
      <td class="Table-cell">checkbox height<br><code>r(4)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$checkbox-base-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">checkbox base color<br><code>$iron</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$checkbox-hover-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">checkbox hover color<br><code>$mint</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$checkbox-checked-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">checkbox checked color<br><code>$mint</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$checkbox-inner-space</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">space between checkbox and label<br><code>$mg--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$checkbox-space-between</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">space between checkboxes<br><code>r(2)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$radio-height</td>
      <td class="Table-cell">height</td>
      <td class="Table-cell">radio height<br><code>r(4)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$radio-base-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">radio base color<br><code>$iron</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$radio-hover-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">radio hover color<br><code>$mint</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$radio-checked-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">radio checked color<br><code>$mint</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$radio-inner-space</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">space between radio and label<br><code>$mg--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$radio-space-between</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">space between radios<br><code>r(2)</code></td>
    </tr>
  </tbody>
</table>
```



```html
<label for="basicInput" class="Label">Foo</label>
<input id="basicInput" class="Input" type="text" placeholder="Basic input" aria-label="Input item">

<label for="disabledInput" class="Label">Bar</label>
<input id="disabledInput" class="Input" type="text" placeholder="Disabled input" aria-label="Input item" disabled>
```


Items can be inlined with .Input--inline class.

```html
<div>
  <label for="fooLabel" class="Label">Foo</label>
  <input id="fooLabel" class="Input Input--inline" type="text" placeholder="" aria-label="Input item">
</div>

<div>
  <input id="barLabel" class="Input Input--inline" type="text" placeholder="" aria-label="Input item">
  <label for="barLabel" class="Label">Bar</label>
</div>
```

## Textarea

```html
<div>
  <label class="Label Label--block" for="textarea1">Textarea</label>
  <textarea class="Textarea" placeholder="Textarea" name="textarea1" id="textarea1"></textarea>
</div>

<div>
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
  <input name="checkbox2" id="checkbox1" type="checkbox" class="Checkbox-input" checked>
  <label for="checkbox2" class="Checkbox-label">I am a robot</label>
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
  <input class="Input InputGroup-item" id="InputGrouped11" placeholder="Search…" aria-label="Search aria label">
  <select class="Select InputGroup-item" name="">
    <option value="">Chose a foobar option</option>
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
<label for="validInput" class="Label">Validated input</label>
<input id="validInput" class="Input is-valid" type="text" value="I am a correct value" placeholder="Valid input">

<label for="invalidInput" class="Label">Errored input</label>
<input id="invalidInput" class="Input is-invalid" type="text" value="I am an incorrect value" placeholder="Invalid input">
```
