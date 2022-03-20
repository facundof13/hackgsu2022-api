require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const jwt_secret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

require('./config/passport');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/user', require('./routes/user'));

app.use((req, res, next) => {
    if (req.headers.authorization) {
        const usertoken = req.headers.authorization;
        const token = usertoken.split(' ');
        const decoded = jwt.verify(token[1], jwt_secret);

        if (decoded) {
            req.user = decoded;
        }
    }
    next();
});


app.use('/api', [
    require('./routes/language'),
    require('./routes/snippet'),
    require('./routes/comment'),
    require('./routes/favorite'),
    require('./routes/framework'),
]);

app.listen(4000, () => {
    console.info('Server started on port 4000');
}).on('error', (err) => {
    console.error(err);
});

module.exports = app;
