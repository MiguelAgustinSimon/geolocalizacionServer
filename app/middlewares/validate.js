
var localize = require('ajv-i18n');
const geojsonSchema=require('../models/geojsonSchema');
const geojsonSchema2=require('../models/geoJsonSchema2');
const geojsonSchema3 = require('../models/geojsonSchema3');
const geojsonSchema4 = require('../models/geojsonSchema4');
const jsonCol = require('../models/jsonCol');
const categoriaSchema=require('../models/categoria');

const { Sequelize} = require("sequelize");
const Op = Sequelize.Op;


 const validateDto= (ajvValidate)=>{
  //  obtenerPromedioLatitud=(arrJson:Json[]):number=>{
  return (req, res, next) => {
    const valid = ajvValidate(req.body);
    if (!valid){
      const errors = ajvValidate.errors;
      localize.es(errors); //pasamos los errores a idioma español
      res.status(400).json(errors);
    }
    next();
  };
}


const VerificarEsquemas =async (req, res, next) => {
  try {
    const {nombreArchivo}=req.params;
    let erroresGral=`El documento debe contener AL MENOS UNO de los siguientes elementos: `;
    let errorEsquema1;
    let errorEsquema2;
    let errorEsquema3;
    let errorEsquema4;
    const valid = geojsonSchema(req.body);
    if (!valid){
      errorEsquema1 = geojsonSchema.errors;
      localize.es(errorEsquema1); //pasamos los errores a idioma español

      const valid2 = geojsonSchema2(req.body);
      if (!valid2){
        errorEsquema2 = geojsonSchema2.errors;
        localize.es(errorEsquema2); //pasamos los errores a idioma español

        const valid3 = geojsonSchema3(req.body);
        if (!valid3){
          errorEsquema3 = geojsonSchema3.errors;
          localize.es(errorEsquema3); //pasamos los errores a idioma español

          const valid4 = geojsonSchema4(req.body);
          if (!valid4){
            errorEsquema4 = geojsonSchema4.errors;
            localize.es(errorEsquema4); //pasamos los errores a idioma español
            
            erroresGral=`${erroresGral} ${errorEsquema1[0].message} | ${errorEsquema2[0].message} | ${errorEsquema3[0].message} | ${errorEsquema4[0].message}`
            
            //637a69aff875420b2141e408 ID JSON MODEL
            GuardarDatosBitacora(nombreArchivo,'637a9dc865c8913868af208b', 'VerificarEsquemas',false,erroresGral);
            
            res.status(400).json(erroresGral);
            
          }
        }
      }
    }
    next();
    } catch (error) {
      return res.status(403).json({message: "Ocurrio un error al validar.", error: error})
    }
};

const GuardarDatosBitacora = async (nombreArchivo,categoriaId,nombre,estado,observacion,req, res) => {
  const categorias= await categoriaSchema.findById(categoriaId);
  const data= new jsonCol({
    nombreArchivo,
    categorias:categorias._id,
    nombre,
    estado,
    observacion
  })
  try {
    console.log(data);
    const savedJson=await data.save();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports=VerificarEsquemas;

