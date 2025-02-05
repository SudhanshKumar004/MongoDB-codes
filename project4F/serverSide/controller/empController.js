const empModel = require("../models/empModel")


const dataSave = async(req , res) => {
    const { empno , name , dept , salary } = req.body;
    const data = await empModel.create({
        empno:empno,
        name:name,
        dept:dept,
        salary:salary
    })
    res.send(data)
    
}


module.exports = {
    dataSave
}