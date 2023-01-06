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
                type: "number",
                //minimum: 0,
                "multipleOf": 0.000000000000001,
                errorMessage:{
                  type:'Los items en coordinates deben ser números decimales'
                }
              }
            }
          }
        },
      }
    }
  };
  
  
module.exports = ajvInstance.compile(schema);
