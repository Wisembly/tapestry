# Modal

## Modal with simple message
Aims at including a simple caption or call-to-action.

```esc
<button class="Btn Btn--primary" id="launchModalSimple">Open Modal with simple message</button>
```

```html
<div class="Modal Modal--centered" aria-hidden="true" id="ModalSimple">
  <div class="Modal-header">
    <h3 class="Modal-title">Modal title</h3>
    <button type="button" id="closeModalSimple" class="Btn Btn--raw ModalHeader-btn">
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
```

## Modal with collection
Wraps a component collection.

```esc
<button class="Btn Btn--primary" id="launchModalMenu">Open Modal with collection</button>
```

```html
<div class="Modal" aria-hidden="true" id="ModalMenu">
  <div class="Modal-header">
    <button type="button" class="Btn Btn--raw ModalHeader-btn">
      <i class="Icon Icon--arrowBack"></i>
    </button>
    <h3 class="Modal-title">Modal title</h3>
    <button type="button" id="closeModalMenu" class="Btn Btn--raw ModalHeader-btn">
      <i class="Icon Icon--cross"></i>
    </button>
  </div>
  <div class="Modal-content has-collection">
    <ul class="Collection Collection--actionnable Modal-collection">
      <li class="Collection-item">A</li>
      <li class="Collection-item">B</li>
      <li class="Collection-item">C</li>
    </ul>
  </div>
  <div class="Modal-footer">
    <button type="button" class="Btn Btn--expand">Cancel</button>
    <button type="button" class="Btn Btn--expand Btn--validate">OK</button>
  </div>
</div>
```

## Options

```esc
<table class="Table">
  <thead class="Table-head">
    <th class="Table-cell Table-cell--header u-tal">Class</th>
    <th class="Table-cell Table-cell--header">Description</th>
  </thead>
  <tbody class="Table-body">
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">.Modal--centered</td>
      <td class="Table-cell">Centers modal horizontally and vertically.</td>
    </tr>
    <tr class="Table-row">
      <td class="Table-cell Table-cell--important u-tal">.Modal--expand</td>
      <td class="Table-cell">Modal use the full vertical viewport.</td>
    </tr>
  </tbody>
</table>
```

## Notes
- Height can't exceed ~100vh (vertical margins are already set),
- Header items are made to be justified whatever numbers they are,
- Content is automatically shrunk and scrollable.


```esc
<script>
  document.getElementById("launchModalSimple").onclick = function(){
    document.getElementById("ModalSimple").setAttribute("aria-hidden","false");
    document.getElementById("Overlay").setAttribute("aria-hidden","false");
    document.body.classList.add("has-modal");
  }

  document.getElementById("closeModalSimple").onclick = function(){
    document.getElementById("ModalSimple").setAttribute("aria-hidden","true");
    document.getElementById("Overlay").setAttribute("aria-hidden","true");
    document.body.classList.remove("has-modal");
  }

  document.getElementById("launchModalMenu").onclick = function(){
    document.getElementById("ModalMenu").setAttribute("aria-hidden","false");
    document.getElementById("Overlay").setAttribute("aria-hidden","false");
    document.body.classList.add("has-modal");
  }

  document.getElementById("closeModalMenu").onclick = function(){
    document.getElementById("ModalMenu").setAttribute("aria-hidden","true");
    document.getElementById("Overlay").setAttribute("aria-hidden","true");
    document.body.classList.remove("has-modal");
  }
</script>
```
