const express = require('express');
const router = express.Router();

const {getUsuarios, newUsers, getUsuario, getUserRol, updateUsers, deleteUser, loginUser, logOut} = require("../controllers/usersController");



router.get("/usuarios", getUsuarios) //Consultar todos los usuarios
      .post("/crearUsuario", newUsers) //crear un nuevo usuario
      .get("/usuario/:id", getUsuario) // Consultar usuario por ID
      .patch("/usuario/:id", updateUsers) //Actualizar usuario
      .get("/usuarios/:rol", getUserRol)// Consultar Usuarios por rol
      .delete("/usuario/:id", deleteUser)// Eliminar Usuario
      .post("/login", loginUser)//Login Usuario
      .get("/logout", logOut)//Cerrar Sesión




module.exports=router;