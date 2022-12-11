const express = require("express");
const db = require("../config/db.config.js");
var cors = require("cors");
require('express-async-errors');
const bodyParser=require('body-parser');

class Server {
    constructor() {
      
        this.app = express();
    
        if (process.env.STAGE == "PROD") {
            this.port = process.env.PORT || 3000;
        } else {
            this.port = 3000;
        }
    
        //Connect to database
        this.dbConnection();

        //middlewares
        this.middlewares();

        //App routes
        this.routes();
    }

    async dbConnection() {
        try {
          await db();
        } catch (error) {
          throw new Error(error);
        }
    }

    
  middlewares() {
    // CORS
    this.app.use(cors());

    //Body lecture
    this.app.use(bodyParser.json({limit: '50mb'}));

    this.app.use(bodyParser.urlencoded({ 
      limit: '50mb',
      extended: true,
      parameterLimit:50000 
    }));

    const router = require('express').Router();
    this.app.use("/", router);
   
    // this.app.use(
    //   bodyParser.json({
    //     limit:'20mb'
    //   })
    // )
    // this.app.use(
    //   bodyParser.urlencoded({
    //     limit:'20mb',
    //     extended:true
    //   })
    // )

    this.app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.end();
    });
  }

    routes() {
        this.app.use("/api", require("../routes/geolocalizacionRoutes"));
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en puerto ${this.port}`);
        });
      }


}
module.exports = Server;