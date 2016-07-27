# Avatar

## Variables

```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal" style="width: 25%;">Name</th>
    <th class="Table-cell Table-cell--header" style="width: 10%;">Type</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$avatar-size--s</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">small avatar diameter<br><code>r(6)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$avatar-size--m</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">regular avatar diameter<br><code>r(8)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$avatar-size--l</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">large avatar diameter<br><code>r(10)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$avatar-size--xl</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">extra-large avatar diameter<br><code>r(14)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$avatar-squared-radius</td>
      <td class="Table-cell">size</td>
      <td class="Table-cell">squared avatar border-radius<br><code>rem(3px)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$avatar-colors</td>
      <td class="Table-cell">list</td>
      <td class="Table-cell">lists avatar colors<br><code>$gray-chateau $salmon $boston-blue $mint $saffron</code></td>
    </tr>
  </tbody>
</table>
```

## Sizes

```html
<img class="Avatar Avatar--s" src="http://assets-s3.usmagazine.com/uploads/assets/article_photos/tom-from-myspace-lg.jpg" alt=" " />
<img class="Avatar" src="http://assets-s3.usmagazine.com/uploads/assets/article_photos/tom-from-myspace-lg.jpg" alt=" " />
<img class="Avatar Avatar--l" src="http://assets-s3.usmagazine.com/uploads/assets/article_photos/tom-from-myspace-lg.jpg" alt=" " />
<img class="Avatar Avatar--xl" src="http://assets-s3.usmagazine.com/uploads/assets/article_photos/tom-from-myspace-lg.jpg" alt=" " />
```

## Colors

```html
<div class="Avatar Avatar--color1">1</div>
<div class="Avatar Avatar--color2">2</div>
<div class="Avatar Avatar--color3">3</div>
<div class="Avatar Avatar--color4">4</div>
<div class="Avatar Avatar--color5">5</div>
<div class="Avatar Avatar--color6">6</div>
```

## Initials

```html
<div class="Avatar Avatar--s Avatar--color1">AA</div>
<div class="Avatar Avatar--color2">BB</div>
<div class="Avatar Avatar--l Avatar--color3">CC</div>
<div class="Avatar Avatar--xl Avatar--color4">DD</div>
```

## Empty

```html
<div class="Avatar Avatar--s Avatar--empty"></div>
<div class="Avatar Avatar--empty"></div>
<div class="Avatar Avatar--l Avatar--empty"></div>
<div class="Avatar Avatar--xl Avatar--empty"></div>
```

## Squared

```html
<div class="Avatar Avatar--s Avatar--squared Avatar--color1">AA</div>
<img class="Avatar Avatar--squared" src="http://assets-s3.usmagazine.com/uploads/assets/article_photos/tom-from-myspace-lg.jpg" alt=" " />
<div class="Avatar Avatar--l Avatar--squared Avatar--color3">CC</div>
<div class="Avatar Avatar--xl Avatar--squared Avatar--empty"></div>
```
