var Styleguide  = require('styleguide-generator');

var styleguide = new Styleguide({
	files: {
		src: 'src/scss',
		colors: false
	}
});

module.exports = styleguide._getComponents();
