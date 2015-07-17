# Dropdown

```html
<div class="Dropdown" data-tapestry="dropdown">
  <button class="Dropdown-toggle Btn" aria-controls="dropdownBottomLeft" aria-expanded="true">Call to action</button>
  <ul id="dropdownBottomLeft" class="Dropdown-list">
    <li class="Dropdown-item">
      Simple label
    </li>
    <li>
      <a href="#" class="Dropdown-item">
        Linked label
      </a>
    </li>
  </ul>
</div>
```

## Positions
Add those classes to position the `Dropdown-list` <br/>
example: `<ul id="dropdownTopLeft" class="Dropdown-list Dropdown-list--tl">∞</ul>`
```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Class</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.Dropdown-list--tl</code></td>
      <td class="Table-cell">Aligns dropdown on the top-left</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.Dropdown-list--tc</code></td>
      <td class="Table-cell">Aligns dropdown on the top-center</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.Dropdown-list--tr</code></td>
      <td class="Table-cell">Aligns dropdown on the top-right</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.Dropdown-list--bc</code></td>
      <td class="Table-cell">Aligns dropdown on the bottom-center</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.Dropdown-list--br </code></td>
      <td class="Table-cell">Aligns dropdown on the bottom-right</td>
    </tr>
  </tbody>
</table>
```

## Divider

```html
<div class="Dropdown" data-tapestry="dropdown">
  <button class="Dropdown-toggle Btn" aria-controls="dropdownDividerExample" aria-expanded="true">Call to action</button>
  <ul id="dropdownDividerExample" class="Dropdown-list" aria-labelledby="dropdownMenuDivider">
    <li class="Dropdown-item">
      Simple label 1
    </li>
    <li class="Dropdown-item">
      Simple label 2
    </li>
    <li class="Dropdown-item">
      Simple label 3
    </li>
    <li role="separator" class="Dropdown-hr"></li>
    <li class="Dropdown-item">
      Apply
    </li>
    <li class="Dropdown-item">
      Cancel
    </li>
  </ul>
</div>
```

## Dropdown Select

The easiest way to create a `<select>` is, indeed, to use the classic `<select>`, it will be transformed into a custom select with the Tapestry look & feel.<br>
The `data-label` attribute will display a custom value.
You can also use an `<option>` to create a placeholder.

```html
<select name="">
  <option value="">Chose a foobar option</option>
  <option value="foo" selected>foo</option>
  <option value="bar" data-label="Foo Label">bar</option>
  <option value="baz">baz</option>
</select>
```
In the other hand, if the classic `<select`> does not suit you, if you need to create complexe dropdowns, you can use the following code, it uses the same options, the only thing you will need to do is add an HTML element with the following class `.Dropdown-value`.

```html
<div class="Dropdown" data-tapestry="dropdown-select">
  <input name="" hidden>
  <button class="Dropdown-toggle Btn" aria-controls="dropdownSelectExample" aria-expanded="true">
    <span class="Dropdown-value"></span>
  </button>
  <ul id="dropdownSelectExample" class="Dropdown-list">
    <li class="Dropdown-item" data-value="foo">
      Simple label 1
    </li>
    <li class="Dropdown-item" data-value="bar" aria-selected="true">
      Simple label 2
    </li>
    <li class="Dropdown-item" data-value="baz" data-label="Custom label 3">
      Simple label 3
    </li>
  </ul>
</div>
```


