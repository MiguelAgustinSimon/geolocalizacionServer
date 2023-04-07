const ajvInstance=require('./ajv-instance');


  
const schema = {
    type: 'object',
    additionalProperties:true, 
    required:['geometry'],

    properties: {    
      geometry: { "type": "object", "required": ["coordinates"], 
        properties: {  
          coordinates: { type: "array",
            items: {type: "array",
              items: {"type": "number", "validarVacio":true,"validarDecimales":true}
            }
          }
        },
      }
    }
  };

  
module.exports = ajvInstance.compile(schema);
