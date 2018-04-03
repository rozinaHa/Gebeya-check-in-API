module.exports = function(app){
  var visitorr = require('../controllers/visitorController');

  app.route('/visitors')
    .get(visitor.list_all_visitors);
}
