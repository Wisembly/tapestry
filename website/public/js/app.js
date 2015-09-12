var Header = {
  $el: document.getElementById('js-Header')
};

var headroom = new Headroom(Header.$el, {
  offset: 100,
  tolerance: {
    up: 10,
    down: 5
  },
  classes: {
    initial: "",
    pinned: "s-Header--pinned",
    unpinned: "s-Header--unpinned",
    top: "s-Header--top"
  }
});
headroom.init();
