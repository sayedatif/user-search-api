const express = require('express');
const cors = require('cors');
const middleware = require('./middleware');

const app = express();

// port can take values from environment variable else default to 8081
const port = process.env.PORT || 8081;

// middleware to cors; currently not handling whitelist domains logic
app.use(cors());
// custom middle ware to read CSV data
app.use(middleware());

// basic route
require('./routes')(app);

// server start here
app.listen(port);
console.log('App is running on port: ', port);