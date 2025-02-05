const express = require("express")
const route = express.Router();

const empController = require("../controller/empController")
 
route.post("/datasave" , empController.dataSave )

module.exports = route;