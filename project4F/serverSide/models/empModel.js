const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    empno:Number,
    name:String,
    dept:String,
    salary:Number
})

module.exports=mongoose.model("empDetails" , empSchema)