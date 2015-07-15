!function ($) {
  "use strict"; // jshint ;_;

  $.fn.tapestry = function () {
    return this.each(function () {
      var $this = $(this);
      $('[data-tapestry]', $this).each(function (index, el) {
        var $el = $(el);
        switch ($el.attr('data-tapestry')) {
          case 'dropdown':
            $el.dropdown();
            break;
          case 'dropdown-select':
            $el.dropdownSelect();
            break;
        }
      });

      $('select', $this).each(function (index, select) {
        var $select = $(select);
        if (!$select.parents().is('[data-tapestry=dropdown-select]'))
          $select.dropdownSelect();
      });
    });
  };

  /* ONLOAD INITIALIZATION
  * ====================== */

  $(document).on('ready', function () {
    // TMP TMP
    $(document).on('change', '[data-tapestry=dropdown-select]', function (event) {
      console.log('Dropdown-select has changed', event.currentTarget, event.target, $(event.target).val());
    });
    // TMP TMP

    $(document).tapestry();


  });

}(window.jQuery);
