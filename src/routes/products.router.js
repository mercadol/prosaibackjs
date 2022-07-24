const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.json([{
        nombre: "producto 1",
        precio: 2000

    }]);
});

router.get('/filter', (req, res) => {
    res.send('soy un filter');
});

router.get('/:id', (req, res) =>{
    const {id} = req.params;
    if (id==='999'){
        res.status(404).json({
            message:"no encontrado"
        })
    } else{
        res.json({
            nombre: "producto 1",
            precio: 2000
    
        });
    }
});

router.post('/', (req, res) =>{
    const body = req.body;
    res.status(201).json({
        message: 'created',
        data:body
    });
});

router.patch('/:id', (req, res) =>{
    const { id } = req.params
    const body = req.body;
    res.json({
        message: 'update',
        data:body,
        id
    });
});

router.delete('/:id', (req, res) =>{
    const { id } = req.params
    res.json({
        message: 'delete',
        id
    });
});

module.exports = router;
