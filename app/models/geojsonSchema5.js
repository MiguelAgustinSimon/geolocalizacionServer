const ajvInstance=require('./ajv-instance');
//https://www.jsonschema.net/app/schemas/140646
//sirve para aerodromos

const schema = {
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "features"
    ],
    "properties": {
        "type": {
            "type": "string",
            "default": "",
            "title": "The type Schema"
        },
        "totalFeatures": {
            "type": "integer",
            "default": 0,
            "title": "The totalFeatures Schema"
        },
        "features": {
            "type": "array",
            "default": [],
            "title": "The features Schema",
            "items": {
                "type": "object",
                "default": {},
                "title": "A Schema",
                "required": [
                    "type",
                    "geometry"
                ],
                "properties": {
                    "type": {
                        "type": "string",
                        "default": "",
                        "title": "The type Schema",
                        "examples": [
                            "Feature"
                        ]
                    },
                    "id": {
                        "type": "string",
                        "default": "",
                        "title": "The id Schema",
                        "examples": [
                            "_3.4.4.1.5_aerodromos_anac_2018.view.fid--1a90d579_181f37cba46_-679b"
                        ]
                    },
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
                                    "Point"
                                ]
                            },
                            "coordinates": {
                                "type": "array",
                                "items": {"type": "number", "validarDecimales":true}
                            }
                        }
                    }
                }
            }
        }
    }
}
  
module.exports = ajvInstance.compile(schema);
