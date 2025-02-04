const express = require("express")
const route = express.Router();
const stuController = require("../controller/stuController")

route.post("/savedata" , stuController.stuData)
route.get("/displaydata" , stuController.displayData)
route.post("/searchdata" , stuController.searchData)


module.exports = route;