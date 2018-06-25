var mongoose = require('mongoose');
var visitor = mongoose.model('Visitors');



exports.list_all_visitors = function(req,res,next){
  visitor.find({},function(err,visitor){
    if(err)
      res.status(500).send(err);
    res.json(visitor);
  });
};

exports.create_a_visitor = function(req,res,next){
  var new_visitor = new visitor(req.body);
  console.log("uploads/" + req.file.filename);
  new_visitor.scanned_copy = "uploads/" + req.file.filename;
  new_visitor.save(function(err, visitor) {
    if (err)
      res.status(500).send(err);
    else res.status(200).json(visitor);
  });
};

exports.update_a_visitor = function(req,res){
  
  if(req.file){
    req.body["scanned_copy"] = "uploads/" + req.file.filename;
  }
  
  console.log(req.body);
  visitor.findOneAndUpdate({_id: req.params.visitorId}, req.body, {new: true}, function(err, visitor) {
    if (err)
      res.status(500).send(err);
    else if(!visitor) res.status(404).send('no visitor found');
    else res.status(200).json(visitor);
  });
};

exports.read_a_visitor = function(req, res) {
  visitor.findById(req.params.visitorId, function(err, visitor) {
    if (err)
      res.status(500).send(err);
    else if(!visitor) res.status(404).send('no user found');
    else res.status(200).json(visitor);
  });
};


exports.delete_a_visitor = function(req, res) {


  visitor.remove({
    _id: req.params.visitorId
  }, function(err, visitor) {
    if (err)
      res.status(500).send(err);
    else if(!visitor) res.status(404).send('no visitor found');
    else res.status(200).json({ message: 'Task successfully deleted' });
  });
};
