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

module.exports = validateDto;
