const ajvInstance=require('./ajv-instance');



  ajvInstance.addKeyword('validarDecimales', {
    errors: true,
    validate: function validate(data,schema){
      console.log(`DATA: ${data}`);
      console.log(`SCHEMA: ${schema}`);
      //const regex = new RegExp('^\-?[0-9][0-9][.]\\d{2,}[,]\\s?\-?[0-9][0-9][.]\\d{2,}$');
      validate.errors = [];
      const regex = new RegExp('^\-?[0-9][0-9][.]\\d{2,}$');
      //console.log(data);
      console.log(`VALIDACION: ${regex.test(schema)}`);
      if(regex.test(schema)!=true){
        console.log(`falseeee`);
        validate.errors.push({
          keyword: 'validarDecimales',
        
          message: `Debe tener al menos 2 números post coma`
        });
      }
    }
  });


  
const schema = {
    type: 'object',
    additionalProperties:true, 
    required:['geometry'],
    properties: {
      //geometry: { "type": "number", "multipleOf": 0.000000000000001 }
      geometry: { "type": "object" ,"required": ["coordinates"],
        properties: {
          coordinates: { type: "array",
            items: {type: "array",
              //items: {"type": "number", "multipleOf": 0.000000000000001, "stringTypeChecker":true},
              items: {
                "type": "number", "validarDecimales":true
              },
              errorMessage:{
                type:'Coordinates debe ser array numérico'
              }
            }
          }
        },
      }
    }
  };


  // const schema = {
  //   type: 'object',
  //   additionalProperties:true, 
  //   required:['geometry'],
  //   properties: {
  //     //geometry: { "type": "number", "multipleOf": 0.000000000000001 }
  //     geometry: { "type": "object" ,"required": ["coordinates"],
  //       properties: {
  //         coordinates: { type: "array",
  //           items: {type: "array",
  //             items: {
  //               "type": "string",
  //               "pattern": '^\-?[0-9][0-9][.]\\d{2,}[,]\\s?\-?[0-9][0-9][.]\\d{2,}$'
  //             },
  //             errorMessage:{
  //               type:'Coordinates debe ser array numérico'
  //             }
  //           }
  //         }
  //       },
  //     }
  //   }
  // };


  
module.exports = ajvInstance.compile(schema);
