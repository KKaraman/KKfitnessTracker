const router = require("express").Router();
const { db, populate } = require("../model/workout.js");
const Workout = require("../model/workout.js");

// this will get all the workouts from the database
app.get("/api/workouts/range",(req,res)=>{
    console.log("getting all the workouts from the database");
    db.Workout.find({})
    .populate("cardioWorkouts")
    .populate("resistanceWorkouts")
    .then(dbWorkout => {
        res.json.(dbWorkout);
    }).catch(err=>{
        res.json.(err);
    })
});

// this should get the last workout from the database
app.get("/api/workouts", (req,res)=>{
    console.log("getting the last workout from the database");
    
});

// this should add an exercise to an existing workout
app.put("/api/workouts/cardio/:id",(req,res)=>{
    console.log("adding an exercise to an existing workout in the database");
    db.Workout.create(req.body)
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { Cardio: _id } }, { new: true }))
        .then(dbLibrary => {
            res.json(dbLibrary);
        })
        .catch(err => {
            res.json(err);
        });
})

app.put("/api/workouts/resistance/:id",(req,res)=>{
    console.log("adding an exercise to an existing workout in the database");
    db.Workout.create(req.body)
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { Resistance: _id } }, { new: true }))
        .then(dbLibrary => {
            res.json(dbLibrary);
        })
        .catch(err => {
            res.json(err);
        });
})

// this should post a workout into the database
app.post("/api/workouts", (req,res) => {
    console.log("posting a workout to the database");
    db.Workout.create({name: req.body.name })
    .then(dbLibrary => {
        res.json(dbLibrary);
    }).catch(err=>{
        res.json(err);
    })
})

