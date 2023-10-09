const mongoose = require("mongoose");

const advocatesData = new mongoose.Schema({
  name: String,
  father_name: String,
  joining_date: Date,
  address: String,
  phone: Number,
  photo: String,
});

const Adata = mongoose.model("Adata", advocatesData);

module.exports = Adata;
