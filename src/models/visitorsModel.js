var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VisitorSchema = new Schema({
  fname: {
    type: String,
    required: 'Kindly enter first name of the visitor'
  },
  lname: {
    type: String,
    required: 'Kindly enter the last name of the visitor'
  },
  category: {
    type: String,
    required: 'please enter category of a visitor'
  },
  company_name: {
    type: String
  },
  school_name: {
    type:String
  },
  Gender: {
    type: String,
    require: 'enter gender of a visitor'
  },
  email: {
    type: String
  },
  phone: {
    type: String,
    required: 'Kindly enter the email or phone number of the visitor'
  },
  reason: {
    type: String,
    required: 'kindly enter reason of visitation'
  },
  identification_type: {
    type: String,
    required: 'Kindly enter the identification type of the visitor'
  },
  identification_number: {
    type: String,
    required: 'Kindly enter the identification number of the visitor'
  },
  scanned_copy: {
    type: String,
    required: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Visitors', VisitorSchema);
