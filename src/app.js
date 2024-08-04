const express = require('express');
const bodyParser = require('body-parser');
const cookieParser= require("cookie-parser")
const cors = require('cors');

//Importo rutas
const rutasPublicaciones = require("./routes/publicacionesRutas.js");
const rutasUsuarios = require("./routes/usuariosRutas.js")

//Express
const app = express();

// Permitir peticiones de frontend
app.use(cors({
  origin: 'https://sena-psi.vercel.app'
}));

//Setting archivo de configuración
if(process.env.NODE_ENV!=="PRODUCTION") require('dotenv').config({path:'src/config/config.env'})

//Uso de constantes importadas
app.use(bodyParser.json());
app.use(cookieParser());

//Rutas Api
app.use('/api', rutasPublicaciones, rutasUsuarios);


module.exports=app;
