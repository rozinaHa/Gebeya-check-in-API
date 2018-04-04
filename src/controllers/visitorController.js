var mongoose = require('mongoose');
var visitor = mongoose.model('Visitors');
var fs = require('fs');

exports.list_all_visitors = function(req,res){
  visitor.find({},function(err,visitor){
    if(err)
      res.send(err);
    res.json(visitor);
  });
};

exports.create_a_visitor = function(req, res) {
  var new_visitor = new visitor(req.body);
  new_visitor.scanned_copy.data = fs.readFileSync(req.body.imgPath);
  new_visitor.scanned_copy.data = 'image/jpg';
  new_visitor.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_visitor = function(req, res) {
  visitor.findById(req.params.visitorId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
