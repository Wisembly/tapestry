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

## Columns alignment

### Align top

```html
<div class="Container">
  <div class="Row">
    <div class="Column Column-4 Column--alignTop">Sorry boss but there's only two men I trust. One of them's me. The other's not you.</div>
    <div class="Column Column-4">Put... the bunny... back... in the box.</div>
    <div class="Column Column-4">I'm gonna save the fuckin' day!</div>
  </div>
</div>
```

### Align middle

```html
<div class="Container">
  <div class="Row">
    <div class="Column Column-4 Column--alignMiddle">Sorry boss but there's only two men I trust. One of them's me. The other's not you.</div>
    <div class="Column Column-4 Column--alignMiddle">Put... the bunny... back... in the box.</div>
    <div class="Column Column-4 ">Sorry boss but there's only two men I trust. One of them's me. The other's not you.</div>
  </div>
</div>
```

### Align bottom

```html
<div class="Container">
  <div class="Row">
    <div class="Column Column-4">Sorry boss but there's only two men I trust. One of them's me. The other's not you.</div>
    <div class="Column Column-4 Column--alignBottom">Put... the bunny... back... in the box.</div>
    <div class="Column Column-4">I'm gonna save the fuckin' day!</div>
  </div>
</div>
```
