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
`<ul>` and `<li>` have a default style.

```html
<ul>
  <li>Foo</li>
  <li>Bar</li>
</ul>
```

### Reset lists

```html
<ul class="t-rList">
  <li class="t-rListItem">Foo</li>
  <li class="t-rListItem">Bar</li>
</ul>
<ul class="t-rList">
  <li class="t-rListItem">Baz</li>
  <li class="t-rListItem">Foobar</li>
</ul>
```

### Inlined list

```html
<ul class="t-rList t-rList--inline">
  <li class="t-rListItem">Foo - FooBar</li>
  <li class="t-rListItem"><a href="#">Bar - FooBaz</a></li>
</ul>
```

### Headlines

```html
<h2 class="t-sectionTitle">Overview</h2>
<h1 class="t-headline">Headline: I am supposed to be the title of the page.</h1>
<h4 class="t-subheadline">Subheadline: I am supposed to be under the title of the page.</h4>
```

### Paragraph

```html
<p class="t-title">Coda codum codae</p>
<p class="t-caption">Published a few centuries ago by <a href="#">Julius Caesar</a>.</p>
<p>I am a regular paragraph: <strong>lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat: <a href="#">go to link</a></p>
```

### Text colorizers

```html
<span class="t-neutral"><i class="Icon Icon--pellet"></i> Neutral</span>
<span class="t-validate"><i class="Icon Icon--pellet"></i> Validate</span>
<span class="t-info"><i class="Icon Icon--pellet"></i> Info</span>
<span class="t-error"><i class="Icon Icon--pellet"></i> Error</span>
```