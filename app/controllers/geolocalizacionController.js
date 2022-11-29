const { Sequelize} = require("sequelize");
const {logger}=require("../models/logger");
var moment = require('moment'); 

const Op = Sequelize.Op;

const modeloJsonCol=require('../models/jsonCol');
const categoriaSchema = require("../models/categoria");

// ---------------------------------------------------- RUTAS GET--------------------------------------------------------------
const getCategorias = async (req, res) => {
    try {
        //ordeno descendente por creado
        const lista=await categoriaSchema.find({})
        .sort({createdAt:-1})
        .then((lista)=>{
            res.status(200).json(lista);
        })
       .catch( (error)=>{
            logger.error(`GeolocalizacionServer: getBitacora error: ${error.message}`);
            res.json({error:error});
        })
    } catch (error) {
        
    }
}

const getBitacora = async (req, res) => {
    try {
        const pageAsNumber=Number.parseInt(req.query.page);
        const limitAsNumber=Number.parseInt(req.query.limit);
        
        let page=0;
        let limit=3;
        if(!Number.isNaN(pageAsNumber)&& pageAsNumber>0){
            page=pageAsNumber;
        }
    
        if(!Number.isNaN(limitAsNumber) && limitAsNumber>0 && limitAsNumber<10){
            limit=limitAsNumber;
        }
        
        //Hago un FIND porque viene de mongoose
        const lista=await modeloJsonCol.find().skip(page).limit(limit)
        .populate('categorias') //hace referencia a 'categorias' de JsonCol
        .sort({createdAt:-1})//ordeno descendente por creado.
        .then((lista)=>{
            logger.info(`GeolocalizacionServer: getBitacora ok`);
            res.status(200).json(lista);
        })
       .catch( (error)=>{
            logger.error(`GeolocalizacionServer: getBitacora error: ${error.message}`);
            res.json({error:error});
        })
    } catch (error) {
        
    }
}


// ---------------------------------------------------- RUTAS POST--------------------------------------------------------------
const validarJsonSchema = async (req, res) => {
    try {
        logger.info(`gelocalizacionServer: validarJsonSchema ok`);
        return res.status(200).json("OK");
    } catch (error) {
        logger.info(`gelocalizacionServer: validarJsonSchema falló: ${error.message}`);
        //console.log(error.message);
    }
}


module.exports = {
    //Aca exporto los metodos
    getCategorias,
    getBitacora,
    validarJsonSchema
  }