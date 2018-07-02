// ~ Load all module dependencies ~ //
var express = require('express');
var mongoose = require('mongoose');
var Visitor = require('./src/models/visitorsModel');
var bodyParser = require('body-parser');
var routes = require('./src/routes/route');
var fs = require('fs');
const path = require('path');
var https = require('https');
var cors = require('cors');

// ~ loading configuration ~ //
var config = require('./src/config');

// ~ Intialize app ~ //
var app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGODB_URL);

//https config
var options = {
  key: fs.readFileSync(path.join(__dirname,'ssl','server.key')),
  cert: fs.readFileSync(path.join(__dirname,'ssl','server.crt'))
};

//middleware allow all origins
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/uploads', express.static('public/uploads'));
routes(app);

app.listen(config.HTTP_PORT,function(){
  console.log("check-in-api server started on port" + config.HTTP_PORT);
});

https.createServer(options, app).listen(8001,function(){
	console.log("server started");
});
