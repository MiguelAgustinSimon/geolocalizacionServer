const { Router } = require("express");
const validate=require('../middlewares/validate');

const userSchema=require('../models/user');
const geojsonSchema=require('../models/geojsonSchema');


const router = Router();
const {
    validarJsonSchema
}=require("../controllers/geolocalizacionController");



//Aca genero las rutas que llamo del controller

//Rutas GET
//https://www.youtube.com/watch?v=9Pc8LGN4uug&ab_channel=productioncoder
//https://ajv.js.org/guide/getting-started.html
router.post('/validarJsonSchema', validate(geojsonSchema), validarJsonSchema);

module.exports = router;