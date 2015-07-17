!function ($) {
  "use strict"; // jshint ;_;

  $.fn.tapestry = function () {
    return this.each(function () {
      var $this = $(this),
          fnInit = function (el) {
            var $el = $(el);
            switch ($el.attr('data-tapestry')) {
              case 'dropdown':
                $el.dropdown();
                break;
              case 'dropdown-select':
                $el.dropdownSelect();
                break;
            }
          };

      if ($this.attr('data-tapestry')) {
        fnInit(this);
      } else {
        $('[data-tapestry]', $this).each(function (index, el) { fnInit(el); });
      }

      if (this.nodeName === 'SELECT') {
        $this.dropdownSelect();
      } else {
        $('select', $this).each(function (index, select) {
          var $select = $(select);
          if (!$select.parents().is('[data-tapestry=dropdown-select]'))
            $select.dropdownSelect();
        });
      }
    });
  };

  /* ONLOAD INITIALIZATION
  * ====================== */

  $(document).on('ready', function () {
    $(document).tapestry();
  });

}(window.jQuery);
