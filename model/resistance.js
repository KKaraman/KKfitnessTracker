const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ResistanceSchema = new Schema({
    nameInput: {
        type: String,
        trim: true,
        required: "Enter a name for the resistance workout"
    },
    weightInput: {
        type: Number,
        required: "Enter the weight of equipment"
    },
    setsInput: {
        type: Number,
        required: "Enter the number of sets"
    },
    repsInput: {
        type: Number,
        required: "Enter the number of reps"
    },
    resistanceDurationInput: {
        type: Number,
        required: "Enter a workout duration"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;