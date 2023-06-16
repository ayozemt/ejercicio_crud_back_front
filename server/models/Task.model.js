const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
    task: {
        type: String,
        required: [true, "Task is required."],
    },
    date: {
        type: Date,
        required: [true, "Date is required."],
        default: Date.now,
    },
    status: {
        type: String,
        required: [true, "Status is required."],
        enum: ["Done", "Pending"],
        default: "Pending"
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
    },
    trip: {
        type: Schema.Types.ObjectId,
        ref: "Trip",
    },
}, {
    timestamps: true
});

module.exports = model("Task", taskSchema);