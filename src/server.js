const connectDatabase = require("./config/database.js");
const app = require("./app.js")

//Setting archivo de configuración
if(process.env.NODE_ENV==="PRODUCTION") require('dotenv').config({path:'back/config/config.env'})

//Conectar base de datos Mongo
connectDatabase();

//Inicio el server
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})