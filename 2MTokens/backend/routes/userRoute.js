const express = require("express")
const route = express.Router();
const userController = require("../controller/userController")

route.post("/registration", userController.Registration)
route.post("/login", userController.Login)
route.post("/authentication", userController.userAuthentication)

module.exports = route;