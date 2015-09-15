# Typography

## Heading (html tag)

```html
<h1>Basic h1</h1>
<h2>Basic h2</h2>
<h3>Basic h3</h3>
<h4>Basic h4</h4>
<h5>Basic h5</h5>
```

## Body text (html tag)

```html
<p>Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<p>Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
<small>Nulla vitae elit libero, a pharetra augue.</small>
```

## List
`<ul>` and `<li>` are reset by default.

### Regular list

```html
<ul class="t-List">
  <li class="t-ListItem">Foo</li>
  <li class="t-ListItem">Bar</li>
</ul>
<ul class="t-List">
  <li class="t-ListItem">Baz</li>
  <li class="t-ListItem">Foobar</li>
</ul>
```

### Inlined list

```html
<ul class="t-List--inline">
  <li class="t-ListItem">Foo - FooBar</li>
  <li class="t-ListItem"><a href="#">Bar - FooBaz</a></li>
</ul>
```

### Headlines

```html
<h2 class="t-SectionTitle">Overview</h2>
<h1 class="t-Headline">Headline: I am supposed to be the title of the page.</h1>
<h4 class="t-Subheadline">Subheadline: I am supposed to be under the title of the page.</h4>
```

### Paragraph

```html
<p class="t-Title">Coda codum codae</p>
<p class="t-Caption">Published a few centuries ago by <a href="#">Julius Caesar</a>.</p>
<p>I am a regular paragraph: <strong>lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat: <a href="#">go to link</a></p>
```
