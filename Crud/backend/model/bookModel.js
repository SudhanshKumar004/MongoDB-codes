const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    id:String,
    name:String,
    bkname:String,
    rate:Number,
    num:Number
})


module.exports = mongoose.model("BookDetails" , bookSchema)