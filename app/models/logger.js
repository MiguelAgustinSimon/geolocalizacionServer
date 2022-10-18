const { getLogger, configure } =require("log4js");

configure({
    appenders: {
        everything: { type: "dateFile", filename: "./src/logs/ProductScope.log", pattern: "yyyy-MM-dd-hh" },
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