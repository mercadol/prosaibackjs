const express = require('express');

const rolesRouter = require('./roles.router');
const usersRouter = require('./users.router');
const miembrosRouter = require('./miembros.route');
const authsRouter = require('./auth.router');



function routerApi(app){
    const router =express.Router();
    app.use('/api/v1', router);
    router.use('/miembros', miembrosRouter);
    router.use('/roles', rolesRouter);
    router.use('/users', usersRouter);
    router.use('/auth', authsRouter);

}

module.exports= routerApi;
