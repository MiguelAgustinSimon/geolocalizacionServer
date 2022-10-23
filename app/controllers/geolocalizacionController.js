const { Sequelize} = require("sequelize");
const {logger}=require("../models/logger");
var moment = require('moment'); 

const Op = Sequelize.Op;

const validarJsonSchema = async (req, res) => {
    logger.info(`ProductScope: getProducts ok`);
    res.status(200).json("OK");
}


module.exports = {
    //Aca exporto los metodos
    validarJsonSchema
  }