# Form

## Inputs

```html
<label class="Label" for="input1">Label</label>
<input class="Input" type="text" id="input1" placeholder="Input" aria-label="Input item">
```
NB: `aria-label` is an attribute that can be used with an input when it is not possible to include a HTML label element.
`aria-label` must not be used when there is a visible label.

### Types

```html
<div class="InputWrapper">
  <div class="Input-addOn">@</div>
  <input class="Input" type="text" id="input3" placeholder="Input" aria-label="Input item">
</div>
```

```html
<div class="InputWrapper">
  <input class="Input Input--appended" type="text" id="input3" placeholder="Input" aria-label="Input item">
  <div class="Input-addOn">.com</div>
</div>
```

## Checkbox

```html
<input type="checkbox" class="Checkbox" id="Checkbox">
<label class="Label Label--inline" for="Checkbox">Input Checkbox</label>
```

## Input-group

```html
<div class="InputGroup">
    <input class="Input InputGroup-item" id="InputGrouped1" placeholder="input" aria-label="Input item 1">
    <input class="Input InputGroup-item" id="InputGrouped2" placeholder="input" aria-label="Input item 2">
    <input class="Input InputGroup-item" id="InputGrouped3" placeholder="input" aria-label="Input item 3">
    <input class="Input InputGroup-item" id="InputGrouped4" placeholder="input" aria-label="Input item 4">
</div>
```

## Radio

```html
<input type="radio" class="Radio" id="radioInput">
<label class="Label Label--inline" for="radioInput">Input Radio</label>
```


## Textareas

```html
<label class="Label" for="textarea1">Label</label>
<textarea class="Textarea" placeholder="Textarea" id="textarea1"></textarea>
```

### Types

```html
<label class="Label has-placeholder" for="textarea2">Label</label>
<textarea class="Textarea Textarea--count" placeholder="Textarea" id="textarea2"></textarea>
<span class="Textarea-counter">140</span>
```

## Options

You may not need to display labels and placeholders. Easy to fallback with IE lte 8.
```html
<label class="Label has-placeholder" for="input2">Label</label>
<input class="Input" type="text" id="input2" placeholder="Input">
```
