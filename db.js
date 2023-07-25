const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017")
    .then(() => {
      console.log("Successfully connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB");
    });
};

module.exports = connect;
