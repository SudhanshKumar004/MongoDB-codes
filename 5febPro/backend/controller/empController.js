const empModel = require("../models/empModel");

const empData = async(req,res) => {
    const { empnm , name , designation , salary} = req.body;
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

module.exports = {
    empData,
    empDisplay
} 