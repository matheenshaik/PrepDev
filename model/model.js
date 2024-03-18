const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:Number,
    company:{
        type:String,
        required:true
    },
    emp:Boolean
},{timestamps:true})

module.exports = mongoose.model("User", userSchema)