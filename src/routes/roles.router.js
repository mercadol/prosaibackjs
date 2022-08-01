const express = require('express');
const passport = require('passport');
const router = express.Router();
const RoleService= require('./../services/roles.service');
const service = new RoleService();
const {chechkRoles} = require('./../middlewares/auth.handler');


router.get('/', async (req, res, next) =>{
    try{
        const roles =  await service.find();
        if (roles) res.json(roles);
    } catch(error) {
        next(error);
    }
});

router.get('/:_id', async(req, res, next) =>{
    try{
        const {_id} = req.params;
        const role = await service.findOne(_id);
        res.json(role);
    } catch (err) {
        next(err);
    }

});

router.get('/filter', (req, res) => {
    res.send('soy un filter');
});

router.post('/',
    passport.authenticate('jwt', {session:false}),
    chechkRoles('Admin'),
    (req, res) =>{
    const body = req.body;
    const newRole = service.create(body);
    res.status(201).json(newRole);
});

router.patch('/:_id', async (req, res, next) =>{
    try {
        const { _id } = req.params
        const body = req.body;
        const role= await service.update(_id,body);
        res.json(role);
    } catch (err) {
        next(err);
    }
});

router.delete('/:_id', (req, res, next) =>{
    try {
        const { _id } = req.params;
        const rta = service.delete(_id);
        res.json(rta);
    } catch (err) {
        next(err);
    }
    
});

module.exports = router;

