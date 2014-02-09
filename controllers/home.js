/**
 * GET /
 * Home page.
 */
var Listing = require('../models/Listing');

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.postAddrequest = function(req, res) {
    var lst = new Listing({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        type: 'request'
    });
    lst.save(function (err){
        if (err){
            req.flash('errors', { msg: 'Error saving listing' });
        }
        return res.redirect('/getskill');
    });

};

exports.getGetskill = function(req, res) {
//    if (!req.user) return res.redirect('/login');
    Listing.find({type: 'request'}).sort({createdAt: -1}).exec(function (err, listings){
        res.render('getskill', {
            title: 'Learn',
            listings: listings,
            user: req.user
        });
    });
}

exports.getListings = function(req, res){
    Listing.find({type: req.params.type}).sort({createdAt: -1}).exec(function (err, listings){
        res.send(listings);
    });
}

exports.giveskill = function(req, res) {
    if (!req.user) return res.redirect('/login');
}

exports.getAddrequest = function(req, res){
    res.render('addrequest',{
        title: 'Add request'
    })
}