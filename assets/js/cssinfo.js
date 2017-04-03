var CSSInfo = {
  data: ["h1", "h2", "h3", "h4", "h5", ".Icon"],

  specs: ["font-size", "line-height", "margin-top", "margin-bottom", "padding-top", "padding-bottom"],

  analyze: function () {
    this.data.map(function (selector) {
      return document.querySelectorAll(selector);
    }).forEach(function (items) {
      for (var n = 0; n < items.length; n++) {
        var e = items[n],
            info = this.getCSSValue(e).join(' • ');

        e.setAttribute("title", info);
      }
    }.bind(this));
  },

  getCSSValue: function (element) {
    var info = [];
    for (i = 0; i < this.specs.length; i++) {
      var value = window.getComputedStyle(element).getPropertyValue(this.specs[i])
      value = this.round(value);
      info.push(this.specs[i] + ": " + value);
    }
    return info;
  },

  round: function (value) {
    value = Math.ceil(parseFloat(value));
    value = value.toString() + "px";
    return value;
  }
}

CSSInfo.analyze();
