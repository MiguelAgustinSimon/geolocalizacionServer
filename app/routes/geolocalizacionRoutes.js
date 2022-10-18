const { Router } = require("express");
const validate=require('../middlewares/validate');
const geojson=require('../schema/geojson');
const userSchema=require('../schema/user');
const userController = require('../controllers/user-controller');

const router = Router();



//Aca genero las rutas que llamo del controller

//Rutas GET
//https://www.youtube.com/watch?v=9Pc8LGN4uug&ab_channel=productioncoder
//https://ajv.js.org/guide/getting-started.html
router.post('/register', validate(userSchema), userController.register);

module.exports = router;