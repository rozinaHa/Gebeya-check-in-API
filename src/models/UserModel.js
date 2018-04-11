var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  fname: {
    type: String,
    required: 'Kindly enter first name of the visitor'
  },
  lname: {
    type: String,
    required: 'Kindly enter the last name of the visitor'
  },
  email: {
    type: String,
    required: 'Kindly enter the last name of the visitor'
  },
  password: {
    type: String,
    required: 'Kindly enter the last name of the visitor'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);
