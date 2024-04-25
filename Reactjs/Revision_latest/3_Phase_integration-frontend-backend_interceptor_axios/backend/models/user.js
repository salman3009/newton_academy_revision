const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    userName:{type:String,unique:true,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    roles:{type:[String],required:true,enum:['admin','employee'],default:'employee'}
})

module.exports = mongoose.model('user',userSchema);