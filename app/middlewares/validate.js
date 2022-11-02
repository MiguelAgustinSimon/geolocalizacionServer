const userSchema=require('../models/user');
const geojsonSchema=require('../models/geojsonSchema');
const geojsonSchema2=require('../models/geoJsonSchema2');

var localize = require('ajv-i18n');

 const validateDto= (ajvValidate)=>{
  //  obtenerPromedioLatitud=(arrJson:Json[]):number=>{
  return (req, res, next) => {
    const valid = ajvValidate(req.body);
    if (!valid){
      const errors = ajvValidate.errors;
      localize.es(errors); //pasamos los errores a idioma español
      res.status(400).json(errors);
    }
    next();
  };
}


const VerificarEsquemas =async (req, res, next) => {
  try {
    const valid = geojsonSchema(req.body);
    if (!valid){
      const valid2 = geojsonSchema2(req.body);
      if (!valid2){
        const errors = geojsonSchema2.errors;
        localize.es(errors); //pasamos los errores a idioma español
        res.status(400).json(errors);
      }
    }
    next();
    } catch (error) {
      return res.status(403).json({message: "Ocurrio un error al validar.", error: error})
    }
};

module.exports=VerificarEsquemas;

