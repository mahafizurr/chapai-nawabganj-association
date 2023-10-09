require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const addAdvocate = require("./route/advocateRoute");
const addnotice = require("./route/noticeRoute");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/home", (req, res) => {
  res.send("Hello world");
});

app.post("/", addAdvocate);
app.post("/", addnotice);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
