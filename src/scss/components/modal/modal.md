# Modal

## Variables

| Variable                      | property   | value                         | desc.                           |
|-------------------------------|------------|-------------------------------|---------------------------------|
| ** $modal-header-btn-width ** | width      | `$fz--m + ($base-mg * 2)`     | modal header button width       |
| ** $modal-width **            | width      | `90%`                         | modal width (small devices)     |
| ** $modal-max-width **        | max-width  | `r(80)`                       | modal max-width (large devices) |
| ** $modal-max-height **       | max-height | `calc(100vh - #{2 * $mg--m})` | modal max-height                |



## Modal with simple message
Aims at including a simple caption or call-to-action.

```esc
<button class="Btn Btn--primary Btn--outline" id="js-LaunchModalSimple">Open Modal with simple message</button>
```

```html
<div class="Modal-wrapper" aria-hidden="true" id="js-ModalSimple">
  <div class="Modal">
    <header class="Modal-header">
      <h3 class="Modal-title">Modal title</h3>
      <button type="button" id="js-CloseModalSimple" class="Btn Btn--raw ModalHeader-btn">
        <i class="Icon Icon--cross"></i>
      </button>
    </header>
    <div class="Modal-content u-pd--m u-pdb--0">
      <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
    </div>
    <footer class="Modal-footer">
      <button type="button" class="Btn Btn--expand">Cancel</button>
      <button type="button" class="Btn Btn--expand Btn--validate">OK</button>
    </footer>
  </div>
</div>
```



## Modal with list
Wraps a list.

```esc
<button class="Btn Btn--primary Btn--outline" id="js-LaunchModalMenu">Open Modal with list</button>
```

```html
<div class="Modal-wrapper" aria-hidden="true" id="js-ModalMenu">
  <div class="Modal">
    <header class="Modal-header">
      <button type="button" class="Btn Btn--raw ModalHeader-btn">
        <i class="Icon Icon--arrowBack"></i>
      </button>
      <h3 class="Modal-title">Modal title</h3>
      <button type="button" id="js-CloseModalMenu" class="Btn Btn--raw ModalHeader-btn">
        <i class="Icon Icon--cross"></i>
      </button>
    </header>
    <div class="Modal-content">
      <div class="List">
        <header class="List-header">
          <h4 class="List-title">Items</h4>
          <p class="List-count">(6)</p>
        </header>
        <ul class="List-content">
          <li class="List-item">A</li>
          <li class="List-itemWrapper">
            <a href="#foo" class="List-item is-actionable">E</a>
          </li>
          <li class="List-item">I</li>
          <li class="List-itemWrapper">
            <a href="#foo" class="List-item is-actionable">O</a>
          </li>
          <li class="List-item">U</li>
          <li class="List-itemWrapper">
            <a href="#foo" class="List-item is-actionable">Y</a>
          </li>
        </ul>
      </div>
    </div>
    <footer class="Modal-footer">
      <button type="button" class="Btn Btn--expand">Cancel</button>
      <button type="button" class="Btn Btn--expand Btn--validate">OK</button>
    </footer>
  </div>
</div>
```



## Notes
- Height can't exceed ~100vh (vertical margins are already set),
- Header items are made to be justified whatever numbers they are,
- Content is automatically shrunk and scrollable.


```esc
<script>
  document.getElementById("js-LaunchModalSimple").onclick = function(){
    document.getElementById("js-ModalSimple").setAttribute("aria-hidden","false");
    document.body.classList.add("u-ovh");
  }

  document.getElementById("js-CloseModalSimple").onclick = function(){
    document.getElementById("js-ModalSimple").setAttribute("aria-hidden","true");
    document.body.classList.remove("u-ovh");
  }

  document.getElementById("js-LaunchModalMenu").onclick = function(){
    document.getElementById("js-ModalMenu").setAttribute("aria-hidden","false");
    document.body.classList.add("u-ovh");
  }

  document.getElementById("js-CloseModalMenu").onclick = function(){
    document.getElementById("js-ModalMenu").setAttribute("aria-hidden","true");
    document.body.classList.remove("u-ovh");
  }
</script>
```
