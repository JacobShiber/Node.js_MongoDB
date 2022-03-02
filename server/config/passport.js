const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const users = require('../models/user-model');

const options = {
    secretOrKey: process.env.SECRET_KEY
};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports = (passportArg) => {
    passportArg.use(new JwtStrategy(options, (jwt_payload, done) => {
        users.findById(jwt_payload._doc._id)
            .then(user => {
                if (user) return done(null, user);
                done(null, false);
            })
            .catch(err => done(err, false));
    })
    )
};