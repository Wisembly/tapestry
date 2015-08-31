# Panel

```html
<button id="launchPanel--r" class="Btn">Launch panel on the right</button>
<div id="panel--r" class="Panel Panel--r" aria-labelledby="rightPanel" aria-hidden="true">
  <header class="Panel-header">
    <button class="Btn Btn--raw PanelHeader-button u-pull u-mgr--s" aria-label="back">
      <i class="Icon Icon--s Icon--arrowBack"></i>
    </button>
    Panel on the right
    <button id="closePanel--r" class="Btn Btn--raw PanelHeader-button u-push" aria-label="close">
      <i class="Icon Icon--s Icon--cross"></i>
    </button>
  </header>
  <div class="Panel-content">
    <p class="u-mgt--0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
  </div>
</div>
```


## Positions

```html
<button id="launchPanel--l" class="Btn">Launch panel on the left</button>
<div id="panel--l" class="Panel Panel--l" aria-labelledby="leftPanel" aria-hidden="true">
  <header class="Panel-header">
    <button class="Btn Btn--raw PanelHeader-button u-pull u-mgr--s" aria-label="back">
      <i class="Icon Icon--s Icon--arrowBack"></i>
    </button>
    Panel on the left
    <button id="closePanel--l" class="Btn Btn--raw PanelHeader-button u-push" aria-label="close">
      <i class="Icon Icon--s Icon--cross"></i>
    </button>
  </header>
  <div class="Panel-content">
    <p class="u-mgt--0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
  </div>
</div>
```

```html
<div style="position: relative; height: 200px; border: 3px dashed #a1a9ae; overflow: hidden; line-height: 200px;">
  <button id="launchPanel--b" class="Btn u-mgl--l">Launch panel in the box</button>
  <div id="panel--b" class="Panel Panel--abs" aria-labelledby="leftPanel" aria-hidden="true">
    <header class="Panel-header">
      <button class="Btn Btn--raw PanelHeader-button u-pull u-mgr--s" aria-label="back">
        <i class="Icon Icon--s Icon--arrowBack"></i>
      </button>
      Panel on the left
      <button id="closePanel--b" class="Btn Btn--raw PanelHeader-button u-push" aria-label="close">
        <i class="Icon Icon--s Icon--cross"></i>
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
  document.getElementById("launchPanel--r").onclick = function () {
    document.getElementById("panel--r").setAttribute("aria-hidden", "false")
  }
  document.getElementById("closePanel--r").onclick = function(){
    document.getElementById("panel--r").setAttribute("aria-hidden", "true")
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
