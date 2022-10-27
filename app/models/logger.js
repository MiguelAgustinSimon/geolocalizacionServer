const { getLogger, configure } =require("log4js");

configure({
    appenders: {
        everything: { type: "dateFile", filename: "./app/logs/geolocalizacionServer.log", pattern: "yyyy-MM-dd-hh" },
      },
      categories: {
        default: { appenders: ["everything"], level: "info" },
      },
});

const logger=getLogger();

module.exports = {
    //Aca exporto 
    logger
}