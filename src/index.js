const express = require('express');

const app= express();
const port =3000

app.get('/', (req, res) =>{
    res.send('hola');
});

app.get('/nuevaruta', (req, res) =>{
    res.send('hola soy un nuevo endpoint');
});

app.get('/products', (req, res) =>{
    res.json([{
        nombre: "producto 1",
        precio: 2000

    }]);
});

app.get('/products/:id', (req, res) =>{
    const {id} = req.params;
    res.json({
        nombre: "producto 1",
        precio: 2000

    });
});


app.listen(port, ()=>{
    console.log(`servidor corriendo ${port}`);
});