const Workout = require("../models/workout.js");

module.exports = (app) => {

// this will get all the workouts from the database
app.get("/api/workouts/range",(req,res)=>{
    console.log("getting all the workouts from the database");
    Workout.find({})
    .sort({day:1})
    .limit(7)
    // .populate("cardioWorkouts")
    // .populate("resistanceWorkouts")
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err=>{
        res.json(err);
    })
});

// this should get the last workout from the database
app.get("/api/workouts", (req,res)=>{
    console.log("getting the last workout from the database");
    Workout.find({})
    .sort({day:1})
    // .populate("cardioWorkouts")
    // .populate("resistanceWorkouts")
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err=>{
        res.json(err);
    })
});

// this should add an exercise to an existing workout
app.put("/api/workouts/:id",(req,res)=>{
    console.log("adding an exercise to an existing workout in the database");
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body}},{ new: true })
        .then(dbLibrary => {
            res.json(dbLibrary);
        })
        .catch(err => {
            res.json(err);
        });
});

// this should post a workout into the database
app.post("/api/workouts", (req,res) => {
    console.log("posting a workout to the database");
    Workout.create({})
    .then(dbLibrary => {
        res.json(dbLibrary);
    }).catch(err=>{
        res.json(err);
    });
});
}
