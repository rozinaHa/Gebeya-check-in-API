var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var scheduleSchema = new Schema({
    visitorsID: {
    type: String
  },
   appointmentWith : {
       type : String,
       required: 'Kindly enter the name of the assigned employee'

   },

   meetingRoom : {
       type : String,
       required: 'Kindly enter the name of the meeting room'

   },
   dateAndTime : {
       type : Date,
       default: Date.now
   }

});

module.exports = mongoose.model('Scheduled', scheduleSchema);
