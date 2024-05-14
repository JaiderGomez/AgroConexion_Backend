const express = require("express");
const router = express.Router(); 

const {getPublicaciones, newPublicacion, getPublicacionID} = require("../controllers/publicacionesController");



router.get("/Publicaciones", getPublicaciones)//Ruta Consultar Publicaciones
      .post("/CrearPublicacion", newPublicacion)//Ruta Crear Publicacion
      .get("/Publicacion/:id", getPublicacionID)//Ruta para Consultar Publicacion por ID

 

module.exports=router;