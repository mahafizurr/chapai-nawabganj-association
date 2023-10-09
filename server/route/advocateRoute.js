const express = require("express");
const adv = require("../controller/advocateController");
const route = express.Router();

route.post("api/users/", adv.uploadPhoto, adv.createUser);

module.exports = route;
