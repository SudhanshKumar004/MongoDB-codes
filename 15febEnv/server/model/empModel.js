const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
  empno:String,
  empname:String,
  department:String,
  city:String,
  salary:Number   
})

module.exports = mongoose.model("employeeData" , empSchema)