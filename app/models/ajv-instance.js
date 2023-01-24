const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const addErrors = require('ajv-errors');
const addKeyword=require('ajv-keywords')
const ajvInstance = new Ajv({ allErrors: true });
addFormats(ajvInstance);
addKeyword(ajvInstance, "regexp");
addErrors(ajvInstance);

module.exports = ajvInstance;