const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const api = require('./modules/api.js');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express.static('../../dist'));
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (request, response) => {
  response.sendFile('../../dist/index.html');
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));