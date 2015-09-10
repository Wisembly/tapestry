# Icons

## Generic syntax

```html
<i class="Icon Icon--wisembly"></i>
```

## Sizes

```html
<i class="Icon Icon--like Icon--s"></i>
<i class="Icon Icon--like Icon--l"></i>
<i class="Icon Icon--like Icon--xl"></i>
```

## List
```esc
<% _.each(glyphs, function (glyph) { %>
<div class="s-iconWrapper">
  <div class="s-iconItem">
    <i class="Icon Icon--<%= glyph.name %>"></i>
  </div>
  <div class="s-iconDescription">
    <%= glyph.name %>
  </div>
</div>
<% }); %>
```

## Animations

```html
<i class="Icon Icon--refresh is-spinning"></i>
```
