const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');

const miembrosRouter = require('./miembros.route');
const authsRouter = require('./auth.router');



function routerApi(app){
    const router =express.Router();
    app.use('/api/v1', router)
    router.use('/miembros', miembrosRouter);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
    router.use('/auth', authsRouter);

}

module.exports= routerApi;
