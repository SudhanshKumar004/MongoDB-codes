const userModel = require("../models/userModels")
const profileModel = require("../models/profileModel")


const dataSave = async(req,res)=>{
    const {username,email,firstname,lastname} = req.body;
   const User = await userModel.create({
        username:username,
        email:email
    })

    const Profile = await profileModel.create({
        firstname:firstname,
        lastname:lastname,
        userid:User._id 
    })


    res.send("okk")
}

const dataDisplay = async(req,res)=>{
    const mydata = await profileModel.find().populate("userid")
    res.send(mydata)
}

module.exports = {
    dataSave,
    dataDisplay
}