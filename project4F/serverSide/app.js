const express = require("express")
const app= express();
const empRoute = require("./route/empRoute")
const cors = require("cors")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")


app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/data").then(()=>{
    console.log("db connected");
    
})

app.use("/employee" , empRoute)


app.listen(8000, ()=>{
    console.log("Server run on 8000");
    
})