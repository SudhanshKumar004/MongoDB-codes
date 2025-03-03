const express = require("express")
const route = express.Router();
const userController = require("../controller/userController")

route.post("/datasave" , userController.dataSave)
route.get("/datadisplay" , userController.DataDisplay)

module.exports = route;