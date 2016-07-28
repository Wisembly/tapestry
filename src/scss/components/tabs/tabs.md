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
      <td class="Table-cell Table-cell--important u-tal">$insert-tab-border-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">insert-tab border-color <br><code>$silver-sand</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$small-tab-underline-size</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">small tab underline size<br><code>rem(2px)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tab-pdv</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">tab-link vertical padding<br><code>r(3)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tab-pdh</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">tab-link horizontal padding<br><code>r(2)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$insert-tab-vertical-pd</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">insert-tab horizontal padding<br><code>r(6)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tab-fz</td>
      <td class="Table-cell">font-size</td>
      <td class="Table-cell">tab font-size <br><code>$base-fz--rem</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tab-lh</td>
      <td class="Table-cell">line-height</td>
      <td class="Table-cell">tab line-height <br><code>$base-lh</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$small-tab-fz</td>
      <td class="Table-cell">font-size</td>
      <td class="Table-cell">small tab font-size <br><code>$base-fz--rem</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$small-tab-lh</td>
      <td class="Table-cell">line-height</td>
      <td class="Table-cell">small tab line-height <br><code>$base-lh</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$selected-tab-selector</td>
      <td class="Table-cell">selector</td>
      <td class="Table-cell">selected tab selector <br><code>"[aria-selected="true"]"</code></td>
    </tr>
  </tbody>
</table>
```



```html
<div class="Tabs">
  <a class="Tab" aria-selected="true" tabindex="0" href="#foo">
    Foo selected
  </a>
  <a class="Tab" aria-selected="false" tabindex="-1" href="#bar">
    Bar thing thing
  </a>
  <a class="Tab" aria-selected="false" tabindex="-1" href="#baz">
    Baz thing thing
  </a>
</div>
```



## Small

```html
<div class="Tabs Tabs--s">
  <a class="Tab" aria-selected="true" tabindex="0" href="#foo">
    Foo selected
  </a>
  <a class="Tab" aria-selected="false" tabindex="-1" href="#bar">
    Bar thing thing
  </a>
  <a class="Tab" aria-selected="false" tabindex="-1" href="#baz">
    Baz thing thing
  </a>
</div>
```


## Insert

Alternative to use when you have two levels of tabs

```html
<div class="Tabs Tabs--insert">
  <a class="Tab" aria-selected="false" tabindex="0" href="#foo">
    Foo selected
  </a>
  <a class="Tab" aria-selected="true" tabindex="-1" href="#bar">
    Bar thing thing
  </a>
  <a class="Tab" aria-selected="false" tabindex="-1" href="#baz">
    Baz thing thing
  </a>
  <div class="Tab Tab--fr"></div>
</div>
```
