const mongoose = require("mongoose");

const notice = new mongoose.Schema({
  file: String,
});

const Notice = mongoose.model("Notice", notice);

module.exports = Notice;
