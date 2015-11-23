# List

## Basic list
```html
  <ul class="List">
    <li class="List-item">A</li>
    <li class="List-item">B</li>
    <li>
      <a href="#foo" class="List-item List-item--link is-actionable">D</a>
    </li>
  </ul>
```

## Advanced list
```html
<ul class="List">
  <li class="List-item">Alcatra ribeye ham pork</li>
  <li class="List-item">Capicola andouille tri-tip beef ribs ham picanha</li>
  <li>
    <a href="#foo" class="List-item List-item--link is-actionable">Pork belly landjaeger venison corned</a>
  </li>
  <li>
    <a href="#foo" class="List-item List-item--link is-actionable">Ribeye pig hamburger</a>
  </li>
</ul>
<h5 class="List-title">List with items checkbable</h5>
<ul class="List">
  <li>
    <input id="itemE" type="checkbox" class="List-itemInput">
    <label for="itemE" class="List-item is-actionable">boudin strip steak</label>
  </li>
  <li>
    <input id="itemF" type="checkbox" class="List-itemInput">
    <label for="itemF" class="List-item is-actionable">boudin strip steak</label>
  </li>
  <li>
    <input id="itemG" type="checkbox" class="List-itemInput">
    <label for="itemG" class="List-item is-actionable">boudin strip steak</label>
  </li>
</ul>
<h5 class="List-title">List with switches checkbox</h5>
<ul class="List">
  <li>
    <label class="List-item is-actionable" for="switch_example_checkbox_1">
      Alcatra ribeye ham pork
      <input id="switch_example_checkbox_1" class="Switch-checkbox" type="checkbox" />
      <label class="Switch u-push" for="switch_example_checkbox_1"></label>
    </label>
  </li>
  <li>
    <label class="List-item is-actionable" for="switch_example_checkbox_2">
      Capicola andouille tri-tip beef ribs ham picanha
      <input id="switch_example_checkbox_2" class="Switch-checkbox" type="checkbox" />
      <label class="Switch u-push" for="switch_example_checkbox_2"></label>
    </label>
  </li>
  <li>
    <label class="List-item is-actionable" for="switch_example_checkbox_3">Pork belly landjaeger venison corned
      Pork belly landjaeger venison corned
      <input id="switch_example_checkbox_3" class="Switch-checkbox" type="checkbox" />
      <label class="Switch u-push" for="switch_example_checkbox_3"></label>
    </label>
  </li>
</ul>
<h5 class="List-title">List with switches radio</h5>
<ul class="List">
  <li>
    <label class="List-item is-actionable" for="switch_example_1">Pork belly landjaeger venison corned
      <input name="list_switch_example" id="switch_example_1" class="Switch-checkbox" type="radio" aria-checked="" />
      <label for="switch_example_1" class="Switch u-push"></label>
    </label>
  </li>
  <li>
    <label class="List-item is-actionable" for="switch_example_2">Capicola andouille tri-tip beef ribs ham picanha
      <input name="list_switch_example" id="switch_example_2" class="Switch-checkbox" type="radio" aria-checked="" />
      <label for="switch_example_2" class="Switch u-push"></label>
    </label>
  </li>
  <li>
    <label class="List-item is-actionable" for="switch_example_3">Alcatra ribeye ham pork
      <input name="list_switch_example" id="switch_example_3" class="Switch-checkbox" type="radio" aria-checked="" />
      <label for="switch_example_3" class="Switch u-push"></label>
    </label>
  </li>
</ul>
```
