const express = require("express");

const route = express.Router();

const noticeCreate = require("../controller/noticeController");

route.post("api/notice", noticeCreate);

module.exports = route;
