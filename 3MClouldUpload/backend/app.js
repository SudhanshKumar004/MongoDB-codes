const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const userRoute = require("./userRoutes/userRoutes")

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/cloudImage").then(()=>{
    console.log("DB Connected!");    
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user" , userRoute)

app.listen(8080, ()=>{
    console.log("server running on 8080 port");
})