const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');

require('./config/passport');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/user', require('./routes/user'));

// protected routes
app.use('/api', passport.authenticate('jwt', { session: false }),
    [
        require('./routes/snippet')
    ]
);

app.listen(4000, () => {
    console.info('Server started on port 4000');
}).on('error', (err) => {
    console.error(err);
});

module.exports = app;
