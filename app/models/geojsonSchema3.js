const ajvInstance=require('./ajv-instance');
//https://jsonformatter.org/json-to-jsonschema
//sirve para BarriosPopulares

const schema = {
    "type": "object",
    "default": {},
    "title": "Root Schema",
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
                "title": "A Schema",
                "required": [
                    "type",
                    "properties",
                    "geometry"
                ],
                "properties": {
                    "type": {
                        "type": "string",
                        "title": "The type Schema",
                        "examples": [
                            "Feature"
                        ]
                    },
                    "properties": {
                        "type": "object",
                        "title": "The properties Schema",
                        "properties": {
                            "renabap_id": {
                                "type": "integer",
                                "title": "The renabap_id Schema"
                            },
                            "nombre_barrio": {
                                "type": "string",
                                "title": "The nombre_barrio Schema",
                                "examples": [
                                    "Monterrey I",
                                    "Malvinas II",
                                    "Ferroviario",
                                    "La Favelita",
                                    "Casaca",
                                    "La Güemes",
                                    "8 y 489",
                                    "La Fábrica",
                                    "Urquiza",
                                    "Hijos de Malvinas"
                                ]
                            },
                            "provincia": {
                                "type": "string",
                                "title": "The provincia Schema",
                                "examples": [
                                    "Buenos Aires"
                                ]
                            },
                            "departamento": {
                                "type": "string",
                                "title": "The departamento Schema",
                                "examples": [
                                    "Pilar",
                                    "La Plata",
                                    "Avellaneda"
                                ]
                            },
                            "localidad": {
                                "type": "string",
                                "title": "The localidad Schema",
                                "examples": [
                                    "Presidente Derqui",
                                    "José Melchor Romero",
                                    "Angel Etcheverry",
                                    "Tolosa",
                                    "City Bell",
                                    "Manuel B. Gonnet",
                                    "Gorina",
                                    "Dock Sud"
                                ]
                            },
                            "cantidad_familias_aproximada": {
                                "type": "number",
                                "title": "The cantidad_familias_aproximada Schema"
                            },
                            "cantidad_viviendas_aproximadas": {
                                "type": "number",
                                "title": "The cantidad_viviendas_aproximadas Schema"
                            },
                            "decada_de_creacion": {
                                "type": "string",
                                "title": "The decada_de_creacion Schema",
                                "examples": [
                                    "Década 1990",
                                    "Década 2000",
                                    "Década 1970",
                                    "Década 1980",
                                    "Década 1960"
                                ]
                            },
                            "anio_de_creacion": {
                                "type": "null",
                                "title": "The anio_de_creacion Schema",
                                "examples": [
                                    null
                                ]
                            },
                            "energia_electrica": {
                                "type": "string",
                                "title": "The energia_electrica Schema",
                                "examples": [
                                    "Conexión a la red con medidor comunitario",
                                    "Conexión irregular a la red",
                                    "Conexión formal a la red con medidor domiciliario con factura"
                                ]
                            },
                            "efluentes_cloacales": {
                                "type": "string",
                                "title": "The efluentes_cloacales Schema",
                                "examples": [
                                    "Desagüe a cámara séptica y pozo ciego",
                                    "Desagüe sólo a pozo negro/ciego u hoyo"
                                ]
                            },
                            "agua_corriente": {
                                "type": "string",
                                "title": "The agua_corriente Schema",
                                "examples": [
                                    "Bomba de agua de pozo domiciliaria",
                                    "Conexión irregular a la red de agua",
                                    "Conexión formal a la red de agua con factura"
                                ]
                            },
                            "cocina": {
                                "type": "string",
                                "title": "The cocina Schema",
                                "examples": [
                                    "Gas en garrafa"
                                ]
                            },
                            "calefaccion": {
                                "type": "string",
                                "title": "The calefaccion Schema",
                                "examples": [
                                    "Otro / vacío",
                                    "Leña o carbón",
                                    "Energía eléctrica"
                                ]
                            },
                            "situacion_dominial": {
                                "type": "string",
                                "title": "The situacion_dominial Schema",
                                "examples": [
                                    "Otro tipo de seguridad en la tenencia",
                                    "Ninguna seguridad en la tenencia"
                                ]
                            },
                            "clasificacion_barrio": {
                                "type": "string",
                                "title": "The clasificacion_barrio Schema",
                                "examples": [
                                    "Asentamiento",
                                    "Villa"
                                ]
                            },
                            "superficie_m2": {
                                "type": "integer",
                                "title": "The superficie_m2 Schema"
                            }
                        }
                    },
                    "geometry": {
                        "type": "object",
                        "title": "The geometry Schema",
                        "required": [
                            "type",
                            "coordinates"
                        ],
                        "properties": {
                            "type": {
                                "type": "string",
                                "title": "The type Schema",
                                "examples": [
                                    "MultiPolygon"
                                ]
                            },
                            "coordinates": {
                                "type": "array",
                                "title": "The coordinates Schema",
                                "items": {
                                    "type": "array",
                                    "title": "A Schema",
                                    "items": {
                                        "type": "array",
                                        "title": "A Schema",
                                        "items": {
                                            "type": "array",
                                            "title": "A Schema",
                                            items: {"type": "number", "validarVacio":true,"validarDecimales":true}                                          
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