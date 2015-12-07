# Inputs

* NB: `aria-label` is an attribute that can be used with an input when it is not possible to include a HTML label element.
`aria-label` must not be used when there is a visible label.


Input is displayed as a 100% width by default.
```html
<div class="FormRow">
  <label class="Label">Foo</label>
  <input class="Input" type="text" placeholder="Basic input" aria-label="Input item">
</div>
```
You can inline you inputs and label by adding `--inline` to their classes
```html
<div class="FormRow">
  <label class="Label Label--inline">Bar</label>
  <input class="Input Input--inline" type="text" placeholder="" aria-label="Input item">
</div>

<div class="FormRow">
  <input class="Input Input--inline" type="text" placeholder="" aria-label="Input item">
  <label class="Label Label--inline">Bar</label>
</div>
```

## Addons

```html
<div class="FormRow">
  <div class="InputGroup">
    <div class="Input InputGroup-item Input-addOn">@</div>
    <input class="Input InputGroup-item" type="text" placeholder="Basic input with addon" aria-label="Input item">
  </div>
</div>
<div class="FormRow">
  <div class="InputGroup">
    <input class="Input InputGroup-item" type="text" placeholder="Basic input with addon" aria-label="Input item">
    <button class="Btn Btn--validate InputGroup-item Input-addOn">Add</button>
  </div>
</div>
<div class="FormRow">

    <input class="Input" type="text" placeholder="Basic input with addon" aria-label="Input item">
    <button class="Btn Btn--validate">Add</button>

</div>
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
