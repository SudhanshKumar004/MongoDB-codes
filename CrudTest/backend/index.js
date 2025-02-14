const express = require("express")
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const empRoute = require("./route/empRoutes")


mongoose.connect("mongodb://127.0.0.1:27017/empDetails")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
app.use("/employee" , empRoute)

app.listen(8000,()=>{
    console.log("Server Running on 8000 port");
    
})