var express = require('express');
var passport = require('passport');
var defaultRouter = express.Router();
var shared = require('./shared');

defaultRouter.route('/')
    .get(shared.ensureAuthenticated, (req, res) => {
        shared.getNavigation(req.user.access_token, (pages) => {
            res.render(
                "index",
                {
                    token: req.user.access_token,
                    userFullName: req.user.firstName + " " + req.user.lastName,
                    pageTitle: "Dashboard",
                    pages: pages
                });
        });
    });

defaultRouter.route('/account/login')
    .get((req, res) => {
        res.render("login", {
            loginFailed: req.flash('error')
        });
    })
    .post(passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/account/login',
        failureFlash: true
    }));

module.exports = defaultRouter;