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
              items: {
                "type": "string",
                "pattern": '^\-?[0-9][0-9][.]\\d{2,}[,]\\s?\-?[0-9][0-9][.]\\d{2,}$'
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
//   $id: "https://example.com/form.schema.json",
//   $schema: "http://json-schema.org/draft-07/schema#",
//   title: "form",
//   type: "object",
//   properties: {
//     "institutionname": {
//       "type": "string",
//       //"pattern": '^-?\\d*[.]\\d{2,}$'
//       "pattern": '^\-?[0-9][0-9][.]\\d{2,}[,]\\s?\-?[0-9][0-9][.]\\d{2,}$'
//   },
//   },
//   required: ["institutionname"]
// };


  
module.exports = ajvInstance.compile(schema);
