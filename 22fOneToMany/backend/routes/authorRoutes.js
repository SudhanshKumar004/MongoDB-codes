const express = require("express")
const route = express.Router();
const authorController = require("../controllers/authorController")

route.post("/datasave" , authorController.dataSave )
route.get("/datadisplay" , authorController.dataDisplay )
route.post("/addbook" , authorController.addNewBook )
route.get("/displayall" , authorController.allDisplay )


module.exports = route