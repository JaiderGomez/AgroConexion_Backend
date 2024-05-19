const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require("./database/database.js");
const rutasPublicaciones = require("./routes/publicacionesRutas.js");
const rutasUsuarios = require("./routes/usuariosRutas.js")

//Conectar base de datos Mongo
connectDatabase();


//Servidor
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


app.use(bodyParser.json());

//Rutas
app.use('/api', rutasPublicaciones, rutasUsuarios);


