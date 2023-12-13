const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
  file: String,
});

module.exports = new mongoose.model("Notices", NoticeSchema);
