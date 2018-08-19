const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//api file for interacting with MongoDB
const api = require('./server/routes/api');

//parsers
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//api location
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//set port
const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));