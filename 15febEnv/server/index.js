const express = require("express")
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const empRoute = require("./routes/empRoute")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


mongoose.connect("mongodb://127.0.0.1:27017/empCollection").then(()=>{
    console.log("DB connected!!");
})

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.use("/employee" , empRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})