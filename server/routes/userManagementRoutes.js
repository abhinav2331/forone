'use strict';
var express = require('express');
var passport = require('passport');
var userListRouter = express.Router();
var shared = require('./shared');

userListRouter.route('/users')
    .get(shared.ensureAuthenticated, (req, res) => {
        shared.getNavigation(req.user.access_token, (pages) => {
            res.render(
                "index",
                {
                    token: req.user.access_token,
                    userFullName: req.user.firstName + " " + req.user.lastName,
                    pageTitle: "Users",
                    pages: pages
                })
        });
    });

module.exports = userListRouter;

