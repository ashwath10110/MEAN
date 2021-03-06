"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var session = require('express-session');
var routes_1 = require("./routes");
var compression = require('compression');
var app = express();
exports.app = app;
app.use(compression());
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET || 'materialshop-secret'
}));
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
app.use('/', express.static(path.join(__dirname, '../client')));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db', { useMongoClient: true });
var db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
    require('./seed'); // Seed database with some sample data
    routes_1.default(app);
    app.listen(app.get('port'), function () {
        console.log('ShopNx listening on port ' + app.get('port'));
    });
});
//# sourceMappingURL=app.js.map