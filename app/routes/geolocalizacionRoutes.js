const { Router } = require("express");
const validate=require('../middlewares/validate');
const geojsonModel=require('../models/geojsonSchema');
const userSchema=require('../models/user');


const router = Router();
const {
    validarJsonSchema
 
}=require("../controllers/geolocalizacionController");



//Aca genero las rutas que llamo del controller

//Rutas GET
//https://www.youtube.com/watch?v=9Pc8LGN4uug&ab_channel=productioncoder
//https://ajv.js.org/guide/getting-started.html
router.post('/validarJsonSchema', validate(geojsonModel), validarJsonSchema);

module.exports = router;