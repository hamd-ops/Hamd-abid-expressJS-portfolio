let express = require('express');
let router = express.Router();

/* GET Home page. lecture zip file */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

/* GET About Me page.lecture zip file */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Me' });
});

/* GET Projects page.  */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;