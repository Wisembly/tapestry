# Loader

## Variables

| Variable                    | property         | value               | desc.                   |
|-----------------------------|------------------|---------------------|-------------------------|
| ** $loader-loading-class ** | class            | `".is-loading"`     | loader class on loading |
| ** loader-failed-class **   | class            | `".has-failed"`     | loader class on fail    |
| ** $loader-base-bg **       | background-color | `rgba($white, .95)` | loader background       |
| ** $loader-base-color **    | color            | `$shuttle-gray`     | loader color            |
| ** $loader-errored-color ** | color            | `$mandy`            | loader color on error   |
| ** $loader-inner-space **   | size             | `$pd--s`            | loader inner-space      |



## Basic

```html
<div class="is-loading">
  <div class="Loader">
    <div class="Loader-spinner Spinner Spinner--s"></div>
    <div class="Loader-label">Loading</div>
  </div>
</div>
```

## List

```html
<ul class="List is-loading">
  <li class="List-item">A</li>
  <li class="List-item">B</li>
  <li>
    <a href="#foo" class="List-item List-item--link is-actionable">D</a>
  </li>
  <li class="List-item Loader">
    <div class="Loader-spinner Spinner Spinner--s"></div>
    <div class="Loader-label">Loading…</div>
  </li>
</ul>
```

## Errors

```html
<div class="has-failed">
  <ul class="List">
    <li class="List-item">A</li>
    <li class="List-item">B</li>
    <li>
      <a href="#foo" class="List-item List-item--link is-actionable">D</a>
    </li>
  </ul>
  <div class="Loader">
    <div class="Loader-spinner Spinner Spinner--s"></div>
    <div class="Loader-label">Loading…</div>
    <div class="Loader-error">
      <i class="Icon Icon--xl Icon--alert"></i>
      Could not load API
    </div>
  </div>
</div>
```


## Additional display modes

Those modes can be combined as followed examples.
* Cover: loading state is covering its parent div.
* Stacked: spinner is set on top of label.


### Cover

```html
<div class="is-loading" style="height: 400px; width: 48%; margin-right: 1rem; padding: 1rem; border: 1px solid #d5d9da; overflow: hidden; display: inline-block;">
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

  <div class="Loader Loader--cover">
    <div class="Loader-spinner Spinner Spinner--s"></div>
    <div class="Loader-label">Loading…</div>
    <div class="Loader-error">
      <i class="Icon Icon--xl Icon--alert"></i>
      Could not load API
    </div>
  </div>
</div>
<div class="has-failed" style="height: 400px; width: 49%; padding: 1rem; border: 1px solid #d5d9da; overflow: hidden; display: inline-block;">
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

  <div class="Loader Loader--cover">
    <div class="Loader-spinner Spinner Spinner--s"></div>
    <div class="Loader-label">Loading…</div>
    <div class="Loader-error">
      <i class="Icon Icon--xl Icon--alert"></i>
      Could not load API
    </div>
  </div>
</div>
```

### Stack

```html
<div class="is-loading" style="height: 400px; width: 33%; padding: 1rem; border: 1px solid #d5d9da; overflow: hidden; display: inline-block;">
  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

  <div class="Loader Loader--cover Loader--stacked">
    <div class="Loader-spinner Spinner"></div>
    <div class="Loader-label">Loading…</div>
    <div class="Loader-error">
      <i class="Icon Icon--xl Icon--alert"></i>
      Could not load API
    </div>
  </div>
</div>
<ul class="List is-loading" style="height: 400px; width: 33%; border: 1px solid #d5d9da; border-top: 0; overflow: hidden; display: inline-block;">
  <li class="List-item">A</li>
  <li class="List-item">B</li>
  <li class="List-item">C</li>
  <li class="List-item">D</li>
  <li class="List-item">E</li>
  <li class="List-item">F</li>
  <li class="List-item Loader Loader--stacked">
    <div class="Loader-spinner Spinner"></div>
    <div class="Loader-label">Loading…</div>
    <div class="Loader-error">
      <i class="Icon Icon--xl Icon--alert"></i>
      Could not load API
    </div>
  </li>
</ul>
```
