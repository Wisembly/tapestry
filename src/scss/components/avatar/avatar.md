# Avatar

## Variables

| Variable                     | property      | value                                               | desc.                        |
|------------------------------|---------------|-----------------------------------------------------|------------------------------|
| ** $avatar-size--s **        | size          | `r(6)`                                              | small avatar diameter        |
| ** $avatar-size--m **        | size          | `r(8)`                                              | avatar diameter              |
| ** $avatar-size--l **        | size          | `r(10)`                                             | large avatar diameter        |
| ** $avatar-size--xl **       | size          | `r(14)`                                             | extra-large avatar diameter  |
| ** $avatar-squared-radius ** | border-radius | `rem(3px)`                                          | squared avatar border-radius |
| ** $avatar-colors **         | list          | `$gray-chateau $salmon $boston-blue $mint $saffron` | avatar colors                |



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
