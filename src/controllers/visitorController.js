var mongoose = require('mongoose');
var visitor = mongoose.model('Visitors');

exports.list_all_visitors = function(req,res){
  visitor.find({},function(err,visitor){
    if(err)
      res.send(err);
    res.json(visitor);
  });
};
