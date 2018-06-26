var mongoose = require('mongoose');
var schedule = mongoose.model('Scheduled');
var Visitor = mongoose.model('Visitors');

//list all schedules
exports.list_all_schedule = function(req,res){
schedule.find({},function(err,schedules){
    if(err){
        res.send(err);
    }
    res.json(schedules);
});
};

//list all schedules of a visitors
exports.list_all_schedule_of_a_visitor = function(req,res){
    schedule.find({visitorsID : req.params.visitorId},function(err,schedules){
        if(err){
            res.send(err);
        }
        res.json(schedules);
    });
};

//create a new schedule
exports.create_a_schedule = function(req,res){

    Visitor.findById(req.params.visitorId, function(err, visitor) {
        if (err)
            res.status(500).send(err);
        else if(!visitor) res.status(404).send('no user found');
        else {
            var new_schedule = new schedule(req.body);
            new_schedule.visitorsID = req.params.visitorId;
            new_schedule.save(function(err,schedule){
                if(err){
                    res.status(500).send(err);
                }
                else res.status(200).json(schedule);
            });
        }
  });
    
};

//update a schedule
exports.update_a_schedule = function(req,res){
    schedule.findOneAndUpdate({_id: req.params.scheduleId}, req.body,{new: false},function(err,schedule){
        if(err){
            res.status(500).send(err);
        }
        else if(!schedule) res.status(404).send("no schedule found");
        else res.status(200).json(schedule);
    });
};

//read a schedule of a visitor
exports.read_a_schedule = function(req,res){
    schedule.find({_id: req.params.scheduleId},function(err,schedule){
        if(err){
            res.status(500).send(err);
        }
        else res.status(200).json(schedule);
    });
};

exports.delete_a_schedule = function(req,res){
    //to be done after deletion extent is known
    schedule.remove({_id: req.params.scheduleId}, function(err, schedule) {
    if (err)
      res.status(500).send(err);
    else if(!schedule) res.status(404).send('no schedule found');
    else res.status(200).json({ message: 'schedule successfully deleted' });
  });
}