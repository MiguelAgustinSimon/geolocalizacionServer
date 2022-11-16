const { Sequelize} = require("sequelize");
const {logger}=require("../models/logger");
var moment = require('moment'); 

const Op = Sequelize.Op;

const modeloJsonCol=require('../models/jsonCol');

// ---------------------------------------------------- RUTAS GET--------------------------------------------------------------
const getBitacora = async (req, res) => {
    try {
        //ordeno descendente por creado
        const lista=await modeloJsonCol.find({}).sort({createdAt:-1})
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
    getBitacora,
    validarJsonSchema
  }