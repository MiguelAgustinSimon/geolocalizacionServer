const ajvInstance=require('./ajv-instance');
//https://www.jsonschema.net/app/schemas/140646
const schema = {
        "type": "object",
        "default": {},
        "title": "Root Schema",
        "required": [
            "geometry"
        ],
        "properties": {
            "geometry": {
                "type": "object",
                "default": {},
                "title": "The geometry Schema",
                "required": [
                    "type",
                    "coordinates"
                ],
                "properties": {
                    "type": {
                        "type": "string",
                        "default": "",
                        "title": "The type Schema",
                        "examples": [
                            "MultiPolygon"
                        ]
                    },
                    "coordinates": {
                        "type": "array",
                        "default": [],
                        "title": "The coordinates Schema",
                        "items": {
                            "type": "array",
                            "default": [],
                            "title": "A Schema",
                            "items": {
                                "type": "array",
                                "default": [],
                                "title": "A Schema",
                                
                                "items": {
                                    "type": "number",
                                    "title": "A Schema"
                                }
                                
                                
                            }
                        }
                    }
                }
            }
        }    
  };
  
  
module.exports = ajvInstance.compile(schema);
