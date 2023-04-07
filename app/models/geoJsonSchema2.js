const ajvInstance=require('./ajv-instance');
//https://www.jsonschema.net/app/schemas/140646
//sirve para rutas

const schema = {
    "type": "object",
    "title": "Root Schema",
    "properties": {
        "type": {
            "type": "string",
            "title": "The type Schema",
            "examples": [
                "FeatureCollection"
            ]
        },
        "totalFeatures": {
            "type": "integer",
            "title": "The totalFeatures Schema",
            "examples": [
                272
            ]
        },
        "features": {
            "type": "array",
            "title": "The features Schema",
            "items": {
                "type": "object",
                "title": "A Schema",
                "required": [
                    "type",
                    "geometry",
                    "properties"
                ],
                "properties": {
                    "type": {
                        "type": "string",
                        "title": "The type Schema",
                        "examples": [
                            "Feature"
                        ]
                    },
                    "id": {
                        "type": "string",
                        "title": "The id Schema",
                        "examples": [
                            "_3.4.1.1.6.rutas_nacionales_dnv18.view.fid--1a90d579_181f375fb7d_-262d"
                        ]
                    },
                    "geometry": {
                        "type": "object",
                        "title": "The geometry Schema",
                        "required": ["coordinates"],
                        "properties": {
                            "type": {
                                "type": "string",
                                "title": "The type Schema",
                                "examples": [
                                    "MultiLineString"
                                ]
                            },
                            "coordinates": {
                                "type": "array",
                                "items": {
                                    "type": "array",
                                    "items": {
                                        "type": "array",
                                        "title": "A Schema",
                                        "items": {"type": "number", "validarVacio":true,"validarDecimales":true}
                                    }
                                }
                            }
                        }
                    },
                    "geometry_name": {
                        "type": "string",
                        "title": "The geometry_name Schema",
                        "examples": [
                            "geometry"
                        ]
                    },
                    "properties": {
                        "type": "object",
                        "properties": {
                        }
                    }
                }
            }
        },
        "crs": {
            "type": "object",
            "title": "The crs Schema",
            "required": [
                "type",
                "properties"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "title": "The type Schema",
                    "examples": [
                        "name"
                    ]
                },
                "properties": {
                    "type": "object",
                    "title": "The properties Schema",
                    "required": [
                        "name"
                    ],
                    "properties": {
                        "name": {
                            "type": "string",
                            "title": "The name Schema",
                            "examples": [
                                "urn:ogc:def:crs:EPSG::4326"
                            ]
                        }
                    },
                    "examples": [{
                        "name": "urn:ogc:def:crs:EPSG::4326"
                    }]
                }
            },
            "examples": [{
                "type": "name",
                "properties": {
                    "name": "urn:ogc:def:crs:EPSG::4326"
                }
            }]
        }
    }
}
module.exports = ajvInstance.compile(schema);
