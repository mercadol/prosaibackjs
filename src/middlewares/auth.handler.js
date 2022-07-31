const boom = require('@hapi/boom');
const {config} = require('./../config/config')

function chackApiKey(req, res, next) {
    const apiKey = req.headers['api'];
    if (apiKey===config.APIkEY){
        next();
    } else {
        next(boom.unauthorized());
    }
}

module.exports = { chackApiKey }
