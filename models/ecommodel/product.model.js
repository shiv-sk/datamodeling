const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    description:{
        required:true,
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String
    },price:{
        type:Number,
        default:0
    },stock:{
        default:0,
        type:Number
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

const Product = mongoose.model('Product',productSchema);
module.exports = Product;