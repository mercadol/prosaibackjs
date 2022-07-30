const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 3000;


mongoose.Promise=global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/prosaiapi', { useNewUrlParser: true })
    .then(()=>{
        console.log('La conexion a la base de datos se a realizado bien!!');
        //creamos el servidor y ponemos las peticiones https
        app.listen(port,() =>{
        console.log('servidor corriendo en http://localhost:'+port);
        });
    });
