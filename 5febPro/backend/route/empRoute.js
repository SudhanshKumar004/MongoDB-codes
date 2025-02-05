const express = require("express");
const route = express.Router();
const empController = require("../controller/empController");

route.post("/datasave" , empController.empData )
route.get("/displaydata" , empController.empDisplay)


module.exports = route;