require('dotenv').config();
require('./db/office_db');
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
app.use(express.json());

const workers = require('./routers/workers');
const users = require('./routers/users-route');

app.use(cors());

app.use('/users', users);

app.use('/workers', workers);

app.get('/', (req, res) => {
    res.send('Server is online');
})

app.listen(port);