const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.json([{
        nombre: "categoria1",
        descripcion: "esta es una categoria de ejemplo"

    }]);
});

router.get('/filter', (req, res) => {
    res.send('soy un filter');
});

router.get('/:id', (req, res) =>{
    const {id} = req.params;
    res.json({
        idCategorie: id,
        nombre: "categoria1",
        descripcion: "esta es una categoria de ejemplo"

    });
});

module.exports = router;

