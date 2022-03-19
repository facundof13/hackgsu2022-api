require('dotenv').config();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET;

module.exports = class UserController {
    constructor() {
    }

    register = (req, res) => {
        console.log(req.body);
        passport.authenticate('register', (err, user, info) => {
            console.log(err, user, info);
            if (!err) {
                req.logIn(user, (err) => {
                    res.json({ successful: user ? true : false, message: info?.message });
                });
            } else {
                res.json({ successful: false });
            }

        })(req, res);
    }

    login = (req, res, next) => {
        passport.authenticate('login', (err, user, info) => {
            if (!err) {
                req.logIn(user, err => {
                    if (user) {
                        const token = jwt.sign({ id: user.id }, jwt_secret);
                        res.send({
                            successful: true,
                            token,
                        });
                    } else {
                        res.send({ successful: false });
                    }
                });
            }
        })(req, res, next);
    }
}