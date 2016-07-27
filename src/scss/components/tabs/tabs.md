# Tabs

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
      <td class="Table-cell Table-cell--important u-tal">$tab-base-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">tab base color<br><code>$slate-gray</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tab-selected-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">tab selected color<br><code>$venice-blue</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tab-hover-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">tab hover color<br><code>$venice-blue</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tab-underline-size</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">tab underline size<br><code>rem(3px)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$small-tab-underline-size</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">small tab underline size<br><code>rem(2px)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tab-space-between</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">space between tabs<br><code>$mg--m</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tab-link-pdv</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">tab-link vertical padding<br><code>$pd--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tab-link-pdh</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">tab-link horizontal padding<br><code>0</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$small-tab-pdr</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">small tab right padding<br><code>$pd--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$small-tab-pdb</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">small tab bottom padding<br><code>$pd--m</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$small-tab-lh</td>
      <td class="Table-cell">line-height</td>
      <td class="Table-cell">small tab line-height <br><code>r(6)</code></td>
    </tr>
  </tbody>
</table>
```



```html
<ul class="Tabs">
  <li class="Tab-item" aria-selected="true">
    <a class="Tab-link" tabindex="0" href="#foo">
      Foo selected
    </a>
  </li>
  <li class="Tab-item" aria-selected="false">
    <a class="Tab-link" tabindex="-1" href="#bar">
      Bar thing thing
    </a>
  </li>
  <li class="Tab-item" aria-selected="false">
    <a class="Tab-link" tabindex="-1" href="#baz">
      Baz thing thing
    </a>
  </li>
</ul>
```



## Size S

```html
<ul class="Tabs Tabs--s">
  <li class="Tab-item" aria-selected="true">
    <a class="Tab-link" tabindex="0" href="#foo">
      Foo selected
    </a>
  </li>
  <li class="Tab-item" aria-selected="false">
    <a class="Tab-link" tabindex="-1" href="#bar">
      Bar thing thing
    </a>
  </li>
  <li class="Tab-item" aria-selected="false">
    <a class="Tab-link" tabindex="-1" href="#baz">
      Baz thing thing
    </a>
  </li>
</ul>
```
