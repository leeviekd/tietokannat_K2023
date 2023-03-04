var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const arviointiRouter = require('./routes/arviointi');
const opintojaksoRouter = require('./routes/opintojakso');
const opiskelijaRouter = require('./routes/opiskelija');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/arviointi', arviointiRouter);
app.use('/opintojakso', opintojaksoRouter);
app.use('/opiskelija', opiskelijaRouter);

module.exports = app;
