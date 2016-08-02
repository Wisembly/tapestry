# Switch

## Variables

| Variable                         | property | value            | desc.                                    |
|----------------------------------|----------|------------------|------------------------------------------|
| ** $switch-color **              | color    | `$white`         | switch color                             |
| ** $switch-checked-color **      | color    | `$boston-blue`   | switch color when checked                |
| ** $switch-unchecked-color **    | color    | `$gray-chateau`  | switch color when unchecked              |
| ** $switch-border-color **       | color    | `$iron`          | switch border color                      |
| ** $switch-hover-border-color ** | color    | `$gray-chateau`  | switch border color when hover           |
| ** $switch-width **              | width    | `r(8)`           | switch width                             |
| ** $switch-width--s **           | width    | `r(5)`           | small switch width                       |
| ** $switch-height **             | height   | `$base-lh`       | switch height                            |
| ** $switch-height--s **          | height   | `$base-lh / 1.4` | small switch height                      |
| ** $switch-inner-space **        | size     | `rem(6px)`       | space between switch and container       |
| ** $switch-inner-space--s **     | size     | `rem(4px)`       | space between small switch and container |



```html
<input id="switch_example" class="Switch-checkbox" type="checkbox" />
<label class="Switch" for="switch_example"></label>
```

## Sizes

```html
<input id="switch_example_small" class="Switch-checkbox" type="checkbox" />
<label class="Switch Switch--s" for="switch_example_small"></label>
```
