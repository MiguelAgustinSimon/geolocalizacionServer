const ajvInstance=require('./ajv-instance');

// const ISO8601UTCRegex = '^\-?[0-9][0-9][.]\\d{2,}[,]\\s?\-?[0-9][0-9][.]\\d{2,}$';
  // const typeISO8601UTC = {
  //   "type": "number",
  //   "pattern": ISO8601UTCRegex.toString(),
  //   "errorMessage": "must be string of format. Got ${0}",
  // };


  // ajvInstance.addType('mongoid', {
  //   compile: function () {
  //     return function (data) {
  //       const re = /^\-?[0-9][0-9][.]\\d{2,}[,]\\s?\-?[0-9][0-9][.]\\d{2,}$/i
  //       return re.test(data)
  //     }
  //   }
  // })

  ajvInstance.addKeyword('stringTypeChecker', {
    modifying: true,
    schema: false, // keyword value is not used, can be true
    valid: true, // always validates as true
    validate: function(data, dataPath, parentData, parentDataProperty){
      //const regex = new RegExp('^\-?[0-9][0-9][.]\\d{2,}[,]\\s?\-?[0-9][0-9][.]\\d{2,}$');
      const regex = new RegExp('^\-?[0-9][0-9][.]\\d{2,}$');
      console.log(data);
      console.log(regex.test(data));
     
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
              items: {"type": "number", "multipleOf": 0.000000000000001, "stringTypeChecker":true},
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
