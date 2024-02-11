const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    address1:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    specialization:[
        {
            type:String
        }
    ]
},{timestamps:true})

const Hospital = mongoose.model('Hospital' , hospitalSchema);
module.exports = Hospital