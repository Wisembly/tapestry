# Inputs

```html
<label class="Label" for="input1">Label</label>
<input class="Input" type="text" id="input1" placeholder="Input">
```

## Sizes

```html
<label class="Label" for="largeInput">Label</label>
<input class="Input Input--s" type="text" id="largeInput" placeholder="Input">
```

## Options

You may not need to display labels and placeholders. Easy to fallback with IE lte 8.
```html
<label class="Label has-placeholder" for="input2">Label</label>
<input class="Input" type="text" id="input2" placeholder="Input">
```

## Types

```html
<div class="InputWrapper">
  <div class="Input-prependAddOn">@</div>
  <input class="Input Input--prepended" type="text" id="input3" placeholder="Input">
</div>
```

```html
<div class="InputWrapper">
  <input class="Input Input--appended" type="text" id="input3" placeholder="Input">
  <div class="Input-appendAddOn">.com</div>
</div>
```
