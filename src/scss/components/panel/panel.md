# Panel

```esc
<button id="js-LaunchRightPanel" class="Btn Btn--primary Btn--outline">Launch panel on the right</button>
```

```html
<div id="js-RightPanel" class="Panel Panel--r" aria-labelledby="rightPanel" aria-hidden="true">
  <header class="Panel-header">
    <h3 class="Panel-title">Panel on the right</h3>
    <button id="js-CloseRightPanel" class="Btn Btn--raw PanelHeader-btn u-push" aria-label="close">
      <i class="Icon Icon--cross"></i>
    </button>
  </header>
  <div class="Panel-content">
    <p class="u-mgt--0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
  </div>
</div>
<div id="js-RightPanelOverlay" class="Overlay" aria-hidden="true"></div>
```


## Positions

```esc
<button id="js-LaunchLeftPanel" class="Btn Btn--primary Btn--outline">Launch panel on the left</button>
```

```html
<div id="js-LeftPanel" class="Panel Panel--l" aria-labelledby="leftPanel" aria-hidden="true">
  <header class="Panel-header">
    <h3 class="Panel-title">Panel on the left</h3>
    <button id="js-CloseLeftPanel" class="Btn Btn--raw PanelHeader-btn u-push" aria-label="close">
      <i class="Icon Icon--cross"></i>
    </button>
  </header>
  <div class="Panel-content">
    <p class="u-mgt--0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
  </div>
</div>
<div id="js-LeftPanelOverlay" class="Overlay" aria-hidden="true"></div>
```

```esc
<button id="js-LaunchBoxedPanel" class="Btn Btn--primary Btn--outline u-mgb--m">Launch panel in the box</button>
```

```html
<div style="position: relative; height: 200px; border: 3px dashed #a1a9ae; overflow: hidden; line-height: 200px;">
  <div id="js-BoxedPanel" class="Panel Panel--abs" aria-labelledby="leftPanel" aria-hidden="true">
    <header class="Panel-header">
      <h3 class="Panel-title">Panel on the left</h3>
      <button id="js-CloseBoxedPanel" class="Btn Btn--raw PanelHeader-btn u-push" aria-label="close">
        <i class="Icon Icon--cross"></i>
      </button>
    </header>
    <div class="Panel-content">
      <p class="u-mgt--0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </div>
  </div>
</div>
```

```esc
<script>
  var body = document.getElementsByTagName("body");

  document.getElementById("js-LaunchRightPanel").onclick = function () {
    document.getElementById("js-RightPanel").setAttribute("aria-hidden", "false");
    document.getElementById("js-RightPanelOverlay").setAttribute("aria-hidden", "false");
    body[0].className += " u-ovh";
  }
  document.getElementById("js-CloseRightPanel").onclick = function(){
    document.getElementById("js-RightPanel").setAttribute("aria-hidden", "true");
    document.getElementById("js-RightPanelOverlay").setAttribute("aria-hidden", "true");
    var className =  body[0].className;
    className = className.substr(0, className.indexOf(" u-ovh"));
    body[0].className = className;
  }

  document.getElementById("js-LaunchLeftPanel").onclick = function () {
    document.getElementById("js-LeftPanel").setAttribute("aria-hidden", "false")
    document.getElementById("js-LeftPanelOverlay").setAttribute("aria-hidden", "false")
  }
  document.getElementById("js-CloseLeftPanel").onclick = function(){
    document.getElementById("js-LeftPanel").setAttribute("aria-hidden", "true")
    document.getElementById("js-LeftPanelOverlay").setAttribute("aria-hidden", "true")
  }

  document.getElementById("js-LaunchBoxedPanel").onclick = function () {
    document.getElementById("js-BoxedPanel").setAttribute("aria-hidden", "false")
  }
  document.getElementById("js-CloseBoxedPanel").onclick = function(){
    document.getElementById("js-BoxedPanel").setAttribute("aria-hidden", "true")
  }
</script>
```
