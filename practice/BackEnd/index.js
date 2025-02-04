const express = require("express");
const app = express();
const stuRoute = require("./route/stuRoute")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyparser = require("body-parser")


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}))
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/studentInfo")

app.use("/students" , stuRoute)

app.listen(8088, ()=>{
    console.log("Server running on port 8088");
})