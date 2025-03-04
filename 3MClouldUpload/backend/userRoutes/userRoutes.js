const express = require("express")
const route = express.Router();
const userController = require("../controller/userController")

route.post("/datasave", userController.DataSave)
route.get("/displaydata", userController.DataDisplay)

module.exports = route