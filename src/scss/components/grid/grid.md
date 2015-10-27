# Grid

A 12 column grid <br/>
You can overide the `$column-number` variable

```html
<div class="Container">
  <div class="Row">
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-1">1</div>
  </div>
  <div class="Row">
    <div class="Column Column-2">2</div>
    <div class="Column Column-2">2</div>
    <div class="Column Column-2">2</div>
    <div class="Column Column-2">2</div>
    <div class="Column Column-2">2</div>
    <div class="Column Column-2">2</div>
  </div>
  <div class="Row">
    <div class="Column Column-3">3</div>
    <div class="Column Column-3">3</div>
    <div class="Column Column-3">3</div>
    <div class="Column Column-3">3</div>
  </div>
  <div class="Row">
    <div class="Column Column-4">4</div>
    <div class="Column Column-4">4</div>
    <div class="Column Column-4">4</div>
  </div>
  <div class="Row">
    <div class="Column Column-5">5</div>
    <div class="Column Column-7">7</div>
  </div>
  <div class="Row">
    <div class="Column Column-6">6</div>
    <div class="Column Column-6">6</div>
  </div>
  <div class="Row">
    <div class="Column Column-7">7</div>
    <div class="Column Column-5">5</div>
  </div>
  <div class="Row">
    <div class="Column Column-8">8</div>
    <div class="Column Column-4">4</div>
  </div>
  <div class="Row">
    <div class="Column Column-9">9</div>
    <div class="Column Column-3">3</div>
  </div>
  <div class="Row">
    <div class="Column Column-10">10</div>
    <div class="Column Column-2">2</div>
  </div>
  <div class="Row">
    <div class="Column Column-11">11</div>
    <div class="Column Column-1">1</div>
  </div>
  <div class="Row">
    <div class="Column Column-12">12</div>
  </div>
</div>
```

## Centered columns

Center your columns by adding a class of `Column-centered` to your `Column`.

```html
<div class="Container">
  <div class="Row">
    <div class="Column Column-3 Column--centered">3 centered</div>
  </div>
  <div class="Row">
    <div class="Column Column-6 Column--centered">6 centered</div>
  </div>
</div>
```

## Flexible columns

Take benefit of CSS flex. `Column--fr` use the remaining space. Columns can be set with fixed and fluid width.
```html
<div class="Container">
  <div class="Row Row--flex">
    <div class="Column Column-2">2</div>
    <div class="Column Column-fr">Remaining space</div>
    <div class="Column" style="width: 100px;">100px</div>
  </div>
</div>
```

By default and when content has no `Column--fr` and content width is less than container width, columns are justified.
```html
<div class="Container">
  <div class="Row Row--flex">
    <div class="Column Column-3">3</div>
    <div class="Column Column-1" style="border-left: 1px solid #d5d9da;">1</div>
    <div class="Column Column-3" style="border-left: 1px solid #d5d9da;">3</div>
  </div>
</div>
```

Tip: use auto margin-left or auto margin-right to make a specific behavior.
```html
<div class="Container">
  <div class="Row Row--flex">
    <div class="Column Column-3">3</div>
    <div class="Column Column-1" style="margin-right: auto;">1</div>
    <div class="Column Column-3" style="border-left: 1px solid #d5d9da;">3</div>
  </div>
</div>
```

When content has no `Column--fr` and content width is less than container width, you can center columns with `Row--c`
```html
<div class="Container">
  <div class="Row Row--flex Row--c">
    <div class="Column Column-3">3</div>
    <div class="Column Column-1">1</div>
    <div class="Column Column-3">3</div>
  </div>
</div>
```
