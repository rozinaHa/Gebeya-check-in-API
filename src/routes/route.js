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

  app.post('/visitors',upload.single('images'),visitors.create_a_visitor);

    app.route('/visitors/:visitorId')
    .get(visitors.read_a_visitor)
    .delete(visitors.delete_a_visitor);

    app.put('/visitors/:visitorId',upload.single('images'),visitors.update_a_visitor);
};
