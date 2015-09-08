var Styleguide  = require('styleguide-generator');
var styleguide  = new Styleguide({
	files: {
		src: 'src/scss',
		dist: 'dist/',
		colors: 'src/scss/utils/var/_color-values.scss'
	},
	type: 'components',
  mdConverter: {
    list: function (body) {
      var _class = 'Styleguide-list';

      return '<ul class="' + _class + '">' + body + '</ul>';
    }
  }
});

module.exports = function () {
  return styleguide.generate(function () {
		return console.log('✓ Styleguide generated');
   });
};
