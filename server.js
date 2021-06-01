const express = require('express');
const app = express();
require('./server/config/mongoose.config');

const cors = require('cors');
app.use( cors() );

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
require('./server/routes/hypemeter.routes')(app);

const port = 8000;
app.listen( port, () => console.log(`The express server is listening on port ${port}!`) );

require('dotenv').config();
const jwt = require('jsonwebtoken');