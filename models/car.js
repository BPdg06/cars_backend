// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const carSchema = new Schema(
  {
    name: String,
    img: String,
    price: String,
  },
  { timestamps: true }
);

// Create our Model Object
const Car = model("Car", carSchema);

// Export our Model Object
module.exports = Car;