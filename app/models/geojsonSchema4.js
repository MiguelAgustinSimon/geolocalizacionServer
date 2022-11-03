const ajvInstance=require('./ajv-instance');
//https://www.jsonschema.net/app/schemas/140646

const schema = {
        "type": "object",
        "default": {},
        "title": "Root Schema",
        "required": [
            "type",
            "totalFeatures",
            "features"
        ],
        "properties": {
            "type": {
                "type": "string",
                "default": "",
                "title": "The type Schema",
                "examples": [
                    "FeatureCollection"
                ]
            },
            "totalFeatures": {
                "type": "integer",
                "default": 0,
                "title": "The totalFeatures Schema",
                "examples": [
                    693
                ]
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
                        "id",
                        "geometry",
                        "geometry_name",
                        "properties"
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
                                    "default": [],
                                    "title": "The coordinates Schema",
                                    "items": {},
                                    "examples": [
                                        []
                                    ]
                                }
                            },
                            "examples": [{
                                "type": "Point",
                                "coordinates": []
                            }]
                        },
                        "geometry_name": {
                            "type": "string",
                            "default": "",
                            "title": "The geometry_name Schema",
                            "examples": [
                                "geometry"
                            ]
                        },
                        "properties": {
                            "type": "object",
                            "default": {},
                            "title": "The properties Schema",
                            "required": [],
                            "properties": {},
                            "examples": [{}]
                        }
                    },
                    "examples": [{
                        "type": "Feature",
                        "id": "_3.4.4.1.5_aerodromos_anac_2018.view.fid--1a90d579_181f37cba46_-679b",
                        "geometry": {
                            "type": "Point",
                            "coordinates": []
                        },
                        "geometry_name": "geometry",
                        "properties": {}
                    }]
                },
                "examples": [
                    [{
                        "type": "Feature",
                        "id": "_3.4.4.1.5_aerodromos_anac_2018.view.fid--1a90d579_181f37cba46_-679b",
                        "geometry": {
                            "type": "Point",
                            "coordinates": []
                        },
                        "geometry_name": "geometry",
                        "properties": {}
                    }]
                ]
            }
        },
        "examples": [{
            "type": "FeatureCollection",
            "totalFeatures": 693,
            "features": [{
                "type": "Feature",
                "id": "_3.4.4.1.5_aerodromos_anac_2018.view.fid--1a90d579_181f37cba46_-679b",
                "geometry": {
                    "type": "Point",
                    "coordinates": []
                },
                "geometry_name": "geometry",
                "properties": {}
            }]
        }]
}
  
module.exports = ajvInstance.compile(schema);
