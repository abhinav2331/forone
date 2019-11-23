var express = require('express');
var passport = require('passport');
var leadGenerationRouter = express.Router();
var shared = require('./shared');

leadGenerationRouter.route('/configuration/categories')
    .get(shared.ensureAuthenticated, (req, res) => {
    shared.getNavigation(req.user.access_token, (pages) => {
        res.render(
            "index",
            {
                token: req.user.access_token,
                userFullName: req.user.firstName + " " + req.user.lastName,
                pageTitle: "Categories",
                pages: pages
            })
    });
});

leadGenerationRouter.route('/exit-traffic/campaigns')
    .get(shared.ensureAuthenticated, (req, res) => {
        shared.getNavigation(req.user.access_token, (pages) => {
            res.render(
                "index",
                {
                    token: req.user.access_token,
                    userFullName: req.user.firstName + " " + req.user.lastName,
                    pageTitle: "Exit Traffic Campaigns",
                    pages: pages
                })
        });
    });

leadGenerationRouter.route('/exit-traffic/campaigns/:campaignId/revenue')
    .get(shared.ensureAuthenticated, (req, res) => {
        shared.getNavigation(req.user.access_token, (pages) => {
            res.render(
                "index",
                {
                    token: req.user.access_token,
                    userFullName: req.user.firstName + " " + req.user.lastName,
                    pageTitle: "Revenue",
                    pages: pages
                })
        });
    });


leadGenerationRouter.route('/question-blocks/campaigns')
    .get(shared.ensureAuthenticated, (req, res) => {
        shared.getNavigation(req.user.access_token, (pages) => {
            res.render(
                "index",
                {
                    token: req.user.access_token,
                    userFullName: req.user.firstName + " " + req.user.lastName,
                    pageTitle: "Question Block Campaign",
                    pages: pages
                })
        });
    });

module.exports = leadGenerationRouter;