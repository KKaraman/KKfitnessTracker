//import mongoose package
const mongoose = require("mongoose");
//calling mongoose schema
const Schema = mongoose.Schema;
//create in your schema
const CardioSchema = new Schema({
    cardioNameInput: {
        type: String,
        trim: true,
        required: "Enter a name for the cardio workout"
    },
    distanceInput: {
        type: Number,
        required: "Enter a workout distance"
    },
    durationInput: {
        type: Number,
        required: "Enter a workout duration"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//create a model using the schema
const Cardio = mongoose.model("Cardio", CardioSchema);
//export the model
module.exports = Cardio;