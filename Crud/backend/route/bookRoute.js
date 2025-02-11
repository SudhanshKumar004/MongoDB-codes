const express = require("express");
const route = express.Router();
const bookController = require("../controller/bookController")

route.post("/datasave" , bookController.bookData )
route.get("/datadisplay" , bookController.dataDisplay )
route.post("/searchdata" , bookController.searchData )
route.get("/delete" , bookController.myDelete )
route.post("/editdatashow" , bookController.editShow )
route.post("/editdatasave" , bookController.editSave )

module.exports = route;