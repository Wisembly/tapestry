# Panel

## Variables

| Variable                   | property  | value    | desc.                           |
|----------------------------|-----------|----------|---------------------------------|
| ** $panel-header-height ** | height    | `r(8)`   | panel header height             |
| ** $panel-width **         | width     | `100%`   | panel width (small devices)     |
| ** $panel-max-width **     | max-width | `r(100)` | panel max-width (large devices) |



```esc
<button id="js-LaunchRightPanel" class="Btn Btn--primary Btn--outline">Launch panel on the right</button>
```

```html
<div class="Panel-wrapper" id="js-RightPanel" aria-hidden="true">
  <div class="Panel">
    <header class="Panel-header">
      <h3 class="Panel-title">Panel on the right</h3>
      <button id="js-CloseRightPanel" class="Btn Btn--raw PanelHeader-btn" aria-label="close">
        <i class="Icon Icon--cross"></i>
      </button>
    </header>
    <div class="Panel-content u-pd--m">
      <p class="u-mgt--0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
    </div>
    <footer class="Panel-footer">
      <button class="Btn Panel-footerBtn">Cancel</button>
      <button class="Btn Btn--validate Panel-footerBtn">Save</button>
    </footer>
  </div>
</div>
```


## Positions

```esc
<button id="js-LaunchLeftPanel" class="Btn Btn--primary Btn--outline">Launch panel on the left</button>
```

```html
<div class="Panel-wrapper" id="js-LeftPanel" aria-hidden="true">
  <div class="Panel Panel--l">
    <header class="Panel-header">
      <h3 class="Panel-title">Panel on the left</h3>
      <button id="js-CloseLeftPanel" class="Btn Btn--raw PanelHeader-btn" aria-label="close">
        <i class="Icon Icon--cross"></i>
      </button>
    </header>
    <div class="Panel-content u-pd--m">
      <p class="u-mgt--0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
    </div>
  </div>
</div>
```



```esc
<script>

  document.getElementById("js-LaunchRightPanel").onclick = function () {
    document.getElementById("js-RightPanel").setAttribute("aria-hidden", "false");
    document.body.classList.add("u-ovh");
  }
  document.getElementById("js-CloseRightPanel").onclick = function(){
    document.getElementById("js-RightPanel").setAttribute("aria-hidden", "true");
    document.body.classList.remove("u-ovh");

  }

  document.getElementById("js-LaunchLeftPanel").onclick = function () {
    document.getElementById("js-LeftPanel").setAttribute("aria-hidden", "false")
    document.body.classList.add("u-ovh");
  }
  document.getElementById("js-CloseLeftPanel").onclick = function(){
    document.getElementById("js-LeftPanel").setAttribute("aria-hidden", "true")
    document.body.classList.remove("u-ovh");
  }
</script>
```
