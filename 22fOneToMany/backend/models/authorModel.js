const mongoose = require("mongoose")

const authorModel = new mongoose.Schema({
    authorName:String,
    email:String,
    city:String,
    bookid:[{type: mongoose.Schema.Types.ObjectId, ref:'book' }]
})


module.exports = mongoose.model("author" , authorModel)