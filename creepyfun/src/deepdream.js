var PythonShell = require('python-shell');

module.exports = {
	dream: function (pattern, img) {
		var filename = '/output/' + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		}); + '.jpg';

		var process = '/dream/dreamify.py -o ' + img + ' -g ' + pattern + ' -s ' + filename;

		PythonShell.run(process, function (err) {
			if (err) throw err;
			console.log('finished');
			return filename;
		});
	}
}