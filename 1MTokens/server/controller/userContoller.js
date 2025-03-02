const UserModel= require("../model/userModel");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const userRegistration=async(req, res)=>{
 const {name, email, password} =req.body;
 const salt = await bcrypt.genSalt(10);
 const hashPassword = await bcrypt.hash(password, salt);
  const User = await UserModel.create({
    name:name,
    email:email,
    password: hashPassword
  })
    res.send("OKK");
}


const userLogin=async(req, res)=>{
    const {email, password} = req.body;
    const User= await UserModel.findOne({email:email});
     
    if (!User)
    {
        res.send("Invalid Email!!!");
    }
    const passwordMatch =  await bcrypt.compare(password, User.password);
   
    if (!passwordMatch)
    {
        res.send("Invalid Password!")
    }

    try {
        const token = await jwt.sign({id:User._id}, process.env.SECRET_KEY, { expiresIn: '1 day' })
    console.log(token);   
   res.status(200).send({token:token});    
    } 
    
    catch (error) {
        res.status(400).send({msg:"Somethin went Wrong!"})
    }
    
}


const userAuthenticate=async(req, res)=>{
    const token = req.header("x-auth-token");
    console.log(token);

    const verify= await jwt.verify(token, process.env.SECRETE_KEY);
    console.log(verify);
    const User= await UserModel.findById(verify.id).select("-password");
    
    res.send(User);

}
module.exports ={
    userRegistration,
    userLogin,
    userAuthenticate
}