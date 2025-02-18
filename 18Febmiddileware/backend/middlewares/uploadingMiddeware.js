


const uploadPhoto = (req,res,next)=>{
    console.log("file Uploading from middleware");
    
    req.filename="image.jpg"

    next();
}


module.exports = uploadPhoto