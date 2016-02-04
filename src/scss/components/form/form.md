# Form
A form displays a set of related user input fields in a structured way
```html
<fieldset class="Fieldset">
  <legend class="Legend">Shipping Information</legend>
  <label class="Label">Title</label>
  <div class="FormRow Grid">
    <div class="Grid-cell Grid-cell--12">
      <input name="title" id="mr" type="radio" class="Radio Input--inline" id="radioInput">
      <label for="mr" class="Label Label--inline" for="radioInput">Mr</label>
      <input name="title" id="mrs" type="radio" class="Radio Input--inline" id="radioInput">
      <label for="mrs" class="Label Label--inline" for="radioInput">Mrs</label>
      <input name="title" id="ms" type="radio" class="Radio Input--inline" id="radioInput">
      <label for="ms" class="Label Label--inline" for="radioInput">Ms</label>
      <input name="title" id="mx" type="radio" class="Radio Input--inline" id="radioInput">
      <label for="mx" class="Label Label--inline" for="radioInput">Mx</label>
    </div>
  </div>
  <label for="firstname" class="Label">Name</label>
  <div class="FormRow Grid">
    <div class="Grid-cell Grid-cell--6">
      <input class="Input" id="firstname" name="firstname" placeholder="First name" value="">
    </div>
    <div class="Grid-cell Grid-cell--6">
      <input class="Input" id="lastname" name="lastname" placeholder="Last name" value="">
    </div>
  </div>
  <label for="street" class="Label">Billing Address</label>
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
      <label class="Label">State</label>
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
      <label class="Label">Country</label>
      <select class="Dropdown Dropdown--block" data-tapestry="dropdown-select">
        <option value="foo">Simple label 1</option>
        <option value="bar">Simple label 2</option>
        <option value="baz">Simple label 3</option>
      </select>
    </div>
  </div>
  <div class="FormRow Grid">
    <div class="Grid-cell Grid-cell--12">
      <label class="Label" for="textarea1">Details</label>
      <textarea class="Textarea" placeholder="Give more details about your shipping informations" name="textarea1" id="textarea1" disabled></textarea>
    </div>
  </div>
  <label for="newsletter" class="Label">Newsletter</label>
  <div class="FormRow Grid">
    <div class="Grid-cell Grid-cell--12">
      <input name="newsletter" id="newsletter" type="checkbox" class="Checkbox Input--inline" id="Checkbox">
      <label for="newsletter" class="Label Label--inline" for="Checkbox">Would you like to receive our newsletter ?</label>
    </div>
  </div>
  <label for="junk" class="Label">Do you like e-mails?</label>
  <div class="FormRow">
    <div class="SelectWrapper">
      <select class="Select" id="junk" name="junk">
        <optgroup label="Do you like e-mails?">
          <option value="true">Yes</option>
          <option selected value="false">No</option>
        </optgroup>
      </select>
    </div>
  </div>
  <div class="Grid">
    <div class="Grid-cell Grid-cell--12 u-tar">
      <button class="Btn Btn--validate">Submit</button>
    </div>
  </div>
</fieldset>
```
