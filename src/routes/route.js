module.exports = function(app){
  var visitors = require('../controllers/visitorController');
  var mongoose = require('mongoose');
  var visitor = mongoose.model('Visitors');
  var multer  = require('multer');

  var Storage = multer.diskStorage({
      destination: function (req, file, callback) {
          callback(null, "./public/uploads");
      },
      filename: function (req, file, callback) {
          callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
      }
  });

  var upload = multer({ storage : Storage });

  app.route('/visitors')
    .get(visitors.list_all_visitors);

  app.post('/visitors',upload.single('images'),function(req,res){
    var new_visitor = new visitor(req.body);
    console.log("uploads/" + req.file.filename);
    new_visitor.scanned_copy = "uploads/" + req.file.filename;
    new_visitor.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(visitor);
    });
  });

    app.route('/tasks/:taskId')
    .get(visitors.read_a_visitor);
};
/*exports.create_a_visitor = (upload.single('images'),function(req, res) {
  //upload.single('images');
  var new_visitor = new visitor(req.body);

  new_visitor.scanned_copy = req.file.path;
  new_visitor.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(visitor);
  });
});*/
