# Icons

## Generic syntax

```html
<i class="icon icon-wisembly"></i>
```

## List
```html
<% _.each(glyphs, function (glyph) { %>
<div class="Styleguide-iconWrapper">
  <div class="Styleguide-iconItem">
    <i class="icon icon-<%= glyph.name %>"></i>
  </div>
  <div class="Styleguide-iconDescription">
    <%= glyph.name %>
  </div>
</div>
<% }); %>
```