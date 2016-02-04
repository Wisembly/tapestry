!function ($) {
  "use strict"; // jshint ;_;

  function extend(obj, props) {
    var constructor = function () {};
    var prototype = constructor.prototype = new obj;
    if (typeof props === "object") for (var key in props) prototype[key] = props[key];
    prototype.__super__ = obj.prototype;
    return constructor;
  };

  function create(obj) {
    var instance = new obj;
    instance.construct.apply(instance, Array.prototype.slice.call(arguments, 1));
    return instance;
  };

  var classNames = {
    dropdown: 'Dropdown',
    toggle: 'Dropdown-toggle Dropdown-selectInput',
    value: 'Dropdown-value',
    list: 'Dropdown-list',
    item: 'Dropdown-item'
  };

  var selectors = {
    dropdown: '.' + classNames.dropdown,
    toggle: '.Dropdown-toggle',
    value: '.' + classNames.value,
    list: '.' + classNames.list,
    item: '.' + classNames.item
  };

  /* DROPDOWN
   * ======== */

  var Dropdown = extend(Object, {
    construct: function (el, options) {
      this.guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
      this.init(el, options);
    },

    init: function (el, options) {
      this.el = el;
      this.updateReferences();
      this.$el.attr('tabindex', this.$el.attr('tabindex') || -1);
      this.setOptions($.extend(this.$el.data(), options));
      this.bind();
    },

    setOptions: function (options) {
      this.options = $.extend({
        keyboard: true
      }, this.options, options);
      return this.options;
    },

    updateReferences: function () {
      this.$el = $(this.el);
      this.$toggle = $(selectors.toggle, this.$el);
      this.$list = $(selectors.list, this.$el);
      this.$items = $(selectors.item, this.$list);
    },

    bind: function () {
      this.$el.off('.dropdown.tapestry');
      this.$el.on('click.dropdown.tapestry', selectors.toggle, $.proxy(this.onToggle, this));
      this.$el.on('keydown.dropdown.tapestry', $.proxy(this.onKeyDown, this));
    },

    isOpened: function () {
      return this.$toggle.attr('aria-expanded') === 'true';
    },

    open: function () {
      if (this.$toggle.is(':disabled'))
        return;
      Dropdown.closeAll();
      this.activeItem();
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

    getActiveItem: function () {
      return this.$items.filter('.is-active');
    },

    activeItem: function (item) {
      var $item = $(item);
      this.$items.removeClass('is-active');
      return $item.addClass('is-active');
    },

    activeItemNext: function (item) {
      var $item = $(item),
          index = this.$items.index($item),
          $next = this.$items.eq(index + 1);
      if ($next.length)
        return this.activeItem($next);
      return $next;
    },

    activeItemPrev: function (item) {
      var $item = $(item),
          index = this.$items.index($item),
          $prev = this.$items.eq(Math.max(0, index - 1));
      if ($prev.length)
        return this.activeItem($prev);
      return $prev;
    },

    onToggle: function (event) {
      event.stopPropagation();
      this.toggle();
    },

    onKeyDown: function (event) {
      if (this.options.keyboard !== true)
        return;
      event.preventDefault();
      var keycode = event.which || event.keyCode;

      if (this.isOpened()) {
        var $item = this.getActiveItem();

        switch (keycode) {
          case 13: // <ENTER>
            if ($item.length)
              $item.click();
            else
              this.close();
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
    }
  });

  Dropdown.closeAll = function () {
    $(selectors.toggle + '[aria-expanded=true]').attr('aria-expanded', false);
  };

  $(document).on('click.dropdown.tapestry', function (event) { Dropdown.closeAll(); });


  /* DROPDOWN-SELECT
   * =============== */

  var DropdownSelect = extend(Dropdown, {
    init: function (el, options) {
      options = $.extend($(el).data(), options);
      el = el.nodeName === 'SELECT' ? this.buildFromSelect(el) : el;
      this.__super__.init.call(this, el, options);
      this.value = this.getValue();
      this.setValue(this.value);
    },

    setOptions: function (options) {
      return this.__super__.setOptions.call(this, $.extend({
          placeholder: '',
          wheel: false,
          scroll: false
        }, this.options, options));
    },

    buildFromSelect: function (select) {
      var $el = $('<div/>');
      $el.addClass(select.className).addClass(classNames.dropdown);
      $el.attr('data-tapestry', 'dropdown-select');

      var $select = $(select);
      $select.removeAttr('className');
      $select.removeAttr('data-tapestry');
      $select.attr('hidden', true);
      $select.wrap($el);
      $el = $select.parent();

      var $toggle = $('<button/>');
      $toggle.addClass(classNames.toggle);
      $toggle.attr('type', 'button').attr('aria-control', this.guid);
      $el.append($toggle);

      var $value = $('<span/>');
      $value.addClass(classNames.value);
      $toggle.append($value);

      var $list = $('<ul/>');
      $list.attr('id', this.guid);
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
      this.$input = $(':input', this.$el).not('button, :input[type=button]');
    },

    bind: function () {
      Dropdown.prototype.bind.apply(this, arguments);
      this.$el.on('click.dropdown.tapestry', selectors.item, $.proxy(this.onSelect, this));
      this.$el.on('wheel.dropdown.tapestry mousewheel.dropdown.tapestry DOMMouseScroll.dropdown.tapestry', selectors.list, $.proxy(this.onWheel, this));
      this.$input.on('change.dropdown.tapestry', $.proxy(this.onChanged, this));
    },

    getValue: function () {
      var value = this.$input.val() || this.getSelectedItem().attr('data-value') || null;
      if (!value && !this.options.placeholder)
        value = this.$items.eq(0).attr('data-value');
      return value;
    },

    setValue: function (value) {
      var selector = value ? '[data-value="' + value + '"]': '[data-value=""]';
      this.selectItem(this.$items.filter(selector));
    },

    itemIsVisible: function (item, direction) {
      item = $(item).get(0);
      if (!item)
        return false;
      var rect = item.getBoundingClientRect(),
          horizontal = rect.left >= 0 && rect.right <= $(window).width(),
          vertical = rect.top >= 0 && rect.bottom <= $(window).height();
      return direction === 'vertical' ? vertical : (direction === 'horizontal' ? horizontal : vertical && horizontal);
    },

    getSelectedItem: function () {
      return this.$items.filter('[aria-selected=true]');
    },

    getScrolledToItem: function () {
      return $(this.$scrolledToItem);
    },

    selectItem: function (item) {
      var $item = $(item),
          value = $item.attr('data-value') || null;

      // update value label
      this.$value.html($item.attr('data-label') || $item.html() || this.options.placeholder);

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

      return $item;
    },

    activeItemNext: function (item) {
      var $next = Dropdown.prototype.activeItemNext.apply(this, arguments);
      if ($next.length && !this.itemIsVisible($next, 'vertical')) {
          var $scrollToItem = this.getScrolledToItem();
          this.scrollToItem($scrollToItem.length ? $scrollToItem.nextAll(selectors.item).eq(0) : this.$items.eq(0));
      }
      return $next;
    },

    activeItemPrev: function (item) {
      var $prev = Dropdown.prototype.activeItemPrev.apply(this, arguments);
      if ($prev.length && !this.itemIsVisible($prev, 'vertical'))
        this.scrollToItem(this.getScrolledToItem().prevAll(selectors.item).eq(0));
      return $prev;
    },

    scrollToItem: function (item) {
      var $item = $(item);
      if (this.options.scroll === true && this.isOpened()) {
        // store item
        this.$scrolledToItem = $item;

        // reset
        this.$list.css({ top: 0 });
        // calc new offset
        this.$list.css({ top: $item.length ? this.$value.offset().top - $item.offset().top : 'inherit' });
      }
      return $item;
    },

    open: function () {
      Dropdown.prototype.open.apply(this, arguments);
      var $item = this.getSelectedItem();
      this.activeItem($item);
      this.scrollToItem($item);
    },

    onSelect: function (event) {
      event.stopPropagation();
      this.selectItem(event.currentTarget);
    },

    onChanged: function (event) {
      this.updateReferences();
      var value = $(event.currentTarget).val() || null;
      if (value !== this.value) {
        this.value = value;
        this.setValue(this.value);
      }
    },

    /* EXPERIMENTAL */
    onWheel: function (event) {
      if (this.options.wheel !== true)
        return;
      var $first = this.$items.filter(':first'),
          $last = this.$items.filter(':last');
      if (this.itemIsVisible($first, 'vertical') && this.itemIsVisible($last, 'vertical'))
        return;
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
    }

  });

  /* PLUGIN DEFINITION
   * ================= */

  $.fn.dropdown = function (options) {
    return this.each(function () {
      var $this = $(this),
          component = $(this).data('dropdown');
      if (component)
        component.setOptions(options);
      else
        $(this).data('dropdown', create(Dropdown, this, options));
    });
  };

  $.fn.dropdownSelect = function (options) {
    return this.each(function () {
      var $this = $(this),
          component = $(this).data('dropdown-select');
      if (component)
        component.setOptions(options);
      else
        $(this).data('dropdown-select', create(DropdownSelect, this, options));
    });
  };

}(window.jQuery);
