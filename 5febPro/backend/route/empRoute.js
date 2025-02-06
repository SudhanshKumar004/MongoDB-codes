const express = require("express");
const route = express.Router();
const empController = require("../controller/empController");

route.post("/datasave" , empController.empData )
route.get("/displaydata" , empController.empDisplay)
route.post("/searchdata" , empController.searchData)
route.get("/mydelete" , empController.myDel)
route.post("/editdatashow" , empController.editData)
route.post("/editdatasave" , empController.saveData)


module.exports = route;