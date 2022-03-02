require('dotenv').config();
require('./db/office_db');
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
app.use(express.json());

const workers = require('./routers/workers');
const users = require('./routers/users-route');

const passport = require('passport');
require('./config/passport')(passport);

app.use(cors());

app.use('/users', users);
app.use(passport.initialize());
app.use('/workers',passport.authenticate('jwt', { session: false }), workers);

app.get('/', (req, res) => {
    res.send('Server is online');
})

app.listen(port);