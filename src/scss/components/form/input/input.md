# Inputs

* NB: `aria-label` is an attribute that can be used with an input when it is not possible to include a HTML label element.
`aria-label` must not be used when there is a visible label.

```html
<fieldset class="Fieldset">
  <input class="Input" type="text" placeholder="Basic input" aria-label="Input item">
</fieldset>

<fieldset class="Fieldset">
  <input class="Input Input--block" type="text" placeholder="Input--block" aria-label="Input item">
</fieldset>
```

## Addons

```html
<fieldset class="Fieldset">
  <div class="Input-addOn Input-addOn--prefix">@</div>
  <input class="Input Input--prefixed" type="text" placeholder="Basic input with addon" aria-label="Input item">
</fieldset>

<fieldset class="Fieldset">
  <input class="Input Input--suffixed" type="text" placeholder="Input--block" aria-label="Input item">
  <div class="Input-addOn Input-addOn--suffix">.com</div>
</fieldset>
```
