//import mongoose package
const mongoose = require("mongoose");
//calling mongoose schema
const Schema = mongoose.Schema;
//create in your schema
const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the workout"
    },
    // array of cardio models
    cardioWorkouts: [{
        type: Schema.Types.ObjectId,
        ref: "Cardio"
    }],
    // array of resistance models
    resistanceWorkouts: [{
        type: Schema.Types.ObjectId,
        ref: "Resistance"
    }]
});

//create a model using the schema
const Workout = mongoose.model("Workout", WorkoutSchema);
//export the model
module.exports = Workout;