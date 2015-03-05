var Styleguide = require('styleguide-generator');
var menuArr = [];
var MyStyleguide = new Styleguide({
	onePage: true,
	srcFolder: 'src/',
	distFolder: 'dist/',
	layoutPath: 'styleguide/layout.html',
	colorsPath: 'src/utils/_colors.scss',
	beforeCompilation: function (data, path) {
		var filename = path.split('/').pop().split('.md')[0];
		menuArr.push(filename);
		return data;
	},
	components: {
		folder: '',
		filesExtension: 'html'
	}
});

function buildNav (arr) {
	var Menu = ['<ul>'];

	arr.forEach(function (item) {
		Menu.push('<li>');
		Menu.push('<a href="#">' + item + '</a>');
		Menu.push('</li>');
	});

	Menu.push('</ul>')
	Menu = Menu.join('');

	Utils.replaceInFile('./dist/index.html', '<!-- %styleguide-nav% -->', Menu);
}

module.exports = function () {
  return MyStyleguide.generate(function () {
		buildNav(menuArr);
		return console.log('✓ Styleguide generated');
  });
};
