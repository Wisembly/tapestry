# Dropdown

```html
<div class="has-dropdown">
  <button class="Btn" aria-controls="dropdownBottomLeft" aria-expanded="true">Call to action</button>
	<ul id="dropdownBottomLeft" class="Dropdown">
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

### Bottom-centered

```html
<div class="has-dropdown">
  <button class="Btn" aria-controls="dropdownBottomCentered" aria-expanded="true">Call to action</button>
  <ul id="dropdownBottomCentered" class="Dropdown Dropdown--bc">
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

### Bottom-right

```html
<div class="has-dropdown">
  <button class="Btn" aria-controls="dropdownBottomRight" aria-expanded="true">Call to action</button>
  <ul id="dropdownBottomRight" class="Dropdown Dropdown--br">
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

### Top-left

```html
<div class="has-dropdown">
  <button class="Btn" aria-controls="dropdownTopLeft" aria-expanded="true">Call to action</button>
  <ul id="dropdownTopLeft" class="Dropdown Dropdown--tl">
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
### Top-centered

```html
<div class="has-dropdown">
  <button class="Btn" aria-controls="dropdownTopCentered" aria-expanded="true">Call to action</button>
	<ul id="dropdownTopCentered" class="Dropdown Dropdown--tc">
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

### Top-right

```html
<div class="has-dropdown">
  <button class="Btn" aria-controls="dropdownTopRight" aria-expanded="true">Call to action</button>
  <ul id="dropdownTopRight" class="Dropdown Dropdown--tr">
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

## Divider

```html
<div class="has-dropdown">
  <button class="Btn" aria-controls="dropdownDividerExemple" aria-expanded="true">Call to action</button>
  <ul id="dropdownDividerExemple" class="Dropdown Dropdown--bl" aria-labelledby="dropdownMenuDivider">
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
<div class="has-dropdown">
  <button class="Btn" aria-controls="dropdownDividerExemple" aria-expanded="true">Call to action</button>
	<ul id="dropdownDividerExemple" class="Dropdown Dropdown--bl" aria-labelledby="dropdownMenuDivider">
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

