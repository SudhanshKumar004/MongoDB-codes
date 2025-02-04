const stuModel = require("../model/stuModel")

const stuData = async ( req , res ) =>{
    const { rollno , name , city , fees } = req.body;
    let data = await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    });
}

const displayData = async ( req , res ) =>{
    const data = await stuModel.find();
    res.send(data)
}

const searchData = async ( req , res ) =>{
    const { stuRno } = req.body;
    const data = await stuModel.find({rollno:stuRno})
    res.send(data)
}
module.exports = {
    stuData, 
    displayData,
    searchData
}