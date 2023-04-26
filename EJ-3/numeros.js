const Logger = require('logplease');
const logger = Logger.create('utils');

exports.esPar =(a) => {
    if (a %2 === 0) {
        return true
    } else {
         return false
    }
}; 

exports.esPar1 =(a) => {
    if (a %2 === 0) { 
        return logger.info(`El numero es par`)
    } else {
        return logger.error(`El número no es par`)
    }
};