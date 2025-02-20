const express = require("express")
const route = express.Router();
const userController = require("../controller/userController")

route.post("/insertdata" , userController.dataSave )
route.get("/displaydata" , userController.dataDisplay )

module.exports = route;