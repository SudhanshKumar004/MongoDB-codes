const multer = require("multer")


const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
            cb(null, 'uploads/') //file will be saved in upload directory
    },

    filename:(req, file, cb)=>{
            cb(null, Date.now()+"-"+file.originalname); //for original name
    }
})

const upload = multer({storage:storage});


module.exports = upload
