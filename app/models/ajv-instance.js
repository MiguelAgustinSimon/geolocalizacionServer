const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const addErrors = require('ajv-errors');
const addKeyword=require('ajv-keywords')
const ajvInstance = new Ajv({ allErrors: true });
addFormats(ajvInstance);
addKeyword(ajvInstance, "regexp");

ajvInstance.addKeyword('validarDecimales', {
    errors: true,
    validate: function validate(data,schema){
      //const regex = new RegExp('^\-?[0-9][0-9][.]\\d{2,}[,]\\s?\-?[0-9][0-9][.]\\d{2,}$');
      validate.errors = [];
      const regex = new RegExp('^\-?[0-9][0-9][.]\\d{2,}$');
      // console.log(schema);
      // console.log(`VALIDACION: ${regex.test(schema)}`);

      if(regex.test(schema)!=true){
        validate.errors.push({
          keyword: 'validarDecimales',
          typeof:'numberValidate',
          message: `Lat/Long deben tener al menos 2 números post coma: ${schema}`
        });
      }
    }
  });

addErrors(ajvInstance);

module.exports = ajvInstance;