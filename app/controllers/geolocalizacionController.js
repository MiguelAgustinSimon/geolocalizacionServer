const { Sequelize} = require("sequelize");
const {logger}=require("../models/logger");
var moment = require('moment'); 

const Op = Sequelize.Op;

const validarJsonSchema = async (req, res) => {
    try {
        //logger.info(`ProductScope: getProducts ok`);
        return res.status(200).json("OK");
    } catch (error) {
        //console.log(error.message);
    }
       
   
}


module.exports = {
    //Aca exporto los metodos
    validarJsonSchema
  }