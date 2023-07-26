const express = require("express");
const connect = require("./db");
const carDetails = require("./carSschema");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  const car = await carDetails.find();
  res.status(200).send(car);
});

server.post("/addCar", async (req, res) => {
  // <================== First Query ==================>
  // <================== Men who own a Pink car ==================>
  const carList = await carDetails.find({gender : "Male", car_color : "Pink"});
  const cars = await carDetails.find({gender : "Male", car_color : "Pink"}).count();
  res.status(200).send(carList);
  console.log(cars);
});

server.listen(8010, () => {
  console.log("Server is running");
  connect();
});
