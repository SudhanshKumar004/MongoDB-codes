const express = require("express")
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
// const cookieparser = require("cookie-parser")
const session = require("express-session")


const PORT = process.env.PORT || 8000;


app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cookieparser());

// app.get("/setcookie" , (req,res)=>{
//     res.cookie("stuname", "sudhansh", {maxAge:60000});
//     res.cookie("company", "cybrom");
//     res.cookie("college", "BU",);
//     res.send("Cookies has been set!")

// })

// app.get("/getcookies", (req,res)=>{
//     const {stuname , company, college} = req.cookies;
//     res.send({msg:"getting cookies", name:stuname, company:company, college:college})
// })


// app.get("/deletecookies", (req,res)=>{
//     res.clearCookie("stuname")
//     res.send("cookies Cleared")
// })


app.use(session({
  secret: 'keyboard cat',
  resave: true ,
  saveUninitialized: true,
}))

app.get("/setsession", (req,res)=>{
    req.session.myname = "sudhansh";
    req.session.mycity = "bhopal";
    res.send("Your session is set")
})


app.get("/getsession", (req,res)=>{
    const {myname, mycity} = req.session;
    console.log(req.session);
    
    res.send({name:myname, city:mycity})
})
app.listen(8000, ()=>{
    console.log("Server Running on Port 8000");
    
})