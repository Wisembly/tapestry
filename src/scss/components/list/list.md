# List

## Basic list
```html
<header class="List-header">
  <h4 class="List-title">Foo</h4>
  <button type="button" class="Btn Btn--s Btn--validate">Do</button>
</header>
<ul class="List">
  <li class="List-item">A</li>
  <li class="List-item">B</li>
  <li class="List-itemWrapper">
    <a href="#foo" class="List-item is-actionable">C</a>
  </li>
</ul>
```



## Modifiers

* `.List--raw` removes borders on `.List` but keeps borders on `.List-item`
* `.List--wrapped` adds right and left borders
* `.List-header--wrapped` adds top border on `.List-header`



## List with items checkbable
```html
<header class="List-header">
  <h4 class="List-title">Items</h4>
  <div class="List-count">(0)</div>
</header>
<ul class="List">
  <li class="List-itemWrapper">
    <input id="itemE" type="checkbox" class="List-itemInput">
    <label for="itemE" class="List-item is-actionable">Item E</label>
  </li>
  <li class="List-itemWrapper">
    <input id="itemF" type="checkbox" class="List-itemInput">
    <label for="itemF" class="List-item is-actionable is-checkable">Item F</label>
  </li>
  <li class="List-itemWrapper">
    <input id="itemG" type="checkbox" class="List-itemInput">
    <label for="itemG" class="List-item is-actionable is-checkable">Item G</label>
  </li>
</ul>
```



## List with switches checkbox
```html
<ul class="List">
  <li class="List-itemWrapper">
    <label class="List-item is-actionable">
      Switch 1
      <input id="switch_example_checkbox_1" class="Switch-checkbox" type="checkbox" />
      <label class="Switch" for="switch_example_checkbox_1"></label>
    </label>
  </li>
  <li class="List-itemWrapper">
    <label class="List-item is-actionable">
      Switch 2
      <input id="switch_example_checkbox_2" class="Switch-checkbox" type="checkbox" />
      <label class="Switch" for="switch_example_checkbox_2"></label>
    </label>
  </li>
  <li class="List-itemWrapper">
    <label class="List-item is-actionable">
      Switch 3
      <input id="switch_example_checkbox_3" class="Switch-checkbox" type="checkbox" />
      <label class="Switch" for="switch_example_checkbox_3"></label>
    </label>
  </li>
</ul>
```



## List with switches radio
```html
<ul class="List">
  <li class="List-itemWrapper">
    <label class="List-item is-actionable">
      Radio 1
      <input name="list_switch_example" id="switch_example_1" class="Switch-checkbox" type="radio" aria-checked="" />
      <label for="switch_example_1" class="Switch"></label>
    </label>
  </li>
  <li class="List-itemWrapper">
    <label class="List-item is-actionable">
      Radio 2
      <input name="list_switch_example" id="switch_example_2" class="Switch-checkbox" type="radio" aria-checked="" />
      <label for="switch_example_2" class="Switch"></label>
    </label>
  </li>
  <li class="List-itemWrapper">
    <label class="List-item is-actionable">
      Radio 3
      <input name="list_switch_example" id="switch_example_3" class="Switch-checkbox" type="radio" aria-checked="" />
      <label for="switch_example_3" class="Switch"></label>
    </label>
  </li>
</ul>
```



## List with menu
```html
<ul class="List">
  <li class="List-itemWrapper">
    <a href="#" class="List-item is-actionable">
      <div>Pork belly landjaeger venison corned</div>
      <i class="Icon Icon--arrowRight t-neutral"></i>
    </a>
  </li>
  <li class="List-itemWrapper">
    <a href="#" class="List-item is-actionable">
      <div>Pork belly landjaeger venison corned</div>
      <i class="Icon Icon--arrowRight t-neutral"></i>
    </a>
  </li>
  <li class="List-itemWrapper">
    <a href="#" class="List-item is-actionable">
      <div>Pork belly landjaeger venison corned</div>
      <i class="Icon Icon--arrowRight t-neutral"></i>
    </a>
  </li>
</ul>
```



## Basic list + Box
```html
<div class="Box">
  <header class="Box-header">
    <h1 class="Box-title">Leberkas ham meatball meatloaf brisket flank.</h1>
  </header>
  <div class="Box-content">
    <p>Bacon ipsum dolor amet alcatra ham spare ribs jowl pastrami. Picanha rump pork belly, biltong pancetta beef corned beef short ribs cupim tri-tip shoulder shank. Meatloaf leberkas tenderloin landjaeger chuck.</p>
  </div>
  <ul class="List">
    <li class="List-item">Bacon ipsum dolor amet alcatra ham spare ribs jowl pastrami.</li>
    <li class="List-item">Alcatra ribeye ham pork loin pork chop shankle t-bone chicken strip steak shoulder.</li>
    <li class="List-item">Cupim turducken fatback venison, pancetta rump shankle.</li>
    <li class="List-item">Capicola andouille tri-tip beef ribs ham picanha.</li>
    <li class="List-item">Ribeye pig hamburger, tongue tri-tip bacon pastrami capicola.</li>
  </ul>
  <ul class="List">
    <li class="List-item">Bacon ipsum dolor amet alcatra ham spare ribs jowl pastrami.</li>
    <li class="List-item">Alcatra ribeye ham pork loin pork chop shankle t-bone chicken strip steak shoulder.</li>
    <li class="List-item">Cupim turducken fatback venison, pancetta rump shankle.</li>
    <li class="List-item">Capicola andouille tri-tip beef ribs ham picanha.</li>
    <li class="List-item">Ribeye pig hamburger, tongue tri-tip bacon pastrami capicola.</li>
  </ul>
</div>
```
