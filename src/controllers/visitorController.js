var mongoose = require('mongoose');
var visitor = mongoose.model('Visitors');



exports.list_all_visitors = function(req,res){
  visitor.find({},function(err,visitor){
    if(err)
      res.send(err);
    res.json(visitor);
  });
};

exports.create_a_visitor = function(req,res){
  var new_visitor = new visitor(req.body);
  console.log("uploads/" + req.file.filename);
  new_visitor.scanned_copy = "uploads/" + req.file.filename;
  new_visitor.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(visitor);
  });
};

exports.update_a_visitor = function(req,res){
  console.log(req.file.filename);
  console.log(req.body);
  req.body["scanned_copy"] = "uploads/" + req.file.filename;
  console.log(req.body);
  visitor.findOneAndUpdate({_id: req.params.visitorId}, req.body, {new: true}, function(err, visitor) {
    if (err)
      res.send(err);
    res.json(visitor);
  });
};

exports.read_a_visitor = function(req, res) {
  visitor.findById(req.params.visitorId, function(err, visitor) {
    if (err)
      res.send(err);
    res.json(visitor);
  });
};


exports.delete_a_visitor = function(req, res) {


  visitor.remove({
    _id: req.params.visitorId
  }, function(err, visitor) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
