const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

module.exports = mongoose.model("Dishes", schema);
