
var express = require('express');
var passport = require('passport');
var affiliateslistRouter = express.Router();
var shared = require('./shared');

affiliateslistRouter.route('/admin/manager')
    .get(shared.ensureAuthenticated, (req, res) => {
        shared.getNavigation(req.user.access_token, (pages) => {
            res.render(
                "index",
                {
                    token: req.user.access_token,
                    userFullName: req.user.firstName + " " + req.user.lastName,
                    pageTitle: "Affiliate Manager",
                    pages: pages
                })
        });
    });

affiliateslistRouter.route('/reports/website-traffic')
    .get(shared.ensureAuthenticated, (req, res) => {
        shared.getNavigation(req.user.access_token, (pages) => {
            res.render(
                "index",
                {
                    token: req.user.access_token,
                    userFullName: req.user.firstName + " " + req.user.lastName,
                    pageTitle: "Website Traffic",
                    pages: pages
                })
        });
    });

affiliateslistRouter.route('/admin/roi-manager')
    .get(shared.ensureAuthenticated, (req, res) => {
        shared.getNavigation(req.user.access_token, (pages) => {
            res.render(
                "index",
                {
                    token: req.user.access_token,
                    userFullName: req.user.firstName + " " + req.user.lastName,
                    pageTitle: "Affiliate ROI Manager",
                    pages: pages
                })
        });
    });

module.exports = affiliateslistRouter;