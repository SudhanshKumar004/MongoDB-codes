const express = require("express")
const app = express();
const PORT = 8080;
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const authorRoutes = require("./routes/authorRoutes")

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/authorDetails").then(()=>{
    console.log("DB Connected");
    
})

app.use("/user" , authorRoutes)


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
    
})