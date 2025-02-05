const express = require('express');
const app = express();
const empRoute = require("./route/empRoute")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


mongoose.connect("mongodb://127.0.0.1:27017/empInfo").then((res)=>{
    console.log("DB connected");
    
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

 
app.use("/employee" , empRoute)


app.listen(8000, ()=>{
    console.log("Server run on 8000 port");
})