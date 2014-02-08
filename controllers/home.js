/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.getskill = function(req, res) {
//    if (!req.user) return res.redirect('/login');
    res.render('getskill', {
        title: 'Get skill',
        user: req.user
    });
}

exports.giveskill = function(req, res) {
    if (!req.user) return res.redirect('/login');
}