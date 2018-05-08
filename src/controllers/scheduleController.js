var mongoose = require('mongoose');
var schedule = mongoose.model('Scheduled');

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
    var new_schedule = new schedule(req.body);
    new_schedule.visitorsID = req.params.visitorId;
    new_schedule.save(function(err,schedule){
        if(err){
            res.send(err);
        }
        res.json(schedule);
    });
};

//update a schedule
exports.update_a_schedule = function(req,res){
    schedule.findOneAndUpdate({_id: req.params.scheduleId}, req.body,{new: true},function(err,schedule){
        if(err){
            res.send(err);
        }
        res.json(schedule);
    });
};

//read a schedule of a visitor
exports.read_a_schedule = function(req,res){
    schedule.find({_id: req.params.scheduleId},function(err,schedule){
        if(err){
            res.send(err);
        }
        res.json(schedule);
    });
};

exports.delete_a_schedule = function(req,res){
    //to be done after deletion extent is known
    
    res.send("schedule is deleted");
}