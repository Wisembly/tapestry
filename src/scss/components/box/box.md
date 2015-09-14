# Box
A Box is used to create a grouping of related content.
By default, boxes don't have paddings, you need to structure them this way `box-header` and/or `box-content`

```html
<div class="Box">
  <div class="Box-header">
    <h4 class="Box-title">Title</h4>
  </div>
  <div class="Box-content">
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
    Donec eu libero sit amet quam egestas semper.
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
  </div>
</div>
```

## horizontal Boxes

```html
<div class="Boxes">
  <div class="Box">
    <div class="Box-content">
      Pellentesque habitant
    </div>
  </div>
  <div class="Box">
    <div class="Box-content">
      Pellentesque habitant
    </div>
  </div>
  <div class="Box">
    <div class="Box-content">
      Pellentesque habitant
    </div>
  </div>
</div>
<div class="Boxes Boxes--horizontal">
  <div class="Box">
    <div class="Box-header">
      <h4 class="Box-title">Title</h4>
    </div>
    <div class="Box-content">
      Pellentesque habitant
    </div>
  </div>
  <div class="Box">
    <div class="Box-header">
      <h4 class="Box-title">Title</h4>
    </div>
    <div class="Box-content">
      Pellentesque habitant
    </div>
  </div>
</div>
```

## Floated content

```html
<div class="Box">
  <div class="Box-content">
    <button type="button" class="Btn u-push">
      Float
    </button>
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
  </div>
</div>
```

## Complex example
This example shows how a table reacts if inserted outside `box-content`

```html
<div class="Box">
  <div class="Box-header">
    <h4 class="Box-title u-pull">Title</h4>
    <nav class="u-push">
      <a class="" href="#">Foo</a>
      <a class="" href="#">Bar</a>
      <a class="" href="#">Baz</a>
    </nav>
  </div>
  <div class="Box-content">
    <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
    Donec eu libero sit amet quam egestas semper.
    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </div>
  <table class="Table Table--actionnable">
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
</div>
```
