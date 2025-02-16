const express = require("express")
const route = express.Router();
const empController = require("../controller/empController")

route.post("/insertdata" , empController.dataSave )
route.get("/displaydata" , empController.dataDisplay)
route.post("/searchdata" , empController.searchData)
route.post("/deletedata" , empController.deleteData)
route.post("/editshowdata" , empController.editShow)
route.post("/editsavedata" , empController.editSave)

module.exports = route;