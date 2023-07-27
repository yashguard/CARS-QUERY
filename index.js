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
  // const carList = await carDetails.find({gender : "Male", car_color : "Pink"});
  // const cars = await carDetails.find({gender : "Male", car_color : "Pink"}).count();
  // res.status(200).send(carList);
  // console.log(cars);
  // <================== Second Query ==================>
  // <================== Women who own a Red or a Blue Car ==================>
  // const carList = await carDetails.find({
  //   gender: "Female",
  //   car_color: { $in: ["Red", "Blue"] },
  // });
  // const cars = await carDetails
  //   .find({ gender: "Female", car_color: { $in: ["Red", "Blue"] } })
  //   .count();
  // res.status(200).send(carList);
  // console.log(cars);
  // <================== Third Query ==================>
  // <================== Men who purchased the car in the year 1998 ==================>
  // const carList = await carDetails.find({
  //   gender: "Male",
  //   purchase_year: 1998,
  // });
  // const cars = await carDetails
  //   .find({ gender: "Male", purchase_year: 1998 })
  //   .count();
  // res.status(200).send(carList);
  // console.log(cars);
  // <================== Fourth Query ==================>
  // <================== Women who purchased a Yellow car in the year 1985 ==================>
  // const carList = await carDetails.find({
  //   gender: "Female",
  //   car_color: "Yellow",
  //   purchase_year: 1985,
  // });
  // const cars = await carDetails
  //   .find({
  //     gender: "Female",
  //     car_color: "Yellow",
  //     purchase_year: 1985,
  //   })
  //   .count();
  // res.status(200).send(carList);
  // console.log(cars);
  // <================== Fifth Query ==================>
  // <================== Men who either have a Red or Green car and either live in Germany or Kenya ==================>
  const carList = await carDetails.find({
    gender: "Male",
    car_color: { $in: ["Red", "Green"] },
    country: { $in: ["Germany", "Kenya"] },
  });
  const cars = await carDetails
    .find({
      gender: "Male",
      car_color: { $in: ["Red", "Green"] },
      country: { $in: ["Germany", "Kenya"] },
    })
    .count();
  res.status(200).send(carList);
  console.log(cars);
});

server.listen(8010, () => {
  console.log("Server is running");
  connect();
});
