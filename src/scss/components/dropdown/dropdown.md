# Dropdown

## Variables

| Variable                                 | property         | value           | desc.                                      |
|------------------------------------------|------------------|-----------------|--------------------------------------------|
| ** $dropdown-base-fz **                  | font-size        | `$fz--m`        | dropdown font-size                         |
| ** $dropdown-small-fz **                 | font-size        | `$fz--s`        | small dropdown font-size                   |
| ** $dropdown-min-width **                | min-width        | `r(56)`         | dropdown min-width                         |
| ** $dropdown-max-height **               | max-height       | `r(30)`         | dropdown max-height                        |
| ** $dropdown-toggle-pdv **               | padding          | `r(1)`          | dropdown-toggle vertical padding           |
| ** $dropdown-toggle-pdh **               | padding          | `r(2)`          | dropdown-toggle horizontal padding         |
| ** $dropdown-toggle-array-width **       | width            | `r(6)`          | dropdown-toggle array width                |
| ** $small-dropdown-toggle-array-width ** | width            | `r(5)`          | small dropdown-toggle array width          |
| ** $dropdown-toggle-bg **                | background-color | `$transparent`  | dropdown-toggle background                 |
| ** $dropdown-toggle-color **             | color            | `$slate-gray`   | dropdown-toggle color                      |
| ** $dropdown-toggle-hover-color **       | color            | `$shuttle-gray` | dropdown-toggle color on :hover            |
| ** $dropdown-toggle-expanded-color **    | color            | `$shuttle-gray` | dropdown-toggle color on expanded dropdown |
| ** $dropdown-list-bg **                  | background-color | `$white`        | dropdown-list background                   |
| ** $dropdown-list-border-color **        | background-color | `$iron`         | dropdown-list border-color                 |
| ** $dropdown-item-base-color **          | color            | `$shuttle-gray` | dropdown-item color                        |
| ** $dropdown-item-hover-color **         | color            | `$white`        | dropdown-item color on :hover              |
| ** $dropdown-item-focus-color **         | color            | `$shuttle-gray` | dropdown-item color on :focus              |
| ** $dropdown-item-base-bg **             | background-color | `$transparent`  | dropdown-item background                   |
| ** $dropdown-item-hover-bg **            | background-color | `$gray-chateau` | dropdown-item background on: hover         |
| ** $dropdown-item-selected-bg **         | background-color | `$porcelain`    | selected dropdown-item background          |
| ** $dropdown-item-mg **                  | margin           | `$mg--xs`       | dropdown-item margin                       |
| ** $dropdown-item-pd **                  | padding          | `$pd--xs`       | dropdown-item padding                      |


```html
<div class="Dropdown" data-tapestry="dropdown">
  <button type="button" class="Dropdown-toggle" aria-controls="" aria-expanded="false">Open dropdown</button>
  <ul class="Dropdown-list">
    <li class="Dropdown-item">
      Simple label
    </li>
    <li>
      <a href="#" class="Dropdown-item">
        Linked label
      </a>
    </li>
    <li class="Dropdown-item" aria-disabled="true">
      Disabled label
    </li>
  </ul>
</div>
<div class="Dropdown Dropdown--s" data-tapestry="dropdown">
  <button type="button" class="Dropdown-toggle" aria-controls="" aria-expanded="false">Open small dropdown</button>
  <ul class="Dropdown-list">
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

Modifiers available (starting points, Dropdown-list are never overlaying Dropdown-toggle, except in auto-scroll mode):
- `-tl`: top-left,
- `-tc`: top-center,
- `-tr`: top-right,
- `-bl`: [default] bottom-left,
- `-bc`: bottom-center,
- `-br`: bottom-right,
- `-rt`: right-top,
- `-rc`: right-center,
- `-rb`: right-bottom,
- `-lt`: left-top,
- `-lc`: left-center,
- `-lb`: left-bottom



## Divider

```html
<div class="Dropdown" data-tapestry="dropdown">
  <button type="button" class="Dropdown-toggle" aria-controls="dropdownDividerExample" aria-expanded="false">Call to action</button>
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

The easiest way to create a `<select>` is, indeed, to use the classic `<select>` with the attribute `data-tapestry="dropdown-select"`. It will be transformed into a custom select with the Tapestry look & feel.<br>
The `data-label` attribute will display a custom value.
You can also use an `<option>` to create a placeholder.

```html
<select name="" data-tapestry="dropdown-select">
  <option value="">Choose a foobar option</option>
  <option value="foo" selected>foo</option>
  <option value="bar" data-label="Foo Label">bar</option>
  <option value="baz">baz</option>
</select>
```
In the other hand, if the classic `<select`> does not suit you, if you need to create complexe dropdowns, you can use the following code, it uses the same options, the only thing you will need to do is add an HTML element with the following class `.Dropdown-value`.

```html
<div class="Dropdown" data-tapestry="dropdown-select">
  <input name="" value="bar" hidden>
  <button type="button" class="Dropdown-toggle Dropdown-selectInput" aria-controls="dropdownSelectExample" aria-expanded="false">
    <span class="Dropdown-value"></span>
  </button>
  <ul id="dropdownSelectExample" class="Dropdown-list">
    <li class="Dropdown-item" data-value="">
      Simple label 1
    </li>
    <li class="Dropdown-item" data-value="bar" aria-selected="true">
      Simple label 2
    </li>
    <li class="Dropdown-item" data-value="baz" data-label="Custom label 3">
      Simple label 3
    </li>
    <li class="Dropdown-item" data-value="foobar" aria-disabled="true">
      Disabled label
    </li>
  </ul>
</div>
```



## Options

| Name          | Type    | Default | Description                                 |
|---------------|---------|---------|---------------------------------------------|
| `placeholder` | String  | ""      | Display a placeholder when needed.           |
| `scroll`      | Boolean | false   | auto-scroll list to the selected item.      |
| `keyboard`    | Boolean | true    | Enable keyboard controls.                   |
| `wheel`       | Boolean | false   | Enable mouse wheel controls. (Experimental) |

Options can be set both using `data-xxx` attributes or through `$.fn.dropddownSelect`
Update: 'data-value' can be null.

```html
  <div class="Dropdown" data-keyboard="true" data-placeholder="My Placeholder"></div>
```

```javascript
  <script>
    $(".my-dropdown-select").dropdownSelect({
      placeholder: "My Placeholder",
      keyboard: true,
      wheel: true,
      scroll: true
    });
  </script>
```
