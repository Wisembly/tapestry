# Panel

```esc
<button id="launchPanel--r" class="Btn Btn--primary Btn--outline">Launch panel on the right</button>
```

```html
<div id="panel--r" class="Panel Panel--r" aria-labelledby="rightPanel" aria-hidden="true">
  <header class="Panel-header">
    <h3 class="Panel-title">Panel on the right</h3>
    <button id="closePanel--r" class="Btn Btn--raw PanelHeader-btn u-push" aria-label="close">
      <i class="Icon Icon--cross"></i>
    </button>
  </header>
  <div class="Panel-content">
    <p class="u-mgt--0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
  </div>
</div>
```


## Positions

```esc
<button id="launchPanel--l" class="Btn Btn--primary Btn--outline">Launch panel on the left</button>
```

```html
<div id="panel--l" class="Panel Panel--l" aria-labelledby="leftPanel" aria-hidden="true">
  <header class="Panel-header">
    <h3 class="Panel-title">Panel on the left</h3>
    <button id="closePanel--l" class="Btn Btn--raw PanelHeader-btn u-push" aria-label="close">
      <i class="Icon Icon--cross"></i>
    </button>
  </header>
  <div class="Panel-content">
    <p class="u-mgt--0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
  </div>
</div>
```

```esc
<button id="launchPanel--b" class="Btn Btn--primary Btn--outline u-mgb--m">Launch panel in the box</button>
```

```html
<div style="position: relative; height: 200px; border: 3px dashed #a1a9ae; overflow: hidden; line-height: 200px;">
  <div id="panel--b" class="Panel Panel--abs" aria-labelledby="leftPanel" aria-hidden="true">
    <header class="Panel-header">
      <h3 class="Panel-title">Panel on the left</h3>
      <button id="closePanel--b" class="Btn Btn--raw PanelHeader-btn u-push" aria-label="close">
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

  document.getElementById("launchPanel--r").onclick = function () {
    document.getElementById("panel--r").setAttribute("aria-hidden", "false");
    body[0].className += " u-ovh";
  }
  document.getElementById("closePanel--r").onclick = function(){
    document.getElementById("panel--r").setAttribute("aria-hidden", "true");
    var className =  body[0].className;
    className = className.substr(0, className.indexOf(" u-ovh"));
    body[0].className = className;
  }

  document.getElementById("launchPanel--l").onclick = function () {
    document.getElementById("panel--l").setAttribute("aria-hidden", "false")
  }
  document.getElementById("closePanel--l").onclick = function(){
    document.getElementById("panel--l").setAttribute("aria-hidden", "true")
  }

  document.getElementById("launchPanel--b").onclick = function () {
    document.getElementById("panel--b").setAttribute("aria-hidden", "false")
  }
  document.getElementById("closePanel--b").onclick = function(){
    document.getElementById("panel--b").setAttribute("aria-hidden", "true")
  }
</script>
```
