var Styleguide  = require('styleguide-generator');
var styleguide  = new Styleguide({
	files: {
		src: 'src/scss',
		dist: 'dist/',
		colors: 'src/scss/utils/var/_color-values.scss'
	},
	type: 'onepage',
	onepage: {
		layout: 'styleguide/layout.html',
		stylesheets: [
			'styleguide/styleguide.css',
			'styleguide/code-style.css'
		]
	},
	components: {
		extension: 'html'
	}
});

module.exports = function () {
  return styleguide.generate(function () {
		return console.log('✓ Styleguide generated');
   });
};
