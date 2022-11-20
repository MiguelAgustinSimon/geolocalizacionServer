const { strict } = require('assert');
const mongoose=require('mongoose');
const { version } = require('os');

const categoriaSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    }
},
{versionKey:false,
timestamps:true
})

module.exports=mongoose.model('categoriaSchema',categoriaSchema);