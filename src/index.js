const express = require('express');
const routerApi =require('./routes/index')
const {logErrors, errorHandler} =require('./middlewares/error.handler');

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

app.use(logErrors);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`servidor corriendo ${port}`);
});