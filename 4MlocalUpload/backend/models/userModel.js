const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    empno:String,
    name:String,
    salary:Number,
    designation:String,
    img:String
})

module.exports = mongoose.model("localUpload" , empSchema)