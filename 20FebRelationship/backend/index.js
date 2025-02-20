const express = require("express")
const app = express();
const PORT = 8000;
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const userRoute = require("./routes/userRoutes")


mongoose.connect("mongodb://127.0.0.1:27017/myRel").then(()=>{
    console.log("DB connected!!");
})

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user" , userRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})