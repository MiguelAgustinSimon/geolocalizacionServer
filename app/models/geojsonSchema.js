const ajvInstance=require('./ajv-instance');


  
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
              items: {"type": "number", "validarDecimales":true},
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
