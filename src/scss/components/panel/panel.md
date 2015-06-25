# Panel

```html
<button id="launchPanelTr" class="Btn">Launch panel on the right</button>
<div id="panelOverlay" class="Overlay" aria-hidden="true"></div>
<div id="panelTr" class="Panel Panel--vertical Panel--fixed Panel--tr" aria-labelledby="panelTitle" aria-hidden="true">
  <header class="Panel-header">
    <button class="Btn Btn--raw PanelHeader-button" arial-label="back">
      <i class="Icon Icon--arrowBack"></i>
    </button>
    Paul De La Héronière
    <button id="closePanelTr" class="Btn Btn--raw PanelHeader-button u-push" arial-label="close">
      <i class="Icon Icon--cross"></i>
    </button>
  </header>
  <div class="Panel-content">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
    <button class="Btn Btn--primary">Call to action</button>
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
  </div>
  <footer class="Panel-footer">
  </footer>
</div>
```

```esc
<script>
  document.getElementById("launchPanelTr").onclick = function(){
    document.getElementById("panelTr").setAttribute("aria-hidden","false")
    document.getElementById("panelOverlay").setAttribute("aria-hidden","false")
  }
  document.getElementById("closePanelTr").onclick = function(){
    document.getElementById("panelTr").setAttribute("aria-hidden","true")
    document.getElementById("panelOverlay").setAttribute("aria-hidden","true")
  }
</script>
```
