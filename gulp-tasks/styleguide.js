var Styleguide  = require('styleguide-generator');

var styleguide  = new Styleguide({
	files: {
		src: 'src/scss',
		dist: 'website',
		colors: 'src/scss/utils/var/_color-values.scss'
	},
	json: 'website/components',
	silent: true,
  mdConverter: {
    list: function (body) {
      var _class = 'Styleguide-list';

      return '<ul class="' + _class + '">' + body + '</ul>';
    },
		paragraph: function (str, a) {
			return '<p class="s-Paragraph">' + str + '</p>';
		},
		table: function (header, body) {
			return '<table class="s-Table">' + header + body + '</table>';
		}
  }
});

module.exports = function () {
  return styleguide.generate(function () {
		return console.log('✓ Styleguide generated');
  });
};
