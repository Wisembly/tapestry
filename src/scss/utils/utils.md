# Utility classes

Utility classes help you to add some common behaviors to elements. We decided to used [Emmet syntax](http://docs.emmet.io/abbreviations/syntax/) to make them shorter and accessible. They are prefixed with <code>u-</code> to make them more readable.

## Text alignment

| Class  | value  | desc.                    |
|--------|--------|--------------------------|
| .u-tac | center | centers text             |
| .u-tar | right  | aligns text on the right |
| .u-tal | left   | aligns text on the left  |



## Floating

| Class   | value  | desc.               |
|---------|--------|---------------------|
| .u-push | right  | floats to the right |
| .u-pull | left   | floats to the left  |



## Vertical alignment

| Class  | value  | desc.                                 |
|--------|--------|---------------------------------------|
| .u-vam | middle | sets vertical alignment in the middle |
| .u-vat | top    | sets vertical alignment at the top    |
| .u-vab | bottom | sets vertical alignment at the bottom |



## Reset default style

You can reset styles for `<ul>`

```html
<ul class="r-list">
  <li>Foo</li>
  <li>Bar</li>
</ul>
<ul class="r-list">
  <li>Baz</li>
  <li>Foobar</li>
</ul>
```


## Spacing

- Size values: <code>0</code> | <code>xs</code> | <code>s</code> | <code>m</code> | <code>l</code> | <code>xl</code>
- Direction values (optional): <code>t</code> (top) | <code>r</code> (right) | <code>b</code> (bottom) | <code>l</code> (left)

| Syntax/class                          | desc.             |
|---------------------------------------|-------------------|
| .u + -property (+ direction) + --size | -                 |
| .u-mg--0                              | No margin         |
| .u-pdt--s                             | Small padding-top |



## Sass helpers

| Helper    | desc.                                                                                                                                  |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------|
| r(x)      | to set vertical rhythm of a module, where X is an integer for vertical unit                                                            |
| rb(x,y,z) | to set vertical rhythm of a module if it has a border, where X is an integer for vertical unit, Y the border width and Z the font size |
| fz(x)     | to set font size if $fz--modifiers are not enough and keep vertical rhythm                                                             |



## Div colorizers

| Class       | desc.                                                          |
|-------------|----------------------------------------------------------------|
| .u-neutral  | adds a neutral layout: white text, grey background             |
| .u-validate | adds a validation-related layout: white text, green background |
| .u-info     | adds a informative layout: white text, orange background       |
| .u-error    | adds a error-related layout: white text, red background        |
