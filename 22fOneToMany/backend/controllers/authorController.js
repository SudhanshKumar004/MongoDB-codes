const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

const dataSave = async(req,res)=>{
   const { name, email, city } = req.body;
   const Author = await authorModel.create({
    authorName:name,
    email:email,
    city:city
   })

   res.status(200).send("Data Submitted!!")
    
}

const dataDisplay = async (req,res)=>{
    const mydata = await authorModel.find();
    res.status(200).send(mydata)
}

const addNewBook = async(req,res)=>{
    const { id, bookname, price } = req.body;
    const Book = await bookModel.create({
        bookname:bookname,
        price:price,
        authorid:id
    }) 

    await authorModel.findByIdAndUpdate(id, { $push:{bookid: Book._id}});

    res.send("okk")
}


const allDisplay = async(req,res)=>{
    const authoData = await authorModel.find().populate("bookid")
    res.status(200).send(authoData)
}
module.exports ={
    dataSave,
    dataDisplay,
    addNewBook,
    allDisplay
}