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
    initial: "s-Header",
    pinned: "s-Header--pinned",
    unpinned: "s-Header--unpinned",
    top: "s-Header--top",
    notTop : "s-Header--not-top"
  }
});
headroom.init();
