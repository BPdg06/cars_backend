// GET ENVIRONMENTAL VARIABLES
require("dotenv").config();
// import people controller router
const carRouter = require("./controllers/cars")

// GET PORT FROM ENV VARIABLES
const PORT = process.env.PORT;

// IMPORT DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection");

// CREATE EXPRESS APPLICATION OBJECT
const app = express();

// Setup Middleware
app.use(cors()); // <----- add cors headers
app.use(express.json()); // <---- parses JSON bodies and adds them to req.body
app.use(morgan("tiny")); // <----- logging for debugging

// default route
app.get("/", (req, res) => {
    res.json({Server: "Server is Working"}); // <--- Route to test server
});

//send all "/places" requires to the carRouter
app.use("/cars", carRouter);

// Server Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
