// environmental variables
require("dotenv").config();

////////////////////////////////
// Mongoose Connection
////////////////////////////////
// import dependencies
const mongoose = require("mongoose");
// pull out environmental variable from process.env object
const MONGODB_URI = process.env.MONGODB_URI;
// Optional Configuration Object to remove mongo deprecation warnings
const config = { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
};

// Establish Connection to Database
mongoose.connect(MONGODB_URI, config);

// Create the Database Connection message for "Open" "Close" "Error"
mongoose.connection
  .on("open", () => console.log("MONGO CONNECTION IS OPEN"))
  .on("close", () => console.log("MONGO CONNECTION IS CLOSED"))
  .on("error", (error) => console.log(error)
  );


// export mongoose connection to use in server.js
module.exports = mongoose;
