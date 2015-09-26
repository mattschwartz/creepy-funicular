/**
 * AccountController
 *
 * @description :: Server-side logic for managing accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		return res.view('account/index', { loginSession: null });
	},

	login: function (req, res) {
		console.log('login')
		return res.view('index');
	},
	
	logout: function (req, res) {
		console.log('logout')
		return res.view('index');
	}
};
