# Utility classes

Utility classes help you to add some common behaviors to elements. We decided to used [Emmet syntax](http://docs.emmet.io/abbreviations/syntax/) to make them shorter and accessible. They are prefixed with <code>u-</code> to make them more readable.

## Text alignment

```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Class</th>
    <th class="Table-cell Table-cell--header">CSS value</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-tac</code></td>
      <td class="Table-cell">center</td>
      <td class="Table-cell">Centers text alignment</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-tar</code></td>
      <td class="Table-cell">right</td>
      <td class="Table-cell">Aligns text on the right</td>
  </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-tal</code></td>
      <td class="Table-cell">left</td>
      <td class="Table-cell">Aligns text on the left</td>
    </tr>
  </tbody>
</table>
```


## Floating

```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Class</th>
    <th class="Table-cell Table-cell--header">CSS value</th>
    <th class="Table-cell Table-cell--header">Description</th>
</thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-push</code></td>
      <td class="Table-cell">right</td>
      <td class="Table-cell">Floats to the right</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-pull</code></td>
      <td class="Table-cell">left</td>
      <td class="Table-cell">Floats to the left</td>
    </tr>
  </tbody>
</table>
```


## Vertical alignment

```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Class</th>
    <th class="Table-cell Table-cell--header">CSS value</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-vam</code></td>
      <td class="Table-cell">middle</td>
      <td class="Table-cell">Sets vertical alignment in the middle</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-vat</code></td>
      <td class="Table-cell">top</td>
      <td class="Table-cell">Sets vertical alignment at the top</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-vab</code></td>
      <td class="Table-cell">bottom</td>
      <td class="Table-cell">Sets vertical alignment at the bottom</td>
    </tr>
  </tbody>
</table>
```

## Reset default style

You can reset styles for `<ul>`

```html
<ul>
  <li>Default ul list</li>
</ul>

<ul class="u-resetList">
  <li>ul reseted</li>
</ul>
```


## Spacing

- Size values: <code>0</code> | <code>xs</code> | <code>s</code> | <code>m</code> | <code>l</code> | <code>xl</code>
- Direction values (optional): <code>t</code> (top) | <code>r</code> (right) | <code>b</code> (bottom) | <code>l</code> (left)

```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Syntax</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u + -property (+ direction) + --size</code></td>
      <td class="Table-cell"><code>.u-mg--l</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-mg--0</code></td>
      <td class="Table-cell">No margin</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-pdt--s</code></td>
      <td class="Table-cell">Small padding-top</td>
    </tr>
  </tbody>
</table>
```

## Sass helpers

```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Syntax</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">r(x)</td>
      <td class="Table-cell">To set vertical rhythm of a module, where X is an integer for vertical unit</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">rb(x,y,z)</td>
      <td class="Table-cell">To set vertical rhythm of a module if it has a border, where X is an integer for vertical unit, Y the border width and Z the font size  </td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">fz(x)</td>
      <td class="Table-cell">To set font size if $fz--modifiers are not enough and keep vertical rhythm</td>
    </tr>
  </tbody>
</table>
```

## Div colorizers

```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Syntax</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-neutral</code></td>
      <td class="Table-cell">Adds a neutral layout: white text, grey background.</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-validate</code></td>
      <td class="Table-cell">Adds a validation-related layout: white text, green background.</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-info</code></td>
      <td class="Table-cell">Adds a informative layout: white text, orange background.</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal"><code>.u-error</code></td>
      <td class="Table-cell">Adds a error-related layout: white text, red background.</td>
    </tr>
  </tbody>
</table>
```
