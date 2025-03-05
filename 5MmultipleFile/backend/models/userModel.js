const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    product:String,
    brand:String,
    price:Number,
    defaultImage:String,
    images:[String]
})

module.exports = mongoose.model("localProUpload" , productSchema)