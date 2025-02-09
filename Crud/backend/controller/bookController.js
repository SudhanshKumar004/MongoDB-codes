const bookModel = require("../model/bookModel")


const bookData = async (req,res)=>{
    const { id , name , bkname , rate , num } = req.body;
    const data = await bookModel.create({
        id:id,
        name:name,
        bkname:bkname,
        rate:rate,
        num:num
    })
    res.send("Details Submitted!")
}

const dataDisplay = async (req,res) =>{
    const data = await bookModel.find();
    res.send(data)
}

const searchData = async (req , res) =>{
    const { bookid } = req.body;
    const data = await bookModel.find({id:bookid})
    res.send(data)
}
module.exports = {
    bookData,
    dataDisplay,
    searchData
}