var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var scheduleSchema = new Schema({
    visitorsID: {
    type: String,
    required: 'Kindly enter the id of the visitor'
  },
   appointmentWith : {
       type : String,
       required: 'Kindly enter the name of the assigned employee'
  
   },

   meetingRoom : {
       type : String,
       required: 'Kindly enter the id type of the meeting room'
  
   },
   dateAndTime : {
       type : Date
   }

});

module.exports = mongoose.model('Scheduled', scheduleSchema);
