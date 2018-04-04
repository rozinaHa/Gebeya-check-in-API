module.exports = function(app){
  var visitor = require('../controllers/visitorController');

  app.route('/visitors')
    .get(visitor.list_all_visitors)
    .post(visitor.create_a_visitor);

    app.route('/tasks/:taskId')
    .get(visitor.read_a_visitor);
};
