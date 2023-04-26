const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hola mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta`);
logger.warn(`Tirando Warnings como campeones`);
logger.error(`Algo no está bien`);