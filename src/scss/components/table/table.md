# Table

```html
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Name</th>
    <th class="Table-cell Table-cell--header">First column</th>
    <th class="Table-cell Table-cell--header">Second and last column</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">A name</td>
      <td class="Table-cell">Ideas are everywhere.</td>
      <td class="Table-cell">Work hard, play hard.</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">Another name</td>
      <td class="Table-cell">Think big, get big.</td>
      <td class="Table-cell">Clients, not customers.</td>
    </tr>
  </tbody>
</table>
```


## Actionnable

```html
<table class="Table Table--actionnable">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Name</th>
    <th class="Table-cell Table-cell--header">First column</th>
    <th class="Table-cell Table-cell--header">Second and last column</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">
        <input class="Table-rowSelector" type="checkbox">
        A name
      </td>
      <td class="Table-cell">Ideas are everywhere.</td>
      <td class="Table-cell">Work hard, play hard.</td>
    </tr>
    <tr class="Table-row is-selected">
      <td class="Table-cell Table-cell--important u-tal">
        <input class="Table-rowSelector" type="checkbox" checked>
        Another name
      </td>
      <td class="Table-cell">Think big, get big.</td>
      <td class="Table-cell">Clients, not customers.</td>
    </tr>
  </tbody>
</table>
```
