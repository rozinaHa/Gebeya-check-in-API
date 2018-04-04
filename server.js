// ~ Load all module dependencies ~ //
var express = require('express');
var mongoose = require('mongoose');
var Visitor = require('./src/models/visitorsModel');
var bodyParser = require('body-parser');
var routes = require('./src/routes/route');

// ~ loading configuration ~ //
var config = require('./config');

// ~ Intialize app ~ // 
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGODB_URL);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(config.HTTP_PORT,function(){
  console.log("check-in-api server started on port" + config.HTTP_PORT);
});
