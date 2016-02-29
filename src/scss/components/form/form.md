# Form
A form displays a set of related user input fields in a structured way
```html
<fieldset class="Fieldset">
  <legend class="Legend">Shipping Information</legend>
  <label class="Label">Title</label>
  <div class="FormRow Grid">
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
  <div class="FormRow Grid">
    <div class="Grid-cell Grid-cell--6">
      <input class="Input" id="firstname" name="firstname" placeholder="First name" value="">
    </div>
    <div class="Grid-cell Grid-cell--6">
      <input class="Input" id="lastname" name="lastname" placeholder="Last name" value="">
    </div>
  </div>
  <label for="street" class="Label Label--block">Billing Address</label>
  <div class="FormRow Grid">
    <div class="Grid-cell Grid-cell--10">
      <input id="street" name="street" class="Input" placeholder="Street name" value="">
    </div>
    <div class="Grid-cell Grid-cell--2">
      <input id="apt" name="apt" class="Input" placeholder="Apt #" value="">
    </div>
  </div>
  <div class="FormRow Grid">
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
  <div class="FormRow Grid">
    <div class="Grid-cell Grid-cell--12">
      <label class="Label Label--block" for="textarea1">Details</label>
      <textarea class="Textarea" placeholder="Give more details about your shipping informations" name="textarea1" id="textarea1" disabled></textarea>
    </div>
  </div>
  <label for="newsletter" class="Label Label--block">Newsletter</label>
  <div class="FormRow Grid">
    <div class="Grid-cell Grid-cell--12">
      <div class="Checkbox">
        <input name="newsletter" id="newsletter" type="checkbox" class="Checkbox-input">
        <label for="newsletter" class="Checkbox-label">Would you like to receive our newsletter?</label>
      </div>
    </div>
  </div>
  <label for="junk" class="Label Label--block">Do you like e-mails?</label>
  <div class="FormRow">
    <select class="Select" id="junk" name="junk">
      <optgroup label="Do you like e-mails?">
        <option value="true">Yes</option>
        <option selected value="false">No</option>
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
