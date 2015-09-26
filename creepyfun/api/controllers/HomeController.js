/**
 * HomeController
 *
 * @description :: Server-side logic for managing homecontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function(req, res) {
		return res.view('index');
	},
	
	search : function(req, res) {
		console.log('Your query: ' + req.params("query"));
		return res.view('search');
	}
};
