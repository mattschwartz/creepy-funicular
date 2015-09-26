/**
 * AccountController
 *
 * @description :: Server-side logic for managing accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {
        var model = {
            firstName: 'Bob',
            lastName: 'Smith',
            uploaded: [
                {
                    url: 'e46e069b-d4d7-42a9-956b-3f64c58a1a3b',
                    uploaded: '09/11/2015'
                },
                {
                    url: 'af04b5c0-40cb-4fcc-8036-d73eb3147f44',
                    uploaded: '09/11/2015'
                }]
        };
        return res.view('account/index', { model: model });
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
