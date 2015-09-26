var PythonShell = require('python-shell');

module.exports = {
	dream: function (pattern, img) {
		PythonShell.run('my_script.py', function (err) {
			if (err) throw err;
			console.log('finished');
		});
	}
}