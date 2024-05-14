const express = require("express");
const router = express.Router(); 

const {getPublicaciones, newPublicacion} = require("../controllers/publicacionesController");



router.get("/Publicaciones", getPublicaciones)//Ruta Consultar Publicaciones
      .post("/CrearPublicacion", newPublicacion)//Ruta Crear Publicacion

 

module.exports=router;