# Form

```html
<fieldset class="Fieldset">
  <legend class="Legend">Shipping Information</legend>
  <label class="Label">Title</label>
  <div class="Grid u-mgb--m">
    <div class="Grid-cell Grid-cell--12">
      <div class="Radio">
        <input name="title" id="mr" type="radio" class="Radio-input" id="radioInput">
        <label for="mr" class="Radio-label" for="radioInput">Mr</label>
      </div>
      <div class="Radio">
        <input name="title" id="mrs" type="radio" class="Radio-input" id="radioInput">
        <label for="mrs" class="Radio-label" for="radioInput">Mrs</label>
      </div>
      <div class="Radio">
        <input name="title" id="ms" type="radio" class="Radio-input" id="radioInput">
        <label for="ms" class="Radio-label" for="radioInput">Ms</label>
      </div>
      <div class="Radio">
        <input name="title" id="mx" type="radio" class="Radio-input" id="radioInput">
        <label for="mx" class="Radio-label" for="radioInput">Mx</label>
      </div>
    </div>
  </div>
  <label for="firstname" class="Label Label--block">Name</label>
  <div class="Grid Grid--gutters u-mgb--m">
    <div class="Grid-cell Grid-cell--6">
      <input class="Input" id="firstname" name="firstname" placeholder="First name" value="">
    </div>
    <div class="Grid-cell Grid-cell--6">
      <input class="Input" id="lastname" name="lastname" placeholder="Last name" value="">
    </div>
  </div>
  <label for="street" class="Label Label--block">Billing Address</label>
  <div class="Grid Grid--gutters u-mgb--m">
    <div class="Grid-cell Grid-cell--10">
      <input id="street" name="street" class="Input" placeholder="Street name" value="">
    </div>
    <div class="Grid-cell Grid-cell--2">
      <input id="apt" name="apt" class="Input" placeholder="Apt #" value="">
    </div>
  </div>
  <div class="Grid Grid--gutters u-mgb--m">
    <div class="Grid-cell Grid-cell--6">
      <label class="Label Label--block">State</label>
      <div class="Dropdown Dropdown--block" data-tapestry="dropdown-select">
        <input name="" value="bar" type="hidden">
        <button class="Dropdown-toggle Dropdown-selectInput" aria-controls="dropdownSelectExample" aria-expanded="true">
          <span class="Dropdown-value"></span>
        </button>
        <ul id="dropdownSelectExample" class="Dropdown-list">
          <li class="Dropdown-item" data-value="foo">
            Simple label 1
          </li>
          <li class="Dropdown-item" data-value="bar" aria-selected="true">
            Simple label 2
          </li>
          <li class="Dropdown-item" data-value="baz" data-label="Custom label 3">
            Simple label 3
          </li>
        </ul>
      </div>
    </div>
    <div class="Grid-cell Grid-cell--6">
      <label class="Label Label--block">Country</label>
      <select class="Dropdown Dropdown--block" data-tapestry="dropdown-select">
        <option value="foo">Simple label 1</option>
        <option value="bar">Simple label 2</option>
        <option value="baz">Simple label 3</option>
      </select>
    </div>
  </div>
  <div class="Grid u-mgb--m">
    <div class="Grid-cell Grid-cell--12">
      <label class="Label Label--block" for="textarea1">Details</label>
      <textarea class="Textarea" placeholder="Give more details about your shipping informations" name="textarea1" id="textarea1"></textarea>
    </div>
  </div>
  <label for="newsletter" class="Label Label--block">Newsletter</label>
  <div class="Grid u-mgb--m">
    <div class="Grid-cell Grid-cell--12">
      <div class="Checkbox">
        <input name="newsletter" id="newsletter" type="checkbox" class="Checkbox-input">
        <label for="newsletter" class="Checkbox-label">Would you like to receive our newsletter?</label>
      </div>
    </div>
  </div>
  <label for="contactMethod" class="Label Label--block">Prefered contact method</label>
  <div class="u-mgb--m">
    <select class="Select" id="contactMethod" name="contactMethod">
      <optgroup label="Prefered contact method">
        <option value="phone">Phone</option>
        <option value="email">E-mails</option>
        <option selected value="none">None</option>
      </optgroup>
    </select>
  </div>
  <div class="Grid">
    <div class="Grid-cell Grid-cell--12 u-tar">
      <button class="Btn Btn--validate">Submit</button>
    </div>
  </div>
</fieldset>
```
