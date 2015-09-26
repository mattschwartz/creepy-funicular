/**
 * AccountController
 *
 * @description :: Server-side logic for managing accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		return res.view('account/index');
	},

	login: function (req, res) {
		return res.view('account/login');
	},
    
    loginPost: function (req, res) {
        var ret = req.params('returnUrl');
        if (ret) {
            return res.redirect(ret);
        }
        
        return res.view('index');
    },
	
	logout: function (req, res) {
		return res.view('account/logout');
	},
    
    logoutPost: function (req, res) {
        return res.view('index')
    }
};
