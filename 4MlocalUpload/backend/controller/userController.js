const empModel = require("../models/userModel")


const Datasave = async(req,res)=>{
    const {empno, name, salary, designation} = req.body;
    const myimage = req.file.filename;

    const User = await empModel.create({
        empno:empno,
        name:name,
        salary:salary,
        designation:designation,
        img:myimage
    })
    
    res.send("okk")
}

const DataDisplay = async(req,res)=>{
    const datasend = await empModel.find();

    res.send(datasend)
}

module.exports={
    Datasave,
    DataDisplay
}