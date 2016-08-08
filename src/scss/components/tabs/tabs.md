# Tabs

## Variables

| Variable                        | property    | value                      | desc.                         |
|---------------------------------|-------------|----------------------------|-------------------------------|
| ** $tab-base-color **           | color       | `$slate-gray`              | tab base color                |
| ** $tab-selected-color **       | color       | `$venice-blue`             | tab selected color            |
| ** $tab-hover-color **          | color       | `$venice-blue`             | tab hover color               |
| ** $tab-underline-size **       | size        | `rem(3px)`                 | tab underline size            |
| ** $insert-tab-border-color **  | color       | `$silver-sand`             | insert-tab border-color       |
| ** $small-tab-underline-size ** | size        | `rem(2px)`                 | small tab underline size      |
| ** $tab-pdv **                  | padding     | `r(3)`                     | tab-link vertical padding     |
| ** $tab-pdh **                  | padding     | `r(2)`                     | tab-link horizontal padding   |
| ** $insert-tab-vertical-pd **   | padding     | `r(6)`                     | insert-tab horizontal padding |
| ** $tab-fz **                   | font-size   | `$base-fz--rem`            | tab font-size                 |
| ** $tab-lh **                   | line-height | `$base-lh`                 | tab line-height               |
| ** $small-tab-fz **             | font-size   | `$base-fz--rem`            | small-tab font-size           |
| ** $small-tab-lh **             | line-height | `$base-lh`                 | small-tab line-height         |
| ** $selected-tab-selector **    | selector    | `"[aria-selected="true"]"` | selected tab selector         |



```html
<div class="Tabs">
  <a class="Tab" aria-selected="true" tabindex="0" href="#foo">
    Foo selected
  </a>
  <a class="Tab" aria-selected="false" tabindex="-1" href="#bar">
    Bar thing thing
  </a>
  <a class="Tab" aria-selected="false" tabindex="-1" href="#baz">
    Baz thing thing
  </a>
</div>
```



## Small

```html
<div class="Tabs Tabs--s">
  <a class="Tab" aria-selected="true" tabindex="0" href="#foo">
    Foo selected
  </a>
  <a class="Tab" aria-selected="false" tabindex="-1" href="#bar">
    Bar thing thing
  </a>
  <a class="Tab" aria-selected="false" tabindex="-1" href="#baz">
    Baz thing thing
  </a>
</div>
```


## Insert

Alternative to use when you have two levels of tabs

```html
<div class="Tabs Tabs--insert">
  <a class="Tab" aria-selected="false" tabindex="0" href="#foo">
    Foo selected
  </a>
  <a class="Tab" aria-selected="true" tabindex="-1" href="#bar">
    Bar thing thing
  </a>
  <a class="Tab" aria-selected="false" tabindex="-1" href="#baz">
    Baz thing thing
  </a>
  <div class="Tab Tab--fr"></div>
</div>
```
