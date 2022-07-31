const express = require('express');
const routerApi =require('./routes/index');
const cors = require('cors');
const {chackApiKey} = require('./middlewares/auth.handler')
const {logErrors, errorHandler, BoomErrorHandler} =require('./middlewares/error.handler');

const app= express();

app.use(express.json());
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options ={
    origin: (origin, callback) => {
        if (whitelist.includes(origin)|| !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}

app.use(cors(options));

require('./utils/auth');

app.get('/', (req, res) =>{
    res.send('hola');
});

app.get('/nuevaruta', chackApiKey, (req, res) =>{
    res.send('hola soy un nuevo endpoint');
});
routerApi(app);

app.use(logErrors);
app.use(BoomErrorHandler);
app.use(errorHandler);


module.exports= app;
