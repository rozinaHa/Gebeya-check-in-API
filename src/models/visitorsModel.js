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
  company_or_school_name: {
    type: String
  },
  email_or_phone: {
    type: String,
    required: 'Kindly enter the email or phone number of the visitor'
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
    data: Buffer,
    contentType: String,
    required: 'Kindly enter the scan copy of the visitor'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
