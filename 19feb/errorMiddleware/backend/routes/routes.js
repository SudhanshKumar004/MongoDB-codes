const express = require("express")
const route = express.Router();
const errorMiddleware = require("../middlewares/middlewares")

route.get("/myhome", (req,res,next)=>{
    try {
    console.log("Home Data");
    throw new Error ("Home page error")
     res.status(200).send("Ok")   
    } 
    catch (error) {
        next(error)
    }
} )

route.get("/myabout" , (req,res,next)=>{
    try {
        console.log("About Data");
       throw new Error("About page error")
        res.status(200).send("Ok")
    } catch (error) {
        next(error)
    }

})


module.exports = route;