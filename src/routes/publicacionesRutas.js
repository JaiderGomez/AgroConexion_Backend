const express = require("express");
const router = express.Router(); 

const {getPublicaciones, newPublicacion, getPublicacionID, deletePublicacion, updatePublicacion} = require("../controllers/publicacionesController");



router.get("/publicaciones", getPublicaciones) //Ruta Consultar Publicaciones
      .post("/crearPublicacion", newPublicacion) //Ruta Crear Publicacion
      .get("/publicacion/:id", getPublicacionID) //Ruta para Consultar Publicacion por ID
      .delete("/publicacion/:id", deletePublicacion) //Ruta para eliminar una  Publicacion por ID
      .patch("/publicacion/:id", updatePublicacion) //Ruta para Actualizar una  Publicacion por ID

 

module.exports=router;