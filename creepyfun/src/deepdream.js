var PythonShell = require('python-shell');
var execFile = require('child_process').execFile;

module.exports = {
	dream: function (pattern, img) {
		console.log('start of dream func')

		var filename = '/../assets/images/uploads/' + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		}) + '.jpg';

		var processInfo = 'C:\Users\Andrew\Anaconda\dreamify.py -o ' + img + ' -g ' + pattern + ' -s ' + filename;

		console.log('starting')

		var process = require('child_process').exec(processInfo, { cwd: 'C:\Users\Andrew\Anaconda' }, function (err, stdout, stderr) { console.log('test'); });
		// var process = require('child_process').spawn('dir');
		
		var alive = true;

		process.stdout.on('data', function (data) { console.log(data) });
		// // add an 'end' event listener to close the writeable stream
		process.stdout.on('end', function (data) {
			console.log('done with command');

			alive = false;
		});

		process.on('exit', function () {
			console.log('end')

			alive = false;
		})

		while (alive) {
			setTimeout(function () {
			}, 5000);
		}

		console.log('end of method')
	}
}