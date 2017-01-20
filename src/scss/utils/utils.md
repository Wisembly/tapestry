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



## Clearfix

| Class   | desc.                            |
|---------|----------------------------------|
| .u-cf   | applies clearfix hack on element |



## Clearfix

| Class         | desc.                       |
|---------------|-----------------------------|
| .u-ellipsis   | applies ellipsis on element |



## Overflow

| Class    | desc.         |
|----------|---------------|
| .u-ovh   | hide overflow |



## Flex

| Class     | property       | value  | desc.                                          |
|-----------|----------------|--------|------------------------------------------------|
| .u-fl     | display        | flex   | sets flex display on element                   |
| .u-fld--r | flex-direction | row    | sets row flex-direction on element             |
| .u-fld--c | flex-direction | column | sets column flex-direction on element          |
| .u-flw    | flex-wrap      | wrap   | allows children wrapping                       |
| .u-flw--n | flex-wrap      | nowrap | disables children wrapping                     |
| .u-fl--n  | flex           | none   | flex-grow: 0, flex-shrink: 0, flex-basis: auto |
| .u-fl--a  | flex           | auto   | flex-grow: 1, flex-shrink: 1, flex-basis: auto |



## Hide

* .is-hidden
* .u-hidden
* .u-vhidden



## Vertical alignment

| Class   | value    | desc.                                   |
|---------|----------|-----------------------------------------|
| .u-vam  | middle   | sets vertical alignment in the middle   |
| .u-vat  | top      | sets vertical alignment at the top      |
| .u-vabl | baseline | sets vertical alignment at the baseline |
| .u-vab  | bottom   | sets vertical alignment at the bottom   |



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
