const express = require('express');
const router = express.Router();

//Funciones del controller
const {getUsuarios, newUsers, getUsuario, getUserRol, updateUsers, deleteUser, loginUser, logOut, forgotPassword, resetPassword} = require("../controllers/usersController");

//Privacidad
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/privacidad");


router.get("/usuarios", getUsuarios) //Consultar todos los usuarios //isAuthenticatedUser, authorizeRoles("admin")
      .post("/crearUsuario", newUsers) //crear un nuevo usuario
      .get("/usuario", isAuthenticatedUser, getUsuario) // Consultar usuario por ID
      .patch("/usuario/:id", isAuthenticatedUser, updateUsers) //Actualizar usuario
      .get("/usuarios/:rol", isAuthenticatedUser, authorizeRoles("admin"), getUserRol)// Consultar Usuarios por rol
      .delete("/usuario/:id", isAuthenticatedUser, authorizeRoles("admin"), deleteUser)// Eliminar Usuario
      .post("/login", loginUser)//Login Usuario
      .get("/logout", isAuthenticatedUser, logOut)//Cerrar Sesión
      .post("/recuperarclave", forgotPassword)//Recuperar Contraseña
      .post("/cambiodeclave/:token", resetPassword)//Cambio de  Contraseña
      




module.exports=router;