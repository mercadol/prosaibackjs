const express = require('express');
const router = express.Router();
const MiembroService= require('./../services/miembros.service');

const service = new MiembroService();

router.get('/', async(req, res, next) =>{
    try{
        const miembros =  await service.find();
        if (miembros) res.json(miembros);
    } catch(error) {
        next(error);
    }
});

router.get('/:_id', async(req, res, next) =>{
    try{
        const {_id} = req.params;
        const miembro = await service.findOne(_id);
        res.json(miembro);
    } catch (err) {
        next(err);
    }

});

router.get('/filter', (req, res) => {
    res.send('soy un filter');
});

router.post('/', (req, res) =>{
    const body = req.body;
    const newMiembro = service.create(body);
    res.status(201).json(newMiembro);
});

router.patch('/:_id', async (req, res, next) =>{
    try {
        const { _id } = req.params
        const body = req.body;
        const miembro= await service.update(_id,body);
        res.json(miembro);
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
