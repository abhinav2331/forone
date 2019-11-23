var axios = require('axios');
var express = require('express');
var passport = require('passport');

var shared = {
    ensureAuthenticated: function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) { return next(); }
        res.redirect('/account/login')
    },
    getNavigation: function (apiToken, callback) {
        axios.get(process.env.API_BASEURL + '/reporting/pages/tree', { headers: { 'Authorization': 'Bearer ' + apiToken } })
            .then(response => {
                console.log('response from server')
                callback(response.data);
            }).catch(error => console.log(error));
    }
}

module.exports = shared;