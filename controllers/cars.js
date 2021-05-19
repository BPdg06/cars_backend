// CREATE A NEW EXPRESS ROUTE
const router = require("express").Router();

const { Router } = require("express");
//IMPORT OUR MODEL
const Car = require("../models/car");

// SEED DATA FOR SEED ROUTE
const carSeed = [
  {
    name: "Pagani Zonda HP Barchetta",
    img: "https://cdn.motor1.com/images/mgl/gmYPw/s1/pagani-zonda-hp-barchette.jpg",
    price: "$17.5 Million",
  },                
  {
    name: "Rolls-Royce Sweptail",
    img: "https://cdn.motor1.com/images/mgl/eLPlK/s1/rolls-royce-sweptail.jpg",
    price: "$12.8 Million",
  },
  {
    name: "Bugatti La Voiture Noire",
    img: "https://cdn.motor1.com/images/mgl/oz2j0/s1/bugatti-la-voiture-noire.jpg",
    price: "$12.5 Million",
  },
  {
    name: "Bugatti Centodieci",
    img: "https://cdn.motor1.com/images/mgl/q9EVR/s1/most-expensive-cars.jpg",
    price: "$9 Million",
  },
  {
    name: "Mercedes-Maybach Exelero",
    img: "https://cdn.motor1.com/images/mgl/nEKy6/s1/mercedes-maybach-exelero.jpg",
    price: "$8 Million",
  },
];

// ROUTES (async, since database actions are asynchronous)

// Index route
router.get("/", async(req, res) => {
    try{
        const cars = await Car.find({});
        res.json(cars);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create route
router.post("/", async (req, res) => {
    try{
        const newCar = await Car.create(req.body);
        res.json(newCar);
    } catch (error) {
        res.status(400).json(error);
    }
});

// update Route
router.put("/:id", async (req, res) => {
    try {
      // pass the request body to update and existing place in the database
      const updatedCar = await Car.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      // send newly updated place back as JSON
      res.json(updatedCar);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });

// delete Route
router.delete("/:id", async (req, res) => {
    try {
      // delete existing place in the database
      const deletedCar = await Car.findByIdAndRemove(req.params.id);
      // send delete place back as JSON
      res.json(deletedCar);
    } catch (error) {
      // return error as JSON with an error status
      res.status(400).json(error);
    }
  });



// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
  // try block for catching errors
  try {
    // remove all cars from database
    await Car.remove({});
    // add the seed data to the database
    await Car.create(carSeed);
    // get full list of cars to confirm seeding worked
    const cars = await Car.find({});
    // return full list of cars as JSON
    res.json(cars);
  } catch (error) {
    // return error as JSON with an error status
    res.status(400).json(error);
  }
});

// export the router which has all our routes registered to it
module.exports = router;