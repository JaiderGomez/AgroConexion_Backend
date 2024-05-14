const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require("./database/database.js");
const rutasPublicaciones = require("./routes/publicacionesRutas.js");



//Conectar base de datos Mongo
connectDatabase();



const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/api', rutasPublicaciones);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
