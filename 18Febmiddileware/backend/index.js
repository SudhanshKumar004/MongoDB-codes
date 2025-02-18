const express = require("express")
const app = express();
const cors = require("cors")
const Upload = require("./middlewares/uploadingMiddeware")


app.use(cors());

app.use((req,res,next)=>{
    console.log("1 middleware");
    req.name="Sudhansh from 1 MW"
    next()
    
})

app.use((req,res,next)=>{
    console.log("2 middleware");
    req.name="SK from 2 MW"
    next()
    
})


app.get("/myhome" , (req,res)=>{
    console.log("my home");
    res.send("Home page data")
    console.log(req.name);
    
    
})

app.get("/myabout" ,Upload, (req,res)=>{
    console.log("about for image upload");
    res.send("About page data")
    console.log(req.filename);
    
    
})


app.listen(8000, ()=>{
    console.log("running");
    
})