const express = require('express');
const morganBody = require('morgan-body');

const routes = require('./routes');
const log = require('./config/log');

const app = express();

app.use(express.json());

morganBody(app, {
    noColors: true,
    stream: log,
});

app.use(routes);

app.listen(3333);