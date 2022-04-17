const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  discount: String,
});

module.exports = mongoose.model("Promotions", schema);
