'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
  url = require('url'),
  GaTechStrategy = require('passport-cas').Strategy,
  config = require('../config'),
  users = require('../../app/controllers/users');

module.exports = function() {
  // Use facebook strategy
  passport.use(new GaTechStrategy({
      ssoBaseURL: config.gatech.ssoBaseURL,
      serverBaseURL: config.gatech.serverBaseURL
    },
    function(profile, done) {
      var login = profile.user;

      users.findOne({login: login}, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {message: 'Unknown user'});
        }
        user.attributes = profile.attributes;
        return done(null, user);
      });
    }
  ));
};
