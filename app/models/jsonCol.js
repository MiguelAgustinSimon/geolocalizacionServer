const { strict } = require('assert');
const mongoose=require('mongoose');
const { version } = require('os');


const jsonSchema=new mongoose.Schema({
    nombreArchivo:{
        type:String,
        required:true
    },
    categorias: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoriaSchema'
    }],
    nombre:{
        type:String,
        required:true
    },
    estado:{
        type:Boolean,
        required:true
    },
    observacion:{
        type:String,
        required:true
    },
},
{versionKey:false,
timestamps:true
})

module.exports=mongoose.model('jsonSchema',jsonSchema);