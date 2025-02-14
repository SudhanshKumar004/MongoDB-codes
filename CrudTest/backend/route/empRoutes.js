const express = require("express")
const route = express.Router();
const empController = require("../controller/empController")


route.post("/datasave" , empController.dataSave )
route.get("/datadisplay" , empController.dataDisplay )
route.post("/searchdata" , empController.searchData  )
route.get("/delete" , empController.myDelete )
route.post("/editdatasave" , empController.editSave)
route.post("/editdatashow" , empController.editShow)




module.exports = route