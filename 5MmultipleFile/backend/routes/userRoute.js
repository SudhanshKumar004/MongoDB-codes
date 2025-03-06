const express = require("express")
const route = express.Router();
const userController = require("../controller/userController")
const upload = require("../middlewares/multerMiddleware")

route.post("/datasave" , upload.array("images", 10) ,userController.Datasave)
route.get("/datadisplay" , userController.DataDisplay)
route.post("/productshow" , userController.ProShow)

module.exports = route;