const usuarios = require("../models/usersModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler=require("../utils/errorHandler");


//Crear un usuarios
exports.newUsers=catchAsyncErrors(async (req, res, next) => {
    const newUser = await usuarios.create(req.body);
    res.status(201).json({
        success: true,
        message: "Usuario creado correctamente",
        newUser
    })
});

//consultar todos los usuarios
exports.getUsuarios=catchAsyncErrors(async (req, res, next) => {
    const listUsers = await usuarios.find(); //Consulto y capturo los usuario en la base de datos
    res.status(200).json({
        success:true,
        listUsers
    });
});
//Consultar los usuarios por ID
exports.getUsuario=catchAsyncErrors(async (req, res, next) => {
    const user = await usuarios.findById(req.params.id); //consulto el usuario por ID
    if (!user) {
        return next(new ErrorHandler("Usuario no encontrado", 404))
    };

    res.status(200).json({
        success:true,
        message: "Información sobre Usuario: ",
        user
    })
});


//Consultar Usuario por Rol
exports.getUserRol=catchAsyncErrors(async (req, res, next) => {
    const usersRol = await usuarios.find({'rol': req.params.rol});
    if (usersRol.length === 0) {
        return next(new ErrorHandler("Usuarios no encontrados", 404))
    };
    res.status(200).json({
        success:true,
        usersRol,
    })

});

//Actualizar Usuarios
exports.updateUsers=catchAsyncErrors(async (req, res, next) =>{
    const user = await usuarios.findById(req.params.id)
    if (!user) {
        return next(new ErrorHandler("Usuario no encontrado", 404))
    };// Verifico la existencia del usuario


    await usuarios.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //Valido solo los atributos nuevos o actualizados
        runValidators: true
    });

    res.status(200).json({
        success: true,
        message: "Usuario actualizados correctamente",
        user
    })


});


exports.deleteUser=catchAsyncErrors( async (req, res, next) => {
    const usuario = await usuarios.findById(req.params.id);
    if (!usuario) {
        return next(new ErrorHandler("Usuario no encontrado", 404))
    };// Verifico la existencia del usuario

    await usuarios.findByIdAndDelete(req.params.id); //Elimino el usuario

    res.status(200).json({
        success: true,
        message: "Usuario eliminado correctamente"
    })

})


