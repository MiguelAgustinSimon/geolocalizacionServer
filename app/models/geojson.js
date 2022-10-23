const ajvInstance=require('./ajv-instance');

const schema = {
    type: 'object',
    properties: {
      geometry: { "type": "number", "multipleOf": 0.000000000000001 }

    },
    required: ['geometry'],
  };
  
  
module.exports = ajvInstance.compile(schema);
