const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tripSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    country: {
      type: String,
    },
    tripImg: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/4164/4164916.png",
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required."],
      default: Date.now,
    },
    endDate: {
      type: Date,
      required: [true, "End date is required."],
      default: Date.now,
    },
    budget: {
      type: Number,
      required: [true, "Budget is required."],
      default: 100,
    },
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Trip", tripSchema);
