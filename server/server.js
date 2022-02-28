require('dotenv').config();
require('./db/office_db');
const express = require('express');
const app = express();
app.use(express.json);
const port = process.env.PORT;
const cors = require('cors');

const workers = require('./routers/workers');

app.use(cors());

app.use('/workers', workers);

app.get('/', (req, res) => {
    res.send('Server is online');
})

app.listen(port);