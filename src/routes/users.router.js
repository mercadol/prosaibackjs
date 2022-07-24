const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.json([{
        nombre: "leo",
        apellido: "mercado",
        coreo: "micorreo@ejemplo.com"

    }]);
});

router.get('/filter', (req, res) => {
    res.send('soy un filter');
});

router.get('/:id', (req, res) =>{
    const {id} = req.params;
    res.json({
        userid: id,
        nombre: "leo",
        apellido: "mercado",
        coreo: "micorreo@ejemplo.com"

    });
});

module.exports = router;

