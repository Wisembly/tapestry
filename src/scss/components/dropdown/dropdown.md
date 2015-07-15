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
      Simple label 2 <i class="Icon Icon--calendar"></i>
    </li>
    <li class="Dropdown-item" data-value="baz" data-label="Custom label 3">
      Simple label 3
    </li>
  </ul>
</div>
```

## Native select

```html
<select name="">
  <option value="foo" selected>foo</option>
  <option value="bar" >bar</option>
  <option value="baz">baz</option>
</select>
```

## Native select with placeholder

```html
<select name="">
  <option value="">My Placeholder</option>
  <option value="foo">foo</option>
  <option value="bar">bar</option>
  <option value="baz">baz</option>
</select>
```

## Native select with custom label

```html
<select name="">
  <option value="foo" data-label="Foo Label">foo</option>
  <option value="bar" data-label="Bar Label">bar</option>
  <option value="baz" data-label="Baz Label">baz</option>
</select>
```

## Many options

```html
<select name="">
  <option value="value0">label 0</option>
  <option value="value1">label 1</option>
  <option value="value2">label 2</option>
  <option value="value3">label 3</option>
  <option value="value4">label 4</option>
  <option value="value5">label 5</option>
  <option value="value6">label 6</option>
  <option value="value7">label 7</option>
  <option value="value8">label 8</option>
  <option value="value9">label 9</option>
  <option value="value10">label 10</option>
  <option value="value11">label 11</option>
  <option value="value12">label 12</option>
  <option value="value13">label 13</option>
  <option value="value14">label 14</option>
  <option value="value15">label 15</option>
  <option value="value16">label 16</option>
  <option value="value17">label 17</option>
  <option value="value18">label 18</option>
  <option value="value19">label 19</option>
  <option value="value20">label 20</option>
  <option value="value21">label 21</option>
  <option value="value22">label 22</option>
  <option value="value23">label 23</option>
  <option value="value24">label 24</option>
  <option value="value25">label 25</option>
  <option value="value26">label 26</option>
  <option value="value27">label 27</option>
  <option value="value28">label 28</option>
  <option value="value29">label 29</option>
  <option value="value30">label 30</option>
  <option value="value31">label 31</option>
  <option value="value32">label 32</option>
  <option value="value33">label 33</option>
  <option value="value34">label 34</option>
  <option value="value35">label 35</option>
  <option value="value36">label 36</option>
  <option value="value37">label 37</option>
  <option value="value38">label 38</option>
  <option value="value39">label 39</option>
</select>
```
