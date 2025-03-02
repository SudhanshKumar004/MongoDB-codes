const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Registration = async(req,res)=>{
    const {name,email,password} = req.body;
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await userModel.create({
        name:name,
        email:email,
        password:hashPassword
    })

    res.send("okk")
}

const Login = async(req,res)=>{
    const {email,password} = req.body;

    let User = await userModel.findOne({email:email})

    if(!User)
    {
        res.status(400).send("Invalid Email")
    }

    const passMatch = await bcrypt.compare(password,User.password)
    
    if(!passMatch)
    {
        res.status(400).send("Invalid Password")
    }

    const token = await jwt.sign({id:User._id}, process.env.SECRET_KEY, {expiresIn:"2 days"})
    console.log(token);
    res.send({token:token});
    
}


const userAuthentication = async(req,res)=>{
    const token = req.header("x-auth-token");
    console.log(token);
    const verify = await jwt.verify(token,process.env.SECRET_KEY)
    console.log(verify);
    const User = await userModel.findById(verify.id).select("-password")
    
    res.send(User)
    

}
module.exports = {
    Registration,
    Login,
    userAuthentication
}