# Icons

## Generic syntax

```html
<i class="Icon Icon--wisembly"></i>
```

## List
```list
<% _.each(glyphs, function (glyph) { %>
<div class="Styleguide-iconWrapper">
  <div class="Styleguide-iconItem">
    <i class="Icon Icon--<%= glyph.name %>"></i>
  </div>
  <div class="Styleguide-iconDescription">
    <%= glyph.name %>
  </div>
</div>
<% }); %>
```