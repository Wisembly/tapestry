var bs = require('browser-sync');

module.exports = function () {
  return bs({
		files: ['./dist/**/*'],
		server: {
			baseDir: './dist/'
		},
    ghostMode: {
     scroll: false
    }
	});
};
