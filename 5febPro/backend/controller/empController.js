const empModel = require("../models/empModel");

const empData = async(req,res) => {
    const { empnm, name, designation, salary } = req.body;
    const data = await empModel.create({
        empnm:empnm,
        name:name,
        designation:designation,
        salary:salary
    })
    res.send("Data Submitted!!")
}

const empDisplay = async(req,res)=>{
     const data = await empModel.find()
     res.send(data)
}

const searchData = async(req,res)=>{
    const { searchno } = req.body;
    const data = await empModel.find({empnm:searchno})
    res.send(data)
    
}

const myDel = async(req,res)=>{
    const { empid } = req.query;
    await empModel.findByIdAndDelete(empid)
    res.send("Data Deleted Successfully!")
    
}

const editData = async(req,res)=>{
    const {empid} = req.body;
   let data = await empModel.findById(empid)
    res.send(data)
    
}

const saveData = async(req,res)=>{
    const { _id } = req.body;
    await empModel.findByIdAndUpdate(_id , req.body)
    res.send("Data updated Successfully!!")
}

module.exports = {
    empData,
    empDisplay,
    searchData,
    myDel,
    editData,
    saveData
} 