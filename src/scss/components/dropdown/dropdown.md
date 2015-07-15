# Dropdown

```html
<div class="Dropdown" data-tapestry="dropdown">
  <button class="Btn" aria-controls="dropdownBottomLeft" aria-expanded="true">Call to action</button>
	<ul id="dropdownBottomLeft" class="Dropdown-list">
	  <li class="Dropdown-item">
	    Simple label
	  </li>
	  <li>
	    <a href="#" class="Dropdown-item is-active">
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
<div class="Dropdown">
  <button class="Btn" aria-controls="dropdownDividerExemple" aria-expanded="true">Call to action</button>
  <ul id="dropdownDividerExemple" class="Dropdown-list" aria-labelledby="dropdownMenuDivider">
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

## Selectable options

```html
<div class="Dropdown">
  <button class="Btn" aria-controls="dropdownDividerExemple" aria-expanded="true">Call to action</button>
	<ul id="dropdownDividerExemple" class="Dropdown-list" aria-labelledby="dropdownMenuDivider">
    <li class="Dropdown-item" aria-selected="false">
      Simple label 1
    </li>
    <li class="Dropdown-item" aria-selected="true">
      Simple label 2
    </li>
    <li class="Dropdown-item" aria-selected="true">
	    Simple label 3
	  </li>
	</ul>
</div>
```

