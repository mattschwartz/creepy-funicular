/**
 * HomeController
 *
 * @description :: Server-side logic for managing homecontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');
var deep = require('../../src/deepdream');
var path = require('path');
var image;
var guide;

var guid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var getImage = function (req, res, err) {
    req.file('ImageUploadImageFile').upload({
        dirname: '../../assets/images/uploads/'
    }, function (_err, files) {
        if (_err) {
            return err(_err);
        }

        if (!files || !files[0]) {
            return getGuide(req, res, err);
        }

        image = fs.renameSync(files[0].fd, 
            path.join(path.dirname(files[0].fd), guid() + '.jpg'));
        return getGuide(req, res, err);
    })
}

var getGuide = function (req, res, err) {
    req.file('PatternUploadImageFile').upload({
        dirname: '../../assets/images/uploads/'
    }, function (_err, files) {
        if (_err) {
            return err(_err);
        }

        if (!files || !files[0]) {
            return final(res);
        }

        guide = files[0].fd;
        guide = fs.renameSync(files[0].fd, 
            path.join(path.dirname(files[0].fd), guid() + '.jpg'));
        return final(res);
    });
}

var final = function (res) {
    // image = deep.dream(image, guide);

    return res.redirect('dreams/' + path.basename(image));
}

module.exports = {
    index: function (req, res) {
        var session = {
            name: 'Matt Schwartz'
        };
        return res.view('index', {
            loginSession: session
        });
    },

    upload: function (req, res) {
        getImage(req, res, function (e) {
            console.log('error', e)
            return res.view('index', {
                error: e
            })
        });
    },

    search: function (req, res) {
        return res.view('search');
    },

    dream: function (req, res) {
        return res.view('dreams', {
            input: req.param('id')
        });
    },

    dreamPost: function (req, res) {
        console.log('req', req);
    }
};
