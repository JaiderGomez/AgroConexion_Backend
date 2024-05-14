const express = require("express");
const router = express.Router(); 

const {getPublicaciones} = require("../controllers/publicacionesController");



router.get("/Publicaciones", getPublicaciones)//Ruta Consultar Publicaciones
    
 

module.exports=router;