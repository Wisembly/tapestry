# Panel

## Variables
```esc
<table class="Table u-mgb--m">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal" style="width: 25%;">Name</th>
    <th class="Table-cell Table-cell--header" style="width: 10%;">Type</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$panel-header-height</td>
      <td class="Table-cell">height</td>
      <td class="Table-cell">panel header height<br><code>r(8)</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$panel-width</td>
      <td class="Table-cell">width</td>
      <td class="Table-cell">panel width (small devices)<br><code>100%</code></td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">$panel-max-width</td>
      <td class="Table-cell">width</td>
      <td class="Table-cell">panel max-width (large devices)<br><code>r(100)</code></td>
    </tr>
  </tbody>
</table>
```



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
    <div class="Panel-content">
      <p class="u-mgt--0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
    </div>
    <footer class="Panel-footer">
      <button class="Btn Btn--expand">Cancel</button>
      <button class="Btn Btn--validate Btn--expand">Save</button>
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
    <div class="Panel-content">
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
