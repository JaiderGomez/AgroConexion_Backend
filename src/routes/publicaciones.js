import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router(); 
import {getPublicaciones} from './controllers/publicaciones.js'


//router.route('/publicaciones').get(getPublicaciones) //Ruta Consultar Publicaciones

export default router