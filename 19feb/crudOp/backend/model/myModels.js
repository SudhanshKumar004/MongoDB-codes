const mongoose = require("mongoose")


const mySchema = new mongoose.Schema({
    empid:String,
    empname:String,
    city:String,
    department:String,
    salary:Number,
})


module.exports = mongoose.model("/information" , mySchema)