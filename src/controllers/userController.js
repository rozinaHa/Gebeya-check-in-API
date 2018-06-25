var mongoose = require('mongoose');
var User = mongoose.model('Users');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

exports.list_all_users = function(req,res){
  User.find({},{password:0},function(err,user){
    if(err)
      res.status(500).send(err);
    res.json(user);
  });
};


exports.create_a_user = function(req,res){
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  var new_user = new User(req.body);
  //assign the hashed password to password
  new_user.password = hashedPassword;
  new_user.save(function (err, user) {
    if (err) return res.status(500).send(err);
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
};

exports.login_a_user = function(req,res){
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
};

exports.read_a_user = function(req,res){
  User.findById(req.params.userId,{password:0},function(err,user){
    if(err){
      res.status(500).send("Error on the server");
    }
    else if (!user) res.status(404).send('No user found.');
    res.status(200).send(user);
  });
};

exports.update_a_user = function(req,res){
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  req.body["password"] = hashedPassword;
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.remove_a_user = function(req,res){
  User.remove({_id : req.params.userId},function(err,user){
    if(err) res.status(500).send("error on the server!!");
    if(!user) res.status(404).send('user not found!!');
    res.status(200).send("user " + user.email + " is removed");
  });
};
