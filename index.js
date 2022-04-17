const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dishRouter = require("./routes/dish");
const leaderRouter = require("./routes/leaders");
const promotionRouter = require("./routes/promotions");

app.use(express.json());

//Connect Database
mongoose.connect("mongodb://localhost:27017/RupaFarjana").then(() => {
  console.log("Farjana is a Dayni 🧟‍♀️");
  app.listen(3000);

  app.use("/dishes", dishRouter);
  app.use("/leaders", leaderRouter);
  app.use("/promotions", promotionRouter);
});
