const usuarios = require("../models/usersModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler=require("../utils/errorHandler");
const tokenEnviado = require("../utils/jwtToken");

//Crear un usuarios
exports.newUsers=catchAsyncErrors(async (req, res, next) => {
    const newUser = await usuarios.create(req.body);
    
    tokenEnviado(newUser,201,res)
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


//Eliminar usuarios
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

//Iniciar Sesión - Login
exports.loginUser = catchAsyncErrors(async(req, res, next)=>{
    const { email, password} =  req.body;

    //revisar que los campos están completos
    if (!email || !password){
        return next(new ErrorHandler("Por favor ingrese email & Contraseña", 400))
    }

    //Buscar al usuario en base de datos
    const user = await usuarios.findOne({email}).select("+clave")
    if(!user){
        return next(new ErrorHandler("Email o contraseña inválidos", 401))
    }

    //Comparar contraseñas, verificar si está bien
    const contrasenaOK = await user.compararPass(password);

    if (!contrasenaOK){
        return next(new ErrorHandler("Contraseña invalida",401))
    }

    tokenEnviado(user,200,res)

})


