# Box
A box is used to create a grouping of related content.
By default, boxes don't have paddings, you need to structure with `Box-header` and/or `Box-content`

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
<div class="Box">
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
<div class="Boxes">
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
