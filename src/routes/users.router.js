const express = require('express');
const router = express.Router();
const UserService = require('./../services/users.service')

const service = new UserService();

router.get('/', async (req, res, next) =>{
    try{
        const users =  await service.find();
        if (users) res.json(users);
    } catch(error) {
        next(error);
    }
});

router.get('/:_id', async(req, res, next) =>{
    try{
        const {_id} = req.params;
        const user = await service.findOne(_id);
        res.json(user);
    } catch (err) {
        next(err);
    }
});


router.post('/', (req, res) =>{
    const body = req.body;
    const newUser = service.create(body);
    res.status(201).json(newUser);
});

router.patch('/:id', async (req, res, next) =>{
    try {
        const { id } = req.params
        const body = req.body;
        const user= await service.update(id,body);
        res.json(user);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', (req, res, next) =>{
    try {
        const { id } = req.params;
        const rta = service.delete(id);
        res.json(rta);
    } catch (err) {
        next(err);
    }
    
});

module.exports = router;

