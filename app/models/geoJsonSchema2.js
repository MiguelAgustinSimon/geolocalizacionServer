const ajvInstance=require('./ajv-instance');
//https://www.jsonschema.net/app/schemas/140646
//sirve para rutas

const schema = {
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "type",
        "totalFeatures",
        "features",
        "crs"
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
                272
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
                            "_3.4.1.1.6.rutas_nacionales_dnv18.view.fid--1a90d579_181f375fb7d_-262d"
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
                                    "MultiLineString"
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
                                        "title": "A Schema",
                                        "items": {"type": "number"}
                                    }
                                }
                            }
                        }
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
                        "required": [
                            "id_ruta",
                            "FNA",
                            "GNA",
                            "NAM",
                            "RTN",
                            "Sentido",
                            "FUN",
                            "HCT",
                            "SAG",
                            "Tipo_Calzada",
                            "Progresiva_Final"
                        ],
                        "properties": {
                            "id_ruta": {
                                "type": "integer",
                                "default": 0,
                                "title": "The id_ruta Schema",
                                "examples": [
                                    544
                                ]
                            },
                            "FNA": {
                                "type": "string",
                                "default": "",
                                "title": "The FNA Schema",
                                "examples": [
                                    "RN V146"
                                ]
                            },
                            "GNA": {
                                "type": "string",
                                "default": "",
                                "title": "The GNA Schema",
                                "examples": [
                                    "RN"
                                ]
                            },
                            "NAM": {
                                "type": "string",
                                "default": "",
                                "title": "The NAM Schema",
                                "examples": [
                                    "V146"
                                ]
                            },
                            "RTN": {
                                "type": "string",
                                "default": "",
                                "title": "The RTN Schema",
                                "examples": [
                                    "V146"
                                ]
                            },
                            "Sentido": {
                                "type": "string",
                                "default": "",
                                "title": "The Sentido Schema",
                                "examples": [
                                    "D"
                                ]
                            },
                            "FUN": {
                                "type": "integer",
                                "default": 0,
                                "title": "The FUN Schema",
                                "examples": [
                                    6
                                ]
                            },
                            "HCT": {
                                "type": "integer",
                                "default": 0,
                                "title": "The HCT Schema",
                                "examples": [
                                    1
                                ]
                            },
                            "SAG": {
                                "type": "string",
                                "default": "",
                                "title": "The SAG Schema",
                                "examples": [
                                    "DNV"
                                ]
                            },
                            "Tipo_Calzada": {
                                "type": "string",
                                "default": "",
                                "title": "The Tipo_Calzada Schema",
                                "examples": [
                                    "P"
                                ]
                            },
                            "Progresiva_Final": {
                                "type": "number",
                                "default": 0.0,
                                "title": "The Progresiva_Final Schema",
                                "examples": [
                                    9.87
                                ]
                            }
                        },
                        "examples": [{
                            "id_ruta": 544,
                            "FNA": "RN V146",
                            "GNA": "RN",
                            "NAM": "V146",
                            "RTN": "V146",
                            "Sentido": "D",
                            "FUN": 6,
                            "HCT": 1,
                            "SAG": "DNV",
                            "Tipo_Calzada": "P",
                            "Progresiva_Final": 9.87
                        }]
                    }
                },
                "examples": [{
                    "type": "Feature",
                    "id": "_3.4.1.1.6.rutas_nacionales_dnv18.view.fid--1a90d579_181f375fb7d_-262d",
                    "geometry": {
                        "type": "MultiLineString",
                        "coordinates": [
                            [
                                [-58.52493,
                                    -
                                    34.783997
                                ]
                            ]
                        ]
                    },
                    "geometry_name": "geometry",
                    "properties": {
                        "id_ruta": 544,
                        "FNA": "RN V146",
                        "GNA": "RN",
                        "NAM": "V146",
                        "RTN": "V146",
                        "Sentido": "D",
                        "FUN": 6,
                        "HCT": 1,
                        "SAG": "DNV",
                        "Tipo_Calzada": "P",
                        "Progresiva_Final": 9.87
                    }
                }]
            },
            "examples": [
                [{
                    "type": "Feature",
                    "id": "_3.4.1.1.6.rutas_nacionales_dnv18.view.fid--1a90d579_181f375fb7d_-262d",
                    "geometry": {
                        "type": "MultiLineString",
                        "coordinates": [
                            [
                                [-58.52493,
                                    -
                                    34.783997
                                ]
                            ]
                        ]
                    },
                    "geometry_name": "geometry",
                    "properties": {
                        "id_ruta": 544,
                        "FNA": "RN V146",
                        "GNA": "RN",
                        "NAM": "V146",
                        "RTN": "V146",
                        "Sentido": "D",
                        "FUN": 6,
                        "HCT": 1,
                        "SAG": "DNV",
                        "Tipo_Calzada": "P",
                        "Progresiva_Final": 9.87
                    }
                }]
            ]
        },
        "crs": {
            "type": "object",
            "default": {},
            "title": "The crs Schema",
            "required": [
                "type",
                "properties"
            ],
            "properties": {
                "type": {
                    "type": "string",
                    "default": "",
                    "title": "The type Schema",
                    "examples": [
                        "name"
                    ]
                },
                "properties": {
                    "type": "object",
                    "default": {},
                    "title": "The properties Schema",
                    "required": [
                        "name"
                    ],
                    "properties": {
                        "name": {
                            "type": "string",
                            "default": "",
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
    },
    "examples": [{
        "type": "FeatureCollection",
        "totalFeatures": 272,
        "features": [{
            "type": "Feature",
            "id": "_3.4.1.1.6.rutas_nacionales_dnv18.view.fid--1a90d579_181f375fb7d_-262d",
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [-58.52493,
                            -
                            34.783997
                        ]
                    ]
                ]
            },
            "geometry_name": "geometry",
            "properties": {
                "id_ruta": 544,
                "FNA": "RN V146",
                "GNA": "RN",
                "NAM": "V146",
                "RTN": "V146",
                "Sentido": "D",
                "FUN": 6,
                "HCT": 1,
                "SAG": "DNV",
                "Tipo_Calzada": "P",
                "Progresiva_Final": 9.87
            }
        }],
        "crs": {
            "type": "name",
            "properties": {
                "name": "urn:ogc:def:crs:EPSG::4326"
            }
        }
    }]
}
module.exports = ajvInstance.compile(schema);
