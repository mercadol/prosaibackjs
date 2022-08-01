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

function chechkAdminRole(req, res, next){
    const user = req.user;
    if (user.role === 'Admin'){
        next();
    } else {
        next(boom.unauthorized());
    }
}

function chechkRoles (...roles){
    return (req, res, next)=>{
        const user = req.user;
        if(roles.includes(user.role)){
            next();
        } else {
            next (boom.unauthorized());
        }
    }
}

module.exports = { chackApiKey, chechkAdminRole, chechkRoles }
