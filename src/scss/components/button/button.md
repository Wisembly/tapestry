# Buttons
```esc
<ul class="u-mgb--m">
  <li><strong>Outline:</strong> transparent button with borders</li>
  <li><strong>Raw:</strong> transparent button without borders</li>
  <li><strong>Inverted:</strong> white button without borders</li>
</ul>
```

```html
<button class="Btn">default button</button>
<button class="Btn Btn--outline">Outlined button</button>
<button class="Btn" aria-disabled="true" disabled>Disabled button</button>
<button class="Btn Btn--raw">Raw button</button>
<button class="Btn Btn--inverted">Inverted button</button>
```

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
      <td class="Table-cell Table-cell--important u-tal" style="width: 25%;">$btn-pdv</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">vertical padding for regular buttons<br><code>$pd--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal" style="width: 25%;">$btn-pdv--s</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">vertical padding for small buttons<br><code>$pd--xs</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal" style="width: 25%;">$btn-pdh</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">horizontal padding for regular buttons<br><code>$pd--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal" style="width: 25%;">$btn-pdh--s</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">horizontal padding for small buttons<br><code>$pd--xs</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$btn-fixed-unit</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">squared and circle button size<br><code>r(8)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$btn-fixed-unit--s</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">small squared and circle button size<br><code>r(6)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$btn-name-colors</td>
      <td class="Table-cell">list</td>
      <td class="Table-cell">button classnames<br><code>"-primary" "-alt" "-validate" "-info" "-error"</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$btn-base-colors</td>
      <td class="Table-cell">list</td>
      <td class="Table-cell">button default colors<br><code>$venice-blue $curious-blue $mint $saffron $mandy</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$btn-hover-colors</td>
      <td class="Table-cell">list</td>
      <td class="Table-cell">button hover colors<br><code>$atoll $eastern-blue $ocean-green $galliano $fuzzy-wuzzy-brown</code></td>
    </tr>
  </tbody>
</table>
```



## Sizes

```html
<button class="Btn Btn--s">Small button</button>
<button class="Btn Btn--outline Btn--s">Small outlined button</button>
<button class="Btn Btn--s" aria-disabled="true" disabled>Small disabled button</button>
<button class="Btn Btn--raw Btn--s">Small raw button</button>
<button class="Btn Btn--inverted Btn--s">Small inverted button</button>
```

## Block
```html
<button class="Btn Btn--alt Btn--block">Block button</button>
```

## Expand
```html
<div class="BtnGroup Btn-expandContainer">
  <button class="Btn Btn--expand">Expanded button</button>
  <button class="Btn Btn--validate">Button</button>
</div>
```

## Squared
```html
<button class="Btn Btn--squared">
  <i class="Icon Icon--like"></i>
</button>
<button class="Btn Btn--s Btn--outline Btn--squared">
  <i class="Icon Icon--trash"></i>
</button>
```


## Circle
```html
<button class="Btn Btn--circle">
  <i class="Icon Icon--like"></i>
</button>
<button class="Btn Btn--s Btn--outline Btn--circle">
  <i class="Icon Icon--options"></i>
</button>
```

## Types

```html
<button class="Btn Btn--raw">Raw button</button>
```

```html
<button class="Btn">
  <i class="Btn-icon Icon Icon--like"></i>
  Button with icon
</button>

<button class="Btn Btn--s">
  <i class="Btn-icon Icon Icon--like Icon--s"></i>
  Button with icon
</button>

<button class="Btn has-icon">
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
<button class="Btn Btn--primary">primary button</button>
<button class="Btn Btn--alt">alt button</button>
<button class="Btn Btn--validate">validate button</button>
<button class="Btn Btn--info">info button</button>
<button class="Btn Btn--error">error button</button>
```
```html
<button class="Btn Btn--primary Btn--outline">primary button</button>
<button class="Btn Btn--alt Btn--outline">alt button</button>
<button class="Btn Btn--validate Btn--outline">validate button</button>
<button class="Btn Btn--info Btn--outline">info button</button>
<button class="Btn Btn--error Btn--outline">error button</button>
```
```html
<button class="Btn Btn--primary Btn--raw">primary button</button>
<button class="Btn Btn--alt Btn--raw">alt button</button>
<button class="Btn Btn--validate Btn--raw">validate button</button>
<button class="Btn Btn--info Btn--raw">info button</button>
<button class="Btn Btn--error Btn--raw">error button</button>
```
```html
<div class="u-primary u-pd--m">
  <button class="Btn Btn--primary Btn--inverted">primary button</button>
  <button class="Btn Btn--alt Btn--inverted">alt button</button>
  <button class="Btn Btn--validate Btn--inverted">validate button</button>
  <button class="Btn Btn--info Btn--inverted">info button</button>
  <button class="Btn Btn--error Btn--inverted">error button</button>
</div>
```

## Isolated cases
```html
<div class="u-primary u-pd--m">
  <button class="Btn Btn--inverted Btn--outline">Inverted&outlined button</button>
  <button class="Btn Btn--inverted Btn--raw">Inverted&raw button</button>
</div>
```


## Button group

```html
<div class="BtnGroup">
  <button class="Btn">Button A</button>
  <div class="Dropdown BtnGroup-dropdown" data-tapestry="dropdown">
    <button type="button" class="Dropdown-toggle Btn" aria-controls="dropdownDividerExample" aria-expanded="false">Button B</button>
    <ul id="dropdownDividerExample" class="Dropdown-list" aria-labelledby="dropdownMenuDivider">
      <li class="Dropdown-item">
        Simple label 1
      </li>
      <li class="Dropdown-item">
        Simple label 2
      </li>
    </ul>
  </div>
  <button class="Btn">Button C</button>
</div>
<div class="BtnGroup">
  <div class="Dropdown BtnGroup-dropdown" data-tapestry="dropdown">
    <button type="button" class="Dropdown-toggle Btn Btn--outline" aria-controls="dropdownDividerExample" aria-expanded="false">Button A</button>
    <ul id="dropdownDividerExample" class="Dropdown-list" aria-labelledby="dropdownMenuDivider">
      <li class="Dropdown-item">
        Simple label 1
      </li>
      <li class="Dropdown-item">
        Simple label 2
      </li>
    </ul>
  </div>
  <button class="Btn Btn--outline">Button B</button>
  <button class="Btn Btn--outline">Button C</button>
</div>
<div class="BtnGroup">
  <button class="Btn Btn--s Btn--primary Btn--outline" disabled>Button A</button>
  <button class="Btn Btn--s Btn--primary Btn--outline" disabled>Button B</button>
  <button class="Btn Btn--s Btn--primary Btn--outline" disabled>Button C</button>
</div>

```
