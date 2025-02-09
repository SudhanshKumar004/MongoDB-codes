const express = require("express");
const route = express.Router();
const bookController = require("../controller/bookController")

route.post("/datasave" , bookController.bookData )
route.get("/datadisplay" , bookController.dataDisplay )
route.post("/searchdata" , bookController.searchData )

module.exports = route;