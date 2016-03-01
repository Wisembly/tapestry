# Table

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
      <td class="Table-cell Table-cell--important u-tal">$table-pdv</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">table vertical padding<br><code>$pd--s</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$table-pdh</td>
      <td class="Table-cell">padding</td>
      <td class="Table-cell">table horizontal padding<br><code>$pd--m</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$selected-table-row-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">selected table-row background-color<br><code>$alabaster</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$disabled-table-row-bg</td>
      <td class="Table-cell">background-color</td>
      <td class="Table-cell">disabled table-row background-color<br><code>$alabaster</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$table-cell-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">table-cell color<br><code>$slate-gray</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$important-table-cell-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">important table-cell color<br><code>$limed-spruce</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$disabled-table-cell-color</td>
      <td class="Table-cell">color</td>
      <td class="Table-cell">disabled table-cell color<br><code>$iron</code></td>
    </tr>
  </tbody>
</table>
```



```html
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Name</th>
    <th class="Table-cell Table-cell--header">Foo</th>
    <th class="Table-cell Table-cell--header">Bar</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">A name</td>
      <td class="Table-cell">Baz</td>
      <td class="Table-cell">FooBar</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">Another name</td>
      <td class="Table-cell">FooBaz</td>
      <td class="Table-cell">FooBarBaz</td>
    </tr>
  </tbody>
</table>
```



## Actionable

```html
<table class="Table Table--actionable">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Name</th>
    <th class="Table-cell Table-cell--header">Foo</th>
    <th class="Table-cell Table-cell--header">Bar</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">
        <input name="table1" id="table1" type="checkbox" class="Checkbox-input">
        <label for="table1" class="Checkbox-label">A name</label>
      </td>
      <td class="Table-cell">Baz</td>
      <td class="Table-cell">FooBar</td>
    </tr>
    <tr class="Table-row" aria-selected="true">
      <td class="Table-cell Table-cell--important u-tal">
        <input name="table2" id="table2" type="checkbox" class="Checkbox-input" checked>
        <label for="table2" class="Checkbox-label">Another name</label>
      </td>
      <td class="Table-cell">FooBaz</td>
      <td class="Table-cell">FooBarBaz</td>
    </tr>
    <tr class="Table-row" aria-disabled="true">
      <td class="Table-cell Table-cell--important u-tal">
        <input name="table3" id="table3" type="checkbox" class="Checkbox-input" disabled>
        <label for="table3" class="Checkbox-label">Another other name</label>
      </td>
      <td class="Table-cell">Foo</td>
      <td class="Table-cell">Bar</td>
    </tr>
  </tbody>
</table>
```
