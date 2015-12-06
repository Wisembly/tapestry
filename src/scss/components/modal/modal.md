# Modal

## Modal with simple message
Aims at including a simple caption or call-to-action.

```esc
<button class="Btn Btn--primary Btn--outline" id="js-LaunchModalSimple">Open Modal with simple message</button>
```

```html
<div class="Modal" aria-hidden="true" id="js-ModalSimple">
  <div class="Modal-header">
    <h3 class="Modal-title">Modal title</h3>
    <button type="button" id="js-CloseModalSimple" class="Btn Btn--raw ModalHeader-btn">
      <i class="Icon Icon--cross"></i>
    </button>
  </div>
  <div class="Modal-content">
    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
  </div>
  <div class="Modal-footer">
    <button type="button" class="Btn Btn--expand">Cancel</button>
    <button type="button" class="Btn Btn--expand Btn--validate">OK</button>
  </div>
</div>
<div id="js-ModalSimpleOverlay" class="Overlay" aria-hidden="true"></div>
```

## Modal with list
Wraps a list.

```esc
<button class="Btn Btn--primary Btn--outline" id="js-LaunchModalMenu">Open Modal with list</button>
```

```html
<div class="Modal" aria-hidden="true" id="js-ModalMenu">
  <div class="Modal-header">
    <button type="button" class="Btn Btn--raw ModalHeader-btn">
      <i class="Icon Icon--arrowBack"></i>
    </button>
    <h3 class="Modal-title">Modal title</h3>
    <button type="button" id="js-CloseModalMenu" class="Btn Btn--raw ModalHeader-btn">
      <i class="Icon Icon--cross"></i>
    </button>
  </div>
  <div class="Modal-content has-list">
    <ul class="List">
      <li class="List-item">A</li>
      <li>
        <a href="#foo" class="List-item List-item--link is-actionable">E</a>
      </li>
      <li class="List-item">I</li>
      <li>
        <a href="#foo" class="List-item List-item--link is-actionable">O</a>
      </li>
      <li class="List-item">U</li>
      <li>
        <a href="#foo" class="List-item List-item--link is-actionable">Y</a>
      </li>
    </ul>
  </div>
  <div class="Modal-footer">
    <button type="button" class="Btn Btn--expand">Cancel</button>
    <button type="button" class="Btn Btn--expand Btn--validate">OK</button>
  </div>
</div>
<div id="js-ModalMenuOverlay" class="Overlay" aria-hidden="true"></div>
```

## Notes
- Height can't exceed ~100vh (vertical margins are already set),
- Header items are made to be justified whatever numbers they are,
- Content is automatically shrunk and scrollable.


```esc
<script>
  document.getElementById("js-LaunchModalSimple").onclick = function(){
    document.getElementById("js-ModalSimple").setAttribute("aria-hidden","false");
    document.getElementById("js-ModalSimpleOverlay").setAttribute("aria-hidden","false");
    document.body.classList.add("u-ovh");
  }

  document.getElementById("js-CloseModalSimple").onclick = function(){
    document.getElementById("js-ModalSimple").setAttribute("aria-hidden","true");
    document.getElementById("js-ModalSimpleOverlay").setAttribute("aria-hidden","true");
    document.body.classList.remove("u-ovh");
  }

  document.getElementById("js-LaunchModalMenu").onclick = function(){
    document.getElementById("js-ModalMenu").setAttribute("aria-hidden","false");
    document.getElementById("js-ModalMenuOverlay").setAttribute("aria-hidden","false");
    document.body.classList.add("u-ovh");
  }

  document.getElementById("js-CloseModalMenu").onclick = function(){
    document.getElementById("js-ModalMenu").setAttribute("aria-hidden","true");
    document.getElementById("js-ModalMenuOverlay").setAttribute("aria-hidden","true");
    document.body.classList.remove("u-ovh");
  }
</script>
```
