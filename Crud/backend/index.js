const express= require("express");
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")
const bookRoute = require("./route/bookRoute")
const bodyParser = require("body-parser")


mongoose.connect("mongodb://127.0.0.1:27017/bookData").then((res)=>{
    console.log("DB connected");
    
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())


app.use("/library" , bookRoute)


app.listen(8000, ()=>{
    console.log("Server run on 8000 port");
})