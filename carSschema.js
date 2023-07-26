const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  car_color: String,
  car_make: String,
  car_model: String,
  purchase_year: String,
  city: String,
  country: String,
  company: String,
});


const carDetails = mongoose.model("CarDetails", carSchema);

module.exports = carDetails;