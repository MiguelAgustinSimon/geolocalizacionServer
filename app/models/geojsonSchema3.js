const ajvInstance=require('./ajv-instance');
//https://www.jsonschema.net/app/schemas/140646

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
                        }
                    },
                }
            },
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
                    },
                    "properties": {
                        "type": "object",
                        "default": {},
                        "title": "The properties Schema",
                        "required": [
                            "renabap_id",
                            "nombre_barrio",
                            "provincia",
                            "departamento",
                            "localidad",
                            "cantidad_familias_aproximada",
                            "cantidad_viviendas_aproximadas",
                            "decada_de_creacion",
                            "anio_de_creacion",
                            "energia_electrica",
                            "efluentes_cloacales",
                            "agua_corriente",
                            "cocina",
                            "calefaccion",
                            "situacion_dominial",
                            "clasificacion_barrio",
                            "superficie_m2"
                        ],
                        "properties": {
                            "renabap_id": {
                                "type": "integer",
                                "default": 0,
                                "title": "The renabap_id Schema",
                            },
                            "nombre_barrio": {
                                "type": "string",
                                "default": "",
                                "title": "The nombre_barrio Schema",
                            },
                            "provincia": {
                                "type": "string",
                                "default": "",
                                "title": "The provincia Schema",
                            },
                            "departamento": {
                                "type": "string",
                                "default": "",
                                "title": "The departamento Schema",
                            },
                            "localidad": {
                                "type": "string",
                                "default": "",
                                "title": "The localidad Schema",
                            },
                            "cantidad_familias_aproximada": {
                                "type": "number",
                                "default": 0.0,
                                "title": "The cantidad_familias_aproximada Schema",
                            },
                            "cantidad_viviendas_aproximadas": {
                                "type": "number",
                                "default": 0.0,
                                "title": "The cantidad_viviendas_aproximadas Schema",
                            },
                            "decada_de_creacion": {
                                "type": "string",
                                "default": "",
                                "title": "The decada_de_creacion Schema",
                            },
                            "anio_de_creacion": {
                                "type": "null",
                                "default": null,
                                "title": "The anio_de_creacion Schema",
                            },
                            "energia_electrica": {
                                "type": "string",
                                "default": "",
                                "title": "The energia_electrica Schema",
                            },
                            "efluentes_cloacales": {
                                "type": "string",
                                "default": "",
                                "title": "The efluentes_cloacales Schema",
                            },
                            "agua_corriente": {
                                "type": "string",
                                "default": "",
                                "title": "The agua_corriente Schema",
                            },
                            "cocina": {
                                "type": "string",
                                "default": "",
                                "title": "The cocina Schema",
                            },
                            "calefaccion": {
                                "type": "string",
                                "default": "",
                                "title": "The calefaccion Schema",
                            },
                            "situacion_dominial": {
                                "type": "string",
                                "default": "",
                                "title": "The situacion_dominial Schema",
                            },
                            "clasificacion_barrio": {
                                "type": "string",
                                "default": "",
                                "title": "The clasificacion_barrio Schema",
                            },
                            "superficie_m2": {
                                "type": "integer",
                                "default": 0,
                                "title": "The superficie_m2 Schema",
                            }
                        },
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
                                                "title": "A Schema",
                                            },
                                        },
                                    },
                                },
                            }
                        },
                    }
                },
            },

        }
    },
}
  
module.exports = ajvInstance.compile(schema);
