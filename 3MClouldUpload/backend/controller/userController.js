const userModel = require("../model/userModel")


const DataSave = async (req,res)=>{
    const {name,city,age,imgname} = req.body;

    const myCloud = await userModel.create({
        name:name,
        city:city,
        age:age,
        imgurl:imgname
    })

    res.send(myCloud
    )
}

const DataDisplay = async (req,res)=>{
    const mydata = await userModel.find();
    res.send(mydata);
}

module.exports = {
    DataSave,
    DataDisplay
}