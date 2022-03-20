const bcrypt = require('bcrypt');
const knex = require('../db/knex');

require('dotenv').config();
const jwt_secret = process.env.JWT_SECRET;

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
    'register',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            session: false,
        },
        (username, password, done) => {
            try {
                knex('user').where({
                    username
                })
                    .first()
                    .then((user) => {
                        if (user) {
                            return done(null, false, { message: 'username already taken' });
                        } else {
                            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
                                knex('user').insert({ username, password: hashedPassword })
                                    .then(user => {
                                        return done(null, user);
                                    });
                            });
                        }
                    });
            } catch (err) {
                done(err);
            }
        }
    )
);

passport.use('login', new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false,
},
    (username, password, done) => {
        try {
            knex('user').where({ username }).first().then((user) => {
                if (!user) {
                    return done(null, false, { message: 'bad username' });
                } else {
                    bcrypt.compare(password, user.password).then(response => {
                        if (!response) {
                            return done(null, false, { message: 'passwords do not match' });
                        }

                        return done(null, user);
                    })
                }
            });
        } catch (err) {
            return done(err);
        }
    })
);

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: jwt_secret,
};

passport.use(
    'jwt',
    new JWTStrategy(options, (jwt_payload, done) => {
        try {
            knex('user').where({ id: jwt_payload.id }).first().then(user => {
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            })
        } catch (err) {
            done(err);
        }
    })
);