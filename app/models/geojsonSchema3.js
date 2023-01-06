const ajvInstance=require('./ajv-instance');
//https://jsonformatter.org/json-to-jsonschema
//sirve para BarriosPopulares

const schema = {
    "definitions": {
        "Welcome7": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "type": {
                    "type": "string"
                },
                "crs": {
                    "$ref": "#/definitions/CRS"
                },
                "features": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Feature"
                    }
                }
            },
            "required": [
                "crs",
                "features",
                "type"
            ],
            "title": "Welcome7"
        },
        "CRS": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "type": {
                    "type": "string"
                },
                "properties": {
                    "$ref": "#/definitions/CRSProperties"
                }
            },
            "required": [
                "properties",
                "type"
            ],
            "title": "CRS"
        },
        "CRSProperties": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "name": {
                    "type": "string"
                }
            },
            "required": [
                "name"
            ],
            "title": "CRSProperties"
        },
        "Feature": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "type": {
                    "$ref": "#/definitions/FeatureType"
                },
                "properties": {
                    "$ref": "#/definitions/FeatureProperties"
                },
                "geometry": {
                    "$ref": "#/definitions/Geometry"
                }
            },
            "required": [
                "geometry",
                "properties",
                "type"
            ],
            "title": "Feature"
        },
        "Geometry": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "type": {
                    "$ref": "#/definitions/GeometryType"
                },
                "coordinates": {
                    "type": "array",
                    "items": {
                        "type": "array",
                        "items": {
                            "type": "array",
                            "items": {
                                "type": "array",
                                "items": {
                                    "type": "number"
                                }
                            }
                        }
                    }
                }
            },
            "required": [
                "coordinates",
                "type"
            ],
            "title": "Geometry"
        },
        "FeatureProperties": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "renabap_id": {
                    "type": "integer"
                },
                "nombre_barrio": {
                    "type": "string"
                },
                "provincia": {
                    "$ref": "#/definitions/Provincia"
                },
                "departamento": {
                    "$ref": "#/definitions/Departamento"
                },
                "localidad": {
                    "type": "string"
                },
                "cantidad_familias_aproximada": {
                    "type": "number"
                },
                "cantidad_viviendas_aproximadas": {
                    "type": "number"
                },
                "decada_de_creacion": {
                    "type": "string"
                },
                "anio_de_creacion": {
                    "type": "null"
                },
                "energia_electrica": {
                    "type": "string"
                },
                "efluentes_cloacales": {
                    "$ref": "#/definitions/EfluentesCloacales"
                },
                "agua_corriente": {
                    "$ref": "#/definitions/AguaCorriente"
                },
                "cocina": {
                    "$ref": "#/definitions/Cocina"
                },
                "calefaccion": {
                    "$ref": "#/definitions/Calefaccion"
                },
                "situacion_dominial": {
                    "$ref": "#/definitions/SituacionDominial"
                },
                "clasificacion_barrio": {
                    "$ref": "#/definitions/ClasificacionBarrio"
                },
                "superficie_m2": {
                    "type": "integer"
                }
            },
            "required": [
                "agua_corriente",
                "anio_de_creacion",
                "calefaccion",
                "cantidad_familias_aproximada",
                "cantidad_viviendas_aproximadas",
                "clasificacion_barrio",
                "cocina",
                "decada_de_creacion",
                "departamento",
                "efluentes_cloacales",
                "energia_electrica",
                "localidad",
                "nombre_barrio",
                "provincia",
                "renabap_id",
                "situacion_dominial",
                "superficie_m2"
            ],
            "title": "FeatureProperties"
        },
        "GeometryType": {
            "type": "string",
            "enum": [
                "MultiPolygon"
            ],
            "title": "GeometryType"
        },
        "AguaCorriente": {
            "type": "string",
            "enum": [
                "Bomba de agua de pozo domiciliaria",
                "Conexión irregular a la red de agua",
                "Conexión formal a la red de agua con factura"
            ],
            "title": "AguaCorriente"
        },
        "Calefaccion": {
            "type": "string",
            "enum": [
                "Otro / vacío",
                "Leña o carbón",
                "Energía eléctrica"
            ],
            "title": "Calefaccion"
        },
        "ClasificacionBarrio": {
            "type": "string",
            "enum": [
                "Asentamiento",
                "Villa"
            ],
            "title": "ClasificacionBarrio"
        },
        "Cocina": {
            "type": "string",
            "enum": [
                "Gas en garrafa"
            ],
            "title": "Cocina"
        },
        "Departamento": {
            "type": "string",
            "enum": [
                "Pilar",
                "La Plata"
            ],
            "title": "Departamento"
        },
        "EfluentesCloacales": {
            "type": "string",
            "enum": [
                "Desagüe a cámara séptica y pozo ciego",
                "Desagüe sólo a pozo negro/ciego u hoyo"
            ],
            "title": "EfluentesCloacales"
        },
        "Provincia": {
            "type": "string",
            "enum": [
                "Buenos Aires"
            ],
            "title": "Provincia"
        },
        "SituacionDominial": {
            "type": "string",
            "enum": [
                "Ninguna seguridad en la tenencia",
                "Otro tipo de seguridad en la tenencia"
            ],
            "title": "SituacionDominial"
        },
        "FeatureType": {
            "type": "string",
            "enum": [
                "Feature"
            ],
            "title": "FeatureType"
        }
    }
}

module.exports = ajvInstance.compile(schema);
