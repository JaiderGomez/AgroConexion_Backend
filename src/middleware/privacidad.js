const User = require("../models/usersModel")
const jwt=require("jsonwebtoken")
const ErrorHandler=require ("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors")

//Verificar si el usuario esta autenticado, (existencia y veracidad del token)
exports.isAuthenticatedUser= catchAsyncErrors(async (req, res, next)=>{
    const { token } = req.cookies;  //capturo si el token mediante las cookies

    //Verifico si existe el token
    if(!token){
        return next(new ErrorHandler("Debe iniciar sesión para acceder a este recurso", 401))
    }

    //verifico la autenticidad del token y el usuario
    const decodificada = jwt.decode(token, process.env.JWT_SECRET)
    req.user = await User.findById(decodificada.id);

    next()  //Autorización

})

//Capturo el rol del usuario
exports.authorizeRoles= (...roles) =>{
    return (req, res, next)=>{
        if(!roles.includes(req.user.rol)){
            return next(new ErrorHandler(`Rol (${req.user.rol}) no esta autorizado a entrar a esta area`,403))
        }
        next()
    }
}