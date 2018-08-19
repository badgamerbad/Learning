const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
const http = require('http');
const mongoose = require('mongoose');
const config = require('./config/config');

mongoose.connect('mongodb://root:root@ds131698.mlab.com:31698/test-db');

require('./models/folder');

//for req.body
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//api file to interact with MongoDB
require('./routes/api')(app);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('', (req, res) => {
    res.sendFile( path.join(__dirname, 'dist', 'index.html') );
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen( port, () => console.log('running server on %d', port) );
