/**
 * HomeController
 *
 * @description :: Server-side logic for managing homecontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs')

module.exports = {
	index: function (req, res) {
		return res.view('index');
	},

	upload: function (req, res) {
		req.file('imageUploaded').upload(function (err, files) {
			if (err)
				return res.serverError(err);

			// Files is an array and each index looks like:
			/* var uploadedFileMetaData = {
				fd: 'file-path',					// the local path to the file on the server
				size: 0,							// the size of the image in bytes
				type: 'mimetype',					// the mime type for the image like image/jpeg
				filename: 'uploaded-filename.ext',	// the file name plus extension
				status: 'bufferingOrWriting',		// a status
				field: 'imageUploaded',				// the corresponding field on the form
				extra: null							// extra data
			}; */
			
			console.log('file was uploaded to', files[0].fd);

			return res.view('upload-complete');
		});
	},

	search: function (req, res) {
		console.log('Your query: ' + req.params("query"));
		return res.view('search');
	}
};
