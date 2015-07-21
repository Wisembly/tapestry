# Form
A form displays a set of related user input fields in a structured way
```html
<fieldset class="Fieldset">
  <legend class="Legend">Shipping Information</legend>
  <label class="Label">Title</label>
  <div class="FormRow Row">
    <div class="Column Column-12">
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
  <label class="Label">Name</label>
  <div class="FormRow Row">
    <div class="Column Column-6">
      <input class="Input" placeholder="First name" value="">
    </div>
    <div class="Column Column-6">
      <input class="Input" placeholder="Last name" value="">
    </div>
  </div>
  <label class="Label">Billing Address</label>
  <div class="FormRow Row">
    <div class="Column Column-10">
      <input class="Input" placeholder="Street name" value="">
    </div>
    <div class="Column Column-2">
      <input class="Input" placeholder="Apt #" value="">
    </div>
  </div>
  <div class="FormRow Row">
    <div class="Column Column-6">
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
    <div class="Column Column-6">
      <label class="Label">Country</label>
      <div class="Dropdown Dropdown--block" data-tapestry="dropdown-select">
        <input name="" value="bar" hidden>
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
  </div>
  <div class="FormRow Row">
    <div class="Column Column-12">
      <label class="Label" for="textarea1">Details</label>
      <textarea class="Textarea" placeholder="Give more details about your shipping informations" id="textarea1"></textarea>
    </div>
  </div>
  <label class="Label">Newsletter</label>
  <div class="FormRow Row">
    <div class="Column Column-12">
      <input name="newsletter" id="newsletter" type="checkbox" class="Checkbox Input--inline" id="Checkbox">
      <label for="newsletter" class="Label Label--inline" for="Checkbox">Would you like to receive our newsletter ?</label>
    </div>
  </div>
  <div class="Row">
    <div class="Column Column-12 u-tar">
      <button class="Btn Btn--validate">Submit</button>
    </div>
  </div>
</fieldset>
```
