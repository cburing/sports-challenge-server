var Config = require('./config/config.js');
var mongoose = require('mongoose');

mongoose.connect([Config.db.host, '/', Config.db.name].join(''),{
    user: Config.db.user,
    pass: Config.db.pass
});

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

var app = express();

app.use(cors());
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Log requests to console
app.use(morgan('dev'));


//passport
var passport = require('passport');
var jwtConfig = require('./passport/jwtConfig');
app.use(passport.initialize());
jwtConfig(passport);


var userRoutes = require("./models/user/userRoutes");
var emailRoutes = require("./models/email/emailRoutes");
app.use('/api', emailRoutes(passport));
app.use('/', userRoutes(passport));

module.exports = app;
