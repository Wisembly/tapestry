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
<div class="s-Icon">
  <i class="Icon Icon--<%= glyph.name %>"></i>
  <%= glyph.name %>
</div>
<% }); %>
```

## Animations

```html
<i class="Icon Icon--refresh is-spinning"></i>
```

## [Experimental] Using svg-symbols

```html
<svg class="Icon Icon--xl Icon--symbol">
  <use xlink:href="/fonts/tapestry-symbols.svg#like" />
</svg>
```
