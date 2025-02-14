const empModel = require("../model/empModel")


const dataSave = async (req,res)=>{
    console.log(req.body);
    const {empno, empname, department, city, salary} = req.body;
    const data = await empModel.create({
        empno:empno,
        empname:empname,
        department:department,
        city:city,
        salary:salary
    })

    res.send("Data Submitted!");
    
}

const dataDisplay = async(req,res)=>{
    const data = await empModel.find();
    res.send(data)
}

const searchData = async (req , res) =>{
    const { empid } = req.body;
    const data = await empModel.find({empno:empid})
    res.send(data)
}

const myDelete = async (req,res)=>{
    const { empid } = req.query;
     await empModel.findByIdAndDelete(empid)
     res.send("Deleted SuccessFully")
}

const editShow = async (req,res)=>{
    const { empid } = req.body;
    const data = await empModel.findById(empid)
    res.send(data)
}

const editSave = async (req,res)=>{
    const { _id } = req.body;
    await empModel.findByIdAndUpdate(_id , req.body)
    res.send("Data Updated!!")
}

module.exports = {
    dataSave,
    dataDisplay, 
    searchData,
    myDelete,
    editSave,
    editShow
}