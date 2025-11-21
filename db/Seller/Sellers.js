const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    name:String,
    email: String,
    password: String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"admin",
        default:null
        
    }
})

module.exports =mongoose.model('Seller',SellerSchema)