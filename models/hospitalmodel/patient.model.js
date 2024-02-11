const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    diagonsed:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['M','F','O'],
        required:true
    },
    blodgroup:{
        type:Number,
        required:true
    },
    admitted:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }
},{timestamps:true})

const Patient = mongoose.model('Patient' , patientSchema);
module.exports = Patient