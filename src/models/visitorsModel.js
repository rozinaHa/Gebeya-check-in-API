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
    type: String
  },
  trainee: {
	type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String,
    required: 'Kindly enter the phone number of the visitor'
  },
  field_of_work: {
	type: String
  },
  reason: {
    type: String,
    required: 'kindly enter reason of visitation'
  },
  identification_type: {
    type: String
  },
  identification_number: {
    type: String
  },
  appWith: {
	type:String
  },
  scanned_copy: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Visitors', VisitorSchema);
