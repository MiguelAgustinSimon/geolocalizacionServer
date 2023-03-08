
var ajv = require('ajv-i18n');
const geojsonSchema=require('../models/geojsonSchema');
const geojsonSchema2=require('../models/geoJsonSchema2');
const geojsonSchema3 = require('../models/geojsonSchema3');
const geojsonSchema4 = require('../models/geojsonSchema4');
const geojsonSchema5 = require('../models/geojsonSchema5');
const jsonCol = require('../models/jsonCol');
const categoriaSchema=require('../models/categoria');

const { Sequelize} = require("sequelize");
const Op = Sequelize.Op;
let esValido=false;
let errorNumberValidate=false; //(esta en ajv-instance)
let textoErrorNumberValidate="";


const VerificarEsquemas =async (req, res, next) => {

    const {nombreArchivo}=req.params;
    errorNumberValidate=false; 
    textoErrorNumberValidate="";
    esValido=false;
    let erroresGral=`El documento debe contener AL MENOS UNO de los siguientes elementos: `;

   
    //verificamos el primer esquema
    await verificarEsquema(geojsonSchema(req.body),1);
    if(esValido==false){
        //verificamos el segundo esquema
        await verificarEsquema(geojsonSchema2(req.body),2);
    }
    if(esValido==false){
      //verificamos el tercer esquema
      await verificarEsquema(geojsonSchema3(req.body),3);
    }
    if(esValido==false){
      //verificamos el cuarto esquema
      await verificarEsquema(geojsonSchema4(req.body),4);
    }
    if(esValido==false){
      //verificamos el quinto esquema
      await verificarEsquema(geojsonSchema5(req.body),5);
    }

    //console.log(`es valido?? - ${esValido}`);
    if(esValido!=true){
      //erroresGral=`${erroresGral} ${errorEsquema1[0].message} | ${errorEsquema2[0].message} | ${errorEsquema3[0].message} | ${errorEsquema4[0].message}`
      
      //verificamos si el error es del nro post coma y mostramos el mensaje
      if(errorNumberValidate==true)
      {
        erroresGral=textoErrorNumberValidate;
      }else{
        erroresGral=`${erroresGral} ${this.errorEsquema1} | ${this.errorEsquema2} | ${this.errorEsquema3} | ${this.errorEsquema4} | ${this.errorEsquema5}`;
      }
      res.status(400).json(erroresGral);

     //637a69aff875420b2141e408 ID JSON MODEL
      await GuardarDatosBitacora(nombreArchivo,'637a9dc865c8913868af208b', 'VerificarEsquemas',false,erroresGral);
    }
    next();
    
};

const verificarEsquema=async(esquema,queEsquema)=>{
  //vemos si es valido

  //console.log(`llego verificarEsquema: ${esquema} / ${queEsquema}`);
  if(esquema){
    return (esValido=true);
  }else{
    switch (queEsquema) {
      case 1:
        await agregarMensajeError(1)
      break;
      case 2:
        await agregarMensajeError(2)
      break;
      case 3:
        await agregarMensajeError(3)
      break;
      case 4:
        await agregarMensajeError(4)
      break;
      case 5:
        await agregarMensajeError(5)
      break;
    }
  }
}

const agregarMensajeError=async(queEsquema)=>{
    switch (queEsquema) {
      case 1:
        ajv.es(geojsonSchema.errors); //pasamos los errores a idioma español
        this.errorEsquema1=`${geojsonSchema.errors[0].message}`;
        if(geojsonSchema.errors[0].typeof!=null){//verificamos si el error es de los nros post coma
          errorNumberValidate=true;
          textoErrorNumberValidate=this.errorEsquema1;
        }
      break;

      case 2:
        ajv.es(geojsonSchema2.errors); //pasamos los errores a idioma español
        this.errorEsquema2=`${geojsonSchema2.errors[0].message}`;
        if(geojsonSchema2.errors[0].typeof!=null){//verificamos si el error es de los nros post coma
          errorNumberValidate=true;
          textoErrorNumberValidate=this.errorEsquema2;
        }
      break;

      case 3:
        ajv.es(geojsonSchema3.errors); //pasamos los errores a idioma español
        this.errorEsquema3=`${geojsonSchema3.errors[0].message}`;
        if(geojsonSchema3.errors[0].typeof!=null){//verificamos si el error es de los nros post coma
          errorNumberValidate=true;
          textoErrorNumberValidate=this.errorEsquema3;
        }
      break;

      case 4:
        ajv.es(geojsonSchema4.errors); //pasamos los errores a idioma español
        this.errorEsquema4=`${geojsonSchema4.errors[0].message}`;
        if(geojsonSchema4.errors[0].typeof!=null){//verificamos si el error es de los nros post coma
          errorNumberValidate=true;
          textoErrorNumberValidate=this.errorEsquema4;
        }
      break;

      case 5:
        ajv.es(geojsonSchema5.errors); //pasamos los errores a idioma español
        this.errorEsquema5=`${geojsonSchema5.errors[0].message}`;
        if(geojsonSchema5.errors[0].typeof!=null){//verificamos si el error es de los nros post coma
          errorNumberValidate=true;
          textoErrorNumberValidate=this.errorEsquema5;
        }
      break;
    }
}

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

const entro=(donde)=>{
  console.log(`entro ${donde}`);
}


module.exports=VerificarEsquemas;



