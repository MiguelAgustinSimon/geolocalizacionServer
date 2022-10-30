var localize = require('ajv-i18n');

// function validateDto(ajvValidate){
//   return (req, res, next) => {
//       //console.log(req.body);
//     const valid = ajvValidate(req.body);
//     if (!valid) {
//       const errors = ajvValidate.errors;
//       res.status(400).json(errors);
//     }
//     next();
//   };
// }


 const validateDto= ajvValidate=>{
  return (req, res, next) => {
      //console.log(req.body);
    const valid = ajvValidate(req.body);
    if (!valid) {
      
      const errors = ajvValidate.errors;
      localize.es(errors);
      
      //console.log(ajv.errorsText(errors, { separator: '\n' }));
      res.status(400).json(errors);
    }
    next();
  };
}

module.exports = validateDto;
