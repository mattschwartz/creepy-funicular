/**
 * HomeController
 *
 * @description :: Server-side logic for managing homecontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require('fs');
var deep = require('../../src/deepdream');
var path = require('path');

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
        var image;
        var guide;
        req.file('ImageUploadImageFile').upload({
            dirname: '../../assets/images/uploads/'
        }, function (err, files) {
            if (err)
                return res.serverError(err);
                
            image = files[0].fd;

            req.file('PatternUploadImageFile').upload({
                dirname: '../../assets/images/uploads/'
            }, function (err, files) {
                if (err)
                    return res.serverError(err);
                    
                guide = files[0].fd;
                
                image = deep.dream(image, guide);
                return res.redirect('dreams/' + path.basename(image));
            });
        });
    },

    search: function (req, res) {
        return res.view('search');
    },
    
    dream: function (req, res) {
        return res.view('dreams', {
            input: req.param('id')
        });
    }
};
