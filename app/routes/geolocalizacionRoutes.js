const { Router } = require("express");
const verificarEsquemas=require('../middlewares/validate');



const router = Router();
const {
    getBitacora,
    validarJsonSchema,
    getCategorias
}=require("../controllers/geolocalizacionController");



//Aca genero las rutas que llamo del controller

//Rutas GET
//https://www.youtube.com/watch?v=9Pc8LGN4uug&ab_channel=productioncoder
//https://ajv.js.org/guide/getting-started.html
router.get('/getCategorias', getCategorias);
router.get('/getBitacora', getBitacora);



//Rutas POST
router.post('/validarJsonSchema', verificarEsquemas, validarJsonSchema);

module.exports = router;