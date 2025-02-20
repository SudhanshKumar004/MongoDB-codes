const express = require("express")
const app = express();
const PORT = 8080;
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


mongoose.connect("mongodb://127.0.0.1:27017/DataCollection").then(()=>{
    console.log("DB Connected");
    
})


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use(cors());




app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`);  
})