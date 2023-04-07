const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const addErrors = require('ajv-errors');
const addKeyword=require('ajv-keywords')
const ajvInstance = new Ajv({ allErrors: true });
addFormats(ajvInstance);
addKeyword(ajvInstance, "regexp");

ajvInstance.addKeyword({
  keyword:"validarGeometry",
  errors: true,
  validate: function validate(data,schema){
    validate.errors = [];
    let regex = new RegExp('\\bgeometry\\b');
    if(regex.test(schema)==false){
      validate.errors.push({
        keyword: 'validarGeometry',
        typeof:'textValidate',
        message: `Debe incluir la propiedad geometry.`
      });
    }
  }
});

ajvInstance.addKeyword({
  keyword:"validarVacio",
  errors: true,
  validate: function validate(data,schema){
    validate.errors = [];
    if(schema==null||schema=="null"){
      console.log("es nulo!!!");
      validate.errors.push({
        keyword: 'validarVacio',
        typeof:'numberNull',
        message: `Coordinates no debe ser vacío.`
      });
    }
  }
});

ajvInstance.addKeyword({
    keyword:"validarDecimales",
    errors: true,
    validate: function validate(data,schema){
      validate.errors = [];
      //let regex = new RegExp('^\-?[0-9][0-9][.]\\d{2,}$');
      let regex = new RegExp('\\.\\d{2,}$');
      if(regex.test(schema)==false){
        validate.errors.push({
          keyword: 'validarDecimales',
          typeof:'numberValidate',
          message: `Lat/Long deben tener al menos 2 números post coma - Error: ${schema}`
        });
      }
    }
  });





addErrors(ajvInstance);
module.exports = ajvInstance;