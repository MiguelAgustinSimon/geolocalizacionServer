const ajvInstance=require('./ajv-instance');
//https://www.jsonschema.net/app/schemas/140646
//sirve para BarriosPopulares
const schema = {
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "type",
        "crs",
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
                                "urn:ogc:def:crs:OGC:1.3:CRS84"
                            ]
                        }
                    },
                    "examples": [{
                        "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
                    }]
                }
            },
            "examples": [{
                "type": "name",
                "properties": {
                    "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
                }
            }]
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
                    "properties",
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
                    "properties": {
                        "type": "object",
                        "default": {},
                        "title": "The properties Schema",
                        "required": [
                        ],
                        "properties": {
                            "renabap_id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The renabap_id Schema",
                                "examples": [
                                    1
                                ]
                            },
                            "nombre_barrio": {
                                "type": "string",
                                "default": "",
                                "title": "The nombre_barrio Schema",
                                "examples": [
                                    "Monterrey I"
                                ]
                            },
                            "provincia": {
                                "type": "string",
                                "default": "",
                                "title": "The provincia Schema",
                                "examples": [
                                    "Buenos Aires"
                                ]
                            },
                            "departamento": {
                                "type": "string",
                                "default": "",
                                "title": "The departamento Schema",
                                "examples": [
                                    "Pilar"
                                ]
                            },
                            "localidad": {
                                "type": "string",
                                "default": "",
                                "title": "The localidad Schema",
                                "examples": [
                                    "Presidente Derqui"
                                ]
                            },
                            "cantidad_familias_aproximada": {
                                "type": "number",
                                "default": 0.0,
                                "title": "The cantidad_familias_aproximada Schema",
                                "examples": [
                                    44.0
                                ]
                            },
                            "cantidad_viviendas_aproximadas": {
                                "type": "number",
                                "default": 0.0,
                                "title": "The cantidad_viviendas_aproximadas Schema",
                                "examples": [
                                    40.0
                                ]
                            },
                            "decada_de_creacion": {
                                "type": "string",
                                "default": "",
                                "title": "The decada_de_creacion Schema",
                                "examples": [
                                    "Década 1990"
                                ]
                            },
                            "anio_de_creacion": {
                                "type": "null",
                                "default": null,
                                "title": "The anio_de_creacion Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "energia_electrica": {
                                "type": "string",
                                "default": "",
                                "title": "The energia_electrica Schema",
                                "examples": [
                                    "Conexión a la red con medidor comunitario"
                                ]
                            },
                            "efluentes_cloacales": {
                                "type": "string",
                                "default": "",
                                "title": "The efluentes_cloacales Schema",
                                "examples": [
                                    "Desagüe a cámara séptica y pozo ciego"
                                ]
                            },
                            "agua_corriente": {
                                "type": "string",
                                "default": "",
                                "title": "The agua_corriente Schema",
                                "examples": [
                                    "Bomba de agua de pozo domiciliaria"
                                ]
                            },
                            "cocina": {
                                "type": "string",
                                "default": "",
                                "title": "The cocina Schema",
                                "examples": [
                                    "Gas en garrafa"
                                ]
                            },
                            "calefaccion": {
                                "type": "string",
                                "default": "",
                                "title": "The calefaccion Schema",
                                "examples": [
                                    "Otro / vacío"
                                ]
                            },
                            "situacion_dominial": {
                                "type": "string",
                                "default": "",
                                "title": "The situacion_dominial Schema",
                                "examples": [
                                    "Otro tipo de seguridad en la tenencia"
                                ]
                            },
                            "clasificacion_barrio": {
                                "type": "string",
                                "default": "",
                                "title": "The clasificacion_barrio Schema",
                                "examples": [
                                    "Asentamiento"
                                ]
                            },
                            "superficie_m2": {
                                "type": "integer",
                                "default": 0,
                                "title": "The superficie_m2 Schema",
                                "examples": [
                                    11674
                                ]
                            }
                        }
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
                                            "type": "array",
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
                }
            }
        }
    }
}
module.exports = ajvInstance.compile(schema);
