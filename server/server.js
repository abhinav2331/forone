/*
    https://docs.microsoft.com/en-us/visualstudio/nodejs/tutorial-nodejs-with-react-and-jsx
*/

var path = require('path');
var express = require('express');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var axios = require('axios');
var cookieParser = require('cookie-parser');
var qs = require('qs');
var cors = require('cors');
var http = require('http');
var chalk = require('chalk');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var env = require("dotenv").config();

var app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser('fhgf67f76vdtfgw2sinbvcxwqhai6556')); // cookie parser must use the same secret as express-session.
app.use(flash());

// required for passport
app.use(session({
    secret: 'fhgf67f76vdtfgw2sinbvcxwqhai6556',
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 60 * 1000
    }
})); // session secret

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new LocalStrategy({}, function (username, password, done) {
    if (username != null && password != null) {
        console.log(process.env.API_BASEURL);
        axios.post(process.env.API_BASEURL + 'oauth/token', qs.stringify({
            client_id: process.env.API_CLIENTID,
            client_secret: process.env.API_CLIENTSECRET,
            username: username,
            password: password,
            grant_type: "password"
        })).then(response => {
            if (response.data.access_token) {

                var user = response.data;
                user.username = username;
                user.access_token = response.data.access_token;

                // grab claims
                axios.get(process.env.API_BASEURL + '/users/me', { headers: { 'Authorization': 'Bearer ' + response.data.access_token } }).then(userRes => {
                    user.roles = userRes.data.UserRoles;
                    user.firstName = userRes.data.FirstName;
                    user.lastName = userRes.data.LastName;

                    console.log(userRes);
                    return done(null, user);
                }).catch(error => {
                    console.log("Whoops" + error.message);
                    return done(null, false, { message: "Something went wrong, please try again" });
                });
            }
            else {
                return done(null, false, { message: 'Invalid username or password' });
            }
        })
            .catch(error => {
                return done(null, false, { message: "Something went wrong, please try again" });
            });
    }
}
));

var staticPath = path.join(__dirname, '/../');
app.use("/public/css", express.static(path.join(staticPath, "/css")));
app.use("/public/dist", express.static(path.join(staticPath, "/dist")));
app.use("/public/images", express.static(path.join(staticPath, "/images")));
app.use("/public/scripts", express.static(path.join(staticPath, "/scripts")));

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var defaultRoutes = require('./routes/defaultRoutes');
var affiliateRoutes = require('./routes/affiliateRoutes');
var configurationRoutes = require('./routes/configurationRoutes');
var leadGenerationRoutes = require('./routes/leadGenerationRoutes');

app.use('/', defaultRoutes);
app.use('/affiliates', affiliateRoutes);
app.use('/lead-generation', leadGenerationRoutes);
app.use('/configuration', configurationRoutes);

var server = app.listen(app.get('port'), function () {
    console.log('listening on port ' + chalk.green(app.get('port')));
});
