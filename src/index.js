const express = require('express');
const routerApi =require('./routes/index')


const app= express();
const port =3000

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('hola');
});

app.get('/nuevaruta', (req, res) =>{
    res.send('hola soy un nuevo endpoint');
});
routerApi(app);


app.listen(port, ()=>{
    console.log(`servidor corriendo ${port}`);
});