require('dotenv').config();
require('./db/office_db');
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const path = require('path');
app.use(express.json());

const workers = require('./routers/workers');
const users = require('./routers/users-route');

const passport = require('passport');
require('./config/passport')(passport);

app.use(cors());

app.use(passport.initialize());
app.use('/users', users);
app.use('/workers', passport.authenticate('jwt', { session: false }), workers);

// app.get('/', (req, res) => {
//     res.send('Server is online');
// })


app.listen(port);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client')));
    app.get('/', (req, res) =>
        res.sendFile(path.join(_dirname, '../client/build/index.html'))
    )
}