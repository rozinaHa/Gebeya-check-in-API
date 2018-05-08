module.exports = function(app){
  var visitors = require('../controllers/visitorController');
  var mongoose = require('mongoose');
  var visitor = require('../models/visitorsModel');
  var user = require('../models/UserModel');
  var userController = require('../controllers/userController');
  var scheduled = require('../models/scheduleModel');
  var schedule = require('../controllers/scheduleController');
  var multer  = require('multer');
  var verifyToken = require('../controllers/verifyToken');

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
    .get(verifyToken,visitors.list_all_visitors);

  app.post('/visitors',verifyToken,upload.single('images'),visitors.create_a_visitor);

    app.route('/visitors/:visitorId')
    .get(verifyToken,visitors.read_a_visitor)
    .delete(verifyToken,visitors.delete_a_visitor);

    app.put('/visitors/:visitorId',verifyToken,upload.single('images'),visitors.update_a_visitor);

    app.route('/users')
    .get(verifyToken,userController.list_all_users)
    .post(verifyToken,userController.create_a_user);

    app.route('/users/:userId')
    .get(verifyToken,userController.read_a_user)
    .put(verifyToken,userController.update_a_user)
    .delete(verifyToken,userController.remove_a_user);

    app.post('/users/login',userController.login_a_user);

    app.get('/schedule',schedule.list_all_schedule);

    app.route('/visitors/schedule/:visitorId')
    .get(schedule.list_all_schedule_of_a_visitor)
    .post(schedule.create_a_schedule);

    app.route('/schedule/:scheduleId')
    .get(schedule.read_a_schedule)
    .put(schedule.update_a_schedule)
    .delete(schedule.delete_a_schedule);
    
};
