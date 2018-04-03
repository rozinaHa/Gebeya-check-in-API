# This line is added by bereket !
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Visitor = require('.src/models/visitorController');
var bodyParser = require('body-parser');
var routes = require('.src/routes/route');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/visitordb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port,function(){
  console.log("check-in-api server started on port" + PORT);
});
