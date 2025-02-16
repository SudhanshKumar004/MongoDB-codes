const empModel = require("../model/empModel")


const dataSave = async (req , res)=>{
    const { empno, empname , department, city, salary} = req.body;
    
    await empModel.create({
        empno:empno,
        empname:empname,
        department:department,
        city:city,
        salary:salary
    })

    res.send("Details Submitted!!")
}

const dataDisplay = async (req,res)=>{
    const data = await empModel.find();
    res.send(data)
}

const searchData = async (req,res)=>{
    const {searchid} = req.body;
    let data = await empModel.find({empno:searchid})
    res.send(data)
}

const deleteData =async (req,res)=>{
    const {empid} = req.body;
    await empModel.findByIdAndDelete(empid)
    res.send("Data Deleted!!")
}

const editShow = async(req,res) =>{
    const {empid } = req.body;
    let data = await empModel.findById(empid)
    res.send(data)
}

const editSave = async(req,res)=>{
    const { _id } = req.body;
    await empModel.findByIdAndUpdate(_id , req.body)
    res.send("Data Updated!!")
}
module.exports = {
    dataSave,
    dataDisplay,
    searchData,
    deleteData,
    editShow, 
    editSave
}