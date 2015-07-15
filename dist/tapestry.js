!function ($) {
  "use strict"; // jshint ;_;

  Function.prototype.extend = function (props) {
    var constructor = function () {};
    var prototype = constructor.prototype = new this;
    if (typeof props === "object") for (var key in props) prototype[key] = props[key];
    prototype.__super__ = this.prototype;
    return constructor;
  };

  Function.prototype.create = function () {
    var instance = new this;
    instance.constructor.apply(instance, arguments);
    return instance;
  };

  var classNames = {
    dropdown: 'Dropdown',
    toggle: 'Dropdown-toggle',
    value: 'Dropdown-value',
    list: 'Dropdown-list',
    item: 'Dropdown-item'
  };

  var selectors = {
    dropdown: '.' + classNames.dropdown,
    toggle: '.' + classNames.toggle,
    value: '.' + classNames.value,
    list: '.' + classNames.list,
    item: '.' + classNames.item
  };

  /* DROPDOWN
   * ======== */

  var Dropdown = Object.extend({
    constructor: function (el) {
      this.init(el);
    },

    init: function (el) {
      this.el = el;
      this.updateReferences();
      this.bind();
    },

    updateReferences: function () {
      this.$el = $(this.el);
      this.$toggle = $(selectors.toggle, this.$el);
    },

    bind: function () {
      this.$el.on('click.dropdown.tapestry', selectors.toggle, $.proxy(this.onToggle, this));
    },

    isOpened: function () {
      return this.$toggle.attr('aria-expanded') === 'true';
    },

    open: function () {
      if (this.$toggle.is(':disabled'))
        return;
      Dropdown.closeAll();
      this.$toggle.attr('aria-expanded', true);
      this.$el.focus();
    },

    close: function () {
      this.$toggle.attr('aria-expanded', false);
    },

    toggle: function () {
      this.updateReferences();
      if (this.isOpened())
        this.close();
      else
        this.open();
    },

    onToggle: function (event) {
      event.stopPropagation();
      this.toggle();
    }
  });

  Dropdown.closeAll = function () {
    $(selectors.toggle + '[aria-expanded=true]').attr('aria-expanded', false);
  };

  $(document).on('click.dropdown.tapestry', function (event) { Dropdown.closeAll(); });


  /* DROPDOWN-SELECT
   * =============== */

  var DropdownSelect = Dropdown.extend({
    init: function (el) {
      el = el.nodeName === 'SELECT' ? this.buildFromSelect(el) : el;
      this.__super__.init.call(this, el);
      this.setValue(this.getValue());
    },

    buildFromSelect: function (select) {
      var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });

      var $el = $('<div/>');
      $el.addClass(select.className).addClass(classNames.dropdown);
      $el.attr('data-tapestry', 'dropdown-select');

      var $select = $(select);
      $select.removeAttr('className');
      $select.attr('hidden', true);
      $select.wrap($el);
      $el = $select.parent();

      var $toggle = $('<button/>');
      $toggle.addClass(classNames.toggle);
      $toggle.attr('aria-control', guid);
      $el.append($toggle);

      var $value = $('<span/>');
      $value.addClass(classNames.value);
      $toggle.append($value);

      var $list = $('<ul/>');
      $list.attr('id', guid);
      $list.addClass(classNames.list);
      $el.append($list);

      $('option', $select).each(function (index, option) {
        var $option = $(option),
            value = $option.val();

        if (value) {
            var $item = $('<li/>');
            $item.addClass(classNames.item);
            $item.attr('aria-selected', $option.is(':selected'));
            $item.attr('data-label', $option.attr('data-label'));
            $item.attr('data-value', value);
            $item.html($option.html());
            $list.append($item);
        } else {
          $el.attr('data-placeholder', $option.text());
        }
      });
      return $el.get(0);
    },

    updateReferences: function () {
      Dropdown.prototype.updateReferences.apply(this, arguments);
      this.$value = $(selectors.value, this.$el);
      this.$list = $(selectors.list, this.$el);
      this.$items = $(selectors.item, this.$list);
      this.$input = $(':input', this.$el).not('button, :input[type=button]');
    },

    bind: function () {
      Dropdown.prototype.bind.apply(this, arguments);
      this.$el.on('click.dropdown.tapestry', selectors.item, $.proxy(this.onSelect, this));
      this.$el.on('change.dropdown.tapestry', this.$input, $.proxy(this.onChanged, this));
      this.$el.on('keydown.dropdown.tapestry', $.proxy(this.onKeyDown, this));
      this.$el.on('wheel mousewheel DOMMouseScroll', selectors.list, $.proxy(this.onWheel, this));
    },

    getValue: function () {
      this.value = this.value || this.getSelectedItem().attr('data-value') || null;
      return this.value;
    },

    setValue: function (value) {
        this.selectItem(value ? this.$items.filter('[data-value=' + value + ']') : null);
    },

    itemIsVisible: function (item) {
      item = $(item).get(0);
      var rect = item.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= $(window).height() && rect.right <= $(window).width();
    },

    getSelectedItem: function () {
      return this.$items.filter('[aria-selected=true]');
    },

    getActiveItem: function () {
      return this.$items.filter('.is-active');
    },

    getScrolledToItem: function () {
      return $(this.$scrolledToItem);
    },

    selectItem: function (item) {
      var $item = $(item),
          value = $item.attr('data-value') || null;

      // update value label
      this.$value.html($item.attr('data-label') || $item.html() || this.$el.attr('data-placeholder'));

      // update selected item
      this.$items.removeAttr('aria-selected');
      $item.attr('aria-selected', true);

      // active selected item
      this.activeItem($item);

      // scroll to selected item
      this.scrollToItem($item);

      // store current value
      if (value != this.value) {
        this.value = value;
        this.$input.val(value).change();
      }

      // close dropdown
      this.close();
    },

    activeItem: function (item) {
      var $item = $(item);
      this.$items.removeClass('is-active');
      $item.addClass('is-active');
    },

    activeItemNext: function (item) {
      var $item = $(item),
          $next = $item.length ? $item.next() : this.$items.eq(0);
      if ($next.length) {
        this.activeItem($next);
        if (!this.itemIsVisible($next)) {
          var $scrollToItem = this.getScrolledToItem();
          this.scrollToItem($scrollToItem.length ? $scrollToItem.next() : this.$items.eq(0));
        }
      }
    },

    activeItemPrev: function (item) {
      var $item = $(item),
          $prev = $item.prev();
      if ($prev.length) {
        this.activeItem($prev);
        if (!this.itemIsVisible($prev)) {
          this.scrollToItem(this.getScrolledToItem().prev());
        }
      }
    },

    scrollToItem: function (item) {
      if (!this.isOpened())
        return;
      var $item = $(item);

      // store item
      this.$scrolledToItem = $item;

      // reset
      this.$list.css({ top: 0 });
      // calc new offset
      this.$list.css({ top: $item.length ? this.$value.offset().top - $item.offset().top : 'inherit' });
    },

    open: function () {
      var $item = this.getSelectedItem();
      this.activeItem($item);
      Dropdown.prototype.open.apply(this, arguments);
      this.scrollToItem($item);
    },

    /* EXPERIMENTAL */
    onWheel: function (event) {
      event.preventDefault();
      this._wheelDelta = isNaN(this._wheelDelta) ? 0 : this._wheelDelta;
      this._wheelDelta += ((event.originalEvent.wheelDelta || 0) / 120);
      this._wheelDelta -= ((event.originalEvent.detail || 0) / 3);

      if (Math.abs(this._wheelDelta) > 2) {
        var $item = this.getActiveItem();
        if (this._wheelDelta > 0)
            this.activeItemPrev($item);
        else
            this.activeItemNext($item);
        this._wheelDelta = 0;
      }
    },

    onKeyDown: function (event) {
      event.preventDefault();

      var keycode = event.which || event.keyCode;

      if (this.isOpened()) {
        var $item = this.getActiveItem();

        switch (keycode) {
          case 13: // <ENTER>
            this.selectItem($item);
            break;
          case 27: // <ECHAP>
            this.close();
            break;
          case 38: // <KEY UP>
            this.activeItemPrev($item);
            break;
          case 40: // <KEY DOWN>
            this.activeItemNext($item);
            break;
        }
      } else if (keycode === 13) {
        this.open();
      }
    },

    onSelect: function (event) {
      event.stopPropagation();
      this.selectItem(event.target);
    },

    onChanged: function (event) {
      this.updateReferences();
      this.value = $(event.target).val() || null;
      this.setValue(this.value);
    }

  });

  /* PLUGIN DEFINITION
   * ================= */

  $.fn.dropdown = function () {
    return this.each(function () {
      var $this = $(this);
      $(this).data('dropdown', $(this).data('dropdown') || Dropdown.create(this));
    });
  };

  $.fn.dropdownSelect = function () {
    return this.each(function () {
      var $this = $(this);
      $this.data('dropdown-select', $this.data('dropdown-select') || DropdownSelect.create(this));
    });
  };

}(window.jQuery);

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
