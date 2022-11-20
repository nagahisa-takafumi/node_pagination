'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const PORT = 3000;

const sampleRouter = require('./router/sampleRouter');

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app
  .use('/', sampleRouter);

const server = http.createServer(app);
server.listen(PORT);
console.log('server start');