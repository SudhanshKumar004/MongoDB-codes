const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    empnm:String,
    name:String,
    designation:String,
    salary:Number
})

module.exports = mongoose.model("empData" , empSchema)