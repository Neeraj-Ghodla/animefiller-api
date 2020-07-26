const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/routes");

// intialize the app
const app = express();

// set up the port
const PORT = process.env.PORT || 3000;

// connect to the database and start the server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();
    app.use("/api", routes);

    app.listen(PORT, () => {
      console.log("Server has started!");
    });
  });
