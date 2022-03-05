const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const fs = require('fs');
const routes = require('./routes/routes');
const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().address + ':' + server.address().port);
});

app.use(express.static('pages'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app, fs);
