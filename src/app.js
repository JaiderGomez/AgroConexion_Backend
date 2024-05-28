const express = require('express');
const bodyParser = require('body-parser');

//Importo rutas
const rutasPublicaciones = require("./routes/publicacionesRutas.js");
const rutasUsuarios = require("./routes/usuariosRutas.js")

//Express
const app = express();

//Setting archivo de configuración
if(process.env.NODE_ENV!=="PRODUCTION") require('dotenv').config({path:'src/config/config.env'})

app.use(bodyParser.json());

//Rutas Api
app.use('/api', rutasPublicaciones, rutasUsuarios);


module.exports=app;