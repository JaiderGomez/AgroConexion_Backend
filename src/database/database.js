import mongoose from "mongoose";

const mongoUrl = "mongodb://localhost:27017/agroconexion";

const connectDatabase = () => {
    mongoose.connect(mongoUrl)
    .then(con => {
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con => {
        console.log(`No se logro la conexion con la base de datos`)
    })
}

export default connectDatabase;