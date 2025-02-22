const mongoose = require("mongoose")

const bookModel = new mongoose.Schema({
    bookname:String,
    price:String,
    authorid:{
        type: mongoose.Schema.Types.ObjectId, ref:'author'
    }
})


module.exports = mongoose.model("book" , bookModel)