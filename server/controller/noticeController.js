const express = require("express");
const router = express.Router();
const Notice = require("../models/noticeModel");
const uploadPlace = require("../upload");

router.post("/noticeupload", uploadPlace, async (req, res) => {
  const newNotice = await Notice(req.file);
  const savedNotice = await newNotice.save();
  if (!savedNotice) {
    res.status(401).json("Notice not sent to database");
  } else {
    res.status(201).json(savedNotice);
  }
});

router.get("/notices", async (req, res) => {
  const newNotice = await Notice.find({});

  if (!newNotice) {
    res.status(401).send("Notice not come from database");
  } else {
    res.status(201).send(newNotice);
  }
});

module.exports = router;
