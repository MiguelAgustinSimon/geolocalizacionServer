const mongoose=require('mongoose');

const DB_URI= `mongodb+srv://agustinsimon07:Agustin18Simon13@geolocalizacionbd.sgnnuya.mongodb.net/geolocalizacionDatabase`;

module.exports=()=>{
    const connect=()=>{
        mongoose.connect(
            DB_URI,
            {
                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology:true
            },
            (err)=>{
                if(err){
                    console.log(`DB Error: ${err}`);
                }
                else{
                    console.log(`Database Online`);
                }
            }
        )
    }
    connect();
}

//Conectar a MongoDB: https://studio3t.com/knowledge-base/articles/connect-to-mongodb-atlas/

//VER: https://www.youtube.com/watch?v=fZgJHJO81dw&ab_channel=FaztCode
//Paso 1: https://www.youtube.com/watch?v=iN9wogzhjMU&ab_channel=LeiferMendez
//Paso 2:https://www.youtube.com/watch?v=6FoKDYDJ4V8&ab_channel=LeiferMendez

//mongodb+srv://agustinsimon07:Agustin18Simon13@geolocalizacionbd.sgnnuya.mongodb.net/geolocalizacionDatabase