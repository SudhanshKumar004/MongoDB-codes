const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String,
    imgurl:String
})

module.exports = mongoose.model("userCloud", userSchema)