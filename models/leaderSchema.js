const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  designation: String,
  label: Boolean,
});

module.exports = mongoose.model("Leaders", schema);
