
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




// const VerificarTesting =async (req, res, next) => {

//     let bodyString=JSON.stringify(req.body);
//     const valid = geojson(req.body);

//     if (!valid){
//       errorEsquema = geojson.errors;
//       ajv.es(errorEsquema); //pasamos los errores a idioma español
//       res.status(400).json(errorEsquema[0].message);
//     }
//     next();
  
// }


const VerificarEsquemas =async (req, res, next) => {

    const {nombreArchivo}=req.params;
    errorNumberValidate=false; 
    textoErrorNumberValidate="";
    esValido=false;
    let erroresGral=`El documento debe contener AL MENOS UNO de los siguientes elementos: `;
    let errorEsquema1;
    let errorEsquema2;
    let errorEsquema3;
    let errorEsquema4;
    let errorEsquema5;

    //verificamos el primer esquema
    await verificarEsquema(geojsonSchema(req.body),1);
    
    //verificamos el segundo esquema
    await verificarEsquema(geojsonSchema2(req.body),2);

    //verificamos el tercer esquema
    await verificarEsquema(geojsonSchema3(req.body),3);

    //verificamos el cuarto esquema
    await verificarEsquema(geojsonSchema4(req.body),4);

    //verificamos el quinto esquema
    await verificarEsquema(geojsonSchema5(req.body),5);

    console.log(`es valido?? - ${esValido}`);
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


    // const valid = geojsonSchema(req.body);
    // if (!valid){
    //   errorEsquema1 = geojsonSchema.errors;
    //   ajv.es(errorEsquema1); //pasamos los errores a idioma español

    //   const valid2 = geojsonSchema2(req.body);
    //   if (!valid2){
    //     errorEsquema2 = geojsonSchema2.errors;
    //     ajv.es(errorEsquema2); //pasamos los errores a idioma español

    //     const valid3 = geojsonSchema3(req.body);
    //     if (!valid3){
    //       errorEsquema3 = geojsonSchema3.errors;
    //       ajv.es(errorEsquema3); //pasamos los errores a idioma español
    //       const valid4 = geojsonSchema4(req.body);
    //       if (!valid4){
    //         errorEsquema4 = geojsonSchema4.errors;
    //         ajv.es(errorEsquema4); //pasamos los errores a idioma español

    //         const valid5 = geojsonSchema5(req.body);
    //         if (!valid5){
    //           errorEsquema5 = geojsonSchema5.errors;
    //           ajv.es(errorEsquema5); //pasamos los errores a idioma español
    //           console.log(errorEsquema5[0].message);
    //   //       erroresGral=`${erroresGral} ${errorEsquema1[0].message} | ${errorEsquema2[0].message} | ${errorEsquema3[0].message} | ${errorEsquema4[0].message}`
            
    //   //       //637a69aff875420b2141e408 ID JSON MODEL
    //   //       //GuardarDatosBitacora(nombreArchivo,'637a9dc865c8913868af208b', 'VerificarEsquemas',false,erroresGral);
            
    //   //       res.status(400).json(erroresGral);
            
    //        }else{entro(`valid5`)}
    //       }else{entro(`valid4`)}
    //      }else{entro(`valid3`)}
    //   }else{entro(`valid2`)}
    // }
    // else{
    //   entro(`valid`)
    // }
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



