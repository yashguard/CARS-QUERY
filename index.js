const express = require("express");
const connect = require("./db");
const carDetails = require("./carSschema");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

server.post("/addCar", (req, res) => {
  carDetails.create(req.body);
  res.send("Done adding")
});

server.listen(8010, () => {
  console.log("Server is running");
  connect();
});
