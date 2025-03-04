const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name:String,
    city:String,
    age:Number,
    imgurl:String

})

module.exports = mongoose.model("userCloud" , userSchema)