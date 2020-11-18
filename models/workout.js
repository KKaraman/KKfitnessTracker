//import mongoose package
const mongoose = require("mongoose");
//calling mongoose schema
const Schema = mongoose.Schema;
//create in your schema
const WorkoutSchema = new Schema({
   day: {
    type: Date,
    default: Date.now,
    required: "Enter a name for the workout"
    },
    // // array of cardio models
    // cardioWorkouts: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Cardio"
    // }],
    // // array of resistance models
    // resistanceWorkouts: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Resistance"
    // }]
    exercises: [ {
        name: {
        type: String,
        trim: true,
        required: "Enter a name for the workout"
    },
    type: {
        type: String,
        trim: true,
        required: "Enter a type for the workout"
    },
    duration: {
        type: Number,
        trim: true,
        required: "Enter a type for the workout"
    },
    weight: {
        type: Number,
        trim: true
    },
    reps: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true
    },
    distance: {
        type: Number,
        trim: true
    }
    }]
});

//create a model using the schema
const Workout = mongoose.model("Workout", WorkoutSchema);
//export the model
module.exports = Workout;