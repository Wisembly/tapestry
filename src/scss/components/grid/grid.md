# Grid

A 12 columns/grid-cells grid

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
      <td class="Table-cell Table-cell--important u-tal" style="width: 25%;">$grid-column-number</td>
      <td class="Table-cell">number</td>
      <td class="Table-cell">grid column number<br><code>12</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal" style="width: 25%;">$grid-responsive-range</td>
      <td class="Table-cell">map</td>
      <td class="Table-cell">lists devices to generate responsive grid systems, matches with $breakpoints map<br><code>(phablet, tablet, laptop)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal" style="width: 25%;">$grid-gutter-width</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">gutter width<br><code>r(4)</code></td>
    </tr>
  </tbody>
</table>
```



```html
<div class="Grid">
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--2">2</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--3">3</div>
  <div class="Grid-cell Grid-cell--3">3</div>
  <div class="Grid-cell Grid-cell--3">3</div>
  <div class="Grid-cell Grid-cell--3">3</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--4">4</div>
  <div class="Grid-cell Grid-cell--4">4</div>
  <div class="Grid-cell Grid-cell--4">4</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--5">5</div>
  <div class="Grid-cell Grid-cell--7">7</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--6">6</div>
  <div class="Grid-cell Grid-cell--6">6</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--7">7</div>
  <div class="Grid-cell Grid-cell--5">5</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--8">8</div>
  <div class="Grid-cell Grid-cell--4">4</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--9">9</div>
  <div class="Grid-cell Grid-cell--3">3</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--10">10</div>
  <div class="Grid-cell Grid-cell--2">2</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--11">11</div>
  <div class="Grid-cell Grid-cell--1">1</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--12">12</div>
</div>
```



## Grid with gutters

```html
<div class="Grid Grid--gutters">
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
  <div class="Grid-cell Grid-cell--1">1</div>
</div>
<div class="Grid Grid--gutters">
  <div class="Grid-cell Grid-cell--9">9</div>
  <div class="Grid-cell Grid-cell--3">3</div>
</div>
<div class="Grid Grid--gutters">
  <div class="Grid-cell Grid-cell--4">4</div>
  <div class="Grid-cell Grid-cell--4">4</div>
  <div class="Grid-cell Grid-cell--4">4</div>
</div>
<div class="Grid Grid--gutters">
  <div class="Grid-cell Grid-cell--5">5</div>
  <div class="Grid-cell Grid-cell--7">7</div>
</div>
```



## Centered Grid-cells

```html
<div class="Grid">
  <div class="Grid-cell Grid-cell--3 Grid-cell--centered">3 centered</div>
</div>
<div class="Grid">
  <div class="Grid-cell Grid-cell--6 Grid-cell--centered">6 centered</div>
</div>
```



## Flexible Grid-cells

.Grid-cell--fr uses the remaining space. Grid-cells can be set with fixed and fluid widths.
```html
<div class="Grid">
  <div class="Grid-cell Grid-cell--2">2</div>
  <div class="Grid-cell Grid-cell--fr">Remaining space</div>
  <div class="Grid-cell" style="width: 100px;">100px</div>
</div>
```



## Responsive Grid-cells
Grid-cells width can change according to viewport. Use .Grid-cell--n@phablet for viewport greater than 414px, .Grid-cell-n@tablet for viewport greater than 768px and .Grid-cell-n@laptop for viewport greater than 1024px.
```html
<div class="Grid">
  <div class="Grid-cell Grid-cell--12 Grid-cell--6@tablet Grid-cell--2@laptop">2 | 6@tablet | 12@laptop</div>
  <div class="Grid-cell Grid-cell--12 Grid-cell--6@tablet Grid-cell--2@laptop">2 | 6@tablet | 12@laptop</div>
  <div class="Grid-cell Grid-cell--12 Grid-cell--12@tablet Grid-cell--4@laptop">4 | 12@tablet | 12@laptop</div>
  <div class="Grid-cell Grid-cell--6 Grid-cell--3@tablet Grid-cell--1@laptop">1 | 3@tablet | 6@laptop</div>
  <div class="Grid-cell Grid-cell--6 Grid-cell--3@tablet Grid-cell--1@laptop">1 | 3@tablet | 6@laptop</div>
  <div class="Grid-cell Grid-cell--6 Grid-cell--3@tablet Grid-cell--1@laptop">1 | 3@tablet | 6@laptop</div>
  <div class="Grid-cell Grid-cell--6 Grid-cell--3@tablet Grid-cell--1@laptop">1 | 3@tablet | 6@laptop</div>
</div>
```
