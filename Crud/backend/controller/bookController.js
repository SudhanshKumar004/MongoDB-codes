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

const myDelete = async (req,res)=>{
    const { bookid } = req.query;
     await bookModel.findByIdAndDelete(bookid)
     res.send("Deleted SuccessFully")
}

const editShow = async (req,res)=>{
    const { bookid } = req.body;
    const data = await bookModel.findById(bookid)
    res.send(data)
}

const editSave = async (req,res)=>{
    const { _id } = req.body;
    await bookModel.findByIdAndUpdate(_id , req.body)
    res.send("Data Updated!!")
}

module.exports = {
    bookData,
    dataDisplay,
    searchData,
    myDelete,
    editShow,
    editSave
}