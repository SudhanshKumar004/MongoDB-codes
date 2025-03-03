const userModel = require("../models/userModel")

const dataSave = async(req,res)=>{
    const { rollno , name , city, imgname} = req.body;

    const mydata = await userModel.create({
        rollno:rollno,
        name:name,
        city:city,
        imgurl:imgname
    });

    res.send(mydata)
}

const DataDisplay = async(req,res)=>{
    mydata = await userModel.find()

    res.send(mydata)
}


module.exports = {
    dataSave,
    DataDisplay

}