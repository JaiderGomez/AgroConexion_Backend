import express from 'express';
import bodyParser from 'body-parser'
import connectDatabase from './database/database.js'

//Conectar base de datos Mongo
connectDatabase();



const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

//app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
