require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const lawyerController = require("./controller/layerController");
const noticeController = require("./controller/noticeController");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.send("Welcome Biplob");
});

app.use("/", noticeController);
app.use("/lawyers", lawyerController);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
