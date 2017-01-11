module.exports = emailRoutes;

function emailRoutes(passport) {

    var emailController = require('./emailController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {
        session: false
    });
    router.use(mw);

    router.route('/email')
        .post(emailController.postEmail)
        .get(emailController.getEmails);

    router.route('/email/:emailId')
        .get(emailController.getEmail);

    return router;
}
