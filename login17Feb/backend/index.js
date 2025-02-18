const express= require("express");
const app=express();
require("dotenv").config();
const cors= require("cors");
const bodyParser = require('body-parser');

const mongoose= require("mongoose");
const empRoute= require("./routes/empRoute");

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.DB_CONNECTION).then(()=>{
   console.log("DB succesfully connected!!!");
});
const Port=process.env.PORT || 8080;


app.use("/employee", empRoute);







app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})