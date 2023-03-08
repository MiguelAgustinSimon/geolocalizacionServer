const ajvInstance=require('./ajv-instance');
//https://jsonformatter.org/json-to-jsonschema
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
                                "title": "The renabap_id Schema",
                                "examples": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10
                                ]
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
                                "title": "The cantidad_familias_aproximada Schema",
                                "examples": [
                                    44.0,
                                    319.0,
                                    146.0,
                                    134.0,
                                    22.0,
                                    13.0,
                                    25.0,
                                    204.0,
                                    110.0,
                                    121.0
                                ]
                            },
                            "cantidad_viviendas_aproximadas": {
                                "type": "number",
                                "title": "The cantidad_viviendas_aproximadas Schema",
                                "examples": [
                                    40.0,
                                    290.0,
                                    133.0,
                                    122.0,
                                    20.0,
                                    12.0,
                                    23.0,
                                    185.0,
                                    100.0,
                                    110.0
                                ]
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
                                "title": "The superficie_m2 Schema",
                                "examples": [
                                    11674,
                                    98034,
                                    75850,
                                    36865,
                                    25754,
                                    3422,
                                    6551,
                                    48477,
                                    13299,
                                    37407
                                ]
                            }
                        },
                        "examples": [{
                            "renabap_id": 1,
                            "nombre_barrio": "Monterrey I",
                            "provincia": "Buenos Aires",
                            "departamento": "Pilar",
                            "localidad": "Presidente Derqui",
                            "cantidad_familias_aproximada": 44.0,
                            "cantidad_viviendas_aproximadas": 40.0,
                            "decada_de_creacion": "Década 1990",
                            "anio_de_creacion": null,
                            "energia_electrica": "Conexión a la red con medidor comunitario",
                            "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                            "agua_corriente": "Bomba de agua de pozo domiciliaria",
                            "cocina": "Gas en garrafa",
                            "calefaccion": "Otro / vacío",
                            "situacion_dominial": "Otro tipo de seguridad en la tenencia",
                            "clasificacion_barrio": "Asentamiento",
                            "superficie_m2": 11674
                        },
                        {
                            "renabap_id": 2,
                            "nombre_barrio": "Malvinas II",
                            "provincia": "Buenos Aires",
                            "departamento": "La Plata",
                            "localidad": "José Melchor Romero",
                            "cantidad_familias_aproximada": 319.0,
                            "cantidad_viviendas_aproximadas": 290.0,
                            "decada_de_creacion": "Década 1990",
                            "anio_de_creacion": null,
                            "energia_electrica": "Conexión irregular a la red",
                            "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                            "agua_corriente": "Conexión irregular a la red de agua",
                            "cocina": "Gas en garrafa",
                            "calefaccion": "Otro / vacío",
                            "situacion_dominial": "Ninguna seguridad en la tenencia",
                            "clasificacion_barrio": "Asentamiento",
                            "superficie_m2": 98034
                        },
                        {
                            "renabap_id": 3,
                            "nombre_barrio": "Ferroviario",
                            "provincia": "Buenos Aires",
                            "departamento": "La Plata",
                            "localidad": "Angel Etcheverry",
                            "cantidad_familias_aproximada": 146.0,
                            "cantidad_viviendas_aproximadas": 133.0,
                            "decada_de_creacion": "Década 2000",
                            "anio_de_creacion": null,
                            "energia_electrica": "Conexión irregular a la red",
                            "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                            "agua_corriente": "Conexión formal a la red de agua con factura",
                            "cocina": "Gas en garrafa",
                            "calefaccion": "Leña o carbón",
                            "situacion_dominial": "Ninguna seguridad en la tenencia",
                            "clasificacion_barrio": "Asentamiento",
                            "superficie_m2": 75850
                        },
                        {
                            "renabap_id": 4,
                            "nombre_barrio": "La Favelita",
                            "provincia": "Buenos Aires",
                            "departamento": "La Plata",
                            "localidad": "Tolosa",
                            "cantidad_familias_aproximada": 134.0,
                            "cantidad_viviendas_aproximadas": 122.0,
                            "decada_de_creacion": "Década 1970",
                            "anio_de_creacion": null,
                            "energia_electrica": "Conexión irregular a la red",
                            "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                            "agua_corriente": "Conexión irregular a la red de agua",
                            "cocina": "Gas en garrafa",
                            "calefaccion": "Energía eléctrica",
                            "situacion_dominial": "Ninguna seguridad en la tenencia",
                            "clasificacion_barrio": "Asentamiento",
                            "superficie_m2": 36865
                        },
                        {
                            "renabap_id": 5,
                            "nombre_barrio": "Casaca",
                            "provincia": "Buenos Aires",
                            "departamento": "La Plata",
                            "localidad": "City Bell",
                            "cantidad_familias_aproximada": 22.0,
                            "cantidad_viviendas_aproximadas": 20.0,
                            "decada_de_creacion": "Década 2000",
                            "anio_de_creacion": null,
                            "energia_electrica": "Conexión irregular a la red",
                            "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                            "agua_corriente": "Bomba de agua de pozo domiciliaria",
                            "cocina": "Gas en garrafa",
                            "calefaccion": "Otro / vacío",
                            "situacion_dominial": "Ninguna seguridad en la tenencia",
                            "clasificacion_barrio": "Asentamiento",
                            "superficie_m2": 25754
                        },
                        {
                            "renabap_id": 6,
                            "nombre_barrio": "La Güemes",
                            "provincia": "Buenos Aires",
                            "departamento": "La Plata",
                            "localidad": "Manuel B. Gonnet",
                            "cantidad_familias_aproximada": 13.0,
                            "cantidad_viviendas_aproximadas": 12.0,
                            "decada_de_creacion": "Década 1970",
                            "anio_de_creacion": null,
                            "energia_electrica": "Conexión irregular a la red",
                            "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                            "agua_corriente": "Conexión irregular a la red de agua",
                            "cocina": "Gas en garrafa",
                            "calefaccion": "Energía eléctrica",
                            "situacion_dominial": "Ninguna seguridad en la tenencia",
                            "clasificacion_barrio": "Asentamiento",
                            "superficie_m2": 3422
                        },
                        {
                            "renabap_id": 7,
                            "nombre_barrio": "8 y 489",
                            "provincia": "Buenos Aires",
                            "departamento": "La Plata",
                            "localidad": "Manuel B. Gonnet",
                            "cantidad_familias_aproximada": 25.0,
                            "cantidad_viviendas_aproximadas": 23.0,
                            "decada_de_creacion": "Década 1980",
                            "anio_de_creacion": null,
                            "energia_electrica": "Conexión formal a la red con medidor domiciliario con factura",
                            "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                            "agua_corriente": "Bomba de agua de pozo domiciliaria",
                            "cocina": "Gas en garrafa",
                            "calefaccion": "Otro / vacío",
                            "situacion_dominial": "Ninguna seguridad en la tenencia",
                            "clasificacion_barrio": "Asentamiento",
                            "superficie_m2": 6551
                        },
                        {
                            "renabap_id": 8,
                            "nombre_barrio": "La Fábrica",
                            "provincia": "Buenos Aires",
                            "departamento": "La Plata",
                            "localidad": "Gorina",
                            "cantidad_familias_aproximada": 204.0,
                            "cantidad_viviendas_aproximadas": 185.0,
                            "decada_de_creacion": "Década 1960",
                            "anio_de_creacion": null,
                            "energia_electrica": "Conexión irregular a la red",
                            "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                            "agua_corriente": "Conexión irregular a la red de agua",
                            "cocina": "Gas en garrafa",
                            "calefaccion": "Energía eléctrica",
                            "situacion_dominial": "Ninguna seguridad en la tenencia",
                            "clasificacion_barrio": "Villa",
                            "superficie_m2": 48477
                        },
                        {
                            "renabap_id": 9,
                            "nombre_barrio": "Urquiza",
                            "provincia": "Buenos Aires",
                            "departamento": "Avellaneda",
                            "localidad": "Dock Sud",
                            "cantidad_familias_aproximada": 110.0,
                            "cantidad_viviendas_aproximadas": 100.0,
                            "decada_de_creacion": "Década 1990",
                            "anio_de_creacion": null,
                            "energia_electrica": "Conexión a la red con medidor comunitario",
                            "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                            "agua_corriente": "Conexión irregular a la red de agua",
                            "cocina": "Gas en garrafa",
                            "calefaccion": "Energía eléctrica",
                            "situacion_dominial": "Ninguna seguridad en la tenencia",
                            "clasificacion_barrio": "Villa",
                            "superficie_m2": 13299
                        },
                        {
                            "renabap_id": 10,
                            "nombre_barrio": "Hijos de Malvinas",
                            "provincia": "Buenos Aires",
                            "departamento": "La Plata",
                            "localidad": "José Melchor Romero",
                            "cantidad_familias_aproximada": 121.0,
                            "cantidad_viviendas_aproximadas": 110.0,
                            "decada_de_creacion": "Década 2000",
                            "anio_de_creacion": null,
                            "energia_electrica": "Conexión irregular a la red",
                            "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                            "agua_corriente": "Conexión irregular a la red de agua",
                            "cocina": "Gas en garrafa",
                            "calefaccion": "Otro / vacío",
                            "situacion_dominial": "Ninguna seguridad en la tenencia",
                            "clasificacion_barrio": "Asentamiento",
                            "superficie_m2": 37407
                        }]
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
                                            "items": {
                                                "type": "number",
                                                "title": "A Schema",
                                                "validarDecimales":true,
                                                "examples": [
                                                    -
                                                    58.833500901145612,
                                                    -
                                                    34.481276770718189,
                                                    -
                                                    58.833833644307404,
                                                    -
                                                    34.480867142010787,
                                                    -
                                                    58.833401356862986,
                                                    -
                                                    34.480611075635764,
                                                    -
                                                    58.833454949299295,
                                                    -
                                                    34.480534825884789,
                                                    -
                                                    58.83316876541295,
                                                    -
                                                    34.480371485832094,
                                                    -
                                                    58.83281265527377,
                                                    -
                                                    34.480896232575049,
                                                    -
                                                    58.832748610431672,
                                                    -
                                                    34.480953113597025,
                                                    -
                                                    58.832684987746745,
                                                    -
                                                    34.480965538453553,
                                                    -
                                                    58.832026000399551,
                                                    -
                                                    34.481794999739414,
                                                    -
                                                    58.832827999612448,
                                                    -
                                                    34.482211000037587,
                                                    -
                                                    58.833112000118653,
                                                    -
                                                    34.481854999808377,
                                                    -
                                                    58.832599999890036,
                                                    -
                                                    34.481574000339791,
                                                    -
                                                    58.832962000395966,
                                                    -
                                                    34.481119000041772,
                                                    -
                                                    58.833438366092253,
                                                    -
                                                    34.481346620220094,
                                                    -
                                                    58.012000483529214,
                                                    -
                                                    34.947319669892487,
                                                    -
                                                    58.009108568999977,
                                                    -
                                                    34.94466747499996,
                                                    -
                                                    58.00795246253093,
                                                    -
                                                    34.945497040906076,
                                                    -
                                                    58.008882429469466,
                                                    -
                                                    34.94636605765951,
                                                    -
                                                    58.007774306193937,
                                                    -
                                                    34.94716392119647,
                                                    -
                                                    58.009816307064618,
                                                    -
                                                    34.948993738775613,
                                                    -
                                                    58.009965911347166,
                                                    -
                                                    34.949120102091271,
                                                    -
                                                    58.012151855823248,
                                                    -
                                                    34.947465566293133,
                                                    -
                                                    58.07980353023293,
                                                    -
                                                    35.035073762886761,
                                                    -
                                                    58.079575078550604,
                                                    -
                                                    35.035177334662507,
                                                    -
                                                    58.079417214080948,
                                                    -
                                                    35.035391970366703,
                                                    -
                                                    58.090995481221739,
                                                    -
                                                    35.045888976479588,
                                                    -
                                                    58.091428752440727,
                                                    -
                                                    35.045692153195269,
                                                    -
                                                    58.091257348132011,
                                                    -
                                                    35.045495872379789,
                                                    -
                                                    58.089855595577973,
                                                    -
                                                    35.04422186341445,
                                                    -
                                                    58.087430681587058,
                                                    -
                                                    35.042035908475789,
                                                    -
                                                    58.083058372769294,
                                                    -
                                                    35.038034324659229,
                                                    -
                                                    57.979913974384353,
                                                    -
                                                    34.908335652846056,
                                                    -
                                                    57.979944650234593,
                                                    -
                                                    34.908377112194131,
                                                    -
                                                    57.9808689260664,
                                                    -
                                                    34.907693995393721,
                                                    -
                                                    57.979446354621174,
                                                    -
                                                    34.906389142794566,
                                                    -
                                                    57.977734347202599,
                                                    -
                                                    34.907668226322201,
                                                    -
                                                    57.978742921076375,
                                                    -
                                                    34.908612463780749,
                                                    -
                                                    57.979365592400768,
                                                    -
                                                    34.908143831093028,
                                                    -
                                                    57.979724791153842,
                                                    -
                                                    34.908476318384352,
                                                    -
                                                    58.062970366820394,
                                                    -
                                                    34.901341888783278,
                                                    -
                                                    58.063279700498306,
                                                    -
                                                    34.901637416636682,
                                                    -
                                                    58.063340562605674,
                                                    -
                                                    34.901900250264255,
                                                    -
                                                    58.06334761934778,
                                                    -
                                                    34.902186299975291,
                                                    -
                                                    58.063191830347819,
                                                    -
                                                    34.902522314975307,
                                                    -
                                                    58.06321111544969,
                                                    -
                                                    34.902742522339246,
                                                    -
                                                    58.063081431280359,
                                                    -
                                                    34.902918136794796,
                                                    -
                                                    58.063129715315036,
                                                    -
                                                    34.903201307061586,
                                                    -
                                                    58.064761532034652,
                                                    -
                                                    34.902820373266742,
                                                    -
                                                    58.064865169856631,
                                                    -
                                                    34.902741388305998,
                                                    -
                                                    58.064264692856653,
                                                    -
                                                    34.90113468230598,
                                                    -
                                                    58.064184937949975,
                                                    -
                                                    34.901079937881462,
                                                    -
                                                    58.064077605604496,
                                                    -
                                                    34.901081203812289,
                                                    -
                                                    58.046672343999944,
                                                    -
                                                    34.887880290999931,
                                                    -
                                                    58.046822547999966,
                                                    -
                                                    34.887959495999951,
                                                    -
                                                    58.046945929999936,
                                                    -
                                                    34.888390722999929,
                                                    -
                                                    58.047181963999947,
                                                    -
                                                    34.888351119999982,
                                                    -
                                                    58.047332167999969,
                                                    -
                                                    34.888307117999943,
                                                    -
                                                    58.047267794999982,
                                                    -
                                                    34.888047501999949,
                                                    -
                                                    58.046929835999947,
                                                    -
                                                    34.887660275999963,
                                                    -
                                                    58.04661333599995,
                                                    -
                                                    34.887581070999943,
                                                    -
                                                    58.046436309999933,
                                                    -
                                                    34.887721879999958,
                                                    -
                                                    58.046516775999976,
                                                    -
                                                    34.887928693999982,
                                                    -
                                                    58.019371044528683,
                                                    -
                                                    34.869897051991174,
                                                    -
                                                    58.019063839907474,
                                                    -
                                                    34.869414692698101,
                                                    -
                                                    58.018022896706881,
                                                    -
                                                    34.869891905546211,
                                                    -
                                                    58.018323680235596,
                                                    -
                                                    34.870369771612374,
                                                    -
                                                    58.049565805644136,
                                                    -
                                                    34.900621498695507,
                                                    -
                                                    58.048113823474452,
                                                    -
                                                    34.900992152677432,
                                                    -
                                                    58.047991485668568,
                                                    -
                                                    34.900850616862719,
                                                    -
                                                    58.047943413889733,
                                                    -
                                                    34.90084054359496,
                                                    -
                                                    58.047861723093078,
                                                    -
                                                    34.900812315011471,
                                                    -
                                                    58.047738475233395,
                                                    -
                                                    34.900826628374517,
                                                    -
                                                    58.047591715835836,
                                                    -
                                                    34.900839552166794,
                                                    -
                                                    58.047608115033299,
                                                    -
                                                    34.900889763034613,
                                                    -
                                                    58.047493141426031,
                                                    -
                                                    34.900911587003307,
                                                    -
                                                    58.047540032985466,
                                                    -
                                                    34.901049494283733,
                                                    -
                                                    58.047469751067766,
                                                    -
                                                    34.901071047822974,
                                                    -
                                                    58.047495693711049,
                                                    -
                                                    34.901163935585345,
                                                    -
                                                    58.047571580214623,
                                                    -
                                                    34.901144135971208,
                                                    -
                                                    58.047744442293862,
                                                    -
                                                    34.901108726835403,
                                                    -
                                                    58.047997252440858,
                                                    -
                                                    34.901887139006156,
                                                    -
                                                    58.048044870763981,
                                                    -
                                                    34.902184525089176,
                                                    -
                                                    58.047276819231591,
                                                    -
                                                    34.902872281959169,
                                                    -
                                                    58.047238727051628,
                                                    -
                                                    34.903049993007386,
                                                    -
                                                    58.047672302048746,
                                                    -
                                                    34.903411029723578,
                                                    -
                                                    58.048783513571735,
                                                    -
                                                    34.903123860744692,
                                                    -
                                                    58.050254955341785,
                                                    -
                                                    34.902761923386734,
                                                    -
                                                    58.049806531527302,
                                                    -
                                                    34.901396757716995,
                                                    -
                                                    58.048430020133743,
                                                    -
                                                    34.901723863969188,
                                                    -
                                                    58.048344606925092,
                                                    -
                                                    34.901448819257638,
                                                    -
                                                    58.049730102058611,
                                                    -
                                                    34.901118001609447,
                                                    -
                                                    58.349353383369866,
                                                    -
                                                    34.643151798913252,
                                                    -
                                                    58.34943945523009,
                                                    -
                                                    34.642870672943729,
                                                    -
                                                    58.349412360474595,
                                                    -
                                                    34.642782469944727,
                                                    -
                                                    58.349135504888451,
                                                    -
                                                    34.642837349603859,
                                                    -
                                                    58.348949130732876,
                                                    -
                                                    34.642879249672347,
                                                    -
                                                    58.348582774327582,
                                                    -
                                                    34.642926108310341,
                                                    -
                                                    58.34825159053257,
                                                    -
                                                    34.642981905326117,
                                                    -
                                                    58.347874344346188,
                                                    -
                                                    34.643032401230407,
                                                    -
                                                    58.347179492516489,
                                                    -
                                                    34.64332160797089,
                                                    -
                                                    58.346694509795057,
                                                    -
                                                    34.643670579767246,
                                                    -
                                                    58.346144252804251,
                                                    -
                                                    34.644276212934727,
                                                    -
                                                    58.345858780478103,
                                                    -
                                                    34.644588805858731,
                                                    -
                                                    58.345464906259643,
                                                    -
                                                    34.645121771756052,
                                                    -
                                                    58.345198705920303,
                                                    -
                                                    34.645372556821471,
                                                    -
                                                    58.344527472160287,
                                                    -
                                                    34.646199486036956,
                                                    -
                                                    58.344695158695352,
                                                    -
                                                    34.646292499907481,
                                                    -
                                                    58.345523823300624,
                                                    -
                                                    34.645646843524801,
                                                    -
                                                    58.345345045961935,
                                                    -
                                                    34.645435276952583,
                                                    -
                                                    58.345315853066907,
                                                    -
                                                    34.645372706325851,
                                                    -
                                                    58.345371870177246,
                                                    -
                                                    34.645323184561626,
                                                    -
                                                    58.346089382241004,
                                                    -
                                                    34.644786387930587,
                                                    -
                                                    58.346389033641543,
                                                    -
                                                    34.645063587977909,
                                                    -
                                                    58.3464256161934,
                                                    -
                                                    34.645010367852635,
                                                    -
                                                    58.34611580754089,
                                                    -
                                                    34.644676312996879,
                                                    -
                                                    58.346043764186533,
                                                    -
                                                    34.644571722548328,
                                                    -
                                                    58.346239534824164,
                                                    -
                                                    34.644405187147449,
                                                    -
                                                    58.346363592965211,
                                                    -
                                                    34.644242763793521,
                                                    -
                                                    58.34662738275653,
                                                    -
                                                    34.64397507546704,
                                                    -
                                                    58.346914690261102,
                                                    -
                                                    34.643701491370955,
                                                    -
                                                    58.346966360391349,
                                                    -
                                                    34.643658743924007,
                                                    -
                                                    58.347235200826525,
                                                    -
                                                    34.643500912278135,
                                                    -
                                                    58.347562088065182,
                                                    -
                                                    34.643335030250135,
                                                    -
                                                    58.347972984342917,
                                                    -
                                                    34.643189799080268,
                                                    -
                                                    58.348182318789178,
                                                    -
                                                    34.643164742199701,
                                                    -
                                                    58.348496201206409,
                                                    -
                                                    34.643144316369892,
                                                    -
                                                    58.348898368804257,
                                                    -
                                                    34.643134997696052,
                                                    -
                                                    58.016377138478845,
                                                    -
                                                    34.947557804040365,
                                                    -
                                                    58.017466928654095,
                                                    -
                                                    34.946774495420478,
                                                    -
                                                    58.015387234557323,
                                                    -
                                                    34.944847823055788,
                                                    -
                                                    58.014372455281034,
                                                    -
                                                    34.945643370148005,
                                                    -
                                                    58.014560131317403,
                                                    -
                                                    34.945817759385342,
                                                    -
                                                    58.014528575169692,
                                                    -
                                                    34.945855958932569
                                                ]
                                            },
                                            "examples": [
                                                [-58.833500901145612,
                                                    -
                                                    34.481276770718189
                                                ],
                                                [-58.833833644307404,
                                                    -
                                                    34.480867142010787
                                                ],
                                                [-58.833401356862986,
                                                    -
                                                    34.480611075635764
                                                ],
                                                [-58.833454949299295,
                                                    -
                                                    34.480534825884789
                                                ],
                                                [-58.83316876541295,
                                                    -
                                                    34.480371485832094
                                                ],
                                                [-58.83281265527377,
                                                    -
                                                    34.480896232575049
                                                ],
                                                [-58.832748610431672,
                                                    -
                                                    34.480953113597025
                                                ],
                                                [-58.832684987746745,
                                                    -
                                                    34.480965538453553
                                                ],
                                                [-58.832026000399551,
                                                    -
                                                    34.481794999739414
                                                ],
                                                [-58.832827999612448,
                                                    -
                                                    34.482211000037587
                                                ],
                                                [-58.833112000118653,
                                                    -
                                                    34.481854999808377
                                                ],
                                                [-58.832599999890036,
                                                    -
                                                    34.481574000339791
                                                ],
                                                [-58.832962000395966,
                                                    -
                                                    34.481119000041772
                                                ],
                                                [-58.833438366092253,
                                                    -
                                                    34.481346620220094
                                                ],
                                                [-58.833500901145612,
                                                    -
                                                    34.481276770718189
                                                ],
                                                [-58.012000483529214,
                                                    -
                                                    34.947319669892487
                                                ],
                                                [-58.009108568999977,
                                                    -
                                                    34.94466747499996
                                                ],
                                                [-58.00795246253093,
                                                    -
                                                    34.945497040906076
                                                ],
                                                [-58.008882429469466,
                                                    -
                                                    34.94636605765951
                                                ],
                                                [-58.007774306193937,
                                                    -
                                                    34.94716392119647
                                                ],
                                                [-58.009816307064618,
                                                    -
                                                    34.948993738775613
                                                ],
                                                [-58.009965911347166,
                                                    -
                                                    34.949120102091271
                                                ],
                                                [-58.012151855823248,
                                                    -
                                                    34.947465566293133
                                                ],
                                                [-58.012000483529214,
                                                    -
                                                    34.947319669892487
                                                ],
                                                [-58.07980353023293,
                                                    -
                                                    35.035073762886761
                                                ],
                                                [-58.079575078550604,
                                                    -
                                                    35.035177334662507
                                                ],
                                                [-58.079417214080948,
                                                    -
                                                    35.035391970366703
                                                ],
                                                [-58.090995481221739,
                                                    -
                                                    35.045888976479588
                                                ],
                                                [-58.091428752440727,
                                                    -
                                                    35.045692153195269
                                                ],
                                                [-58.091257348132011,
                                                    -
                                                    35.045495872379789
                                                ],
                                                [-58.089855595577973,
                                                    -
                                                    35.04422186341445
                                                ],
                                                [-58.087430681587058,
                                                    -
                                                    35.042035908475789
                                                ],
                                                [-58.083058372769294,
                                                    -
                                                    35.038034324659229
                                                ],
                                                [-58.07980353023293,
                                                    -
                                                    35.035073762886761
                                                ],
                                                [-57.979913974384353,
                                                    -
                                                    34.908335652846056
                                                ],
                                                [-57.979944650234593,
                                                    -
                                                    34.908377112194131
                                                ],
                                                [-57.9808689260664,
                                                    -
                                                    34.907693995393721
                                                ],
                                                [-57.979446354621174,
                                                    -
                                                    34.906389142794566
                                                ],
                                                [-57.977734347202599,
                                                    -
                                                    34.907668226322201
                                                ],
                                                [-57.978742921076375,
                                                    -
                                                    34.908612463780749
                                                ],
                                                [-57.979365592400768,
                                                    -
                                                    34.908143831093028
                                                ],
                                                [-57.979724791153842,
                                                    -
                                                    34.908476318384352
                                                ],
                                                [-57.979913974384353,
                                                    -
                                                    34.908335652846056
                                                ],
                                                [-58.062970366820394,
                                                    -
                                                    34.901341888783278
                                                ],
                                                [-58.063279700498306,
                                                    -
                                                    34.901637416636682
                                                ],
                                                [-58.063340562605674,
                                                    -
                                                    34.901900250264255
                                                ],
                                                [-58.06334761934778,
                                                    -
                                                    34.902186299975291
                                                ],
                                                [-58.063191830347819,
                                                    -
                                                    34.902522314975307
                                                ],
                                                [-58.06321111544969,
                                                    -
                                                    34.902742522339246
                                                ],
                                                [-58.063081431280359,
                                                    -
                                                    34.902918136794796
                                                ],
                                                [-58.063129715315036,
                                                    -
                                                    34.903201307061586
                                                ],
                                                [-58.064761532034652,
                                                    -
                                                    34.902820373266742
                                                ],
                                                [-58.064865169856631,
                                                    -
                                                    34.902741388305998
                                                ],
                                                [-58.064264692856653,
                                                    -
                                                    34.90113468230598
                                                ],
                                                [-58.064184937949975,
                                                    -
                                                    34.901079937881462
                                                ],
                                                [-58.064077605604496,
                                                    -
                                                    34.901081203812289
                                                ],
                                                [-58.062970366820394,
                                                    -
                                                    34.901341888783278
                                                ],
                                                [-58.046672343999944,
                                                    -
                                                    34.887880290999931
                                                ],
                                                [-58.046822547999966,
                                                    -
                                                    34.887959495999951
                                                ],
                                                [-58.046945929999936,
                                                    -
                                                    34.888390722999929
                                                ],
                                                [-58.047181963999947,
                                                    -
                                                    34.888351119999982
                                                ],
                                                [-58.047332167999969,
                                                    -
                                                    34.888307117999943
                                                ],
                                                [-58.047267794999982,
                                                    -
                                                    34.888047501999949
                                                ],
                                                [-58.046929835999947,
                                                    -
                                                    34.887660275999963
                                                ],
                                                [-58.04661333599995,
                                                    -
                                                    34.887581070999943
                                                ],
                                                [-58.046436309999933,
                                                    -
                                                    34.887721879999958
                                                ],
                                                [-58.046516775999976,
                                                    -
                                                    34.887928693999982
                                                ],
                                                [-58.046672343999944,
                                                    -
                                                    34.887880290999931
                                                ],
                                                [-58.019371044528683,
                                                    -
                                                    34.869897051991174
                                                ],
                                                [-58.019063839907474,
                                                    -
                                                    34.869414692698101
                                                ],
                                                [-58.018022896706881,
                                                    -
                                                    34.869891905546211
                                                ],
                                                [-58.018323680235596,
                                                    -
                                                    34.870369771612374
                                                ],
                                                [-58.019371044528683,
                                                    -
                                                    34.869897051991174
                                                ],
                                                [-58.049565805644136,
                                                    -
                                                    34.900621498695507
                                                ],
                                                [-58.048113823474452,
                                                    -
                                                    34.900992152677432
                                                ],
                                                [-58.047991485668568,
                                                    -
                                                    34.900850616862719
                                                ],
                                                [-58.047943413889733,
                                                    -
                                                    34.90084054359496
                                                ],
                                                [-58.047861723093078,
                                                    -
                                                    34.900812315011471
                                                ],
                                                [-58.047738475233395,
                                                    -
                                                    34.900826628374517
                                                ],
                                                [-58.047591715835836,
                                                    -
                                                    34.900839552166794
                                                ],
                                                [-58.047608115033299,
                                                    -
                                                    34.900889763034613
                                                ],
                                                [-58.047493141426031,
                                                    -
                                                    34.900911587003307
                                                ],
                                                [-58.047540032985466,
                                                    -
                                                    34.901049494283733
                                                ],
                                                [-58.047469751067766,
                                                    -
                                                    34.901071047822974
                                                ],
                                                [-58.047495693711049,
                                                    -
                                                    34.901163935585345
                                                ],
                                                [-58.047571580214623,
                                                    -
                                                    34.901144135971208
                                                ],
                                                [-58.047744442293862,
                                                    -
                                                    34.901108726835403
                                                ],
                                                [-58.047997252440858,
                                                    -
                                                    34.901887139006156
                                                ],
                                                [-58.048044870763981,
                                                    -
                                                    34.902184525089176
                                                ],
                                                [-58.047276819231591,
                                                    -
                                                    34.902872281959169
                                                ],
                                                [-58.047238727051628,
                                                    -
                                                    34.903049993007386
                                                ],
                                                [-58.047672302048746,
                                                    -
                                                    34.903411029723578
                                                ],
                                                [-58.048783513571735,
                                                    -
                                                    34.903123860744692
                                                ],
                                                [-58.050254955341785,
                                                    -
                                                    34.902761923386734
                                                ],
                                                [-58.049806531527302,
                                                    -
                                                    34.901396757716995
                                                ],
                                                [-58.048430020133743,
                                                    -
                                                    34.901723863969188
                                                ],
                                                [-58.048344606925092,
                                                    -
                                                    34.901448819257638
                                                ],
                                                [-58.049730102058611,
                                                    -
                                                    34.901118001609447
                                                ],
                                                [-58.049565805644136,
                                                    -
                                                    34.900621498695507
                                                ],
                                                [-58.349353383369866,
                                                    -
                                                    34.643151798913252
                                                ],
                                                [-58.34943945523009,
                                                    -
                                                    34.642870672943729
                                                ],
                                                [-58.349412360474595,
                                                    -
                                                    34.642782469944727
                                                ],
                                                [-58.349135504888451,
                                                    -
                                                    34.642837349603859
                                                ],
                                                [-58.348949130732876,
                                                    -
                                                    34.642879249672347
                                                ],
                                                [-58.348582774327582,
                                                    -
                                                    34.642926108310341
                                                ],
                                                [-58.34825159053257,
                                                    -
                                                    34.642981905326117
                                                ],
                                                [-58.347874344346188,
                                                    -
                                                    34.643032401230407
                                                ],
                                                [-58.347179492516489,
                                                    -
                                                    34.64332160797089
                                                ],
                                                [-58.346694509795057,
                                                    -
                                                    34.643670579767246
                                                ],
                                                [-58.346144252804251,
                                                    -
                                                    34.644276212934727
                                                ],
                                                [-58.345858780478103,
                                                    -
                                                    34.644588805858731
                                                ],
                                                [-58.345464906259643,
                                                    -
                                                    34.645121771756052
                                                ],
                                                [-58.345198705920303,
                                                    -
                                                    34.645372556821471
                                                ],
                                                [-58.344527472160287,
                                                    -
                                                    34.646199486036956
                                                ],
                                                [-58.344695158695352,
                                                    -
                                                    34.646292499907481
                                                ],
                                                [-58.345523823300624,
                                                    -
                                                    34.645646843524801
                                                ],
                                                [-58.345345045961935,
                                                    -
                                                    34.645435276952583
                                                ],
                                                [-58.345315853066907,
                                                    -
                                                    34.645372706325851
                                                ],
                                                [-58.345371870177246,
                                                    -
                                                    34.645323184561626
                                                ],
                                                [-58.346089382241004,
                                                    -
                                                    34.644786387930587
                                                ],
                                                [-58.346389033641543,
                                                    -
                                                    34.645063587977909
                                                ],
                                                [-58.3464256161934,
                                                    -
                                                    34.645010367852635
                                                ],
                                                [-58.34611580754089,
                                                    -
                                                    34.644676312996879
                                                ],
                                                [-58.346043764186533,
                                                    -
                                                    34.644571722548328
                                                ],
                                                [-58.346239534824164,
                                                    -
                                                    34.644405187147449
                                                ],
                                                [-58.346363592965211,
                                                    -
                                                    34.644242763793521
                                                ],
                                                [-58.34662738275653,
                                                    -
                                                    34.64397507546704
                                                ],
                                                [-58.346914690261102,
                                                    -
                                                    34.643701491370955
                                                ],
                                                [-58.346966360391349,
                                                    -
                                                    34.643658743924007
                                                ],
                                                [-58.347235200826525,
                                                    -
                                                    34.643500912278135
                                                ],
                                                [-58.347562088065182,
                                                    -
                                                    34.643335030250135
                                                ],
                                                [-58.347972984342917,
                                                    -
                                                    34.643189799080268
                                                ],
                                                [-58.348182318789178,
                                                    -
                                                    34.643164742199701
                                                ],
                                                [-58.348496201206409,
                                                    -
                                                    34.643144316369892
                                                ],
                                                [-58.348898368804257,
                                                    -
                                                    34.643134997696052
                                                ],
                                                [-58.349353383369866,
                                                    -
                                                    34.643151798913252
                                                ],
                                                [-58.016377138478845,
                                                    -
                                                    34.947557804040365
                                                ],
                                                [-58.017466928654095,
                                                    -
                                                    34.946774495420478
                                                ],
                                                [-58.015387234557323,
                                                    -
                                                    34.944847823055788
                                                ],
                                                [-58.014372455281034,
                                                    -
                                                    34.945643370148005
                                                ],
                                                [-58.014560131317403,
                                                    -
                                                    34.945817759385342
                                                ],
                                                [-58.014528575169692,
                                                    -
                                                    34.945855958932569
                                                ],
                                                [-58.016377138478845,
                                                    -
                                                    34.947557804040365
                                                ]
                                            ]
                                        },
                                        "examples": [
                                            [
                                                [-58.833500901145612,
                                                    -
                                                    34.481276770718189
                                                ],
                                                [-58.833833644307404,
                                                    -
                                                    34.480867142010787
                                                ],
                                                [-58.833401356862986,
                                                    -
                                                    34.480611075635764
                                                ],
                                                [-58.833454949299295,
                                                    -
                                                    34.480534825884789
                                                ],
                                                [-58.83316876541295,
                                                    -
                                                    34.480371485832094
                                                ],
                                                [-58.83281265527377,
                                                    -
                                                    34.480896232575049
                                                ],
                                                [-58.832748610431672,
                                                    -
                                                    34.480953113597025
                                                ],
                                                [-58.832684987746745,
                                                    -
                                                    34.480965538453553
                                                ],
                                                [-58.832026000399551,
                                                    -
                                                    34.481794999739414
                                                ],
                                                [-58.832827999612448,
                                                    -
                                                    34.482211000037587
                                                ],
                                                [-58.833112000118653,
                                                    -
                                                    34.481854999808377
                                                ],
                                                [-58.832599999890036,
                                                    -
                                                    34.481574000339791
                                                ],
                                                [-58.832962000395966,
                                                    -
                                                    34.481119000041772
                                                ],
                                                [-58.833438366092253,
                                                    -
                                                    34.481346620220094
                                                ],
                                                [-58.833500901145612,
                                                    -
                                                    34.481276770718189
                                                ]
                                            ],
                                            [
                                                [-58.012000483529214,
                                                    -
                                                    34.947319669892487
                                                ],
                                                [-58.009108568999977,
                                                    -
                                                    34.94466747499996
                                                ],
                                                [-58.00795246253093,
                                                    -
                                                    34.945497040906076
                                                ],
                                                [-58.008882429469466,
                                                    -
                                                    34.94636605765951
                                                ],
                                                [-58.007774306193937,
                                                    -
                                                    34.94716392119647
                                                ],
                                                [-58.009816307064618,
                                                    -
                                                    34.948993738775613
                                                ],
                                                [-58.009965911347166,
                                                    -
                                                    34.949120102091271
                                                ],
                                                [-58.012151855823248,
                                                    -
                                                    34.947465566293133
                                                ],
                                                [-58.012000483529214,
                                                    -
                                                    34.947319669892487
                                                ]
                                            ],
                                            [
                                                [-58.07980353023293,
                                                    -
                                                    35.035073762886761
                                                ],
                                                [-58.079575078550604,
                                                    -
                                                    35.035177334662507
                                                ],
                                                [-58.079417214080948,
                                                    -
                                                    35.035391970366703
                                                ],
                                                [-58.090995481221739,
                                                    -
                                                    35.045888976479588
                                                ],
                                                [-58.091428752440727,
                                                    -
                                                    35.045692153195269
                                                ],
                                                [-58.091257348132011,
                                                    -
                                                    35.045495872379789
                                                ],
                                                [-58.089855595577973,
                                                    -
                                                    35.04422186341445
                                                ],
                                                [-58.087430681587058,
                                                    -
                                                    35.042035908475789
                                                ],
                                                [-58.083058372769294,
                                                    -
                                                    35.038034324659229
                                                ],
                                                [-58.07980353023293,
                                                    -
                                                    35.035073762886761
                                                ]
                                            ],
                                            [
                                                [-57.979913974384353,
                                                    -
                                                    34.908335652846056
                                                ],
                                                [-57.979944650234593,
                                                    -
                                                    34.908377112194131
                                                ],
                                                [-57.9808689260664,
                                                    -
                                                    34.907693995393721
                                                ],
                                                [-57.979446354621174,
                                                    -
                                                    34.906389142794566
                                                ],
                                                [-57.977734347202599,
                                                    -
                                                    34.907668226322201
                                                ],
                                                [-57.978742921076375,
                                                    -
                                                    34.908612463780749
                                                ],
                                                [-57.979365592400768,
                                                    -
                                                    34.908143831093028
                                                ],
                                                [-57.979724791153842,
                                                    -
                                                    34.908476318384352
                                                ],
                                                [-57.979913974384353,
                                                    -
                                                    34.908335652846056
                                                ]
                                            ],
                                            [
                                                [-58.062970366820394,
                                                    -
                                                    34.901341888783278
                                                ],
                                                [-58.063279700498306,
                                                    -
                                                    34.901637416636682
                                                ],
                                                [-58.063340562605674,
                                                    -
                                                    34.901900250264255
                                                ],
                                                [-58.06334761934778,
                                                    -
                                                    34.902186299975291
                                                ],
                                                [-58.063191830347819,
                                                    -
                                                    34.902522314975307
                                                ],
                                                [-58.06321111544969,
                                                    -
                                                    34.902742522339246
                                                ],
                                                [-58.063081431280359,
                                                    -
                                                    34.902918136794796
                                                ],
                                                [-58.063129715315036,
                                                    -
                                                    34.903201307061586
                                                ],
                                                [-58.064761532034652,
                                                    -
                                                    34.902820373266742
                                                ],
                                                [-58.064865169856631,
                                                    -
                                                    34.902741388305998
                                                ],
                                                [-58.064264692856653,
                                                    -
                                                    34.90113468230598
                                                ],
                                                [-58.064184937949975,
                                                    -
                                                    34.901079937881462
                                                ],
                                                [-58.064077605604496,
                                                    -
                                                    34.901081203812289
                                                ],
                                                [-58.062970366820394,
                                                    -
                                                    34.901341888783278
                                                ]
                                            ],
                                            [
                                                [-58.046672343999944,
                                                    -
                                                    34.887880290999931
                                                ],
                                                [-58.046822547999966,
                                                    -
                                                    34.887959495999951
                                                ],
                                                [-58.046945929999936,
                                                    -
                                                    34.888390722999929
                                                ],
                                                [-58.047181963999947,
                                                    -
                                                    34.888351119999982
                                                ],
                                                [-58.047332167999969,
                                                    -
                                                    34.888307117999943
                                                ],
                                                [-58.047267794999982,
                                                    -
                                                    34.888047501999949
                                                ],
                                                [-58.046929835999947,
                                                    -
                                                    34.887660275999963
                                                ],
                                                [-58.04661333599995,
                                                    -
                                                    34.887581070999943
                                                ],
                                                [-58.046436309999933,
                                                    -
                                                    34.887721879999958
                                                ],
                                                [-58.046516775999976,
                                                    -
                                                    34.887928693999982
                                                ],
                                                [-58.046672343999944,
                                                    -
                                                    34.887880290999931
                                                ]
                                            ],
                                            [
                                                [-58.019371044528683,
                                                    -
                                                    34.869897051991174
                                                ],
                                                [-58.019063839907474,
                                                    -
                                                    34.869414692698101
                                                ],
                                                [-58.018022896706881,
                                                    -
                                                    34.869891905546211
                                                ],
                                                [-58.018323680235596,
                                                    -
                                                    34.870369771612374
                                                ],
                                                [-58.019371044528683,
                                                    -
                                                    34.869897051991174
                                                ]
                                            ],
                                            [
                                                [-58.049565805644136,
                                                    -
                                                    34.900621498695507
                                                ],
                                                [-58.048113823474452,
                                                    -
                                                    34.900992152677432
                                                ],
                                                [-58.047991485668568,
                                                    -
                                                    34.900850616862719
                                                ],
                                                [-58.047943413889733,
                                                    -
                                                    34.90084054359496
                                                ],
                                                [-58.047861723093078,
                                                    -
                                                    34.900812315011471
                                                ],
                                                [-58.047738475233395,
                                                    -
                                                    34.900826628374517
                                                ],
                                                [-58.047591715835836,
                                                    -
                                                    34.900839552166794
                                                ],
                                                [-58.047608115033299,
                                                    -
                                                    34.900889763034613
                                                ],
                                                [-58.047493141426031,
                                                    -
                                                    34.900911587003307
                                                ],
                                                [-58.047540032985466,
                                                    -
                                                    34.901049494283733
                                                ],
                                                [-58.047469751067766,
                                                    -
                                                    34.901071047822974
                                                ],
                                                [-58.047495693711049,
                                                    -
                                                    34.901163935585345
                                                ],
                                                [-58.047571580214623,
                                                    -
                                                    34.901144135971208
                                                ],
                                                [-58.047744442293862,
                                                    -
                                                    34.901108726835403
                                                ],
                                                [-58.047997252440858,
                                                    -
                                                    34.901887139006156
                                                ],
                                                [-58.048044870763981,
                                                    -
                                                    34.902184525089176
                                                ],
                                                [-58.047276819231591,
                                                    -
                                                    34.902872281959169
                                                ],
                                                [-58.047238727051628,
                                                    -
                                                    34.903049993007386
                                                ],
                                                [-58.047672302048746,
                                                    -
                                                    34.903411029723578
                                                ],
                                                [-58.048783513571735,
                                                    -
                                                    34.903123860744692
                                                ],
                                                [-58.050254955341785,
                                                    -
                                                    34.902761923386734
                                                ],
                                                [-58.049806531527302,
                                                    -
                                                    34.901396757716995
                                                ],
                                                [-58.048430020133743,
                                                    -
                                                    34.901723863969188
                                                ],
                                                [-58.048344606925092,
                                                    -
                                                    34.901448819257638
                                                ],
                                                [-58.049730102058611,
                                                    -
                                                    34.901118001609447
                                                ],
                                                [-58.049565805644136,
                                                    -
                                                    34.900621498695507
                                                ]
                                            ],
                                            [
                                                [-58.349353383369866,
                                                    -
                                                    34.643151798913252
                                                ],
                                                [-58.34943945523009,
                                                    -
                                                    34.642870672943729
                                                ],
                                                [-58.349412360474595,
                                                    -
                                                    34.642782469944727
                                                ],
                                                [-58.349135504888451,
                                                    -
                                                    34.642837349603859
                                                ],
                                                [-58.348949130732876,
                                                    -
                                                    34.642879249672347
                                                ],
                                                [-58.348582774327582,
                                                    -
                                                    34.642926108310341
                                                ],
                                                [-58.34825159053257,
                                                    -
                                                    34.642981905326117
                                                ],
                                                [-58.347874344346188,
                                                    -
                                                    34.643032401230407
                                                ],
                                                [-58.347179492516489,
                                                    -
                                                    34.64332160797089
                                                ],
                                                [-58.346694509795057,
                                                    -
                                                    34.643670579767246
                                                ],
                                                [-58.346144252804251,
                                                    -
                                                    34.644276212934727
                                                ],
                                                [-58.345858780478103,
                                                    -
                                                    34.644588805858731
                                                ],
                                                [-58.345464906259643,
                                                    -
                                                    34.645121771756052
                                                ],
                                                [-58.345198705920303,
                                                    -
                                                    34.645372556821471
                                                ],
                                                [-58.344527472160287,
                                                    -
                                                    34.646199486036956
                                                ],
                                                [-58.344695158695352,
                                                    -
                                                    34.646292499907481
                                                ],
                                                [-58.345523823300624,
                                                    -
                                                    34.645646843524801
                                                ],
                                                [-58.345345045961935,
                                                    -
                                                    34.645435276952583
                                                ],
                                                [-58.345315853066907,
                                                    -
                                                    34.645372706325851
                                                ],
                                                [-58.345371870177246,
                                                    -
                                                    34.645323184561626
                                                ],
                                                [-58.346089382241004,
                                                    -
                                                    34.644786387930587
                                                ],
                                                [-58.346389033641543,
                                                    -
                                                    34.645063587977909
                                                ],
                                                [-58.3464256161934,
                                                    -
                                                    34.645010367852635
                                                ],
                                                [-58.34611580754089,
                                                    -
                                                    34.644676312996879
                                                ],
                                                [-58.346043764186533,
                                                    -
                                                    34.644571722548328
                                                ],
                                                [-58.346239534824164,
                                                    -
                                                    34.644405187147449
                                                ],
                                                [-58.346363592965211,
                                                    -
                                                    34.644242763793521
                                                ],
                                                [-58.34662738275653,
                                                    -
                                                    34.64397507546704
                                                ],
                                                [-58.346914690261102,
                                                    -
                                                    34.643701491370955
                                                ],
                                                [-58.346966360391349,
                                                    -
                                                    34.643658743924007
                                                ],
                                                [-58.347235200826525,
                                                    -
                                                    34.643500912278135
                                                ],
                                                [-58.347562088065182,
                                                    -
                                                    34.643335030250135
                                                ],
                                                [-58.347972984342917,
                                                    -
                                                    34.643189799080268
                                                ],
                                                [-58.348182318789178,
                                                    -
                                                    34.643164742199701
                                                ],
                                                [-58.348496201206409,
                                                    -
                                                    34.643144316369892
                                                ],
                                                [-58.348898368804257,
                                                    -
                                                    34.643134997696052
                                                ],
                                                [-58.349353383369866,
                                                    -
                                                    34.643151798913252
                                                ]
                                            ],
                                            [
                                                [-58.016377138478845,
                                                    -
                                                    34.947557804040365
                                                ],
                                                [-58.017466928654095,
                                                    -
                                                    34.946774495420478
                                                ],
                                                [-58.015387234557323,
                                                    -
                                                    34.944847823055788
                                                ],
                                                [-58.014372455281034,
                                                    -
                                                    34.945643370148005
                                                ],
                                                [-58.014560131317403,
                                                    -
                                                    34.945817759385342
                                                ],
                                                [-58.014528575169692,
                                                    -
                                                    34.945855958932569
                                                ],
                                                [-58.016377138478845,
                                                    -
                                                    34.947557804040365
                                                ]
                                            ]
                                        ]
                                    },
                                    "examples": [
                                        [
                                            [
                                                [-58.833500901145612,
                                                    -
                                                    34.481276770718189
                                                ],
                                                [-58.833833644307404,
                                                    -
                                                    34.480867142010787
                                                ],
                                                [-58.833401356862986,
                                                    -
                                                    34.480611075635764
                                                ],
                                                [-58.833454949299295,
                                                    -
                                                    34.480534825884789
                                                ],
                                                [-58.83316876541295,
                                                    -
                                                    34.480371485832094
                                                ],
                                                [-58.83281265527377,
                                                    -
                                                    34.480896232575049
                                                ],
                                                [-58.832748610431672,
                                                    -
                                                    34.480953113597025
                                                ],
                                                [-58.832684987746745,
                                                    -
                                                    34.480965538453553
                                                ],
                                                [-58.832026000399551,
                                                    -
                                                    34.481794999739414
                                                ],
                                                [-58.832827999612448,
                                                    -
                                                    34.482211000037587
                                                ],
                                                [-58.833112000118653,
                                                    -
                                                    34.481854999808377
                                                ],
                                                [-58.832599999890036,
                                                    -
                                                    34.481574000339791
                                                ],
                                                [-58.832962000395966,
                                                    -
                                                    34.481119000041772
                                                ],
                                                [-58.833438366092253,
                                                    -
                                                    34.481346620220094
                                                ],
                                                [-58.833500901145612,
                                                    -
                                                    34.481276770718189
                                                ]
                                            ]
                                        ],
                                        [
                                            [
                                                [-58.012000483529214,
                                                    -
                                                    34.947319669892487
                                                ],
                                                [-58.009108568999977,
                                                    -
                                                    34.94466747499996
                                                ],
                                                [-58.00795246253093,
                                                    -
                                                    34.945497040906076
                                                ],
                                                [-58.008882429469466,
                                                    -
                                                    34.94636605765951
                                                ],
                                                [-58.007774306193937,
                                                    -
                                                    34.94716392119647
                                                ],
                                                [-58.009816307064618,
                                                    -
                                                    34.948993738775613
                                                ],
                                                [-58.009965911347166,
                                                    -
                                                    34.949120102091271
                                                ],
                                                [-58.012151855823248,
                                                    -
                                                    34.947465566293133
                                                ],
                                                [-58.012000483529214,
                                                    -
                                                    34.947319669892487
                                                ]
                                            ]
                                        ],
                                        [
                                            [
                                                [-58.07980353023293,
                                                    -
                                                    35.035073762886761
                                                ],
                                                [-58.079575078550604,
                                                    -
                                                    35.035177334662507
                                                ],
                                                [-58.079417214080948,
                                                    -
                                                    35.035391970366703
                                                ],
                                                [-58.090995481221739,
                                                    -
                                                    35.045888976479588
                                                ],
                                                [-58.091428752440727,
                                                    -
                                                    35.045692153195269
                                                ],
                                                [-58.091257348132011,
                                                    -
                                                    35.045495872379789
                                                ],
                                                [-58.089855595577973,
                                                    -
                                                    35.04422186341445
                                                ],
                                                [-58.087430681587058,
                                                    -
                                                    35.042035908475789
                                                ],
                                                [-58.083058372769294,
                                                    -
                                                    35.038034324659229
                                                ],
                                                [-58.07980353023293,
                                                    -
                                                    35.035073762886761
                                                ]
                                            ]
                                        ],
                                        [
                                            [
                                                [-57.979913974384353,
                                                    -
                                                    34.908335652846056
                                                ],
                                                [-57.979944650234593,
                                                    -
                                                    34.908377112194131
                                                ],
                                                [-57.9808689260664,
                                                    -
                                                    34.907693995393721
                                                ],
                                                [-57.979446354621174,
                                                    -
                                                    34.906389142794566
                                                ],
                                                [-57.977734347202599,
                                                    -
                                                    34.907668226322201
                                                ],
                                                [-57.978742921076375,
                                                    -
                                                    34.908612463780749
                                                ],
                                                [-57.979365592400768,
                                                    -
                                                    34.908143831093028
                                                ],
                                                [-57.979724791153842,
                                                    -
                                                    34.908476318384352
                                                ],
                                                [-57.979913974384353,
                                                    -
                                                    34.908335652846056
                                                ]
                                            ]
                                        ],
                                        [
                                            [
                                                [-58.062970366820394,
                                                    -
                                                    34.901341888783278
                                                ],
                                                [-58.063279700498306,
                                                    -
                                                    34.901637416636682
                                                ],
                                                [-58.063340562605674,
                                                    -
                                                    34.901900250264255
                                                ],
                                                [-58.06334761934778,
                                                    -
                                                    34.902186299975291
                                                ],
                                                [-58.063191830347819,
                                                    -
                                                    34.902522314975307
                                                ],
                                                [-58.06321111544969,
                                                    -
                                                    34.902742522339246
                                                ],
                                                [-58.063081431280359,
                                                    -
                                                    34.902918136794796
                                                ],
                                                [-58.063129715315036,
                                                    -
                                                    34.903201307061586
                                                ],
                                                [-58.064761532034652,
                                                    -
                                                    34.902820373266742
                                                ],
                                                [-58.064865169856631,
                                                    -
                                                    34.902741388305998
                                                ],
                                                [-58.064264692856653,
                                                    -
                                                    34.90113468230598
                                                ],
                                                [-58.064184937949975,
                                                    -
                                                    34.901079937881462
                                                ],
                                                [-58.064077605604496,
                                                    -
                                                    34.901081203812289
                                                ],
                                                [-58.062970366820394,
                                                    -
                                                    34.901341888783278
                                                ]
                                            ]
                                        ],
                                        [
                                            [
                                                [-58.046672343999944,
                                                    -
                                                    34.887880290999931
                                                ],
                                                [-58.046822547999966,
                                                    -
                                                    34.887959495999951
                                                ],
                                                [-58.046945929999936,
                                                    -
                                                    34.888390722999929
                                                ],
                                                [-58.047181963999947,
                                                    -
                                                    34.888351119999982
                                                ],
                                                [-58.047332167999969,
                                                    -
                                                    34.888307117999943
                                                ],
                                                [-58.047267794999982,
                                                    -
                                                    34.888047501999949
                                                ],
                                                [-58.046929835999947,
                                                    -
                                                    34.887660275999963
                                                ],
                                                [-58.04661333599995,
                                                    -
                                                    34.887581070999943
                                                ],
                                                [-58.046436309999933,
                                                    -
                                                    34.887721879999958
                                                ],
                                                [-58.046516775999976,
                                                    -
                                                    34.887928693999982
                                                ],
                                                [-58.046672343999944,
                                                    -
                                                    34.887880290999931
                                                ]
                                            ]
                                        ],
                                        [
                                            [
                                                [-58.019371044528683,
                                                    -
                                                    34.869897051991174
                                                ],
                                                [-58.019063839907474,
                                                    -
                                                    34.869414692698101
                                                ],
                                                [-58.018022896706881,
                                                    -
                                                    34.869891905546211
                                                ],
                                                [-58.018323680235596,
                                                    -
                                                    34.870369771612374
                                                ],
                                                [-58.019371044528683,
                                                    -
                                                    34.869897051991174
                                                ]
                                            ]
                                        ],
                                        [
                                            [
                                                [-58.049565805644136,
                                                    -
                                                    34.900621498695507
                                                ],
                                                [-58.048113823474452,
                                                    -
                                                    34.900992152677432
                                                ],
                                                [-58.047991485668568,
                                                    -
                                                    34.900850616862719
                                                ],
                                                [-58.047943413889733,
                                                    -
                                                    34.90084054359496
                                                ],
                                                [-58.047861723093078,
                                                    -
                                                    34.900812315011471
                                                ],
                                                [-58.047738475233395,
                                                    -
                                                    34.900826628374517
                                                ],
                                                [-58.047591715835836,
                                                    -
                                                    34.900839552166794
                                                ],
                                                [-58.047608115033299,
                                                    -
                                                    34.900889763034613
                                                ],
                                                [-58.047493141426031,
                                                    -
                                                    34.900911587003307
                                                ],
                                                [-58.047540032985466,
                                                    -
                                                    34.901049494283733
                                                ],
                                                [-58.047469751067766,
                                                    -
                                                    34.901071047822974
                                                ],
                                                [-58.047495693711049,
                                                    -
                                                    34.901163935585345
                                                ],
                                                [-58.047571580214623,
                                                    -
                                                    34.901144135971208
                                                ],
                                                [-58.047744442293862,
                                                    -
                                                    34.901108726835403
                                                ],
                                                [-58.047997252440858,
                                                    -
                                                    34.901887139006156
                                                ],
                                                [-58.048044870763981,
                                                    -
                                                    34.902184525089176
                                                ],
                                                [-58.047276819231591,
                                                    -
                                                    34.902872281959169
                                                ],
                                                [-58.047238727051628,
                                                    -
                                                    34.903049993007386
                                                ],
                                                [-58.047672302048746,
                                                    -
                                                    34.903411029723578
                                                ],
                                                [-58.048783513571735,
                                                    -
                                                    34.903123860744692
                                                ],
                                                [-58.050254955341785,
                                                    -
                                                    34.902761923386734
                                                ],
                                                [-58.049806531527302,
                                                    -
                                                    34.901396757716995
                                                ],
                                                [-58.048430020133743,
                                                    -
                                                    34.901723863969188
                                                ],
                                                [-58.048344606925092,
                                                    -
                                                    34.901448819257638
                                                ],
                                                [-58.049730102058611,
                                                    -
                                                    34.901118001609447
                                                ],
                                                [-58.049565805644136,
                                                    -
                                                    34.900621498695507
                                                ]
                                            ]
                                        ],
                                        [
                                            [
                                                [-58.349353383369866,
                                                    -
                                                    34.643151798913252
                                                ],
                                                [-58.34943945523009,
                                                    -
                                                    34.642870672943729
                                                ],
                                                [-58.349412360474595,
                                                    -
                                                    34.642782469944727
                                                ],
                                                [-58.349135504888451,
                                                    -
                                                    34.642837349603859
                                                ],
                                                [-58.348949130732876,
                                                    -
                                                    34.642879249672347
                                                ],
                                                [-58.348582774327582,
                                                    -
                                                    34.642926108310341
                                                ],
                                                [-58.34825159053257,
                                                    -
                                                    34.642981905326117
                                                ],
                                                [-58.347874344346188,
                                                    -
                                                    34.643032401230407
                                                ],
                                                [-58.347179492516489,
                                                    -
                                                    34.64332160797089
                                                ],
                                                [-58.346694509795057,
                                                    -
                                                    34.643670579767246
                                                ],
                                                [-58.346144252804251,
                                                    -
                                                    34.644276212934727
                                                ],
                                                [-58.345858780478103,
                                                    -
                                                    34.644588805858731
                                                ],
                                                [-58.345464906259643,
                                                    -
                                                    34.645121771756052
                                                ],
                                                [-58.345198705920303,
                                                    -
                                                    34.645372556821471
                                                ],
                                                [-58.344527472160287,
                                                    -
                                                    34.646199486036956
                                                ],
                                                [-58.344695158695352,
                                                    -
                                                    34.646292499907481
                                                ],
                                                [-58.345523823300624,
                                                    -
                                                    34.645646843524801
                                                ],
                                                [-58.345345045961935,
                                                    -
                                                    34.645435276952583
                                                ],
                                                [-58.345315853066907,
                                                    -
                                                    34.645372706325851
                                                ],
                                                [-58.345371870177246,
                                                    -
                                                    34.645323184561626
                                                ],
                                                [-58.346089382241004,
                                                    -
                                                    34.644786387930587
                                                ],
                                                [-58.346389033641543,
                                                    -
                                                    34.645063587977909
                                                ],
                                                [-58.3464256161934,
                                                    -
                                                    34.645010367852635
                                                ],
                                                [-58.34611580754089,
                                                    -
                                                    34.644676312996879
                                                ],
                                                [-58.346043764186533,
                                                    -
                                                    34.644571722548328
                                                ],
                                                [-58.346239534824164,
                                                    -
                                                    34.644405187147449
                                                ],
                                                [-58.346363592965211,
                                                    -
                                                    34.644242763793521
                                                ],
                                                [-58.34662738275653,
                                                    -
                                                    34.64397507546704
                                                ],
                                                [-58.346914690261102,
                                                    -
                                                    34.643701491370955
                                                ],
                                                [-58.346966360391349,
                                                    -
                                                    34.643658743924007
                                                ],
                                                [-58.347235200826525,
                                                    -
                                                    34.643500912278135
                                                ],
                                                [-58.347562088065182,
                                                    -
                                                    34.643335030250135
                                                ],
                                                [-58.347972984342917,
                                                    -
                                                    34.643189799080268
                                                ],
                                                [-58.348182318789178,
                                                    -
                                                    34.643164742199701
                                                ],
                                                [-58.348496201206409,
                                                    -
                                                    34.643144316369892
                                                ],
                                                [-58.348898368804257,
                                                    -
                                                    34.643134997696052
                                                ],
                                                [-58.349353383369866,
                                                    -
                                                    34.643151798913252
                                                ]
                                            ]
                                        ],
                                        [
                                            [
                                                [-58.016377138478845,
                                                    -
                                                    34.947557804040365
                                                ],
                                                [-58.017466928654095,
                                                    -
                                                    34.946774495420478
                                                ],
                                                [-58.015387234557323,
                                                    -
                                                    34.944847823055788
                                                ],
                                                [-58.014372455281034,
                                                    -
                                                    34.945643370148005
                                                ],
                                                [-58.014560131317403,
                                                    -
                                                    34.945817759385342
                                                ],
                                                [-58.014528575169692,
                                                    -
                                                    34.945855958932569
                                                ],
                                                [-58.016377138478845,
                                                    -
                                                    34.947557804040365
                                                ]
                                            ]
                                        ]
                                    ]
                                },
                                "examples": [
                                    [
                                        [
                                            [
                                                [-58.833500901145612,
                                                    -
                                                    34.481276770718189
                                                ],
                                                [-58.833833644307404,
                                                    -
                                                    34.480867142010787
                                                ],
                                                [-58.833401356862986,
                                                    -
                                                    34.480611075635764
                                                ],
                                                [-58.833454949299295,
                                                    -
                                                    34.480534825884789
                                                ],
                                                [-58.83316876541295,
                                                    -
                                                    34.480371485832094
                                                ],
                                                [-58.83281265527377,
                                                    -
                                                    34.480896232575049
                                                ],
                                                [-58.832748610431672,
                                                    -
                                                    34.480953113597025
                                                ],
                                                [-58.832684987746745,
                                                    -
                                                    34.480965538453553
                                                ],
                                                [-58.832026000399551,
                                                    -
                                                    34.481794999739414
                                                ],
                                                [-58.832827999612448,
                                                    -
                                                    34.482211000037587
                                                ],
                                                [-58.833112000118653,
                                                    -
                                                    34.481854999808377
                                                ],
                                                [-58.832599999890036,
                                                    -
                                                    34.481574000339791
                                                ],
                                                [-58.832962000395966,
                                                    -
                                                    34.481119000041772
                                                ],
                                                [-58.833438366092253,
                                                    -
                                                    34.481346620220094
                                                ],
                                                [-58.833500901145612,
                                                    -
                                                    34.481276770718189
                                                ]
                                            ]
                                        ]
                                    ],
                                    [
                                        [
                                            [
                                                [-58.012000483529214,
                                                    -
                                                    34.947319669892487
                                                ],
                                                [-58.009108568999977,
                                                    -
                                                    34.94466747499996
                                                ],
                                                [-58.00795246253093,
                                                    -
                                                    34.945497040906076
                                                ],
                                                [-58.008882429469466,
                                                    -
                                                    34.94636605765951
                                                ],
                                                [-58.007774306193937,
                                                    -
                                                    34.94716392119647
                                                ],
                                                [-58.009816307064618,
                                                    -
                                                    34.948993738775613
                                                ],
                                                [-58.009965911347166,
                                                    -
                                                    34.949120102091271
                                                ],
                                                [-58.012151855823248,
                                                    -
                                                    34.947465566293133
                                                ],
                                                [-58.012000483529214,
                                                    -
                                                    34.947319669892487
                                                ]
                                            ]
                                        ]
                                    ],
                                    [
                                        [
                                            [
                                                [-58.07980353023293,
                                                    -
                                                    35.035073762886761
                                                ],
                                                [-58.079575078550604,
                                                    -
                                                    35.035177334662507
                                                ],
                                                [-58.079417214080948,
                                                    -
                                                    35.035391970366703
                                                ],
                                                [-58.090995481221739,
                                                    -
                                                    35.045888976479588
                                                ],
                                                [-58.091428752440727,
                                                    -
                                                    35.045692153195269
                                                ],
                                                [-58.091257348132011,
                                                    -
                                                    35.045495872379789
                                                ],
                                                [-58.089855595577973,
                                                    -
                                                    35.04422186341445
                                                ],
                                                [-58.087430681587058,
                                                    -
                                                    35.042035908475789
                                                ],
                                                [-58.083058372769294,
                                                    -
                                                    35.038034324659229
                                                ],
                                                [-58.07980353023293,
                                                    -
                                                    35.035073762886761
                                                ]
                                            ]
                                        ]
                                    ],
                                    [
                                        [
                                            [
                                                [-57.979913974384353,
                                                    -
                                                    34.908335652846056
                                                ],
                                                [-57.979944650234593,
                                                    -
                                                    34.908377112194131
                                                ],
                                                [-57.9808689260664,
                                                    -
                                                    34.907693995393721
                                                ],
                                                [-57.979446354621174,
                                                    -
                                                    34.906389142794566
                                                ],
                                                [-57.977734347202599,
                                                    -
                                                    34.907668226322201
                                                ],
                                                [-57.978742921076375,
                                                    -
                                                    34.908612463780749
                                                ],
                                                [-57.979365592400768,
                                                    -
                                                    34.908143831093028
                                                ],
                                                [-57.979724791153842,
                                                    -
                                                    34.908476318384352
                                                ],
                                                [-57.979913974384353,
                                                    -
                                                    34.908335652846056
                                                ]
                                            ]
                                        ]
                                    ],
                                    [
                                        [
                                            [
                                                [-58.062970366820394,
                                                    -
                                                    34.901341888783278
                                                ],
                                                [-58.063279700498306,
                                                    -
                                                    34.901637416636682
                                                ],
                                                [-58.063340562605674,
                                                    -
                                                    34.901900250264255
                                                ],
                                                [-58.06334761934778,
                                                    -
                                                    34.902186299975291
                                                ],
                                                [-58.063191830347819,
                                                    -
                                                    34.902522314975307
                                                ],
                                                [-58.06321111544969,
                                                    -
                                                    34.902742522339246
                                                ],
                                                [-58.063081431280359,
                                                    -
                                                    34.902918136794796
                                                ],
                                                [-58.063129715315036,
                                                    -
                                                    34.903201307061586
                                                ],
                                                [-58.064761532034652,
                                                    -
                                                    34.902820373266742
                                                ],
                                                [-58.064865169856631,
                                                    -
                                                    34.902741388305998
                                                ],
                                                [-58.064264692856653,
                                                    -
                                                    34.90113468230598
                                                ],
                                                [-58.064184937949975,
                                                    -
                                                    34.901079937881462
                                                ],
                                                [-58.064077605604496,
                                                    -
                                                    34.901081203812289
                                                ],
                                                [-58.062970366820394,
                                                    -
                                                    34.901341888783278
                                                ]
                                            ]
                                        ]
                                    ],
                                    [
                                        [
                                            [
                                                [-58.046672343999944,
                                                    -
                                                    34.887880290999931
                                                ],
                                                [-58.046822547999966,
                                                    -
                                                    34.887959495999951
                                                ],
                                                [-58.046945929999936,
                                                    -
                                                    34.888390722999929
                                                ],
                                                [-58.047181963999947,
                                                    -
                                                    34.888351119999982
                                                ],
                                                [-58.047332167999969,
                                                    -
                                                    34.888307117999943
                                                ],
                                                [-58.047267794999982,
                                                    -
                                                    34.888047501999949
                                                ],
                                                [-58.046929835999947,
                                                    -
                                                    34.887660275999963
                                                ],
                                                [-58.04661333599995,
                                                    -
                                                    34.887581070999943
                                                ],
                                                [-58.046436309999933,
                                                    -
                                                    34.887721879999958
                                                ],
                                                [-58.046516775999976,
                                                    -
                                                    34.887928693999982
                                                ],
                                                [-58.046672343999944,
                                                    -
                                                    34.887880290999931
                                                ]
                                            ]
                                        ]
                                    ],
                                    [
                                        [
                                            [
                                                [-58.019371044528683,
                                                    -
                                                    34.869897051991174
                                                ],
                                                [-58.019063839907474,
                                                    -
                                                    34.869414692698101
                                                ],
                                                [-58.018022896706881,
                                                    -
                                                    34.869891905546211
                                                ],
                                                [-58.018323680235596,
                                                    -
                                                    34.870369771612374
                                                ],
                                                [-58.019371044528683,
                                                    -
                                                    34.869897051991174
                                                ]
                                            ]
                                        ]
                                    ],
                                    [
                                        [
                                            [
                                                [-58.049565805644136,
                                                    -
                                                    34.900621498695507
                                                ],
                                                [-58.048113823474452,
                                                    -
                                                    34.900992152677432
                                                ],
                                                [-58.047991485668568,
                                                    -
                                                    34.900850616862719
                                                ],
                                                [-58.047943413889733,
                                                    -
                                                    34.90084054359496
                                                ],
                                                [-58.047861723093078,
                                                    -
                                                    34.900812315011471
                                                ],
                                                [-58.047738475233395,
                                                    -
                                                    34.900826628374517
                                                ],
                                                [-58.047591715835836,
                                                    -
                                                    34.900839552166794
                                                ],
                                                [-58.047608115033299,
                                                    -
                                                    34.900889763034613
                                                ],
                                                [-58.047493141426031,
                                                    -
                                                    34.900911587003307
                                                ],
                                                [-58.047540032985466,
                                                    -
                                                    34.901049494283733
                                                ],
                                                [-58.047469751067766,
                                                    -
                                                    34.901071047822974
                                                ],
                                                [-58.047495693711049,
                                                    -
                                                    34.901163935585345
                                                ],
                                                [-58.047571580214623,
                                                    -
                                                    34.901144135971208
                                                ],
                                                [-58.047744442293862,
                                                    -
                                                    34.901108726835403
                                                ],
                                                [-58.047997252440858,
                                                    -
                                                    34.901887139006156
                                                ],
                                                [-58.048044870763981,
                                                    -
                                                    34.902184525089176
                                                ],
                                                [-58.047276819231591,
                                                    -
                                                    34.902872281959169
                                                ],
                                                [-58.047238727051628,
                                                    -
                                                    34.903049993007386
                                                ],
                                                [-58.047672302048746,
                                                    -
                                                    34.903411029723578
                                                ],
                                                [-58.048783513571735,
                                                    -
                                                    34.903123860744692
                                                ],
                                                [-58.050254955341785,
                                                    -
                                                    34.902761923386734
                                                ],
                                                [-58.049806531527302,
                                                    -
                                                    34.901396757716995
                                                ],
                                                [-58.048430020133743,
                                                    -
                                                    34.901723863969188
                                                ],
                                                [-58.048344606925092,
                                                    -
                                                    34.901448819257638
                                                ],
                                                [-58.049730102058611,
                                                    -
                                                    34.901118001609447
                                                ],
                                                [-58.049565805644136,
                                                    -
                                                    34.900621498695507
                                                ]
                                            ]
                                        ]
                                    ],
                                    [
                                        [
                                            [
                                                [-58.349353383369866,
                                                    -
                                                    34.643151798913252
                                                ],
                                                [-58.34943945523009,
                                                    -
                                                    34.642870672943729
                                                ],
                                                [-58.349412360474595,
                                                    -
                                                    34.642782469944727
                                                ],
                                                [-58.349135504888451,
                                                    -
                                                    34.642837349603859
                                                ],
                                                [-58.348949130732876,
                                                    -
                                                    34.642879249672347
                                                ],
                                                [-58.348582774327582,
                                                    -
                                                    34.642926108310341
                                                ],
                                                [-58.34825159053257,
                                                    -
                                                    34.642981905326117
                                                ],
                                                [-58.347874344346188,
                                                    -
                                                    34.643032401230407
                                                ],
                                                [-58.347179492516489,
                                                    -
                                                    34.64332160797089
                                                ],
                                                [-58.346694509795057,
                                                    -
                                                    34.643670579767246
                                                ],
                                                [-58.346144252804251,
                                                    -
                                                    34.644276212934727
                                                ],
                                                [-58.345858780478103,
                                                    -
                                                    34.644588805858731
                                                ],
                                                [-58.345464906259643,
                                                    -
                                                    34.645121771756052
                                                ],
                                                [-58.345198705920303,
                                                    -
                                                    34.645372556821471
                                                ],
                                                [-58.344527472160287,
                                                    -
                                                    34.646199486036956
                                                ],
                                                [-58.344695158695352,
                                                    -
                                                    34.646292499907481
                                                ],
                                                [-58.345523823300624,
                                                    -
                                                    34.645646843524801
                                                ],
                                                [-58.345345045961935,
                                                    -
                                                    34.645435276952583
                                                ],
                                                [-58.345315853066907,
                                                    -
                                                    34.645372706325851
                                                ],
                                                [-58.345371870177246,
                                                    -
                                                    34.645323184561626
                                                ],
                                                [-58.346089382241004,
                                                    -
                                                    34.644786387930587
                                                ],
                                                [-58.346389033641543,
                                                    -
                                                    34.645063587977909
                                                ],
                                                [-58.3464256161934,
                                                    -
                                                    34.645010367852635
                                                ],
                                                [-58.34611580754089,
                                                    -
                                                    34.644676312996879
                                                ],
                                                [-58.346043764186533,
                                                    -
                                                    34.644571722548328
                                                ],
                                                [-58.346239534824164,
                                                    -
                                                    34.644405187147449
                                                ],
                                                [-58.346363592965211,
                                                    -
                                                    34.644242763793521
                                                ],
                                                [-58.34662738275653,
                                                    -
                                                    34.64397507546704
                                                ],
                                                [-58.346914690261102,
                                                    -
                                                    34.643701491370955
                                                ],
                                                [-58.346966360391349,
                                                    -
                                                    34.643658743924007
                                                ],
                                                [-58.347235200826525,
                                                    -
                                                    34.643500912278135
                                                ],
                                                [-58.347562088065182,
                                                    -
                                                    34.643335030250135
                                                ],
                                                [-58.347972984342917,
                                                    -
                                                    34.643189799080268
                                                ],
                                                [-58.348182318789178,
                                                    -
                                                    34.643164742199701
                                                ],
                                                [-58.348496201206409,
                                                    -
                                                    34.643144316369892
                                                ],
                                                [-58.348898368804257,
                                                    -
                                                    34.643134997696052
                                                ],
                                                [-58.349353383369866,
                                                    -
                                                    34.643151798913252
                                                ]
                                            ]
                                        ]
                                    ],
                                    [
                                        [
                                            [
                                                [-58.016377138478845,
                                                    -
                                                    34.947557804040365
                                                ],
                                                [-58.017466928654095,
                                                    -
                                                    34.946774495420478
                                                ],
                                                [-58.015387234557323,
                                                    -
                                                    34.944847823055788
                                                ],
                                                [-58.014372455281034,
                                                    -
                                                    34.945643370148005
                                                ],
                                                [-58.014560131317403,
                                                    -
                                                    34.945817759385342
                                                ],
                                                [-58.014528575169692,
                                                    -
                                                    34.945855958932569
                                                ],
                                                [-58.016377138478845,
                                                    -
                                                    34.947557804040365
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            }
                        },
                        "examples": [{
                            "type": "MultiPolygon",
                            "coordinates": [
                                [
                                    [
                                        [-58.833500901145612,
                                            -
                                            34.481276770718189
                                        ],
                                        [-58.833833644307404,
                                            -
                                            34.480867142010787
                                        ],
                                        [-58.833401356862986,
                                            -
                                            34.480611075635764
                                        ],
                                        [-58.833454949299295,
                                            -
                                            34.480534825884789
                                        ],
                                        [-58.83316876541295,
                                            -
                                            34.480371485832094
                                        ],
                                        [-58.83281265527377,
                                            -
                                            34.480896232575049
                                        ],
                                        [-58.832748610431672,
                                            -
                                            34.480953113597025
                                        ],
                                        [-58.832684987746745,
                                            -
                                            34.480965538453553
                                        ],
                                        [-58.832026000399551,
                                            -
                                            34.481794999739414
                                        ],
                                        [-58.832827999612448,
                                            -
                                            34.482211000037587
                                        ],
                                        [-58.833112000118653,
                                            -
                                            34.481854999808377
                                        ],
                                        [-58.832599999890036,
                                            -
                                            34.481574000339791
                                        ],
                                        [-58.832962000395966,
                                            -
                                            34.481119000041772
                                        ],
                                        [-58.833438366092253,
                                            -
                                            34.481346620220094
                                        ],
                                        [-58.833500901145612,
                                            -
                                            34.481276770718189
                                        ]
                                    ]
                                ]
                            ]
                        },
                        {
                            "type": "MultiPolygon",
                            "coordinates": [
                                [
                                    [
                                        [-58.012000483529214,
                                            -
                                            34.947319669892487
                                        ],
                                        [-58.009108568999977,
                                            -
                                            34.94466747499996
                                        ],
                                        [-58.00795246253093,
                                            -
                                            34.945497040906076
                                        ],
                                        [-58.008882429469466,
                                            -
                                            34.94636605765951
                                        ],
                                        [-58.007774306193937,
                                            -
                                            34.94716392119647
                                        ],
                                        [-58.009816307064618,
                                            -
                                            34.948993738775613
                                        ],
                                        [-58.009965911347166,
                                            -
                                            34.949120102091271
                                        ],
                                        [-58.012151855823248,
                                            -
                                            34.947465566293133
                                        ],
                                        [-58.012000483529214,
                                            -
                                            34.947319669892487
                                        ]
                                    ]
                                ]
                            ]
                        },
                        {
                            "type": "MultiPolygon",
                            "coordinates": [
                                [
                                    [
                                        [-58.07980353023293,
                                            -
                                            35.035073762886761
                                        ],
                                        [-58.079575078550604,
                                            -
                                            35.035177334662507
                                        ],
                                        [-58.079417214080948,
                                            -
                                            35.035391970366703
                                        ],
                                        [-58.090995481221739,
                                            -
                                            35.045888976479588
                                        ],
                                        [-58.091428752440727,
                                            -
                                            35.045692153195269
                                        ],
                                        [-58.091257348132011,
                                            -
                                            35.045495872379789
                                        ],
                                        [-58.089855595577973,
                                            -
                                            35.04422186341445
                                        ],
                                        [-58.087430681587058,
                                            -
                                            35.042035908475789
                                        ],
                                        [-58.083058372769294,
                                            -
                                            35.038034324659229
                                        ],
                                        [-58.07980353023293,
                                            -
                                            35.035073762886761
                                        ]
                                    ]
                                ]
                            ]
                        },
                        {
                            "type": "MultiPolygon",
                            "coordinates": [
                                [
                                    [
                                        [-57.979913974384353,
                                            -
                                            34.908335652846056
                                        ],
                                        [-57.979944650234593,
                                            -
                                            34.908377112194131
                                        ],
                                        [-57.9808689260664,
                                            -
                                            34.907693995393721
                                        ],
                                        [-57.979446354621174,
                                            -
                                            34.906389142794566
                                        ],
                                        [-57.977734347202599,
                                            -
                                            34.907668226322201
                                        ],
                                        [-57.978742921076375,
                                            -
                                            34.908612463780749
                                        ],
                                        [-57.979365592400768,
                                            -
                                            34.908143831093028
                                        ],
                                        [-57.979724791153842,
                                            -
                                            34.908476318384352
                                        ],
                                        [-57.979913974384353,
                                            -
                                            34.908335652846056
                                        ]
                                    ]
                                ]
                            ]
                        },
                        {
                            "type": "MultiPolygon",
                            "coordinates": [
                                [
                                    [
                                        [-58.062970366820394,
                                            -
                                            34.901341888783278
                                        ],
                                        [-58.063279700498306,
                                            -
                                            34.901637416636682
                                        ],
                                        [-58.063340562605674,
                                            -
                                            34.901900250264255
                                        ],
                                        [-58.06334761934778,
                                            -
                                            34.902186299975291
                                        ],
                                        [-58.063191830347819,
                                            -
                                            34.902522314975307
                                        ],
                                        [-58.06321111544969,
                                            -
                                            34.902742522339246
                                        ],
                                        [-58.063081431280359,
                                            -
                                            34.902918136794796
                                        ],
                                        [-58.063129715315036,
                                            -
                                            34.903201307061586
                                        ],
                                        [-58.064761532034652,
                                            -
                                            34.902820373266742
                                        ],
                                        [-58.064865169856631,
                                            -
                                            34.902741388305998
                                        ],
                                        [-58.064264692856653,
                                            -
                                            34.90113468230598
                                        ],
                                        [-58.064184937949975,
                                            -
                                            34.901079937881462
                                        ],
                                        [-58.064077605604496,
                                            -
                                            34.901081203812289
                                        ],
                                        [-58.062970366820394,
                                            -
                                            34.901341888783278
                                        ]
                                    ]
                                ]
                            ]
                        },
                        {
                            "type": "MultiPolygon",
                            "coordinates": [
                                [
                                    [
                                        [-58.046672343999944,
                                            -
                                            34.887880290999931
                                        ],
                                        [-58.046822547999966,
                                            -
                                            34.887959495999951
                                        ],
                                        [-58.046945929999936,
                                            -
                                            34.888390722999929
                                        ],
                                        [-58.047181963999947,
                                            -
                                            34.888351119999982
                                        ],
                                        [-58.047332167999969,
                                            -
                                            34.888307117999943
                                        ],
                                        [-58.047267794999982,
                                            -
                                            34.888047501999949
                                        ],
                                        [-58.046929835999947,
                                            -
                                            34.887660275999963
                                        ],
                                        [-58.04661333599995,
                                            -
                                            34.887581070999943
                                        ],
                                        [-58.046436309999933,
                                            -
                                            34.887721879999958
                                        ],
                                        [-58.046516775999976,
                                            -
                                            34.887928693999982
                                        ],
                                        [-58.046672343999944,
                                            -
                                            34.887880290999931
                                        ]
                                    ]
                                ]
                            ]
                        },
                        {
                            "type": "MultiPolygon",
                            "coordinates": [
                                [
                                    [
                                        [-58.019371044528683,
                                            -
                                            34.869897051991174
                                        ],
                                        [-58.019063839907474,
                                            -
                                            34.869414692698101
                                        ],
                                        [-58.018022896706881,
                                            -
                                            34.869891905546211
                                        ],
                                        [-58.018323680235596,
                                            -
                                            34.870369771612374
                                        ],
                                        [-58.019371044528683,
                                            -
                                            34.869897051991174
                                        ]
                                    ]
                                ]
                            ]
                        },
                        {
                            "type": "MultiPolygon",
                            "coordinates": [
                                [
                                    [
                                        [-58.049565805644136,
                                            -
                                            34.900621498695507
                                        ],
                                        [-58.048113823474452,
                                            -
                                            34.900992152677432
                                        ],
                                        [-58.047991485668568,
                                            -
                                            34.900850616862719
                                        ],
                                        [-58.047943413889733,
                                            -
                                            34.90084054359496
                                        ],
                                        [-58.047861723093078,
                                            -
                                            34.900812315011471
                                        ],
                                        [-58.047738475233395,
                                            -
                                            34.900826628374517
                                        ],
                                        [-58.047591715835836,
                                            -
                                            34.900839552166794
                                        ],
                                        [-58.047608115033299,
                                            -
                                            34.900889763034613
                                        ],
                                        [-58.047493141426031,
                                            -
                                            34.900911587003307
                                        ],
                                        [-58.047540032985466,
                                            -
                                            34.901049494283733
                                        ],
                                        [-58.047469751067766,
                                            -
                                            34.901071047822974
                                        ],
                                        [-58.047495693711049,
                                            -
                                            34.901163935585345
                                        ],
                                        [-58.047571580214623,
                                            -
                                            34.901144135971208
                                        ],
                                        [-58.047744442293862,
                                            -
                                            34.901108726835403
                                        ],
                                        [-58.047997252440858,
                                            -
                                            34.901887139006156
                                        ],
                                        [-58.048044870763981,
                                            -
                                            34.902184525089176
                                        ],
                                        [-58.047276819231591,
                                            -
                                            34.902872281959169
                                        ],
                                        [-58.047238727051628,
                                            -
                                            34.903049993007386
                                        ],
                                        [-58.047672302048746,
                                            -
                                            34.903411029723578
                                        ],
                                        [-58.048783513571735,
                                            -
                                            34.903123860744692
                                        ],
                                        [-58.050254955341785,
                                            -
                                            34.902761923386734
                                        ],
                                        [-58.049806531527302,
                                            -
                                            34.901396757716995
                                        ],
                                        [-58.048430020133743,
                                            -
                                            34.901723863969188
                                        ],
                                        [-58.048344606925092,
                                            -
                                            34.901448819257638
                                        ],
                                        [-58.049730102058611,
                                            -
                                            34.901118001609447
                                        ],
                                        [-58.049565805644136,
                                            -
                                            34.900621498695507
                                        ]
                                    ]
                                ]
                            ]
                        },
                        {
                            "type": "MultiPolygon",
                            "coordinates": [
                                [
                                    [
                                        [-58.349353383369866,
                                            -
                                            34.643151798913252
                                        ],
                                        [-58.34943945523009,
                                            -
                                            34.642870672943729
                                        ],
                                        [-58.349412360474595,
                                            -
                                            34.642782469944727
                                        ],
                                        [-58.349135504888451,
                                            -
                                            34.642837349603859
                                        ],
                                        [-58.348949130732876,
                                            -
                                            34.642879249672347
                                        ],
                                        [-58.348582774327582,
                                            -
                                            34.642926108310341
                                        ],
                                        [-58.34825159053257,
                                            -
                                            34.642981905326117
                                        ],
                                        [-58.347874344346188,
                                            -
                                            34.643032401230407
                                        ],
                                        [-58.347179492516489,
                                            -
                                            34.64332160797089
                                        ],
                                        [-58.346694509795057,
                                            -
                                            34.643670579767246
                                        ],
                                        [-58.346144252804251,
                                            -
                                            34.644276212934727
                                        ],
                                        [-58.345858780478103,
                                            -
                                            34.644588805858731
                                        ],
                                        [-58.345464906259643,
                                            -
                                            34.645121771756052
                                        ],
                                        [-58.345198705920303,
                                            -
                                            34.645372556821471
                                        ],
                                        [-58.344527472160287,
                                            -
                                            34.646199486036956
                                        ],
                                        [-58.344695158695352,
                                            -
                                            34.646292499907481
                                        ],
                                        [-58.345523823300624,
                                            -
                                            34.645646843524801
                                        ],
                                        [-58.345345045961935,
                                            -
                                            34.645435276952583
                                        ],
                                        [-58.345315853066907,
                                            -
                                            34.645372706325851
                                        ],
                                        [-58.345371870177246,
                                            -
                                            34.645323184561626
                                        ],
                                        [-58.346089382241004,
                                            -
                                            34.644786387930587
                                        ],
                                        [-58.346389033641543,
                                            -
                                            34.645063587977909
                                        ],
                                        [-58.3464256161934,
                                            -
                                            34.645010367852635
                                        ],
                                        [-58.34611580754089,
                                            -
                                            34.644676312996879
                                        ],
                                        [-58.346043764186533,
                                            -
                                            34.644571722548328
                                        ],
                                        [-58.346239534824164,
                                            -
                                            34.644405187147449
                                        ],
                                        [-58.346363592965211,
                                            -
                                            34.644242763793521
                                        ],
                                        [-58.34662738275653,
                                            -
                                            34.64397507546704
                                        ],
                                        [-58.346914690261102,
                                            -
                                            34.643701491370955
                                        ],
                                        [-58.346966360391349,
                                            -
                                            34.643658743924007
                                        ],
                                        [-58.347235200826525,
                                            -
                                            34.643500912278135
                                        ],
                                        [-58.347562088065182,
                                            -
                                            34.643335030250135
                                        ],
                                        [-58.347972984342917,
                                            -
                                            34.643189799080268
                                        ],
                                        [-58.348182318789178,
                                            -
                                            34.643164742199701
                                        ],
                                        [-58.348496201206409,
                                            -
                                            34.643144316369892
                                        ],
                                        [-58.348898368804257,
                                            -
                                            34.643134997696052
                                        ],
                                        [-58.349353383369866,
                                            -
                                            34.643151798913252
                                        ]
                                    ]
                                ]
                            ]
                        },
                        {
                            "type": "MultiPolygon",
                            "coordinates": [
                                [
                                    [
                                        [-58.016377138478845,
                                            -
                                            34.947557804040365
                                        ],
                                        [-58.017466928654095,
                                            -
                                            34.946774495420478
                                        ],
                                        [-58.015387234557323,
                                            -
                                            34.944847823055788
                                        ],
                                        [-58.014372455281034,
                                            -
                                            34.945643370148005
                                        ],
                                        [-58.014560131317403,
                                            -
                                            34.945817759385342
                                        ],
                                        [-58.014528575169692,
                                            -
                                            34.945855958932569
                                        ],
                                        [-58.016377138478845,
                                            -
                                            34.947557804040365
                                        ]
                                    ]
                                ]
                            ]
                        }]
                    }
                },
                "examples": [{
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 1,
                        "nombre_barrio": "Monterrey I",
                        "provincia": "Buenos Aires",
                        "departamento": "Pilar",
                        "localidad": "Presidente Derqui",
                        "cantidad_familias_aproximada": 44.0,
                        "cantidad_viviendas_aproximadas": 40.0,
                        "decada_de_creacion": "Década 1990",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión a la red con medidor comunitario",
                        "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                        "agua_corriente": "Bomba de agua de pozo domiciliaria",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Otro / vacío",
                        "situacion_dominial": "Otro tipo de seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 11674
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.833500901145612,
                                        -
                                        34.481276770718189
                                    ],
                                    [-58.833833644307404,
                                        -
                                        34.480867142010787
                                    ],
                                    [-58.833401356862986,
                                        -
                                        34.480611075635764
                                    ],
                                    [-58.833454949299295,
                                        -
                                        34.480534825884789
                                    ],
                                    [-58.83316876541295,
                                        -
                                        34.480371485832094
                                    ],
                                    [-58.83281265527377,
                                        -
                                        34.480896232575049
                                    ],
                                    [-58.832748610431672,
                                        -
                                        34.480953113597025
                                    ],
                                    [-58.832684987746745,
                                        -
                                        34.480965538453553
                                    ],
                                    [-58.832026000399551,
                                        -
                                        34.481794999739414
                                    ],
                                    [-58.832827999612448,
                                        -
                                        34.482211000037587
                                    ],
                                    [-58.833112000118653,
                                        -
                                        34.481854999808377
                                    ],
                                    [-58.832599999890036,
                                        -
                                        34.481574000339791
                                    ],
                                    [-58.832962000395966,
                                        -
                                        34.481119000041772
                                    ],
                                    [-58.833438366092253,
                                        -
                                        34.481346620220094
                                    ],
                                    [-58.833500901145612,
                                        -
                                        34.481276770718189
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 2,
                        "nombre_barrio": "Malvinas II",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "José Melchor Romero",
                        "cantidad_familias_aproximada": 319.0,
                        "cantidad_viviendas_aproximadas": 290.0,
                        "decada_de_creacion": "Década 1990",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Otro / vacío",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 98034
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.012000483529214,
                                        -
                                        34.947319669892487
                                    ],
                                    [-58.009108568999977,
                                        -
                                        34.94466747499996
                                    ],
                                    [-58.00795246253093,
                                        -
                                        34.945497040906076
                                    ],
                                    [-58.008882429469466,
                                        -
                                        34.94636605765951
                                    ],
                                    [-58.007774306193937,
                                        -
                                        34.94716392119647
                                    ],
                                    [-58.009816307064618,
                                        -
                                        34.948993738775613
                                    ],
                                    [-58.009965911347166,
                                        -
                                        34.949120102091271
                                    ],
                                    [-58.012151855823248,
                                        -
                                        34.947465566293133
                                    ],
                                    [-58.012000483529214,
                                        -
                                        34.947319669892487
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 3,
                        "nombre_barrio": "Ferroviario",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "Angel Etcheverry",
                        "cantidad_familias_aproximada": 146.0,
                        "cantidad_viviendas_aproximadas": 133.0,
                        "decada_de_creacion": "Década 2000",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Conexión formal a la red de agua con factura",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Leña o carbón",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 75850
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.07980353023293,
                                        -
                                        35.035073762886761
                                    ],
                                    [-58.079575078550604,
                                        -
                                        35.035177334662507
                                    ],
                                    [-58.079417214080948,
                                        -
                                        35.035391970366703
                                    ],
                                    [-58.090995481221739,
                                        -
                                        35.045888976479588
                                    ],
                                    [-58.091428752440727,
                                        -
                                        35.045692153195269
                                    ],
                                    [-58.091257348132011,
                                        -
                                        35.045495872379789
                                    ],
                                    [-58.089855595577973,
                                        -
                                        35.04422186341445
                                    ],
                                    [-58.087430681587058,
                                        -
                                        35.042035908475789
                                    ],
                                    [-58.083058372769294,
                                        -
                                        35.038034324659229
                                    ],
                                    [-58.07980353023293,
                                        -
                                        35.035073762886761
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 4,
                        "nombre_barrio": "La Favelita",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "Tolosa",
                        "cantidad_familias_aproximada": 134.0,
                        "cantidad_viviendas_aproximadas": 122.0,
                        "decada_de_creacion": "Década 1970",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Energía eléctrica",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 36865
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-57.979913974384353,
                                        -
                                        34.908335652846056
                                    ],
                                    [-57.979944650234593,
                                        -
                                        34.908377112194131
                                    ],
                                    [-57.9808689260664,
                                        -
                                        34.907693995393721
                                    ],
                                    [-57.979446354621174,
                                        -
                                        34.906389142794566
                                    ],
                                    [-57.977734347202599,
                                        -
                                        34.907668226322201
                                    ],
                                    [-57.978742921076375,
                                        -
                                        34.908612463780749
                                    ],
                                    [-57.979365592400768,
                                        -
                                        34.908143831093028
                                    ],
                                    [-57.979724791153842,
                                        -
                                        34.908476318384352
                                    ],
                                    [-57.979913974384353,
                                        -
                                        34.908335652846056
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 5,
                        "nombre_barrio": "Casaca",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "City Bell",
                        "cantidad_familias_aproximada": 22.0,
                        "cantidad_viviendas_aproximadas": 20.0,
                        "decada_de_creacion": "Década 2000",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                        "agua_corriente": "Bomba de agua de pozo domiciliaria",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Otro / vacío",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 25754
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.062970366820394,
                                        -
                                        34.901341888783278
                                    ],
                                    [-58.063279700498306,
                                        -
                                        34.901637416636682
                                    ],
                                    [-58.063340562605674,
                                        -
                                        34.901900250264255
                                    ],
                                    [-58.06334761934778,
                                        -
                                        34.902186299975291
                                    ],
                                    [-58.063191830347819,
                                        -
                                        34.902522314975307
                                    ],
                                    [-58.06321111544969,
                                        -
                                        34.902742522339246
                                    ],
                                    [-58.063081431280359,
                                        -
                                        34.902918136794796
                                    ],
                                    [-58.063129715315036,
                                        -
                                        34.903201307061586
                                    ],
                                    [-58.064761532034652,
                                        -
                                        34.902820373266742
                                    ],
                                    [-58.064865169856631,
                                        -
                                        34.902741388305998
                                    ],
                                    [-58.064264692856653,
                                        -
                                        34.90113468230598
                                    ],
                                    [-58.064184937949975,
                                        -
                                        34.901079937881462
                                    ],
                                    [-58.064077605604496,
                                        -
                                        34.901081203812289
                                    ],
                                    [-58.062970366820394,
                                        -
                                        34.901341888783278
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 6,
                        "nombre_barrio": "La Güemes",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "Manuel B. Gonnet",
                        "cantidad_familias_aproximada": 13.0,
                        "cantidad_viviendas_aproximadas": 12.0,
                        "decada_de_creacion": "Década 1970",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Energía eléctrica",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 3422
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.046672343999944,
                                        -
                                        34.887880290999931
                                    ],
                                    [-58.046822547999966,
                                        -
                                        34.887959495999951
                                    ],
                                    [-58.046945929999936,
                                        -
                                        34.888390722999929
                                    ],
                                    [-58.047181963999947,
                                        -
                                        34.888351119999982
                                    ],
                                    [-58.047332167999969,
                                        -
                                        34.888307117999943
                                    ],
                                    [-58.047267794999982,
                                        -
                                        34.888047501999949
                                    ],
                                    [-58.046929835999947,
                                        -
                                        34.887660275999963
                                    ],
                                    [-58.04661333599995,
                                        -
                                        34.887581070999943
                                    ],
                                    [-58.046436309999933,
                                        -
                                        34.887721879999958
                                    ],
                                    [-58.046516775999976,
                                        -
                                        34.887928693999982
                                    ],
                                    [-58.046672343999944,
                                        -
                                        34.887880290999931
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 7,
                        "nombre_barrio": "8 y 489",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "Manuel B. Gonnet",
                        "cantidad_familias_aproximada": 25.0,
                        "cantidad_viviendas_aproximadas": 23.0,
                        "decada_de_creacion": "Década 1980",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión formal a la red con medidor domiciliario con factura",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Bomba de agua de pozo domiciliaria",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Otro / vacío",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 6551
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.019371044528683,
                                        -
                                        34.869897051991174
                                    ],
                                    [-58.019063839907474,
                                        -
                                        34.869414692698101
                                    ],
                                    [-58.018022896706881,
                                        -
                                        34.869891905546211
                                    ],
                                    [-58.018323680235596,
                                        -
                                        34.870369771612374
                                    ],
                                    [-58.019371044528683,
                                        -
                                        34.869897051991174
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 8,
                        "nombre_barrio": "La Fábrica",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "Gorina",
                        "cantidad_familias_aproximada": 204.0,
                        "cantidad_viviendas_aproximadas": 185.0,
                        "decada_de_creacion": "Década 1960",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Energía eléctrica",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Villa",
                        "superficie_m2": 48477
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.049565805644136,
                                        -
                                        34.900621498695507
                                    ],
                                    [-58.048113823474452,
                                        -
                                        34.900992152677432
                                    ],
                                    [-58.047991485668568,
                                        -
                                        34.900850616862719
                                    ],
                                    [-58.047943413889733,
                                        -
                                        34.90084054359496
                                    ],
                                    [-58.047861723093078,
                                        -
                                        34.900812315011471
                                    ],
                                    [-58.047738475233395,
                                        -
                                        34.900826628374517
                                    ],
                                    [-58.047591715835836,
                                        -
                                        34.900839552166794
                                    ],
                                    [-58.047608115033299,
                                        -
                                        34.900889763034613
                                    ],
                                    [-58.047493141426031,
                                        -
                                        34.900911587003307
                                    ],
                                    [-58.047540032985466,
                                        -
                                        34.901049494283733
                                    ],
                                    [-58.047469751067766,
                                        -
                                        34.901071047822974
                                    ],
                                    [-58.047495693711049,
                                        -
                                        34.901163935585345
                                    ],
                                    [-58.047571580214623,
                                        -
                                        34.901144135971208
                                    ],
                                    [-58.047744442293862,
                                        -
                                        34.901108726835403
                                    ],
                                    [-58.047997252440858,
                                        -
                                        34.901887139006156
                                    ],
                                    [-58.048044870763981,
                                        -
                                        34.902184525089176
                                    ],
                                    [-58.047276819231591,
                                        -
                                        34.902872281959169
                                    ],
                                    [-58.047238727051628,
                                        -
                                        34.903049993007386
                                    ],
                                    [-58.047672302048746,
                                        -
                                        34.903411029723578
                                    ],
                                    [-58.048783513571735,
                                        -
                                        34.903123860744692
                                    ],
                                    [-58.050254955341785,
                                        -
                                        34.902761923386734
                                    ],
                                    [-58.049806531527302,
                                        -
                                        34.901396757716995
                                    ],
                                    [-58.048430020133743,
                                        -
                                        34.901723863969188
                                    ],
                                    [-58.048344606925092,
                                        -
                                        34.901448819257638
                                    ],
                                    [-58.049730102058611,
                                        -
                                        34.901118001609447
                                    ],
                                    [-58.049565805644136,
                                        -
                                        34.900621498695507
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 9,
                        "nombre_barrio": "Urquiza",
                        "provincia": "Buenos Aires",
                        "departamento": "Avellaneda",
                        "localidad": "Dock Sud",
                        "cantidad_familias_aproximada": 110.0,
                        "cantidad_viviendas_aproximadas": 100.0,
                        "decada_de_creacion": "Década 1990",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión a la red con medidor comunitario",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Energía eléctrica",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Villa",
                        "superficie_m2": 13299
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.349353383369866,
                                        -
                                        34.643151798913252
                                    ],
                                    [-58.34943945523009,
                                        -
                                        34.642870672943729
                                    ],
                                    [-58.349412360474595,
                                        -
                                        34.642782469944727
                                    ],
                                    [-58.349135504888451,
                                        -
                                        34.642837349603859
                                    ],
                                    [-58.348949130732876,
                                        -
                                        34.642879249672347
                                    ],
                                    [-58.348582774327582,
                                        -
                                        34.642926108310341
                                    ],
                                    [-58.34825159053257,
                                        -
                                        34.642981905326117
                                    ],
                                    [-58.347874344346188,
                                        -
                                        34.643032401230407
                                    ],
                                    [-58.347179492516489,
                                        -
                                        34.64332160797089
                                    ],
                                    [-58.346694509795057,
                                        -
                                        34.643670579767246
                                    ],
                                    [-58.346144252804251,
                                        -
                                        34.644276212934727
                                    ],
                                    [-58.345858780478103,
                                        -
                                        34.644588805858731
                                    ],
                                    [-58.345464906259643,
                                        -
                                        34.645121771756052
                                    ],
                                    [-58.345198705920303,
                                        -
                                        34.645372556821471
                                    ],
                                    [-58.344527472160287,
                                        -
                                        34.646199486036956
                                    ],
                                    [-58.344695158695352,
                                        -
                                        34.646292499907481
                                    ],
                                    [-58.345523823300624,
                                        -
                                        34.645646843524801
                                    ],
                                    [-58.345345045961935,
                                        -
                                        34.645435276952583
                                    ],
                                    [-58.345315853066907,
                                        -
                                        34.645372706325851
                                    ],
                                    [-58.345371870177246,
                                        -
                                        34.645323184561626
                                    ],
                                    [-58.346089382241004,
                                        -
                                        34.644786387930587
                                    ],
                                    [-58.346389033641543,
                                        -
                                        34.645063587977909
                                    ],
                                    [-58.3464256161934,
                                        -
                                        34.645010367852635
                                    ],
                                    [-58.34611580754089,
                                        -
                                        34.644676312996879
                                    ],
                                    [-58.346043764186533,
                                        -
                                        34.644571722548328
                                    ],
                                    [-58.346239534824164,
                                        -
                                        34.644405187147449
                                    ],
                                    [-58.346363592965211,
                                        -
                                        34.644242763793521
                                    ],
                                    [-58.34662738275653,
                                        -
                                        34.64397507546704
                                    ],
                                    [-58.346914690261102,
                                        -
                                        34.643701491370955
                                    ],
                                    [-58.346966360391349,
                                        -
                                        34.643658743924007
                                    ],
                                    [-58.347235200826525,
                                        -
                                        34.643500912278135
                                    ],
                                    [-58.347562088065182,
                                        -
                                        34.643335030250135
                                    ],
                                    [-58.347972984342917,
                                        -
                                        34.643189799080268
                                    ],
                                    [-58.348182318789178,
                                        -
                                        34.643164742199701
                                    ],
                                    [-58.348496201206409,
                                        -
                                        34.643144316369892
                                    ],
                                    [-58.348898368804257,
                                        -
                                        34.643134997696052
                                    ],
                                    [-58.349353383369866,
                                        -
                                        34.643151798913252
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 10,
                        "nombre_barrio": "Hijos de Malvinas",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "José Melchor Romero",
                        "cantidad_familias_aproximada": 121.0,
                        "cantidad_viviendas_aproximadas": 110.0,
                        "decada_de_creacion": "Década 2000",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Otro / vacío",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 37407
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.016377138478845,
                                        -
                                        34.947557804040365
                                    ],
                                    [-58.017466928654095,
                                        -
                                        34.946774495420478
                                    ],
                                    [-58.015387234557323,
                                        -
                                        34.944847823055788
                                    ],
                                    [-58.014372455281034,
                                        -
                                        34.945643370148005
                                    ],
                                    [-58.014560131317403,
                                        -
                                        34.945817759385342
                                    ],
                                    [-58.014528575169692,
                                        -
                                        34.945855958932569
                                    ],
                                    [-58.016377138478845,
                                        -
                                        34.947557804040365
                                    ]
                                ]
                            ]
                        ]
                    }
                }]
            },
            "examples": [
                [{
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 1,
                        "nombre_barrio": "Monterrey I",
                        "provincia": "Buenos Aires",
                        "departamento": "Pilar",
                        "localidad": "Presidente Derqui",
                        "cantidad_familias_aproximada": 44.0,
                        "cantidad_viviendas_aproximadas": 40.0,
                        "decada_de_creacion": "Década 1990",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión a la red con medidor comunitario",
                        "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                        "agua_corriente": "Bomba de agua de pozo domiciliaria",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Otro / vacío",
                        "situacion_dominial": "Otro tipo de seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 11674
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.833500901145612,
                                        -
                                        34.481276770718189
                                    ],
                                    [-58.833833644307404,
                                        -
                                        34.480867142010787
                                    ],
                                    [-58.833401356862986,
                                        -
                                        34.480611075635764
                                    ],
                                    [-58.833454949299295,
                                        -
                                        34.480534825884789
                                    ],
                                    [-58.83316876541295,
                                        -
                                        34.480371485832094
                                    ],
                                    [-58.83281265527377,
                                        -
                                        34.480896232575049
                                    ],
                                    [-58.832748610431672,
                                        -
                                        34.480953113597025
                                    ],
                                    [-58.832684987746745,
                                        -
                                        34.480965538453553
                                    ],
                                    [-58.832026000399551,
                                        -
                                        34.481794999739414
                                    ],
                                    [-58.832827999612448,
                                        -
                                        34.482211000037587
                                    ],
                                    [-58.833112000118653,
                                        -
                                        34.481854999808377
                                    ],
                                    [-58.832599999890036,
                                        -
                                        34.481574000339791
                                    ],
                                    [-58.832962000395966,
                                        -
                                        34.481119000041772
                                    ],
                                    [-58.833438366092253,
                                        -
                                        34.481346620220094
                                    ],
                                    [-58.833500901145612,
                                        -
                                        34.481276770718189
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 2,
                        "nombre_barrio": "Malvinas II",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "José Melchor Romero",
                        "cantidad_familias_aproximada": 319.0,
                        "cantidad_viviendas_aproximadas": 290.0,
                        "decada_de_creacion": "Década 1990",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Otro / vacío",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 98034
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.012000483529214,
                                        -
                                        34.947319669892487
                                    ],
                                    [-58.009108568999977,
                                        -
                                        34.94466747499996
                                    ],
                                    [-58.00795246253093,
                                        -
                                        34.945497040906076
                                    ],
                                    [-58.008882429469466,
                                        -
                                        34.94636605765951
                                    ],
                                    [-58.007774306193937,
                                        -
                                        34.94716392119647
                                    ],
                                    [-58.009816307064618,
                                        -
                                        34.948993738775613
                                    ],
                                    [-58.009965911347166,
                                        -
                                        34.949120102091271
                                    ],
                                    [-58.012151855823248,
                                        -
                                        34.947465566293133
                                    ],
                                    [-58.012000483529214,
                                        -
                                        34.947319669892487
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 3,
                        "nombre_barrio": "Ferroviario",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "Angel Etcheverry",
                        "cantidad_familias_aproximada": 146.0,
                        "cantidad_viviendas_aproximadas": 133.0,
                        "decada_de_creacion": "Década 2000",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Conexión formal a la red de agua con factura",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Leña o carbón",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 75850
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.07980353023293,
                                        -
                                        35.035073762886761
                                    ],
                                    [-58.079575078550604,
                                        -
                                        35.035177334662507
                                    ],
                                    [-58.079417214080948,
                                        -
                                        35.035391970366703
                                    ],
                                    [-58.090995481221739,
                                        -
                                        35.045888976479588
                                    ],
                                    [-58.091428752440727,
                                        -
                                        35.045692153195269
                                    ],
                                    [-58.091257348132011,
                                        -
                                        35.045495872379789
                                    ],
                                    [-58.089855595577973,
                                        -
                                        35.04422186341445
                                    ],
                                    [-58.087430681587058,
                                        -
                                        35.042035908475789
                                    ],
                                    [-58.083058372769294,
                                        -
                                        35.038034324659229
                                    ],
                                    [-58.07980353023293,
                                        -
                                        35.035073762886761
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 4,
                        "nombre_barrio": "La Favelita",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "Tolosa",
                        "cantidad_familias_aproximada": 134.0,
                        "cantidad_viviendas_aproximadas": 122.0,
                        "decada_de_creacion": "Década 1970",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Energía eléctrica",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 36865
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-57.979913974384353,
                                        -
                                        34.908335652846056
                                    ],
                                    [-57.979944650234593,
                                        -
                                        34.908377112194131
                                    ],
                                    [-57.9808689260664,
                                        -
                                        34.907693995393721
                                    ],
                                    [-57.979446354621174,
                                        -
                                        34.906389142794566
                                    ],
                                    [-57.977734347202599,
                                        -
                                        34.907668226322201
                                    ],
                                    [-57.978742921076375,
                                        -
                                        34.908612463780749
                                    ],
                                    [-57.979365592400768,
                                        -
                                        34.908143831093028
                                    ],
                                    [-57.979724791153842,
                                        -
                                        34.908476318384352
                                    ],
                                    [-57.979913974384353,
                                        -
                                        34.908335652846056
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 5,
                        "nombre_barrio": "Casaca",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "City Bell",
                        "cantidad_familias_aproximada": 22.0,
                        "cantidad_viviendas_aproximadas": 20.0,
                        "decada_de_creacion": "Década 2000",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                        "agua_corriente": "Bomba de agua de pozo domiciliaria",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Otro / vacío",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 25754
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.062970366820394,
                                        -
                                        34.901341888783278
                                    ],
                                    [-58.063279700498306,
                                        -
                                        34.901637416636682
                                    ],
                                    [-58.063340562605674,
                                        -
                                        34.901900250264255
                                    ],
                                    [-58.06334761934778,
                                        -
                                        34.902186299975291
                                    ],
                                    [-58.063191830347819,
                                        -
                                        34.902522314975307
                                    ],
                                    [-58.06321111544969,
                                        -
                                        34.902742522339246
                                    ],
                                    [-58.063081431280359,
                                        -
                                        34.902918136794796
                                    ],
                                    [-58.063129715315036,
                                        -
                                        34.903201307061586
                                    ],
                                    [-58.064761532034652,
                                        -
                                        34.902820373266742
                                    ],
                                    [-58.064865169856631,
                                        -
                                        34.902741388305998
                                    ],
                                    [-58.064264692856653,
                                        -
                                        34.90113468230598
                                    ],
                                    [-58.064184937949975,
                                        -
                                        34.901079937881462
                                    ],
                                    [-58.064077605604496,
                                        -
                                        34.901081203812289
                                    ],
                                    [-58.062970366820394,
                                        -
                                        34.901341888783278
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 6,
                        "nombre_barrio": "La Güemes",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "Manuel B. Gonnet",
                        "cantidad_familias_aproximada": 13.0,
                        "cantidad_viviendas_aproximadas": 12.0,
                        "decada_de_creacion": "Década 1970",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Energía eléctrica",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 3422
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.046672343999944,
                                        -
                                        34.887880290999931
                                    ],
                                    [-58.046822547999966,
                                        -
                                        34.887959495999951
                                    ],
                                    [-58.046945929999936,
                                        -
                                        34.888390722999929
                                    ],
                                    [-58.047181963999947,
                                        -
                                        34.888351119999982
                                    ],
                                    [-58.047332167999969,
                                        -
                                        34.888307117999943
                                    ],
                                    [-58.047267794999982,
                                        -
                                        34.888047501999949
                                    ],
                                    [-58.046929835999947,
                                        -
                                        34.887660275999963
                                    ],
                                    [-58.04661333599995,
                                        -
                                        34.887581070999943
                                    ],
                                    [-58.046436309999933,
                                        -
                                        34.887721879999958
                                    ],
                                    [-58.046516775999976,
                                        -
                                        34.887928693999982
                                    ],
                                    [-58.046672343999944,
                                        -
                                        34.887880290999931
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 7,
                        "nombre_barrio": "8 y 489",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "Manuel B. Gonnet",
                        "cantidad_familias_aproximada": 25.0,
                        "cantidad_viviendas_aproximadas": 23.0,
                        "decada_de_creacion": "Década 1980",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión formal a la red con medidor domiciliario con factura",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Bomba de agua de pozo domiciliaria",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Otro / vacío",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 6551
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.019371044528683,
                                        -
                                        34.869897051991174
                                    ],
                                    [-58.019063839907474,
                                        -
                                        34.869414692698101
                                    ],
                                    [-58.018022896706881,
                                        -
                                        34.869891905546211
                                    ],
                                    [-58.018323680235596,
                                        -
                                        34.870369771612374
                                    ],
                                    [-58.019371044528683,
                                        -
                                        34.869897051991174
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 8,
                        "nombre_barrio": "La Fábrica",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "Gorina",
                        "cantidad_familias_aproximada": 204.0,
                        "cantidad_viviendas_aproximadas": 185.0,
                        "decada_de_creacion": "Década 1960",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Energía eléctrica",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Villa",
                        "superficie_m2": 48477
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.049565805644136,
                                        -
                                        34.900621498695507
                                    ],
                                    [-58.048113823474452,
                                        -
                                        34.900992152677432
                                    ],
                                    [-58.047991485668568,
                                        -
                                        34.900850616862719
                                    ],
                                    [-58.047943413889733,
                                        -
                                        34.90084054359496
                                    ],
                                    [-58.047861723093078,
                                        -
                                        34.900812315011471
                                    ],
                                    [-58.047738475233395,
                                        -
                                        34.900826628374517
                                    ],
                                    [-58.047591715835836,
                                        -
                                        34.900839552166794
                                    ],
                                    [-58.047608115033299,
                                        -
                                        34.900889763034613
                                    ],
                                    [-58.047493141426031,
                                        -
                                        34.900911587003307
                                    ],
                                    [-58.047540032985466,
                                        -
                                        34.901049494283733
                                    ],
                                    [-58.047469751067766,
                                        -
                                        34.901071047822974
                                    ],
                                    [-58.047495693711049,
                                        -
                                        34.901163935585345
                                    ],
                                    [-58.047571580214623,
                                        -
                                        34.901144135971208
                                    ],
                                    [-58.047744442293862,
                                        -
                                        34.901108726835403
                                    ],
                                    [-58.047997252440858,
                                        -
                                        34.901887139006156
                                    ],
                                    [-58.048044870763981,
                                        -
                                        34.902184525089176
                                    ],
                                    [-58.047276819231591,
                                        -
                                        34.902872281959169
                                    ],
                                    [-58.047238727051628,
                                        -
                                        34.903049993007386
                                    ],
                                    [-58.047672302048746,
                                        -
                                        34.903411029723578
                                    ],
                                    [-58.048783513571735,
                                        -
                                        34.903123860744692
                                    ],
                                    [-58.050254955341785,
                                        -
                                        34.902761923386734
                                    ],
                                    [-58.049806531527302,
                                        -
                                        34.901396757716995
                                    ],
                                    [-58.048430020133743,
                                        -
                                        34.901723863969188
                                    ],
                                    [-58.048344606925092,
                                        -
                                        34.901448819257638
                                    ],
                                    [-58.049730102058611,
                                        -
                                        34.901118001609447
                                    ],
                                    [-58.049565805644136,
                                        -
                                        34.900621498695507
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 9,
                        "nombre_barrio": "Urquiza",
                        "provincia": "Buenos Aires",
                        "departamento": "Avellaneda",
                        "localidad": "Dock Sud",
                        "cantidad_familias_aproximada": 110.0,
                        "cantidad_viviendas_aproximadas": 100.0,
                        "decada_de_creacion": "Década 1990",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión a la red con medidor comunitario",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Energía eléctrica",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Villa",
                        "superficie_m2": 13299
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.349353383369866,
                                        -
                                        34.643151798913252
                                    ],
                                    [-58.34943945523009,
                                        -
                                        34.642870672943729
                                    ],
                                    [-58.349412360474595,
                                        -
                                        34.642782469944727
                                    ],
                                    [-58.349135504888451,
                                        -
                                        34.642837349603859
                                    ],
                                    [-58.348949130732876,
                                        -
                                        34.642879249672347
                                    ],
                                    [-58.348582774327582,
                                        -
                                        34.642926108310341
                                    ],
                                    [-58.34825159053257,
                                        -
                                        34.642981905326117
                                    ],
                                    [-58.347874344346188,
                                        -
                                        34.643032401230407
                                    ],
                                    [-58.347179492516489,
                                        -
                                        34.64332160797089
                                    ],
                                    [-58.346694509795057,
                                        -
                                        34.643670579767246
                                    ],
                                    [-58.346144252804251,
                                        -
                                        34.644276212934727
                                    ],
                                    [-58.345858780478103,
                                        -
                                        34.644588805858731
                                    ],
                                    [-58.345464906259643,
                                        -
                                        34.645121771756052
                                    ],
                                    [-58.345198705920303,
                                        -
                                        34.645372556821471
                                    ],
                                    [-58.344527472160287,
                                        -
                                        34.646199486036956
                                    ],
                                    [-58.344695158695352,
                                        -
                                        34.646292499907481
                                    ],
                                    [-58.345523823300624,
                                        -
                                        34.645646843524801
                                    ],
                                    [-58.345345045961935,
                                        -
                                        34.645435276952583
                                    ],
                                    [-58.345315853066907,
                                        -
                                        34.645372706325851
                                    ],
                                    [-58.345371870177246,
                                        -
                                        34.645323184561626
                                    ],
                                    [-58.346089382241004,
                                        -
                                        34.644786387930587
                                    ],
                                    [-58.346389033641543,
                                        -
                                        34.645063587977909
                                    ],
                                    [-58.3464256161934,
                                        -
                                        34.645010367852635
                                    ],
                                    [-58.34611580754089,
                                        -
                                        34.644676312996879
                                    ],
                                    [-58.346043764186533,
                                        -
                                        34.644571722548328
                                    ],
                                    [-58.346239534824164,
                                        -
                                        34.644405187147449
                                    ],
                                    [-58.346363592965211,
                                        -
                                        34.644242763793521
                                    ],
                                    [-58.34662738275653,
                                        -
                                        34.64397507546704
                                    ],
                                    [-58.346914690261102,
                                        -
                                        34.643701491370955
                                    ],
                                    [-58.346966360391349,
                                        -
                                        34.643658743924007
                                    ],
                                    [-58.347235200826525,
                                        -
                                        34.643500912278135
                                    ],
                                    [-58.347562088065182,
                                        -
                                        34.643335030250135
                                    ],
                                    [-58.347972984342917,
                                        -
                                        34.643189799080268
                                    ],
                                    [-58.348182318789178,
                                        -
                                        34.643164742199701
                                    ],
                                    [-58.348496201206409,
                                        -
                                        34.643144316369892
                                    ],
                                    [-58.348898368804257,
                                        -
                                        34.643134997696052
                                    ],
                                    [-58.349353383369866,
                                        -
                                        34.643151798913252
                                    ]
                                ]
                            ]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "renabap_id": 10,
                        "nombre_barrio": "Hijos de Malvinas",
                        "provincia": "Buenos Aires",
                        "departamento": "La Plata",
                        "localidad": "José Melchor Romero",
                        "cantidad_familias_aproximada": 121.0,
                        "cantidad_viviendas_aproximadas": 110.0,
                        "decada_de_creacion": "Década 2000",
                        "anio_de_creacion": null,
                        "energia_electrica": "Conexión irregular a la red",
                        "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                        "agua_corriente": "Conexión irregular a la red de agua",
                        "cocina": "Gas en garrafa",
                        "calefaccion": "Otro / vacío",
                        "situacion_dominial": "Ninguna seguridad en la tenencia",
                        "clasificacion_barrio": "Asentamiento",
                        "superficie_m2": 37407
                    },
                    "geometry": {
                        "type": "MultiPolygon",
                        "coordinates": [
                            [
                                [
                                    [-58.016377138478845,
                                        -
                                        34.947557804040365
                                    ],
                                    [-58.017466928654095,
                                        -
                                        34.946774495420478
                                    ],
                                    [-58.015387234557323,
                                        -
                                        34.944847823055788
                                    ],
                                    [-58.014372455281034,
                                        -
                                        34.945643370148005
                                    ],
                                    [-58.014560131317403,
                                        -
                                        34.945817759385342
                                    ],
                                    [-58.014528575169692,
                                        -
                                        34.945855958932569
                                    ],
                                    [-58.016377138478845,
                                        -
                                        34.947557804040365
                                    ]
                                ]
                            ]
                        ]
                    }
                }]
            ]
        }
    },
    "examples": [{
        "type": "FeatureCollection",
        "crs": {
            "type": "name",
            "properties": {
                "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
            }
        },
        "features": [{
            "type": "Feature",
            "properties": {
                "renabap_id": 1,
                "nombre_barrio": "Monterrey I",
                "provincia": "Buenos Aires",
                "departamento": "Pilar",
                "localidad": "Presidente Derqui",
                "cantidad_familias_aproximada": 44.0,
                "cantidad_viviendas_aproximadas": 40.0,
                "decada_de_creacion": "Década 1990",
                "anio_de_creacion": null,
                "energia_electrica": "Conexión a la red con medidor comunitario",
                "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                "agua_corriente": "Bomba de agua de pozo domiciliaria",
                "cocina": "Gas en garrafa",
                "calefaccion": "Otro / vacío",
                "situacion_dominial": "Otro tipo de seguridad en la tenencia",
                "clasificacion_barrio": "Asentamiento",
                "superficie_m2": 11674
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-58.833500901145612,
                                -
                                34.481276770718189
                            ],
                            [-58.833833644307404,
                                -
                                34.480867142010787
                            ],
                            [-58.833401356862986,
                                -
                                34.480611075635764
                            ],
                            [-58.833454949299295,
                                -
                                34.480534825884789
                            ],
                            [-58.83316876541295,
                                -
                                34.480371485832094
                            ],
                            [-58.83281265527377,
                                -
                                34.480896232575049
                            ],
                            [-58.832748610431672,
                                -
                                34.480953113597025
                            ],
                            [-58.832684987746745,
                                -
                                34.480965538453553
                            ],
                            [-58.832026000399551,
                                -
                                34.481794999739414
                            ],
                            [-58.832827999612448,
                                -
                                34.482211000037587
                            ],
                            [-58.833112000118653,
                                -
                                34.481854999808377
                            ],
                            [-58.832599999890036,
                                -
                                34.481574000339791
                            ],
                            [-58.832962000395966,
                                -
                                34.481119000041772
                            ],
                            [-58.833438366092253,
                                -
                                34.481346620220094
                            ],
                            [-58.833500901145612,
                                -
                                34.481276770718189
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "renabap_id": 2,
                "nombre_barrio": "Malvinas II",
                "provincia": "Buenos Aires",
                "departamento": "La Plata",
                "localidad": "José Melchor Romero",
                "cantidad_familias_aproximada": 319.0,
                "cantidad_viviendas_aproximadas": 290.0,
                "decada_de_creacion": "Década 1990",
                "anio_de_creacion": null,
                "energia_electrica": "Conexión irregular a la red",
                "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                "agua_corriente": "Conexión irregular a la red de agua",
                "cocina": "Gas en garrafa",
                "calefaccion": "Otro / vacío",
                "situacion_dominial": "Ninguna seguridad en la tenencia",
                "clasificacion_barrio": "Asentamiento",
                "superficie_m2": 98034
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-58.012000483529214,
                                -
                                34.947319669892487
                            ],
                            [-58.009108568999977,
                                -
                                34.94466747499996
                            ],
                            [-58.00795246253093,
                                -
                                34.945497040906076
                            ],
                            [-58.008882429469466,
                                -
                                34.94636605765951
                            ],
                            [-58.007774306193937,
                                -
                                34.94716392119647
                            ],
                            [-58.009816307064618,
                                -
                                34.948993738775613
                            ],
                            [-58.009965911347166,
                                -
                                34.949120102091271
                            ],
                            [-58.012151855823248,
                                -
                                34.947465566293133
                            ],
                            [-58.012000483529214,
                                -
                                34.947319669892487
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "renabap_id": 3,
                "nombre_barrio": "Ferroviario",
                "provincia": "Buenos Aires",
                "departamento": "La Plata",
                "localidad": "Angel Etcheverry",
                "cantidad_familias_aproximada": 146.0,
                "cantidad_viviendas_aproximadas": 133.0,
                "decada_de_creacion": "Década 2000",
                "anio_de_creacion": null,
                "energia_electrica": "Conexión irregular a la red",
                "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                "agua_corriente": "Conexión formal a la red de agua con factura",
                "cocina": "Gas en garrafa",
                "calefaccion": "Leña o carbón",
                "situacion_dominial": "Ninguna seguridad en la tenencia",
                "clasificacion_barrio": "Asentamiento",
                "superficie_m2": 75850
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-58.07980353023293,
                                -
                                35.035073762886761
                            ],
                            [-58.079575078550604,
                                -
                                35.035177334662507
                            ],
                            [-58.079417214080948,
                                -
                                35.035391970366703
                            ],
                            [-58.090995481221739,
                                -
                                35.045888976479588
                            ],
                            [-58.091428752440727,
                                -
                                35.045692153195269
                            ],
                            [-58.091257348132011,
                                -
                                35.045495872379789
                            ],
                            [-58.089855595577973,
                                -
                                35.04422186341445
                            ],
                            [-58.087430681587058,
                                -
                                35.042035908475789
                            ],
                            [-58.083058372769294,
                                -
                                35.038034324659229
                            ],
                            [-58.07980353023293,
                                -
                                35.035073762886761
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "renabap_id": 4,
                "nombre_barrio": "La Favelita",
                "provincia": "Buenos Aires",
                "departamento": "La Plata",
                "localidad": "Tolosa",
                "cantidad_familias_aproximada": 134.0,
                "cantidad_viviendas_aproximadas": 122.0,
                "decada_de_creacion": "Década 1970",
                "anio_de_creacion": null,
                "energia_electrica": "Conexión irregular a la red",
                "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                "agua_corriente": "Conexión irregular a la red de agua",
                "cocina": "Gas en garrafa",
                "calefaccion": "Energía eléctrica",
                "situacion_dominial": "Ninguna seguridad en la tenencia",
                "clasificacion_barrio": "Asentamiento",
                "superficie_m2": 36865
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-57.979913974384353,
                                -
                                34.908335652846056
                            ],
                            [-57.979944650234593,
                                -
                                34.908377112194131
                            ],
                            [-57.9808689260664,
                                -
                                34.907693995393721
                            ],
                            [-57.979446354621174,
                                -
                                34.906389142794566
                            ],
                            [-57.977734347202599,
                                -
                                34.907668226322201
                            ],
                            [-57.978742921076375,
                                -
                                34.908612463780749
                            ],
                            [-57.979365592400768,
                                -
                                34.908143831093028
                            ],
                            [-57.979724791153842,
                                -
                                34.908476318384352
                            ],
                            [-57.979913974384353,
                                -
                                34.908335652846056
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "renabap_id": 5,
                "nombre_barrio": "Casaca",
                "provincia": "Buenos Aires",
                "departamento": "La Plata",
                "localidad": "City Bell",
                "cantidad_familias_aproximada": 22.0,
                "cantidad_viviendas_aproximadas": 20.0,
                "decada_de_creacion": "Década 2000",
                "anio_de_creacion": null,
                "energia_electrica": "Conexión irregular a la red",
                "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                "agua_corriente": "Bomba de agua de pozo domiciliaria",
                "cocina": "Gas en garrafa",
                "calefaccion": "Otro / vacío",
                "situacion_dominial": "Ninguna seguridad en la tenencia",
                "clasificacion_barrio": "Asentamiento",
                "superficie_m2": 25754
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-58.062970366820394,
                                -
                                34.901341888783278
                            ],
                            [-58.063279700498306,
                                -
                                34.901637416636682
                            ],
                            [-58.063340562605674,
                                -
                                34.901900250264255
                            ],
                            [-58.06334761934778,
                                -
                                34.902186299975291
                            ],
                            [-58.063191830347819,
                                -
                                34.902522314975307
                            ],
                            [-58.06321111544969,
                                -
                                34.902742522339246
                            ],
                            [-58.063081431280359,
                                -
                                34.902918136794796
                            ],
                            [-58.063129715315036,
                                -
                                34.903201307061586
                            ],
                            [-58.064761532034652,
                                -
                                34.902820373266742
                            ],
                            [-58.064865169856631,
                                -
                                34.902741388305998
                            ],
                            [-58.064264692856653,
                                -
                                34.90113468230598
                            ],
                            [-58.064184937949975,
                                -
                                34.901079937881462
                            ],
                            [-58.064077605604496,
                                -
                                34.901081203812289
                            ],
                            [-58.062970366820394,
                                -
                                34.901341888783278
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "renabap_id": 6,
                "nombre_barrio": "La Güemes",
                "provincia": "Buenos Aires",
                "departamento": "La Plata",
                "localidad": "Manuel B. Gonnet",
                "cantidad_familias_aproximada": 13.0,
                "cantidad_viviendas_aproximadas": 12.0,
                "decada_de_creacion": "Década 1970",
                "anio_de_creacion": null,
                "energia_electrica": "Conexión irregular a la red",
                "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                "agua_corriente": "Conexión irregular a la red de agua",
                "cocina": "Gas en garrafa",
                "calefaccion": "Energía eléctrica",
                "situacion_dominial": "Ninguna seguridad en la tenencia",
                "clasificacion_barrio": "Asentamiento",
                "superficie_m2": 3422
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-58.046672343999944,
                                -
                                34.887880290999931
                            ],
                            [-58.046822547999966,
                                -
                                34.887959495999951
                            ],
                            [-58.046945929999936,
                                -
                                34.888390722999929
                            ],
                            [-58.047181963999947,
                                -
                                34.888351119999982
                            ],
                            [-58.047332167999969,
                                -
                                34.888307117999943
                            ],
                            [-58.047267794999982,
                                -
                                34.888047501999949
                            ],
                            [-58.046929835999947,
                                -
                                34.887660275999963
                            ],
                            [-58.04661333599995,
                                -
                                34.887581070999943
                            ],
                            [-58.046436309999933,
                                -
                                34.887721879999958
                            ],
                            [-58.046516775999976,
                                -
                                34.887928693999982
                            ],
                            [-58.046672343999944,
                                -
                                34.887880290999931
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "renabap_id": 7,
                "nombre_barrio": "8 y 489",
                "provincia": "Buenos Aires",
                "departamento": "La Plata",
                "localidad": "Manuel B. Gonnet",
                "cantidad_familias_aproximada": 25.0,
                "cantidad_viviendas_aproximadas": 23.0,
                "decada_de_creacion": "Década 1980",
                "anio_de_creacion": null,
                "energia_electrica": "Conexión formal a la red con medidor domiciliario con factura",
                "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                "agua_corriente": "Bomba de agua de pozo domiciliaria",
                "cocina": "Gas en garrafa",
                "calefaccion": "Otro / vacío",
                "situacion_dominial": "Ninguna seguridad en la tenencia",
                "clasificacion_barrio": "Asentamiento",
                "superficie_m2": 6551
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-58.019371044528683,
                                -
                                34.869897051991174
                            ],
                            [-58.019063839907474,
                                -
                                34.869414692698101
                            ],
                            [-58.018022896706881,
                                -
                                34.869891905546211
                            ],
                            [-58.018323680235596,
                                -
                                34.870369771612374
                            ],
                            [-58.019371044528683,
                                -
                                34.869897051991174
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "renabap_id": 8,
                "nombre_barrio": "La Fábrica",
                "provincia": "Buenos Aires",
                "departamento": "La Plata",
                "localidad": "Gorina",
                "cantidad_familias_aproximada": 204.0,
                "cantidad_viviendas_aproximadas": 185.0,
                "decada_de_creacion": "Década 1960",
                "anio_de_creacion": null,
                "energia_electrica": "Conexión irregular a la red",
                "efluentes_cloacales": "Desagüe a cámara séptica y pozo ciego",
                "agua_corriente": "Conexión irregular a la red de agua",
                "cocina": "Gas en garrafa",
                "calefaccion": "Energía eléctrica",
                "situacion_dominial": "Ninguna seguridad en la tenencia",
                "clasificacion_barrio": "Villa",
                "superficie_m2": 48477
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-58.049565805644136,
                                -
                                34.900621498695507
                            ],
                            [-58.048113823474452,
                                -
                                34.900992152677432
                            ],
                            [-58.047991485668568,
                                -
                                34.900850616862719
                            ],
                            [-58.047943413889733,
                                -
                                34.90084054359496
                            ],
                            [-58.047861723093078,
                                -
                                34.900812315011471
                            ],
                            [-58.047738475233395,
                                -
                                34.900826628374517
                            ],
                            [-58.047591715835836,
                                -
                                34.900839552166794
                            ],
                            [-58.047608115033299,
                                -
                                34.900889763034613
                            ],
                            [-58.047493141426031,
                                -
                                34.900911587003307
                            ],
                            [-58.047540032985466,
                                -
                                34.901049494283733
                            ],
                            [-58.047469751067766,
                                -
                                34.901071047822974
                            ],
                            [-58.047495693711049,
                                -
                                34.901163935585345
                            ],
                            [-58.047571580214623,
                                -
                                34.901144135971208
                            ],
                            [-58.047744442293862,
                                -
                                34.901108726835403
                            ],
                            [-58.047997252440858,
                                -
                                34.901887139006156
                            ],
                            [-58.048044870763981,
                                -
                                34.902184525089176
                            ],
                            [-58.047276819231591,
                                -
                                34.902872281959169
                            ],
                            [-58.047238727051628,
                                -
                                34.903049993007386
                            ],
                            [-58.047672302048746,
                                -
                                34.903411029723578
                            ],
                            [-58.048783513571735,
                                -
                                34.903123860744692
                            ],
                            [-58.050254955341785,
                                -
                                34.902761923386734
                            ],
                            [-58.049806531527302,
                                -
                                34.901396757716995
                            ],
                            [-58.048430020133743,
                                -
                                34.901723863969188
                            ],
                            [-58.048344606925092,
                                -
                                34.901448819257638
                            ],
                            [-58.049730102058611,
                                -
                                34.901118001609447
                            ],
                            [-58.049565805644136,
                                -
                                34.900621498695507
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "renabap_id": 9,
                "nombre_barrio": "Urquiza",
                "provincia": "Buenos Aires",
                "departamento": "Avellaneda",
                "localidad": "Dock Sud",
                "cantidad_familias_aproximada": 110.0,
                "cantidad_viviendas_aproximadas": 100.0,
                "decada_de_creacion": "Década 1990",
                "anio_de_creacion": null,
                "energia_electrica": "Conexión a la red con medidor comunitario",
                "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                "agua_corriente": "Conexión irregular a la red de agua",
                "cocina": "Gas en garrafa",
                "calefaccion": "Energía eléctrica",
                "situacion_dominial": "Ninguna seguridad en la tenencia",
                "clasificacion_barrio": "Villa",
                "superficie_m2": 13299
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-58.349353383369866,
                                -
                                34.643151798913252
                            ],
                            [-58.34943945523009,
                                -
                                34.642870672943729
                            ],
                            [-58.349412360474595,
                                -
                                34.642782469944727
                            ],
                            [-58.349135504888451,
                                -
                                34.642837349603859
                            ],
                            [-58.348949130732876,
                                -
                                34.642879249672347
                            ],
                            [-58.348582774327582,
                                -
                                34.642926108310341
                            ],
                            [-58.34825159053257,
                                -
                                34.642981905326117
                            ],
                            [-58.347874344346188,
                                -
                                34.643032401230407
                            ],
                            [-58.347179492516489,
                                -
                                34.64332160797089
                            ],
                            [-58.346694509795057,
                                -
                                34.643670579767246
                            ],
                            [-58.346144252804251,
                                -
                                34.644276212934727
                            ],
                            [-58.345858780478103,
                                -
                                34.644588805858731
                            ],
                            [-58.345464906259643,
                                -
                                34.645121771756052
                            ],
                            [-58.345198705920303,
                                -
                                34.645372556821471
                            ],
                            [-58.344527472160287,
                                -
                                34.646199486036956
                            ],
                            [-58.344695158695352,
                                -
                                34.646292499907481
                            ],
                            [-58.345523823300624,
                                -
                                34.645646843524801
                            ],
                            [-58.345345045961935,
                                -
                                34.645435276952583
                            ],
                            [-58.345315853066907,
                                -
                                34.645372706325851
                            ],
                            [-58.345371870177246,
                                -
                                34.645323184561626
                            ],
                            [-58.346089382241004,
                                -
                                34.644786387930587
                            ],
                            [-58.346389033641543,
                                -
                                34.645063587977909
                            ],
                            [-58.3464256161934,
                                -
                                34.645010367852635
                            ],
                            [-58.34611580754089,
                                -
                                34.644676312996879
                            ],
                            [-58.346043764186533,
                                -
                                34.644571722548328
                            ],
                            [-58.346239534824164,
                                -
                                34.644405187147449
                            ],
                            [-58.346363592965211,
                                -
                                34.644242763793521
                            ],
                            [-58.34662738275653,
                                -
                                34.64397507546704
                            ],
                            [-58.346914690261102,
                                -
                                34.643701491370955
                            ],
                            [-58.346966360391349,
                                -
                                34.643658743924007
                            ],
                            [-58.347235200826525,
                                -
                                34.643500912278135
                            ],
                            [-58.347562088065182,
                                -
                                34.643335030250135
                            ],
                            [-58.347972984342917,
                                -
                                34.643189799080268
                            ],
                            [-58.348182318789178,
                                -
                                34.643164742199701
                            ],
                            [-58.348496201206409,
                                -
                                34.643144316369892
                            ],
                            [-58.348898368804257,
                                -
                                34.643134997696052
                            ],
                            [-58.349353383369866,
                                -
                                34.643151798913252
                            ]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "renabap_id": 10,
                "nombre_barrio": "Hijos de Malvinas",
                "provincia": "Buenos Aires",
                "departamento": "La Plata",
                "localidad": "José Melchor Romero",
                "cantidad_familias_aproximada": 121.0,
                "cantidad_viviendas_aproximadas": 110.0,
                "decada_de_creacion": "Década 2000",
                "anio_de_creacion": null,
                "energia_electrica": "Conexión irregular a la red",
                "efluentes_cloacales": "Desagüe sólo a pozo negro/ciego u hoyo",
                "agua_corriente": "Conexión irregular a la red de agua",
                "cocina": "Gas en garrafa",
                "calefaccion": "Otro / vacío",
                "situacion_dominial": "Ninguna seguridad en la tenencia",
                "clasificacion_barrio": "Asentamiento",
                "superficie_m2": 37407
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [-58.016377138478845,
                                -
                                34.947557804040365
                            ],
                            [-58.017466928654095,
                                -
                                34.946774495420478
                            ],
                            [-58.015387234557323,
                                -
                                34.944847823055788
                            ],
                            [-58.014372455281034,
                                -
                                34.945643370148005
                            ],
                            [-58.014560131317403,
                                -
                                34.945817759385342
                            ],
                            [-58.014528575169692,
                                -
                                34.945855958932569
                            ],
                            [-58.016377138478845,
                                -
                                34.947557804040365
                            ]
                        ]
                    ]
                ]
            }
        }]
    }]
}


module.exports = ajvInstance.compile(schema);