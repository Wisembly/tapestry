# Inputs

* NB: `aria-label` is an attribute that can be used with an input when it is not possible to include a HTML label element.
`aria-label` must not be used when there is a visible label.


Input is displayed as a 100% width by default.
```html
<div class="FormRow">
  <label for="basicInput" class="Label">Foo</label>
  <input id="basicInput" class="Input" type="text" placeholder="Basic input" aria-label="Input item">
</div>
```
You can inline you inputs and label by adding `--inline` to their classes
```html
<div class="FormRow">
  <label for="fooLabel" class="Label Label--inline">Foo</label>
  <input id="fooLabel" class="Input Input--inline" type="text" placeholder="" aria-label="Input item">
</div>

<div class="FormRow">
  <input id="barLabel" class="Input Input--inline" type="text" placeholder="" aria-label="Input item">
  <label for="barLabel" class="Label Label--inline">Bar</label>
</div>
```

## Addons

```html
<div class="FormRow">
  <div class="InputGroup">
    <span class="InputGroup-item Input-addOn">@</span>
    <input class="Input InputGroup-item" type="text" placeholder="Basic input with addon" aria-label="Input item">
  </div>
</div>
<div class="FormRow">
  <div class="InputGroup">
    <input class="Input InputGroup-item" type="text" placeholder="Basic input with addon" aria-label="Input item">
    <button class="Btn Btn--validate InputGroup-item Input-addOn">Add</button>
  </div>
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

```html

<div class="InputGroup">
  <input class="Input InputGroup-item" id="InputGrouped11" placeholder="Search…" aria-label="Search aria label">
  <select class="InputGroup-item" name="">
    <option value="">Chose a foobar option</option>
    <option value="foo" selected>foo</option>
    <option value="bar" data-label="Foo Label">bar</option>
    <option value="baz">baz</option>
  </select>
  <button class="Btn Input-addOn InputGroup-item" id="InputGrouped4" placeholder="input" aria-label="Input item 4">Search</button>
</div>
```

## States
Tapestry doesn't rely on neither :valid nor :invalid since those behaviors are quite random. When page is loaded, inputs are considered :valid even if their values are empty. Plus, it adds visual noise before you submit anything! We advise to use `.is-valid` and `.is-invalid` but classes are fully customizable. You can also consider giving a try to [ParsleyJS](http://parsleyjs.org/).

```html
<div class="FormRow">
  <label for="validInput" class="Label">Validated input</label>
  <input id="validInput" class="Input is-valid" type="text" value="I am a correct value" placeholder="Valid input">
</div>
<div class="FormRow">
  <label for="invalidInput" class="Label">Errored input</label>
  <input id="invalidInput" class="Input is-invalid" type="text" value="I am an incorrect value" placeholder="Invalid input">
</div>
```
