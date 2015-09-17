var express = require("express");
var path = require("path");
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');

var app = express();
app.use('/', serveIndex(__dirname));
app.use(serveStatic(__dirname));

app.listen(80);
