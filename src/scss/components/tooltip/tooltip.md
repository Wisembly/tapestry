# Tooltip

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
      <td class="Table-cell Table-cell--important u-tal">$tooltip-arrow-size</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">tooltip arrow size<br><code>rem(5px)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tooltip-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">tooltip background-color<br><code>rgba($black, .8)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tooltip-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">tooltip color<br><code>$white</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tooltip-space-between-content</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">space between tooltip and content<br><code>$mg--xs</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tooltip-width</td>
      <td class="Table-cell">width</td>
      <td class="Table-cell">tooltip width<br><code>10rem</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tooltip-large-width</td>
      <td class="Table-cell">width</td>
      <td class="Table-cell">large tooltip width<br><code>20rem</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$tooltip-pd</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">tooltip padding<br><code>$pd--s</code></td>
    </tr>
  </tbody>
</table>
```



```html
<p>Default <span class="has-tooltip" aria-label="Classic tooltip" style="font-weight: bold;">tooltip</span></p>
```



## Directions

```html
<p>Tooltip <span class="has-tooltip has-tooltip--top" aria-label="Tooltip on the top" style="font-weight: bold;">on the top</span></p>
```

```html
<p>Tooltip <span class="has-tooltip has-tooltip--right" aria-label="Tooltip on the right" style="font-weight: bold;">on the right</span></p>
```

```html
<p>Tooltip <span class="has-tooltip has-tooltip--bottom" aria-label="Tooltip on the bottom" style="font-weight: bold;">on the bottom</span></p>
```

```html
<p>Tooltip <span class="has-tooltip" aria-label="Tooltip on the left" style="font-weight: bold;">on the left</span></p>
```



## Sizes

```html
<p>Bigger <span class="has-tooltip has-tooltip--l has-tooltip--right" aria-label="Bigger tooltip for longer text, you know. Because longer text are more significants, because they contains more words, because they're more significants" style="font-weight: bold;">tooltip</span></p>
```
