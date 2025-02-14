const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    empno:String,
    empname:String,
    department:String,
    city:String,
    salary:String
})

module.exports = mongoose.model("EmployeeDetails" , empSchema)