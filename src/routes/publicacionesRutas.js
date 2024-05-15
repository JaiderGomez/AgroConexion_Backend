const express = require("express");
const router = express.Router(); 

const {getPublicaciones, newPublicacion, getPublicacionID, deletePublicacion} = require("../controllers/publicacionesController");



router.get("/Publicaciones", getPublicaciones) //Ruta Consultar Publicaciones
      .post("/CrearPublicacion", newPublicacion) //Ruta Crear Publicacion
      .get("/Publicacion/:id", getPublicacionID) //Ruta para Consultar Publicacion por ID
      .delete("/Publicacion/:id", deletePublicacion) //Ruta para eliminar una  Publicacion por ID

 

module.exports=router;